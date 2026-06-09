import { Reveal } from "./Reveal";

const items = [
  { q: "Ferrox cut our p95 by 60% in the first week. Setup took an afternoon.", a: "Maya Chen", r: "Staff Engineer, Linear" },
  { q: "The config-as-code model finally made our edge layer reviewable.", a: "Diego Alvarez", r: "Platform Lead, Ramp" },
  { q: "We replaced three vendors with one. Cost went down, latency too.", a: "Priya Shah", r: "VP Eng, Notion" },
];

export function Testimonials() {
  return (
    <section id="solutions" className="py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="font-display font-bold tracking-tighter text-4xl md:text-6xl max-w-2xl">
            Trusted by teams that <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, color: "oklch(0.55 0.18 152)" }}>can't slow down.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <Reveal key={i} delay={i * 100}>
              <figure
                className="h-full p-8 rounded-3xl border border-border bg-background hover:border-primary transition-all hover:-translate-y-1 duration-500"
                style={{ boxShadow: "var(--shadow-soft)" }}
                data-cursor="Read"
              >
                <svg width="32" height="24" viewBox="0 0 32 24" fill="none" className="mb-6">
                  <path d="M0 24V14C0 6 4 1 12 0L13 4C8 5 6 8 6 12H12V24H0ZM18 24V14C18 6 22 1 30 0L31 4C26 5 24 8 24 12H30V24H18Z" fill="oklch(0.74 0.22 152)" />
                </svg>
                <blockquote className="font-display text-xl md:text-2xl tracking-tight text-ink leading-snug">{t.q}</blockquote>
                <figcaption className="mt-8 pt-6 border-t border-border">
                  <div className="font-semibold text-ink">{t.a}</div>
                  <div className="text-sm text-ink-soft">{t.r}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
