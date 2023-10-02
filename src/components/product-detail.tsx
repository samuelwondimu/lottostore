import { Product } from "@/services/products";
import Image from "next/image";

export default function ProductDetail(product: Product) {
  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-4 lg:gap-x-8 lg:px-8">
          <div className="col-span-2">
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div className="col-span-2 gap-4">
            <h3 className="text-gray-900 text-2xl font-extrabold pb-4">
              {product.title}
            </h3>
            <p className="text-gray-900">{product.description}</p>
            <button
              type="button"
              className="relative mt-4 inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
