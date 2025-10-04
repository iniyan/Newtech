import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <h2 className="font-bold">New Tech Digital Marketing</h2>
          <p className="text-sm text-muted-foreground">
            Augmenting your digital ad operations for optimal performance and efficiency.
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#services" className="text-muted-foreground transition-colors hover:text-primary">
                  Ad Operations
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground transition-colors hover:text-primary">
                  Campaign Optimization
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#why-us" className="text-muted-foreground transition-colors hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#who-we-serve" className="text-muted-foreground transition-colors hover:text-primary">
                  Who We Serve
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} New Tech Digital Marketing. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

