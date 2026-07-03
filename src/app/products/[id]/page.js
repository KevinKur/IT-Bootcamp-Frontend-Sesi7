import Link from "next/link";
import { getProductById } from "@/services/api";
import FavoriteButton from "@/components/FavoriteButton";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function ProductDetail({ params }) {
  const { id } = await params;
  const product = await getProductById(id);
  if (!product || !product.id) {
    notFound();
  }
  return (
    <main className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            className="h-48 w-full object-contain"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

          <p className="text-gray-600 mb-2">Category: {product.category}</p>

          <p className="text-yellow-500 text-lg mb-4">
            ⭐ {product.rating.rate} ({product.rating.count} reviews)
          </p>

          <p className="text-4xl font-bold text-green-600">${product.price}</p>

          <p className="leading-7 mb-8">{product.description}</p>
          <FavoriteButton productId={product.id} />

          <Link
            href="/"
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
          >
            ← Back to Products
          </Link>
        </div>
      </div>
    </main>
  );
}
