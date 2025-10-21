import { Shield, Heart, Zap, Users, BookOpen, Globe } from "lucide-react"

const issues = [
  {
    icon: Shield,
    title: "Family Protection",
    description: "We are committed to protecting families and ensuring their safety and well-being.",
  },
  {
    icon: Heart,
    title: "Safe Environment",
    description: "Creating safe communities where everyone can thrive and feel secure.",
  },
  {
    icon: Zap,
    title: "Veterans Benefits",
    description: "Honoring our veterans with the benefits and support they deserve.",
  },
  {
    icon: Users,
    title: "Human Rights",
    description: "Protecting and advancing human rights for all citizens.",
  },
  {
    icon: BookOpen,
    title: "Education",
    description: "Investing in quality education for all children and communities.",
  },
  {
    icon: Globe,
    title: "Environment",
    description: "Protecting our environment for future generations.",
  },
]

export default function Issues() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-4 text-center">What Our Priorities</h1>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        We are offering the following information about us that circular that what we actually believe in and fight for.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {issues.map((issue, index) => {
          const Icon = issue.icon
          return (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <Icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{issue.title}</h3>
              <p className="text-gray-600">{issue.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
