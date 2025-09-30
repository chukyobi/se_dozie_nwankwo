"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Raila Odinga is a candidate for Chairperson of the African Union Commission",
    subtitle:
      "Champion of Pan-Africanism, dedicated to unity, innovation, and sustainable development across the continent.",
    cta: "Learn More About the Vision",
  },
  {
    id: 2,
    title: "Building a United Africa Through Strong Leadership",
    subtitle:
      "Committed to fostering collaboration, economic growth, and empowering African nations to achieve their full potential.",
    cta: "Explore Our Priorities",
  },
  {
    id: 3,
    title: "A Vision for Sustainable Development and Innovation",
    subtitle:
      "Leading the charge for technological advancement, environmental sustainability, and inclusive prosperity for all Africans.",
    cta: "Discover the Vision",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  // Swipe support
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) goToNext()
    if (touchStart - touchEnd < -75) goToPrevious()
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Layer */}
      {slides.map((_, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-0" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70" />
        </div>
      ))}

      {/* Foreground Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 text-center md:text-left">
          <h1
            key={`title-${currentSlide}`}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-background animate-fade-in-up"
          >
            {slides[currentSlide].title}
          </h1>
          <p
            key={`subtitle-${currentSlide}`}
            className="text-lg sm:text-xl md:text-2xl text-background/80 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            {slides[currentSlide].subtitle}
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button className="bg-background text-primary px-8 py-6 text-lg rounded-full shadow-lg hover:scale-105 transition">
              {slides[currentSlide].cta}
            </Button>
          </div>
        </div>

        {/* Candidate Portrait (always visible, not tied to slides) */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-72 sm:w-96 md:w-[28rem] lg:w-[32rem] animate-fade-in-up drop-shadow-2xl">
            <Image
              src="/images/candidate-portrait.png"
              alt="Candidate Portrait"
              width={600}
              height={800}
              className="object-contain relative z-20"
              priority
            />
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-background/10 hover:bg-background/20 backdrop-blur-sm text-background p-3 rounded-full transition hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-background/10 hover:bg-background/20 backdrop-blur-sm text-background p-3 rounded-full transition hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide ? "w-12 h-3 bg-background" : "w-3 h-3 bg-background/40 hover:bg-background/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
