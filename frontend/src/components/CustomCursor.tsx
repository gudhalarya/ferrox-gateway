import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x, ty = y;
    let raf = 0;

    const move = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    const loop = () => {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      root.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const hit = t.closest("[data-cursor]") as HTMLElement | null;
      const btn = t.closest("a, button");
      if (hit?.dataset.cursor) {
        root.dataset.state = "hover";
        setLabel(hit.dataset.cursor);
      } else if (btn) {
        root.dataset.state = "hover";
        setLabel("Click");
      } else {
        root.dataset.state = "idle";
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={rootRef} className="cursor-root" data-state="idle" aria-hidden>
      <div className="cursor-dot" />
      <div className="cursor-label">{label}</div>
    </div>
  );
}
