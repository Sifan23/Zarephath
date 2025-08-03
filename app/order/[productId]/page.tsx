import OrderForm from "@/components/sections/OrderForm";
import { allProducts } from "@/data/products"; // Export this from ProductsSection

export default function OrderPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = allProducts.find((p) => p.id === Number(params.productId));

  return (
    <main>
      <OrderForm product={product} />
    </main>
  );
}
