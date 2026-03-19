import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { BlogCard } from "@/components/blog-card"
import { Categories } from "@/components/categories"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

const featuredPost = {
  title: "MacBook Pro M4 Review: The Ultimate Creative Powerhouse",
  excerpt: "Apple's latest M4 chip brings unprecedented performance to the MacBook Pro lineup. We tested it extensively for video editing, 3D rendering, and software development.",
  image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80",
  category: "Review",
  date: "Mar 15, 2026",
  readTime: "8 min",
  slug: "macbook-pro-m4-review",
}

const recentPosts = [
  {
    title: "Best Gaming Laptops Under $1500 in 2026",
    excerpt: "Our top picks for gaming laptops that deliver excellent performance without breaking the bank.",
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=600&q=80",
    category: "Guide",
    date: "Mar 12, 2026",
    readTime: "6 min",
    slug: "best-gaming-laptops-2026",
  },
  {
    title: "Dell XPS 15 vs MacBook Pro 15: Which Should You Buy?",
    excerpt: "A comprehensive comparison of two premium laptops for creative professionals.",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&q=80",
    category: "Comparison",
    date: "Mar 10, 2026",
    readTime: "10 min",
    slug: "dell-xps-vs-macbook-pro",
  },
  {
    title: "ThinkPad X1 Carbon Gen 12: Business Excellence",
    excerpt: "Lenovo's flagship business laptop continues to impress with build quality and keyboard.",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&q=80",
    category: "Review",
    date: "Mar 8, 2026",
    readTime: "7 min",
    slug: "thinkpad-x1-carbon-gen12",
  },
  {
    title: "How to Choose the Right Laptop for College",
    excerpt: "Everything students need to know about picking a laptop for their academic journey.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
    category: "Guide",
    date: "Mar 5, 2026",
    readTime: "5 min",
    slug: "laptop-guide-college-students",
  },
  {
    title: "ASUS ROG Zephyrus G16: Portable Gaming Beast",
    excerpt: "A slim gaming laptop that doesn't compromise on performance. Here's our full review.",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&q=80",
    category: "Review",
    date: "Mar 3, 2026",
    readTime: "9 min",
    slug: "asus-rog-zephyrus-g16-review",
  },
  {
    title: "Laptop Battery Care: Tips to Maximize Lifespan",
    excerpt: "Learn how to properly maintain your laptop battery for years of reliable performance.",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
    category: "Tips",
    date: "Mar 1, 2026",
    readTime: "4 min",
    slug: "laptop-battery-care-tips",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        
        <Categories />
        
        {/* Featured Post Section */}
        <section id="reviews" className="bg-muted py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-10">
              <h2 
                className="mb-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Featured Review
              </h2>
              <p className="text-muted-foreground">
                {"Our latest in-depth review you shouldn't miss"}
              </p>
            </div>
            <BlogCard {...featuredPost} featured />
          </div>
        </section>

        {/* Recent Posts Grid */}
        <section id="guides" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <h2 
                  className="mb-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Latest Articles
                </h2>
                <p className="text-muted-foreground">
                  Fresh reviews, guides, and tech insights
                </p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
