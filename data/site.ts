/**
 * All portfolio content lives here. Edit this file to update the site —
 * no component changes needed.
 */

export type Category = "Web" | "Mobile";

export type ProjectLink = { label: string; url: string };

export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: Category;
  stack: string[];
  /** Public links, primary first. Leave empty if there is nothing to link to yet. */
  links: ProjectLink[];
  /** Omit when the project is finished but not publicly available. */
  status?: "Live" | "In progress";
  repoUrl?: string;
  /** Path under /public, e.g. "/projects/shop.png". Leave empty for a title tile. */
  image?: string;
  /** Featured projects appear on the home page (first 3 are used). */
  featured?: boolean;
};

export const profile = {
  name: "Talha",
  role: "Full-stack software engineer",
  headline: "Full-stack engineer building scalable web and mobile",
  headlineAccent: "products.",
  intro:
    "I'm Talha, a full-stack engineer with 3 years of professional experience delivering end-to-end solutions, from database architecture and backend development to intuitive, responsive interfaces.",
  location: "Karachi, Pakistan",
  openToWork: true,
  email: "talhaarshad010@gmail.com",
  github: "https://github.com/talhaarshad010",
  linkedin: "https://www.linkedin.com/in/talharshad",
  cvUrl: "/cv.pdf",
  cvFileName: "Talha-Arshad-CV.pdf",
  about: {
    title: "An engineer who cares how things are built — and how they feel.",
    body: "I spent 3 years at Logic Loops Solutions developing and maintaining production web and mobile applications, working across frontend interfaces, backend APIs and database integration. I care about sound application architecture, OOP and SOLID principles, and collaborative development through Agile sprints, pull requests and code reviews.",
    portrait: "/talha.jpg",
    stats: [
      { value: "3", label: "years of professional experience" },
      { value: "10", label: "live web and mobile products" },    ],
  },
};

export const categories: Category[] = ["Web", "Mobile"];

