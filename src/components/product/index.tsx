"use client";
import React from "react";
import ProductDetail from "@/components/product-detail";
import ProductCard from "@/components/product-card";
import {
  Product as ProductType,
  getProductById,
  getProductsByCategory,
} from "@/services/products";
import useSWR, { mutate } from "swr";

function Product({ id }: { id: string }) {
  const fetchProductById = async (
    id: number
  ): Promise<ProductType | undefined> => {
    try {
      return await getProductById(id);
    } catch (error) {
      console.error("Error fetching product:", error);
      return undefined;
    }
  };

  const fetchProductsByCategory = async (
    category: string
  ): Promise<ProductType[] | undefined> => {
    try {
      return await getProductsByCategory(category);
    } catch (error) {
      console.error("Error fetching products by category:", error);
      return undefined;
    }
  };

  const { data: product } = useSWR<ProductType | undefined, Error>(
    ["product-by-id", id],
    () => fetchProductById(parseInt(id))
  );

  const { data: productsByCategory } = useSWR<ProductType[] | undefined, Error>(
    ["product-by-category", product?.category ?? ""],
    () => fetchProductsByCategory(product?.category ?? "")
  );

  React.useEffect(() => {
    mutate("product-by-id");
    mutate("product-by-catgeory");
  }, [id]);

  return (
    <div className="bg-gray-200">
      {product && <ProductDetail {...product} />}
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h3 className="text-gray-600 font-bold text-3xl mb-20">
          Realted Products
        </h3>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {productsByCategory?.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
