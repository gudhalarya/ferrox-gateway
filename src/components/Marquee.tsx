const logos = ["Linear", "Vercel", "Ramp", "Notion", "Retool", "Cursor", "Loom", "Figma", "Stripe", "Anthropic"];

export function Marquee() {
  return (
    <section className="py-20 border-y border-border overflow-hidden">
      <div className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground mb-10">
        Powering APIs at fast-moving teams
      </div>
      <div className="flex animate-marquee whitespace-nowrap">
        {[...logos, ...logos].map((l, i) => (
          <span
            key={i}
            className="font-display font-semibold text-3xl md:text-4xl mx-10 text-ink/70 hover:text-ink transition-colors"
          >
            {l}
          </span>
        ))}
      </div>
    </section>
  );
}
