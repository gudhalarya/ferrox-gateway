import blob from "@/assets/blob-green.jpg";
import { Reveal } from "./Reveal";

export function Showcase() {
  return (
    <section id="developers" className="py-32 px-6 lg:px-10 bg-surface">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary-deep mb-4">Built for developers</div>
            <h2 className="font-display font-bold tracking-tighter text-5xl md:text-7xl text-ink">
              Ship your config <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400 }}>like code.</span>
            </h2>
            <p className="mt-6 text-lg text-ink-soft max-w-md leading-relaxed">
              Declarative YAML, Git-backed deploys, instant rollbacks. Your edge configuration lives next to your application — versioned, reviewed, and tested.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#" className="btn-primary" data-cursor="Docs">Read the docs</a>
              <a href="#" className="btn-ghost" data-cursor="CLI">Install CLI →</a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative rounded-3xl overflow-hidden border border-border bg-ink p-6 font-mono text-sm" style={{ boxShadow: "var(--shadow-glow)" }}>
            <div className="flex items-center gap-1.5 mb-4">
              <span className="w-3 h-3 rounded-full bg-background/20" />
              <span className="w-3 h-3 rounded-full bg-background/20" />
              <span className="w-3 h-3 rounded-full bg-primary" />
              <span className="ml-3 text-xs text-background/40">ferrox.config.yaml</span>
            </div>
            <pre className="text-background/90 leading-relaxed overflow-x-auto">
{`gateway:
  routes:
    - match: /api/*
      origin: api.example.com
      cache:
        ttl: 60s
        swr: 10m
      auth:
        type: jwt
        issuer: auth.example.com

functions:
  - name: rewrite-headers
    runtime: edge-js
    triggers: [request]

shield:
  rate_limit: 1000/min
  bot_protection: true`}
            </pre>
            <img
              src={blob}
              alt=""
              loading="lazy"
              width={300}
              height={300}
              className="absolute -bottom-12 -right-12 w-48 h-48 object-contain mix-blend-screen opacity-90 pointer-events-none"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
