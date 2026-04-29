import type { Metadata } from "next";
import NameSearch from "./NameSearch";

/* ── JSON-LD structured data ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Your Name on Land — Aerivue",
  description:
    "Find your name written across Earth's surface using real NASA Landsat satellite images. Mera naam on map — discover where your name appears on land.",
  url: "https://aerivue.dev/name-on-map",
  applicationCategory: "Entertainment",
  operatingSystem: "Any",
  inLanguage: ["en", "hi"],
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  provider: {
    "@type": "Organization",
    name: "Aerivue",
    url: "https://aerivue.dev",
    logo: "https://aerivue.dev/logo.png",
    sameAs: [
      "https://twitter.com/aerivue",
      "https://github.com/aerivue",
    ],
  },
  screenshot: "https://aerivue.dev/og-name-on-land.jpg",
  featureList: [
    "Find your name in NASA satellite images",
    "Real Landsat Earth observation data",
    "Download combined name image",
    "View exact GPS coordinates",
    "Open location in Google Maps",
  ],
};

/* ── SEO metadata ── */
export const metadata: Metadata = {
  title: "Your Name on Land — NASA Satellite Images | Aerivue",
  description:
    "Find your name written on Earth's surface using real NASA Landsat satellite imagery. Mera naam on map — search your name on land with Aerivue. Free, instant, beautiful.",
  keywords: [
    "mera naam on map",
    "my name on land",
    "name on satellite image",
    "name on map",
    "search name on earth",
    "NASA landsat name",
    "aerivue name on land",
    "name on terrain",
    "my name on satellite",
    "aerivue",
    "naam on map",
    "name on earth surface",
    "landsat letter shapes",
    "satellite letter art",
    "your name on land aerivue",
    "name on land nasa",
    "name on land aerivue",
    "name on map aerivue",
  ],
  authors: [{ name: "Aerivue", url: "https://aerivue.dev" }],
  creator: "Aerivue",
  publisher: "Aerivue",
  metadataBase: new URL("https://aerivue.dev"),
  alternates: {
    canonical: "/name-on-map",
  },
  openGraph: {
    title: "Your Name on Land — NASA Landsat | Aerivue",
    description:
      "See your name written across Earth's terrain using real satellite imagery. Mera naam on map — only on Aerivue.",
    url: "https://aerivue.dev/name-on-map",
    siteName: "Aerivue",
    images: [
      {
        url: "/og-name-on-land.jpg",
        width: 1200,
        height: 630,
        alt: "Your Name on Land — Aerivue NASA Landsat Satellite Imagery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name on Land — Aerivue",
    description:
      "See your name written across Earth's terrain using real NASA satellite imagery. Mera naam on map.",
    site: "@aerivue",
    images: ["/og-name-on-land.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

/* ── Page ── */
export default function NameOnMapPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main
        className="min-h-screen bg-[#040410] text-white flex items-start justify-center px-4"
        itemScope
        itemType="https://schema.org/WebApplication"
      >    
        <meta itemProp="name" content="Your Name on Land — Aerivue" />
        <meta itemProp="url" content="https://aerivue.dev/name-on-map" />
        {/* ── SEO CONTENT BLOCK — Google ke liye crawlable text ── */}
<section className="sr-only" aria-hidden="false">
  <h1>Your Name on Land — NASA Landsat Satellite Images | Aerivue</h1>
  <p>
    Aerivue is a free tool that finds your name written across Earth&apos;s real surface using
    authentic NASA Landsat satellite imagery. Every letter in your name is matched to actual
    terrain patterns captured from space — rivers, deserts, mountains, and coastlines that
    naturally form alphabet shapes.
  </p>
  <h2>How It Works</h2>
  <p>
    Type your name in the search box. Each letter is matched to a real location on Earth where
    the landscape forms that letter shape. You can view the exact GPS coordinates, open the
    spot in Google Maps, and visit the original NASA source. Download all letters combined as
    a single shareable image — completely free.
  </p>
  <h2>Features</h2>
  <ul>
    <li>Real NASA Landsat earth observation satellite images</li>
    <li>Find your name written on land using natural terrain</li>
    <li>View exact GPS coordinates for every letter</li>
    <li>Open any letter location directly in Google Maps</li>
    <li>Download your full name as a combined image</li>
    <li>Free to use, no sign-up required</li>
    <li>Works for names in English up to 12 characters</li>
  </ul>
  <h2>Frequently Asked Questions</h2>
  <h3>Is Aerivue free to use?</h3>
  <p>Yes, Aerivue Name on Land is completely free. No account or login required.</p>
  <h3>Are these real satellite images?</h3>
  <p>
    Yes. Every image comes from NASA Landsat — a real earth observation satellite program that
    has been photographing Earth&apos;s surface since 1972.
  </p>
  <h3>What is mera naam on map?</h3>
  <p>
    &quot;Mera naam on map&quot; means &quot;my name on the map&quot; in Hindi. Aerivue lets you see your name
    displayed using real satellite images of Earth — your personal name on land, powered by NASA data.
  </p>
  <h3>How many letters can my name have?</h3>
  <p>You can search names up to 12 characters long.</p>
  <h3>Who made Aerivue?</h3>
  <p>
    Aerivue is a web development brand based in India that builds fast, modern websites using
    Next.js, React, and Tailwind CSS.
  </p>
</section>
        <NameSearch />
      </main>
    </>
  );
}