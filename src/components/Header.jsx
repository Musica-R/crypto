import { useEffect, useRef, useState } from "react";
import { Menu, X, Coins } from "lucide-react";
import { navLinks } from "../data/content";

/* Floating pill navigation. The active link follows the section in view. */
export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const pillRef = useRef(null);

  /* active link follows scroll */
  useEffect(() => {
    const els = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
    const on = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let cur = els[0]?.id;
      els.forEach((el) => { if (el.offsetTop <= y) cur = el.id; });
      setActive(cur);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, []);

  /* close on Escape, outside tap, or when resizing to desktop */
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onDown = (e) => {
      if (pillRef.current && !pillRef.current.contains(e.target)) setOpen(false);
    };
    const onResize = () => window.innerWidth > 1024 && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="hdr">
      <div ref={pillRef} className={`pill ${open ? "open" : ""}`}>
        <a href="#home" className="logo" onClick={close}>
          <i><Coins size={20} /></i>Cryptox
        </a>

        <nav className={`nav ${open ? "open" : ""}`} id="main-nav" aria-label="Main">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? "on" : ""}
              aria-current={active === l.id ? "true" : undefined}
              onClick={close}
            >
              {l.label}
            </a>
          ))}
          {/* the header button is hidden on small screens, so it lives in the menu too */}
          <a href="#token" className="btn sm nav-cta" onClick={close}>Buy token</a>
        </nav>

        <div className="hdr-actions">
          <a href="#token" className="btn sm hide-sm">Buy token</a>
          <button
            type="button"
            className="icon-btn burger"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="main-nav"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}