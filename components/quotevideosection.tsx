"use client";

import { useState } from "react";
import { PlayCircle } from "lucide-react";

export default function QuoteVideoSection() {
    // Define the list of videos. The first video is the initial featured video.
    const videoGallery = [
        {
            id: "TBUP1CmYSvE",
            title: "Legislative Vision: Making Serious Laws",
            description: "Hon. Dozie on the primary role of a legislator.",
        },
        {
            id: "2c-9F-7_s4U", // Placeholder ID 2
            title: "Community Outreach & Development",
            description: "Updates on recent community initiatives.",
        },
        {
            id: "l_QnE30D9h8", // Placeholder ID 3
            title: "The Future of Representation",
            description: "A look at the movement's goals and vision.",
        },
        {
            id: "5s5b0jUe-jI", // Placeholder ID 4
            title: "Ask Me Anything Session",
            description: "Direct answers to common constituent questions.",
        },
    ];

    // State to track which video is currently selected and displayed in the main player
    const [selectedVideoId, setSelectedVideoId] = useState<string>(videoGallery[0].id);

    // Find the currently selected video object
    const selectedVideo = videoGallery.find(v => v.id === selectedVideoId) || videoGallery[0];
    
    // The main quote
    const mainQuote = "We are legislators, not public works contractors.";
    const secondaryQuote = "People look up to us to make serious laws that could change the lives of a great number of people, or could change the way society is run or managed";


    return (
        <section className="py-16 sm:py-24 bg-white font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Quote Title Section */}
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 relative">
                        <span className="text-red-600 text-5xl sm:text-8xl absolute top-[-0.5rem] left-0 sm:left-[-2rem] opacity-20 -z-10 font-serif">“</span>

                        <span className="inline-flex flex-col relative z-10 leading-tight">
                            <span className="font-serif italic mb-4 font-extrabold text-4xl sm:text-4xl">"{mainQuote}"</span>
                            <span className="font-serif text-xl sm:text-xl md:text-xl text-neutral-800">{secondaryQuote}</span>
                        </span>

                        <span className="text-red-600 text-5xl sm:text-8xl absolute bottom-[-1rem] right-0 sm:right-0 opacity-20 -z-10 font-serif">”</span>
                    </h2>

                    <p className="text-base sm:text-lg text-blue-900 font-semibold mt-6">
                        <span className="text-2xl font-black mr-1 text-red-600">»</span> – Hon. Dozie Ferdinand Nwankwo
                    </p>
                </div>

                {/* Video Player and Gallery Grid */}
                {/* The grid layout switches from a single column on mobile to two columns on larger screens */}
                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-6 mt-10">
                    
                    {/* Main Video Player (Takes 2/3 of the space on desktop) */}
                    <div className="lg:col-span-2 relative aspect-video w-full rounded-2xl shadow-2xl overflow-hidden bg-black">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1`}
                            title={selectedVideo.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* Video Gallery Sidebar (Takes 1/3 of the space on desktop) */}
                    <div className="lg:col-span-1 space-y-4">
                        <h3 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-4">Video Gallery</h3>
                        {videoGallery.map((video) => (
                            <div
                                key={video.id}
                                onClick={() => setSelectedVideoId(video.id)}
                                className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-all ${
                                    video.id === selectedVideoId
                                        ? 'bg-red-50 ring-2 ring-red-600 shadow-md'
                                        : 'bg-gray-50 hover:bg-gray-100'
                                }`}
                            >
                                {/* Thumbnail Placeholder */}
                                <div className="relative w-20 h-14 bg-gray-300 rounded overflow-hidden flex-shrink-0">
                                    <img 
                                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
                                        alt={`Thumbnail for ${video.title}`}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            // Fallback for when the YouTube thumbnail image fails to load
                                            e.currentTarget.onerror = null; 
                                            e.currentTarget.src = "https://placehold.co/80x56/cccccc/000000?text=Video";
                                        }}
                                    />
                                    {video.id === selectedVideoId ? (
                                        <PlayCircle className="absolute inset-0 m-auto text-white w-6 h-6 fill-red-600 drop-shadow-lg" />
                                    ) : (
                                        <PlayCircle className="absolute inset-0 m-auto text-white w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity" fill="currentColor" />
                                    )}
                                </div>
                                
                                {/* Video Details */}
                                <div>
                                    <p className="text-sm font-semibold leading-snug text-gray-900">
                                        {video.title}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        {video.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
