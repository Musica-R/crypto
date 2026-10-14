import { useState } from "react";
import { Coins, MapPin, Phone, Mail } from "lucide-react";
import { footer, contact, navLinks } from "../data/content";
import Reveal from "./Reveal";

export default function Footer() {
  const [done, setDone] = useState(false);
  const quickTargets = ["contact", "faq", "token", "faq", "contact"];

  return (
    <footer className="footer">
      <div className="container">
        <div className="foot-grid">
          <Reveal>
            <a href="#home" className="logo"><i><Coins size={20} /></i>Cryptox</a>
            <p className="muted">{footer.text}</p>
            <ul className="foot-contact">
              <li><MapPin size={16} /><span>{contact.address}</span></li>
              <li><Phone size={16} /><a href={contact.phoneHref}>{contact.phone}</a></li>
              <li><Mail size={16} /><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <h4>Company</h4>
            <ul>{footer.company.map((t) => <li key={t}><a href="#about">{t}</a></li>)}</ul>
          </Reveal>

          <Reveal delay={400}>
            <h4>Quick links</h4>
            <ul>
              {footer.quick.map((t, i) => (
                <li key={t}><a href={`#${quickTargets[i] || "contact"}`}>{t}</a></li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={600}>
            <h4>Newsletter</h4>
            <p className="muted">{footer.newsletter}</p>
            {done ? (
              <p className="ok" role="status">Thanks, you are subscribed.</p>
            ) : (
              <form className="news" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="Your email"
                  aria-label="Email address"
                />
                <button type="submit" className="btn sm">Subscribe</button>
              </form>
            )}
          </Reveal>
        </div>

        <div className="foot-bar">
          <span>© {new Date().getFullYear()} Cryptox. All rights reserved.</span>
          <span className="foot-nav">
            {navLinks.slice(0, 4).map((l) => <a key={l.id} href={`#${l.id}`}>{l.label}</a>)}
          </span>
        </div>
      </div>
    </footer>
  );
}