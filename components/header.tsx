"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 md:h-20 items-center gap-30">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-2xl md:text-3xl font-script text-foreground"><span className="text-green-600">Dozie</span><span className="text-yellow-500">Nwankwo</span></div>
            <div className="hidden sm:block h-6 w-px bg-border" />
            <div className="hidden sm:block text-[10px] leading-tight">
              <div className="font-semibold text-primary">POLITICIAN</div>
              <div className="text-muted-foreground">APGA || <span className="text-green-700"> NG </span></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">
              HOME
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              ABOUT
            </a>
            <a href="#vision" className="text-sm font-medium hover:text-primary transition-colors">
              VISION
            </a>
            <a href="#priorities" className="text-sm font-medium hover:text-primary transition-colors">
              PRIORITIES
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              CONTACT
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button size="icon" variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md animate-in slide-in-from-top-2 duration-200">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            <a
              href="#home"
              className="text-sm font-medium py-3 px-4 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm font-medium py-3 px-4 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#vision"
              className="text-sm font-medium py-3 px-4 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Vision
            </a>
            <a
              href="#priorities"
              className="text-sm font-medium py-3 px-4 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Priorities
            </a>
            <a
              href="#contact"
              className="text-sm font-medium py-3 px-4 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
