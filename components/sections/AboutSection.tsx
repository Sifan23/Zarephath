"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { MdPlayCircle, MdClose } from "react-icons/md";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  // Disable scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <section id="about" className="bg-white py-5 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <Image
            src="/assets/aboutus-section-img.png"
            alt="About Zarephath"
            width={420}
            height={300}
            className="rounded-lg shadow-lg object-contain"
          />
        </div>

        {/* Right Text */}
        <div>
          <h3 className="text-sm text-green-800 font-bold md:text-4xl mb-6 ">
            About Us
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Rooted in Tradition, Driven by Quality
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Pauline Keguna Okorie is the founder of Zarephath Nigeria Limited,
            established on October 20, 2020 and registered with the Corporate
            Affairs Commission of Nigeria. Zarephath operates in the
            agricultural value chain by off-taking agricultural products from
            smallholder farmers. These products are processed with modern
            technology, preserved, packaged, and distributed to both B2B
            customers and direct consumers.
          </p>
          <p className="text-gray-800 mb-8 leading-relaxed">
            Mr. Akinlembo Agbetoyin joined the company as a partner in 2023. The
            major products of the company are unripe plantain flour, Delta
            yellow garri, and red palm oil. These products are sourced from its
            own farm and from other farmers in the South-South region of
            Nigeria. Our products are of premium quality and grown naturally by
            trusted farmers.
            {showMore && (
              <>
                <br />
                With a focus on sustainability, innovation, and quality,
                Zarephath continues to build strong relationships with
                smallholder farmers and deliver safe, nutritious, and natural
                food products to households and businesses both locally and
                globally.
              </>
            )}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-2 w-full">
            <button
              onClick={() => setShowMore(!showMore)}
              className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800 transition text-sm w-full sm:w-auto text-center"
            >
              {showMore ? "Read Less" : "Read More"}
            </button>

            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center font-bold text-[#05c069] hover:scale-105 transition-transform gap-2 text-sm"
            >
              <MdPlayCircle className="w-5 h-5" />
              Watch Video
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 transition-opacity duration-300 p-4">
          <div className="relative w-full max-w-3xl max-h-[80vh] flex justify-center items-center">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-10 right-0 text-white text-3xl hover:text-red-300"
            >
              <MdClose />
            </button>

            {/* Video */}
            <video
              controls
              autoPlay
              className="w-full h-auto max-w-[800px] max-h-[80vh] rounded-lg shadow-lg object-contain"
            >
              <source src="/videos/about-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
