"use client";

import { useState, useEffect } from "react"
import { Megaphone, Handshake, Zap, Users } from "lucide-react"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [fade, setFade] = useState(true)

  const slides = [
    {
      image: "/hero_dozie1.jpeg",
      title: "Together, We Will Move Country Forward!",
      subtitle: "Risus Commodo Viverra Maecenas Lacus Vel Facilisis.",
    },
    {
      image: "/hero_dozie6.jpg",
      title: "Building a Better Future for All",
      subtitle: "Join us in creating positive change in our community.",
    },
    {
      image: "/hero_dozie7.jpg",
      title: "Your Voice Matters",
      subtitle: "Together we can make a difference in our nation.",
    },
  ]

  const actionCards = [
    {
      icon: Megaphone,
      title: "Manifesto",
      subtitle: "Join the campaign",
      bgColor: "bg-red-600",
    },
    {
      icon: Handshake,
      title: "Contribute",
      subtitle: "Become a volunteer",
      bgColor: "bg-blue-900",
    },
    {
      icon: Zap,
      title: "Taking action",
      subtitle: "Join the campaign",
      bgColor: "bg-red-600",
    },
    {
      icon: Users,
      title: "Leadership",
      subtitle: "Become a volunteer",
      bgColor: "bg-blue-900",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setFade(true)
      }, 500)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  // Function to handle slide navigation
  const goToSlide = (index: number) => { // Type fixed here
    setFade(false)
    setTimeout(() => {
      setCurrentSlide(index)
      setFade(true)
    }, 500)
  }

  return (
    <>
      {/* Hero Section with Slider */}
      <section className="relative w-full h-[80vh] sm:h-screen overflow-hidden">
        {/* Slider background */}
        <div className="absolute inset-0">
          <div
            className={`absolute inset-0 transition-opacity duration-500`}
            style={{
              backgroundImage: `url('${slides[currentSlide].image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: fade ? 1 : 0,
            }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Headline using the Great Vibes script font, enforced white color */}
            <h1 className="text-6xl md:text-8xl text-white font-script mb-4 leading-none tracking-tight">
              {slides[currentSlide].title}
            </h1>
            
            {/* Subtitle using the Great Vibes script font */}
            <p className="text-2xl sm:text-3xl text-white font-script mb-12 font-normal leading-relaxed italic">
              {slides[currentSlide].subtitle}
            </p>

            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold text-base transition-colors inline-flex items-center gap-2 rounded-full mb-12">
              JOIN US TODAY <span className="text-xl">›</span>
            </button>

            {/* Slide Indicators: Positioned below content, as seen in the video */}
            <div className="flex gap-4 items-center">
              {slides.map((_, index: number) => ( // Type fixed here
                <div
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-6 h-6 rounded-full font-bold text-xs transition-all border-2 flex items-center justify-center cursor-pointer ${
                    index === currentSlide
                      ? "bg-red-600 border-red-600 text-white scale-105 shadow-md"
                      : "bg-transparent border-white text-white hover:bg-white/20"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACTION CARDS SECTION - MODIFIED */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-0">
        {actionCards.map((card, index: number) => { // Type fixed here
          const Icon = card.icon
          return (
            <div
              key={index}
              className={`${card.bgColor} p-6 sm:p-8 flex items-center justify-between group cursor-pointer hover:shadow-2xl transition-all`}
            >
              {/* Content wrapper for Icon and Text (Left side) */}
              <div className="flex items-center gap-4">
                <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-0 leading-tight">{card.title}</h3>
                  <p className="text-white/90 text-sm">{card.subtitle}</p>
                </div>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}
