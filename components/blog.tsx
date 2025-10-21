import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

const posts = [
  {
    title: "Education Reform: Investing in Our Future",
    excerpt: "Our comprehensive plan to modernize education and prepare students for tomorrow's challenges.",
    date: "October 15, 2024",
    category: "Education",
  },
  {
    title: "Economic Growth Through Small Business Support",
    excerpt: "How we're creating opportunities for entrepreneurs and supporting local economies.",
    date: "October 12, 2024",
    category: "Economy",
  },
  {
    title: "Healthcare Access for All Communities",
    excerpt: "Breaking down barriers to quality healthcare and ensuring equitable access nationwide.",
    date: "October 10, 2024",
    category: "Healthcare",
  },
]

export default function Blog() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-semibold text-lg">Latest Updates</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Campaign News & Insights</h2>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <CardTitle className="text-gray-900 line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                <CardDescription className="text-gray-600 leading-relaxed">{post.excerpt}</CardDescription>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark">
                    Read <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-gray-300 text-gray-900 bg-transparent">
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
