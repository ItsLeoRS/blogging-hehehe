import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface BlogCardProps {
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  readTime: string
  slug: string
  featured?: boolean
}

export function BlogCard({
  title,
  excerpt,
  image,
  category,
  date,
  readTime,
  slug,
  featured = false,
}: BlogCardProps) {
  if (featured) {
    return (
      <Link href={`/blog/${slug}`} className="group block">
        <Card className="overflow-hidden border-border bg-card transition-all hover:shadow-lg">
          <div className="grid md:grid-cols-2">
            <div className="aspect-[16/10] overflow-hidden md:aspect-auto md:h-full">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <CardContent className="flex flex-col justify-center p-6 md:p-8">
              <div className="mb-3 flex items-center gap-3">
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                  {category}
                </Badge>
                <span className="text-sm text-muted-foreground">{date}</span>
              </div>
              <h3 
                className="mb-3 text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary md:text-2xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {title}
              </h3>
              <p className="mb-4 line-clamp-2 text-muted-foreground">{excerpt}</p>
              <p className="text-sm text-muted-foreground">{readTime} read</p>
            </CardContent>
          </div>
        </Card>
      </Link>
    )
  }

  return (
    <Link href={`/blog/${slug}`} className="group block">
      <Card className="h-full overflow-hidden border-border bg-card transition-all hover:shadow-lg">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-5">
          <div className="mb-3 flex items-center gap-3">
            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
              {category}
            </Badge>
            <span className="text-xs text-muted-foreground">{date}</span>
          </div>
          <h3 
            className="mb-2 line-clamp-2 font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {title}
          </h3>
          <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">{excerpt}</p>
          <p className="text-xs text-muted-foreground">{readTime} read</p>
        </CardContent>
      </Card>
    </Link>
  )
}
