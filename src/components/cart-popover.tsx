import { Fragment, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { CartItem as CartItemType } from "@/context/cart-context";
import CartItem from "./cart-items";
import { getCartItems } from "@/services/cart";
import { useQuery } from "@tanstack/react-query";

export default function CartPopover({
  cartQuantity,
  cartItems,
}: {
  cartQuantity: number;
  cartItems: CartItemType[];
}) {
  const { data, refetch } = useQuery({
    queryKey: ["cart-item"],
    queryFn: async () => {
      return await getCartItems(cartItems.map((item) => item.id));
    },
  });

  useEffect(() => {
    refetch();
  }, [cartQuantity, refetch]);

  return (
    <Popover className="relative">
      <Popover.Button className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
        <ShoppingCartIcon className="block h-6 w-6" /> {cartQuantity}
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-sm flex-auto rounded-3xl bg-gray-800 p-4 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            {data?.map((item) => (
              <CartItem key={item.id} cartProduct={item} />
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}