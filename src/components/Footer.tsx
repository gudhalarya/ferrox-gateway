const cols = [
  { title: "Platform", items: ["Gateway", "Edge Cache", "Functions", "Shield", "Observability"] },
  { title: "Developers", items: ["Docs", "API Reference", "CLI", "Status", "Changelog"] },
  { title: "Company", items: ["About", "Careers", "Customers", "Blog", "Contact"] },
];

export function Footer() {
  return (
    <footer className="bg-ink text-background pt-24 pb-10 px-6 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 pb-20">
          <div>
            <div className="flex items-center gap-2 font-display font-bold text-xl">
              <span className="w-7 h-7 rounded-md" style={{ background: "var(--gradient-green)" }} />
              Ferrox
            </div>
            <p className="mt-4 text-sm text-background/60 max-w-xs">
              The edge layer for modern APIs. Built in San Francisco, deployed everywhere.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-xs uppercase tracking-[0.2em] text-background/40 mb-5">{c.title}</div>
              <ul className="space-y-3">
                {c.items.map((i) => (
                  <li key={i}>
                    <a href="#" className="text-background/80 hover:text-primary transition-colors">{i}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Giant brand wordmark */}
        <div className="relative">
          <div
            className="footer-display select-none"
            style={{
              background: "linear-gradient(180deg, oklch(0.85 0.22 152), oklch(0.55 0.18 152 / 0.2))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            FERROX
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-background/10 flex flex-wrap items-center justify-between gap-4 text-sm text-background/60">
          <span>© {new Date().getFullYear()} Ferrox, Inc. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Security</a>
            <a href="#" className="hover:text-primary transition-colors">DPA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
