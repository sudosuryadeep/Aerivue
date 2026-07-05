export const metadata = {
  title: "Services | Web Development, API, SEO & More — Aerivue",
  description:
    "Aerivue offers premium web development, backend API development, Next.js websites, SEO optimization, e-commerce, SaaS products, landing pages and more. Professional services across India.",
  keywords: [
    "Aerivue services",
    "web development India",
    "Next.js developer India",
    "backend API development",
    "SEO services India",
    "React developer",
    "SaaS development",
    "e-commerce development India",
  ],
  openGraph: {
    title: "Services | Web Development, API, SEO & More — Aerivue",
    description: "Premium web development, API building, SEO & design services by Aerivue.",
    url: "https://aerivue.dev/services",
  },
  alternates: { canonical: "https://aerivue.dev/services" },
};

const services = [
  {
    id: "01", tag: "Most Requested",
    title: "Website Design & Development",
    desc: "Pixel-perfect, fast-loading websites built with Next.js 14, TypeScript, and Tailwind CSS. Mobile-first, SEO-ready, engineered for performance from the ground up.",
    points: [
      "Next.js 14 App Router architecture",
      "Core Web Vitals optimized (LCP, FID, CLS)",
      "Custom animations & micro-interactions",
      "Dark / light mode support",
    ],
    price: "Starting ₹15,000",
  },
  {
    id: "02", tag: "Backend",
    title: "Backend API Development",
    desc: "Scalable, secure REST APIs built with Node.js and Express. From simple CRUD APIs to complex multi-service architectures.",
    points: [
      "Node.js + Express + TypeScript",
      "MongoDB / PostgreSQL / MySQL",
      "JWT auth & role-based access control",
      "API documentation (Swagger / Postman)",
    ],
    price: "Starting ₹20,000",
  },
  {
    id: "03", tag: "New",
    title: "API for Rent / API as a Service",
    desc: "Ready-made APIs deployed, maintained, and ready to integrate. Pay monthly, plug into your app, ship faster.",
    points: [
      "Auth APIs (login, OTP, OAuth)",
      "Payment processing (Razorpay, Stripe)",
      "SMS / Email / WhatsApp notification APIs",
      "Monthly rental — no upfront build cost",
    ],
    price: "From ₹1,500/month",
  },
  {
    id: "04", tag: "Full Stack",
    title: "SaaS Product Development",
    desc: "Complete Software-as-a-Service products — auth, billing, dashboards, and admin panels. If you have an idea, we ship it.",
    points: [
      "User auth (JWT / OAuth / magic links)",
      "Subscription billing (Stripe / Razorpay)",
      "Admin dashboard & analytics",
      "Scalable cloud deployment",
    ],
    price: "Starting ₹60,000",
  },
  {
    id: "05", tag: "Quick Turnaround",
    title: "Landing Pages & Sales Funnels",
    desc: "High-converting landing pages designed to capture leads and drive sales. Every element optimized for conversion.",
    points: [
      "Conversion-focused UI/UX design",
      "Lead capture forms + CRM integration",
      "Google Analytics 4 & Meta Pixel setup",
      "Sub-1s load times",
    ],
    price: "Starting ₹8,000",
  },
  {
    id: "06", tag: "E-Commerce",
    title: "E-Commerce Development",
    desc: "Full-featured online stores built to sell — product listings, checkout, payment, and order management.",
    points: [
      "Next.js + Shopify / WooCommerce",
      "Razorpay / Stripe / COD integration",
      "Product, inventory & order management",
      "Wishlist, cart, discount engine",
    ],
    price: "Starting ₹35,000",
  },
  {
    id: "07", tag: "SEO",
    title: "SEO & Technical Optimization",
    desc: "Everything Google needs to rank your site, and ongoing optimization to keep it climbing.",
    points: [
      "Google Search Console setup",
      "Schema.org JSON-LD structured data",
      "Keyword research & on-page optimization",
      "Monthly ranking & traffic reports",
    ],
    price: "Starting ₹6,000/month",
  },
  {
    id: "08", tag: "Design",
    title: "Brand Identity & UI Design",
    desc: "Visual identities that are sharp, distinctive, and built to scale across every touchpoint.",
    points: [
      "Logo design & brand guidelines",
      "Color palette & typography system",
      "UI design in Figma",
      "Social media kit & icon sets",
    ],
    price: "Starting ₹8,000",
  },
  {
    id: "09", tag: "Portfolio",
    title: "Portfolio Websites",
    desc: "Stunning, fast portfolio sites for developers, designers, and creatives — sites that get you hired.",
    points: [
      "Custom layout — no templates",
      "Project showcase with case studies",
      "Contact form + email integration",
      "CMS for easy content updates",
    ],
    price: "Starting ₹10,000",
  },
  {
    id: "10", tag: "Retainer",
    title: "Website Maintenance & Support",
    desc: "Monthly plans that keep your site fast, secure, updated, and running at peak performance.",
    points: [
      "Security patches & dependency updates",
      "Bug fixes & QA testing",
      "Uptime monitoring (24/7 alerts)",
      "Monthly analytics & SEO report",
    ],
    price: "Starting ₹3,000/month",
  },
];

