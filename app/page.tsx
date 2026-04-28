import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Aerivue — Premium Next.js Web Development Services India",
  description:
    "Aerivue builds fast, SEO-optimized, modern websites using Next.js, TypeScript & Tailwind CSS. Web design, development, backend API, SEO & branding — India-based, globally trusted.",
  keywords: [
    "Aerivue","Next.js web development India","web development services India",
    "SEO website development","React developer India","aerivue.dev",
  ],
  openGraph: {
    title: "Aerivue — Premium Web Development Services India",
    description: "Fast, SEO-optimized websites by Aerivue. Next.js, TypeScript, Tailwind CSS.",
    url: "https://aerivue.dev",
  },
  alternates: { canonical: "https://aerivue.dev" },
};

const services = [
  { id:"01", tag:"Most Popular", title:"Website Design & Development",
    desc:"Pixel-perfect, conversion-focused websites built with Next.js 14 and Tailwind. Mobile-first, SEO-ready, Core Web Vitals optimized.", href:"/services" },
  { id:"02", tag:"Backend", title:"Backend API Development",
    desc:"Scalable REST APIs in Node.js + Express + MongoDB. JWT auth, rate limiting, full documentation.", href:"/services" },
  { id:"03", tag:"New", title:"API for Rent",
    desc:"Ready-made APIs for auth, payments, notifications — pay monthly, integrate in hours. No backend build needed.", href:"/services" },
  { id:"04", tag:"Full Stack", title:"SaaS Product Development",
    desc:"End-to-end SaaS products — auth, billing, dashboards, admin panels. From idea to deployed product.", href:"/services" },
  { id:"05", tag:"SEO", title:"SEO & Technical Optimization",
    desc:"Google Search Console, structured data, sitemap, Core Web Vitals audit. Built to rank from day one.", href:"/services" },
  { id:"06", tag:"Design", title:"Brand Identity & UI Design",
    desc:"Logos, brand guidelines, color systems, social kits — everything your brand needs to look premium.", href:"/services" },
];

const tagColors: Record<string,string> = {
  "Most Popular":"bg-white text-black",
  "Backend":"bg-blue-500/20 text-blue-400 border border-blue-500/30",
  "New":"bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
  "Full Stack":"bg-purple-500/20 text-purple-400 border border-purple-500/30",
  "SEO":"bg-cyan-500/20 text-cyan-400 border border-cyan-500/30",
  "Design":"bg-pink-500/20 text-pink-400 border border-pink-500/30",
};

const process = [
  {n:"01",t:"Discovery Call",    d:"Free 30-min call. We understand your goals, audience, and timeline."},
  {n:"02",t:"Fixed Quote",       d:"Detailed scope + fixed price within 24 hours. No vague estimates."},
  {n:"03",t:"Design & Build",    d:"We design, develop, and share progress. You stay in the loop."},
  {n:"04",t:"Launch & Handover", d:"We deploy, set up analytics, and hand over full ownership."},
];

const whyUs = [
  {icon:"⬡",t:"SEO Built-In From Day One",   d:"Every site ships with metadata, sitemaps, structured data, canonical URLs & Search Console setup — not bolted on later."},
  {icon:"◈",t:"No Templates. Ever.",          d:"Every Aerivue project starts from a blank canvas. Your site looks and performs like no one else's."},
  {icon:"◉",t:"Core Web Vitals Obsessed",     d:"We target 90+ scores on Google PageSpeed. Fast LCP, no CLS, minimal FID. Sites that Google loves to rank."},
  {icon:"◇",t:"Fixed Price. No Surprises.",   d:"We quote upfront and honour it. No scope creep surprises, no ambiguous billing."},
  {icon:"◫",t:"Direct Communication",        d:"You talk to the person building your product — not a PM, not a ticketing system."},
  {icon:"◳",t:"Post-Launch Partnership",     d:"We don't disappear after launch. Maintenance, SEO iteration, and growth tracking are standard offers."},
];

const testimonials = [
  {q:"Aerivue delivered a Next.js site that went from 0 to 2,000 monthly visitors in 60 days. The SEO setup was impeccable.",
   n:"Rohan M.", r:"Startup Founder", i:"R"},
  {q:"Clean code, on-time delivery, and they actually explained what they built. Rare to find this level of quality at this price.",
   n:"Priya S.", r:"E-Commerce Owner", i:"P"},
  {q:"The backend API they built handles 10,000+ requests/day without a hitch. Production-grade work.",
   n:"Arjun K.", r:"Tech Lead", i:"A"},
];

