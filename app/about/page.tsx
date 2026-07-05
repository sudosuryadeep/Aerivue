export const metadata = {
  title: "About Aerivue | Who We Are & What We Do",
  description:
    "Aerivue is a premium web development brand building fast, SEO-optimized, modern websites. Learn who we are, what we do, our tech stack, values, and how to reach us.",
  keywords: [
    "Aerivue",
    "about Aerivue",
    "Aerivue web development",
    "who is Aerivue",
    "Aerivue agency",
  ],
  openGraph: {
    title: "About Aerivue | Who We Are & What We Do",
    description:
      "Aerivue is a premium web development brand. Learn our story, mission, and how we build digital products.",
    url: "https://aerivue.dev/about",
  },
  alternates: { canonical: "https://aerivue.dev/about" },
};

const faqs = [
  {
    q: "Who is Aerivue?",
    a: "Aerivue is a premium web development brand specializing in building fast, modern, and SEO-optimized digital products. We combine clean engineering with sharp design to create websites and web applications that don't just look great — they perform, rank, and convert. Aerivue was born from a simple belief: every business deserves a digital presence that works as hard as they do.",
  },
  {
    q: "What does Aerivue do?",
    a: "Aerivue designs and develops full-stack web solutions — from pixel-perfect landing pages to complex web applications. Our core work spans custom website development using Next.js and React, UI/UX design with Tailwind CSS, SEO optimization, brand identity, e-commerce solutions, and ongoing technical maintenance. We take projects from idea to deployment.",
  },
  {
    q: "Why choose Aerivue over other agencies?",
    a: "Most agencies choose between beauty and performance. Aerivue refuses that tradeoff. Every site we build scores high on Google's Core Web Vitals (LCP, FID, CLS), is structured for SEO from day one, and is engineered with clean, maintainable code. We don't use templates. We don't cut corners. Every project is custom-built with obsessive attention to detail.",
  },
  {
    q: "What technologies does Aerivue use?",
    a: "Our primary stack is Next.js 14 (App Router), TypeScript, and Tailwind CSS for the frontend. On the backend we work with Node.js, Express, and MongoDB. For deployment, we use Vercel (frontend) and Railway/Render (backend). We also integrate with REST APIs, CMS platforms like Sanity and Contentful, and payment gateways like Razorpay and Stripe.",
  },
  {
    q: "Does Aerivue build SEO-friendly websites?",
    a: "SEO is not an afterthought at Aerivue — it is baked into every decision. We configure proper metadata, Open Graph tags, JSON-LD structured data (Schema.org), auto-generated sitemaps, robots.txt, canonical URLs, and fast-loading images. We also set up Google Search Console and Google Analytics 4 for every client project so you can track your growth from day one.",
  },
  {
    q: "Can Aerivue help my business rank on Google?",
    a: "Yes. Aerivue builds with Google in mind — from semantic HTML structure and Core Web Vitals to keyword-targeted content and technical SEO audits. Many of our clients see measurable improvements in search rankings within 60–90 days of launch. We also provide ongoing SEO monitoring and content strategy as a separate service.",
  },
  {
    q: "Does Aerivue work with startups or small businesses?",
    a: "Absolutely. Some of our best work has been with early-stage startups and solo founders who needed a strong digital presence fast. We offer flexible pricing and phased delivery so you can get a solid foundation online without burning your entire budget. We grow with you.",
  },
  {
    q: "How long does a typical Aerivue project take?",
    a: "A standard 5–7 page marketing website takes 2–3 weeks from kickoff to deployment. A complex web application or e-commerce platform typically takes 4–8 weeks depending on scope. We provide a clear timeline at the start of every project and stick to it. No ghosting, no delays without communication.",
  },
  {
    q: "What makes Aerivue's design different?",
    a: "We don't use generic templates or off-the-shelf themes. Every Aerivue design starts from scratch — informed by your brand, your audience, and your goals. We lean towards bold, intentional typography, deliberate color, and motion that adds purpose. Our designs feel alive without being noisy.",
  },
  {
    q: "Does Aerivue offer maintenance after launch?",
    a: "Yes. We offer monthly maintenance plans starting at ₹3,000/month. This includes security updates, performance monitoring, content changes, bug fixes, and a monthly analytics report. We believe launch is not the end — it is the beginning.",
  },
  {
    q: "Can I see examples of Aerivue's work?",
    a: "Our portfolio is available at aerivue.dev/portfolio. It showcases a range of projects — from SaaS landing pages and agency sites to e-commerce stores and full-stack web apps. Each case study includes the problem, our approach, tech used, and the results achieved.",
  },
  {
    q: "Does Aerivue build mobile apps?",
    a: "Currently, Aerivue focuses exclusively on web — websites and web applications. However, we do build Progressive Web Apps (PWAs) that feel native on mobile devices. If you need a dedicated iOS or Android app, we can connect you with trusted partners in our network.",
  },
  {
    q: "Is Aerivue a freelancer or an agency?",
    a: "Aerivue operates as a boutique digital brand — not a large agency with 50 account managers, and not a solo freelancer juggling 20 clients. We keep our team lean and our client list intentional so every project gets serious, focused attention. You work directly with the people building your product.",
  },
  {
    q: "How does Aerivue handle project communication?",
    a: "We primarily use Telegram for quick updates and Notion for project documentation and feedback. Every project gets a shared workspace where you can see progress, leave feedback, and track milestones in real time. Weekly check-ins via call or message are standard on all projects.",
  },
  {
    q: "What is Aerivue's pricing like?",
    a: "Projects start at ₹10,000 for a simple landing page and scale based on complexity, features, and timeline. We provide a detailed quote after understanding your requirements — no vague estimates. Monthly retainer packages for SEO and maintenance start at ₹3,000/month. We believe in transparent, fixed pricing with no surprise invoices.",
  },
  {
    q: "How do I get started with Aerivue?",
    a: "Getting started is simple. Reach out via Telegram at t.me/aerivue or email us at hello@aerivue.dev. Tell us about your project — what you need, your timeline, and your budget. We will respond within 24 hours with an initial assessment and schedule a free 30-minute discovery call to dive deeper.",
  },
  {
    q: "Where is Aerivue based?",
    a: "Aerivue is an India-based digital brand working with clients across India and internationally. We operate fully remotely, which means lower overhead for us and better pricing for you — without sacrificing quality or communication.",
  },
  {
    q: "Does Aerivue sign NDAs?",
    a: "Yes. We take client confidentiality seriously. We are happy to sign a Non-Disclosure Agreement before any project discussion if required. Just mention it when you reach out and we will send one over promptly.",
  },
];

