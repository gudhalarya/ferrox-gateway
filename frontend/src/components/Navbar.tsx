import { useState, useEffect } from "react";

import logo from "@/assets/logo.png";

const links = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Developers", href: "#developers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Company", href: "#company" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
          <a
            href="#"
            data-cursor="Home"
            className="flex items-center gap-3 font-display font-medium text-xl tracking-tighter text-ink opacity-90 hover:opacity-100 transition-opacity"
          >
            <img src={logo} alt="Ferrox" className="w-6 h-6 rounded-md object-cover opacity-80" />
            Ferrox
          </a>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            data-cursor={open ? "Close" : "Open"}
            onClick={() => setOpen((v) => !v)}
            className={`hamburger ${open ? "hamburger-open" : ""}`}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>


      {/* Fullscreen menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-700 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <div
          className="absolute inset-0 bg-background"
          style={{
            clipPath: open
              ? "circle(150% at calc(100% - 36px) 32px)"
              : "circle(0% at calc(100% - 36px) 32px)",
            transition: "clip-path 0.8s cubic-bezier(.7,0,.2,1)",
          }}
        />
        <nav className="relative h-full flex flex-col justify-center px-6 lg:px-20 max-w-7xl mx-auto">
          <ul className="space-y-2 md:space-y-4">
            {links.map((l, i) => (
              <li key={l.label} className="overflow-hidden">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block font-display font-bold tracking-tight text-foreground hover:text-[oklch(0.55_0.18_152)] transition-colors"
                  style={{
                    fontSize: "clamp(2.5rem, 8vw, 6rem)",
                    lineHeight: 1,
                    transform: open ? "translateY(0)" : "translateY(110%)",
                    opacity: open ? 1 : 0,
                    transition: `transform .8s cubic-bezier(.2,.8,.2,1) ${0.15 + i * 0.08}s, opacity .6s ease ${0.2 + i * 0.08}s`,
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div
            className="mt-12 flex flex-wrap gap-6 text-sm text-muted-foreground"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(20px)",
              transition: "all .6s ease .7s",
            }}
          >
            <span>hello@ferrox.io</span>
            <span>San Francisco · Remote</span>
            <span>© {new Date().getFullYear()} Ferrox</span>
          </div>
        </nav>
      </div>
    </>
  );
}
