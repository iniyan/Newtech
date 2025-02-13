import { Users, Server, Newspaper } from "lucide-react"

const clients = [
  {
    type: "Agencies & Advertisers",
    description: "Helping businesses enhance advertising efficiency, streamline operations, and maximize ROI.",
    icon: Users,
  },
  {
    type: "Ad-Tech Platforms",
    description: "Supporting end-to-end campaign management, compliance, and performance tracking.",
    icon: Server,
  },
  {
    type: "Publishers & Media Networks",
    description: "Ensuring optimal ad delivery, brand safety compliance, and inventory monetization.",
    icon: Newspaper,
  },
]

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="container space-y-16 py-24 md:py-32">
      <h2 className="text-center font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl mb-12">Who We Serve</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {clients.map((client) => (
          <div key={client.type} className="flex flex-col items-center text-center">
            <client.icon className="h-16 w-16 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">{client.type}</h3>
            <p className="text-muted-foreground">{client.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

