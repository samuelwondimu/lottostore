import ProductCard from "@/components/product-card";
import { getProducts } from "@/services/products";

export default async function Home() {
  const product = await getProducts();
  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {product.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </main>
  );
}
