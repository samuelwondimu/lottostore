"use client";
import Link from "next/link";
import CartPopover from "./cart-popover";
import { useShoppingCart } from "@/context/cart-context";

export default function Navbar() {
  const { cartQuantity, cartItems } = useShoppingCart();
  return (
    <nav>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <Link href="/" className="flex flex-shrink-0 items-center">
              LottoStore
            </Link>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button
                type="button"
                className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Login
              </button>
            </div>
            <div className="ml-4 flex flex-shrink-0 md:items-center">
              <CartPopover cartQuantity={cartQuantity} cartItems={cartItems} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
