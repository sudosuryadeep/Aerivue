import Link from "next/link";

const ACCENTS = ["#FF2E63", "#8B5CF6", "#22D3EE", "#FFC857"];

const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Web Development", href: "/services" },
  { label: "Backend APIs", href: "/services" },
  { label: "SEO Optimization", href: "/services" },
  { label: "Brand & UI Design", href: "/services" },
];

const socials = [
  { label: "Telegram", href: "https://t.me/aerivue" },
  { label: "GitHub", href: "https://github.com/aerivue" },
  { label: "Instagram", href: "https://instagram.com/aerivue" },
  { label: "LinkedIn", href: "https://linkedin.com/company/aerivue" },
];

function LogoMark() {
  return (
    <svg width="24" height="24" viewBox="0 0 26 26" fill="none">
      <path d="M13 1L23 21H3L13 1Z" stroke="url(#footGrad)" strokeWidth="2" strokeLinejoin="round" />
      <defs>
        <linearGradient id="footGrad" x1="3" y1="21" x2="23" y2="1" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF2E63" />
          <stop offset="0.5" stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-2" style={{ borderColor: "rgba(245,243,255,.1)" }}>
      <style>{`
        @keyframes gradShift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        .foot-grad-text{
          background: linear-gradient(90deg,#FF2E63,#8B5CF6 45%,#22D3EE 90%);
          background-size:200% auto;
          -webkit-background-clip:text; background-clip:text; color:transparent;
          animation: gradShift 6s ease-in-out infinite;
        }
        .foot-link{ transition: color .18s ease, transform .18s ease; display:inline-block; }
        .foot-link:hover{ color:#F5F3FF; transform: translateX(3px); }
        .sp-link{ transition: transform .18s ease, background .18s ease; }
        .sp-link:hover{ transform: translate(-2px,-2px); }
        .foot-blob{ position:absolute; border-radius:9999px; filter:blur(110px); pointer-events:none; opacity:.12; }
      `}</style>

      <div className="foot-blob w-[420px] h-[420px]" style={{ background: "#8B5CF6", left: "-100px", bottom: "-140px" }} />

      <div className="relative z-10 px-6 md:px-14 lg:px-24 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <LogoMark />
              <span className="f-display uppercase text-lg tracking-wide foot-grad-text">Aerivue</span>
            </Link>
            <p className="f-body text-[#F5F3FF]/40 text-[13px] leading-relaxed mb-5">
              Premium web development studio from India. Fast, SEO-dominant, custom-built.
            </p>
            <div className="flex flex-wrap gap-2">
              {socials.map((s, i) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sp-link f-mono text-[10px] px-3 py-1.5 rounded-full tracking-wide"
                  style={{ color: ACCENTS[i % ACCENTS.length], border: `2px solid ${ACCENTS[i % ACCENTS.length]}` }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="f-mono text-[10px] tracking-[.25em] text-[#FFC857] uppercase mb-4">Navigate</p>
            <div className="flex flex-col gap-2.5">
              {quickLinks.map((l) => (
                <Link key={l.href} href={l.href} className="foot-link f-body text-[14px] text-[#F5F3FF]/55">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="f-mono text-[10px] tracking-[.25em] text-[#22D3EE] uppercase mb-4">What we build</p>
            <div className="flex flex-col gap-2.5">
              {services.map((s) => (
                <Link key={s.label} href={s.href} className="foot-link f-body text-[14px] text-[#F5F3FF]/55">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="f-mono text-[10px] tracking-[.25em] text-[#FF2E63] uppercase mb-4">Get in touch</p>
            <div className="flex flex-col gap-2.5">
              <a href="https://t.me/aerivue" target="_blank" rel="noopener noreferrer" className="foot-link f-body text-[14px] text-[#F5F3FF]/55">
                t.me/aerivue
              </a>
              <a href="mailto:hello@aerivue.dev" className="foot-link f-body text-[14px] text-[#F5F3FF]/55">
                hello@aerivue.dev
              </a>
              <span className="f-body text-[13px] text-[#F5F3FF]/30 mt-1">India · Remote-first</span>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div
          className="mt-14 pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderColor: "rgba(245,243,255,.08)" }}
        >
          <p className="f-mono text-[11px] text-[#F5F3FF]/25 tracking-wide">
            © {new Date().getFullYear()} Aerivue. All rights reserved.
          </p>
          <p className="f-mono text-[11px] text-[#F5F3FF]/25 tracking-wide">
            Built with Next.js · Fast. Bold. Alive.
          </p>
        </div>
      </div>
    </footer>
  );
}