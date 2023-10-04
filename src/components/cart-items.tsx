"use client";
import { Product } from "@/services/products";
import Link from "next/link";
import React from "react";
import Image from "next/image";

function CartItem({ cartProduct }: { cartProduct: Product }) {
  return (
    <div className="bg-gray-500">
      <Link
        href={`/product/${cartProduct?.id}`}
        className="relative rounded-lg p-4"
      >
        <Image
          src={cartProduct?.image ?? ""}
          alt={cartProduct?.title ?? ""}
          width={50}
          height={50}
          className="rounded-lg"
        />
        {cartProduct?.title}
        <span className="absolute inset-0" />

        <p className="mt-1 text-gray-200">{cartProduct?.price}</p>
        {/* {cartItem.quantity} */}
      </Link>
    </div>
  );
}

export default CartItem;
