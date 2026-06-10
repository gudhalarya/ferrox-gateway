import logo from "@/assets/logo.png";

const footerLinks = [
  {
    title: "Platform",
    links: [
      { label: "Gateway", href: "#" },
      { label: "Edge Cache", href: "#" },
      { label: "AuthZ", href: "#" },
      { label: "Shield", href: "#" },
      { label: "Functions", href: "#" },
      { label: "Observability", href: "#" },
    ]
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Guides", href: "#" },
      { label: "CLI", href: "#" },
      { label: "Status", href: "#" },
      { label: "Changelog", href: "#" },
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Customers", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Partners", href: "#" },
    ]
  },
];

export function Footer() {
  return (
    <footer className="relative bg-ink text-background pt-32 pb-12 px-6 lg:px-10 overflow-hidden border-t border-background/5">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: "radial-gradient(var(--primary) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-8 pb-24">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 font-display font-bold text-3xl tracking-tighter">
              <img src={logo} alt="Ferrox" className="w-10 h-10 rounded-lg object-cover" />
              Ferrox
            </div>
            <p className="mt-8 text-base text-background/50 max-w-sm leading-relaxed font-medium">
              The high-performance edge layer for modern APIs. Build faster, ship safer, and scale globally without the complexity.
            </p>
            <div className="mt-10 flex gap-5">
              {/* Social icons placeholders */}
              {["𝕏", "Gh", "Ln", "Yt"].map(label => (
                <div key={label} className="w-11 h-11 rounded-full border border-background/10 flex items-center justify-center hover:bg-background/5 hover:border-primary/40 transition-all cursor-pointer text-xs font-bold text-background/40 hover:text-primary">
                  {label}
                </div>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-8">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm font-medium text-background/30 hover:text-background transition-all hover:translate-x-1 inline-block">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Brand Wordmark */}
        <div className="pt-24 border-t border-background/5">
          <div
            className="footer-display select-none tracking-[-0.02em] text-center w-full block transition-all"
            style={{
              color: "var(--primary)",
              opacity: 0.08, // Even more subtle
              fontSize: "clamp(3rem, 12vw, 10rem)",
              lineHeight: 1,
              fontWeight: 900,
              letterSpacing: "-0.05em"
            }}
          >
            FERROX
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 text-xs font-bold uppercase tracking-[0.25em] text-background/15">
          <div className="flex gap-12">
            <span>© 2026 Ferrox, Inc.</span>
            <span className="hidden md:inline">Built in SF 🌁</span>
          </div>
          <div className="flex gap-12">
            <a href="#" className="hover:text-background transition-colors">System Status</a>
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
