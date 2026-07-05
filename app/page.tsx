import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Aerivue — Premium Next.js Web Development Services India",
  description:
    "Aerivue builds fast, SEO-optimized, modern websites using Next.js, TypeScript & Tailwind CSS. Web design, development, backend API, SEO & branding — India-based, globally trusted.",
  keywords: [
    "Aerivue", "Next.js web development India", "web development services India",
    "SEO website development", "React developer India", "aerivue.dev",
  ],
  openGraph: {
    title: "Aerivue — Premium Web Development Services India",
    description: "Fast, SEO-optimized websites by Aerivue. Next.js, TypeScript, Tailwind CSS.",
    url: "https://aerivue.dev",
  },
  alternates: { canonical: "https://aerivue.dev" },
};

const services = [
  { id: "01", tag: "Most Popular", title: "Website Design & Development", desc: "Pixel-perfect, conversion-focused websites built with Next.js 14 and Tailwind. Mobile-first, SEO-ready, Core Web Vitals optimized.", href: "/services" },
  { id: "02", tag: "Backend", title: "Backend API Development", desc: "Scalable REST APIs in Node.js + Express + MongoDB. JWT auth, rate limiting, full documentation.", href: "/services" },
  { id: "03", tag: "New", title: "API for Rent", desc: "Ready-made APIs for auth, payments, notifications — pay monthly, integrate in hours.", href: "/services" },
  { id: "04", tag: "Full Stack", title: "SaaS Product Development", desc: "End-to-end SaaS products — auth, billing, dashboards, admin panels.", href: "/services" },
  { id: "05", tag: "SEO", title: "SEO & Technical Optimization", desc: "Google Search Console, structured data, sitemap, Core Web Vitals audit.", href: "/services" },
  { id: "06", tag: "Design", title: "Brand Identity & UI Design", desc: "Logos, brand guidelines, color systems — everything your brand needs to look premium.", href: "/services" },
];

const process = [
  { n: "01", t: "Discovery Call", d: "Free 30-min call. We understand your goals, audience, and timeline." },
  { n: "02", t: "Fixed Quote", d: "Detailed scope + fixed price within 24 hours. No vague estimates." },
  { n: "03", t: "Design & Build", d: "We design, develop, and share progress. You stay in the loop." },
  { n: "04", t: "Launch & Handover", d: "We deploy, set up analytics, and hand over full ownership." },
];

const whyUs = [
  { icon: "⬡", t: "SEO Built-In From Day One", d: "Metadata, sitemaps, structured data & Search Console setup — not bolted on later." },
  { icon: "◈", t: "No Templates. Ever.", d: "Every project starts from a blank canvas. Your site looks like no one else's." },
  { icon: "◉", t: "Core Web Vitals Obsessed", d: "We target 90+ scores on PageSpeed. Fast LCP, minimal FID, zero CLS." },
  { icon: "◫", t: "Direct Communication", d: "You talk to the person building your product — not a PM or a ticketing system." },
];

