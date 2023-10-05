"use client";
import Link from "next/link";
import CartPopover from "./cart-popover";
import { useShoppingCart } from "@/context/cart-context";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { cartQuantity, cartItems } = useShoppingCart();
  const { data: session, status } = useSession();
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
              {session ? (
                <>
                  <div className="">
                    Logged in as {session?.user?.email}
                    <button
                      className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                      onClick={() => signOut()}
                    >
                      Sign out
                    </button>
                  </div>
                </>
              ) : (
                <Link
                  href="/auth"
                  type="button"
                  className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Login
                </Link>
              )}
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
