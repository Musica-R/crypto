import { team } from "../data/content";
import Reveal from "./Reveal";

function Member({ m, big }) {
  return (
    <div className={`member ${big ? "big" : ""}`}>
      <div className="arch"><img src={m.image} alt={m.name} loading="lazy" /></div>
      <div className="plate"><b>{m.name}</b><span>{m.role}</span></div>
    </div>
  );
}

/* Layout follows the reference: title left + lead top right, then the rest in a row. */
export default function Team() {
  const lead = team.members.find((m) => /ceo/i.test(m.role)) || team.members[0];
  const rest = team.members.filter((m) => m !== lead);
  return (
    <section id="team">
      <div className="container">
        <div className="team-top">
          <div className="team-title">
            <Reveal><span className="tag">{team.tag}</span></Reveal>
            <Reveal delay={250}><h2>{team.title}</h2></Reveal>
          </div>
          <Reveal delay={400} dir="right"><Member m={lead} big /></Reveal>
        </div>
        <div className="team-row">
          {rest.map((m, i) => <Reveal key={m.name} delay={i * 350}><Member m={m} /></Reveal>)}
        </div>
      </div>
    </section>
  );
}
