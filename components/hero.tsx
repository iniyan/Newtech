import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-4rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <div className="space-y-4">
        <h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Augment Your Digital Ad Operations
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Optimize Performance, and Scale Efficiently with New Tech Digital Marketing. We are the trusted partner for
          ad-tech platforms, media agencies, publishers, and entertainment companies.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
          Our Services
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" size="lg">
          Contact Us
        </Button>
      </div>
    </section>
  )
}

