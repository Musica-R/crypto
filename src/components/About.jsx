import { Check } from "lucide-react";
import { about, why } from "../data/content";
import Reveal from "./Reveal";
import Icon from "./Icon";

export default function About() {
  return (
    <>
      <section id="about" className="alt">
        <div className="container split">
          <Reveal dir="left" className="pic"><img src="/ass/about.jpg" alt={about.title} loading="lazy" /></Reveal>
          <div>
            <Reveal><span className="tag">{about.tag}</span></Reveal>
            <Reveal delay={250}><h2>{about.title}</h2></Reveal>
            <Reveal delay={500}><p className="muted">{about.text}</p></Reveal>
            <ul className="checks">
              {about.points.map((p, i) => (
                <Reveal as="li" key={p} delay={750 + i * 250}><Check size={18} />{p}</Reveal>
              ))}
            </ul>
            <Reveal delay={1500}><a href="#services" className="btn">{about.cta}</a></Reveal>
          </div>
        </div>
      </section>
      <section>
        <div className="container split rev">
          <div>
            <Reveal><span className="tag">{why.tag}</span></Reveal>
            <Reveal delay={250}><h2>{why.title}</h2></Reveal>
            <Reveal delay={500}><p className="muted">{why.text}</p></Reveal>
            <div className="grid2 mt">
              {why.items.map((it, i) => (
                <Reveal key={it.title} delay={700 + i * 250}>
                  <div className="card mini"><div className="ic"><Icon name={it.icon} /></div><h3>{it.title}</h3><p>{it.text}</p></div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal dir="right" className="pic"><img src="/ass/choose.jpg" alt={why.title} loading="lazy" /></Reveal>
        </div>
      </section>
    </>
  );
}
