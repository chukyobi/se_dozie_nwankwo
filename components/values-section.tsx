"use client";

import Image from "next/image";

export default function PhilanthropySection() {
  return (
    // Updated background color for a cleaner separation
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left side - Image (Now styled to be B&W/Grayscale) */}
          <div className="flex justify-center lg:order-1 order-2">
            <div className="relative w-full max-w-lg h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg shadow-2xl overflow-hidden">
              {/* Apply grayscale filter via Tailwind to mimic the reference image aesthetic */}
              <Image
                src="/dozie_section.jpeg"
                alt="Hon. Ferdinand Dozie Nwankwo leading a community initiative"
                fill
                priority
                className="object-cover filter grayscale hover:grayscale-0 transition duration-500"
              />

              {/* Stats Bar Redesign: Dark Blue background, Red highlights, White text 
                  MOVED HERE: Added absolute positioning to overlap the image */}
              <div className="absolute bottom-0 left-0 right-0 bg-blue-900 text-white p-6 sm:p-8 shadow-2xl grid grid-cols-3 divide-x divide-gray-700">
                
                {/* Stat 1 */}
                <div className="text-center px-1 sm:px-2">
                  <div className="text-3xl sm:text-4xl font-extrabold text-red-600 mb-1">
                    44,000+
                  </div>
                  <p className="text-xs sm:text-sm font-medium uppercase tracking-wider opacity-90">
                    Lives Impacted
                  </p>
                </div>

                {/* Stat 2 */}
                <div className="text-center px-1 sm:px-2">
                  <div className="text-3xl sm:text-4xl font-extrabold text-red-600 mb-1">
                    5,000+
                  </div>
                  <p className="text-xs sm:text-sm font-medium uppercase tracking-wider opacity-90">
                    Widows & Youth Empowered
                  </p>
                </div>

                {/* Stat 3 */}
                <div className="text-center px-1 sm:px-2">
                  <div className="text-3xl sm:text-4xl font-extrabold text-red-600 mb-1">
                    580+
                  </div>
                  <p className="text-xs sm:text-sm font-medium uppercase tracking-wider opacity-90">
                    Empowerment Beneficiaries
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8 lg:order-2 order-1">
            <div>
             {/* Headline Redesign: Large, bold text with custom red underline */}
             <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Philanthropy and Humanitarian 
                <span className="relative inline-block">
                  <span className="relative z-10">Impact</span>
                  {/* Custom underline now uses rounded-full and a slight rotation for a curve effect */}
                  <span className="absolute left-0 bottom-0 h-2 w-full bg-red-600 rounded-full transform translate-y-2 rotate-1"></span>
                </span>
              </h2>
              
              <p className="text-gray-600 text-lg mt-8 leading-relaxed">
                Hon. Ferdinand Dozie Nwankwo is a passionate philanthropist and
                the President and Founder of the{" "}
                <span className="font-semibold text-gray-800">
                  Ferdinand Dozie Nwankwo Foundation (FDNF)
                </span>
                , established in 2007 to improve the lives of the less
                privileged. Through his foundation, he has directly impacted
                over <span className="font-semibold text-gray-800">44,000 people</span> across
                <span className="font-semibold text-gray-800"> 22 communities</span> in
                Anambra Central Senatorial Zone.
              </p>
            </div>

            {/* Impact Highlights - Red Checkmarks and Two-Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 pt-4">
              {[
                "Providing free medical care, including surgeries, dental treatments, and provision of spectacles to over 4,000 patients.",
                "Supporting over 5,000 widows and empowering 580 youth and women with vehicles, sewing machines, and grinding machines.",
                "Facilitating educational scholarships and skill acquisition training for young people.",
                "Empowerment and support programs with cars, tricycles, motorcycles, sewing machines, hair dryers, and wheelchairs distributed to over 580 beneficiaries.",
              
             
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  {/* Red Checkmark Icon matching the image */}
                  <svg
                    className="w-5 h-5 text-red-600 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            {/* Note: The old stats bar section has been removed from here. */}
            
          </div>
        </div>
      </div>
    </section>
  );
}
