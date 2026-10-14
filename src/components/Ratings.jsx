import { Star } from "lucide-react";
import { ratings } from "../data/content";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

export default function Ratings() {
  return (
    <section>
      <div className="container">
        <SectionHead tag={ratings.tag} title={ratings.title} />
        <div className="grid3">
          {ratings.items.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 250}>
              <div className="card rate">
                <h3>{r.name}</h3>
                <div className="stars" aria-label={`${r.score} out of 5`}>
                  {[1, 2, 3, 4, 5].map((n) => <Star key={n} size={20} className={r.score >= n - 0.5 ? "fill" : ""} />)}
                </div>
                <b>{r.score.toFixed(1)}</b>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
