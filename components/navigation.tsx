"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ArrowRight } from "lucide-react"
import TopBar from "./top-bar" // Assuming this component exists

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  // Navigation Links
  const navLinks = [
    { name: "Home", href: "/" },
    // { name: "Blog", href: "/blog" }, // Commented out based on original
    { name: "Our Work", href: "/#" }, // Added a representative link
    { name: "Contact Us", href: "/contact" },
  ]

  return (
    <>
      <TopBar />
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-xl transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo - Updated to use bold text and secondary theme color */}
            <div className="shrink-0 flex items-center gap-2">
              <span className="text-3xl font-extrabold text-blue-900 tracking-tight">
                <img
              src="/dozlogtransp.png"
            />
              </span>
            </div>

            {/* Desktop menu */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-neutral-900 font-semibold transition-colors duration-200 relative group"
                >
                  {/* Link Text */}
                  {link.name}
                  {/* Underline effect */}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              ))}
            </div>

            {/* Action Button */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/get-involved"
                className=" text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 text-base"
              >
                Get Involved
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <button className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>

          {/* Mobile menu - Expanded, full-width overlay style */}
          {isOpen && (
            <div className="absolute inset-x-0 top-20 bg-white shadow-2xl lg:hidden pb-4 transition-transform duration-300 ease-in-out">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block px-3 py-3 text-gray-800 text-lg font-bold hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)} // Close menu on link click
                  >
                    {link.name}
                  </Link>
                ))}
                
                {/* Mobile Get Involved Button */}
                 <Link
                    href="/get-involved"
                    className="block w-full text-center mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 text-base"
                    onClick={() => setIsOpen(false)}
                >
                    Get Involved
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
