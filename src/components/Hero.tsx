import { useEffect, useState } from "react";
import heroMesh from "@/assets/hero-mesh.jpg";

export function Hero() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative pt-36 pb-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />

      {/* Mesh image as backdrop */}
      <img
        src={heroMesh}
        alt=""
        width={1920}
        height={1080}
        className="absolute top-0 right-0 w-[70%] h-full object-cover opacity-70 mix-blend-multiply pointer-events-none"
        style={{
          maskImage: "linear-gradient(90deg, transparent, black 30%, black 80%, transparent)",
          transform: `translateY(${y * 0.1}px)`,
        }}
      />

      {/* Grid backdrop */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.75 0.12 152 / .3) 1px, transparent 1px), linear-gradient(90deg, oklch(0.75 0.12 152 / .3) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 80%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div
          className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/70 backdrop-blur px-4 py-1.5 text-xs font-medium text-ink-soft"
          style={{ transform: `translateY(${y * -0.15}px)` }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          v3.0 — Edge Functions are live
        </div>

        <h1
          className="mt-8 font-display font-bold tracking-tighter text-ink"
          style={{
            fontSize: "clamp(3rem, 9vw, 9rem)",
            lineHeight: 0.92,
            transform: `translateY(${y * -0.05}px)`,
          }}
        >
          The edge layer<br />
          <span className="inline-flex items-baseline gap-3 flex-wrap">
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400 }}>for</span>
            <span
              className="inline-block px-5 rounded-2xl text-primary-foreground"
              style={{ background: "var(--gradient-green)" }}
            >
              modern
            </span>
          </span>
          <br />APIs.
        </h1>

        <div className="mt-12 grid md:grid-cols-2 gap-10 items-end">
          <p className="text-lg md:text-xl text-ink-soft max-w-xl leading-relaxed">
            Ferrox sits between your users and your services — routing, caching,
            authenticating and accelerating every request across 300+ edge locations.
            Think Cloudflare meets Kong, built for teams who ship daily.
          </p>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a href="#start" className="btn-primary" data-cursor="Start">
              Start building
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </a>
            <a href="#demo" className="btn-ghost" data-cursor="Book">Book a demo →</a>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-y-10 border-t border-primary/30 pt-10">
          {[
            ["12ms", "p50 latency"],
            ["99.999%", "uptime SLA"],
            ["300+", "edge POPs"],
            ["8T", "requests / mo"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display font-bold text-3xl md:text-5xl tracking-tighter">
                <span style={{ background: "var(--gradient-green)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                  {n}
                </span>
              </div>
              <div className="text-sm text-ink-soft mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
