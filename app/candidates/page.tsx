import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Award, BookOpen } from "lucide-react"

const candidates = [
  {
    name: "Sarah Johnson",
    position: "District Representative",
    district: "District 1",
    image: "/professional-woman-headshot.png",
    bio: "Sarah Johnson is running for District Representative with a vision to strengthen our community through transparent governance and inclusive policies.",
    experience: ["15+ years in public service", "Former City Council Member", "Community organizer and advocate"],
    priorities: ["Education Reform", "Healthcare Access", "Economic Growth"],
  },
  {
    name: "Michael Chen",
    position: "State Senate Candidate",
    district: "State District 5",
    image: "/professional-man-headshot.png",
    bio: "Michael Chen brings economic expertise and a commitment to sustainable development to his campaign for State Senate.",
    experience: ["10+ years in policy development", "Think tank researcher", "Business development consultant"],
    priorities: ["Sustainable Development", "Job Creation", "Infrastructure"],
  },
  {
    name: "Emma Rodriguez",
    position: "City Council Candidate",
    district: "District 3",
    image: "/professional-woman-headshot.png",
    bio: "Emma Rodriguez is dedicated to grassroots organizing and bringing community voices to the forefront of city governance.",
    experience: ["12+ years in community organizing", "Nonprofit director", "Social justice advocate"],
    priorities: ["Community Safety", "Housing Affordability", "Social Services"],
  },
]

export default function CandidatesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <p className="text-primary font-semibold text-lg">Our Candidates</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">Meet Our Candidates</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dedicated leaders running for office to serve our community with integrity and vision.
            </p>
          </div>
        </div>
      </section>

      {/* Candidates Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {candidates.map((candidate, index) => (
              <Card key={index} className="border-gray-200 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                  {/* Image */}
                  <div className="lg:col-span-1">
                    <img
                      src={candidate.image || "/placeholder.svg"}
                      alt={candidate.name}
                      className="w-full h-96 object-cover rounded-lg shadow-lg"
                    />
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h2 className="text-4xl font-bold text-gray-900">{candidate.name}</h2>
                      <p className="text-2xl text-primary font-semibold mt-2">{candidate.position}</p>
                      <div className="flex items-center gap-2 text-gray-600 mt-2">
                        <MapPin className="h-5 w-5" />
                        <span>{candidate.district}</span>
                      </div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed">{candidate.bio}</p>

                    {/* Experience */}
                    <div>
                      <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary" />
                        Experience
                      </h3>
                      <ul className="space-y-2">
                        {candidate.experience.map((exp, i) => (
                          <li key={i} className="text-gray-600 flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{exp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Priorities */}
                    <div>
                      <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-primary" />
                        Key Priorities
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {candidate.priorities.map((priority, i) => (
                          <Badge key={i} className="bg-primary/10 text-primary border-primary/20">
                            {priority}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex gap-4 pt-4">
                      <Button className="bg-primary hover:bg-primary-dark text-white">
                        Support {candidate.name.split(" ")[0]}
                      </Button>
                      <Button variant="outline" className="border-gray-300 text-gray-900 bg-transparent">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Endorsements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">Endorsed By</h2>
            <p className="text-xl text-gray-600">Our candidates are supported by community leaders and organizations</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Community Leaders Alliance",
              "Teachers Union",
              "Small Business Association",
              "Environmental Coalition",
            ].map((org, index) => (
              <Card key={index} className="border-gray-200 text-center p-6">
                <p className="font-semibold text-gray-900">{org}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl font-bold">Help Us Win</h2>
          <p className="text-xl text-white/90">Support our candidates and be part of the movement for change.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Volunteer
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              Donate
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
