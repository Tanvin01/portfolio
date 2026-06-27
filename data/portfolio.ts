// ============================================================
//  ONE FILE TO RULE THEM ALL
//  Edit this file to update your entire portfolio in ~20 mins
// ============================================================

export const PERSON = {
  name: "Tanvin Kheni",
  role: "Senior Full Stack Engineer",
  tagline: "8+ Years Building Scalable Products",
  bio: `I'm a Senior Full Stack Engineer with 8+ years of experience designing and shipping production-grade web applications. I specialise in React, Next.js, Node.js, and cloud-native architectures. I've built everything from real-time chat systems and AI-powered tools to e-commerce platforms processing thousands of daily transactions.

Currently at Sky Infoways, I lead frontend architecture and mentor junior developers. I'm passionate about clean code, great developer experience, and products that users love.`,
  email: "tanvinkhenicse@gmail.com",
  location: "Surat, India",
  available: true, // set false to hide "Open to work" badge
  photo: "/photo.jpg", // place your photo in /public/photo.jpg
  resume: "/Tanvin_Kheni_Resume.pdf", // place your PDF in /public/
  social: {
    github: "https://github.com/Tanvin01",
    linkedin: "https://www.linkedin.com/in/tanvin-kheni-56559622b",
    twitter: "",
    website: "",
  },
};

export const SKILLS = [
  {
    category: "Frontend",
    items: ["React 18", "Next.js 14", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Framer Motion", "GraphQL (Apollo)"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Fastify", "REST APIs", "GraphQL", "Socket.io", "Prisma ORM"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "MySQL"],
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "Kubernetes", "GitHub Actions", "Vercel", "AWS EC2/S3", "Nginx"],
  },
  {
    category: "AI & Tooling",
    items: ["OpenAI API", "GPT-4o", "Stripe", "NextAuth.js", "Zod", "Vitest", "Jest"],
  },
];

