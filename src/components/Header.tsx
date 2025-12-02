"use client";

import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Crisis Hotline Bar */}
      <div className="bg-red-600 text-white py-2 px-4">
        <div className="container mx-auto flex items-center justify-center gap-6 text-sm font-medium">
          <a href="tel:988" className="flex items-center gap-2 hover:underline">
            <Phone className="w-4 h-4" />
            <span>Crisis Line: 988 Press 1</span>
          </a>
          <span className="hidden sm:inline text-white">|</span>
          <a href="sms:838255" className="hidden sm:flex items-center gap-2 hover:underline">
            <span>Text: 838255</span>
          </a>
          <span className="hidden sm:inline text-white">|</span>
          <span className="hidden md:inline text-white">24/7 Support Available</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 via-blue-800 to-green-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">GF</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg text-navy-900 leading-tight">
                Gratitude Farm
              </div>
              <div className="text-xs text-gray-600">Aspen Veterans Project</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/community"
              className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
            >
              Community
            </Link>
            <Link
              href="/programs"
              className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
            >
              Programs
            </Link>
            <a
              href="#get-help"
              className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Get Help Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-blue-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-900 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/community"
                className="text-gray-700 hover:text-blue-900 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Community
              </Link>
              <Link
                href="/programs"
                className="text-gray-700 hover:text-blue-900 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Programs
              </Link>
              <a
                href="#get-help"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Help Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
