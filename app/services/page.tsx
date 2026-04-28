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
    id: "01", category: "Frontend", highlight: true,
    tag: "Most Requested",
    title: "Website Design & Development",
    desc: "Pixel-perfect, fast-loading websites built with Next.js 14, TypeScript, and Tailwind CSS. Every site is mobile-first, SEO-ready, and engineered for performance from the ground up.",
    points: [
      "Next.js 14 App Router architecture",
      "Mobile-first responsive design",
      "Core Web Vitals optimized (LCP, FID, CLS)",
      "Custom animations & micro-interactions",
      "Accessibility (WCAG 2.1 compliant)",
      "Dark / light mode support",
    ],
    price: "Starting ₹15,000",
  },
  {
    id: "02", category: "Backend", highlight: false,
    tag: "Backend",
    title: "Backend API Development",
    desc: "Scalable, secure REST APIs built with Node.js and Express. From simple CRUD APIs to complex multi-service architectures — we build backends that power production apps.",
    points: [
      "REST API design & development",
      "Node.js + Express + TypeScript",
      "MongoDB / PostgreSQL / MySQL",
      "JWT auth & role-based access control",
      "Rate limiting, caching & security middleware",
      "API documentation (Swagger / Postman)",
    ],
    price: "Starting ₹20,000",
  },
  {
    id: "03", category: "Backend", highlight: false,
    tag: "New",
    title: "API for Rent / API as a Service",
    desc: "Need a ready-made API without building from scratch? We offer API rental solutions — deployed, maintained, and ready to integrate. Pay monthly, plug into your app, ship faster.",
    points: [
      "Pre-built APIs for common use cases",
      "Auth APIs (login, OTP, OAuth)",
      "Payment processing (Razorpay, Stripe)",
      "SMS / Email / WhatsApp notification APIs",
      "Custom API built to your spec",
      "Monthly rental pricing — no upfront build cost",
    ],
    price: "From ₹1,500/month",
  },
  {
    id: "04", category: "Full Stack", highlight: false,
    tag: "Full Stack",
    title: "SaaS Product Development",
    desc: "We build complete Software-as-a-Service products — from auth and billing to dashboards and admin panels. If you have an idea, we have the stack to ship it.",
    points: [
      "Next.js frontend + Node.js backend",
      "User auth (JWT / OAuth / magic links)",
      "Subscription billing (Stripe / Razorpay)",
      "Admin dashboard & analytics",
      "Multi-tenant architecture support",
      "Scalable cloud deployment (Vercel + Railway)",
    ],
    price: "Starting ₹60,000",
  },
  {
    id: "05", category: "Marketing", highlight: false,
    tag: "Quick Turnaround",
    title: "Landing Pages & Sales Funnels",
    desc: "High-converting landing pages designed to capture leads and drive sales. Every element — headline, CTA, layout, speed — is optimized for conversion.",
    points: [
      "Conversion-focused UI/UX design",
      "A/B testing ready structure",
      "Lead capture forms + CRM integration",
      "Google Analytics 4 & Meta Pixel setup",
      "Sub-1s load times",
      "Mobile-optimized layouts",
    ],
    price: "Starting ₹8,000",
  },
  {
    id: "06", category: "E-Commerce", highlight: false,
    tag: "E-Commerce",
    title: "E-Commerce Development",
    desc: "Full-featured online stores built to sell. From product listings to checkout, payment, and order management — fast, secure, and SEO-optimized.",
    points: [
      "Next.js + Shopify / WooCommerce",
      "Razorpay / Stripe / COD integration",
      "Product, inventory & order management",
      "SEO-optimized product & category pages",
      "Wishlist, cart, discount engine",
      "Mobile-first shopping experience",
    ],
    price: "Starting ₹35,000",
  },
  {
    id: "07", category: "SEO", highlight: false,
    tag: "SEO",
    title: "SEO & Technical Optimization",
    desc: "We set up everything Google needs to rank your site — and then keep optimizing it. From Search Console to structured data, your site gets built to climb.",
    points: [
      "Google Search Console setup & verification",
      "Sitemap.xml & robots.txt configuration",
      "Schema.org JSON-LD structured data",
      "Keyword research & on-page optimization",
      "Core Web Vitals audit & fixes",
      "Monthly ranking & traffic reports",
    ],
    price: "Starting ₹6,000/month",
  },
  {
    id: "08", category: "Design", highlight: false,
    tag: "Design",
    title: "Brand Identity & UI Design",
    desc: "A brand that looks premium builds trust instantly. We create visual identities that are sharp, distinctive, and built to scale across every touchpoint.",
    points: [
      "Logo design & brand guidelines",
      "Color palette & typography system",
      "Social media kit (posts, stories, banners)",
      "UI design in Figma",
      "Business card & print-ready assets",
      "Icon sets & illustrations",
    ],
    price: "Starting ₹8,000",
  },
  {
    id: "09", category: "Portfolio", highlight: false,
    tag: "Portfolio",
    title: "Portfolio Websites",
    desc: "Your portfolio is your digital resume. We build stunning, fast portfolio sites for developers, designers, and creatives — sites that actually get you hired.",
    points: [
      "Custom layout — no templates",
      "Project showcase with case studies",
      "Blog / writing section",
      "Contact form + email integration",
      "SEO optimized for your name & skills",
      "CMS for easy content updates",
    ],
    price: "Starting ₹10,000",
  },
  {
    id: "10", category: "Maintenance", highlight: false,
    tag: "Retainer",
    title: "Website Maintenance & Support",
    desc: "Your site needs care after launch. Monthly maintenance plans that keep your site fast, secure, updated, and running at peak performance.",
    points: [
      "Security patches & dependency updates",
      "Performance monitoring & optimization",
      "Content updates & copywriting edits",
      "Bug fixes & QA testing",
      "Uptime monitoring (24/7 alerts)",
      "Monthly analytics & SEO report",
    ],
    price: "Starting ₹3,000/month",
  },
];

