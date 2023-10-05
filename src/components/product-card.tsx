import { Product } from "@/services/products";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard(props: Product) {
  const { id, image, price, title } = props;
  return (
    <Link key={id} href={`/product/${id}`} className="group">
      <div className="group relative overflow-hidden rounded-md bg-gray-800 transition-all">
        <div className="relative block aspect-square landscape">
          <Image
            src={image}
            alt={title}
            className="object-cover transition-all"
            fill
            sizes="(max-width: 768px) 30vw, 33vw"
          />
        </div>
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{price} $</p>
    </Link>
  );
}
