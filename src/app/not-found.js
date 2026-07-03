import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">404</h1>

      <p className="mb-6">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Back Home
      </Link>
    </main>
  );
}
