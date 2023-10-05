import { API_ENDPOINT } from "./constant";
import { Product } from "./products";

/**
 * get cart items
 */
export async function getCartItems(id: string[] | number[]) {
  const data = id.map(async (id) => {
    const res = await fetch(API_ENDPOINT + "products/" + id);
    const result = await res.json();
    return result as Product;
  });
  return Promise.all(data);
}