const ACCENTS = ["#FF2E63", "#8B5CF6", "#22D3EE", "#FFC857"];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0B0B14] text-[#F5F3FF] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
        .f-display { font-family:'Anton', sans-serif; }
        .f-body    { font-family:'Space Grotesk', sans-serif; }
        .f-mono    { font-family:'JetBrains Mono', monospace; }

        @keyframes ticker    { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes floatBlob { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(20px,-22px) scale(1.06)} }
        @keyframes gradShift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes glowPulse { 0%,100%{box-shadow:0 0 22px 2px rgba(255,46,99,.35)} 50%{box-shadow:0 0 34px 6px rgba(139,92,246,.4)} }

        .grad-text{
          background: linear-gradient(90deg,#FF2E63,#8B5CF6 45%,#22D3EE 90%);
          background-size:200% auto;
          -webkit-background-clip:text; background-clip:text; color:transparent;
          animation: gradShift 6s ease-in-out infinite;
        }

        .halftone{
          position:absolute; inset:0; pointer-events:none;
          background-image: radial-gradient(rgba(245,243,255,.09) 1.4px, transparent 1.4px);
          background-size:16px 16px;
          -webkit-mask-image: radial-gradient(ellipse 60% 55% at 50% 40%, #000 0%, transparent 75%);
                  mask-image: radial-gradient(ellipse 60% 55% at 50% 40%, #000 0%, transparent 75%);
        }
        .blob{ position:absolute; border-radius:9999px; filter:blur(100px); pointer-events:none; animation:floatBlob 11s ease-in-out infinite; }

        .ticker-wrap{overflow:hidden}
        .ticker-track{display:flex;width:max-content;animation:ticker 30s linear infinite}

        .cta-glow{ animation: glowPulse 3.5s ease-in-out infinite; }

        .panel{
          border:2px solid rgba(245,243,255,.85);
          background:#12121D;
          transition: transform .18s cubic-bezier(.16,1,.3,1);
        }
        .panel:hover{ transform: translate(-3px,-3px); }

        .tech-pill{ transition: transform .18s ease; }
        .tech-pill:hover{ transform: translate(-2px,-2px); }
      `}</style>

      <Hero />

      {/* TICKER */}
      <div className="ticker-wrap border-y-2 border-[#F5F3FF]/15 py-3" style={{ background: "linear-gradient(90deg,#1A0F1A,#12121D,#0F1A1D)" }}>
        <div className="ticker-track f-mono text-[11px] tracking-[.2em] text-[#F5F3FF]/40 uppercase select-none">
          {[0, 1].map((k) => (
            <span key={k}>
              {["Next.js 14", "Ⓐ", "TypeScript", "Ⓐ", "Tailwind CSS", "Ⓐ", "Node.js", "Ⓐ", "MongoDB", "Ⓐ",
                "REST API", "Ⓐ", "SEO Optimized", "Ⓐ", "Core Web Vitals", "Ⓐ", "SaaS", "Ⓐ", "Aerivue", "Ⓐ",
              ].map((t, j) => (
                <span key={j} className="mx-6" style={j % 8 === 1 ? { color: ACCENTS[(j / 2) % ACCENTS.length | 0] } : {}}>
                  {t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT STRIP */}
      <section className="px-6 md:px-14 lg:px-24 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="f-mono text-[11px] tracking-[.3em] text-[#22D3EE] uppercase mb-5">who we are</p>
            <h2 className="f-display uppercase leading-[0.95] mb-6" style={{ fontSize: "clamp(2rem,5vw,3.6rem)" }}>
              Aerivue is a <span className="grad-text">premium web studio</span> from India.
            </h2>
            <p className="f-body text-[#F5F3FF]/45 text-[15px] leading-[1.85] mb-8">
              We design and engineer digital products that are fast, SEO-dominant, and visually precise.
              No templates. No bloat. No outsourcing — every project is custom-built from scratch.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/about" className="cta-glow f-body font-bold text-sm px-6 py-3 rounded-full text-[#0B0B14] inline-flex items-center gap-2" style={{ background: "linear-gradient(90deg,#FF2E63,#8B5CF6)" }}>
                Our Story
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a href="/services" className="f-body font-semibold text-sm px-6 py-3 border-2 border-[#F5F3FF]/25 text-[#F5F3FF]/65 rounded-full">View Services</a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="panel rounded-xl p-7" style={{ boxShadow: "5px 5px 0 #8B5CF6" }}>
              <p className="f-mono text-[10px] tracking-[.25em] text-[#8B5CF6] uppercase mb-5">tech stack</p>
              <div className="flex flex-wrap gap-2">
                {["Next.js 14", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Vercel", "Figma"].map((t, i) => (
                  <span key={t} className="tech-pill f-mono text-[11px] px-3 py-1.5 rounded-full tracking-wide" style={{ color: ACCENTS[i % ACCENTS.length], border: `2px solid ${ACCENTS[i % ACCENTS.length]}` }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "50+", l: "Projects Delivered", color: ACCENTS[0] },
                { n: "₹3k", l: "Starts From / mo", color: ACCENTS[2] },
              ].map((f) => (
                <div key={f.l} className="panel rounded-xl p-5" style={{ boxShadow: `4px 4px 0 ${f.color}` }}>
                  <div className="f-display text-2xl mb-1" style={{ color: f.color }}>{f.n}</div>
                  <div className="f-body text-[#F5F3FF]/60 text-[13px] font-medium">{f.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 md:px-14 lg:px-24 py-20 border-t-2 border-[#F5F3FF]/10 relative overflow-hidden">
        <div className="blob w-[420px] h-[420px] right-0 top-0" style={{ background: "#FF2E63", opacity: 0.14 }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="f-mono text-[11px] tracking-[.3em] text-[#FFC857] uppercase mb-4">what we build</p>
              <h2 className="f-display uppercase text-4xl md:text-5xl">Our Services</h2>
            </div>
            <a href="/services" className="f-body font-semibold text-sm px-6 py-3 border-2 border-[#F5F3FF]/25 text-[#F5F3FF]/60 rounded-full self-start inline-flex items-center gap-2">
              All Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => {
              const color = ACCENTS[i % ACCENTS.length];
              return (
                <a key={svc.id} href={svc.href} className="panel rounded-xl p-7 flex flex-col gap-3" style={{ boxShadow: `5px 5px 0 ${color}` }}>
                  <div className="flex items-center justify-between">
                    <span className="f-mono text-[10px]" style={{ color }}>{svc.id}</span>
                    <span className="f-mono text-[10px] px-2.5 py-1 rounded-full" style={{ background: color, color: "#0B0B14" }}>{svc.tag}</span>
                  </div>
                  <h3 className="f-body font-bold text-[17px] text-[#F5F3FF]/90 leading-snug">{svc.title}</h3>
                  <p className="f-body text-[#F5F3FF]/40 text-[13px] leading-[1.75] flex-1">{svc.desc}</p>
                  <div className="f-body font-semibold text-[13px] flex items-center gap-1.5 mt-1" style={{ color }}>
                    Learn more
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 md:px-14 lg:px-24 py-20 border-t-2 border-[#F5F3FF]/10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <p className="f-mono text-[11px] tracking-[.3em] text-[#8B5CF6] uppercase mb-4">how it works</p>
            <h2 className="f-display uppercase text-4xl md:text-5xl">Simple Process.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {process.map((p, i) => {
              const color = ACCENTS[i % ACCENTS.length];
              return (
                <div key={p.n} className="panel rounded-xl p-6" style={{ boxShadow: `4px 4px 0 ${color}` }}>
                  <div className="f-display text-xl mb-4" style={{ color }}>{p.n}</div>
                  <div className="f-body font-bold text-[16px] text-[#F5F3FF]/90 mb-2 leading-snug">{p.t}</div>
                  <div className="f-body text-[#F5F3FF]/40 text-[13px] leading-relaxed">{p.d}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY AERIVUE */}
      <section className="px-6 md:px-14 lg:px-24 py-20 border-t-2 border-[#F5F3FF]/10 relative overflow-hidden">
        <div className="blob w-[380px] h-[380px] left-0 bottom-0" style={{ background: "#22D3EE", opacity: 0.14 }} />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-14">
            <p className="f-mono text-[11px] tracking-[.3em] text-[#FF2E63] uppercase mb-4">why choose us</p>
            <h2 className="f-display uppercase text-4xl md:text-5xl">Why Aerivue.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whyUs.map((w, i) => {
              const color = ACCENTS[i % ACCENTS.length];
              return (
                <div key={w.t} className="panel rounded-xl px-8 py-7" style={{ boxShadow: `5px 5px 0 ${color}` }}>
                  <div className="text-2xl mb-4" style={{ color }}>{w.icon}</div>
                  <div className="f-body font-bold text-[16px] text-[#F5F3FF]/90 mb-2 leading-snug">{w.t}</div>
                  <div className="f-body text-[#F5F3FF]/40 text-[13px] leading-relaxed">{w.d}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative px-6 md:px-14 lg:px-24 py-28 border-t-2 border-[#F5F3FF]/10 overflow-hidden text-center">
        <div className="halftone" />
        <div className="blob w-[560px] h-[560px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ background: "linear-gradient(90deg,#FF2E63,#8B5CF6,#22D3EE)", opacity: 0.14 }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="f-mono text-[11px] tracking-[.3em] text-[#FFC857] uppercase mb-7">— start today</p>
          <h2 className="f-display uppercase leading-[0.95] mb-6" style={{ fontSize: "clamp(2.4rem,6.5vw,5.8rem)" }}>
            Your website.
            <br />
            <span className="grad-text">Built by Aerivue.</span>
          </h2>
          <p className="f-body text-[#F5F3FF]/40 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Free 30-min discovery call. Fixed price quote in 24 hours. No templates. No surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <a href="/contact" className="cta-glow f-body font-bold text-sm px-9 py-4 rounded-full text-[#0B0B14] inline-flex items-center gap-2" style={{ background: "linear-gradient(90deg,#FF2E63,#8B5CF6)" }}>
              Start Your Project
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="https://t.me/aerivue" target="_blank" rel="noopener noreferrer" className="f-body font-semibold text-sm px-9 py-4 border-2 border-[#F5F3FF]/50 text-[#F5F3FF]/80 rounded-full">
              t.me/aerivue
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}