"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, Loader2 } from "lucide-react";
import { Product } from "@/types";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";

const ProductModal = ({
  modalProduct,
  setModalProduct,
}: {
  modalProduct: Product;
  setModalProduct: (product: Product | null) => void;
}) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  if (!modalProduct) return null;

  const displayPrice = Array.isArray(modalProduct.price)
    ? modalProduct.price[imageIndex] || modalProduct.price[0]
    : modalProduct.price;
  const displaySize = Array.isArray(modalProduct.size)
    ? modalProduct.size[imageIndex] || modalProduct.size[0]
    : modalProduct.size;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50 px-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
        <button
          onClick={() => setModalProduct(null)}
          className="absolute top-1 right-1 z-50 bg-green-700 hover:bg-red-800 rounded-full p-1 shadow transition cursor-pointer"
        >
          <X size={16} className="text-white" />
        </button>

        <div className="relative w-full h-60 mb-4">
          <Image
            src={modalProduct.images[imageIndex]}
            alt={modalProduct.name}
            fill
            className="rounded object-cover"
          />
          {modalProduct.images.length > 1 && (
            <>
              <button
                onClick={() =>
                  setImageIndex((prev) =>
                    prev === 0 ? modalProduct.images.length - 1 : prev - 1
                  )
                }
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full shadow p-1"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() =>
                  setImageIndex((prev) =>
                    prev === modalProduct.images.length - 1 ? 0 : prev + 1
                  )
                }
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full shadow p-1 cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2">
          {modalProduct.name}
        </h3>
        <p className="text-sm text-gray-700 my-2 leading-relaxed">
          <span className="font-bold text-green-900">Description: </span>
          <span className="text-gray-700 font-semibold">
            {modalProduct.description}
          </span>
        </p>
        {modalProduct.benefits && (
          <p className="text-sm text-gray-700 my-2 leading-relaxed">
            <span className="font-bold text-green-900">Benefits: </span>
            <span className="text-gray-700 font-semibold">
              {modalProduct.benefits}
            </span>
          </p>
        )}
        {displaySize && (
          <p className="text-sm text-gray-700 my-2 leading-relaxed">
            <span className="font-bold text-green-900">Size: </span>
            <span className="text-gray-700 font-semibold">{displaySize}</span>
          </p>
        )}
        <p className="text-sm text-gray-700 my-2 leading-relaxed">
          <span className="font-bold text-green-900">Price: </span>
          <span className="text-gray-700 font-semibold">{displayPrice}</span>
        </p>
        <div className="flex justify-between items-center mt-4">
          <Link
            href={`/checkout/${encodeURIComponent(modalProduct.name)}?size=${encodeURIComponent(displaySize || "")}&price=${encodeURIComponent(displayPrice)}`}
            prefetch={true}
          >
            <Button
              className="bg-green-700 hover:bg-green-800 text-white text-sm flex items-center justify-center gap-2 px-4 py-2 rounded min-w-[120px] cursor-pointer"
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="animate-spin w-4 h-4" />
              ) : (
                <>
                  <ClipboardCheck size={16} /> Order Now
                </>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
