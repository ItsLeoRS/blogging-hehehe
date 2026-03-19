import Link from "next/link"
import { Cpu, Monitor, Gamepad2, Briefcase } from "lucide-react"

const categories = [
  {
    name: "Gaming Laptops",
    description: "High-performance machines for gamers",
    icon: Gamepad2,
    href: "#gaming",
    count: 24,
  },
  {
    name: "Ultrabooks",
    description: "Thin, light, and powerful",
    icon: Monitor,
    href: "#ultrabooks",
    count: 18,
  },
  {
    name: "Workstations",
    description: "Professional-grade performance",
    icon: Briefcase,
    href: "#workstations",
    count: 12,
  },
  {
    name: "Budget Picks",
    description: "Best value for money",
    icon: Cpu,
    href: "#budget",
    count: 31,
  },
]

export function Categories() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2 
            className="mb-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Browse by Category
          </h2>
          <p className="text-muted-foreground">
            Find laptops tailored to your specific needs
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-1 font-semibold text-foreground">{category.name}</h3>
              <p className="mb-2 text-sm text-muted-foreground">{category.description}</p>
              <p className="text-xs font-medium text-primary">{category.count} articles</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
