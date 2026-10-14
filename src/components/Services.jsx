import { services } from "../data/content";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import Icon from "./Icon";
import Carousel from "./Carousel";

export default function Services() {
  return (
    <section id="services" className="alt">
      <div className="container">
        <SectionHead tag={services.tag} title={services.title} />
        <Reveal>
          <Carousel
            label="Our best solutions"
            items={services.items}
            render={(s) => (
              <div className="card"><div className="ic"><Icon name={s.icon} /></div><h3>{s.title}</h3><p>{s.text}</p></div>
            )}
          />
        </Reveal>
      </div>
    </section>
  );
}