const tagColors: Record<string, string> = {
  "Most Requested":   "bg-white text-black",
  "New":              "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
  "Quick Turnaround": "bg-yellow-500/15 text-yellow-400 border border-yellow-500/25",
  "Backend":          "bg-blue-500/15 text-blue-400 border border-blue-500/25",
  "Full Stack":       "bg-purple-500/15 text-purple-400 border border-purple-500/25",
  "E-Commerce":       "bg-orange-500/15 text-orange-400 border border-orange-500/25",
  "SEO":              "bg-cyan-500/15 text-cyan-400 border border-cyan-500/25",
  "Design":           "bg-pink-500/15 text-pink-400 border border-pink-500/25",
  "Portfolio":        "bg-indigo-500/15 text-indigo-400 border border-indigo-500/25",
  "Retainer":         "bg-slate-500/15 text-slate-400 border border-slate-500/25",
};

const process = [
  { step:"01", title:"Discovery Call",     desc:"Free 30-min call to understand your goals, timeline, and budget." },
  { step:"02", title:"Proposal & Quote",   desc:"Detailed scope + fixed price quote + project timeline within 24 hours." },
  { step:"03", title:"Design & Build",     desc:"We design, develop, and share progress updates. No surprises." },
  { step:"04", title:"Review & Refine",    desc:"You review, give feedback, we refine. Revisions are part of the process." },
  { step:"05", title:"Launch & Handover",  desc:"We deploy, configure DNS, set up analytics, and hand over full access." },
  { step:"06", title:"Ongoing Support",    desc:"Optional maintenance plans keep your site healthy and growing post-launch." },
];

const compare = [
  "Custom-built from scratch",
  "SEO structured from day one",
  "Core Web Vitals optimized",
  "TypeScript codebase",
  "Fixed price quotes",
  "API development available",
  "Direct communication",
  "Post-launch support",
  "Template-free design",
  "Google Search Console setup",
];

