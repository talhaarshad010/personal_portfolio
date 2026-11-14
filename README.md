# Portfolio — Next.js

A full-stack developer portfolio with 3D hover effects and smooth interactions, built with
Next.js (App Router), React and TypeScript. No UI or animation libraries — the 3D effects are
CSS transforms plus one small pointer-tracking hook.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production build
```

Requires Node.js 18.18 or newer.

## Pages

| Route        | What's on it |
|--------------|--------------|
| `/`          | Hero (3D fanned cards), 3 featured projects as zig-zag rows + "Show all projects", About (tilting portrait), What I do, Tech stack, Experience timeline, How I work, Testimonials, FAQ accordion, Contact, Footer |
| `/projects`  | Every project as a card grid with category filters, live search and an empty state |

## Editing content

Everything you'd change lives in **`data/site.ts`** — your profile, projects, services, stack,
experience, process steps, testimonials and FAQs. The testimonials section stays hidden until
`testimonials` has an entry.

- **Projects:** add an entry to `projects`, with its public URLs in `links` and `status` set to `"Live"` or
  `"In progress"`. Set `featured: true` on the three you want on the home page.
  `category` drives the filters on `/projects`; add new categories to the `Category` type and `categories` list.
- **Screenshots:** put images in `public/projects/` and set `image: "/projects/your-file.png"`.
  Until then a neutral placeholder is shown.
- **Portrait:** put a photo in `public/` and set `profile.about.portrait`.
- **CV:** replace `public/cv.pdf`. Both Download CV buttons serve that file.

## Contact form

The form posts to `app/api/contact/route.ts`, which sends the message to you over SMTP with
[Nodemailer](https://nodemailer.com). Hitting reply on a message goes straight to the visitor.

1. Get SMTP details from your mail provider. For Gmail, turn on 2-Step Verification and create an
   App Password; your normal password won't work.
2. Copy `.env.example` to `.env.local`, fill in `SMTP_USER` and `SMTP_PASS` (and `SMTP_HOST` /
   `SMTP_PORT` if you're not using Gmail), then restart the dev server.
3. When you deploy, add the same variables in your Vercel project settings.

Without SMTP settings, the form shows visitors your email address instead.

## Theming

Colours live as CSS variables at the top of `app/globals.css`. Change `--accent` to re-theme
every button, highlight and hover state. Fonts (Manrope + Inter) are self-hosted through the
`@fontsource-variable` packages imported in `app/layout.tsx`, so no requests go to Google.

## Structure

```
app/
  layout.tsx          fonts, metadata
  page.tsx            home page
  projects/page.tsx   all projects page
  api/contact/route.ts  validates and emails contact form messages
  globals.css         design tokens + all styles
components/
  Header.tsx          sticky header, mobile menu
  Hero.tsx            hero + 3D card fan (CSS-only)
  FeaturedProjects.tsx
  About.tsx           pointer-tilt portrait
  Sections.tsx        services, stack, experience, process, testimonials
  Faq.tsx             accessible accordion
  Contact.tsx         contact card + footer
  ContactForm.tsx     contact form and its success/error states
  ProjectsBrowser.tsx filters + search grid
  Reveal.tsx          fade-up on scroll
  ProjectMedia.tsx    screenshot or placeholder
  Icons.tsx
hooks/
  usePointerTilt.ts
data/
  site.ts             all content
```

## Accessibility & motion

- All interactive elements are real links/buttons with visible focus rings.
- The FAQ uses `aria-expanded`/`aria-controls`; filter buttons use `aria-pressed`; search
  result counts are announced to screen readers.
- Visitors with **Reduce motion** enabled get the same layout without tilts, fans or reveals.

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com/new), then add the contact form
environment variables above.
