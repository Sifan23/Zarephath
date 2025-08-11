// components/sections/HeroSection.tsx
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-[#F7FAFC] min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-24 py-20 overflow-hidden"
    >
      {/* Left Text */}
      <div className="w-full lg:w-1/2 z-10">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          Freshly Processed Foods, <br className="hidden lg:block" />
          Delivered with Care.
        </h1>
        <p className="text-gray-700 text-lg lg:text-xl mb-8 max-w-xl">
          At Pauline’s Food Processing, we bring you premium-quality, locally
          sourced products — carefully packaged, NAFDAC & FDA approved, and
          crafted to meet the highest standards.
        </p>
        <Button
          onClick={() => (window.location.href = "#products")}
          className="bg-green-700 hover:bg-green-800 text-white px-9 py-6 rounded-full text-sm font-semibold cursor-pointer"
        >
          Order Now →
        </Button>
      </div>

      {/* Right Image */}
      <div className="relative w-full lg:w-1/2 h-[400px] flex justify-center items-center">
        {/* Background Shape */}
        {/*<div className="absolute bg-green-100 w-[320px] h-[320px] lg:w-[400px] lg:h-[400px] rounded-full z-0" />*/}

        <Image
          src="/assets/banners/hero-section-banner.png"
          alt="hero"
          width={300}
          height={300}
          className="relative z-10 w-[280px] lg:w-[360px] h-auto"
          priority
        />
      </div>
    </section>
  );
}
