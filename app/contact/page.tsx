import { ContactForm } from "@/components/contact-form"
import { ZohoForm } from "@/components/zoho-form"

export default function ContactPage() {
  return (
    <div className="container max-w-4xl py-24 sm:py-32">
      <div className="mb-8 space-y-4">
        <h1 className="text-4xl font-bold"><a href="https://newtechdigitalmarketing.in/contact">Contact Us Now</a></h1>
        <p className="text-muted-foreground">
          Have a question or want to work with us? Fill out the form below and we&apos;ll get back to you as soon as possible.
        </p>
      </div>
      <ZohoForm />
    </div>
  )
}
