import techGlobe from "/home/draken/.gemini/antigravity/brain/dcfe2eb4-9e51-4008-8f41-8f71be892776/global_edge_network_tech_1781088907731.png";
import { Reveal } from "./Reveal";

export function GlobalNetwork() {
  return (
    <section className="relative py-32 px-6 lg:px-10 overflow-hidden" style={{ background: "var(--color-ink)" }}>
      <div className="absolute inset-0 opacity-40 mix-blend-screen">
        <img src={techGlobe} alt="" loading="lazy" width={1920} height={1080} className="w-full h-full object-cover scale-110" />
      </div>
      <div className="absolute inset-0" style={{ background: "radial-gradient(circle at center, transparent 20%, var(--color-ink) 70%)" }} />

      <div className="relative max-w-7xl mx-auto text-background">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Global by default</div>
          <h2 className="font-display font-bold tracking-tighter text-4xl md:text-7xl max-w-3xl">
            One deploy. <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, color: "oklch(0.85 0.2 152)" }}>Everywhere</span> on Earth.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {[
            { k: "300+", v: "Edge locations" },
            { k: "120", v: "Countries served" },
            { k: "<50ms", v: "to 95% of users" },
          ].map((s) => (
            <Reveal key={s.v} delay={100}>
              <div className="border-t border-primary/40 pt-6">
                <div className="font-display font-bold text-5xl md:text-6xl text-primary tracking-tighter">{s.k}</div>
                <div className="mt-2 text-background/70">{s.v}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
