import CheckoutPage from "./CheckoutPage";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <CheckoutPage id={decodeURIComponent(id)} />;
}