export const EXPERIENCE = [
  {
    company: "Sky Infoways",
    role: "Senior Full Stack Engineer",
    period: "2022 — Present",
    location: "Surat, India",
    description: [
      "Lead frontend architecture for 3 SaaS products used by 10,000+ users",
      "Migrated legacy React app to Next.js 14 App Router — 60% improvement in LCP",
      "Designed microservice auth system handling 500K+ daily authentication events",
      "Mentored 4 junior developers; introduced code review culture and CI/CD pipelines",
      "Integrated OpenAI GPT-4o for AI-assisted features, increasing user engagement by 35%",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "AWS"],
  },
  {
    company: "Freelance",
    role: "Full Stack Developer",
    period: "2020 — 2022",
    location: "Remote",
    description: [
      "Delivered 12+ projects for clients across India, US, and UK",
      "Built e-commerce platforms with Stripe integration processing $200K+ in transactions",
      "Created real-time dashboards for logistics companies with live shipment tracking",
      "Developed REST and GraphQL APIs consumed by mobile and web clients",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express", "Stripe", "GraphQL"],
  },
  {
    company: "TechSoft Solutions",
    role: "Full Stack Developer",
    period: "2018 — 2020",
    location: "Surat, India",
    description: [
      "Built internal ERP modules for inventory, HR, and payroll management",
      "Developed RESTful APIs integrated with third-party logistics and payment services",
      "Reduced page load times by 45% through code splitting and image optimisation",
      "Collaborated with design team to implement pixel-perfect, accessible UIs",
    ],
    tech: ["React", "Node.js", "MySQL", "Express", "Material UI"],
  },
  {
    company: "WebCraft Agency",
    role: "Junior Frontend Developer",
    period: "2016 — 2018",
    location: "Surat, India",
    description: [
      "Built responsive websites for 20+ clients using React and vanilla JS",
      "Integrated CMS platforms and third-party APIs",
      "Collaborated in agile team of 8 developers",
    ],
    tech: ["React", "JavaScript", "CSS3", "WordPress", "REST APIs"],
  },
];

export const PROJECTS = [
  {
    title: "DevHire",
    subtitle: "Full-Stack Job Board Platform",
    description:
      "A production-grade job board with role-based authentication for recruiters and job seekers. Features real-time job listings, Kanban application tracker, NextAuth.js OAuth, and email notifications.",
    image: "/projects/devhire.png",
    tech: ["Next.js 14", "PostgreSQL", "Prisma", "NextAuth.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Tanvin01/devhire",
    live: "", // add your Vercel URL when deployed
    featured: true,
  },
  {
    title: "ShopForge",
    subtitle: "E-Commerce Platform",
    description:
      "Full-featured storefront with Stripe Checkout and Webhooks, inventory management, order fulfilment pipeline, admin dashboard, ISR product pages, and a discount code engine.",
    image: "/projects/shopforge.png",
    tech: ["Next.js 14", "Stripe", "Prisma", "PostgreSQL", "Zustand", "TypeScript"],
    github: "https://github.com/Tanvin01/shopforge",
    live: "",
    featured: true,
  },
  {
    title: "ChatNest",
    subtitle: "Real-Time Chat Application",
    description:
      "Slack-inspired messaging built with Socket.io WebSockets, Redis Pub/Sub for multi-server presence, channels, DMs, typing indicators, file sharing, and emoji reactions.",
    image: "/projects/chatnest.png",
    tech: ["React 18", "Socket.io", "Redis", "MongoDB", "Node.js", "TypeScript"],
    github: "https://github.com/Tanvin01/chatnest",
    live: "",
    featured: true,
  },
  {
    title: "AI Resume",
    subtitle: "AI-Powered Resume Builder",
    description:
      "GPT-4o streaming tailors bullet points to job descriptions, ATS compatibility scoring, server-side PDF export via Puppeteer, 8 templates, and cover letter generation.",
    image: "/projects/ai-resume.png",
    tech: ["Next.js 14", "OpenAI GPT-4o", "Puppeteer", "Supabase", "TypeScript"],
    github: "https://github.com/Tanvin01/ai-resume",
    live: "",
    featured: true,
  },
  {
    title: "AuthVault",
    subtitle: "Authentication Microservice",
    description:
      "Drop-in auth service: Argon2id hashing, JWT access/refresh rotation, TOTP-based MFA, Redis rate limiting, RBAC, immutable audit logs, Docker and Kubernetes manifests.",
    image: "/projects/authvault.png",
    tech: ["Fastify", "JWT", "Argon2", "Redis", "Docker", "Kubernetes"],
    github: "https://github.com/Tanvin01/authvault",
    live: "",
    featured: false,
  },
  {
    title: "SpendSense",
    subtitle: "Personal Finance Tracker",
    description:
      "Full-stack finance dashboard with Chart.js doughnut/line charts, category budgets, recurring transactions, month-over-month trends, multi-currency, and CSV export.",
    image: "/projects/spendsense.png",
    tech: ["React 18", "Node.js", "MongoDB", "Chart.js", "Zustand", "Express"],
    github: "https://github.com/Tanvin01/spendsense",
    live: "",
    featured: false,
  },
  {
    title: "LogiTrack",
    subtitle: "Inventory & Logistics Dashboard",
    description:
      "Warehouse management with real-time stock levels, low-stock alerts, multi-carrier shipment tracking, supplier purchase orders, Redux Toolkit RTK Query, and Excel export.",
    image: "/projects/logitrack.png",
    tech: ["React", "Redux Toolkit", "Node.js", "MongoDB", "Recharts", "TypeScript"],
    github: "https://github.com/Tanvin01/logitrack",
    live: "",
    featured: false,
  },
  {
    title: "MediBook",
    subtitle: "Healthcare Appointment Platform",
    description:
      "Doctor discovery with smart availability calendar, video consultations via Daily.co, patient health portal, Supabase Row-Level Security, and SMS/email reminders.",
    image: "/projects/medibook.png",
    tech: ["Next.js 14", "Supabase", "TypeScript", "Tailwind CSS", "Daily.co"],
    github: "https://github.com/Tanvin01/medibook",
    live: "",
    featured: false,
  },
  {
    title: "CodeCollab",
    subtitle: "Code Review Platform",
    description:
      "GitHub-integrated code review tool with GraphQL API, inline comments, diff viewer, review decision workflow, and real-time updates via GraphQL subscriptions.",
    image: "/projects/codecollab.png",
    tech: ["React", "GraphQL", "Apollo Server 4", "PostgreSQL", "Docker", "TypeScript"],
    github: "https://github.com/Tanvin01/codecollab",
    live: "",
    featured: false,
  },
];

export const STATS = [
  { value: "8+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "15+", label: "Happy Clients" },
  { value: "9", label: "Open Source Repos" },
];

export const SEO = {
  title: "Tanvin Kheni — Senior Full Stack Engineer",
  description:
    "Senior Full Stack Engineer with 8+ years building scalable SaaS, real-time apps, and AI-powered products using Next.js, React, Node.js, PostgreSQL, and MongoDB.",
  url: "https://tanvinkheni.vercel.app",
  twitterHandle: "@TanvinKheni",
  keywords: [
    "Tanvin Kheni","Full Stack Developer","Senior Full Stack Engineer","Next.js Developer",
    "React Developer","Node.js Developer","TypeScript","Surat India Developer",
    "Full Stack Engineer India","Remote Full Stack Developer","Portfolio",
  ],
};
