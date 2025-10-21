import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react"
import Link from "next/link"

// Mock blog post data - in a real app, this would come from a database
const blogPosts: Record<
  string,
  {
    title: string
    author: string
    date: string
    category: string
    image: string
    content: string
  }
> = {
  "education-reform-investing-future": {
    title: "Education Reform: Investing in Our Future",
    author: "Sarah Johnson",
    date: "October 15, 2024",
    category: "Education",
    image: "/education-classroom.jpg",
    content: `
      <h2>The Current State of Education</h2>
      <p>Our education system faces unprecedented challenges. Students are struggling with outdated curricula, overcrowded classrooms, and insufficient resources. Teachers are overworked and underpaid. Parents are frustrated with the lack of transparency and accountability.</p>
      
      <h2>Our Vision for Change</h2>
      <p>We believe every child deserves access to quality education that prepares them for success in the 21st century. Our comprehensive education reform plan includes:</p>
      
      <ul>
        <li>Increased funding for schools in underserved communities</li>
        <li>Modern curriculum that emphasizes critical thinking and creativity</li>
        <li>Competitive teacher salaries to attract and retain top talent</li>
        <li>Investment in technology and digital learning resources</li>
        <li>Support for mental health and wellness programs</li>
      </ul>
      
      <h2>Implementation Strategy</h2>
      <p>We will work with educators, parents, and community leaders to implement these reforms thoughtfully and effectively. Our goal is to create an education system that works for every student, regardless of their background or circumstances.</p>
      
      <p>By investing in education today, we're investing in the future of our community. Together, we can build a system that empowers every child to reach their full potential.</p>
    `,
  },
  "economic-growth-small-business": {
    title: "Economic Growth Through Small Business Support",
    author: "Michael Chen",
    date: "October 12, 2024",
    category: "Economy",
    image: "/small-business-support.jpg",
    content: `
      <h2>The Importance of Small Businesses</h2>
      <p>Small businesses are the backbone of our economy. They create jobs, drive innovation, and strengthen our communities. Yet many entrepreneurs struggle with access to capital, regulatory burdens, and limited resources.</p>
      
      <h2>Our Economic Plan</h2>
      <p>We're committed to creating an environment where small businesses can thrive. Our initiatives include:</p>
      
      <ul>
        <li>Low-interest business loans and grants for startups</li>
        <li>Streamlined permitting and regulatory processes</li>
        <li>Tax incentives for small business growth</li>
        <li>Business training and mentorship programs</li>
        <li>Support for minority and women-owned businesses</li>
      </ul>
      
      <h2>Creating Jobs and Opportunity</h2>
      <p>By supporting small businesses, we create good-paying jobs and economic opportunity for all. We believe a strong economy is built from the ground up, with thriving local businesses at its foundation.</p>
    `,
  },
  "healthcare-access-communities": {
    title: "Healthcare Access for All Communities",
    author: "Dr. Patricia Lee",
    date: "October 10, 2024",
    category: "Healthcare",
    image: "/healthcare-access.jpg",
    content: `
      <h2>Healthcare as a Right</h2>
      <p>Healthcare should be accessible and affordable for everyone. Yet many in our community struggle to afford basic medical care. We believe healthcare is a fundamental right, not a luxury.</p>
      
      <h2>Our Healthcare Initiative</h2>
      <p>We're working to expand healthcare access through:</p>
      
      <ul>
        <li>Expansion of community health centers</li>
        <li>Affordable prescription drug programs</li>
        <li>Mental health and addiction services</li>
        <li>Preventive care and wellness programs</li>
        <li>Support for healthcare workers</li>
      </ul>
      
      <h2>Building Healthier Communities</h2>
      <p>When people have access to quality healthcare, entire communities thrive. We're committed to ensuring that zip code and income level don't determine health outcomes.</p>
    `,
  },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    return (
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button className="bg-primary hover:bg-primary-dark text-white">Back to Blog</Button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="w-full h-96 overflow-hidden">
        <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark mb-8">
          <ArrowLeft className="h-5 w-5" />
          Back to Blog
        </Link>

        {/* Header */}
        <div className="mb-8 space-y-4">
          <Badge className="bg-primary/10 text-primary border-primary/20 w-fit">{post.category}</Badge>
          <h1 className="text-5xl font-bold text-gray-900">{post.title}</h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{post.date}</span>
            </div>
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-primary ml-auto">
              <Share2 className="h-5 w-5 mr-2" />
              Share
            </Button>
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Author Bio */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-4">
            <img
              src="/professional-woman-headshot.png"
              alt={post.author}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="font-bold text-gray-900">{post.author}</h3>
              <p className="text-gray-600">Campaign team member and policy expert</p>
            </div>
          </div>
        </div>

        {/* Related Posts CTA */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center space-y-4">
          <h3 className="text-2xl font-bold text-gray-900">More from Our Blog</h3>
          <Link href="/blog">
            <Button className="bg-primary hover:bg-primary-dark text-white">View All Articles</Button>
          </Link>
        </div>
      </article>
    </main>
  )
}