const process = [
  { step: "01", title: "Discovery Call", desc: "Free 30-min call to understand your goals, timeline, and budget." },
  { step: "02", title: "Proposal & Quote", desc: "Detailed scope + fixed price quote within 24 hours." },
  { step: "03", title: "Design & Build", desc: "We design, develop, and share progress updates. No surprises." },
  { step: "04", title: "Launch & Handover", desc: "We deploy, configure DNS, set up analytics, and hand over full access." },
];

const ACCENTS = ["#FF2E63", "#8B5CF6", "#22D3EE", "#FFC857"];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0B0B14] text-[#F5F3FF] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
        .f-display { font-family:'Anton', sans-serif; }
        .f-body    { font-family:'Space Grotesk', sans-serif; }
        .f-mono    { font-family:'JetBrains Mono', monospace; }

        @keyframes fadeUp    { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:none} }
        @keyframes floatBlob { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(20px,-22px) scale(1.06)} }
        @keyframes gradShift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes ticker    { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes glowPulse { 0%,100%{box-shadow:0 0 22px 2px rgba(255,46,99,.35)} 50%{box-shadow:0 0 34px 6px rgba(139,92,246,.4)} }

        .a1{animation:fadeUp .6s cubic-bezier(.16,1,.3,1) both .05s}
        .a2{animation:fadeUp .6s cubic-bezier(.16,1,.3,1) both .16s}
        .a3{animation:fadeUp .6s cubic-bezier(.16,1,.3,1) both .27s}

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
          -webkit-mask-image: radial-gradient(ellipse 60% 55% at 50% 35%, #000 0%, transparent 75%);
                  mask-image: radial-gradient(ellipse 60% 55% at 50% 35%, #000 0%, transparent 75%);
        }

        .blob{ position:absolute; border-radius:9999px; filter:blur(90px); pointer-events:none; animation:floatBlob 11s ease-in-out infinite; }

        .ticker-wrap{overflow:hidden}
        .ticker-track{display:flex; width:max-content; animation:ticker 30s linear infinite}

        .cta-glow{ animation: glowPulse 3.5s ease-in-out infinite; }

        .panel{
          border:2px solid rgba(245,243,255,.85);
          background:#12121D;
          transition: transform .18s cubic-bezier(.16,1,.3,1);
        }
        .panel:hover{ transform: translate(-3px,-3px); }

        .proc-card{ transition: transform .18s ease; }
        .proc-card:hover{ transform: translate(-3px,-3px); }
      `}</style>

      {/* ─── HERO ─── */}
      <section className="relative min-h-[64vh] flex flex-col justify-center px-6 md:px-14 lg:px-24 pt-28 pb-14 overflow-hidden">
        <div className="halftone" />
        <div className="blob w-[460px] h-[460px]" style={{ top: "-90px", right: "-110px", background: "#FF2E63", opacity: 0.26 }} />
        <div className="blob w-[340px] h-[340px]" style={{ bottom: "-70px", left: "-80px", background: "#22D3EE", opacity: 0.2, animationDelay: "4s" }} />

        <div className="relative z-10 max-w-5xl">
          <p className="f-mono text-[11px] tracking-[.3em] text-[#22D3EE] uppercase mb-7 a1">
            ⚡ what we build — aerivue.dev/services
          </p>
          <h1 className="f-display uppercase leading-[0.95] mb-6 a2" style={{ fontSize: "clamp(2.6rem,7vw,6.5rem)" }}>
            Every service
            <br />
            <span className="grad-text">your digital presence</span>
            <br />
            needs.
          </h1>
          <p className="f-body text-[#F5F3FF]/55 text-lg max-w-2xl leading-relaxed a3">
            From a single landing page to a full SaaS product with backend APIs —
            Aerivue covers the entire spectrum. No outsourcing. No templates. Just craft.
          </p>
        </div>

        <div className="relative z-10 mt-12 flex flex-wrap gap-8 a3">
          {[
            { n: "10+", l: "Services" },
            { n: "₹3k", l: "Starts / mo" },
            { n: "24h", l: "Quote Time" },
          ].map((s, i) => (
            <div key={s.l}>
              <div className="f-display text-2xl" style={{ color: ACCENTS[i % ACCENTS.length] }}>{s.n}</div>
              <div className="f-mono text-[11px] text-[#F5F3FF]/35 tracking-wide mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TICKER ─── */}
      <div className="ticker-wrap border-y-2 border-[#F5F3FF]/15 py-3" style={{ background: "linear-gradient(90deg,#1A0F1A,#12121D,#0F1A1D)" }}>
        <div className="ticker-track f-mono text-[11px] tracking-[.2em] text-[#F5F3FF]/40 uppercase select-none">
          {[0, 1].map((k) => (
            <span key={k}>
              {[
                "Next.js", "Ⓐ", "Node.js API", "Ⓐ", "REST API", "Ⓐ", "MongoDB", "Ⓐ", "SEO", "Ⓐ",
                "E-Commerce", "Ⓐ", "SaaS", "Ⓐ", "Landing Pages", "Ⓐ", "Brand Design", "Ⓐ",
                "API for Rent", "Ⓐ", "Aerivue", "Ⓐ",
              ].map((t, j) => (
                <span key={j} className="mx-6" style={j % 8 === 1 ? { color: ACCENTS[(j / 2) % ACCENTS.length | 0] } : {}}>
                  {t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ─── SERVICES GRID ─── */}
      <section className="px-6 md:px-14 lg:px-24 py-20 max-w-7xl mx-auto">
        <div className="mb-14">
          <p className="f-mono text-[11px] tracking-[.3em] text-[#FFC857] uppercase mb-4">full list</p>
          <h2 className="f-display uppercase text-4xl md:text-6xl">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((svc, i) => {
            const color = ACCENTS[i % ACCENTS.length];
            return (
              <article
                key={svc.id}
                className="panel rounded-xl p-7 flex flex-col gap-4"
                style={{ boxShadow: `5px 5px 0 ${color}` }}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="f-mono text-[10px]" style={{ color }}>{svc.id}</span>
                  <span
                    className="f-mono text-[10px] tracking-wide px-2.5 py-1 rounded-full flex-shrink-0"
                    style={{ background: color, color: "#0B0B14" }}
                  >
                    {svc.tag}
                  </span>
                </div>

                <div>
                  <h2 className="f-body font-bold text-xl text-[#F5F3FF] mb-2 leading-snug">{svc.title}</h2>
                  <p className="f-body text-[#F5F3FF]/45 text-[14px] leading-[1.75]">{svc.desc}</p>
                </div>

                <ul className="space-y-1.5">
                  {svc.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2.5 f-body text-[#F5F3FF]/55 text-[13px]">
                      <span style={{ color }}>▸</span>{pt}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#F5F3FF]/10">
                  <span className="f-body font-bold text-[15px] text-[#F5F3FF]/80">{svc.price}</span>
                  <a
                    href="https://t.me/aerivue" target="_blank" rel="noopener noreferrer"
                    className="f-body font-semibold text-[13px] px-4 py-2 rounded-full border-2"
                    style={{ borderColor: color, color }}
                  >
                    Get Quote →
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="px-6 md:px-14 lg:px-24 py-20 border-t-2 border-[#F5F3FF]/10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <p className="f-mono text-[11px] tracking-[.3em] text-[#8B5CF6] uppercase mb-4">how it works</p>
            <h2 className="f-display uppercase text-4xl md:text-6xl">Our Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {process.map((p, i) => {
              const color = ACCENTS[i % ACCENTS.length];
              return (
                <div
                  key={p.step}
                  className="proc-card panel rounded-xl px-7 py-6 flex items-start gap-5"
                  style={{ boxShadow: `4px 4px 0 ${color}` }}
                >
                  <span className="f-display text-2xl flex-shrink-0" style={{ color }}>{p.step}</span>
                  <div>
                    <h3 className="f-body font-bold text-[16px] text-[#F5F3FF]/90 mb-1.5">{p.title}</h3>
                    <p className="f-body text-[#F5F3FF]/40 text-[13px] leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative px-6 md:px-14 lg:px-24 py-24 border-t-2 border-[#F5F3FF]/10 overflow-hidden text-center">
        <div className="halftone" />
        <div className="blob w-[520px] h-[520px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ background: "linear-gradient(90deg,#FF2E63,#8B5CF6,#22D3EE)", opacity: 0.14 }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="f-mono text-[11px] tracking-[.3em] text-[#FFC857] uppercase mb-6">— start today</p>
          <h2 className="f-display uppercase leading-[0.95] mb-6" style={{ fontSize: "clamp(2.2rem,5.5vw,5rem)" }}>
            Tell us what
            <br />
            <span className="grad-text">you are building.</span>
          </h2>
          <p className="f-body text-[#F5F3FF]/40 text-lg max-w-lg mx-auto mb-9 leading-relaxed">
            Free discovery call. Fixed price quote in 24 hours. No commitment required.
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