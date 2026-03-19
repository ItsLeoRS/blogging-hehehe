import Link from "next/link"
import { Laptop, Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Laptop className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-semibold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            LaptopHub
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#reviews" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Reviews
          </Link>
          <Link href="#guides" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Guides
          </Link>
          <Link href="#comparisons" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Comparisons
          </Link>
          <Link href="#news" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            News
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
          <Button className="hidden md:flex">Subscribe</Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="#reviews">Reviews</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#guides">Guides</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#comparisons">Comparisons</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#news">News</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
