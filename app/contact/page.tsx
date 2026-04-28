import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Aerivue | Get a Free Quote — Web Development India",
  description:
    "Contact Aerivue for premium web development, backend API, SEO & design services. Reach us on Telegram, email or fill the form. Response within 24 hours. India-based, globally trusted.",
  keywords: [
    "contact Aerivue",
    "hire web developer India",
    "Next.js developer contact",
    "web development quote India",
    "Aerivue contact",
    "aerivue.dev",
  ],
  openGraph: {
    title: "Contact Aerivue | Get a Free Quote",
    description:
      "Get in touch with Aerivue for web development, API, SEO & design. Free 30-min discovery call. Quote in 24 hours.",
    url: "https://aerivue.dev/contact",
  },
  alternates: { canonical: "https://aerivue.dev/contact" },
};

const channels = [
  {
    label: "Telegram",
    value: "t.me/aerivue",
    href: "https://t.me/aerivue",
    sub: "Fastest response — usually within 2 hours",
  },
  {
    label: "Personal Email",
    value: "surya01785@gmail.com",
    href: "mailto:surya01785@gmail.com",
    sub: "For detailed project briefs & proposals",
  },
  {
    label: "Business Email",
    value: "hello@aerivue.dev",
    href: "mailto:hello@aerivue.dev",
    sub: "Official business & partnership inquiries",
  },
  {
    label: "Website",
    value: "aerivue.dev",
    href: "https://aerivue.dev",
    sub: "Portfolio, services & blog",
  },
];

const services = [
  "Website Design & Development",
  "Backend API Development",
  "API for Rent / API as a Service",
  "SaaS Product Development",
  "Landing Page & Sales Funnel",
  "E-Commerce Store",
  "SEO & Technical Optimization",
  "Brand Identity & UI Design",
  "Portfolio Website",
  "Website Maintenance & Support",
  "Other / Not Sure Yet",
];

