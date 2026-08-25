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
    leetcode: "https://leetcode.com/u/KhwaishAg/",
    location: "VELLORE, IN",
    // drop your headshot at this path (create the /images folder next to
    // index.html) — until it exists the frame shows a placeholder instead
    photo: "images/profile.jpg",
    photoAlt: "Khwaish Agarwala",
    resume: "files/resume.pdf",
    // paste a Formspree endpoint here (e.g. "https://formspree.io/f/xxxxxxx")
    // once you've made a free account at formspree.io — until then the
    // contact form falls back to opening the visitor's email client instead
    formEndpoint: null,
  },

  nav: [
    { label: "ABOUT", href: "#about" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "LEADERSHIP", href: "#leadership" },
    { label: "CERTS", href: "#certifications" },
    { label: "PROJECTS", href: "#projects" },
    { label: "STACK", href: "#stack" },
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
    cta: { label: "VIEW WORK →", href: "#projects" },
    resumeCta: { label: "RESUME ↓" },
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

  // ---- EXPERIENCE (paid/technical roles + recognition earned through
  // application or selection — not organizing/coordinating work, see
  // Leadership for that) ----
  experience: {
    tag: ".02 — EXPERIENCE",
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
        title: "GOOGLE SUMMER OF CODE — CONTRIBUTOR",
        meta: "AI / ML TRACK",
        body: "Selected as a contributor for Google Summer of Code on the AI/ML track — competitive, application-based open-source program under Google.",
        stack: ["OPEN SOURCE", "AI/ML"],
        link: null,
      },
      {
        num: ".03",
        title: "HONEYWELL HACKATHON — INTERVIEW ROUND",
        meta: "PROJECT: DRIFTWATCH ↓ SEE PROJECTS",
        body: "Advanced to the interview round of a Honeywell hackathon with DriftWatch, an AI-powered behavioural anomaly detection system for cybersecurity — full writeup in Projects below.",
        stack: ["HACKATHON", "SHORTLISTED"],
        link: "#projects",
      },
    ],
  },

  // ---- LEADERSHIP (organizing, coordinating, managing people/events —
  // distinct from Experience, which is technical roles you were hired or
  // selected into) ----
  leadership: {
    tag: ".03 — LEADERSHIP",
    items: [
      {
        num: ".01",
        title: "IEEE TEMS VIT — VICE CHAIRPERSON",
        meta: "DEC 2025 — PRESENT",
        body: "Run operations and strategy for a 100+ member chapter, coordinating 4+ teams to organize 5+ technical events. Previously mentored 30+ students on AI/ML fundamentals as Editorial Mentor.",
        stack: ["LEADERSHIP", "MENTORSHIP", "EVENTS"],
        link: null,
      },
      {
        num: ".02",
        title: "EVENT POC & RIVIERA COORDINATOR",
        meta: "VIT VELLORE",
        body: "Point of Contact (POC) for two college technical events and coordinator for Riviera, VIT's flagship cultural fest — handling logistics, team coordination, and on-ground execution. Also competed in HackXpertise 2.0, CodeRush 3.0, and HP Dreams Unlocked.",
        stack: ["EVENT MANAGEMENT", "LOGISTICS", "TEAM COORDINATION"],
        link: null,
      },
    ],
  },

  // ---- CERTIFICATIONS — add more here as you earn them ----
  certifications: {
    tag: ".04 — CERTIFICATIONS",
    items: [
      {
        num: ".01",
        title: "GENAI, SMARTBRIDGE",
        meta: "CERTIFICATION",
        body: "Hands-on program on generative AI, prompt engineering, and LLMs, plus ethical AI practice — certified through Google Developers.",
        stack: ["GENAI", "PROMPT ENGINEERING", "LLMS"],
        link: null,
      },
    ],
  },

  // ---- PROJECTS — add more entries here any time, same shape each time.
  // "link" is optional; leave it null if there's nothing to point to yet. ----
  projects: {
    tag: ".05 — PROJECTS",
    items: [
      {
        num: ".01",
        title: "DRIFTWATCH",
        meta: "AI-POWERED BEHAVIOURAL ANOMALY DETECTION FOR CYBERSECURITY",
        body: "Semi-supervised anomaly detection pipeline over 121K access logs, combining a GRU Autoencoder, Isolation Forest, and XGBoost to detect 7 cyberattack types without labelled training data. Reduced false positives by 37% using SHAP-based explainability, with a real-time Streamlit dashboard backed by PostgreSQL for behavioural anomaly monitoring. Honeywell hackathon interview-round selection.",
        stack: ["PYTHON", "PYTORCH", "XGBOOST", "SCIKIT-LEARN", "SHAP", "STREAMLIT", "POSTGRESQL"],
        link: "https://github.com/KhwaishAg/driftWatch",
        demo: "https://drift-soc.streamlit.app/",
      },
      {
        num: ".02",
        title: "CARELOOP",
        meta: "AI-ASSISTED HEALTHCARE APPOINTMENT & FOLLOW-UP MANAGER",
        body: "Full-stack healthcare platform with 3 role-based portals (patient/doctor/admin), integrating the Gemini LLM across symptom clarification, AI-generated pre-visit briefs, and post-visit summaries — each constrained to strict JSON-schema output with zero free-form diagnosis. Race-condition-safe booking via a partial unique Postgres index and a BullMQ/Redis pipeline handling slot-hold expiry, leave-conflict resolution, and notification delivery with idempotency keys and exponential backoff. Google Calendar OAuth sync, deployed on Render.",
        stack: ["REACT", "TYPESCRIPT", "NODE.JS", "EXPRESS", "POSTGRESQL", "PRISMA", "REDIS", "BULLMQ", "GEMINI API"],
        link: "https://github.com/KhwaishAg/CareLoop",
        demo: "https://careloop-e2ry.onrender.com/",
      },
      {
        num: ".03",
        title: "NUTRITRACK",
        meta: "FULL-STACK NUTRITION PLATFORM",
        body: "Full-stack nutrition tracking platform with 6+ core features — calorie tracking, water intake, diet goals, nutritionist appointment booking. RESTful APIs across 4+ MongoDB collections.",
        stack: ["MONGODB", "EXPRESS", "ANGULARJS", "NODE.JS"],
        link: null,
        links: [
          { label: "FRONTEND ↗", href: "https://github.com/KhwaishAg/Nutri_Frontend" },
          { label: "BACKEND ↗", href: "https://github.com/KhwaishAg/Nutri_Backend" },
        ],
      },
      {
        num: ".04",
        title: "SAFETRAIL",
        meta: "AI-POWERED TRAVEL SAFETY COMPANION",
        body: "Analyzes geospatial data with K-Means clustering to flag high-risk areas. Integrated Google Maps + Directions APIs to route around danger zones and visualize safety on interactive maps.",
        stack: ["NEXT.JS", "TYPESCRIPT", "SCIKIT-LEARN", "GOOGLE MAPS API", "MONGODB"],
        link: "https://github.com/KhwaishAg/SafeTrail-frontend",
      },
      {
        num: ".05",
        title: "SYNAPSE",
        meta: "AI-DRIVEN DELIVERY ISSUE RESOLUTION",
        body: "Logistics monitoring system that detects delays, route deviations, and failed deliveries. LLM-based multi-step workflows via LangGraph auto-classify issues and draft resolutions.",
        stack: ["PYTHON", "LANGGRAPH", "LLM APIS"],
        link: "https://github.com/KhwaishAg/GrabHack-Synapse",
      },
      {
        num: ".06",
        title: "FAKE PRODUCT REVIEW RING DETECTION",
        meta: "GRAPH-BASED BIG-DATA ANALYTICS",
        body: "Graph-based big-data project identifying suspicious patterns and interconnected fraud rings in product reviews — processing review data at scale to surface relationships between reviewer entities.",
        stack: ["APACHE SPARK", "GRAPHFRAMES", "HDFS"],
        link: null,
      },
      {
        num: ".07",
        title: "SMART QUANTUM-RESISTANT VAULT",
        meta: "POST-QUANTUM SECURE FILE VAULT",
        body: "Secure file-vault combining conventional cryptography with post-quantum key encapsulation. Modularized into core, intelligence, vault, logs, and UI components, with a Streamlit dashboard on top.",
        stack: ["PYTHON", "STREAMLIT", "AES", "RSA", "ML-KEM / KYBER"],
        link: "https://github.com/KhwaishAg/Smart-Quantum-Resistant-Data-Vault",
      },
      {
        num: ".08",
        title: "ADAPTIVE EAVESDROPPER DETECTION — BB84 QKD",
        meta: "ML + QUANTUM KEY DISTRIBUTION",
        body: "Adaptive machine-learning-based eavesdropper detection for Decoy-State BB84 Quantum Key Distribution, with post-quantum key authentication built into the proposed secure communication pipeline.",
        stack: ["MACHINE LEARNING", "QUANTUM KEY DISTRIBUTION"],
        link: null,
      },
    ],
  },

  // ---- STACK (deliberately plain, contrast against the loud hero) ----
  // grouped by what kind of thing it is, not just dumped in one bucket
  stack: {
    tag: ".06 — STACK",
    groups: [
      { label: "LANGUAGES", items: ["Python", "C++", "C", "Java", "SQL", "JavaScript", "TypeScript", "C#/.NET", "R"] },
      { label: "WEB & FRAMEWORKS", items: ["React", "Next.js", "Node.js", "Express.js", "AngularJS", "jQuery", "HTML/CSS", "Bootstrap"] },
      { label: "AI / ML", items: ["Machine Learning", "Generative AI", "LLMs", "LangGraph", "Scikit-learn", "K-Means Clustering"] },
      { label: "DATABASES", items: ["MongoDB", "MySQL", "SQLite", "PostgreSQL", "Supabase", "Prisma"] },
      { label: "CLOUD & BIG DATA", items: ["AWS", "Azure", "Hadoop", "Spark", "GraphFrames", "Hive"] },
      { label: "CS FUNDAMENTALS", items: ["Data Structures & Algorithms", "Object-Oriented Programming", "REST APIs"] },
      { label: "TOOLS", items: ["Git", "GitHub", "Docker", "Postman", "Linux"] },
    ],
  },

  footer: {
    tag: ".07 — LET'S TALK",
    sayHi: ["LET'S", "TALK"],
    ticker: "ALWAYS SHIPPING ✦ OPEN TO INTERNSHIPS ✦ REPLIES FAST ✦ ",
    tagline: "BUILT WITH COFFEE, CHAOS, AND TOO MANY BROWSER TABS.",
    legal: "© 2026 KHWAISH AGARWALA. ALL RIGHTS RESERVED.",
    form: {
      namePlaceholder: "YOUR NAME",
      emailPlaceholder: "YOUR EMAIL",
      messagePlaceholder: "WHAT'S UP?",
      submitLabel: "SEND →",
      successMessage: "MESSAGE SENT. TALK SOON.",
      fallbackNote: "OPENS YOUR EMAIL APP TO SEND — NO FORM BACKEND CONNECTED YET.",
    },
  },
};
