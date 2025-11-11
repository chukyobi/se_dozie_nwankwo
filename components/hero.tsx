"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Megaphone, Handshake, Zap, Users } from "lucide-react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);
  const router = useRouter();

  const slides = [
    {
      image: "/hero_dozie1.jpeg",
      title: "One People, One Voice",
      subtitle: "Get involved in our quest for better representation",
    },
    {
      image: "/hero_dozie11.jpg",
      title: "Building a Better Future for All",
      subtitle: "Join us in creating positive change in our community.",
    },
    {
      image: "/hero_dozie7.jpg",
      title: "Your Voice Matters",
      subtitle: "Together we can make a difference.",
    },
  ];

 const actionCards = [
    {
      icon: Megaphone,
      title: "Manifesto",
      subtitle: "Read Manifesto",
      bgColor: "bg-red-600",
      href: "/manifesto",
    },
    {
      icon: Handshake,
      title: "Contribute",
      subtitle: "Make a Donation",
      bgColor: "bg-green-600",
      href: "/donate",
    },
    {
      icon: Zap,
      title: "Taking action",
      subtitle: "Join the Movement",
      bgColor: "bg-red-600",
      href: "/volunteer",
    },
    {
      icon: Users,
      title: "Leadership",
      subtitle: "About the Visionary Leader",
      bgColor: "bg-green-600",
      href: "/about",
    },
  ];

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 500);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide(index);
      setFade(true);
    }, 500);
  };

  // ✅ Handle button click
  const handleJoinClick = () => {
    router.push("/volunteer");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[65vh] sm:h-screen overflow-hidden">
        {/* Background */}
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
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center sm:items-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-center sm:text-left">
            <h1 className="text-4xl md:text-7xl !text-white font-sans mb-3 leading-tight tracking-tight">
              {slides[currentSlide].title}
            </h1>

            <p className="text-xl sm:text-3xl text-white font-sans mb-8 font-normal leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>

            {/* ✅ Clickable Button */}
            <button
              onClick={handleJoinClick}
              className="bg-red-600 hover:bg-green-600 text-white px-6 py-3 font-bold text-sm transition-colors inline-flex items-center gap-2 rounded-full mb-12"
            >
              JOIN THE MOVEMENT <span className="text-lg">›</span>
            </button>
          </div>
        </div>
      </section>

      {/* Action Cards Section */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-0">
        {actionCards.map((card, index: number) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              role="link" // Add role for accessibility
              tabIndex={0} // Make it focusable
              onClick={() => window.location.href = card.href} // Click handler uses direct navigation
              onKeyDown={(e) => { // Accessibility for keyboard interaction
                if (e.key === 'Enter' || e.key === ' ') {
                  window.location.href = card.href; // Keydown handler uses direct navigation
                }
              }}
              className={`${card.bgColor} p-6 sm:p-8 flex items-center justify-between group cursor-pointer hover:shadow-2xl transition-all`}
            >
              <div className="flex items-center gap-4">
                <Icon
                  className="w-8 h-8 sm:w-10 sm:h-10 text-white shrink-0"
                  strokeWidth={1.5}
                />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-0 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-white/90 text-sm">{card.subtitle}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
