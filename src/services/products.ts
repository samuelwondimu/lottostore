import { API_ENDPOINT } from "./constant";

export type Product = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

/**
 * get products
 */
export async function getProducts() {
  const res = await fetch(API_ENDPOINT + "products");
  const data = await res.json();

  return data as Product[];
}

/**
 * get product by id
 */
export async function getProductById(id: string) {
  const res = await fetch(API_ENDPOINT + "products/" + id);
  const data = await res.json();
  return data as Product;
}
