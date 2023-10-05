import { Product } from "@/services/products";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard(props: Product) {
  const { id, image, price, title } = props;

  return (
    <Link key={id} href={`/product/${id}`}>
      <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="pointer-events-none object-cover group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{price} $</p>
    </Link>
  );
}
