"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react"; // or use Heroicons/FontAwesome

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo with text */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Zarephath Logo" width={40} height={40} />
          <span className="text-2xl font-bold text-[#05c069]">Zarephath</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#products">Products</Link>
          </li>
          <li>
            <Link href="#testimonials">Testimonials</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>

        {/* Get Started Button with Icon */}
        <div className="hidden md:flex items-center space-x-2">
          <Link href="#contact">
            <button className="bg-[#05c069] text-white px-5 py-2 rounded-full hover:bg-green-700 transition flex items-center space-x-2">
              <ShoppingBag size={20} />
              <span>Order Now</span>
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none text-gray-700"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-gray-700 font-semibold">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li>
              <Link href="#products" onClick={() => setIsOpen(false)}>Products</Link>
            </li>
            <li>
              <Link href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</Link>
            </li>
            <li>
              <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
            <li>
              <Link href="#contact" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-[#0466c8] text-white py-2 rounded-full mt-2 flex items-center justify-center space-x-2">
                  <ShoppingBag size={20} />
                  <span>Order Now</span>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
