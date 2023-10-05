"use client";
import { Product } from "@/services/products";
import Link from "next/link";
import React from "react";
import Image from "next/image";

function CartItem({ cartProduct }: { cartProduct: Product }) {
  return (
    <Link
      href={`/product/${cartProduct?.id}`}
      className="relative rounded-lg py-2 flex gap-2"
    >
      <Image
        src={cartProduct?.image ?? ""}
        alt={cartProduct?.title ?? ""}
        width={50}
        height={50}
        className="rounded-lg"
      />
      <div>
        <p className="font-bold">{cartProduct?.title}</p>
        <p className="mt-1 text-gray-200">{cartProduct?.price}</p>
      </div>
    </Link>
  );
}

export default CartItem;
