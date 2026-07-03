"use client";

export default function Error({ error, reset }) {
  return (
    <main className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-red-600 mb-4">
        Something went wrong!
      </h1>

      <p className="mb-6">{error.message}</p>

      <button
        onClick={() => reset()}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Try Again
      </button>
    </main>
  );
}
