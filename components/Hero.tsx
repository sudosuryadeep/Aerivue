"use client";
import { useEffect, useRef, useState } from "react";

const STACK = ["Next.js 14", "TypeScript", "Tailwind", "Node.js", "MongoDB", "Vercel"];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleMouse = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 30,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400&family=Outfit:wght@300;400;500;600&display=swap');
        .f-syne   { font-family: 'Syne', sans-serif; }
        .f-mono   { font-family: 'DM Mono', monospace; }
        .f-outfit { font-family: 'Outfit', sans-serif; }

        @keyframes fadeUp   { from { opacity:0; transform:translateY(28px) } to { opacity:1; transform:translateY(0) } }
        @keyframes fadeIn   { from { opacity:0 } to { opacity:1 } }
        @keyframes orbFloat { 0%,100%{transform:translate(-50%,-50%) scale(1)} 50%{transform:translate(-50%,-50%) scale(1.08)} }
        @keyframes pulse    { 0%,100%{opacity:.5} 50%{opacity:1} }
        @keyframes spin     { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes stackIn  { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        @keyframes scanline { 0%{transform:translateY(-100%)} 100%{transform:translateY(400%)} }

        .hero-enter-1 { animation: fadeUp .9s cubic-bezier(.22,1,.36,1) .1s both; }
        .hero-enter-2 { animation: fadeUp .9s cubic-bezier(.22,1,.36,1) .25s both; }
        .hero-enter-3 { animation: fadeUp .9s cubic-bezier(.22,1,.36,1) .4s both; }
        .hero-enter-4 { animation: fadeUp .9s cubic-bezier(.22,1,.36,1) .55s both; }
        .hero-enter-5 { animation: fadeUp .9s cubic-bezier(.22,1,.36,1) .7s both; }
        .hero-enter-6 { animation: fadeIn 1.2s ease .8s both; }

        .orb-1 { position:absolute; border-radius:9999px; filter:blur(140px); pointer-events:none; animation: orbFloat 10s ease-in-out infinite; }
        .orb-2 { position:absolute; border-radius:9999px; filter:blur(120px); pointer-events:none; animation: orbFloat 14s ease-in-out infinite reverse; }

        .gridlines { position:absolute; inset:0; pointer-events:none;
          background-image: linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),
                            linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px);
          background-size:72px 72px; }

        .badge-dot { width:6px; height:6px; border-radius:50%; background:#4ade80; animation: pulse 2s ease-in-out infinite; box-shadow:0 0 8px #4ade8088; }

        .cta-primary { transition: background .2s, transform .2s, box-shadow .2s; }
        .cta-primary:hover { background:rgba(255,255,255,.88); transform:translateY(-2px); box-shadow:0 16px 48px rgba(255,255,255,.12); }
        .cta-outline { transition: border-color .2s, color .2s, transform .2s; }
        .cta-outline:hover { border-color:rgba(255,255,255,.28); color:#fff; transform:translateY(-2px); }

        .stack-pill { transition: border-color .2s, background .2s, transform .2s; }
        .stack-pill:hover { border-color:rgba(255,255,255,.2); background:rgba(255,255,255,.06); transform:translateY(-3px); }

        .stat-card { transition: border-color .2s, background .2s; }
        .stat-card:hover { border-color: rgba(255,255,255,.12); background: rgba(255,255,255,.025); }

        .scanline-track { position:absolute; inset:0; overflow:hidden; pointer-events:none; border-radius:inherit; }
        .scanline { position:absolute; left:0; right:0; height:2px;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,.06),transparent);
          animation: scanline 4s linear infinite; }

        .ring-spin { animation: spin 18s linear infinite; }

        .stack-item-0 { animation: stackIn .5s ease .9s both; }
        .stack-item-1 { animation: stackIn .5s ease 1.0s both; }
        .stack-item-2 { animation: stackIn .5s ease 1.1s both; }
        .stack-item-3 { animation: stackIn .5s ease 1.2s both; }
        .stack-item-4 { animation: stackIn .5s ease 1.3s both; }
        .stack-item-5 { animation: stackIn .5s ease 1.4s both; }
      `}</style>

      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#080808]"
        style={{ paddingTop: "6rem", paddingBottom: "4rem" }}
      >
        {/* Grid */}
        <div className="gridlines" />

        {/* Orbs */}
        <div
          className="orb-1 w-[600px] h-[500px] bg-white left-1/2 top-1/2 opacity-[.035]"
          style={{
            transform: `translate(calc(-50% + ${mousePos.x * 0.4}px), calc(-50% + ${mousePos.y * 0.3}px)) scale(1)`,
            transition: "transform 0.8s cubic-bezier(.25,.46,.45,.94)",
          }}
        />
        <div
          className="orb-2 w-[350px] h-[350px] bg-blue-400 left-[15%] top-[30%] opacity-[.025]"
          style={{
            transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.15}px)`,
            transition: "transform 1.2s cubic-bezier(.25,.46,.45,.94)",
          }}
        />
        <div
          className="orb-2 w-[280px] h-[280px] bg-purple-400 right-[12%] bottom-[25%] opacity-[.02]"
          style={{
            transform: `translate(${mousePos.x * -0.15}px, ${mousePos.y * -0.1}px)`,
            transition: "transform 1.6s cubic-bezier(.25,.46,.45,.94)",
          }}
        />

        {/* Rotating ring (decorative) */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hero-enter-6"
          style={{ width: "820px", height: "820px" }}
        >
          <svg
            className="ring-spin w-full h-full"
            viewBox="0 0 820 820"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="410" cy="410" r="406" stroke="url(#ringGrad)" strokeWidth="0.5" />
            <defs>
              <linearGradient id="ringGrad" x1="0" y1="0" x2="820" y2="820" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="30%" stopColor="white" stopOpacity="0.06" />
                <stop offset="60%" stopColor="white" stopOpacity="0.03" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto w-full">

          {/* Top badge */}
          <div className="hero-enter-1 mb-8">
            <div className="inline-flex items-center gap-2.5 border border-white/[.08] bg-white/[.025] rounded-full px-4 py-2 backdrop-blur-sm">
              <div className="badge-dot" />
              <span className="f-mono text-[10px] tracking-[.22em] text-white/42 uppercase">
                India's Premium Web Studio
              </span>
            </div>
          </div>

          {/* Main headline */}
          <h1
            className="f-syne font-extrabold text-white leading-[1.04] tracking-tight hero-enter-2"
            style={{ fontSize: "clamp(2.8rem, 7.5vw, 7rem)" }}
          >
            We Build Websites
            <br />
            <span className="text-white/18">That Actually</span>
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.28) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Rank & Convert.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="f-outfit text-white/36 mt-7 max-w-[560px] leading-[1.85] text-[16px] md:text-[17px] hero-enter-3">
            Fast, SEO-dominant, pixel-perfect — built from scratch using{" "}
            <span className="text-white/55">Next.js 14</span>,{" "}
            <span className="text-white/55">TypeScript</span> &{" "}
            <span className="text-white/55">Tailwind CSS</span>.
            No templates. No outsourcing. Ever.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3.5 mt-10 hero-enter-4">
            <a
              href="/contact"
              className="cta-primary f-syne font-bold text-sm px-9 py-4 bg-white text-black rounded-full inline-flex items-center gap-2"
            >
              Start Your Project
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/services"
              className="cta-outline f-syne font-semibold text-sm px-9 py-4 border border-white/15 text-white/42 rounded-full inline-flex items-center gap-2"
            >
              Explore Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="https://t.me/aerivue"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-outline f-syne font-semibold text-sm px-9 py-4 border border-white/15 text-white/42 rounded-full inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              t.me/aerivue
            </a>
          </div>

          {/* Tech stack pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-10 hero-enter-5">
            {STACK.map((tech, i) => (
              <span
                key={tech}
                className={`stack-pill stack-item-${i} f-mono text-[10px] text-white/30 border border-white/[.07] bg-white/[.018] rounded-full px-3.5 py-1.5 tracking-widest cursor-default`}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-16 w-full max-w-3xl hero-enter-5">
            {[
              { n: "50+",   l: "Projects Delivered",  s: "India & global clients" },
              { n: "90+",   l: "PageSpeed Score",      s: "Guaranteed CWV" },
              { n: "24hr",  l: "Fixed Quote",          s: "After discovery call" },
              { n: "100%",  l: "Custom Builds",        s: "Zero templates used" },
            ].map((stat) => (
              <div
                key={stat.l}
                className="stat-card border border-white/[.06] bg-white/[.012] rounded-2xl px-5 py-5 text-left relative overflow-hidden"
              >
                <div className="scanline-track">
                  <div className="scanline" />
                </div>
                <div className="f-syne font-extrabold text-[1.6rem] text-white leading-none mb-1.5">
                  {stat.n}
                </div>
                <div className="f-outfit text-white/50 text-[12px] font-medium leading-snug">
                  {stat.l}
                </div>
                <div className="f-mono text-[9px] text-white/18 mt-1 tracking-wider">
                  {stat.s}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent, #080808)",
          }}
        />
      </section>
    </>
  );
}