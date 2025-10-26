import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Megaphone, Heart, BookOpen, Handshake, TrendingUp, Zap, HardHat } from "lucide-react"

// Rewritten services based on the provided biography
const services = [
  {
    icon: TrendingUp,
    title: "Pioneering Legislative Reform",
    description: "Sponsoring transformative bills for national development, including establishing the Federal College of Agriculture and the Public Service Institute.",
  },
  {
    icon: Heart,
    title: "Health & Humanitarian Outreach",
    description: "Providing free medical care and surgeries to over 4,000 patients, alongside constructing and equipping primary healthcare centers.",
  },
  {
    icon: Handshake,
    title: "Youth & Women Empowerment",
    description: "Empowering 580+ youth and women with vehicles, machines, and cash grants to foster skills acquisition and self-reliance.",
  },
  {
    icon: HardHat,
    title: "Critical Infrastructural Projects",
    description: "Facilitating key community development projects: solar-powered boreholes, street lights, and essential school renovations across 22 communities.",
  },
  {
    icon: BookOpen,
    title: "Educational & Technical Training",
    description: "Dedicated to improving education through legislative action, skill acquisition programs, and continuous educational scholarship support for youth.",
  },
  {
    icon: Zap,
    title: "Environmental & Public Safety",
    description: "Championing motions to tackle devastating gully erosion and enforce stricter safety standards for commercial transport and cooking gas locations.",
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-red-600 font-extrabold text-xl tracking-wider uppercase">Our Pillars</p>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Commitment and Core Initiatives
          </h2>
          {/* Subtle separator using the theme color */}
          <div className="w-16 h-1 bg-green-600 mx-auto rounded-full" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto pt-4">
            Our comprehensive approach to leadership is built upon a foundation of dedicated legislative action and profound humanitarian impact.
          </p>
        </div>

        {/* Services grid - Modern Aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index: number) => {
            const Icon = service.icon
            return (
              <Card 
                key={index} 
                className="bg-white border-none rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group"
              >
                <CardHeader className="p-8 pb-4">
                  {/* Icon Container - Blue with Red accent */}
                  <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:rotate-6">
                    <Icon className="h-8 w-8 text-white" strokeWidth={2} />
                  </div>
                  <CardTitle className="text-2xl font-extrabold text-gray-900 leading-snug">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <CardDescription className="text-gray-700 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
