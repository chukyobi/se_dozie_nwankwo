"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Search, ShoppingCart } from "lucide-react"
import TopBar from "./top-bar"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <TopBar />
      <nav className="sticky top-0 z-50 h-16 bg-white border-b border-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              {/* <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                P
              </div> */}
              <span className="text-2xl font-bold text-gray-900">Dozie Nwankwo</span>
            </div>

            {/* Desktop menu */}
            <div className="hidden lg:flex items-center gap-1">
              <Link href="/" className="px-3 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors">
                Home
              </Link>
              <div className="relative group">
                <button className="px-3 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors flex items-center gap-1">
                  Events
                  <span className="text-xs">▼</span>
                </button>
              </div>
              <div className="relative group">
                <button className="px-3 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors flex items-center gap-1">
                  Donations
                  <span className="text-xs">▼</span>
                </button>
              </div>
              <Link href="/blog" className="px-3 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors">
                Blog
              </Link>
              <Link
                href="/contact"
                className="px-3 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>

            {/* Right side icons and button */}
            {/* <div className="hidden lg:flex items-center gap-4">
             
            </div> */}

            {/* Mobile menu button */}
            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="lg:hidden pb-4 space-y-2 border-t border-gray-200">
              <Link href="/" className="block px-4 py-2 text-gray-700 text-sm font-bold hover:bg-gray-100 rounded">
                Home
              </Link>
              
              <Link href="/events" className="block px-4 py-2 text-gray-700 text-sm font-bold hover:bg-gray-100 rounded">
                Events
              </Link>
             
              <Link href="/blog" className="block px-4 py-2 text-gray-700 text-sm font-bold hover:bg-gray-100 rounded">
                Blog
              </Link>
              <Link href="/contact" className="block px-4 py-2 text-gray-700 text-sm font-bold hover:bg-gray-100 rounded">
                Contact Us
              </Link>
              
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
