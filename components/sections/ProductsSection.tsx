"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, Star, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const allProducts = [
  {
    id: 1,
    name: "Delta Garri",
    category: "Grains",
    description: "High-quality Garri, processed and packaged for freshness.",
    price: "Le 50",
    rating: 4.5,
    images: [
      "/assets/products/product-delta-garri.png",
      "/assets/products/garri2.svg",
    ],
  },
  {
    id: 2,
    name: "Plantain Flour",
    category: "Flours",
    description: "Nutritious plantain flour, gluten-free and rich in fiber.",
    price: "Le 35",
    rating: 4,
    images: ["/assets/products/product-plantain-flour.png"],
  },
  {
    id: 3,
    name: "Zarephath Palm Oil",
    category: "Oils",
    description: "Pure red palm oil with no additives, rich in vitamins.",
    price: "Le 25",
    rating: 5,
    images: ["/assets/products/product-palm-oil.png"],
  },
  {
    id: 4,
    name: "Cassava Flour",
    category: "Flours",
    description: "Smooth cassava flour, ideal for baking and cooking.",
    price: "Le 40",
    rating: 4,
    images: ["/assets/products/cassava-flour.svg"],
  },
  {
    id: 5,
    name: "Red Beans",
    category: "Grains",
    description: "Premium local red beans, rich in protein.",
    price: "Le 45",
    rating: 4.2,
    images: ["/assets/products/red-beans.svg"],
  },
];

const categories = ["All", "Grains", "Flours", "Oils"];

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
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border ${
                selectedCategory === cat
                  ? "bg-green-700 text-white border-green-700"
                  : "text-green-700 border-green-300 hover:border-green-500"
              } text-sm font-medium transition`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Slider */}
        <div ref={sliderRef} className="keen-slider">
          {filteredProducts.map((product) => (
            <div key={product.id} className="keen-slider__slide">
              <div
                className="bg-white border rounded-xl shadow hover:shadow-md transition duration-300 flex flex-col overflow-hidden cursor-pointer h-full"
                onClick={() => {
                  setModalProduct(product);
                  setImageIndex(0);
                }}
              >
                <div className="relative w-full h-60 overflow-hidden group">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="transition-transform duration-500 group-hover:scale-105 object-contain"
                    priority={product.id === 1}
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
                    <p className="text-sm text-gray-600 mt-1">
                      {product.description}
                    </p>
                    <div className="flex items-center mt-2 gap-1 text-yellow-500 text-sm">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill={
                            i < Math.floor(product.rating)
                              ? "currentColor"
                              : "none"
                          }
                          strokeWidth={1}
                        />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">
                        {product.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>
                  <div className="mt-5 flex justify-between items-center">
                    <span className="text-green-700 font-bold">
                      {product.price}
                    </span>
                    <Button className="bg-green-700 hover:bg-green-800 text-white text-sm flex items-center gap-2">
                      <ShoppingCart size={16} /> Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
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
            <p className="text-sm text-gray-600 my-2">
              {modalProduct.description}
            </p>
            <div className="flex items-center gap-2 mb-3 text-yellow-500 text-sm">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill={
                    i < Math.floor(modalProduct.rating)
                      ? "currentColor"
                      : "none"
                  }
                  strokeWidth={1}
                />
              ))}
              <span className="text-xs text-gray-500 ml-1">
                {modalProduct.rating.toFixed(1)}
              </span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-green-700 font-bold">
                {modalProduct.price}
              </span>
              <Link
                href={`/order?product=${encodeURIComponent(modalProduct.name)}`}
                className="bg-green-700 hover:bg-green-800 text-white text-sm flex items-center gap-2 px-4 py-2 rounded"
              >
                <ShoppingCart size={16} /> Buy Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
