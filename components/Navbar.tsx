"use client";
import { useState } from "react";
import Link from "next/link";

const LINKS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Name-On-Map", href: "/name-on-map" },
];

const ACCENTS = ["#FF2E63", "#8B5CF6", "#22D3EE"];

function LogoMark() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <path d="M13 1L23 21H3L13 1Z" stroke="url(#navGrad)" strokeWidth="2" strokeLinejoin="round" />
      <defs>
        <linearGradient id="navGrad" x1="3" y1="21" x2="23" y2="1" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF2E63" />
          <stop offset="0.5" stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <style>{`
        @keyframes gradShift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes menuIn { from{opacity:0;transform:translateY(-8px)} to{opacity:1;transform:none} }
        .nav-grad-text{
          background: linear-gradient(90deg,#FF2E63,#8B5CF6 45%,#22D3EE 90%);
          background-size:200% auto;
          -webkit-background-clip:text; background-clip:text; color:transparent;
          animation: gradShift 6s ease-in-out infinite;
        }
        .nav-link{ position:relative; transition: color .18s ease; }
        .nav-link::after{
          content:''; position:absolute; left:0; right:0; bottom:-4px; height:2px;
          background:linear-gradient(90deg,#FF2E63,#8B5CF6,#22D3EE);
          transform:scaleX(0); transform-origin:left; transition:transform .25s ease;
        }
        .nav-link:hover{ color:#F5F3FF; }
        .nav-link:hover::after{ transform:scaleX(1); }
        .nav-cta{ transition: transform .18s ease; }
        .nav-cta:hover{ transform: translateY(-2px); }
        .mobile-panel{ animation: menuIn .22s cubic-bezier(.16,1,.3,1) both; }
        .burger-line{ transition: transform .25s ease, opacity .2s ease; transform-origin: center; }
      `}</style>

      <div
        className="flex justify-between items-center px-6 md:px-10 lg:px-16 py-4 border-b-2"
        style={{ background: "rgba(11,11,20,.85)", backdropFilter: "blur(10px)", borderColor: "rgba(245,243,255,.1)" }}
      >
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark />
          <span className="f-display uppercase text-xl tracking-wide">
            <span className="nav-grad-text">Aerivue</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link f-body font-medium text-[14px] text-[#F5F3FF]/65">
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="nav-cta f-body font-bold text-[13px] px-5 py-2.5 rounded-full text-[#0B0B14]"
            style={{ background: "linear-gradient(90deg,#FF2E63,#8B5CF6)" }}
          >
            Start Project
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-9 h-9"
        >
          <span
            className="burger-line block w-6 h-[2px] bg-[#F5F3FF]"
            style={{ transform: open ? "translateY(6.5px) rotate(45deg)" : "none" }}
          />
          <span className="burger-line block w-6 h-[2px] bg-[#F5F3FF]" style={{ opacity: open ? 0 : 1 }} />
          <span
            className="burger-line block w-6 h-[2px] bg-[#F5F3FF]"
            style={{ transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none" }}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="mobile-panel md:hidden px-6 py-6 border-b-2 flex flex-col gap-1"
          style={{ background: "#0B0B14", borderColor: "rgba(245,243,255,.1)" }}
        >
          {LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="f-body font-semibold text-[15px] text-[#F5F3FF]/80 py-3 border-b"
              style={{ borderColor: "rgba(245,243,255,.06)" }}
            >
              <span className="f-mono text-[11px] mr-3" style={{ color: ACCENTS[i % ACCENTS.length] }}>
                0{i + 1}
              </span>
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="f-body font-bold text-sm px-6 py-3.5 rounded-full text-[#0B0B14] text-center mt-4"
            style={{ background: "linear-gradient(90deg,#FF2E63,#8B5CF6)" }}
          >
            Start Project
          </Link>
        </div>
      )}
    </header>
  );
}