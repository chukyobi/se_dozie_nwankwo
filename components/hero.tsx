"use client"

import { useState, useEffect } from "react"
import { Megaphone, Handshake, Zap, Users } from "lucide-react"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [fade, setFade] = useState(true)

  const slides = [
    {
      image: "/hero_dozie1.jpeg",
      title: "Collectively, We Will Move Nigeria Forward!",
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
      title: "Transparency",
      subtitle: "Join the campaign",
      bgColor: "bg-red-600",
    },
    {
      icon: Handshake,
      title: "Partnership",
      subtitle: "Join the campaign",
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
  }, [])

  return (
    <>
      {/* Hero Section with Slider */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Slider background */}
        <div className="absolute inset-0">
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
            style={{
              backgroundImage: `url('${slides[currentSlide].image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* FIX APPLIED: Added !text-white to enforce white color */}
            <h1 className="text-6xl md:text-7xl text-white mb-6 leading-tight tracking-tight">
              {slides[currentSlide].title}
            </h1>

            <div className="w-24 h-1.5 bg-red-600 mb-8" />

            <p className="text-lg text-white mb-10 font-normal leading-relaxed">{slides[currentSlide].subtitle}</p>

            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold text-base transition-colors inline-flex items-center gap-2 mb-12">
              JOIN US TODAY <span>›</span>
            </button>

            <div className="flex gap-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setFade(false)
                    setTimeout(() => {
                      setCurrentSlide(index)
                      setFade(true)
                    }, 500)
                  }}
                  className={`w-12 h-12 rounded-full font-bold text-sm transition-all border-2 ${
                    index === currentSlide
                      ? "bg-red-600 border-red-600 text-white scale-110"
                      : "bg-transparent border-red-600 text-red-600 hover:bg-red-600/20"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACTION CARDS SECTION - MODIFIED */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        {actionCards.map((card, index) => {
          const Icon = card.icon
          return (
            <div
              key={index}
              // Card container now uses flex (row) and min-h-24 (reduced height)
              className={`${card.bgColor} p-8 md:p-10 flex items-center justify-between min-h-24 group cursor-pointer hover:shadow-lg transition-all`}
            >
              {/* Content wrapper for Icon and Text (Left side) */}
              <div className="flex items-center gap-4">
                <Icon className="w-10 h-10 text-white shrink-0" strokeWidth={1.5} />
                <div>
                  {/* Reduced bottom margin to tighten vertical space */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-0 leading-tight">{card.title}</h3>
                  <p className="text-white/90 text-sm md:text-base">{card.subtitle}</p>
                </div>
              </div>
              {/* Chevron (Right side) */}
              {/* <div className="text-white text-3xl font-light group-hover:translate-x-1 transition-transform">›</div> */}
            </div>
          )
        })}
      </section>
    </>
  )
}
