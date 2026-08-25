/* ============================================================
   CONTENT.JS — EDIT EVERYTHING HERE
   This is the only file you should need to touch to update text,
   projects, links, etc. Nothing here affects layout or styling —
   that lives in css/style.css. Structure/behaviour lives in
   js/script.js and shouldn't need to change when you edit content.
   ============================================================ */

const CONTENT = {

  meta: {
    name: "Khwaish Agarwala",
    role: "Software Engineer",
    email: "agarwalakhwaish@gmail.com",
    github: "https://github.com/KhwaishAg",
    linkedin: "https://linkedin.com/in/khwaish-agarwala",
    location: "VELLORE, IN",
    // drop your headshot at this path (create the /images folder next to
    // index.html) — until it exists the frame shows a placeholder instead
    photo: "images/profile.jpg",
    photoAlt: "Khwaish Agarwala",
  },

  nav: [
    { label: "WORK", href: "#work" },
    { label: "STACK", href: "#stack" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT", href: "#footer" },
  ],

  // decorative "system" texture — coordinates / status codes, pure flourish
  system: {
    coords: "12.9716°N / 79.1325°E — VIT, TN",
    status: "STATUS: OPEN_TO_WORK",
    loading: "LOADING_PORTFOLIO",
  },

  // ---- HERO ----
  hero: {
    kicker: "KHWAISH AGARWALA — SOFTWARE ENGINEER",
    // one word per line, rendered huge. keep it short.
    words: ["CODE", "BREAK", "SHIP"],
    sub: "Full-stack developer & AI/ML tinkerer building things that actually go live — not just Figma files.",
    cta: { label: "VIEW WORK →", href: "#work" },
    marquee: "OPEN TO OPPORTUNITIES  ✦  FULL-STACK  ✦  AI / ML  ✦  VIT '27  ✦  ",
    ribbon: "SCROLL FOR PROOF ✦ NOT JUST A RESUME ✦ ",
  },

  // ---- ABOUT / "WHAT IS THIS" ----
  about: {
    tag: ".01 — WHO IS THIS",
    pullQuote: [
      "IT STUDENT WHO",
      "SHIPS FULL-STACK",
      "PRODUCTS &",
      "AI SYSTEMS THAT",
      "SOLVE REAL",
      "PROBLEMS.",
    ],
    body: "Currently a B.Tech IT student at VIT (CGPA 8.97), interning as a Software Development Intern at Threds, and Vice Chairperson of IEEE TEMS VIT. I build across the stack — React/Node on the frontend and backend, LangGraph/LLMs and scikit-learn on the AI side — and I'd rather ship something rough than polish something invisible.",
  },

  // ---- EXPERIENCE + PROJECTS (numbered feature list) ----
  work: {
    tag: ".02 — EXPERIENCE / WORK",
    items: [
      {
        num: ".01",
        title: "THREDS — SOFTWARE DEVELOPMENT INTERN",
        meta: "MAY 2026 — JUL 2026",
        body: "Delivered 10+ production feature enhancements and bug fixes across frontend and backend CRM modules. Refactored reusable UI components across 7+ modules and added dynamic field support.",
        stack: ["REACT", "TYPESCRIPT", "VITE", "NESTJS", "PRISMA", "POSTGRESQL"],
        link: null,
      },
      {
        num: ".02",
        title: "NUTRITRACK",
        meta: "FULL-STACK NUTRITION PLATFORM",
        body: "Full-stack nutrition tracking platform with 6+ core features — calorie tracking, water intake, diet goals, nutritionist appointment booking. RESTful APIs across 4+ MongoDB collections.",
        stack: ["MONGODB", "EXPRESS", "ANGULARJS", "NODE.JS"],
        link: null,
      },
      {
        num: ".03",
        title: "SAFETRAIL",
        meta: "AI-POWERED TRAVEL SAFETY COMPANION",
        body: "Analyzes geospatial data with K-Means clustering to flag high-risk areas. Integrated Google Maps + Directions APIs to route around danger zones and visualize safety on interactive maps.",
        stack: ["NEXT.JS", "TYPESCRIPT", "SCIKIT-LEARN", "GOOGLE MAPS API", "MONGODB"],
        link: "https://github.com/KhwaishAg",
      },
      {
        num: ".04",
        title: "SYNAPSE",
        meta: "AI-DRIVEN DELIVERY ISSUE RESOLUTION",
        body: "Logistics monitoring system that detects delays, route deviations, and failed deliveries. LLM-based multi-step workflows via LangGraph auto-classify issues and draft resolutions.",
        stack: ["PYTHON", "LANGGRAPH", "LLM APIS"],
        link: "https://github.com/KhwaishAg",
      },
      {
        num: ".05",
        title: "IEEE TEMS VIT — VICE CHAIRPERSON",
        meta: "DEC 2025 — PRESENT",
        body: "Run operations and strategy for a 100+ member chapter, coordinating 4+ teams to organize 5+ technical events. Previously mentored 30+ students on AI/ML fundamentals as Editorial Mentor.",
        stack: ["LEADERSHIP", "MENTORSHIP", "EVENTS"],
        link: null,
      },
      {
        num: ".06",
        title: "GENAI, SMARTBRIDGE",
        meta: "CERTIFICATION",
        body: "Hands-on program on generative AI, prompt engineering, and LLMs, plus ethical AI practice — certified through Google Developers.",
        stack: ["GENAI", "PROMPT ENGINEERING", "LLMS"],
        link: null,
      },
    ],
  },

  // ---- STACK (deliberately plain, contrast against the loud hero) ----
  stack: {
    tag: ".03 — STACK",
    groups: [
      { label: "LANGUAGES", items: ["Python", "C++", "C", "Java", "SQL", "JavaScript", "C#/.NET", "R"] },
      { label: "WEB", items: ["React", "Node.js", "Express.js", "AngularJS", "jQuery", "HTML/CSS", "Bootstrap"] },
      { label: "AI / ML", items: ["Machine Learning", "Generative AI", "LLMs", "LangGraph", "Scikit-learn", "K-Means Clustering"] },
      { label: "DATA & CLOUD", items: ["MongoDB", "MySQL", "SQLite", "Supabase", "Prisma", "PostgreSQL", "AWS", "Azure", "Hadoop", "Spark", "Hive"] },
      { label: "TOOLS", items: ["Git", "GitHub", "Postman", "Linux", "REST APIs", "DSA", "OOP"] },
    ],
  },

  footer: {
    sayHi: ["LET'S", "TALK"],
    tagline: "BUILT WITH COFFEE, CHAOS, AND TOO MANY BROWSER TABS.",
    legal: "© 2026 KHWAISH AGARWALA. ALL RIGHTS RESERVED.",
  },
};
