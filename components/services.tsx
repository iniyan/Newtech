import { TargetIcon as Bullseye, BarChart, FileSpreadsheet, Zap, CheckCircle } from "lucide-react"

const services = [
  {
    name: "Campaign Trafficking",
    description: "Precise ad placement, scheduling, and execution.",
    icon: Bullseye,
  },
  {
    name: "Creative Auditing",
    description: "Ensuring compliance, quality, and performance of ad creatives.",
    icon: CheckCircle,
  },
  {
    name: "Performance Reporting",
    description: "In-depth analytics and insights for campaign tracking.",
    icon: BarChart,
  },
  {
    name: "Optimization",
    description: "Data-driven strategies to enhance campaign effectiveness.",
    icon: Zap,
  },
  {
    name: "Billing & Invoice Reporting",
    description: "Transparent financial tracking and reconciliations.",
    icon: FileSpreadsheet,
  },
]

export default function Services() {
  return (
    <section id="services" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Our Services</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          We offer a full suite of ad operations solutions to manage, optimize, and scale advertising campaigns across
          leading platforms.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div key={service.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              <service.icon className="h-8 w-8" />
              <h3 className="font-bold">{service.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

