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
      <body className="bg-black text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}