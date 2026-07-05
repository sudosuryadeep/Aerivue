import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Aerivue | Get a Free Quote — Web Development India",
  metadataBase: new URL("https://aerivue.dev"),
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

const ACCENTS = ["#FF2E63", "#8B5CF6", "#22D3EE", "#FFC857"];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0B0B14] text-[#F5F3FF] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
        .f-display { font-family:'Anton', sans-serif; }
        .f-body    { font-family:'Space Grotesk', sans-serif; }
        .f-mono    { font-family:'JetBrains Mono', monospace; }

        @keyframes fadeUp    { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:none} }
        @keyframes floatBlob { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(20px,-22px) scale(1.06)} }
        @keyframes gradShift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes glowPulse { 0%,100%{box-shadow:0 0 22px 2px rgba(255,46,99,.35)} 50%{box-shadow:0 0 34px 6px rgba(139,92,246,.4)} }

        .a1{animation:fadeUp .6s cubic-bezier(.16,1,.3,1) both .05s}
        .a2{animation:fadeUp .6s cubic-bezier(.16,1,.3,1) both .16s}
        .a3{animation:fadeUp .6s cubic-bezier(.16,1,.3,1) both .27s}
        .a4{animation:fadeUp .6s cubic-bezier(.16,1,.3,1) both .38s}

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

        .cta-glow{ animation: glowPulse 3.5s ease-in-out infinite; }

        .panel{
          border:2px solid rgba(245,243,255,.85);
          background:#12121D;
          transition: transform .18s cubic-bezier(.16,1,.3,1);
        }
        .panel:hover{ transform: translate(-3px,-3px); }

        .inp{
          width:100%; background:rgba(245,243,255,.05); border:2px solid rgba(245,243,255,.18);
          border-radius:10px; padding:13px 16px; color:#F5F3FF; font-size:14px;
          font-family:'Space Grotesk',sans-serif; transition:border-color .2s, background .2s; outline:none;
        }
        .inp::placeholder{ color:rgba(245,243,255,.28); }
        .inp:focus{ border-color:#8B5CF6; background:rgba(245,243,255,.07); }
        select.inp option{ background:#12121D; color:#F5F3FF; }

        .sub-btn{
          width:100%; padding:15px; border:none; border-radius:10px; cursor:pointer;
          font-family:'Space Grotesk',sans-serif; font-weight:700; font-size:14px; letter-spacing:.02em;
          color:#0B0B14; background:linear-gradient(90deg,#FF2E63,#8B5CF6);
          transition: transform .18s ease;
        }
        .sub-btn:hover{ transform: translateY(-2px) scale(1.01); }
      `}</style>

      {/* ── HERO ── */}
      <section className="relative min-h-[54vh] flex flex-col justify-center px-6 md:px-14 lg:px-24 pt-28 pb-14 overflow-hidden">
        <div className="halftone" />
        <div className="blob w-[440px] h-[440px]" style={{ top: "-100px", left: "-110px", background: "#FF2E63", opacity: 0.26 }} />
        <div className="blob w-[360px] h-[360px]" style={{ bottom: "-90px", right: "-90px", background: "#22D3EE", opacity: 0.2, animationDelay: "4s" }} />

        <div className="relative z-10 max-w-4xl">
          <p className="f-mono text-[11px] tracking-[.3em] text-[#22D3EE] uppercase mb-7 a1">
            ⚡ get in touch — aerivue.dev/contact
          </p>
          <h1 className="f-display uppercase leading-[0.95] mb-6 a2" style={{ fontSize: "clamp(2.6rem,7vw,6rem)" }}>
            Let&apos;s build
            <br />
            <span className="grad-text">something remarkable.</span>
          </h1>
          <p className="f-body text-[#F5F3FF]/55 text-lg max-w-xl leading-relaxed a3">
            Tell us what you need. Quote within 24 hours, plus a free discovery call.
          </p>
          <div className="flex flex-wrap gap-2.5 mt-8 a4">
            {["Free 30-min Call", "Fixed Price", "Reply in 24h"].map((b, i) => (
              <span
                key={b}
                className="f-mono text-[11px] tracking-wide px-4 py-2 rounded-full border-2"
                style={{ borderColor: ACCENTS[i % ACCENTS.length], color: ACCENTS[i % ACCENTS.length] }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHANNELS + FORM ── */}
      <section className="px-6 md:px-14 lg:px-24 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* LEFT — channels */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <p className="f-mono text-[11px] tracking-[.3em] text-[#FFC857] uppercase mb-1">reach us directly</p>

            {channels.map((ch, i) => {
              const color = ACCENTS[i % ACCENTS.length];
              return (
                <a
                  key={ch.label}
                  href={ch.href}
                  target={ch.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="panel rounded-xl px-6 py-5 block"
                  style={{ boxShadow: `4px 4px 0 ${color}` }}
                >
                  <div className="f-mono text-[10px] tracking-widest uppercase mb-2" style={{ color }}>{ch.label}</div>
                  <div className="f-body font-bold text-[15px] text-[#F5F3FF]/90 mb-1">{ch.value}</div>
                  <div className="f-body text-[#F5F3FF]/40 text-[12px]">{ch.sub}</div>
                </a>
              );
            })}

            {/* hours — compact */}
            <div className="panel rounded-xl px-6 py-5" style={{ boxShadow: "4px 4px 0 #8B5CF6" }}>
              <p className="f-mono text-[10px] tracking-[.25em] text-[#8B5CF6] uppercase mb-4">working hours (IST)</p>
              <div className="space-y-2">
                {[
                  { d: "Mon – Fri", t: "9 AM – 8 PM" },
                  { d: "Saturday", t: "10 AM – 4 PM" },
                  { d: "Sunday", t: "Telegram only" },
                ].map((r) => (
                  <div key={r.d} className="flex justify-between items-center">
                    <span className="f-body text-[#F5F3FF]/40 text-[13px]">{r.d}</span>
                    <span className="f-body text-[#F5F3FF]/70 text-[13px]">{r.t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="lg:col-span-3">
            <p className="f-mono text-[11px] tracking-[.3em] text-[#FF2E63] uppercase mb-6">send a message</p>

            {/*
              SETUP: replace YOUR_FORMSPREE_ID with your Formspree ID (formspree.io),
              or change action="" to your own API route e.g. /api/contact
            */}
            <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="f-mono text-[10px] tracking-widest text-[#F5F3FF]/40 uppercase">Full Name *</label>
                  <input id="name" name="name" type="text" required placeholder="Your name" className="inp" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="f-mono text-[10px] tracking-widest text-[#F5F3FF]/40 uppercase">Email *</label>
                  <input id="email" name="email" type="email" required placeholder="you@example.com" className="inp" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="f-mono text-[10px] tracking-widest text-[#F5F3FF]/40 uppercase">Service Needed *</label>
                <select id="service" name="service" required className="inp">
                  <option value="" disabled>Select a service...</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="budget" className="f-mono text-[10px] tracking-widest text-[#F5F3FF]/40 uppercase">Budget Range</label>
                  <select id="budget" name="budget" className="inp">
                    <option value="" disabled>Select budget...</option>
                    {["Under ₹10,000", "₹10,000 – ₹25,000", "₹25,000 – ₹50,000", "₹50,000 – ₹1,00,000", "Above ₹1,00,000", "Not Sure / Flexible"].map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="timeline" className="f-mono text-[10px] tracking-widest text-[#F5F3FF]/40 uppercase">Timeline</label>
                  <select id="timeline" name="timeline" className="inp">
                    <option value="" disabled>When do you need it?</option>
                    {["ASAP (1–2 weeks)", "1 Month", "2–3 Months", "Flexible"].map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="f-mono text-[10px] tracking-widest text-[#F5F3FF]/40 uppercase">Project Details *</label>
                <textarea
                  id="message" name="message" required rows={5}
                  placeholder="Tell us about your project — what you want to build, and anything else that helps us understand your vision..."
                  className="inp resize-none"
                />
              </div>

              <input type="hidden" name="_subject" value="New Project Inquiry — Aerivue" />
              <input type="text" name="_gotcha" style={{ display: "none" }} />

              <button type="submit" className="sub-btn cta-glow mt-2">Send Message →</button>

              <p className="f-body text-[#F5F3FF]/25 text-[12px] text-center mt-1">
                We never share your data. Response guaranteed within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative px-6 md:px-14 lg:px-24 py-24 border-t-2 border-[#F5F3FF]/10 overflow-hidden text-center">
        <div className="halftone" />
        <div className="blob w-[520px] h-[520px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ background: "linear-gradient(90deg,#FF2E63,#8B5CF6,#22D3EE)", opacity: 0.14 }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="f-mono text-[11px] tracking-[.3em] text-[#FFC857] uppercase mb-6">— prefer direct?</p>
          <h2 className="f-display uppercase leading-[0.95] mb-6" style={{ fontSize: "clamp(2rem,5.5vw,4.2rem)" }}>
            We are <span className="grad-text">one message</span> away.
          </h2>
          <p className="f-body text-[#F5F3FF]/40 text-lg mb-9 leading-relaxed max-w-lg mx-auto">
            No forms needed. Just message us directly on Telegram or email — real people, real replies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://t.me/aerivue" target="_blank" rel="noopener noreferrer"
              className="cta-glow f-body font-bold text-sm px-8 py-4 rounded-full text-[#0B0B14] hover:scale-[1.03] transition-transform duration-200"
              style={{ background: "linear-gradient(90deg,#FF2E63,#8B5CF6)" }}
            >
              Open Telegram → t.me/aerivue
            </a>
            <a
              href="mailto:surya01785@gmail.com"
              className="f-body font-bold text-sm px-8 py-4 border-2 border-[#F5F3FF]/60 text-[#F5F3FF]/85 rounded-full hover:bg-[#F5F3FF]/10 transition-all duration-200"
            >
              surya01785@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}