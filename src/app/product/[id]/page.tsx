import Product from "@/components/product";

export default function ProductPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return <Product id={params.id} />;
}