const faqs = [
  {q:"How long does a website take?",      a:"A standard 5–7 page website takes 2–3 weeks. SaaS or e-commerce projects take 4–8 weeks. We set clear timelines upfront and stick to them."},
  {q:"What is your pricing?",              a:"Websites start at ₹15,000. Landing pages from ₹8,000. Monthly SEO/maintenance from ₹3,000/mo. We provide fixed quotes — no surprises."},
  {q:"Do you do SEO with every website?",  a:"Yes. Every Aerivue site includes technical SEO setup — metadata, sitemap, robots.txt, structured data, and Google Search Console configuration."},
  {q:"Can you work on my existing site?",  a:"Yes. We take on legacy codebases for refactoring, performance fixes, redesigns, or adding features. Share your repo and we will assess it."},
  {q:"Do you offer post-launch support?",  a:"Yes. Monthly maintenance plans from ₹3,000/month cover security updates, performance monitoring, content edits, and a monthly analytics report."},
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400&family=Outfit:wght@300;400;500;600&display=swap');
        .f-syne  { font-family:'Syne',sans-serif; }
        .f-mono  { font-family:'DM Mono',monospace; }
        .f-outfit{ font-family:'Outfit',sans-serif; }
        @keyframes ticker  { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes orbP    { 0%,100%{opacity:.04} 50%{opacity:.08} }
        .orb{position:absolute;border-radius:9999px;filter:blur(130px);pointer-events:none;animation:orbP 9s ease-in-out infinite}
        .gridlines{position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px);background-size:80px 80px}
        .ticker-wrap{overflow:hidden}
        .ticker-track{display:flex;width:max-content;animation:ticker 30s linear infinite}
        .svc-card{transition:border-color .25s,background .25s,transform .25s}
        .svc-card:hover{border-color:rgba(255,255,255,.18);background:rgba(255,255,255,.04);transform:translateY(-3px)}
        .why-card{transition:background .2s}
        .why-card:hover{background:rgba(255,255,255,.025)}
        .proc-card{transition:border-color .2s,background .2s}
        .proc-card:hover{border-color:rgba(255,255,255,.12);background:rgba(255,255,255,.025)}
        .test-card{transition:border-color .2s,background .2s}
        .test-card:hover{border-color:rgba(255,255,255,.14);background:rgba(255,255,255,.03)}
        details.faq{transition:border-color .2s}
        details.faq:hover{border-color:rgba(255,255,255,.12) !important}
        details.faq[open]{border-color:rgba(255,255,255,.15) !important}
        details.faq summary{list-style:none;cursor:pointer}
        details.faq summary::-webkit-details-marker{display:none}
        .cta-p{transition:background .2s,transform .2s,box-shadow .2s}
        .cta-p:hover{background:rgba(255,255,255,.88);transform:translateY(-2px);box-shadow:0 14px 40px rgba(255,255,255,.1)}
        .cta-o{transition:border-color .2s,color .2s,transform .2s}
        .cta-o:hover{border-color:rgba(255,255,255,.3);color:#fff;transform:translateY(-2px)}
        .tech-pill{transition:border-color .2s,background .2s,transform .2s}
        .tech-pill:hover{border-color:rgba(255,255,255,.2);background:rgba(255,255,255,.05);transform:translateY(-2px)}
      `}</style>

      <Hero />

      {/* TICKER */}
      <div className="ticker-wrap border-y border-white/[.05] py-3 bg-white/[.01]">
        <div className="ticker-track f-mono text-[11px] tracking-[.2em] text-white/18 uppercase select-none">
          {[0,1].map(k=>(
            <span key={k}>
              {['Next.js 14','·','TypeScript','·','Tailwind CSS','·','Node.js','·','MongoDB','·','REST API','·',
                'SEO Optimized','·','Core Web Vitals','·','Vercel','·','Google Search Console','·','SaaS','·',
                'E-Commerce','·','Aerivue','·'].map((t,j)=><span key={j} className="mx-6">{t}</span>)}
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT STRIP */}
      <section className="px-6 md:px-14 lg:px-24 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="f-mono text-[11px] tracking-[.3em] text-white/25 uppercase mb-5">Who we are</p>
            <h2 className="f-syne font-extrabold leading-[1.08] text-white mb-6"
                style={{fontSize:'clamp(2rem,5vw,4rem)'}}>
              Aerivue is a Premium<br />
              <span className="text-white/25">Web Development</span><br />
              Brand from India.
            </h2>
            <p className="f-outfit text-white/40 text-[15px] leading-[1.9] mb-5">
              We design and engineer digital products that are fast, SEO-dominant, and visually precise.
              No templates. No bloat. No outsourcing. Every project is custom-built with obsessive
              attention to performance and detail.
            </p>
            <p className="f-outfit text-white/40 text-[15px] leading-[1.9] mb-8">
              Whether you are a startup founder needing a launch-ready site, a business owner wanting
              to rank on Google, or a developer who needs a backend API — Aerivue has the stack and
              the craft to deliver it right.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/about" className="cta-p f-syne font-semibold text-sm px-6 py-3 bg-white text-black rounded-full inline-flex items-center gap-2">
                Our Story
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
              <a href="/portfolio" className="cta-o f-syne font-semibold text-sm px-6 py-3 border border-white/15 text-white/48 rounded-full">View Portfolio</a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="border border-white/[.06] bg-white/[.015] rounded-2xl p-7">
              <p className="f-mono text-[10px] tracking-[.25em] text-white/20 uppercase mb-5">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {['Next.js 14','TypeScript','Tailwind CSS','Node.js','Express','MongoDB','PostgreSQL','Vercel','Figma','Sanity CMS','Stripe','Razorpay'].map(t=>(
                  <span key={t} className="tech-pill f-mono text-[11px] text-white/35 border border-white/[.08] rounded-full px-3 py-1.5 tracking-wide">{t}</span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                {n:'50+',  l:'Projects Completed',   s:'Across India & globally'},
                {n:'2024', l:'Founded',               s:'India-based, remote-first'},
                {n:'₹3k',  l:'Starts From / month',  s:'Maintenance & SEO plans'},
                {n:'100%', l:'Custom — No Templates', s:'Every project from scratch'},
              ].map(f=>(
                <div key={f.l} className="border border-white/[.06] bg-white/[.01] rounded-xl p-5">
                  <div className="f-syne font-bold text-2xl text-white mb-1">{f.n}</div>
                  <div className="f-outfit text-white/55 text-[13px] font-medium">{f.l}</div>
                  <div className="f-mono text-[10px] text-white/20 mt-1 tracking-wide">{f.s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 md:px-14 lg:px-24 py-20 border-t border-white/[.05] relative overflow-hidden">
        <div className="orb w-[500px] h-[400px] bg-white right-0 top-0 opacity-[.03]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="f-mono text-[11px] tracking-[.3em] text-white/25 uppercase mb-4">What we build</p>
              <h2 className="f-syne font-bold text-4xl md:text-5xl text-white">Our Services</h2>
            </div>
            <a href="/services" className="cta-o f-syne font-semibold text-sm px-6 py-3 border border-white/15 text-white/42 rounded-full self-start inline-flex items-center gap-2">
              All Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(svc=>(
              <a key={svc.id} href={svc.href}
                 className="svc-card border border-white/[.07] bg-white/[.015] rounded-2xl p-7 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="f-mono text-[10px] text-white/18">{svc.id}</span>
                  <span className={`f-mono text-[10px] px-2.5 py-1 rounded-full ${tagColors[svc.tag]??'bg-white/10 text-white/40'}`}>{svc.tag}</span>
                </div>
                <h3 className="f-syne font-bold text-[17px] text-white/80 leading-snug">{svc.title}</h3>
                <p className="f-outfit text-white/36 text-[13px] leading-[1.8] flex-1">{svc.desc}</p>
                <div className="f-syne font-semibold text-[13px] text-white/28 flex items-center gap-1.5 mt-1">
                  Learn more
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 md:px-14 lg:px-24 py-20 border-t border-white/[.05]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <p className="f-mono text-[11px] tracking-[.3em] text-white/25 uppercase mb-4">How it works</p>
            <h2 className="f-syne font-bold text-4xl md:text-5xl text-white">Simple Process.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {process.map(p=>(
              <div key={p.n} className="proc-card border border-white/[.06] bg-white/[.012] rounded-2xl p-6">
                <div className="f-mono text-[10px] text-white/18 mb-5">{p.n}</div>
                <div className="f-syne font-bold text-[16px] text-white/78 mb-2 leading-snug">{p.t}</div>
                <div className="f-outfit text-white/32 text-[13px] leading-relaxed">{p.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY AERIVUE */}
      <section className="px-6 md:px-14 lg:px-24 py-20 border-t border-white/[.05] relative overflow-hidden">
        <div className="orb w-[400px] h-[400px] bg-white left-0 bottom-0 opacity-[.03]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-14">
            <p className="f-mono text-[11px] tracking-[.3em] text-white/25 uppercase mb-4">Why choose us</p>
            <h2 className="f-syne font-bold text-4xl md:text-5xl text-white">Why Aerivue.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[.05] rounded-3xl overflow-hidden">
            {whyUs.map(w=>(
              <div key={w.t} className="why-card bg-[#080808] border border-transparent px-8 py-8">
                <div className="text-2xl text-white/28 mb-4">{w.icon}</div>
                <div className="f-syne font-semibold text-[16px] text-white/75 mb-2 leading-snug">{w.t}</div>
                <div className="f-outfit text-white/33 text-[13px] leading-relaxed">{w.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 md:px-14 lg:px-24 py-20 border-t border-white/[.05]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <p className="f-mono text-[11px] tracking-[.3em] text-white/25 uppercase mb-4">What clients say</p>
            <h2 className="f-syne font-bold text-4xl md:text-5xl text-white">Trusted by Clients.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map(t=>(
              <div key={t.n} className="test-card border border-white/[.07] bg-white/[.015] rounded-2xl p-7 flex flex-col gap-5">
                <div className="flex gap-1">
                  {[...Array(5)].map((_,i)=>(
                    <svg key={i} className="w-3.5 h-3.5 text-white/28" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="f-outfit text-white/42 text-[14px] leading-[1.85] flex-1">&ldquo;{t.q}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/[.05]">
                  <div className="w-9 h-9 rounded-full bg-white/[.07] border border-white/[.1] flex items-center justify-center f-syne font-bold text-sm text-white/55">{t.i}</div>
                  <div>
                    <div className="f-syne font-semibold text-[14px] text-white/68">{t.n}</div>
                    <div className="f-mono text-[11px] text-white/22 tracking-wide">{t.r}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-14 lg:px-24 py-20 border-t border-white/[.05]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <p className="f-mono text-[11px] tracking-[.3em] text-white/25 uppercase mb-4">Got questions?</p>
            <h2 className="f-syne font-bold text-4xl md:text-5xl text-white">FAQ</h2>
          </div>
          <div className="space-y-2">
            {faqs.map((f,i)=>(
              <details key={i} className="faq border border-white/[.06] rounded-2xl overflow-hidden bg-white/[.012]">
                <summary className="flex items-center justify-between gap-6 px-7 py-5 [&::-webkit-details-marker]:hidden select-none">
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
          <div className="mt-8 text-center">
            <a href="/contact" className="f-outfit text-white/28 text-sm hover:text-white/55 transition-colors">
              More questions? <span className="underline underline-offset-4">Contact us →</span>
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative px-6 md:px-14 lg:px-24 py-28 border-t border-white/[.05] overflow-hidden text-center">
        <div className="gridlines"/>
        <div className="orb w-[700px] h-[500px] bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[.035]"/>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="f-mono text-[11px] tracking-[.3em] text-white/18 uppercase mb-7">— Start today</p>
          <h2 className="f-syne font-extrabold leading-[1.06] text-white mb-6"
              style={{fontSize:'clamp(2.5rem,6.5vw,6rem)'}}>
            Your website.<br />
            <span className="text-white/20">Your rules.</span><br />
            Built by Aerivue.
          </h2>
          <p className="f-outfit text-white/30 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Free 30-min discovery call. Fixed price quote in 24 hours.
            No templates. No outsourcing. No surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <a href="/contact" className="cta-p f-syne font-bold text-sm px-10 py-4 bg-white text-black rounded-full inline-flex items-center gap-2">
              Start Your Project
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
            <a href="https://t.me/aerivue" target="_blank" rel="noopener noreferrer"
               className="cta-o f-syne font-semibold text-sm px-10 py-4 border border-white/15 text-white/48 rounded-full inline-flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              t.me/aerivue
            </a>
            <a href="mailto:surya01785@gmail.com"
               className="cta-o f-syne font-semibold text-sm px-10 py-4 border border-white/15 text-white/48 rounded-full">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}