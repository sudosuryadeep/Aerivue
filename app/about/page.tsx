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
    a: "We don't use generic templates or off-the-shelf themes. Every Aerivue design starts from scratch — informed by your brand, your audience, and your goals. We lean towards clean, minimal aesthetics with intentional typography, deliberate spacing, and motion that adds purpose. Our designs feel premium without being overdesigned.",
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

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@300;400;500&family=Outfit:wght@300;400;500;600&display=swap');
        .f-syne  { font-family: 'Syne', sans-serif; }
        .f-mono  { font-family: 'DM Mono', monospace; }
        .f-outfit{ font-family: 'Outfit', sans-serif; }

        @keyframes fadeUp   { from{opacity:0;transform:translateY(36px)} to{opacity:1;transform:none} }
        @keyframes lineGrow { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        @keyframes orbPulse { 0%,100%{opacity:.04;transform:scale(1)} 50%{opacity:.07;transform:scale(1.08)} }
        @keyframes ticker   { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes blink    { 0%,100%{opacity:1} 50%{opacity:0} }

        .a1{animation:fadeUp .7s ease both .05s}
        .a2{animation:fadeUp .7s ease both .15s}
        .a3{animation:fadeUp .7s ease both .25s}
        .a4{animation:fadeUp .7s ease both .35s}

        .orb{position:absolute;border-radius:9999px;filter:blur(130px);pointer-events:none;animation:orbPulse 9s ease-in-out infinite}
        .gridlines{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.022) 1px,transparent 1px);background-size:80px 80px;pointer-events:none}

        .ticker-wrap{overflow:hidden}
        .ticker-track{display:flex;width:max-content;animation:ticker 28s linear infinite}

        details.faq summary{list-style:none;cursor:pointer}
        details.faq summary::-webkit-details-marker{display:none}
        details.faq[open] .faq-plus{transform:rotate(45deg)}
        .faq-plus{transition:transform .3s ease;display:inline-block;line-height:1}

        details.faq{border-color:rgba(255,255,255,.06);transition:border-color .2s}
        details.faq:hover{border-color:rgba(255,255,255,.12)}
        details.faq[open]{border-color:rgba(255,255,255,.13)}

        .stack-pill{transition:background .2s,border-color .2s,transform .2s}
        .stack-pill:hover{background:rgba(255,255,255,.055);border-color:rgba(255,255,255,.18);transform:translateY(-2px)}

        .val-card{transition:background .25s,border-color .25s}
        .val-card:hover{background:rgba(255,255,255,.035);border-color:rgba(255,255,255,.1)}

        .clink{transition:background .2s,border-color .2s,color .2s}
        .clink:hover{background:rgba(255,255,255,.05);border-color:rgba(255,255,255,.18);color:#fff}

        .hero-line{position:absolute;bottom:2px;left:0;right:0;height:3px;background:#fff;transform-origin:left;animation:lineGrow .9s cubic-bezier(.16,1,.3,1) .65s both}
        .cursor{animation:blink 1s step-end infinite}
      `}</style>

      {/* ─── HERO ─── */}
      <section className="relative min-h-[94vh] flex flex-col justify-center px-6 md:px-14 lg:px-24 pt-28 pb-16 overflow-hidden">
        <div className="gridlines" />
        <div className="orb w-[520px] h-[520px] bg-white" style={{top:'-110px',left:'-160px'}} />
        <div className="orb w-[400px] h-[400px] bg-white" style={{bottom:'-60px',right:'-120px',animationDelay:'5s'}} />

        <div className="relative z-10 max-w-5xl">
          <p className="f-mono text-[11px] tracking-[.3em] text-white/25 uppercase mb-8 a1">
            — Who we are / aerivue.dev/about
          </p>

          <h1 className="f-syne leading-[1.05] tracking-tight mb-8 a2"
              style={{fontSize:'clamp(3rem,8vw,7rem)',fontWeight:800}}>
            We are{' '}
            <span className="relative inline-block">
              Aerivue
              <span className="hero-line" />
            </span>
            .<br />
            <span className="text-white/20">A web studio</span><br />
            built for the{' '}
            <span className="f-outfit italic font-light text-white/50">modern web.</span>
          </h1>

          <p className="f-outfit text-white/45 text-lg md:text-xl max-w-2xl leading-relaxed a3">
            We design and engineer digital products that are fast, SEO-dominant, and visually precise.
            No templates. No bloat. Just clean, intentional code that works.
          </p>

          <div className="flex flex-wrap gap-4 mt-10 a4">
            <a href="https://t.me/aerivue" target="_blank" rel="noopener noreferrer"
               className="f-syne font-semibold text-sm px-7 py-3.5 bg-white text-black rounded-full hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-white/10">
              Telegram → t.me/aerivue
            </a>
            <a href="mailto:hello@aerivue.dev"
               className="f-syne font-semibold text-sm px-7 py-3.5 border border-white/15 text-white/60 rounded-full hover:border-white/30 hover:text-white transition-all duration-200 hover:-translate-y-0.5">
              hello@aerivue.dev
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
          <span className="f-mono text-[10px] tracking-widest uppercase">scroll</span>
          <div className="w-px h-10 bg-white/40" />
        </div>
      </section>

      {/* ─── TICKER ─── */}
      <div className="ticker-wrap border-y border-white/[.05] py-3 bg-white/[.015]">
        <div className="ticker-track f-mono text-[11px] tracking-[.18em] text-white/18 uppercase select-none">
          {[0,1].map(k=>(
            <span key={k}>
              {['Next.js 14','·','TypeScript','·','Tailwind CSS','·','SEO Optimized','·',
                'Node.js','·','MongoDB','·','Vercel','·','Google Search Console','·',
                'Core Web Vitals','·','Fast. Modern. Minimal.','·','Aerivue','·'
              ].map((t,j)=><span key={j} className="mx-6">{t}</span>)}
            </span>
          ))}
        </div>
      </div>

      {/* ─── FAQ ─── */}
      <section className="px-6 md:px-14 lg:px-24 py-24 max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="f-mono text-[11px] tracking-[.3em] text-white/22 uppercase mb-4">Everything you need to know</p>
          <h2 className="f-syne font-bold text-4xl md:text-5xl text-white">Questions &amp; Answers</h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <details key={i} className="faq border border-white/[.06] rounded-2xl overflow-hidden bg-white/[.013]">
              <summary className="flex items-start justify-between gap-6 px-7 py-6 select-none">
                <div className="flex items-start gap-5">
                  <span className="f-mono text-[10px] text-white/18 mt-1 flex-shrink-0 w-5">
                    {String(i+1).padStart(2,'0')}
                  </span>
                  <span className="f-syne font-semibold text-[15px] md:text-[17px] text-white/80 leading-snug">
                    {faq.q}
                  </span>
                </div>
                <span className="faq-plus text-white/28 text-2xl font-light flex-shrink-0 mt-0.5">+</span>
              </summary>
              <div className="px-7 pb-7 pl-[4.5rem]">
                <div className="w-full h-px bg-white/[.06] mb-5" />
                <p className="f-outfit text-white/45 text-[15px] leading-[1.9]">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ─── TECH STACK ─── */}
      <section className="px-6 md:px-14 lg:px-24 py-20 border-t border-white/[.05]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <div>
              <p className="f-mono text-[11px] tracking-[.3em] text-white/22 uppercase mb-4">Under the hood</p>
              <h2 className="f-syne font-bold text-4xl md:text-5xl text-white">Our Stack</h2>
            </div>
            <p className="f-outfit text-white/32 text-sm max-w-xs leading-relaxed">
              Modern, battle-tested tools chosen for performance, developer experience, and longevity.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {stack.map(item => (
              <div key={item.name} className="stack-pill border border-white/[.07] rounded-xl px-5 py-5 bg-white/[.018]">
                <div className="f-syne font-semibold text-[15px] text-white/75 mb-1">{item.name}</div>
                <div className="f-mono text-[11px] text-white/22 tracking-wide">{item.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="px-6 md:px-14 lg:px-24 py-20 border-t border-white/[.05]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <p className="f-mono text-[11px] tracking-[.3em] text-white/22 uppercase mb-4">How we operate</p>
            <h2 className="f-syne font-bold text-4xl md:text-5xl text-white">Our Principles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[.05] rounded-3xl overflow-hidden">
            {values.map(v => (
              <div key={v.num} className="val-card bg-[#080808] border border-transparent px-8 py-8">
                <div className="f-mono text-[10px] text-white/15 mb-5 tracking-widest">{v.num}</div>
                <h3 className="f-syne font-semibold text-[16px] text-white/75 mb-3 leading-snug">{v.title}</h3>
                <p className="f-outfit text-white/32 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FIND US ─── */}
      <section className="px-6 md:px-14 lg:px-24 py-20 border-t border-white/[.05]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="f-mono text-[11px] tracking-[.3em] text-white/22 uppercase mb-4">Reach out</p>
            <h2 className="f-syne font-bold text-4xl md:text-5xl text-white">Find Aerivue Online</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              {label:'Telegram', handle:'t.me/aerivue',             href:'https://t.me/aerivue'},
              {label:'Email',    handle:'hello@aerivue.dev',        href:'mailto:hello@aerivue.dev'},
              {label:'Website',  handle:'aerivue.dev',              href:'https://aerivue.dev'},
              {label:'Portfolio',handle:'aerivue.dev/portfolio',    href:'https://aerivue.dev/portfolio'},
              {label:'Services', handle:'aerivue.dev/services',     href:'https://aerivue.dev/services'},
              {label:'Blog',     handle:'aerivue.dev/blog',         href:'https://aerivue.dev/blog'},
            ].map(c=>(
              <a key={c.label} href={c.href}
                 target={c.href.startsWith('http')?'_blank':undefined}
                 rel="noopener noreferrer"
                 className="clink border border-white/[.07] rounded-2xl px-6 py-5 bg-white/[.015] text-white/45 block">
                <div className="f-mono text-[10px] tracking-widest text-white/18 uppercase mb-2">{c.label}</div>
                <div className="f-syne text-[15px] font-medium">{c.handle}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CLOSING ─── */}
      <section className="relative px-6 md:px-14 lg:px-24 py-28 border-t border-white/[.05] overflow-hidden text-center">
        <div className="gridlines" />
        <div className="orb w-[600px] h-[600px] bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[.03]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="f-mono text-[11px] tracking-[.3em] text-white/20 uppercase mb-8">— Ready to start?</p>
          <h2 className="f-syne font-bold leading-[1.08] text-white mb-8"
              style={{fontSize:'clamp(2.4rem,6vw,5.5rem)',fontWeight:800}}>
            Your next project<br />starts with a message.<span className="cursor text-white/25">_</span>
          </h2>
          <p className="f-outfit text-white/32 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Tell us what you are building. We will tell you how we can make it remarkable.
            Response guaranteed within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://t.me/aerivue" target="_blank" rel="noopener noreferrer"
               className="f-syne font-semibold text-sm px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-white/10">
              Message on Telegram
            </a>
            <a href="mailto:hello@aerivue.dev"
               className="f-syne font-semibold text-sm px-8 py-4 border border-white/15 text-white/55 rounded-full hover:border-white/30 hover:text-white transition-all duration-200 hover:-translate-y-0.5">
              hello@aerivue.dev
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}