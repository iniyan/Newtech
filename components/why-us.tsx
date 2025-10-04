import { CheckCircle } from "lucide-react"

const reasons = [
  "Specialized Expertise in Ad Operations",
  "Error-Free Execution & On-Time Delivery",
  "Scalability & Cost Efficiency",
  "Data-Driven Campaign Optimization",
  "Seamless Integration with Your Team",
]

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-muted py-24 md:py-32">
      <div className="container">
        <h2 className="text-center font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl mb-12">
          Why Partner with New Tech Digital Marketing?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ul className="space-y-4">
            {reasons.map((reason, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-primary" />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
          <div>
            <p className="text-lg mb-4">
              Our goal is to help clients streamline their digital media operations so they can focus on business
              growth, strategy, and innovation.
            </p>
            <p className="text-lg">
              We provide the extra bandwidth and domain knowledge to support existing digital ad operations teams,
              allowing our clients to scale confidently without compromising on quality or efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