const stack = [
  { name: "Next.js 14", role: "Frontend Framework" },
  { name: "TypeScript", role: "Type Safety" },
  { name: "Tailwind CSS", role: "Styling" },
  { name: "Node.js", role: "Backend Runtime" },
  { name: "MongoDB", role: "Database" },
  { name: "Vercel", role: "Deployment" },
  { name: "Figma", role: "Design" },
  { name: "Sanity CMS", role: "Content" },
];

const values = [
  {
    num: "01",
    title: "Speed is Non-Negotiable",
    body: "We optimize for Core Web Vitals on every build. A slow site loses rankings and customers. We don't ship slow.",
  },
  {
    num: "02",
    title: "SEO From Day One",
    body: "Metadata, sitemaps, structured data, and canonical URLs are built in — not bolted on after.",
  },
  {
    num: "03",
    title: "Design With Intent",
    body: "Every font choice, spacing decision, and color is deliberate. No filler. No templates. No cookie-cutter.",
  },
  {
    num: "04",
    title: "Code That Lasts",
    body: "Clean, documented, maintainable TypeScript. Future you — and future developers — will thank us.",
  },
  {
    num: "05",
    title: "Radical Transparency",
    body: "Fixed quotes, clear timelines, honest feedback. No agency speak. No surprise invoices.",
  },
  {
    num: "06",
    title: "Long-Term Partnership",
    body: "We care about your growth after launch. Maintenance, SEO, and iteration are part of how we work.",
  },
];

