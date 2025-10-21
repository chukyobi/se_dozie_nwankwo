import { Card, CardContent } from "@/components/ui/card"

const team = [
  {
    name: "Sarah Johnson",
    role: "Campaign Leader",
    image: "/professional-woman-headshot.png",
  },
  {
    name: "Michael Chen",
    role: "Policy Director",
    image: "/professional-man-headshot.png",
  },
  {
    name: "Emma Rodriguez",
    role: "Community Outreach",
    image: "/professional-woman-headshot.png",
  },
  {
    name: "James Wilson",
    role: "Communications Lead",
    image: "/professional-man-headshot.png",
  },
]

export default function Team() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-semibold text-lg">Our Team</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Meet the Leaders</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dedicated professionals committed to making a real difference in our community.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6 text-center">
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-primary font-semibold mt-1">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
