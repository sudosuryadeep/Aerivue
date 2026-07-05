import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://aerivue.dev"),
  title: {
    default: "Aerivue - Web Development Services in India",
    template: "%s | Aerivue",
  },
  description:
    "Aerivue provides professional web development services using Next.js, React and Tailwind. Fast, SEO-friendly and scalable websites.",
  keywords: [
    "Aerivue",
    "Web Development India",
    "Next.js Developer",
    "Frontend Developer",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0B0B14] text-[#F5F3FF]">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Anton&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
          .f-display { font-family:'Anton', sans-serif; }
          .f-body    { font-family:'Space Grotesk', sans-serif; }
          .f-mono    { font-family:'JetBrains Mono', monospace; }
        `}</style>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}