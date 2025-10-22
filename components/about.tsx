import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Right content - Moved to left for a staggered flow */}
          <div className="space-y-10 lg:order-2">
            <div className="space-y-4">
              <p className="text-red-600 font-extrabold text-xl tracking-wider uppercase">
                A Profile in Service
              </p>
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                Hon. Dozie Ferdinand Nwankwo: Leadership, Vision, and Impact
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
                Hon. Nwankwo is a globally exposed leader and two-term Ranking Member of the House of Representatives, recognized for his **unwavering commitment to social reforms** and **good governance**. His approach combines a successful entrepreneurial background with a humane disposition to politics.
              </p>
            </div>

            {/* Key points updated from biography */}
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

            {/* Button updated to use the red primary color */}
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-bold rounded-full shadow-lg transition-shadow hover:shadow-xl"
            >
              View Full Biography
            </Button>
          </div>
          
          {/* Left image - Now order-1 to place it on the right side of the section on large screens */}
          <div className="relative h-[550px] lg:order-1">
            <img
              src="/section_profile.jpeg"
              alt="Hon. Dozie Ferdinand Nwankwo"
              className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-gray-100"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
