import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { profile } from "@/data/site";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX = { name: 100, email: 254, message: 5000 };
const MIN_MESSAGE = 10;

// Best effort: serverless instances don't share memory, so this slows abuse rather than stopping it.
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX_SENDS = 5;
const recentSends = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  if (recentSends.size > 1000) recentSends.clear();
  const sends = (recentSends.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  const limited = sends.length >= RATE_MAX_SENDS;
  if (!limited) sends.push(now);
  recentSends.set(ip, sends);
  return limited;
}

/** Reads SMTP settings from the environment. Returns null when the required ones are missing. */
function smtpConfig() {
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null;
  const port = Number(SMTP_PORT) || 465;
  return {
    host: SMTP_HOST,
    port,
    // Port 465 uses TLS from the start; 587 and 25 upgrade with STARTTLS.
    secure: SMTP_SECURE ? SMTP_SECURE === "true" : port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  };
}

const fail = (error: string, status: number) => NextResponse.json({ ok: false, error }, { status });
const text = (value: unknown) => (typeof value === "string" ? value.trim() : "");

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    const parsed: unknown = await request.json();
    if (typeof parsed !== "object" || parsed === null) throw new Error("not an object");
    body = parsed as Record<string, unknown>;
  } catch {
    return fail("That request couldn't be read. Please try again.", 400);
  }

  // Hidden field only bots fill in. Report success so they don't retry.
  if (text(body.company)) return NextResponse.json({ ok: true });

  const name = text(body.name).replace(/[\r\n]+/g, " ");
  const email = text(body.email);
  const message = text(body.message);

  if (!name || name.length > MAX.name) return fail("Please enter your name.", 400);
  if (email.length > MAX.email || !EMAIL_PATTERN.test(email)) return fail("Please enter a valid email address.", 400);
  if (message.length < MIN_MESSAGE) return fail(`Please write at least ${MIN_MESSAGE} characters.`, 400);
  if (message.length > MAX.message) return fail(`Please keep your message under ${MAX.message} characters.`, 400);

  const smtp = smtpConfig();
  if (!smtp) {
    console.error("Contact form: SMTP_HOST, SMTP_USER and SMTP_PASS must be set");
    return fail("The contact form isn't available right now.", 503);
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) return fail("Too many messages. Please try again later.", 429);

  try {
    await nodemailer.createTransport(smtp).sendMail({
      // Most providers (Gmail included) only send from the account you log in with.
      from: process.env.CONTACT_FROM_EMAIL || { name: "Portfolio contact form", address: smtp.auth.user },
      to: process.env.CONTACT_TO_EMAIL || profile.email,
      replyTo: { name, address: email },
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
  } catch (error) {
    console.error("Contact form: SMTP send failed", error);
    return fail("Your message couldn't be sent.", 502);
  }

  return NextResponse.json({ ok: true });
}
