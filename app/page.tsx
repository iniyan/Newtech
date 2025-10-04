export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#9C27B0] to-[#E91E63] bg-clip-text text-transparent">
              New Tech Digital Marketing
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Coming Soon
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We're working on something exciting. Our new website will be launching soon to help you augment your digital ad operations.
          </p>
        </div>

        {/* Email Notification (Optional) */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 bg-card/50 backdrop-blur-sm border border-border rounded-full px-6 py-3">
            <svg className="w-5 h-5 text-[#9C27B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm text-muted-foreground">Stay tuned for updates</span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-sm text-muted-foreground">
          <p>For inquiries, please contact us</p>
        </div>
      </div>
    </div>
  )
}
