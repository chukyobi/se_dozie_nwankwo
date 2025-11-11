"use client"

import Image from "next/image"

export default function VideoPolicySection() {
  return (
    <section className="py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left side - Watch Our Video */}
        <div className=" flex items-center justify-center p-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-60">
            <Image src="/dozie_grid.jpeg" alt="Background" fill className="object-cover" />
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
              {/* <h3 className="text-3xl font-bold mb-4">See Our Policy</h3>
              <p className="text-sm mb-6 leading-relaxed">
                The generated is therefore always free from repetition, injected humour, or words etc.
              </p> */}
             
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
          <div className="bg-green-600 text-white flex flex-col justify-center items-center p-8">
            <div className="text-center">
              {/* <h3 className="text-3xl text-white font-bold mb-4">Policy Analysis</h3>
              <p className="text-sm mb-6 leading-relaxed">
                The generated is therefore always free from repetition, injected humour, or words etc.
              </p>
               */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
