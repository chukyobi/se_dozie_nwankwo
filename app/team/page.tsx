import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Twitter } from "lucide-react"

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Campaign Leader & Candidate",
    bio: "With over 15 years of public service experience, Sarah is committed to transparent governance and community-driven solutions.",
    image: "/professional-woman-headshot.png",
    social: {
      email: "sarah@politicia.com",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Michael Chen",
    role: "Policy Director",
    bio: "Michael brings expertise in economic policy and sustainable development, having worked with leading think tanks.",
    image: "/professional-man-headshot.png",
    social: {
      email: "michael@politicia.com",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Emma Rodriguez",
    role: "Community Outreach Director",
    bio: "Emma has dedicated her career to grassroots organizing and building meaningful connections with communities.",
    image: "/professional-woman-headshot.png",
    social: {
      email: "emma@politicia.com",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "James Wilson",
    role: "Communications Lead",
    bio: "James ensures our message reaches every corner of the district with clarity, authenticity, and impact.",
    image: "/professional-man-headshot.png",
    social: {
      email: "james@politicia.com",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Dr. Patricia Lee",
    role: "Healthcare Policy Advisor",
    bio: "Dr. Lee brings medical expertise and a passion for making healthcare accessible to all citizens.",
    image: "/professional-woman-headshot.png",
    social: {
      email: "patricia@politicia.com",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "David Martinez",
    role: "Economic Development Specialist",
    bio: "David focuses on creating jobs and supporting small businesses for sustainable economic growth.",
    image: "/professional-man-headshot.png",
    social: {
      email: "david@politicia.com",
      linkedin: "#",
      twitter: "#",
    },
  },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <p className="text-primary font-semibold text-lg">Our Leadership</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">Meet Our Team</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals committed to serving our community with integrity and vision.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-primary font-semibold mt-1">{member.role}</p>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">{member.bio}</p>
                  <div className="flex gap-3 pt-4 border-t border-gray-200">
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-gray-400 hover:text-primary transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-primary transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="text-gray-400 hover:text-primary transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">Want to Join Our Team?</h2>
          <p className="text-xl text-gray-600">
            We're always looking for passionate individuals to help us build a better future.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary-dark text-white">
            View Open Positions
          </Button>
        </div>
      </section>
    </main>
  )
}
