import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 border-b border-gray-800">
      <Link href="/" className="font-bold text-xl">
        Aerivue
      </Link>

      <div className="flex gap-6 text-gray-300">
        <Link href="/services">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}