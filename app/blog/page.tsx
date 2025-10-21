import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, User } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Education Reform: Investing in Our Future",
    excerpt:
      "Our comprehensive plan to modernize education and prepare students for tomorrow's challenges. We believe every child deserves access to quality education.",
    date: "October 15, 2024",
    author: "Sarah Johnson",
    category: "Education",
    image: "/education-classroom.jpg",
    slug: "education-reform-investing-future",
  },
  {
    id: 2,
    title: "Economic Growth Through Small Business Support",
    excerpt:
      "How we're creating opportunities for entrepreneurs and supporting local economies. Small businesses are the backbone of our community.",
    date: "October 12, 2024",
    author: "Michael Chen",
    category: "Economy",
    image: "/small-business-support.jpg",
    slug: "economic-growth-small-business",
  },
  {
    id: 3,
    title: "Healthcare Access for All Communities",
    excerpt:
      "Breaking down barriers to quality healthcare and ensuring equitable access nationwide. Healthcare is a right, not a privilege.",
    date: "October 10, 2024",
    author: "Dr. Patricia Lee",
    category: "Healthcare",
    image: "/healthcare-access.jpg",
    slug: "healthcare-access-communities",
  },
  {
    id: 4,
    title: "Environmental Action: Building a Sustainable Future",
    excerpt:
      "Our commitment to environmental protection and climate change mitigation. We must act now to protect our planet for future generations.",
    date: "October 8, 2024",
    author: "Emma Rodriguez",
    category: "Environment",
    image: "/environmental-sustainability.jpg",
    slug: "environmental-action-sustainable-future",
  },
  {
    id: 5,
    title: "Community Safety: A Comprehensive Approach",
    excerpt:
      "Our multi-faceted strategy to improve public safety while building trust between communities and law enforcement.",
    date: "October 5, 2024",
    author: "James Wilson",
    category: "Safety",
    image: "/community-safety.jpg",
    slug: "community-safety-comprehensive",
  },
  {
    id: 6,
    title: "Housing Affordability: Solutions for Everyone",
    excerpt:
      "Addressing the housing crisis with innovative policies that make homeownership and rental housing accessible to all.",
    date: "October 1, 2024",
    author: "David Martinez",
    category: "Housing",
    image: "/affordable-housing.jpg",
    slug: "housing-affordability-solutions",
  },
]

const categories = ["All", "Education", "Economy", "Healthcare", "Environment", "Safety", "Housing"]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <p className="text-primary font-semibold text-lg">Campaign Insights</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">Our Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay informed about our campaign initiatives, policy positions, and community updates.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={
                  category === "All"
                    ? "bg-primary hover:bg-primary-dark text-white"
                    : "border-gray-300 text-gray-900 bg-transparent hover:bg-gray-50"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="border-gray-200 overflow-hidden hover:shadow-lg transition-shadow h-full cursor-pointer">
                  <div className="aspect-video overflow-hidden bg-gray-100">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-primary/10 text-primary border-primary/20">{post.category}</Badge>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                    </div>
                    <CardTitle className="text-gray-900 line-clamp-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-gray-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark">
                        Read <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">Stay Updated</h2>
          <p className="text-xl text-gray-600">
            Subscribe to our newsletter for the latest campaign news and insights.
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
