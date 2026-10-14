import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* Responsive carousel: 3 slides on desktop, 2 on tablet, 1 on phone.
   Arrows, dots, swipe/drag, keyboard arrows and autoplay (pauses on hover/focus). */
function usePerView() {
  const calc = () => (window.innerWidth > 1024 ? 3 : window.innerWidth > 640 ? 2 : 1);
  const [pv, setPv] = useState(calc);
  useEffect(() => {
    const on = () => setPv(calc());
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);
  return pv;
}

export default function Carousel({ items, render, interval = 4500, label = "Carousel" }) {
  const pv = usePerView();
  const max = Math.max(0, items.length - pv);
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dx, setDx] = useState(0);
  const drag = useRef(null);
  const reduce = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const go = useCallback((n) => setI(n > max ? 0 : n < 0 ? max : n), [max]);
  useEffect(() => { setI((c) => Math.min(c, max)); }, [max]);
  useEffect(() => {
    if (paused || reduce || max === 0) return;
    const t = setInterval(() => setI((c) => (c >= max ? 0 : c + 1)), interval);
    return () => clearInterval(t);
  }, [paused, reduce, max, interval]);

  const down = (e) => { drag.current = e.clientX; setPaused(true); };
  const move = (e) => { if (drag.current !== null) setDx(e.clientX - drag.current); };
  const up = () => {
    if (drag.current === null) return;
    if (dx < -50) go(i + 1); else if (dx > 50) go(i - 1);
    drag.current = null; setDx(0); setPaused(false);
  };

  const key = (e) => { if (e.key === "ArrowRight") go(i + 1); if (e.key === "ArrowLeft") go(i - 1); };

  return (
    <div className="cs" role="region" aria-roledescription="carousel" aria-label={label} tabIndex={0} onKeyDown={key}
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => !drag.current && setPaused(false)}
      onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div className="cs-view" onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up} onPointerLeave={up}>
        <div className={`cs-track ${dx ? "drag" : ""}`}
          style={{ "--pv": pv, "--i": i, transform: `translateX(calc(var(--i) * -1 * ((100% - (var(--pv) - 1) * var(--gap)) / var(--pv) + var(--gap)) + ${dx}px))` }}>
          {items.map((it, n) => (
            <div className="cs-slide" key={n} role="group" aria-roledescription="slide" aria-label={`${n + 1} of ${items.length}`} aria-hidden={n < i || n >= i + pv}>
              {render(it, n)}
            </div>
          ))}
        </div>
      </div>
      <div className="cs-ctrl">
        <button className="icon-btn" onClick={() => go(i - 1)} aria-label="Previous"><ChevronLeft size={20} /></button>
        <div className="cs-dots">
          {Array.from({ length: max + 1 }, (_, n) => (
            <button key={n} className={n === i ? "on" : ""} onClick={() => go(n)} aria-label={`Go to slide ${n + 1}`} aria-current={n === i} />
          ))}
        </div>
        <button className="icon-btn" onClick={() => go(i + 1)} aria-label="Next"><ChevronRight size={20} /></button>
      </div>
    </div>
  );
}
