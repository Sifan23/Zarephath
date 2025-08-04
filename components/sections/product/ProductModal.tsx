"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ShoppingCart, Star, X } from "lucide-react";
import { Product } from "@/types";
import { useState } from "react";

const ProductModal = ({
  modalProduct,
  setModalProduct,
}: {
  modalProduct: Product;
  setModalProduct: (product: Product | null) => void;
}) => {
  const [imageIndex, setImageIndex] = useState(0);

  if (!modalProduct) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50 px-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
        <button
          onClick={() => setModalProduct(null)}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-600"
        >
          <X size={20} />
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
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full shadow p-1"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>
        <h3 className="text-xl font-bold text-green-800">
          {modalProduct.name}
        </h3>
        <p className="text-sm text-gray-600 my-2">{modalProduct.description}</p>
        <div className="flex items-center gap-2 mb-3 text-yellow-500 text-sm">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              size={16}
              fill={
                i < Math.floor(modalProduct.rating) ? "currentColor" : "none"
              }
              strokeWidth={1}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">
            {modalProduct.rating.toFixed(1)}
          </span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-green-700 font-bold">{modalProduct.price}</span>
          <Link
            href={`/order?product=${encodeURIComponent(modalProduct.name)}`}
            className="bg-green-700 hover:bg-green-800 text-white text-sm flex items-center gap-2 px-4 py-2 rounded"
          >
            <ShoppingCart size={16} /> Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
