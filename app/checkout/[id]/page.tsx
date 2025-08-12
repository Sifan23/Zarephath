// app/checkout/[id]/page.tsx
import CheckoutPage from "./CheckoutPage";

export default function Page({
  params,
}: {
  params: { id: string };
}) {
  // Decode the ID from the URL
  const decodedId = decodeURIComponent(params.id);

  return <CheckoutPage id={decodedId} />;
}