export const projects: Project[] = [
  {
    slug: "hautique",
    image: "/projects/hautique.jpg",
    title: "Hautique Ecommerce Platform",
    summary:
      "A production e-commerce platform with product listings, promotional deals, a shopping cart and order tracking, built on custom data models and RESTful APIs. Includes WhatsApp customer support and analytics.",
    category: "Web",
    stack: ["Next.js", "Node.js", "REST APIs", "Supabase", "JWT", "Vercel", "Google Analytics", "Pixel"],
    links: [{ label: "Live site", url: "https://www.hautiqueofficial.com" }],
    status: "Live",
    featured: true,
  },
  {
    slug: "sterns-gym",
    image: "/projects/sterns-gym.jpg",
    title: "Stern’s Gym",
    summary:
      "A production mobile app connecting gym clients with trainers for fitness services and session scheduling, with multi-role authentication and role-based access for separate client and trainer experiences. Delivered to production within six weeks.",
    category: "Mobile",
    stack: ["React Native", "Node.js", "MongoDB", "Redux Toolkit", "Firebase", "Stripe", "Apple Pay"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/sterns-gym-trainers-connect/id6758958834" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.sternsgym.trainersconnectv2" },
    ],
    status: "Live",
    featured: true,
  },
  {
    slug: "recruito",
    image: "/projects/recruito.jpg",
    title: "Recruito",
    summary:
      "An AI-powered hiring and HR platform covering resume screening, interview analysis, offers, onboarding and day-to-day HR operations. Resumes are analysed automatically to match candidates with roles, with names and locations hidden during scoring to reduce bias, and candidates and HR teams get separate workspaces.",
    category: "Web",
    stack: ["Next.js", "Supabase", "Redux", "Axios", "Radix UI"],
    links: [{ label: "Live app", url: "https://recruito-murex.vercel.app/login" }],
    status: "Live",
    featured: true,
  },
  {
    slug: "mulder-streaming",
    image: "/projects/mulder-streaming.jpg",
    title: "Mulder Streaming",
    summary:
      "A subscription music streaming app for pianist and composer Ian Mulder, published on the App Store and Google Play. Listeners can stream more than 23 solo albums recorded with orchestras, and create and manage their own playlists.",
    category: "Mobile",
    stack: ["React Native", "Node.js"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/app/mulder-streaming/id6742207144" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.mulderstreaming" },
    ],
    status: "Live",
  },
  {
    slug: "velofolio",
    image: "/projects/velofolio.jpg",
    title: "Velofolio",
    summary:
      "A CRM, project management and client portal platform for photographers, videographers and creative studios. It brings leads, clients, a calendar, tasks, forms, contracts with e-signatures, invoicing and payments, reports and team management into one studio workspace.",
    category: "Web",
    stack: ["Next.js", "Redux", "Firebase", "Stripe", "Socket.IO", "Radix UI", "Railway"],
    links: [{ label: "Live app", url: "https://portal.velofolio.io/" }],
    status: "Live",
  },
  {
    slug: "my-pilot-exam",
    image: "/projects/my-pilot-exam.jpg",
    title: "MyPilotExam",
    summary:
      "A booking marketplace that connects student pilots with FAA Designated Pilot Examiners. Pilots browse verified examiners, check real-time availability, book checkrides and pay online, while examiners manage bookings, receive payouts through Stripe Connect and collect reviews.",
    category: "Web",
    stack: ["Next.js", "Redux", "Axios", "Socket.IO", "Stripe Connect"],
    links: [{ label: "Live site", url: "https://my-pilot-exam.vercel.app/" }],
    status: "Live",
  },
  {
    slug: "ace8",
    image: "/projects/ace8.jpg",
    title: "Ace8 Company Website",
    summary:
      "A corporate website for Ace8, a technology services company, presenting its eight service domains, from enterprise architecture and DevSecOps to cloud-native and data solutions, alongside featured services, customer stories and a contact section.",
    category: "Web",
    stack: ["Next.js 14", "React"],
    links: [{ label: "Live site", url: "https://ace-it-chi.vercel.app/" }],
    status: "Live",
  },
  {
    slug: "bathwater",
    image: "/projects/bathwater.jpg",
    title: "BathWater Launch Page",
    summary:
      "A pre-launch landing page for BathWater, a magnesium-infused mountain water drink, with a launch countdown, an email waitlist and a referral page, connected to its own backend API.",
    category: "Web",
    stack: ["React", "Redux", "Material UI", "Builder.io", "REST API"],
    links: [{ label: "Live site", url: "https://bathwater-three.vercel.app/" }],
    status: "Live",
  },
  {
    slug: "my-brew",
    image: "/projects/my-brew.jpg",
    title: "My Brew",
    summary:
      "A social web app where beer enthusiasts share their brews. It covers sign-up and sign-in, an OTP-based password reset, exploring brews, a personal brew collection, tasting notes and individual brew pages served from a REST API.",
    category: "Web",
    stack: ["React", "Redux", "Material UI", "REST API"],
    links: [{ label: "Live site", url: "https://my-brew-mocha.vercel.app/" }],
    status: "Live",
  },
  {
    slug: "yaadein",
    image: "/projects/yaadein.jpg",
    title: "Yaadein Custom Photo Framing Studio",
    summary:
      "An interactive photo-frame customization experience with real-time previews, so users can visualize designs before proceeding, backed by a database-driven catalog of frames and options.",
    category: "Web",
    stack: ["Next.js", "React.js", "Vercel", "Firebase", "Microsoft Clarity"],
    links: [{ label: "Live site", url: "https://yaadein-one.vercel.app/" }],
    status: "Live",
  },
  {
    slug: "ezfinance",
    title: "EzFinance",
    summary:
      "An AI-powered personal finance app and final year project covering expense tracking, budgets, financial goals and spending analysis, with a Python machine learning service that categorizes expenses from SMS data.",
    category: "Mobile",
    stack: ["Node.js", "Express.js", ".NET", "React Native", "Python", "Supabase", "Azure"],
    links: [],
    status: "In progress",
  },
];

