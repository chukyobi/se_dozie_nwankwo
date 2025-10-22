"use client"

import { PlayCircle } from "lucide-react"
// Note: Changed file extension to .tsx

export default function QuoteVideoSection() {
    // Placeholder video ID for an example video. Replace with the actual video ID later.
    const youtubeVideoId: string = "dQw4w9WgXcQ"; // Explicitly defined type as string

    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
                {/* Quote Title */}
                {/* Responsive text sizes applied: text-xl (mobile), sm:text-4xl (tablet), md:text-5xl (desktop) */}
                <h2 className="text-xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 relative">
                    {/* Fancy opening quote - size reduced on mobile (text-5xl) */}
                    <span className="text-red-600 text-5xl sm:text-8xl absolute top-[-0.5rem] left-0 sm:left-[-2rem] opacity-20 -z-10 font-serif">“</span>

                    {/* Updated structure to align the quote lines under each other */}
                    <span className="inline-flex flex-col relative z-10 leading-tight">
                        {/* First line: Reduced size on mobile (text-xl) */}
                        <span className="font-serif italic mb-4 font-extrabold text-xl sm:text-4xl">"We are legislators, not public works contractors."</span> 
                        
                        {/* Second line: Reduced size on mobile (text-lg) */}
                        <span className="font-serif text-3xl sm:text-2xl md:text-2xl text-neutral-800">People look up to us to make serious laws that could change the lives of a great number of people, or could change the way society is run or managed</span>
                    </span>

                    {/* Fancy closing quote - size reduced on mobile (text-5xl) */}
                    <span className="text-red-600 text-5xl sm:text-8xl absolute bottom-[-1rem] right-0 sm:right-[-2rem] opacity-20 -z-10 font-serif">”</span>
                </h2>

                {/* Attribution Subtitle: Reduced size (text-base) on mobile */}
                <p className="text-base sm:text-lg text-blue-900 font-semibold mb-12 sm:mb-16 mt-6 sm:mt-10">
                    <span className="text-2xl font-black mr-1 text-red-600">»</span> – Hon. Dozie Ferdinand Nwankwo
                </p>

                {/* Embedded YouTube Video Container */}
                <div className="relative aspect-video w-full rounded-2xl shadow-2xl overflow-hidden group">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                        title="Legislative Vision"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    
                    {/* Optional: Add a subtle overlay for visual effect */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all pointer-events-none"></div>
                </div>

            </div>
        </section>
    )
}
