import { useState } from "react";
import { ChevronDown, ChevronRight, HelpCircle, Coins, Bitcoin, ShieldCheck } from "lucide-react";
import { faq } from "../data/content";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

const icons = [HelpCircle, Coins, Bitcoin, ShieldCheck];

/* Layout follows the reference: category list + support card on the left, accordion on the right. */
export default function Faq() {
  const tabs = Object.keys(faq.tabs);
  const [tab, setTab] = useState(tabs[0]);
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="alt">
      <div className="container">
        <SectionHead tag={faq.tag} title={faq.title} />
        <div className="faq">
          <Reveal dir="left" className="faq-side">
            <h4>Browse by category</h4>
            {tabs.map((t, i) => {
              const I = icons[i % icons.length];
              return (
                <button key={t} className={`cat ${t === tab ? "on" : ""}`} onClick={() => { setTab(t); setOpen(0); }}>
                  <span className="cat-ic"><I size={18} /></span>
                  <span><b>{t}</b><small>{faq.tabs[t].length} articles</small></span>
                  <ChevronRight size={18} />
                </button>
              );
            })}
            <div className="help">
              <h4>Still have questions?</h4>
              <p>Can't find the answer you're looking for? Our support team is here to help.</p>
              <a href="#contact" className="btn light full">Contact support</a>
            </div>
          </Reveal>
          <div className="faq-list">
            {faq.tabs[tab].map((f, i) => (
              <Reveal key={tab + f.q} delay={i * 250}>
                <div className={`acc ${open === i ? "open" : ""}`}>
                  <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                    {f.q}<ChevronDown size={20} />
                  </button>
                  <div className="acc-body"><p>{f.a}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
