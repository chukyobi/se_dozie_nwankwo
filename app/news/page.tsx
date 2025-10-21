import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock } from "lucide-react"

const newsItems = [
  {
    id: 1,
    title: "Campaign Rally Draws 5,000 Supporters",
    excerpt: "Record turnout at downtown rally shows strong community support for our vision of change.",
    date: "October 18, 2024",
    time: "2:30 PM",
    location: "Downtown Plaza",
    type: "Event",
    image: "/campaign-rally.jpg",
  },
  {
    id: 2,
    title: "New Policy Platform Released",
    excerpt:
      "Comprehensive 50-page policy document outlines our detailed plans for education, healthcare, and economy.",
    date: "October 16, 2024",
    time: "10:00 AM",
    location: "Campaign Headquarters",
    type: "Announcement",
    image: "/policy-document.jpg",
  },
  {
    id: 3,
    title: "Community Forum: Healthcare Access",
    excerpt: "Join us for an open discussion about healthcare challenges and solutions in our community.",
    date: "October 20, 2024",
    time: "6:00 PM",
    location: "Community Center",
    type: "Event",
    image: "/community-forum.png",
  },
  {
    id: 4,
    title: "Endorsement from Teachers Union",
    excerpt: "Local teachers union endorses our education reform platform and commitment to supporting educators.",
    date: "October 14, 2024",
    time: "1:00 PM",
    location: "Union Hall",
    type: "Endorsement",
    image: "/endorsement.jpg",
  },
  {
    id: 5,
    title: "Small Business Roundtable Discussion",
    excerpt: "Campaign leaders meet with local entrepreneurs to discuss economic growth and job creation.",
    date: "October 12, 2024",
    time: "3:00 PM",
    location: "Business District",
    type: "Event",
    image: "/business-roundtable.jpg",
  },
  {
    id: 6,
    title: "Environmental Initiative Launched",
    excerpt: "New sustainability program aims to reduce carbon emissions and protect our environment.",
    date: "October 10, 2024",
    time: "11:00 AM",
    location: "Green Park",
    type: "Initiative",
    image: "/environmental-initiative.jpg",
  },
]

const newsTypes = ["All", "Event", "Announcement", "Endorsement", "Initiative"]

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <p className="text-primary font-semibold text-lg">Latest Updates</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">Campaign News</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay informed about campaign events, announcements, and community initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Type Filter */}
      <section className="py-12 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {newsTypes.map((type) => (
              <Button
                key={type}
                variant={type === "All" ? "default" : "outline"}
                className={
                  type === "All"
                    ? "bg-primary hover:bg-primary-dark text-white"
                    : "border-gray-300 text-gray-900 bg-transparent hover:bg-gray-50"
                }
              >
                {type}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <Card key={item.id} className="border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-primary/10 text-primary border-primary/20">{item.type}</Badge>
                  </div>
                  <CardTitle className="text-gray-900 line-clamp-2">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 leading-relaxed line-clamp-2">
                    {item.excerpt}
                  </CardDescription>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      {item.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      {item.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      {item.location}
                    </div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary-dark text-white mt-4">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">Never Miss an Update</h2>
          <p className="text-xl text-gray-600">
            Subscribe to our news alerts and be the first to know about campaign events and announcements.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="bg-primary hover:bg-primary-dark text-white">Subscribe</Button>
          </div>
        </div>
      </section>
    </main>
  )
}