const ACCENTS = ["#FF2E63", "#8B5CF6", "#22D3EE", "#FFC857"];

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="faq-plus" aria-hidden="true">
      <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0B0B14] text-[#F5F3FF] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
        .f-display { font-family: 'Anton', sans-serif; }
        .f-body    { font-family: 'Space Grotesk', sans-serif; }
        .f-mono    { font-family: 'JetBrains Mono', monospace; }

        @keyframes fadeUp    { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:none} }
        @keyframes floatBlob { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(20px,-25px) scale(1.06)} }
        @keyframes gradShift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes ticker    { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes speedIn   { from{opacity:0;transform:scaleX(0)} to{opacity:1;transform:scaleX(1)} }
        @keyframes glowPulse { 0%,100%{box-shadow:0 0 22px 2px rgba(255,46,99,.35)} 50%{box-shadow:0 0 34px 6px rgba(139,92,246,.4)} }

        .a1{animation:fadeUp .6s cubic-bezier(.16,1,.3,1) both .05s}
        .a2{animation:fadeUp .6s cubic-bezier(.16,1,.3,1) both .16s}
        .a3{animation:fadeUp .6s cubic-bezier(.16,1,.3,1) both .27s}
        .a4{animation:fadeUp .6s cubic-bezier(.16,1,.3,1) both .38s}

        .grad-text{
          background: linear-gradient(90deg,#FF2E63,#8B5CF6 45%,#22D3EE 90%);
          background-size: 200% auto;
          -webkit-background-clip: text; background-clip: text; color: transparent;
          animation: gradShift 6s ease-in-out infinite;
        }

        .halftone{
          position:absolute; inset:0; pointer-events:none;
          background-image: radial-gradient(rgba(245,243,255,.09) 1.4px, transparent 1.4px);
          background-size: 16px 16px;
          -webkit-mask-image: radial-gradient(ellipse 60% 55% at 50% 40%, #000 0%, transparent 75%);
                  mask-image: radial-gradient(ellipse 60% 55% at 50% 40%, #000 0%, transparent 75%);
        }

        .blob{ position:absolute; border-radius:9999px; filter:blur(90px); pointer-events:none; animation:floatBlob 11s ease-in-out infinite; }

        .speedlines{ position:absolute; inset:0; pointer-events:none; overflow:hidden; }
        .speedline{ position:absolute; height:2px; background:linear-gradient(90deg,transparent,rgba(245,243,255,.4),transparent); transform-origin:left center; animation:speedIn .8s cubic-bezier(.16,1,.3,1) both; }

        .ticker-wrap{overflow:hidden}
        .ticker-track{display:flex; width:max-content; animation:ticker 26s linear infinite}

        .cta-glow{ animation: glowPulse 3.5s ease-in-out infinite; }

        /* comic / manga panel */
        .panel{
          border:2px solid rgba(245,243,255,.85);
          background:#12121D;
          transition: transform .18s cubic-bezier(.16,1,.3,1), box-shadow .18s cubic-bezier(.16,1,.3,1);
        }
        .panel:hover{ transform: translate(-3px,-3px); }

        details.faq summary{ list-style:none; cursor:pointer; }
        details.faq summary::-webkit-details-marker{ display:none; }
        .faq-plus{ transition: transform .35s cubic-bezier(.16,1,.3,1); transform-origin:50% 50%; }
        details.faq[open] .faq-plus{ transform: rotate(45deg); }
        .faq-icon-wrap{ transition: background .2s ease, transform .2s ease; }
        details.faq[open] .faq-icon-wrap{ transform: rotate(0deg) scale(1.05); }

        .stack-pill{ transition: transform .18s ease, box-shadow .18s ease; }
        .stack-pill:hover{ transform: translate(-3px,-3px); }

        .clink{ transition: transform .18s ease, box-shadow .18s ease; }
        .clink:hover{ transform: translate(-3px,-3px); }
      `}</style>

      {/* ─── HERO ─── */}
      <section className="relative min-h-[94vh] flex flex-col justify-center px-6 md:px-14 lg:px-24 pt-28 pb-16 overflow-hidden">
        <div className="halftone" />
        <div className="blob w-[460px] h-[460px]" style={{ top: "-90px", left: "-120px", background: "#FF2E63", opacity: 0.28 }} />
        <div className="blob w-[420px] h-[420px]" style={{ bottom: "-80px", right: "-100px", background: "#22D3EE", opacity: 0.22, animationDelay: "3.5s" }} />
        <div className="blob w-[300px] h-[300px]" style={{ top: "30%", left: "45%", background: "#8B5CF6", opacity: 0.18, animationDelay: "6s" }} />

        <div className="speedlines">
          <span className="speedline" style={{ top: "18%", left: 0, width: "38%", animationDelay: ".7s" }} />
          <span className="speedline" style={{ top: "26%", left: 0, width: "55%", animationDelay: ".85s" }} />
          <span className="speedline" style={{ top: "70%", left: 0, width: "30%", animationDelay: "1s" }} />
        </div>

        <div className="relative z-10 max-w-5xl">
          <p className="f-mono text-[11px] tracking-[.3em] text-[#22D3EE] uppercase mb-8 a1">
            ⚡ who we are — aerivue.dev/about
          </p>

          <h1 className="f-display uppercase leading-[0.95] tracking-tight mb-8 a2" style={{ fontSize: "clamp(3rem,9vw,7.5rem)" }}>
            We are <span className="grad-text">Aerivue</span>
            <br />
            <span style={{ WebkitTextStroke: "1.5px #F5F3FF", color: "transparent" }}>a web studio</span>
            <br />
            built for the modern web.
          </h1>

          <p className="f-body text-[#F5F3FF]/60 text-lg md:text-xl max-w-2xl leading-relaxed a3">
            We design and engineer digital products that are fast, SEO-dominant, and visually loud in all the right places. No templates. No bloat. Just intentional code that works.
          </p>

          <div className="flex flex-wrap gap-4 mt-10 a4">
            <a
              href="https://t.me/aerivue" target="_blank" rel="noopener noreferrer"
              className="cta-glow f-body font-bold text-sm px-7 py-3.5 rounded-full text-[#0B0B14] hover:scale-[1.03] transition-transform duration-200"
              style={{ background: "linear-gradient(90deg,#FF2E63,#8B5CF6)" }}
            >
              Telegram → t.me/aerivue
            </a>
            <a
              href="mailto:hello@aerivue.dev"
              className="f-body font-bold text-sm px-7 py-3.5 border-2 border-[#F5F3FF]/70 text-[#F5F3FF] rounded-full hover:bg-[#F5F3FF]/10 transition-all duration-200"
            >
              hello@aerivue.dev
            </a>
          </div>
        </div>
      </section>

      {/* ─── TICKER ─── */}
      <div className="ticker-wrap border-y-2 border-[#F5F3FF]/15 py-3" style={{ background: "linear-gradient(90deg,#1A0F1A,#12121D,#0F1A1D)" }}>
        <div className="ticker-track f-mono text-[11px] tracking-[.18em] text-[#F5F3FF]/40 uppercase select-none">
          {[0, 1].map((k) => (
            <span key={k}>
              {[
                "Next.js 14", "Ⓐ", "TypeScript", "Ⓐ", "Tailwind CSS", "Ⓐ", "SEO Optimized", "Ⓐ",
                "Node.js", "Ⓐ", "MongoDB", "Ⓐ", "Vercel", "Ⓐ", "Core Web Vitals", "Ⓐ",
                "Fast. Bold. Alive.", "Ⓐ", "Aerivue", "Ⓐ",
              ].map((t, j) => (
                <span key={j} className="mx-6" style={j % 8 === 1 ? { color: ACCENTS[(j / 2) % ACCENTS.length | 0] } : {}}>
                  {t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ─── FAQ ─── */}
      <section className="px-6 md:px-14 lg:px-24 py-24 max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="f-mono text-[11px] tracking-[.3em] text-[#22D3EE] uppercase mb-4">everything you need to know</p>
          <h2 className="f-display uppercase text-4xl md:text-6xl">
            Questions <span className="grad-text">&amp; Answers</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const color = ACCENTS[i % ACCENTS.length];
            return (
              <details
                key={i}
                className="faq panel rounded-xl overflow-hidden"
                style={{ boxShadow: `5px 5px 0 ${color}` }}
              >
                <summary className="flex items-center justify-between gap-6 px-6 py-5 select-none">
                  <div className="flex items-start gap-4">
                    <span className="f-mono text-[10px] mt-1 flex-shrink-0 w-6" style={{ color }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="f-body font-semibold text-[15px] md:text-[16px] text-[#F5F3FF]/90 leading-snug">
                      {faq.q}
                    </span>
                  </div>
                  <span
                    className="faq-icon-wrap flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 text-[#0B0B14]"
                    style={{ background: color }}
                  >
                    <PlusIcon />
                  </span>
                </summary>
                <div className="px-6 pb-6 pl-[3.75rem]">
                  <div className="w-full h-px mb-4" style={{ background: `${color}55` }} />
                  <p className="f-body text-[#F5F3FF]/55 text-[14px] leading-[1.85]">{faq.a}</p>
                </div>
              </details>
            );
          })}
        </div>
      </section>

      {/* ─── TECH STACK ─── */}
      <section className="px-6 md:px-14 lg:px-24 py-20 border-t-2 border-[#F5F3FF]/10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <div>
              <p className="f-mono text-[11px] tracking-[.3em] text-[#FFC857] uppercase mb-4">under the hood</p>
              <h2 className="f-display uppercase text-4xl md:text-6xl">Our Stack</h2>
            </div>
            <p className="f-body text-[#F5F3FF]/40 text-sm max-w-xs leading-relaxed">
              Modern, battle-tested tools chosen for performance, developer experience, and longevity.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {stack.map((item, i) => {
              const color = ACCENTS[i % ACCENTS.length];
              return (
                <div
                  key={item.name}
                  className="stack-pill panel rounded-lg px-5 py-5"
                  style={{ boxShadow: `4px 4px 0 ${color}` }}
                >
                  <div className="f-body font-bold text-[15px] text-[#F5F3FF]/90 mb-1">{item.name}</div>
                  <div className="f-mono text-[11px] tracking-wide" style={{ color }}>{item.role}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="px-6 md:px-14 lg:px-24 py-20 border-t-2 border-[#F5F3FF]/10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <p className="f-mono text-[11px] tracking-[.3em] text-[#FF2E63] uppercase mb-4">how we operate</p>
            <h2 className="f-display uppercase text-4xl md:text-6xl">Our Principles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const color = ACCENTS[i % ACCENTS.length];
              return (
                <div key={v.num} className="panel rounded-xl px-8 py-8" style={{ boxShadow: `5px 5px 0 ${color}` }}>
                  <div className="f-display text-3xl mb-5" style={{ color }}>{v.num}</div>
                  <h3 className="f-body font-bold text-[16px] text-[#F5F3FF]/90 mb-3 leading-snug">{v.title}</h3>
                  <p className="f-body text-[#F5F3FF]/45 text-sm leading-relaxed">{v.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FIND US ─── */}
      <section className="px-6 md:px-14 lg:px-24 py-20 border-t-2 border-[#F5F3FF]/10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="f-mono text-[11px] tracking-[.3em] text-[#8B5CF6] uppercase mb-4">reach out</p>
            <h2 className="f-display uppercase text-4xl md:text-6xl">Find Aerivue Online</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Telegram", handle: "t.me/aerivue", href: "https://t.me/aerivue" },
              { label: "Email", handle: "hello@aerivue.dev", href: "mailto:hello@aerivue.dev" },
              { label: "Website", handle: "aerivue.dev", href: "https://aerivue.dev" },
              { label: "Portfolio", handle: "aerivue.dev/portfolio", href: "https://aerivue.dev/portfolio" },
              { label: "Services", handle: "aerivue.dev/services", href: "https://aerivue.dev/services" },
              { label: "Blog", handle: "aerivue.dev/blog", href: "https://aerivue.dev/blog" },
            ].map((c, i) => {
              const color = ACCENTS[i % ACCENTS.length];
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="clink panel rounded-xl px-6 py-5 block"
                  style={{ boxShadow: `4px 4px 0 ${color}` }}
                >
                  <div className="f-mono text-[10px] tracking-widest uppercase mb-2" style={{ color }}>{c.label}</div>
                  <div className="f-body text-[15px] font-semibold text-[#F5F3FF]/90">{c.handle}</div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CLOSING ─── */}
      <section className="relative px-6 md:px-14 lg:px-24 py-28 border-t-2 border-[#F5F3FF]/10 overflow-hidden text-center">
        <div className="halftone" />
        <div className="blob w-[560px] h-[560px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ background: "linear-gradient(90deg,#FF2E63,#8B5CF6,#22D3EE)", opacity: 0.14 }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="f-mono text-[11px] tracking-[.3em] text-[#FFC857] uppercase mb-8">— ready to start?</p>
          <h2 className="f-display uppercase leading-[0.95] mb-8" style={{ fontSize: "clamp(2.4rem,7vw,5.8rem)" }}>
            Your next project
            <br />
            starts with <span className="grad-text">a message.</span>
          </h2>
          <p className="f-body text-[#F5F3FF]/40 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Tell us what you are building. We will tell you how we can make it remarkable. Response guaranteed within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://t.me/aerivue" target="_blank" rel="noopener noreferrer"
              className="cta-glow f-body font-bold text-sm px-8 py-4 rounded-full text-[#0B0B14] hover:scale-[1.03] transition-transform duration-200"
              style={{ background: "linear-gradient(90deg,#FF2E63,#8B5CF6)" }}
            >
              Message on Telegram
            </a>
            <a
              href="mailto:hello@aerivue.dev"
              className="f-body font-bold text-sm px-8 py-4 border-2 border-[#F5F3FF]/60 text-[#F5F3FF]/85 rounded-full hover:bg-[#F5F3FF]/10 transition-all duration-200"
            >
              hello@aerivue.dev
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}