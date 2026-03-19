import Link from "next/link"
import { Laptop } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Laptop className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                LaptopHub
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Your trusted source for laptop reviews and buying guides since 2020.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Reviews</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Gaming Laptops</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Ultrabooks</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Budget Laptops</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Workstations</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Guides</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Buying Guide</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Laptop Care</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Comparisons</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Best Deals</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LaptopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
