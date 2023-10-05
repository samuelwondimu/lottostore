import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/services/products";

interface CartItemProps {
  cartProduct: Product & { quantity: number | undefined };
}

function CartItem({ cartProduct }: CartItemProps) {
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
    </Link>
  );
}

export default CartItem;
