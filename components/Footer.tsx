export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-10 p-5 text-center text-gray-400">
      © {new Date().getFullYear()} Aerivue. All rights reserved.
    </footer>
  );
}