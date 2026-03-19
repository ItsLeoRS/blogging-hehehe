"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section className="bg-foreground py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary">
              <Mail className="h-7 w-7 text-primary-foreground" />
            </div>
          </div>
          <h2 
            className="mb-3 text-2xl font-bold tracking-tight text-background md:text-3xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Stay in the loop
          </h2>
          <p className="mb-8 text-muted">
            Get the latest laptop reviews, deals, and tech news delivered to your inbox weekly.
          </p>
          {submitted ? (
            <div className="rounded-lg bg-primary/20 p-4 text-primary-foreground">
              <p className="font-medium">Thanks for subscribing!</p>
              <p className="text-sm opacity-80">{"You'll receive our next newsletter soon."}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 border-muted bg-background/10 text-background placeholder:text-muted focus-visible:ring-primary sm:w-72"
              />
              <Button type="submit" size="lg" className="h-12">
                Subscribe
              </Button>
            </form>
          )}
          <p className="mt-4 text-xs text-muted">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
