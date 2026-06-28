// ============================================================
//  ONE FILE TO CUSTOMISE YOUR ENTIRE PORTFOLIO
// ============================================================

export const PERSON = {
  name: "Tanvin Kheni",
  role: "Senior Full Stack Engineer",
  tagline: "7+ Years Building Scalable Products",
  bio: `Versatile Senior Full Stack Engineer with 7+ years of hands-on expertise engineering high-throughput distributed architectures, secure SaaS frameworks, and responsive cloud systems using the MERN ecosystem, TypeScript, and AWS.

Proven track record driving large-scale applications from architectural design to automated production deployments while collaborating with cross-functional development groups. Specialized in API engineering, performance profiling, and building real-time data streaming layers that cut processing latencies and optimize cloud operational spend.`,
  email: "tanvinkhenicse@gmail.com",
  emailAlt: "tanvinkheni07@gmail.com",
  phone: "+91 6355403231",
  location: "Surat, India",
  available: true,
  photo: "/tanvin-kheni.png",
  resume: "/Tanvin_Kheni_Full_Stack.pdf",
  social: {
    github: "https://github.com/Tanvin01",
    linkedin: "https://linkedin.com/in/tanvin-kheni-56559622b",
    twitter: "",
  },
};

export const SKILLS = [
  {
    category: "Languages & Environments",
    items: ["JavaScript (ES6+)", "TypeScript", "Node.js", "Python", "HTML5", "CSS3", "C#"],
  },
  {
    category: "Frontend & State",
    items: ["React.js", "Next.js (SSR/SSG)", "Angular", "Redux Toolkit", "Context API", "Tailwind CSS", "Material UI"],
  },
  {
    category: "Backend Architecture",
    items: ["Express.js", "NestJS", ".NET Core", "RESTful APIs", "GraphQL", "Microservices", "Event-Driven Systems"],
  },
  {
    category: "Mobile Development",
    items: ["React Native", "Flutter", "Ionic Framework"],
  },
  {
    category: "Data Architecture",
    items: ["MongoDB", "MySQL", "PostgreSQL", "SQL Server", "Redis (Caching)"],
  },
  {
    category: "Cloud, DevOps & Infra",
    items: ["AWS EC2", "AWS S3", "AWS IAM", "CloudWatch", "Docker", "CI/CD", "GitHub Actions", "Nginx"],
  },
  {
    category: "Protocols & Auth",
    items: ["WebSockets", "Socket.io", "WebRTC", "JWT", "OAuth 2.0", "RBAC"],
  },
  {
    category: "Tooling & Quality",
    items: ["Git", "GitHub", "Jira", "Postman", "Sentry", "Jest", "Webpack", "Vite"],
  },
];