export const services = [
  { title: "Web apps", body: "React and Next.js front ends with responsive interfaces that stay consistent across desktop and mobile." },
  { title: "APIs & backends", body: "Node.js and .NET services with RESTful APIs, JWT authentication, role-based access control and clean database design." },
  { title: "Mobile", body: "Production React Native apps, from authentication and state management through to App Store and Google Play release." },
];

export const techStack = [
  { label: "Frontend", items: ["React.js", "Next.js", "React Native", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Redux Toolkit"] },
  { label: "Backend", items: ["Node.js", "Express.js", ".NET (C#)", "RESTful APIs", "Socket.IO", "JWT Authentication", "RBAC"] },
  { label: "Databases", items: ["MongoDB", "PostgreSQL", "SQL", "Supabase", "Firebase", "SQLite"] },
  { label: "Cloud & DevOps", items: ["AWS S3", "Docker", "Vercel", "Git", "GitHub", "GitHub Actions", "CI/CD Pipelines"] },
  { label: "API testing", items: ["Postman", "REST API Testing"] },
  { label: "Engineering", items: ["OOP", "SOLID Principles", "MVC Architecture", "Design Patterns", "Data Structures & Algorithms"] },
  { label: "Also work with", items: ["Java", "Python", "Flask", "FastAPI", "C/C++", "Agile/Scrum", "Google Analytics", "Microsoft Clarity"] },
  { label: "AI coding tools", items: ["Claude Code", "Cursor", "Antigravity", "GitHub Copilot", "Codex", "ChatGPT"] },
];

export const experience = [
  {
    role: "Senior Full-Stack Engineer — Logic Loops Solutions, Karachi",
    period: "Aug 2023 – Jul 2026",
    body: "Developed and maintained full-stack features for production web and mobile applications, covering frontend interfaces, backend APIs and database integration. Designed and integrated RESTful APIs with authentication and data-handling workflows, built modular TypeScript components using OOP and SOLID principles, and collaborated with cross-functional teams through Agile sprints, pull requests and code reviews.",
  },
  {
    role: "BS Computer Science — SZABIST, Karachi",
    period: "2023 – 2026",
    body: "Relevant coursework: Data Structures & Algorithms, OOP, Database Systems, Software Engineering, and Web & Mobile App Development.",
  },
];

export const process = [
  { title: "Discover", body: "Understand the goal, users and constraints before writing code." },
  { title: "Design", body: "Sketch flows, data models and APIs so the build has a clear plan." },
  { title: "Build", body: "Ship in small, tested increments you can see and react to." },
  { title: "Launch", body: "Deploy, monitor and iterate once real people are using it." },
];

/** The "Kind words" section stays hidden until this has at least one real quote. */
export const testimonials: { quote: string; name: string; title: string }[] = [];

export const faqs = [
  {
    q: "What kind of work do you do?",
    a: "End-to-end web and mobile applications: database architecture, backend APIs and responsive interfaces, mainly with React, Next.js, React Native, Node.js and .NET.",
  },
  {
    q: "Do you work with existing codebases?",
    a: "Yes. At Logic Loops Solutions I developed and maintained features on production applications, working through Git-based workflows, pull requests and code reviews.",
  },
  {
    q: "Where are you based?",
    a: "Karachi, Pakistan, which is on Pakistan Standard Time (UTC+5).",
  },
  {
    q: "Do you use AI coding tools?",
    a: "Yes. I work with Claude Code, Cursor, Antigravity, GitHub Copilot, Codex and ChatGPT.",
  },
];

export const navLinks = [
  { href: "/#projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#experience", label: "Experience" },
  { href: "/#faq", label: "FAQ" },
];
