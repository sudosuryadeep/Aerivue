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
        <NameSearch />
      </main>
    </>
  );
}