export const EXPERIENCE = [
  {
    company: "Sky Infoway",
    role: "Full Stack Tech Lead",
    period: "Mar 2025 – Present",
    location: "Surat, India",
    description: [
      "Architected scalable decoupled backend services using Node.js, Express, and NestJS, minimizing database lock contention across shared resources",
      "Designed optimized microservices engine backed by complex MongoDB indexing strategies and MySQL relational configurations",
      "Developed highly interactive administrative portals utilizing Next.js SSR to ensure fast initial page load times",
      "Engineered instant visitor alert and notification matrix using WebSockets, reducing payload transit latencies across concurrent sessions",
      "Containerized individual deployment services with Docker and orchestrated automated infrastructure builds onto AWS clusters",
    ],
    tech: ["Node.js", "NestJS", "Next.js", "MongoDB", "MySQL", "WebSockets", "Docker", "AWS"],
  },
  {
    company: "Softices",
    role: "Lead Full Stack Engineer",
    period: "Mar 2024 – Mar 2025",
    location: "Surat, India",
    description: [
      "Engineered 50+ business modules including payroll, multi-tenant compliance logs, and automated attendance matrixes for 5,000+ active users",
      "Formulated strict End-to-End TypeScript schemas spanning GraphQL queries and RESTful APIs, preventing runtime breakages",
      "Introduced unified application telemetry and real-time metrics by deploying Sentry hooks across the platform",
      "Constructed automated CI/CD pipelines using GitHub Actions — seamless Docker builds on AWS EC2 nodes behind Nginx",
      "Refactored legacy SQL Server stored procedures, producing a 30% speedup in heavy summary report calculations",
    ],
    tech: ["TypeScript", "GraphQL", "Sentry", "GitHub Actions", "Docker", "AWS EC2", "SQL Server", "Nginx"],
  },
  {
    company: "ProExelancers",
    role: "Senior Full Stack Developer",
    period: "Sep 2021 – Mar 2024",
    location: "Surat, India",
    description: [
      "Architected distributed event messaging pipelines using Node.js and MongoDB to manage peak traffic for 10,000+ users",
      "Optimized MySQL query plans and indexes, driving a 35% reduction in compute utilization",
      "Designed async image pipeline via AWS S3 for automated user compliance document uploads",
      "Created operational-transform collaborative engine with Socket.io for concurrent state tracking",
      "Developed cross-platform mobile apps for iOS and Android using React Native and Flutter with JWT auth",
    ],
    tech: ["Node.js", "MongoDB", "MySQL", "AWS S3", "Socket.io", "React Native", "Flutter"],
  },
  {
    company: "Tecksky",
    role: "Full Stack Engineer",
    period: "Jan 2019 – Sep 2021",
    location: "Surat, India",
    description: [
      "Sports Zone Marketplace: Dynamic scheduling architecture and payment processing with React.js and Node.js",
      "EduPlay Live Platform: Peer-to-peer real-time video streaming via WebRTC",
      "EventHub Connect & LoveIn: Spatial maps, chat systems, and fine-tuned MongoDB schemas",
    ],
    tech: ["React.js", "Node.js", "MongoDB", "WebRTC", "Express.js"],
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Gujarat Technological University",
    period: "2018 – 2022",
    grade: "CGPA: 8.5 / 10.0",
  },
];

