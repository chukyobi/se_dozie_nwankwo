"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

// Updated posts based on the recent news and citation themes
const posts = [
  {
    title: "Focus on Infrastructure: Addressing Gully Erosion Challenges",
    excerpt: "Reviewing the motion on the urgent need to tackle devastating gully erosion in Anaocha/Njikoka/Dunukofia Federal Constituency and the ongoing remediation efforts.",
    date: "August 28, 2024",
    category: "Infrastructure",
    image: "/hero_doz_ict.jpg", // Placeholder image for Infrastructure
  },
  {
    title: "Legislative Impact: Championing the Federal College of Agriculture Bill",
    excerpt: "A deep dive into the Bill for an Act to Establish the Federal College of Agriculture in Enugwu-Ukwu, and its potential to boost local technology and employment.",
    date: "July 19, 2024",
    category: "Education",
    image: "/dozie_hero2.jpg", // Placeholder image for Education
  },
  {
    title: "Humanitarian Outreach: Free Medical Services to Over 4,000",
    excerpt: "Celebrating the success of the Ferdinand Dozie Nwankwo Foundation in providing free medical care, surgeries, and vision support across the Senatorial Zone.",
    date: "June 05, 2024",
    category: "Philanthropy",
    image: "/dozie_grid2.jpeg", // Placeholder image for Philanthropy
  },
]

export default function Blog() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 space-space-y-4">
          <p className="text-red-600 font-extrabold text-xl tracking-wider uppercase">
            News & Updates
          </p>
          <h2 className="text-5xl font-bold text-gray-900 leading-tight">
            Insights on Our Continued Work
          </h2>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {posts.map((post, index) => (
            <Card 
              key={index} 
              className="border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden rounded-xl"
            >
              {/* Image */}
              <div className="h-48 w-full bg-gray-200 overflow-hidden">
                 <img
                    src={post.image}
                    alt={`Image for ${post.title}`}
                    // Fallback to a placeholder if the image path is missing/broken
                    onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/D1D5DB/111827?text=News+Image' }}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
              </div>

              <CardHeader className="p-6 pb-0">
                <div className="flex items-center gap-2 mb-3">
                  {/* Category Chip using Primary Color */}
                  <span className="text-xs font-bold text-red-700 bg-red-100 px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
                <CardTitle className="text-gray-900 text-2xl line-clamp-2 leading-snug hover:text-red-600 transition-colors cursor-pointer">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col justify-between p-6 pt-4 space-y-4">
                <CardDescription className="text-gray-600 leading-relaxed text-base line-clamp-3">
                  {post.excerpt}
                </CardDescription>

                {/* Footer and Read More */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                    <Calendar className="h-4 w-4 text-blue-900" />
                    {post.date}
                  </div>
                  {/* Button uses Secondary Color for emphasis */}
                  <Button variant="ghost" size="sm" className="text-blue-900 font-semibold hover:text-red-600 transition-colors">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View all button - Updated to use primary colors */}
        <div className="text-center">
          <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all">
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
