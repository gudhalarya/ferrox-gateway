import { useRef } from "react";
import { motion, useScroll, useTransform, motionValue, useSpring } from "framer-motion";

const cards = [
    {
        tag: "01 · Gateway",
        title: "Route anything, anywhere.",
        body: "Declarative routing with regex, weighted traffic and instant rollbacks. Push a config, ship in <2s globally.",
        color: "var(--primary)"
    },
    {
        tag: "02 · Edge Cache",
        title: "Sub-10ms responses.",
        body: "Smart caching across 300+ POPs with stale-while-revalidate, surrogate keys and per-request purge.",
        color: "oklch(0.7 0.18 190)" // Cyber blue
    },
    {
        tag: "03 · AuthZ",
        title: "Identity at the edge.",
        body: "JWT, OAuth2, mTLS and signed URLs validated before a single byte hits your origin.",
        color: "oklch(0.75 0.16 320)" // Purple
    },
    {
        tag: "04 · Shield",
        title: "Always-on protection.",
        body: "WAF, bot management and DDoS mitigation tuned by ML across the entire Ferrox network.",
        color: "oklch(0.7 0.22 20)" // Warm red/orange
    },
    {
        tag: "05 · Functions",
        title: "Code at the perimeter.",
        body: "Deploy V8 isolates in milliseconds. A/B test, rewrite, transform — all in JavaScript or WASM.",
        color: "oklch(0.8 0.15 140)" // Mint
    },
    {
        tag: "06 · Observability",
        title: "See every request.",
        body: "Live tail logs, latency heatmaps and per-route traces — no agents, no sampling.",
        color: "oklch(0.85 0.12 100)" // Lime
    },
];

function Card({
    card,
    index,
    progress,
    range
}: {
    card: typeof cards[0];
    index: number;
    progress: any;
    range: [number, number]
}) {
    const isLast = index === cards.length - 1;
    const targetScale = 1 - ((cards.length - index) * 0.03);

    // Transform for the card coming into view
    const y = useTransform(progress, [range[0], range[1]], [400, 0]);

    // Only scale/fade if it's NOT the last card, or if it is, do it at the very very end
    const scale = useTransform(
        progress,
        [range[1], isLast ? 0.99 : range[1] + 0.1],
        [1, targetScale]
    );
    const opacity = useTransform(
        progress,
        [range[1], isLast ? 0.99 : range[1] + 0.1],
        [1, isLast ? 1 : 0.7]
    );

    return (
        <div className="sticky top-0 h-screen flex items-center justify-center pt-10">
            <motion.div
                style={{
                    scale,
                    y: index === 0 ? 0 : y,
                    backgroundColor: "var(--background)",
                    top: `calc(-5vh + ${index * 20}px)`, // Moved even higher up
                }}
                className="relative w-[95vw] md:w-[85vw] lg:w-[75vw] h-[65vh] md:h-[75vh] rounded-[4rem] p-10 md:p-20 border border-border/40 shadow-2xl flex flex-col justify-between overflow-hidden group"
            >
                {/* Background Accent */}
                <div
                    className="absolute top-0 right-0 w-[30rem] h-[30rem] blur-[140px] opacity-25 transition-opacity group-hover:opacity-45 pointer-events-none"
                    style={{ backgroundColor: card.color }}
                />

                <div className="relative z-10">
                    <div
                        className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-border/50 bg-surface/50 backdrop-blur text-[0.65rem] md:text-xs uppercase tracking-[0.3em] font-bold mb-8 md:mb-12"
                        style={{ color: card.color }}
                    >
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: card.color }} />
                        {card.tag}
                    </div>

                    <h3 className="font-display font-bold text-5xl md:text-8xl tracking-tighter leading-[0.88] max-w-4xl mb-8 md:mb-12">
                        {card.title}
                    </h3>

                    <p className="text-muted-foreground text-lg md:text-2xl leading-relaxed max-w-2xl font-medium">
                        {card.body}
                    </p>
                </div>

                <div className="relative z-10 flex items-center justify-between">
                    <a
                        href="#"
                        className="btn-primary group/btn px-10 py-5 text-lg"
                        style={{ "--btn-glow": card.color } as any}
                    >
                        Explore {card.tag.split(" · ")[1]}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/btn:translate-x-1 ml-2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>

                    <div className="text-[12rem] md:text-[22rem] font-display font-black text-border/5 select-none pointer-events-none absolute -bottom-10 -right-10 md:-bottom-24 md:-right-24">
                        0{index + 1}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export function PlatformStacking() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={container} className="relative h-[700vh] bg-surface/10 py-10 z-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-10">
                <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary font-bold mb-4">
                    <span className="w-8 h-[1px] bg-primary" />
                    The platform
                </div>
                <h2 className="font-display font-bold tracking-tighter text-5xl md:text-8xl leading-[0.95] max-w-4xl">
                    One control plane.<br />
                    <span className="text-muted-foreground/40">Every request, accelerated.</span>
                </h2>
            </div>

            <div className="flex flex-col items-center">
                {cards.map((card, i) => {
                    // Mapping 0-6 range to 0.0 - 0.85 (finish at 6/7 of the total 700vh)
                    const start = (i / 7);
                    const end = ((i + 1) / 7);
                    return (
                        <Card
                            key={card.tag}
                            card={card}
                            index={i}
                            progress={scrollYProgress}
                            range={[start, end]}
                        />
                    );
                })}
            </div>
        </section>
    );
}
