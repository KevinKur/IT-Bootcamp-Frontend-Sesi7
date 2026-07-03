import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
      <div className="flex justify-center items-center h-64 p-6 bg-white">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className="object-contain h-52"
        />
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h2 className="font-bold text-xl leading-snug line-clamp-2">
          {product.title}
        </h2>
        <p className="mt-4 text-3xl font-bold text-emerald-600">
          ${product.price}
        </p>
        <div className="flex items-center gap-2 text-yellow-500 mt-2">
          ⭐ {product.rating.rate}
          <span className="text-gray-500 text-sm">
            ({product.rating.count} reviews)
          </span>
        </div>

        <div className="mt-auto pt-6">
          <Link
            href={`/products/${product.id}`}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
