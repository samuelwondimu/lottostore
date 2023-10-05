"use client";
import { Product } from "@/services/products";
import Image from "next/image";
import { useShoppingCart } from "@/context/cart-context";

export default function ProductDetail(product: Product) {
  const { increaseCartQuantity, cartItems } = useShoppingCart();

  // check if product is already in cart
  const isInCart = cartItems.some((item) => item.id === product.id);
  // find the cart item count
  const cartItem = cartItems.find((item) => item.id === product.id);

  return (
    <div className="py-6 bg-white">
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
            onClick={() => {
              increaseCartQuantity(product.id);
            }}
            type="button"
            className="relative mt-4 inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            {isInCart ? "Add more to cart" : "Add to cart"}
            {isInCart && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                {cartItem?.quantity}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
