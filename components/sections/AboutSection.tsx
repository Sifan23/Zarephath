import Image from "next/image";
import Link from "next/link";
import { MdPlayCircle } from "react-icons/md";

const About = () => {
  return (
    <section id="about" className="bg-white py-20 px-6 md:px-20">
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

        {/* Right Text & Buttons */}
        <div>
          <h3 className="text-sm text-green-800 font-bold md:text-2xl mb-2 uppercase">
            About Us
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Rooted in Tradition, <br className="hidden md:block" />
            Driven by Quality
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            Zarephath Nigerian Limited is a certified food processing company
            dedicated to delivering high-quality organic foods. We work closely
            with local farmers, maintaining high hygiene standards and getting
            NAFDAC approval on all products.
          </p>
          <p className="text-gray-800 mb-8 leading-relaxed">
            Our methods blend tradition with innovation, making sure your food
            is fresh, safe, and full of nutrients.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-4 w-full">
            {/* Learn More Button */}
            <Link
              href="#"
              className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800 transition text-sm w-full sm:w-auto text-center"
            >
              Read More
            </Link>

            {/* Watch Video Link */}
            <Link
              href="/watch"
              className="flex items-center font-bold text-[#05c069] hover:scale-105 transition-transform gap-2 text-sm font-bold"
            >
              <MdPlayCircle className="w-5 h-5" />
              Watch Video
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
