import Reveal from "./Reveal";

export default function SectionHead({ tag, title, text }) {
  return (
    <div className="shead">
      <Reveal><span className="tag">{tag}</span></Reveal>
      <Reveal delay={250}><h2>{title}</h2></Reveal>
      {text && <Reveal delay={450}><p>{text}</p></Reveal>}
    </div>
  );
}
