import { hero } from "../data/content";
import Reveal from "./Reveal";
import Icon from "./Icon";
import LottieAnim, { loadExchange } from "./LottieAnim";

export default function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <div className="container hero-grid">
          <div>
            <Reveal><span className="tag">{hero.tag}</span></Reveal>
            <Reveal delay={250}><h1>{hero.title}</h1></Reveal>
            <Reveal delay={500}><h2 className="sub">{hero.subtitle}</h2></Reveal>
            <Reveal delay={750}><p className="muted">{hero.text}</p></Reveal>
            <Reveal delay={1000} className="btns">
              <a className="btn" href="#token">Buy token</a>
              <a className="btn ghost" href="#about">Learn more</a>
            </Reveal>
          </div>
          <Reveal dir="right" delay={500} className="hero-art">
            <LottieAnim load={loadExchange} label="Currency exchange animation" />
          </Reveal>
        </div>
        <svg className="wave" viewBox="0 0 1440 140" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 140V78C240 20 520 0 820 34c250 28 430 66 620 20v86Z" />
        </svg>
      </section>
      <section className="features">
        <div className="container cards3">
          {hero.features.map((f, i) => (
            <Reveal key={f.title} delay={i * 250}>
              <div className="card"><div className="ic"><Icon name={f.icon} /></div><h3>{f.title}</h3><p>{f.text}</p></div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
