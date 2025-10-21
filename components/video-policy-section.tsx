"use client"

import Image from "next/image"

export default function VideoPolicySection() {
  return (
    <section className="py-0 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left side - Watch Our Video */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center p-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image src="/dozie_grid.jpeg" alt="Background" fill className="object-cover" />
          </div>
          <div className="relative z-10 text-center">
            <h3 className="text-5xl font-bold text-red-500 italic mb-8">Watch Our Video</h3>
            <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg">
              <svg className="w-8 h-8 text-blue-900 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right side - Policy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Top Right - See Our Policy */}
          <div className="bg-red-600 text-white flex flex-col justify-center items-center p-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <Image src="/policy-document.png" alt="Background" fill className="object-cover" />
            </div>
            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold mb-4">See Our Policy</h3>
              <p className="text-sm mb-6 leading-relaxed">
                The generated is therefore always free from repetition, injected humour, or words etc.
              </p>
              <button className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-red-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Top Right Image */}
          <div className="relative h-64 lg:h-auto">
            <Image src="/dozie_grid2.jpeg" alt="Policy" fill className="object-cover" />
          </div>

          {/* Bottom Left Image */}
          <div className="relative h-64 lg:h-auto">
            <Image src="/dozie_grid4.jpeg" alt="Rally" fill className="object-cover" />
          </div>

          {/* Bottom Right - Policy Analysis */}
          <div className="bg-blue-900 text-white flex flex-col justify-center items-center p-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">Policy Analysis</h3>
              <p className="text-sm mb-6 leading-relaxed">
                The generated is therefore always free from repetition, injected humour, or words etc.
              </p>
              <button className="text-white hover:text-red-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
