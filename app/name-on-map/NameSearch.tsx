"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download, MapPin, ExternalLink, Search,
  Loader2, Satellite, Globe,
} from "lucide-react";

type LocationType = { title: string; coordinates: string; link: string };
type ImageResult = { key: string; data: LocationType };

/* ── Stars (outside component — never re-randomize) ── */
// ── Stars — CSS only, NO Framer Motion ──
const STARS = Array.from({ length: 70 }, (_, i) => ({
  id: i,
  size: Math.random() * 1.8 + 0.4,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: Math.random() * 5 + 2,
  delay: Math.random() * 5,
  opacity: Math.random() * 0.5 + 0.1,
}));

// ── Stars — client-only, no SSR mismatch ──
function StarField() {
  const [stars, setStars] = useState<{
    id: number; size: number; left: number; top: number;
    duration: number; delay: number; opacity: number;
  }[]>([]);

  useEffect(() => {
    setStars(
      Array.from({ length: 70 }, (_, i) => ({
        id: i,
        size: Math.random() * 1.8 + 0.4,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 5 + 2,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.5 + 0.1,
      }))
    );
  }, []); // ← sirf ek baar, client mount hone par

  if (!stars.length) return null; // server pe kuch render hi nahi

  return (
    <>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: var(--op); }
          50%       { opacity: 0.04; }
        }
      `}</style>
      <div
        className="fixed inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {stars.map((s) => (
          <span
            key={s.id}
            className="absolute rounded-full bg-white"
            style={{
              width:  `${s.size}px`,
              height: `${s.size}px`,
              left:   `${s.left}%`,
              top:    `${s.top}%`,
              "--op": s.opacity,
              opacity: s.opacity,
              animation: `twinkle ${s.duration}s ${s.delay}s infinite ease-in-out`,
            } as React.CSSProperties}
          />
        ))}
      </div>
    </>
  );
}

function Scanlines() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.025]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)",
      }}
    />
  );
}

export default function NameSearch() {
  const [locations, setLocations] = useState<Record<string, LocationType>>({});
  const [images, setImages] = useState<ImageResult[]>([]);
  const [selected, setSelected] = useState<ImageResult | null>(null);
  const [name, setName] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch("/locations.json").then((r) => r.json()).then(setLocations);
  }, []);

  const parseDMS = (coord: string) => {
    const rx = /(\d+)°\s*(\d+)'?\s*([\d.]+)?"?\s*([NS])\s+(\d+)°\s*(\d+)'?\s*([\d.]+)?"?\s*([EW])/i;
    const m = coord.match(rx);
    if (!m) return null;
    let lat = parseFloat(m[1]) + parseFloat(m[2]) / 60 + parseFloat(m[3] || "0") / 3600;
    let lng = parseFloat(m[5]) + parseFloat(m[6]) / 60 + parseFloat(m[7] || "0") / 3600;
    if (m[4].toUpperCase() === "S") lat *= -1;
    if (m[8].toUpperCase() === "W") lng *= -1;
    return { lat, lng };
  };

  const openMap = (coords: string) => {
    const r = parseDMS(coords);
    if (!r) return;
    window.open(`https://www.google.com/maps/search/?api=1&query=${r.lat},${r.lng}&zoom=12`, "_blank");
  };

  const getRandomImage = (letter: string): ImageResult | null => {
    const keys = Object.keys(locations).filter((k) => k.startsWith(letter + "_"));
    if (!keys.length) return null;
    const key = keys[Math.floor(Math.random() * keys.length)];
    return { key, data: locations[key] };
  };

  const generateName = () => {
    if (!name.trim() || isGenerating) return;
    setIsGenerating(true);
    setSelected(null);
    setTimeout(() => {
      const result: ImageResult[] = [];
      for (const ch of name.toLowerCase()) {
        if (ch === " ") continue;
        const img = getRandomImage(ch);
        if (img) result.push(img);
      }
      setImages(result);
      setHasSearched(true);
      setIsGenerating(false);
    }, 600);
  };

  const roundRect = (
    ctx: CanvasRenderingContext2D,
    x: number, y: number, w: number, h: number, r: number
  ) => {
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.arcTo(x + w, y, x + w, y + r, r);
    ctx.lineTo(x + w, y + h - r);
    ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
    ctx.lineTo(x + r, y + h);
    ctx.arcTo(x, y + h, x, y + h - r, r);
    ctx.lineTo(x, y + r);
    ctx.arcTo(x, y, x + r, y, r);
    ctx.closePath();
  };

  const downloadCombined = async () => {
    if (!images.length) return;
    setIsDownloading(true);
    const SW = 180, SH = 360, GAP = 8, PX = 36, PT = 36, PB = 90;
    const W = images.length * SW + (images.length - 1) * GAP + PX * 2;
    const H = SH + PT + PB;
    const canvas = document.createElement("canvas");
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "#040410";
    ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = "rgba(100,180,255,0.035)";
    ctx.lineWidth = 1;
    for (let x = 0; x < W; x += 36) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y < H; y += 36) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
    const loadImg = (src: string): Promise<HTMLImageElement> =>
      new Promise((res, rej) => { const el = new Image(); el.crossOrigin = "anonymous"; el.onload = () => res(el); el.onerror = rej; el.src = src; });
    try {
      const ltrs = name.toUpperCase().replace(/ /g, "");
      for (let i = 0; i < images.length; i++) {
        const el = await loadImg(`/landsat-images/${images[i].key}.jpg`);
        const x = PX + i * (SW + GAP), y = PT;
        ctx.save(); ctx.beginPath(); roundRect(ctx, x, y, SW, SH, 10); ctx.clip();
        ctx.drawImage(el, x, y, SW, SH); ctx.restore();
        ctx.fillStyle = "rgba(4,8,28,0.72)"; ctx.fillRect(x, y + SH - 32, SW, 32);
        ctx.fillStyle = "rgba(130,220,255,0.95)"; ctx.font = "bold 14px 'Courier New',monospace";
        ctx.textAlign = "center"; ctx.fillText(ltrs[i] ?? "", x + SW / 2, y + SH - 11);
      }
      const fs = Math.min(38, Math.max(18, Math.floor(W / (name.replace(/ /g,"").length + 3))));
      ctx.fillStyle = "#ffffff"; ctx.font = `700 ${fs}px 'Courier New',monospace`;
      ctx.textAlign = "center"; ctx.fillText(name.toUpperCase(), W / 2, SH + PT + 42);
      ctx.fillStyle = "rgba(100,190,255,0.38)"; ctx.font = "11px 'Courier New',monospace";
      ctx.fillText("aerivue.dev  •  name on land", W / 2, SH + PT + 66);
      const a = document.createElement("a");
      a.download = `${name.trim().replace(/ /g, "-").toLowerCase()}-on-land-aerivue.png`;
      a.href = canvas.toDataURL("image/png", 1.0); a.click();
    } catch (e) { console.error("Download error", e); }
    setIsDownloading(false);
  };

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
  };
  const cardVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.85 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 280, damping: 22 } },
  };

  const letters = name.replace(/ /g, "");

  return (
    <>
      <StarField />
      <Scanlines />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex flex-col min-h-screen">

        {/* ── HERO — shrinks after search ── */}
        <motion.header
          animate={hasSearched ? "compact" : "full"}
          variants={{
            full:    { paddingTop: 80, paddingBottom: 40 },
            compact: { paddingTop: 24, paddingBottom: 16 },
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4
                       border border-cyan-500/20 bg-cyan-500/[0.06]
                       text-cyan-400 text-[10px] font-mono tracking-[0.2em] uppercase"
          >
            <Satellite className="w-3 h-3" aria-hidden="true" />
            <span>NASA Landsat · Earth Observation</span>
          </motion.div>

          {/* Title — shrinks after search */}
          <motion.h1
            animate={hasSearched ? "compact" : "full"}
            variants={{
              full:    { fontSize: "clamp(2.8rem, 10vw, 6.5rem)", marginBottom: 16 },
              compact: { fontSize: "clamp(1.6rem, 5vw, 2.8rem)", marginBottom: 8 },
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-black leading-[0.9] tracking-tight"
          >
            <span className="block bg-gradient-to-b from-white via-white/80 to-white/30 bg-clip-text text-transparent">
              Your Name
            </span>
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-400 bg-clip-text text-transparent">
              On Land
            </span>
          </motion.h1>

          {/* Subtitle — hides after search */}
          <AnimatePresence>
            {!hasSearched && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                transition={{ duration: 0.3 }}
                className="text-white/35 text-xs sm:text-sm font-mono tracking-wide max-w-sm mx-auto leading-relaxed mb-2"
              >
                Each letter found on Earth&apos;s actual surface
                <br className="hidden sm:block" />
                {" "}via real NASA Landsat satellite imagery
              </motion.p>
            )}
          </AnimatePresence>
        </motion.header>

        {/* ── SEARCH BAR ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex gap-2 justify-center mb-6 max-w-md mx-auto w-full"
          role="search"
          aria-label="Search your name in satellite images"
        >
          <div className="relative flex-1">
            <input
              ref={inputRef}
              id="name-input"
              value={name}
              onChange={(e) => setName(e.target.value.slice(0, 12))}
              onKeyDown={(e) => e.key === "Enter" && generateName()}
              placeholder="Enter your name..."
              maxLength={12}
              autoComplete="off"
              aria-label="Your name"
              className="
                w-full px-4 py-3
                bg-white/[0.04] border border-white/10 rounded-xl
                font-mono text-white text-sm tracking-[0.15em] uppercase
                placeholder:text-white/20 placeholder:normal-case placeholder:tracking-normal
                outline-none focus:border-cyan-500/40 focus:bg-white/[0.07]
                transition-all duration-300
              "
            />
            <span
              aria-hidden="true"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-white/20"
            >
              {name.length}/12
            </span>
          </div>

          <motion.button
            onClick={generateName}
            disabled={isGenerating || !name.trim()}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Find my name on land"
            className="
              px-4 py-3 rounded-xl font-mono text-xs font-bold text-black
              bg-gradient-to-r from-cyan-400 to-blue-400
              disabled:opacity-30 disabled:cursor-not-allowed
              flex items-center gap-1.5 transition-all duration-300
              hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]
              whitespace-nowrap
            "
          >
            {isGenerating
              ? <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
              : <Search className="w-4 h-4" aria-hidden="true" />
            }
            <span className="hidden sm:inline">Search</span>
          </motion.button>
        </motion.div>

        {/* ── RESULTS ── */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            {images.length > 0 && (
              <motion.section
                key="results"
                aria-label="Your name in satellite imagery"
                variants={container}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
              >
                {/* Letter tiles — scrollable on mobile if too wide */}
                <div className="flex justify-center mb-5">
                  <div className="flex flex-nowrap gap-1 overflow-x-auto pb-2 max-w-full
                                  scrollbar-none" 
                       style={{ scrollbarWidth: "none" }}>
                    {images.map((img, i) => (
                      <motion.button
                        key={`${img.key}-${i}`}
                        variants={cardVariant}
                        onClick={() => setSelected(selected?.key === img.key ? null : img)}
                        aria-label={`Letter ${letters[i]?.toUpperCase()} — ${img.data.title}`}
                        aria-pressed={selected?.key === img.key}
                        whileHover={{ scale: 1.06, zIndex: 10 }}
                        whileTap={{ scale: 0.93 }}
                        className="relative flex-shrink-0 group focus:outline-none"
                      >
                        <div className={`
                          w-[60px] h-[122px] sm:w-[72px] sm:h-[148px] md:w-[84px] md:h-[172px]
                          rounded-xl overflow-hidden border-2 transition-all duration-300
                          ${selected?.key === img.key
                            ? "border-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.45)]"
                            : "border-white/10 group-hover:border-cyan-400/40"
                          }
                        `}>
                          <img
                            src={`/landsat-images/${img.key}.jpg`}
                            alt={`NASA Landsat satellite image of letter ${letters[i]?.toUpperCase()} at ${img.data.title}`}
                            className="w-full h-full object-cover"
                            loading="eager"
                            decoding="async"
                          />
                          <div
                            className="absolute bottom-0 inset-x-0 h-7
                                       bg-gradient-to-t from-black/80 to-transparent
                                       flex items-end justify-center pb-1"
                            aria-hidden="true"
                          >
                            <span className="text-cyan-300/90 text-[10px] font-mono font-bold tracking-widest">
                              {letters[i]?.toUpperCase()}
                            </span>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Download button */}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex justify-center mb-5"
                >
                  <motion.button
                    onClick={downloadCombined}
                    disabled={isDownloading}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    aria-label="Download all letter images combined as one image"
                    className="
                      flex items-center gap-2 px-5 py-2
                      border border-white/10 rounded-xl
                      bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/20
                      text-white/50 hover:text-white
                      font-mono text-xs transition-all duration-300
                    "
                  >
                    {isDownloading
                      ? <><Loader2 className="w-3.5 h-3.5 animate-spin" />Generating…</>
                      : <><Download className="w-3.5 h-3.5" />Download image</>
                    }
                  </motion.button>
                </motion.div>

                {/* Location panel */}
                <AnimatePresence>
                  {selected && (
                    <motion.aside
                      key={selected.key}
                      initial={{ opacity: 0, y: 14, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 300, damping: 26 }}
                      aria-label={`Location details for ${selected.data.title}`}
                      className="max-w-sm mx-auto"
                    >
                      <div className="border border-white/10 rounded-2xl bg-white/[0.03] backdrop-blur-md p-4">
                        <div className="flex items-start gap-3 mb-4">
                          <div
                            aria-hidden="true"
                            className="w-8 h-8 rounded-lg border border-cyan-500/20 bg-cyan-500/10
                                       flex items-center justify-center flex-shrink-0"
                          >
                            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                          </div>
                          <div className="min-w-0">
                            <h2 className="text-white font-bold text-sm leading-snug truncate">
                              {selected.data.title}
                            </h2>
                            <p className="text-white/30 text-[10px] font-mono mt-0.5 truncate">
                              {selected.data.coordinates}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <motion.a
                            href={selected.data.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            aria-label={`View NASA source for ${selected.data.title}`}
                            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl
                                       bg-blue-500/8 border border-blue-500/20 text-blue-300
                                       font-mono text-[10px] hover:bg-blue-500/15 transition-all"
                          >
                            <ExternalLink className="w-3 h-3" aria-hidden="true" />
                            NASA Source
                          </motion.a>
                          <motion.button
                            onClick={() => openMap(selected.data.coordinates)}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            aria-label={`Open ${selected.data.title} in Google Maps`}
                            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl
                                       bg-emerald-500/8 border border-emerald-500/20 text-emerald-300
                                       font-mono text-[10px] hover:bg-emerald-500/15 transition-all"
                          >
                            <Globe className="w-3 h-3" aria-hidden="true" />
                            Open Maps
                          </motion.button>
                        </div>
                      </div>
                    </motion.aside>
                  )}
                </AnimatePresence>

                {!selected && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-center text-white/20 text-[10px] font-mono tracking-widest"
                    aria-live="polite"
                  >
                    TAP ANY LETTER TO SEE ITS LOCATION
                  </motion.p>
                )}
              </motion.section>
            )}
          </AnimatePresence>

          {/* Empty state */}
          {!hasSearched && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center"
              aria-hidden="true"
            >
              <div className="p-8 border border-dashed border-white/8 rounded-2xl
                              bg-white/[0.015] flex flex-col items-center gap-3">
                <Satellite className="w-6 h-6 text-white/15" />
                <p className="text-white/20 text-[10px] font-mono tracking-widest text-center leading-relaxed">
                  TYPE YOUR NAME ABOVE<br />AND HIT SEARCH
                </p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="py-8 text-center"
          aria-label="Site credit"
        >
          <p className="text-white/10 text-[9px] font-mono tracking-[0.25em] uppercase">
            Aerivue.dev · NASA Landsat · Earth Observation Imagery
          </p>
        </motion.footer>
      </div>
    </>
  );
}