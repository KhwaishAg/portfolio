/* ============================================================
   SCRIPT.JS — renders CONTENT into the DOM + all interactions.
   You shouldn't need to edit this file to change text — see
   js/content.js instead.
   ============================================================ */

(function () {
  "use strict";

  /* ---------------- RENDER CONTENT ---------------- */

  function renderNav() {
    const nav = document.getElementById("nav-links");
    nav.innerHTML = CONTENT.nav
      .map((n) => `<a href="${n.href}">${n.label}</a>`)
      .join("");
  }

  function renderHero() {
    document.getElementById("hero-kicker").textContent = CONTENT.hero.kicker;
    document.getElementById("hero-headline").innerHTML = CONTENT.hero.words
      .map((w) => `<span data-scramble data-text="${w}">${w}</span>`)
      .join("");
    document.getElementById("hero-sub").textContent = CONTENT.hero.sub;
    const cta = document.getElementById("hero-cta");
    cta.textContent = CONTENT.hero.cta.label;
    cta.href = CONTENT.hero.cta.href;

    const resumeCta = document.getElementById("hero-resume-cta");
    if (resumeCta && CONTENT.meta.resume) {
      resumeCta.textContent = CONTENT.hero.resumeCta.label;
      resumeCta.href = CONTENT.meta.resume;
    }

    const track = document.getElementById("marquee-track");
    // repeat enough times to guarantee seamless loop across wide screens
    track.textContent = CONTENT.hero.marquee.repeat(6);

    const ribbon = document.getElementById("ribbon-track-1");
    if (ribbon) ribbon.textContent = CONTENT.hero.ribbon.repeat(8);

    document.getElementById("sys-coords").textContent = CONTENT.system.coords;
    document.getElementById("sys-status").textContent = CONTENT.system.status;

    const img = document.getElementById("hero-photo-img");
    const frame = document.querySelector(".hero-photo");
    if (img && CONTENT.meta.photo) {
      img.alt = CONTENT.meta.photoAlt || "";
      img.addEventListener("load", () => {
        img.classList.add("loaded");
        frame.classList.add("has-photo");
      });
      img.src = CONTENT.meta.photo; // 404s silently if not added yet — fallback stays visible
    }
  }

  function renderAbout() {
    document.getElementById("about-tag").textContent = CONTENT.about.tag;
    document.getElementById("about-quote").innerHTML = CONTENT.about.pullQuote
      .map((line) => `<span data-reveal>${line}</span><br>`)
      .join("");
    document.getElementById("about-body").textContent = CONTENT.about.body;
  }

  // supports the common case (item.link = repo, item.demo = live demo)
  // plus an explicit item.links = [{label, href}] array for anything with
  // more than two links (e.g. separate frontend/backend repos)
  function buildWorkLinks(item) {
    const links = [];
    if (item.demo) links.push({ label: "LIVE ↗", href: item.demo, external: true });
    if (item.link) {
      const isAnchor = item.link.startsWith("#");
      links.push({ label: isAnchor ? "VIEW ↓" : "CODE ↗", href: item.link, external: !isAnchor });
    }
    if (Array.isArray(item.links)) {
      item.links.forEach((l) => links.push({ label: l.label, href: l.href, external: true }));
    }
    return links
      .map(
        (l) =>
          `<a class="work-link mono magnetic${l.label.startsWith("LIVE") ? " work-link-demo" : ""}" href="${l.href}"${l.external ? ' target="_blank" rel="noopener"' : ""}>${l.label}</a>`
      )
      .join("");
  }

  function renderItemList(sectionKey, tagId, listId, featureFirst) {
    const data = CONTENT[sectionKey];
    document.getElementById(tagId).textContent = data.tag;
    const list = document.getElementById(listId);
    list.innerHTML = data.items
      .map(
        (item, idx) => `
      <div class="work-item${featureFirst && idx === 0 ? " featured" : ""}" data-reveal data-cursor-hover="VIEW">
        <span class="work-num mono">${item.num}</span>
        <div class="work-body">
          <h3>${item.title}</h3>
          <span class="work-meta mono">${item.meta}</span>
          <p class="work-desc">${item.body}</p>
          <div class="work-stack mono">
            ${item.stack.map((s) => `<span>${s}</span>`).join("")}
          </div>
        </div>
        <div class="work-link-group">
          ${buildWorkLinks(item)}
        </div>
      </div>`
      )
      .join("");
  }

  function renderExperience() {
    renderItemList("experience", "experience-tag", "experience-list", true);
  }

  function renderLeadership() {
    renderItemList("leadership", "leadership-tag", "leadership-list", false);
  }

  function renderCertifications() {
    renderItemList("certifications", "certifications-tag", "certifications-list", false);
  }

  function renderProjects() {
    // no "featured" giant card here — projects render as a compact 2-col
    // grid (see #projects-list in style.css), so every card stays the same size
    renderItemList("projects", "projects-tag", "projects-list", false);
  }

  function renderStack() {
    document.getElementById("stack-tag").textContent = CONTENT.stack.tag;
    const groups = document.getElementById("stack-groups");
    groups.innerHTML = CONTENT.stack.groups
      .map(
        (g) => `
      <div class="stack-group" data-reveal>
        <p class="stack-group-label mono">${g.label}</p>
        <ul>${g.items.map((i) => `<li>${i}</li>`).join("")}</ul>
      </div>`
      )
      .join("");
  }

  function renderFooter() {
    document.getElementById("footer-email-text").textContent = CONTENT.meta.email.toUpperCase();
    document.getElementById("footer-email").href = `mailto:${CONTENT.meta.email}`;
    document.getElementById("footer-github").href = CONTENT.meta.github;
    document.getElementById("footer-linkedin").href = CONTENT.meta.linkedin;
    document.getElementById("footer-leetcode").href = CONTENT.meta.leetcode;
    if (CONTENT.meta.resume) {
      document.getElementById("footer-resume").href = CONTENT.meta.resume;
    }
    document.getElementById("footer-loc").textContent = CONTENT.meta.location;
    document.getElementById("footer-tagline").textContent = CONTENT.footer.tagline;
    document.getElementById("footer-legal").textContent = CONTENT.footer.legal;
    document.getElementById("footer-tag").textContent = CONTENT.footer.tag;

    const ticker = document.getElementById("footer-ticker-track");
    if (ticker) ticker.textContent = CONTENT.footer.ticker.repeat(6);

    // plain text on purpose — this is a CTA, not decoration, it should
    // never be caught mid-scramble looking broken
    const sayHi = document.getElementById("footer-sayhi");
    sayHi.textContent = CONTENT.footer.sayHi.join(" ");
    document.getElementById("say-hi-cta").href = `mailto:${CONTENT.meta.email}`;

    const f = CONTENT.footer.form;
    document.getElementById("cf-name").placeholder = f.namePlaceholder;
    document.getElementById("cf-email").placeholder = f.emailPlaceholder;
    document.getElementById("cf-message").placeholder = f.messagePlaceholder;
    document.getElementById("contact-submit").textContent = f.submitLabel;
  }

  /* ---------------- LOADER ---------------- */

  function runLoader() {
    const loader = document.getElementById("loader");
    const text = document.getElementById("loader-text");
    let pct = 0;
    text.textContent = `${CONTENT.system.loading} 0%`;
    const t = setInterval(() => {
      pct += Math.ceil(Math.random() * 22);
      if (pct >= 100) {
        pct = 100;
        clearInterval(t);
        text.textContent = `${CONTENT.system.loading} 100%`;
        setTimeout(() => loader.classList.add("done"), 250);
      } else {
        text.textContent = `${CONTENT.system.loading} ${pct}%`;
      }
    }, 90);
  }

  /* ---------------- SCROLL REVEAL ---------------- */

  function initScrollReveal() {
    const targets = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    targets.forEach((t) => io.observe(t));
  }

  /* ---------------- SCROLL PROGRESS ---------------- */

  function initScrollProgress() {
    const bar = document.getElementById("scroll-progress");
    window.addEventListener(
      "scroll",
      () => {
        const h = document.documentElement;
        const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
        bar.style.width = scrolled + "%";
      },
      { passive: true }
    );
  }

  /* ---------------- LIVE CLOCK ---------------- */

  function initClock() {
    const els = [document.getElementById("sys-clock")].filter(Boolean);
    if (!els.length) return;
    function tick() {
      const now = new Date();
      const text = "T+ " + now.toTimeString().slice(0, 8) + " IST";
      els.forEach((el) => (el.textContent = text));
    }
    tick();
    setInterval(tick, 1000);
  }

  /* ---------------- CUSTOM CURSOR ---------------- */

  function initCursor() {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    if (!isFine) return;

    const dot = document.querySelector(".cursor-dot");
    const label = document.getElementById("cursor-label");
    let x = 0, y = 0, cx = 0, cy = 0;

    window.addEventListener("mousemove", (e) => {
      x = e.clientX;
      y = e.clientY;
      dot.classList.add("active");
      label.style.left = x + "px";
      label.style.top = y + "px";
    });

    function raf() {
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      dot.style.left = cx + "px";
      dot.style.top = cy + "px";
      requestAnimationFrame(raf);
    }
    raf();

    document.querySelectorAll("a, button, [data-cursor-hover]").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        dot.classList.add("grow");
        const text = el.getAttribute("data-cursor-hover");
        if (text) {
          label.textContent = text;
          label.classList.add("show");
        }
      });
      el.addEventListener("mouseleave", () => {
        dot.classList.remove("grow");
        label.classList.remove("show");
      });
    });
  }

  /* ---------------- MAGNETIC BUTTONS ---------------- */

  function initMagnetic() {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    if (!isFine) return;
    document.querySelectorAll(".magnetic").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const relX = e.clientX - r.left - r.width / 2;
        const relY = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${relX * 0.25}px, ${relY * 0.35}px)`;
      });
      el.addEventListener("mouseleave", () => {
        el.style.transform = "translate(0, 0)";
      });
    });
  }

  /* ---------------- TEXT SCRAMBLE ---------------- */

  const SCRAMBLE_CHARS = "!<>-_\\/[]{}—=+*^?#________";

  function scramble(el) {
    if (el.dataset.scrambling === "true") return;
    el.dataset.scrambling = "true";
    const original = el.textContent;
    const len = original.length;
    let frame = 0;
    const totalFrames = 14;

    const interval = setInterval(() => {
      let out = "";
      for (let i = 0; i < len; i++) {
        if (i < (frame / totalFrames) * len) {
          out += original[i];
        } else {
          out += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }
      }
      el.textContent = out;
      frame++;
      if (frame > totalFrames) {
        clearInterval(interval);
        el.textContent = original;
        el.dataset.scrambling = "false";
      }
    }, 35);
  }

  function initScramble() {
    const els = document.querySelectorAll("[data-scramble]");
    els.forEach((el) => {
      el.addEventListener("mouseenter", () => scramble(el));
    });
    // run once on load for hero words, staggered
    els.forEach((el, i) => {
      setTimeout(() => scramble(el), 1400 + i * 200);
    });
  }

  /* ---------------- MARQUEE PAUSE ON HOVER ---------------- */

  function initMarqueePause() {
    const pairs = [
      [document.querySelector(".marquee-strip"), document.getElementById("marquee-track")],
      [document.querySelector(".footer-ticker-strip"), document.getElementById("footer-ticker-track")],
    ];
    pairs.forEach(([strip, track]) => {
      if (!strip || !track) return;
      strip.addEventListener("mouseenter", () => (track.style.animationPlayState = "paused"));
      strip.addEventListener("mouseleave", () => (track.style.animationPlayState = "running"));
    });
  }

  /* ---------------- FILM GRAIN ---------------- */

  function initGrain() {
    const canvas = document.getElementById("grain");
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    let w, h;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    // small tile, upscaled — full-res noise every frame is too expensive
    const tile = 140;
    const tileCanvas = document.createElement("canvas");
    tileCanvas.width = tile;
    tileCanvas.height = tile;
    const tileCtx = tileCanvas.getContext("2d");

    function drawTile() {
      const imgData = tileCtx.createImageData(tile, tile);
      const buffer = imgData.data;
      for (let i = 0; i < buffer.length; i += 4) {
        const val = Math.random() * 255;
        buffer[i] = buffer[i + 1] = buffer[i + 2] = val;
        buffer[i + 3] = 22;
      }
      tileCtx.putImageData(imgData, 0, 0);
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(tileCanvas, 0, 0, w, h);
    }
    drawTile();
    setInterval(drawTile, 90); // ~11fps flicker reads as "grain", not a slideshow
  }

  /* ---------------- HEADLINE GLITCH ---------------- */

  function initGlitch() {
    const spans = document.querySelectorAll(".hero-headline span");
    if (!spans.length) return;

    function fire() {
      const el = spans[Math.floor(Math.random() * spans.length)];
      el.classList.add("glitching");
      setTimeout(() => el.classList.remove("glitching"), 350);
      setTimeout(fire, 2600 + Math.random() * 3000);
    }
    setTimeout(fire, 2200);

    spans.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        el.classList.add("glitching");
        setTimeout(() => el.classList.remove("glitching"), 350);
      });
    });
  }

  /* ---------------- ABOUT VISUAL TILT ---------------- */

  function initTilt() {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    const el = document.getElementById("about-visual");
    if (!el || !isFine) return;
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `rotateY(${px * 10}deg) rotateX(${-py * 10}deg)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "rotateY(0) rotateX(0)";
    });
  }

  /* ---------------- SCATTERED GLYPH CLUTTER ---------------- */

  function initFloatGlyphs() {
    const glyphs = ["+", "×", "•", "/"];
    const hosts = [
      { el: document.getElementById("hero"), count: 6 },
      { el: document.getElementById("about"), count: 4 },
    ];
    hosts.forEach(({ el, count }) => {
      if (!el) return;
      el.style.position = el.style.position || "relative";
      for (let i = 0; i < count; i++) {
        const span = document.createElement("span");
        span.className = "float-glyph";
        span.setAttribute("aria-hidden", "true");
        span.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
        span.style.top = Math.random() * 90 + "%";
        span.style.left = Math.random() * 92 + "%";
        span.style.fontSize = 10 + Math.random() * 18 + "px";
        span.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;
        el.appendChild(span);
      }
    });
  }

  /* ---------------- SCROLLSPY NAV ---------------- */

  function initScrollSpy() {
    const links = document.querySelectorAll(".nav-links a");
    if (!links.length) return;
    const sections = Array.from(links)
      .map((l) => document.querySelector(l.getAttribute("href")))
      .filter(Boolean);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = "#" + entry.target.id;
            links.forEach((l) =>
              l.classList.toggle("active", l.getAttribute("href") === id)
            );
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
  }

  /* ---------------- BACK TO TOP ---------------- */

  function initBackToTop() {
    const btn = document.getElementById("back-to-top");
    if (!btn) return;
    window.addEventListener(
      "scroll",
      () => btn.classList.toggle("show", window.scrollY > window.innerHeight * 0.8),
      { passive: true }
    );
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ---------------- HERO PARALLAX ---------------- */

  function initParallax() {
    const spans = document.querySelectorAll(".hero-headline span");
    const rates = [0.12, 0.22, 0.32];
    if (!spans.length) return;
    let ticking = false;
    window.addEventListener(
      "scroll",
      () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          const y = window.scrollY;
          spans.forEach((el, i) => {
            el.style.setProperty("--parallax-y", `${y * (rates[i] || 0.2)}px`);
            el.style.translate = `0 ${y * (rates[i] || 0.2)}px`;
          });
          ticking = false;
        });
      },
      { passive: true }
    );
  }

  /* ---------------- CONTACT FORM ---------------- */

  function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;
    const status = document.getElementById("contact-status");
    const submitBtn = document.getElementById("contact-submit");
    const f = CONTENT.footer.form;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.getElementById("cf-name").value.trim();
      const email = document.getElementById("cf-email").value.trim();
      const message = document.getElementById("cf-message").value.trim();

      if (!name || !email || !message) {
        status.textContent = "FILL IN ALL THREE FIELDS FIRST.";
        status.classList.add("error");
        return;
      }
      status.classList.remove("error");

      const endpoint = CONTENT.meta.formEndpoint;
      const isRealEndpoint = endpoint && /^https:\/\//.test(endpoint);

      if (!isRealEndpoint) {
        // no backend configured — fall back to opening the visitor's email client
        const subject = encodeURIComponent(`Portfolio contact from ${name}`);
        const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
        window.location.href = `mailto:${CONTENT.meta.email}?subject=${subject}&body=${body}`;
        status.textContent = f.fallbackNote;
        return;
      }

      const originalLabel = submitBtn.textContent;
      submitBtn.textContent = "SENDING...";
      submitBtn.disabled = true;

      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        });
        if (res.ok) {
          status.textContent = f.successMessage;
          form.reset();
        } else {
          throw new Error("Non-OK response");
        }
      } catch (err) {
        status.textContent = "COULDN'T SEND — TRY EMAILING DIRECTLY INSTEAD.";
        status.classList.add("error");
      } finally {
        submitBtn.textContent = originalLabel;
        submitBtn.disabled = false;
      }
    });
  }

  /* ---------------- MOBILE NAV ---------------- */

  function initMobileNav() {
    const toggle = document.getElementById("nav-toggle");
    const links = document.getElementById("nav-links");
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("mobile-open");
      toggle.textContent = open ? "✕" : "☰";
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("mobile-open");
        toggle.textContent = "☰";
      })
    );
  }

  /* ---------------- INIT ---------------- */

  document.addEventListener("DOMContentLoaded", () => {
    renderNav();
    renderHero();
    renderAbout();
    renderExperience();
    renderLeadership();
    renderCertifications();
    renderProjects();
    renderStack();
    renderFooter();

    runLoader();
    initScrollReveal();
    initScrollProgress();
    initClock();
    initCursor();
    initMagnetic();
    initScramble();
    initMarqueePause();
    initGrain();
    initMobileNav();
    initGlitch();
    initTilt();
    initFloatGlyphs();
    initScrollSpy();
    initBackToTop();
    initParallax();
    initContactForm();
  });
})();
