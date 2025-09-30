"use client"

import { Play, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export function FeaturedVideoSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const videos = [
    {
      title: 'Boma Of Africa Sankore Lecture Titled "The World Needs A Dynamic Leader"',
      date: "July 21, 2024",
      thumbnail: "/political-conference-stage-with-blue-and-red-light.jpg",
    },
    {
      title: "Town Hall Meeting: Building A Prosperous Future Together",
      date: "August 15, 2024",
      thumbnail: "/political-town-hall-meeting-with-crowd.jpg",
    },
    {
      title: "Youth Empowerment Summit: Investing In Our Tomorrow",
      date: "September 3, 2024",
      thumbnail: "/youth-empowerment-political-event.jpg",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videos.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length)
  }

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <div className="w-12 md:w-16 h-px bg-muted-foreground/30" />
          <h2 className="text-2xl md:text-3xl font-light text-muted-foreground tracking-wide">Featured Videos</h2>
        </div>

        <div className="relative">
          {/* Video Cards Container */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {videos.map((video, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-[400px_1fr] gap-0 overflow-hidden rounded-lg shadow-2xl mx-2">
                    {/* Left Panel - Video Info */}
                    <div className="bg-black p-6 md:p-8 flex flex-col justify-center">
                      <div className="mb-4">
                        <span className="text-yellow-500 text-sm font-medium tracking-wider">Video</span>
                      </div>
                      <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight mb-6">{video.title}</h3>
                      <p className="text-gray-400 text-sm">{video.date}</p>
                    </div>

                    {/* Right Panel - Video Thumbnail */}
                    <div className="relative aspect-video md:aspect-auto bg-gradient-to-br from-blue-900 via-purple-900 to-red-900">
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />

                      <button
                        className="absolute inset-0 flex items-center justify-center group"
                        aria-label="Play video"
                      >
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-yellow-500 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-yellow-600 shadow-2xl">
                          <Play className="w-10 h-10 md:w-12 md:h-12 text-black fill-black ml-1" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 w-12 h-12 rounded-full bg-black/80 hover:bg-black flex items-center justify-center transition-all duration-300 shadow-xl z-10"
            aria-label="Previous video"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 w-12 h-12 rounded-full bg-black/80 hover:bg-black flex items-center justify-center transition-all duration-300 shadow-xl z-10"
            aria-label="Next video"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "w-8 bg-yellow-500" : "w-2 bg-gray-400"
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
