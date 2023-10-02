import { Product } from "@/services/products";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard(props: Product) {
  const { id, image, price, title } = props;
  return (
    <Link key={id} href={`/product/${id}`} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Image
          width={500}
          height={500}
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{price}</p>
    </Link>
  );
}
