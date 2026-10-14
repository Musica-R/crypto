import { Search, BarChart3, Globe, Settings, Rocket, Flag } from "lucide-react";
import { roadmap } from "../data/content";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

const colors = ["#ff8a1f", "#1fa7d6", "#ef3b3b", "#7ab51d", "#a855f7", "#ec4899"];
const icons = [Search, BarChart3, Globe, Settings, Rocket, Flag];

/* Winding road layout: pins alternate above and below the road. Below 1025px it becomes a vertical road. */
export default function Roadmap() {
  return (
    <section id="roadmap" className="alt">
      <div className="container">
        <SectionHead tag={roadmap.tag} title={roadmap.title} />
        <ol className="rm">
          <svg className="rm-road" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 60 Q100 20 200 60 T400 60 T600 60 T800 60 T1000 60 T1200 60" />
          </svg>
          {roadmap.items.map((it, i) => {
            const I = icons[i];
            return (
              <Reveal as="li" key={it.title} delay={i * 350} className={`rm-item ${i % 2 ? "low" : "high"}`} style={{ "--c": colors[i] }}>
                <div className="rm-text">
                  <span className="rm-date">{it.date}</span>
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                </div>
                <div className="rm-pin"><span><I size={24} /></span><em>{i + 1}</em></div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
