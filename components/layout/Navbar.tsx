"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button"; // ShadCN button

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Brand Name */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Zarephath Logo" width={40} height={40} />
          <span className="text-xl md:text-2xl font-bold text-[#05c069] tracking-wide">
            Zarephath
          </span>
        </Link>

               {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-medium text-gray-800">
          <ul className="flex items-center space-x-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#products">Products</Link></li>
            <li><Link href="#testimonials">Testimonials</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>

          {/* Shopping Cart Icon */}
          <Link href="/cart" className="text-[#05c069] hover:scale-110 transition-transform">
            <ShoppingCart className="w-5 h-5" />
          </Link>

          {/* Order Now Button */}
          <Button asChild className="bg-[#05c069] hover:bg-[#049a50] text-white rounded-full px-5 py-2 text-sm">
            <Link href="#contact" className="flex items-center gap-2">
              <span>Order Now</span>
            </Link>
          </Button>
        </div>


        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-6">
          <ul className="flex flex-col space-y-5 text-gray-800 font-medium">
            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="#about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="#products" onClick={() => setIsOpen(false)}>Products</Link></li>
            <li><Link href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</Link></li>
            <li><Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            <li>
              <Button
                asChild
                className="w-full bg-[#05c069] hover:bg-[#049a50] text-white rounded-full py-2 text-sm mt-2"
              >
                <Link href="#contact" className="flex items-center justify-center gap-2">
                  <ShoppingCart size={18} />
                  <span>Order Now</span>
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
