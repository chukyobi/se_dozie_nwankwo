"use client"

import Image from "next/image"

const priorities = [
  {
    title: "Political Speech",
    description: "If you are going to use a passage of you need to be sure there anything hidden in the middle.",
    image: "/political-speech-conference.jpg",
    icon: "🎤",
  },
  {
    title: "Family Protection",
    description: "If you are going to use a passage of you need to be sure there anything hidden in the middle.",
    image: "/family-protection-safety.jpg",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    title: "Safe Environment",
    description: "If you are going to use a passage of you need to be sure there anything hidden in the middle.",
    image: "/safe-environment-community.jpg",
    icon: "🌍",
  },
  {
    title: "Veterans Benefits",
    description: "If you are going to use a passage of you need to be sure there anything hidden in the middle.",
    image: "/veterans-military-benefits.jpg",
    icon: "🎖️",
  },
]

export default function PrioritiesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">What Our Priorities</h2>
          <div className="flex justify-center">
            <div className="w-32 h-1 bg-red-600"></div>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We are offering the following information's about us that circular that what we actually.
          </p>
        </div>

        {/* Priorities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {priorities.map((priority, index) => (
            <div key={index} className="group">
              <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                <Image
                  src={priority.image || "/placeholder.svg"}
                  alt={priority.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Red Icon Badge */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-red-600 rounded flex items-center justify-center text-white text-xl">
                  {priority.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{priority.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{priority.description}</p>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="flex justify-center">
          <button className="px-8 py-3 border-2 border-red-600 text-red-600 font-bold hover:bg-red-600 hover:text-white transition-colors">
            SEE MORE MANIFESTO →
          </button>
        </div>
      </div>
    </section>
  )
}
