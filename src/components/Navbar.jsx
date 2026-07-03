import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold hover:text-blue-200 transition"
        >
          🛍 Product Showcase
        </Link>

        <div className="flex gap-8 font-medium">
          <Link href="/" className="hover:text-blue-200 transition">
            Home
          </Link>

          <Link href="/contact" className="hover:text-blue-200 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
