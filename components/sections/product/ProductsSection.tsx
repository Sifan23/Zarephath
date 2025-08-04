"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ShoppingCart,
  Star,
  X,
  ChevronLeft,
  ChevronRight,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { allProducts } from "@/data/products";
import { categories } from "@/data/categories";
import ProductCard from "./ProductCard";
import CategoryFilter from "./CategoryFilter";
import ProductModal from "./ProductModal";

export default function ProductSection() {
  const [modalProduct, setModalProduct] = useState<any>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
    slides: { perView: 1, spacing: 12 },
  });

  return (
    <section id="products" className="bg-white py-20 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800">
            Our Featured Products
          </h2>
          <p className="mt-2 text-gray-700 max-w-xl mx-auto text-sm md:text-base">
            From freshly processed staples to well-packaged local produce, we
            make it easy to get high-quality, nutrient-rich food delivered to
            your doorstep.
          </p>
        </div>

        {/* Filter Buttons */}
        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {/* Product Slider */}
        <div ref={sliderRef} className="keen-slider">
          {filteredProducts.map((product) => (
            <div key={product.id} className="keen-slider__slide">
              <ProductCard
                product={product}
                onClick={() => setModalProduct(product)}
              />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {filteredProducts.map((_, i) => (
            <button
              key={i}
              onClick={() => instanceRef.current?.moveToIdx(i)}
              className={`w-3 h-3 rounded-full transition ${
                currentSlide === i
                  ? "bg-green-700 scale-110"
                  : "bg-green-300 hover:bg-green-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Product Modal */}
      {modalProduct && (
        <ProductModal
          modalProduct={modalProduct}
          setModalProduct={setModalProduct}
        />
      )}
    </section>
  );
}
