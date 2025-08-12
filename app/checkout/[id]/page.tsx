"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import CheckoutForm from "./CheckoutForm";
import ThankYouModal from "./ThankYouModal";

export default function Page({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const productId = decodeURIComponent(params.id);
  const sizeFromQuery = searchParams.get("size") || "";
  const priceFromQuery = searchParams.get("price") || "";

  const [selectedProduct, setSelectedProduct] = useState(productId);
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  useEffect(() => {
    console.log("Params:", { productId, sizeFromQuery, priceFromQuery });
    setSelectedProduct(productId);
    console.log("Selected Product Set to:", productId);
  }, [productId]);

  const handleGoBack = () => {
    console.log("Going back");
    router.back();
  };

  return (
    <section className="py-16 bg-gray-50" id="order">
      <div className="container max-w-2xl px-4 mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-800">
          Place Your Order
        </h2>
        <p className="text-center text-black font-semibold">
          Please fill out the form below to place your order.
        </p>
        <CheckoutForm
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          setShowThankYouModal={setShowThankYouModal}
          onGoBack={handleGoBack}
        />
      </div>
      <ThankYouModal
        open={showThankYouModal}
        onOpenChange={setShowThankYouModal}
      />
    </section>
  );
}
