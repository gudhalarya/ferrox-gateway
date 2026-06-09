import { useEffect, useRef, useState } from "react";

const cards = [
  {
    tag: "01 · Gateway",
    title: "Route anything, anywhere.",
    body: "Declarative routing with regex, weighted traffic and instant rollbacks. Push a config, ship in <2s globally.",
  },
  {
    tag: "02 · Edge Cache",
    title: "Sub-10ms responses.",
    body: "Smart caching across 300+ POPs with stale-while-revalidate, surrogate keys and per-request purge.",
  },
  {
    tag: "03 · AuthZ",
    title: "Identity at the edge.",
    body: "JWT, OAuth2, mTLS and signed URLs validated before a single byte hits your origin.",
  },
  {
    tag: "04 · Shield",
    title: "Always-on protection.",
    body: "WAF, bot management and DDoS mitigation tuned by ML across the entire Ferrox network.",
  },
  {
    tag: "05 · Functions",
    title: "Code at the perimeter.",
    body: "Deploy V8 isolates in milliseconds. A/B test, rewrite, transform — all in JavaScript or WASM.",
  },
  {
    tag: "06 · Observability",
    title: "See every request.",
    body: "Live tail logs, latency heatmaps and per-route traces — no agents, no sampling.",
  },
];

export function HorizontalScroll() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const wrap = wrapRef.current;
      const track = trackRef.current;
      if (!wrap || !track) return;
      const rect = wrap.getBoundingClientRect();
      const total = wrap.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = total > 0 ? scrolled / total : 0;
      const maxX = track.scrollWidth - window.innerWidth;
      track.style.transform = `translate3d(${-p * maxX}px, 0, 0)`;
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="platform" ref={wrapRef} style={{ height: "420vh" }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center bg-surface">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-10 mb-10 flex items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">The platform</div>
            <h2 className="font-display font-bold tracking-tighter text-4xl md:text-6xl max-w-2xl">
              One control plane.<br />Every request, accelerated.
            </h2>
          </div>
          <div className="hidden md:block w-48 h-1 bg-border rounded-full overflow-hidden">
            <div className="h-full bg-ink transition-[width] duration-100" style={{ width: `${progress * 100}%` }} />
          </div>
        </div>

        <div ref={trackRef} className="flex gap-6 px-6 lg:px-10 will-change-transform">
          {cards.map((c) => (
            <article
              key={c.tag}
              className="shrink-0 w-[78vw] md:w-[44vw] lg:w-[34vw] h-[60vh] rounded-3xl p-8 md:p-10 flex flex-col justify-between border border-border bg-background hover:border-primary transition-colors"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.tag}</div>
              <div>
                <h3 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-4">{c.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
              <a href="#" className="btn-ghost px-0">Learn more →</a>
            </article>
          ))}
          <div className="shrink-0 w-10" />
        </div>
      </div>
    </section>
  );
}
