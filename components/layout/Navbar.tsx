"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);

  // Track which section is in view
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActiveSection(id);
          }
        });
      },
      { threshold: 0.5 } // 50% in view
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const linkClass = (id: string) =>
    `transition-colors ${
      activeSection === id
        ? "text-green-700 font-semibold"
        : "text-gray-800 hover:text-green-600"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Brand Name */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Zarephath Logo" width={40} height={40} />
          <span className="text-xl md:text-2xl font-bold text-green-800 tracking-wide">
            Zarephath
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-medium">
          <ul className="flex items-center space-x-6">
            <li>
              <a href="#home" className={linkClass("home")}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className={linkClass("about")}>
                About
              </a>
            </li>
            <li>
              <a href="#products" className={linkClass("products")}>
                Products
              </a>
            </li>
            <li>
              <a href="#testimonials" className={linkClass("testimonials")}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className={linkClass("contact")}>
                Contact
              </a>
            </li>
          </ul>

          {/* Cart Icon */}
          {/* <Link href="/cart" className="text-[#05c069] hover:scale-110 transition-transform">
            <ShoppingCart className="w-5 h-5" />
          </Link> */}

          {/* Order Now */}
          <Button
            asChild
            className="bg-green-700 hover:bg-green-800 text-white rounded-full px-5 py-2 text-sm"
          >
            <Link href="#products">Order Now</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg
              className="w-7 h-7"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-7 h-7"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-6">
          <ul className="flex flex-col space-y-5 text-gray-800 font-medium">
            <li>
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className={linkClass("home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className={linkClass("about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#products"
                onClick={() => setIsOpen(false)}
                className={linkClass("products")}
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                onClick={() => setIsOpen(false)}
                className={linkClass("testimonials")}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className={linkClass("contact")}
              >
                Contact
              </a>
            </li>
            <li>
              <Button
                asChild
                className="w-full bg-[#05c069] hover:bg-[#049a50] text-white rounded-full py-2 text-sm mt-2"
              >
                <Link
                  href="#products"
                  onClick={() => setIsOpen(false)}
                  className="flex justify-center items-center gap-2"
                >
                  <ShoppingCart size={18} />
                  Order Now
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