const faqs = [
  { q:"Can I hire Aerivue for just a backend API?",
    a:"Yes. We offer standalone backend API development. Whether you need a simple REST API, a complex multi-endpoint service, or a ready-made API to rent — we handle it independently of any frontend work." },
  { q:"What is the 'API for Rent' service exactly?",
    a:"API for Rent means we build and host a specific API — authentication, notifications, payments, etc. — and you pay a monthly fee to use it. You skip months of backend work, pay a small retainer, and integrate in hours. Ideal for startups who want to move fast." },
  { q:"Do you work on existing projects or only new ones?",
    a:"Both. We regularly take on legacy codebases for refactoring, performance optimization, or adding new features. Send us your repo and we will assess it honestly." },
  { q:"How do I get a price quote?",
    a:"Message us on Telegram at t.me/aerivue or email hello@aerivue.dev with a brief description of what you need. We respond within 24 hours with an honest, itemized quote — no vague ranges." },
  { q:"Do you offer any free trials or discovery?",
    a:"We offer a free 30-minute discovery call for every project. No commitment needed. We use this to understand your goals and tell you exactly what we can build and for how much." },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400&family=Outfit:wght@300;400;500;600&display=swap');
        .f-syne  { font-family:'Syne',sans-serif; }
        .f-mono  { font-family:'DM Mono',monospace; }
        .f-outfit{ font-family:'Outfit',sans-serif; }

        @keyframes fadeUp   { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:none} }
        @keyframes orbPulse { 0%,100%{opacity:.04} 50%{opacity:.08} }
        @keyframes ticker   { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

        .a1{animation:fadeUp .7s ease both .05s}
        .a2{animation:fadeUp .7s ease both .15s}
        .a3{animation:fadeUp .7s ease both .25s}

        .orb{position:absolute;border-radius:9999px;filter:blur(130px);pointer-events:none;animation:orbPulse 9s ease-in-out infinite}
        .gridlines{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px);background-size:80px 80px;pointer-events:none}

        .ticker-wrap{overflow:hidden}
        .ticker-track{display:flex;width:max-content;animation:ticker 32s linear infinite}

        .scard{transition:border-color .25s,background .25s,transform .25s}
        .scard:hover{border-color:rgba(255,255,255,.16);background:rgba(255,255,255,.035);transform:translateY(-3px)}

        .proc-card{transition:border-color .2s,background .2s}
        .proc-card:hover{border-color:rgba(255,255,255,.12);background:rgba(255,255,255,.025)}

        details.faq summary{list-style:none;cursor:pointer}
        details.faq summary::-webkit-details-marker{display:none}
        details.faq[open]{border-color:rgba(255,255,255,.13) !important}
        details.faq{transition:border-color .2s}
        details.faq:hover{border-color:rgba(255,255,255,.1) !important}

        .cta-p{transition:background .2s,transform .2s,box-shadow .2s}
        .cta-p:hover{background:rgba(255,255,255,.9);transform:translateY(-2px);box-shadow:0 14px 40px rgba(255,255,255,.12)}
        .cta-o{transition:border-color .2s,color .2s,transform .2s}
        .cta-o:hover{border-color:rgba(255,255,255,.3);color:#fff;transform:translateY(-2px)}
      `}</style>

      {/* ─── HERO ─── */}
      <section className="relative min-h-[72vh] flex flex-col justify-center px-6 md:px-14 lg:px-24 pt-28 pb-16 overflow-hidden">
        <div className="gridlines" />
        <div className="orb w-[500px] h-[500px] bg-white" style={{top:'-80px',right:'-120px'}} />
        <div className="orb w-[350px] h-[350px] bg-white" style={{bottom:'-60px',left:'-80px',animationDelay:'5s'}} />

        <div className="relative z-10 max-w-5xl">
          <p className="f-mono text-[11px] tracking-[.3em] text-white/25 uppercase mb-8 a1">
            — What we build / aerivue.dev/services
          </p>
          <h1 className="f-syne font-extrabold leading-[1.06] tracking-tight mb-7 a2"
              style={{fontSize:'clamp(2.8rem,7vw,6.5rem)'}}>
            Every Service
            <br />
            <span className="text-white/20">Your Digital</span>
            <br />
            Presence Needs.
          </h1>
          <p className="f-outfit text-white/42 text-lg md:text-xl max-w-2xl leading-relaxed a3">
            From a single landing page to a full SaaS product with backend APIs — Aerivue covers the
            entire spectrum of modern web development. No outsourcing. No templates. Just craft.
          </p>
        </div>

        <div className="relative z-10 mt-14 flex flex-wrap gap-10 a3">
          {[
            {n:'10+', l:'Services Offered'},
            {n:'₹3k', l:'Starts From / mo'},
            {n:'24h', l:'Quote Turnaround'},
            {n:'100%', l:'Custom Work'},
          ].map(s=>(
            <div key={s.l}>
              <div className="f-syne font-bold text-2xl text-white">{s.n}</div>
              <div className="f-mono text-[11px] text-white/25 tracking-wide mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TICKER ─── */}
      <div className="ticker-wrap border-y border-white/[.05] py-3 bg-white/[.01]">
        <div className="ticker-track f-mono text-[11px] tracking-[.2em] text-white/18 uppercase select-none">
          {[0,1].map(k=>(
            <span key={k}>
              {['Next.js','·','Node.js API','·','REST API','·','MongoDB','·','SEO','·',
                'E-Commerce','·','SaaS','·','Landing Pages','·','Brand Design','·',
                'Maintenance','·','API for Rent','·','TypeScript','·','Aerivue','·'
              ].map((t,j)=><span key={j} className="mx-6">{t}</span>)}
            </span>
          ))}
        </div>
      </div>

      {/* ─── SERVICES GRID ─── */}
      <section className="px-6 md:px-14 lg:px-24 py-24 max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="f-mono text-[11px] tracking-[.3em] text-white/22 uppercase mb-4">Full list</p>
          <h2 className="f-syne font-bold text-4xl md:text-5xl text-white">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((svc) => (
            <article key={svc.id}
              className={`scard border rounded-2xl p-8 flex flex-col gap-5 ${
                svc.highlight
                  ? "border-white/20 bg-white/[.04]"
                  : "border-white/[.07] bg-white/[.015]"
              }`}
            >
              {/* header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="f-mono text-[10px] text-white/18">{svc.id}</span>
                  <span className="f-mono text-[10px] tracking-widest text-white/25 uppercase">{svc.category}</span>
                </div>
                <span className={`f-mono text-[10px] tracking-wide px-2.5 py-1 rounded-full flex-shrink-0 ${tagColors[svc.tag] ?? "bg-white/10 text-white/40"}`}>
                  {svc.tag}
                </span>
              </div>

              {/* body */}
              <div>
                <h2 className="f-syne font-bold text-xl md:text-2xl text-white mb-3 leading-snug">{svc.title}</h2>
                <p className="f-outfit text-white/40 text-[14px] leading-[1.85]">{svc.desc}</p>
              </div>

              {/* points */}
              <ul className="space-y-2">
                {svc.points.map(pt=>(
                  <li key={pt} className="flex items-center gap-3 f-outfit text-white/48 text-[13px]">
                    <span className="text-white/22 text-[11px]">✓</span>{pt}
                  </li>
                ))}
              </ul>

              {/* footer */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[.06]">
                <span className="f-syne font-semibold text-[15px] text-white/65">{svc.price}</span>
                <a href="https://t.me/aerivue" target="_blank" rel="noopener noreferrer"
                   className="f-syne font-semibold text-[13px] px-5 py-2.5 border border-white/15 text-white/50 rounded-full hover:border-white/28 hover:text-white/80 transition-all duration-200">
                  Get Quote →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="px-6 md:px-14 lg:px-24 py-20 border-t border-white/[.05]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <p className="f-mono text-[11px] tracking-[.3em] text-white/22 uppercase mb-4">How it works</p>
            <h2 className="f-syne font-bold text-4xl md:text-5xl text-white">Our Process</h2>
          </div>
          <div className="space-y-3">
            {process.map(p=>(
              <div key={p.step} className="proc-card border border-white/[.06] bg-white/[.012] rounded-2xl px-8 py-6 flex items-start gap-6">
                <span className="f-mono text-[11px] text-white/20 mt-1 flex-shrink-0 w-6">{p.step}</span>
                <div>
                  <h3 className="f-syne font-semibold text-[16px] text-white/78 mb-1.5">{p.title}</h3>
                  <p className="f-outfit text-white/36 text-[14px] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPARE TABLE ─── */}
      <section className="px-6 md:px-14 lg:px-24 py-20 border-t border-white/[.05]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <p className="f-mono text-[11px] tracking-[.3em] text-white/22 uppercase mb-4">Why us</p>
            <h2 className="f-syne font-bold text-4xl md:text-5xl text-white">Aerivue vs Generic Agencies</h2>
          </div>
          <div className="border border-white/[.07] rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 bg-white/[.04] border-b border-white/[.07]">
              <div className="px-6 py-4 f-mono text-[10px] text-white/20 tracking-widest uppercase">Feature</div>
              <div className="px-6 py-4 f-syne font-bold text-[14px] text-white text-center border-x border-white/[.07]">Aerivue</div>
              <div className="px-6 py-4 f-mono text-[10px] text-white/20 text-center tracking-wide uppercase">Others</div>
            </div>
            {compare.map((feat,i)=>(
              <div key={feat} className={`grid grid-cols-3 border-b border-white/[.04] last:border-b-0 ${i%2===0?'bg-white/[.007]':''}`}>
                <div className="px-6 py-4 f-outfit text-white/42 text-[13px]">{feat}</div>
                <div className="px-6 py-4 text-center border-x border-white/[.04]">
                  <span className="text-emerald-400">✓</span>
                </div>
                <div className="px-6 py-4 text-center">
                  <span className="text-white/15">✗</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQs ─── */}
      <section className="px-6 md:px-14 lg:px-24 py-20 border-t border-white/[.05]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <p className="f-mono text-[11px] tracking-[.3em] text-white/22 uppercase mb-4">Common questions</p>
            <h2 className="f-syne font-bold text-4xl md:text-5xl text-white">Service FAQs</h2>
          </div>
          <div className="space-y-2">
            {faqs.map((f,i)=>(
              <details key={i} className="faq border border-white/[.06] rounded-2xl overflow-hidden bg-white/[.012]">
                <summary className="flex items-center justify-between gap-6 px-7 py-5 cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden">
                  <span className="f-syne font-semibold text-[15px] text-white/75">{f.q}</span>
                  <span className="text-white/28 text-xl font-light flex-shrink-0 transition-transform duration-300 [[open]_&]:rotate-45">+</span>
                </summary>
                <div className="px-7 pb-6">
                  <div className="w-full h-px bg-white/[.05] mb-4"/>
                  <p className="f-outfit text-white/40 text-[14px] leading-[1.88]">{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative px-6 md:px-14 lg:px-24 py-28 border-t border-white/[.05] overflow-hidden text-center">
        <div className="gridlines"/>
        <div className="orb w-[600px] h-[500px] bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[.03]"/>
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="f-mono text-[11px] tracking-[.3em] text-white/18 uppercase mb-7">— Start today</p>
          <h2 className="f-syne font-extrabold leading-[1.08] text-white mb-6"
              style={{fontSize:'clamp(2.2rem,5.5vw,5rem)'}}>
            Tell us what<br />you are building.
          </h2>
          <p className="f-outfit text-white/32 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            Free discovery call. Fixed price quote in 24 hours. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://t.me/aerivue" target="_blank" rel="noopener noreferrer"
               className="cta-p f-syne font-semibold text-sm px-8 py-4 bg-white text-black rounded-full">
              Message on Telegram
            </a>
            <a href="mailto:hello@aerivue.dev"
               className="cta-o f-syne font-semibold text-sm px-8 py-4 border border-white/15 text-white/52 rounded-full">
              hello@aerivue.dev
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}