const faqs = [
  {
    q: "How quickly do you respond?",
    a: "Telegram messages get a reply within 2 hours during working hours. Emails are responded to within 24 hours. For urgent projects, Telegram is always the fastest route.",
  },
  {
    q: "Do you offer a free consultation?",
    a: "Yes — every project starts with a free 30-minute discovery call. No commitment, no pressure. We use the call to understand your goals and tell you exactly what we can deliver and for how much.",
  },
  {
    q: "What information should I include when reaching out?",
    a: "Just the basics: what you want to build, your rough timeline, and your budget range. That's all we need to give you an accurate quote. The more detail the better, but even a one-liner works to get started.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. Aerivue is India-based but works with clients globally. We are comfortable with async communication across time zones and have worked with clients from Europe, the Middle East, and Southeast Asia.",
  },
  {
    q: "How is payment handled?",
    a: "For Indian clients we accept UPI, bank transfer, and Razorpay. For international clients we use Stripe or Wise. Projects are typically billed in milestones — 40% upfront, 40% at midpoint, 20% on delivery.",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400&family=Outfit:wght@300;400;500;600&display=swap');
        .f-syne   { font-family:'Syne',sans-serif; }
        .f-mono   { font-family:'DM Mono',monospace; }
        .f-outfit { font-family:'Outfit',sans-serif; }

        @keyframes fadeUp   { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:none} }
        @keyframes orbPulse { 0%,100%{opacity:.04} 50%{opacity:.08} }
        @keyframes blink    { 0%,100%{opacity:1} 50%{opacity:0} }

        .a1{animation:fadeUp .65s ease both .05s}
        .a2{animation:fadeUp .65s ease both .15s}
        .a3{animation:fadeUp .65s ease both .25s}
        .a4{animation:fadeUp .65s ease both .35s}

        .orb{position:absolute;border-radius:9999px;filter:blur(130px);pointer-events:none;animation:orbPulse 9s ease-in-out infinite}
        .gridlines{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px);background-size:80px 80px;pointer-events:none}
        .cursor-b{animation:blink 1s step-end infinite}

        .ch-card{transition:border-color .22s,background .22s,transform .22s}
        .ch-card:hover{border-color:rgba(255,255,255,.2);background:rgba(255,255,255,.04);transform:translateY(-2px)}

        .inp{
          width:100%;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.09);
          border-radius:12px;padding:14px 18px;color:#fff;font-size:14px;
          font-family:'Outfit',sans-serif;transition:border-color .2s,background .2s;outline:none;
        }
        .inp::placeholder{color:rgba(255,255,255,.22)}
        .inp:focus{border-color:rgba(255,255,255,.3);background:rgba(255,255,255,.06)}
        select.inp option{background:#141414;color:#fff}

        .sub-btn{
          width:100%;padding:15px;background:#fff;color:#000;border:none;border-radius:12px;
          font-family:'Syne',sans-serif;font-weight:700;font-size:14px;letter-spacing:.02em;
          cursor:pointer;transition:background .2s,transform .2s,box-shadow .2s;
        }
        .sub-btn:hover{background:rgba(255,255,255,.88);transform:translateY(-2px);box-shadow:0 14px 40px rgba(255,255,255,.1)}

        details.faq{transition:border-color .2s}
        details.faq:hover{border-color:rgba(255,255,255,.12) !important}
        details.faq[open]{border-color:rgba(255,255,255,.15) !important}
        details.faq summary{list-style:none;cursor:pointer}
        details.faq summary::-webkit-details-marker{display:none}

        .sp{transition:border-color .2s,background .2s}
        .sp:hover{border-color:rgba(255,255,255,.2);background:rgba(255,255,255,.05)}

        .next-card{transition:border-color .2s,background .2s}
        .next-card:hover{border-color:rgba(255,255,255,.12);background:rgba(255,255,255,.025)}

        .cta-p{transition:background .2s,transform .2s,box-shadow .2s}
        .cta-p:hover{background:rgba(255,255,255,.88);transform:translateY(-2px);box-shadow:0 14px 40px rgba(255,255,255,.1)}
        .cta-o{transition:border-color .2s,color .2s,transform .2s}
        .cta-o:hover{border-color:rgba(255,255,255,.28);color:#fff;transform:translateY(-2px)}
      `}</style>

      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex flex-col justify-center px-6 md:px-14 lg:px-24 pt-28 pb-16 overflow-hidden">
        <div className="gridlines" />
        <div className="orb w-[480px] h-[480px] bg-white" style={{top:'-100px',left:'-100px'}} />
        <div className="orb w-[360px] h-[360px] bg-white" style={{bottom:'-80px',right:'-80px',animationDelay:'5s'}} />
        <div className="relative z-10 max-w-5xl">
          <p className="f-mono text-[11px] tracking-[.3em] text-white/25 uppercase mb-8 a1">
            — Get in touch / aerivue.dev/contact
          </p>
          <h1 className="f-syne font-extrabold leading-[1.05] tracking-tight mb-7 a2"
              style={{fontSize:'clamp(2.8rem,7vw,6.5rem)'}}>
            Let&apos;s Build
            <br /><span className="text-white/20">Something</span>
            <br />Remarkable.<span className="cursor-b text-white/25">_</span>
          </h1>
          <p className="f-outfit text-white/40 text-lg md:text-xl max-w-xl leading-relaxed a3">
            Tell us what you need. We will send a detailed quote within 24 hours
            and schedule a free discovery call at your convenience.
          </p>
          <div className="flex flex-wrap gap-3 mt-10 a4">
            {["Free 30-min Discovery Call","Fixed Price. No Surprises.","Response Within 24h","100% Custom Work"].map(b=>(
              <span key={b} className="f-mono text-[11px] tracking-wide text-white/32 border border-white/[.08] rounded-full px-4 py-2">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHANNELS + FORM ── */}
      <section className="px-6 md:px-14 lg:px-24 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14">

          {/* LEFT */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <p className="f-mono text-[11px] tracking-[.3em] text-white/22 uppercase mb-2">Reach us directly</p>

            {channels.map(ch=>(
              <a key={ch.label} href={ch.href}
                 target={ch.href.startsWith("http")?"_blank":undefined}
                 rel="noopener noreferrer"
                 className="ch-card border border-white/[.07] bg-white/[.015] rounded-2xl px-6 py-5 block">
                <div className="f-mono text-[10px] tracking-widest text-white/20 uppercase mb-2">{ch.label}</div>
                <div className="f-syne font-semibold text-[15px] text-white/80 mb-1">{ch.value}</div>
                <div className="f-outfit text-white/28 text-[12px]">{ch.sub}</div>
              </a>
            ))}

            {/* socials */}
            <div className="mt-1">
              <p className="f-mono text-[10px] tracking-[.25em] text-white/18 uppercase mb-3">Also find us on</p>
              <div className="flex flex-wrap gap-2">
                {[
                  {n:"GitHub",    h:"https://github.com/aerivue"},
                  {n:"Instagram", h:"https://instagram.com/aerivue"},
                  {n:"LinkedIn",  h:"https://linkedin.com/company/aerivue"},
                  {n:"Twitter/X", h:"https://x.com/aerivue"},
                ].map(s=>(
                  <a key={s.n} href={s.h} target="_blank" rel="noopener noreferrer"
                     className="sp f-mono text-[11px] text-white/28 border border-white/[.07] rounded-full px-4 py-2 tracking-wide">
                    {s.n}
                  </a>
                ))}
              </div>
            </div>

            {/* hours */}
            <div className="border border-white/[.06] bg-white/[.01] rounded-2xl px-6 py-5 mt-1">
              <p className="f-mono text-[10px] tracking-[.25em] text-white/18 uppercase mb-4">Working hours (IST)</p>
              <div className="space-y-2.5">
                {[
                  {d:"Mon – Fri",t:"9:00 AM – 8:00 PM"},
                  {d:"Saturday", t:"10:00 AM – 4:00 PM"},
                  {d:"Sunday",   t:"Telegram only (async)"},
                ].map(r=>(
                  <div key={r.d} className="flex justify-between items-center">
                    <span className="f-outfit text-white/32 text-[13px]">{r.d}</span>
                    <span className="f-outfit text-white/52 text-[13px]">{r.t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="lg:col-span-3">
            <p className="f-mono text-[11px] tracking-[.3em] text-white/22 uppercase mb-6">Send a message</p>

            {/*
              HOW TO SETUP:
              Option 1 (Easiest — No Backend): Replace YOUR_FORMSPREE_ID with your Formspree ID.
                Go to formspree.io → create form → copy ID → paste here.
              Option 2 (Your Backend): Change action to your API route, e.g. /api/contact
                Then handle POST in app/api/contact/route.ts
            */}
            <form
              action="https://formspree.io/f/YOUR_FORMSPREE_ID"
              method="POST"
              className="flex flex-col gap-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="f-mono text-[10px] tracking-widest text-white/20 uppercase">Full Name *</label>
                  <input id="name" name="name" type="text" required placeholder="Your name" className="inp" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="f-mono text-[10px] tracking-widest text-white/20 uppercase">Email *</label>
                  <input id="email" name="email" type="email" required placeholder="you@example.com" className="inp" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="f-mono text-[10px] tracking-widest text-white/20 uppercase">Phone / WhatsApp</label>
                  <input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" className="inp" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="f-mono text-[10px] tracking-widest text-white/20 uppercase">Company / Brand</label>
                  <input id="company" name="company" type="text" placeholder="Your company name" className="inp" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="f-mono text-[10px] tracking-widest text-white/20 uppercase">Service Needed *</label>
                <select id="service" name="service" required className="inp">
                  <option value="" disabled>Select a service...</option>
                  {services.map(s=><option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="budget" className="f-mono text-[10px] tracking-widest text-white/20 uppercase">Budget Range</label>
                  <select id="budget" name="budget" className="inp">
                    <option value="" disabled>Select budget...</option>
                    {["Under ₹10,000","₹10,000 – ₹25,000","₹25,000 – ₹50,000","₹50,000 – ₹1,00,000","Above ₹1,00,000","Monthly Retainer","Not Sure / Flexible"].map(b=>(
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="timeline" className="f-mono text-[10px] tracking-widest text-white/20 uppercase">Timeline</label>
                  <select id="timeline" name="timeline" className="inp">
                    <option value="" disabled>When do you need it?</option>
                    {["ASAP (1–2 weeks)","1 Month","2–3 Months","3+ Months","Flexible"].map(t=>(
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="f-mono text-[10px] tracking-widest text-white/20 uppercase">Project Details *</label>
                <textarea id="message" name="message" required rows={5}
                  placeholder="Tell us about your project — what you want to build, what problem it solves, any design references, and anything else that helps us understand your vision..."
                  className="inp resize-none" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="source" className="f-mono text-[10px] tracking-widest text-white/20 uppercase">How did you find Aerivue?</label>
                <select id="source" name="source" className="inp">
                  <option value="" disabled>Select one...</option>
                  {["Google Search","Telegram","Instagram","LinkedIn","GitHub","Referral / Word of Mouth","Twitter / X","Other"].map(s=>(
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Formspree config */}
              <input type="hidden" name="_subject" value="New Project Inquiry — Aerivue" />
              <input type="text" name="_gotcha" style={{display:'none'}} />

              <button type="submit" className="sub-btn mt-2">
                Send Message →
              </button>

              <p className="f-outfit text-white/20 text-[12px] text-center mt-1">
                We never share your data. Response guaranteed within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ── WHAT HAPPENS NEXT ── */}
      <section className="px-6 md:px-14 lg:px-24 py-20 border-t border-white/[.05]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <p className="f-mono text-[11px] tracking-[.3em] text-white/22 uppercase mb-4">What happens next</p>
            <h2 className="f-syne font-bold text-4xl md:text-5xl text-white">After You Message Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {n:"01",t:"We Read",   d:"We read every message carefully — no auto-replies, no bots."},
              {n:"02",t:"We Assess", d:"We evaluate your requirements and put together a realistic plan."},
              {n:"03",t:"We Quote",  d:"You get a detailed, fixed-price quote within 24 hours."},
              {n:"04",t:"We Build",  d:"After a quick call, we kick off and start building your product."},
            ].map(s=>(
              <div key={s.n} className="next-card border border-white/[.06] bg-white/[.012] rounded-2xl p-6">
                <div className="f-mono text-[10px] text-white/18 mb-5">{s.n}</div>
                <div className="f-syne font-bold text-[17px] text-white/78 mb-2">{s.t}</div>
                <div className="f-outfit text-white/33 text-[13px] leading-relaxed">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-6 md:px-14 lg:px-24 py-20 border-t border-white/[.05]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <p className="f-mono text-[11px] tracking-[.3em] text-white/22 uppercase mb-4">Before you message</p>
            <h2 className="f-syne font-bold text-4xl md:text-5xl text-white">Common Questions</h2>
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
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative px-6 md:px-14 lg:px-24 py-28 border-t border-white/[.05] overflow-hidden text-center">
        <div className="gridlines"/>
        <div className="orb w-[600px] h-[500px] bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[.03]"/>
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="f-mono text-[11px] tracking-[.3em] text-white/18 uppercase mb-7">— Prefer direct?</p>
          <h2 className="f-syne font-extrabold leading-[1.08] text-white mb-5"
              style={{fontSize:'clamp(2rem,5vw,4.5rem)'}}>
            We are one message away.
          </h2>
          <p className="f-outfit text-white/30 text-lg mb-10 leading-relaxed max-w-lg mx-auto">
            No forms. No bots. Just message us directly on Telegram or email.
            Real people, real replies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://t.me/aerivue" target="_blank" rel="noopener noreferrer"
               className="cta-p f-syne font-semibold text-sm px-8 py-4 bg-white text-black rounded-full">
              Open Telegram → t.me/aerivue
            </a>
            <a href="mailto:surya01785@gmail.com"
               className="cta-o f-syne font-semibold text-sm px-8 py-4 border border-white/15 text-white/50 rounded-full">
              surya01785@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}