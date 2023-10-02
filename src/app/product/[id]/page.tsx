import ProductDetail from "@/components/product-detail";
import { getProductById } from "@/services/products";
import React from "react";

export default async function ProductPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const product = await getProductById(params.id);
  console.log(product);
  return <ProductDetail {...product} />;
}
