import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/services/products";
import { useShoppingCart } from "@/context/cart-context";

interface CartItemProps {
  cartProduct: Product & { quantity: number | undefined };
}

function CartItem({ cartProduct }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  return (
    <Link
      href={`/product/${cartProduct?.id}`}
      className="flex items-center p-4 border-b border-gray-600 transition duration-300"
    >
      <div className="w-20 h-20 mr-4 relative">
        <Image
          src={cartProduct?.image ?? ""}
          alt={cartProduct?.title ?? ""}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <p className="font-semibold">{cartProduct?.title}</p>
        <p className="text-gray-200 text-sm mt-1">
          Quantity: {cartProduct.quantity}
        </p>
        <p className="font-semibold mt-2">
          {cartProduct.quantity} * ${cartProduct.price} = ${" "}
          {(cartProduct.quantity! * cartProduct.price).toFixed(2)}
        </p>
      </div>

      <div className="flex flex-col items-end">
        <button
          className="text-gray-400 hover:text-gray-200"
          onClick={() => removeFromCart(cartProduct.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 fill-current"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              // eslint-disable-next-line max-len
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm-4-8a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z"
            />
          </svg>
        </button>
      </div>
    </Link>
  );
}

export default CartItem;
