import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "David Martinez",
    role: "Small Business Owner",
    content:
      "This campaign truly listens to the concerns of small business owners. Their economic policies are practical and achievable.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Teacher",
    content:
      "As an educator, I'm impressed by their commitment to education reform. They understand the real challenges we face in schools.",
    rating: 5,
  },
  {
    name: "Robert Kim",
    role: "Healthcare Worker",
    content:
      "Their healthcare initiatives show they care about accessibility and affordability. Finally, someone who gets it.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-semibold text-lg">What People Say</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Voices of Support</h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-gray-200">
              <CardContent className="pt-6 space-y-4">
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>

                {/* Author */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
