import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Megaphone, Heart, BookOpen, Handshake, TrendingUp } from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Community Engagement",
    description: "Direct connection with constituents through town halls, forums, and community events.",
  },
  {
    icon: Megaphone,
    title: "Transparent Communication",
    description: "Regular updates and honest dialogue about our policies and progress on key issues.",
  },
  {
    icon: Heart,
    title: "Social Programs",
    description: "Comprehensive initiatives focused on healthcare, education, and social welfare.",
  },
  {
    icon: BookOpen,
    title: "Education Reform",
    description: "Investing in quality education and skill development for all citizens.",
  },
  {
    icon: Handshake,
    title: "Economic Growth",
    description: "Creating jobs and supporting small businesses for sustainable economic development.",
  },
  {
    icon: TrendingUp,
    title: "Environmental Action",
    description: "Commitment to sustainable practices and climate change mitigation.",
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-semibold text-lg">Our Initiatives</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">What We Stand For</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our comprehensive approach to governance focuses on the issues that matter most to you and your family.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
