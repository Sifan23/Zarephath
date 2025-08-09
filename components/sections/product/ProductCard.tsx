"use client";

import Image from "next/image";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";

export default function ProductCard({
  product,
  onClick,
}: {
  product: Product;
  onClick: () => void;
}) {
  return (
    <div
      className="bg-white border rounded-xl shadow hover:shadow-md transition duration-300 flex flex-col overflow-hidden cursor-pointer h-full"
      onClick={onClick}
    >
      <div className="relative w-full h-60 overflow-hidden group">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="transition-transform duration-500 group-hover:scale-105 object-contain"
        />
        <span className="absolute top-3 left-3 bg-green-700 text-white text-xs px-3 py-1 rounded-full">
          {product.category}
        </span>
      </div>
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-green-900">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mt-1">{product.description}</p>
          {product.size && (
            <p className="flex items-center mt-3 gap-1 text-yellow-500 text-md font-bold">
              Size:{" "}
              {Array.isArray(product.size) ? product.size[0] : product.size}
            </p>
          )}
        </div>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-green-700 font-bold">
            {Array.isArray(product.price) ? product.price[0] : product.price}
          </span>
          <Button className="bg-green-700 hover:bg-green-800 text-white text-sm flex items-center gap-2 cursor-pointer">
            <Eye size={16} /> Show More
          </Button>
        </div>
      </div>
    </div>
  );
}
