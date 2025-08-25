import CheckoutPage from "./CheckoutPage";

// Metadata as plain object
export const metadata = {
  title: "CheckoutPage",
};

// Next.js types think params is a Promise, so we make Page async
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);
  return <CheckoutPage id={decodedId} />;
}
