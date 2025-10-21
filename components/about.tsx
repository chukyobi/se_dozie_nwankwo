import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left image */}
          <div className="relative h-96 lg:h-full">
            <img
              src="/section_profile.jpeg"
              alt="Campaign leader addressing supporters"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Right content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-lg">About Our Campaign</p>
              <h2 className="text-4xl font-bold text-gray-900">Leading with Vision and Integrity</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our campaign is built on the foundation of honest leadership, community-driven solutions, and a
                commitment to serving every citizen with dignity and respect.
              </p>
            </div>

            {/* Key points */}
            <div className="space-y-4">
              {[
                "Transparent governance and accountability",
                "Community-focused policy development",
                "Inclusive representation for all voices",
                "Evidence-based decision making",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">{point}</p>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary-dark text-white">
              Read Our Full Platform
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
