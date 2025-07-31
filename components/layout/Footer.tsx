'use client';

import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#103E13] text-white py-10 px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Zarephath</h2>
          <p className="text-sm text-gray-300">
            Delivering premium organic products that nourish your body and support a sustainable lifestyle.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="#home" className="hover:text-green-400">Home</a></li>
            <li><a href="#about" className="hover:text-green-400">About</a></li>
            <li><a href="#products" className="hover:text-green-400">Products</a></li>
            <li><a href="#testimonials" className="hover:text-green-400">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-green-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <p className="text-sm text-gray-300">Email: support@zarephath.com</p>
          <p className="text-sm text-gray-300">Phone: +234 800 123 4567</p>

          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-green-400" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-green-400" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-green-400" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-green-400" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-green-700 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Zarephath Nigerian Limited. All rights reserved.
      </div>
    </footer>
  );
}
