const STACK = ["Next.js 14", "TypeScript", "Tailwind", "Node.js", "MongoDB", "Vercel"];
const ACCENTS = ["#FF2E63", "#8B5CF6", "#22D3EE", "#FFC857"];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center overflow-hidden px-6 pt-28 pb-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
        .f-display { font-family:'Anton', sans-serif; }
        .f-body    { font-family:'Space Grotesk', sans-serif; }
        .f-mono    { font-family:'JetBrains Mono', monospace; }

        @keyframes fadeUp    { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:none} }
        @keyframes floatBlob { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(20px,-22px) scale(1.06)} }
        @keyframes gradShift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes speedIn   { from{opacity:0;transform:scaleX(0)} to{opacity:1;transform:scaleX(1)} }
        @keyframes glowPulse { 0%,100%{box-shadow:0 0 22px 2px rgba(255,46,99,.35)} 50%{box-shadow:0 0 34px 6px rgba(139,92,246,.4)} }
        @keyframes dotPulse  { 0%,100%{opacity:.6} 50%{opacity:1} }

        .h1{animation:fadeUp .6s cubic-bezier(.16,1,.3,1) both .05s}
        .h2{animation:fadeUp .6s cubic-bezier(.16,1,.3,1) both .16s}
        .h3{animation:fadeUp .6s cubic-bezier(.16,1,.3,1) both .27s}
        .h4{animation:fadeUp .6s cubic-bezier(.16,1,.3,1) both .38s}

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
          -webkit-mask-image: radial-gradient(ellipse 65% 55% at 50% 35%, #000 0%, transparent 75%);
                  mask-image: radial-gradient(ellipse 65% 55% at 50% 35%, #000 0%, transparent 75%);
        }

        .blob{ position:absolute; border-radius:9999px; filter:blur(100px); pointer-events:none; animation:floatBlob 11s ease-in-out infinite; }

        .speedlines{ position:absolute; inset:0; pointer-events:none; overflow:hidden; }
        .speedline{ position:absolute; height:2px; background:linear-gradient(90deg,transparent,rgba(245,243,255,.35),transparent); transform-origin:left center; animation:speedIn .8s cubic-bezier(.16,1,.3,1) both; }

        .badge-dot{ width:6px; height:6px; border-radius:50%; background:#22D3EE; animation:dotPulse 2s ease-in-out infinite; }

        .cta-glow{ animation: glowPulse 3.5s ease-in-out infinite; }
        .cta-outline{ transition: transform .18s ease, background .18s ease; }
        .cta-outline:hover{ transform: translateY(-2px); background: rgba(245,243,255,.06); }

        .stack-pill{ transition: transform .18s ease; }
        .stack-pill:hover{ transform: translate(-2px,-2px); }
      `}</style>

      <div className="halftone" />
      <div className="blob w-[480px] h-[480px]" style={{ top: "-100px", left: "-100px", background: "#FF2E63", opacity: 0.24 }} />
      <div className="blob w-[380px] h-[380px]" style={{ bottom: "-80px", right: "-90px", background: "#22D3EE", opacity: 0.2, animationDelay: "3.5s" }} />
      <div className="blob w-[300px] h-[300px]" style={{ top: "20%", left: "55%", background: "#8B5CF6", opacity: 0.16, animationDelay: "6s" }} />

      <div className="speedlines">
        <span className="speedline" style={{ top: "22%", left: 0, width: "34%", animationDelay: ".7s" }} />
        <span className="speedline" style={{ top: "30%", left: 0, width: "50%", animationDelay: ".85s" }} />
        <span className="speedline" style={{ top: "68%", left: 0, width: "28%", animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto w-full">
        <div className="h1 mb-7">
          <div className="inline-flex items-center gap-2.5 border-2 rounded-full px-4 py-2" style={{ borderColor: "rgba(245,243,255,.2)" }}>
            <span className="badge-dot" />
            <span className="f-mono text-[10px] tracking-[.22em] text-[#F5F3FF]/60 uppercase">India&apos;s Premium Web Studio</span>
          </div>
        </div>

        <h1 className="h2 f-display uppercase leading-[0.95] tracking-tight" style={{ fontSize: "clamp(2.6rem,7.5vw,6.5rem)" }}>
          We build websites
          <br />
          that <span className="grad-text">rank &amp; convert.</span>
        </h1>

        <p className="h3 f-body text-[#F5F3FF]/55 mt-7 max-w-[560px] leading-[1.8] text-[16px] md:text-[17px]">
          Fast, SEO-dominant, pixel-perfect — built from scratch using Next.js 14, TypeScript &amp; Tailwind CSS. No templates. No outsourcing. Ever.
        </p>

        <div className="flex flex-col sm:flex-row gap-3.5 mt-9 h4">
          <a
            href="/contact"
            className="cta-glow f-body font-bold text-sm px-8 py-3.5 rounded-full text-[#0B0B14] inline-flex items-center gap-2"
            style={{ background: "linear-gradient(90deg,#FF2E63,#8B5CF6)" }}
          >
            Start Your Project
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="/services"
            className="cta-outline f-body font-semibold text-sm px-8 py-3.5 border-2 rounded-full text-[#F5F3FF]/75 inline-flex items-center gap-2"
            style={{ borderColor: "rgba(245,243,255,.3)" }}
          >
            Explore Services
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 mt-10 h4">
          {STACK.map((tech, i) => (
            <span
              key={tech}
              className="stack-pill f-mono text-[10px] px-3.5 py-1.5 rounded-full tracking-widest"
              style={{ color: ACCENTS[i % ACCENTS.length], border: `2px solid ${ACCENTS[i % ACCENTS.length]}` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}