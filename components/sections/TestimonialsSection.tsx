'use client';

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Grace Kamara",
    location: "Bo, Sierra Leone",
    image: "/assets/testimonials/grace.png", // Placeholder
    rating: 5,
    quote: "Zarephath has transformed how I access natural food products. Their palm oil and garri are the best I’ve ever had!",
  },
  {
    id: 2,
    name: "Emeka Okoro",
    location: "Enugu, Nigeria",
    image: "/assets/testimonials/emeka.png",
    rating: 4,
    quote: "Excellent quality and prompt delivery! I highly recommend Zarephath to anyone who values fresh, local food.",
  },
  {
    id: 3,
    name: "Fatmata Sesay",
    location: "Freetown, Sierra Leone",
    image: "/assets/testimonials/fatmata.png",
    rating: 5,
    quote: "I love the variety and how natural everything is. It’s like buying straight from the village market!",
  },
];

export default function TestimonialSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3 },
      },
    },
    slides: { perView: 1 },
  });

  return (
    <section id="testimonials" className="bg-white py-20 px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#103E13]">Testimonials</h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          From families to food vendors, people across West Africa love our products for their quality, freshness, and trust. Real stories from people who trust and love our products.
        </p>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider mt-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="keen-slider__slide bg-white border border-[#BEE0C2] rounded-xl pt-16 px-6 pb-6 shadow-md relative mx-2"
            >
              {/* Avatar */}
              <div className="absolute -top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md bg-gray-200">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Name & Location */}
              <div className="text-center mt-6">
                <h4 className="text-lg font-semibold text-[#103E13]">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.location}</p>

                {/* Star Rating */}
                <div className="mt-1 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index}>
                      {index < testimonial.rating ? "★" : "☆"}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p className="mt-4 text-gray-700 text-sm italic leading-relaxed">
                “{testimonial.quote}”
              </p>
            </div>
          ))}
        </div>

        {/* Dot Navigation */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                currentSlide === idx
                  ? "bg-green-800 scale-125"
                  : "bg-green-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
