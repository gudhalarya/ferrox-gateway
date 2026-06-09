import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section id="start" className="py-32 px-6 lg:px-10">
      <Reveal>
        <div
          className="max-w-6xl mx-auto rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden"
          style={{ background: "var(--gradient-green)" }}
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, oklch(1 0 0 / .4), transparent 40%), radial-gradient(circle at 80% 80%, oklch(0.2 0.05 160 / .25), transparent 40%)",
            }}
          />
          <div className="relative">
            <h2 className="font-display font-bold tracking-tighter text-5xl md:text-7xl lg:text-8xl text-ink max-w-4xl">
              Ship your API to the edge in 60 seconds.
            </h2>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#" className="btn-primary">Start free</a>
              <a href="#" className="btn-ghost text-ink hover:text-ink">Talk to engineering →</a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
