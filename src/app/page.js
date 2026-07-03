import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/services/api";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-3">Product Showcase</h1>
        <p className="text-gray-500 text-lg mb-10">
          Discover high-quality products
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