export const PROJECTS = [
  {
    title: "KlearCom",
    subtitle: "Global CX Testing & IVR Intelligence Platform",
    description: "KlearCom is a global customer experience testing platform that proactively monitors IVR journeys, call routing, and telecom connectivity across 330+ carriers in 100+ countries. It delivers real-time issue signals — from failed transfers to audio degradation — giving enterprises complete visibility over their customer communication infrastructure before problems reach end users.",
    images: [
      "/projects/klearcom/klearcom-1.png",
      "/projects/klearcom/klearcom-2.png",
      "/projects/klearcom/klearcom-3.png",
    ],
    tech: ["React.js", "Node.js", "WebSockets", "MongoDB", "AWS", "TypeScript"],
    live: "https://klearcom.com/",
    featured: true,
  },
  {
    title: "Cowberry",
    subtitle: "Organic E-Commerce & Multi-Vendor Marketplace",
    description: "Cowberry is a 100% certified organic products marketplace delivering pure, chemical-free nutrition. Built as a distributed multi-vendor platform with the MERN stack, it handles high-volume API ingestion, Stripe and Razorpay payment routing with transactional isolation, Redis caching for 40% faster responses, and real-time fleet mapping via Socket.io with RBAC-secured access.",
    images: [
      "/projects/cowberry/cowberry-1.png",
      "/projects/cowberry/cowberry-2.png",
      "/projects/cowberry/cowberry-3.png",
      "/projects/cowberry/cowberry-4.png",
    ],
    tech: ["MERN Stack", "Stripe", "Razorpay", "Redis", "Socket.io", "TypeScript"],
    live: "https://www.cowberry.com/",
    featured: true,
  },
  {
    title: "INOUT",
    subtitle: "Smart Society & Visitor Management SaaS",
    description: "INOUT is an all-in-one enterprise B2B SaaS platform that streamlines visitor management, resident check-ins, security access, and real-time notifications for gated communities and residential societies. Architected with decoupled NestJS microservices, Next.js SSR admin portals, WebSocket-driven instant alert systems, and Docker/AWS deployments for high availability.",
    images: [
      "/projects/inout/inout-1.png",
      "/projects/inout/inout-2.png",
      "/projects/inout/inout-3.png",
      "/projects/inout/inout-4.png",
    ],
    tech: ["Next.js", "NestJS", "MongoDB", "MySQL", "WebSockets", "Docker", "AWS"],
    live: "https://www.inoutnow.com/",
    featured: true,
  },
  {
    title: "VRS",
    subtitle: "Automated Workforce Management SaaS",
    description: "Visual Registration System (VRS) is an advanced SaaS workforce management platform that unifies employee time tracking, project registration, resource planning, dynamic wage calculation, and holiday management in one seamless system. It integrates directly with ERP, accounting, and payroll systems — giving managers a fully calculated, real-time view of hours and project costs.",
    images: [
      "/projects/vrs/vrs-1.png",
      "/projects/vrs/vrs-2.png",
      "/projects/vrs/vrs-3.png",
      "/projects/vrs/vrs-4.png",
    ],
    tech: ["React.js", "Node.js", "PostgreSQL", "JWT", "OAuth 2.0", "REST APIs"],
    live: "https://www.visualregistration.com/",
    featured: true,
  },
  {
    title: "Synmax",
    subtitle: "Maritime Intelligence & Geospatial Analytics",
    description: "SynMax is a forward-thinking geospatial intelligence company delivering satellite-powered analytics across maritime and energy sectors. Their Theia platform processes 130M+ km² of satellite imagery daily, fusing optical, SAR, and AIS data with AI to track vessels globally — detecting AIS spoofing, dark ships, and sanctions breaches with military-grade precision.",
    images: [
      "/projects/synmax/synmax-1.png",
      "/projects/synmax/synmax-2.png",
      "/projects/synmax/synmax-3.png",
    ],
    tech: ["React.js", "Node.js", "MongoDB", "GraphQL", "AWS S3", "TypeScript"],
    live: "https://www.synmax.com/",
    featured: false,
  },
  {
    title: "VTS",
    subtitle: "Visual Tracking for Smart Manufacturing (Norway)",
    description: "Visual Tracking System (VTS) is a Norwegian manufacturing intelligence platform that provides full traceability from customer purchase orders through production operations. Integrated with Microsoft Dynamics 365 Business Central, it gives factories clear visibility over production orders, work centers, NCRs, and on-time delivery metrics — enabling smarter, data-driven manufacturing.",
    images: [
      "/projects/vts/vts-1.png",
      "/projects/vts/vts-2.png",
    ],
    tech: ["React.js", "Node.js", "WebSockets", "PostgreSQL", "MS Dynamics 365", "TypeScript"],
    live: "https://www.visualtracking.no/",
    featured: false,
  },
  {
    title: "Parivar",
    subtitle: "Family & Community Networking App",
    description: "Parivar is a private family and community networking platform that connects friends, loved ones, and like-minded communities in one secure digital space. Members can share moments, manage family directories, preserve memories, and stay updated — all with full privacy control. Built cross-platform with React Native and backed by a scalable Node.js and MongoDB architecture.",
    images: [
      "/projects/parivar/parivar-1.png",
      "/projects/parivar/parivar-2.png",
    ],
    tech: ["React Native", "Node.js", "MongoDB", "Socket.io", "AWS S3", "JWT"],
    live: "https://parivar.app/",
    featured: false,
  },
  {
    title: "MatchUp India",
    subtitle: "Smart Dating & Matchmaking Platform",
    description: "Match Up India is a modern dating and social matchmaking platform that creates a safe, verified digital space for individuals to find meaningful connections based on shared interests, values, and vibes. Features include verified profiles, smart matchmaking algorithms, real-time chat, and a secure environment — all built on a scalable full-stack architecture.",
    images: [
      "/projects/matchupindia/matchupindia-1.png",
      "/projects/matchupindia/matchupindia-2.png",
    ],
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Socket.io", "JWT"],
    live: "https://www.matchupindia.com/",
    featured: false,
  },
];

export const STATS = [
  { value: "7+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "8", label: "Live Products" },
  { value: "10K+", label: "Users Served" },
];

export const SEO = {
  title: "Tanvin Kheni — Senior Full Stack Engineer",
  description:
    "Senior Full Stack Engineer with 7+ years building scalable SaaS, real-time systems, and cloud-native architectures using MERN stack, TypeScript, Next.js, Node.js, and AWS.",
  url: "https://tanvinkheni.vercel.app",
  twitterHandle: "",
  keywords: [
    "Tanvin Kheni", "Full Stack Developer", "Senior Full Stack Engineer",
    "Next.js Developer", "React Developer", "Node.js Developer",
    "TypeScript", "MERN Stack", "Surat India Developer",
    "Full Stack Engineer India", "Remote Full Stack Developer", "Portfolio",
  ],
};
