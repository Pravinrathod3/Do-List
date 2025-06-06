import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/logo.png';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationLinks = [
    { text: 'About', href: '#about' },
    { text: 'Features', href: '#features' },
    { text: 'Pricing', href: '#pricing' },
    { text: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="size-30" />
          </div>

          {/* Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm text-gray-600 hover:text-gray-900 transition"
              >
                {link.text}
              </a>
            ))}
            <button className="text-sm text-[#FF3E54] border border-[#FF3E54] px-6 py-2 rounded-sm hover:bg-gray-50 transition">
              Login
            </button>
            <button className="text-sm text-white bg-[#FF3E54] px-6 py-2 rounded-sm hover:bg-red-600 transition">
              Sign up
            </button>
          </div>

       
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out absolute top-16 inset-x-0 z-50 bg-white shadow-md ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navigationLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block border-b border-gray-100 pb-2 text-base text-gray-600 hover:text-gray-900 transition"
            >
              {link.text}
            </a>
          ))}

          <div className="pt-4 space-y-3">
            <button className="w-full text-sm text-[#FF3E54] border border-[#FF3E54] px-6 py-2 rounded-sm hover:bg-gray-50 transition">
              Login
            </button>
            <button className="w-full text-sm text-white bg-[#FF3E54] px-6 py-2 rounded-sm hover:bg-red-600 transition">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
