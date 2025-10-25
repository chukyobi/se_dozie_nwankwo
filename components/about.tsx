"use client";

// Simple inline Button definition to maintain file integrity without external dependencies
const Button = ({ children, className, ...props }: { children: React.ReactNode, className?: string, [key: string]: any }) => (
    <button 
        className={`bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-base font-bold rounded-full shadow-lg transition-shadow hover:shadow-xl ${className}`}
        {...props}
    >
        {children}
    </button>
);

import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid is used to manage ordering on mobile and create the two columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* BLOCK 1: Title and Intro Text (Mobile Order: 1) */}
          {/* Centered on mobile (text-center) and placed first (order-1) */}
          <div className="space-y-4 text-center lg:text-left order-1 lg:order-2 lg:col-span-1">
            <p className="text-red-600 font-extrabold text-xl tracking-wider uppercase">
              A Profile in Service
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Hon. Dozie Ferdinand Nwankwo: Leadership, Vision, and Impact
            </h2>
          </div>

          {/* BLOCK 2: Image (Mobile Order: 2) */}
          {/* Placed second on mobile (order-2) and shifted to the left column on desktop (lg:order-1) */}
          <div className="relative h-[450px] sm:h-[550px] order-2 lg:order-1 lg:row-span-2">
            <img
              src="/hero_dozie_flag.jpg"
              alt="Hon. Dozie Ferdinand Nwankwo"
              className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-gray-100"
            />
          </div>

          {/* BLOCK 3: Remaining Content (Paragraph, Key Points, Button) (Mobile Order: 3) */}
          {/* Placed third on mobile (order-3) and aligns with the title on the right on desktop (lg:order-2) */}
          <div className="space-y-10 order-3 lg:order-2 lg:col-span-1 pt-8 lg:pt-0">
            
            {/* Main Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed">
                Hon. Nwankwo is a globally exposed leader and two-term Ranking Member of the House of Representatives, recognized for his **unwavering commitment to social reforms** and **good governance**. His approach combines a successful entrepreneurial background with a humane disposition to politics.
            </p>

            {/* Key points updated from biography */}
            {/* Centered the list items' text on mobile */}
            <div className="space-y-5">
              {[
                "Legislative contributions focused on education, public safety, and national economic development.",
                "President and Founder of the FDNF, impacting over 44,000 lives across 22 communities since 2007.",
                "Dedicated to influencing public policy, promoting accountability, and delivering equal opportunity for all.",
                "Globally recognized academic background from institutions including the London School of Economics and the University of Liverpool.",
              ].map((point, index: number) => (
                <div key={index} className="flex items-start gap-4">
                  {/* Icon updated to use blue theme color */}
                  <CheckCircle className="h-6 w-6 text-blue-900 flex-shrink-0 mt-1" strokeWidth={2.5} />
                  <p className="text-gray-800 text-lg font-medium">{point}</p>
                </div>
              ))}
            </div>

            {/* Button: Centered on mobile, left-aligned on desktop */}
            <div className="flex justify-center lg:justify-start">
                <Button>
                  View Full Biography
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
