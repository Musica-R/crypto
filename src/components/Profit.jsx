import { Download } from "lucide-react";
import { profit, app } from "../data/content";
import Reveal from "./Reveal";
import LottieAnim, { loadMoney, loadDownload } from "./LottieAnim";

export default function Profit() {
  return (
    <>
      <section className="profit">
        <div className="container split">
          <Reveal dir="left" className="art-card money">
            <LottieAnim load={loadMoney} label="Money growth animation" />
          </Reveal>
          <div>
            <Reveal><span className="tag">{profit.tag}</span></Reveal>
            <Reveal delay={250}><h2>{profit.title}</h2></Reveal>
            <Reveal delay={500}><p className="muted">{profit.text}</p></Reveal>
            <Reveal delay={750} className="mt"><a href="#token" className="btn">{profit.cta}</a></Reveal>
          </div>
        </div>
      </section>
      <section id="app" className="alt">
        <div className="container split">
          <div>
            <Reveal><span className="tag">{app.tag}</span></Reveal>
            <Reveal delay={250}><h2>{app.title}</h2></Reveal>
            <Reveal delay={500}><p className="muted">{app.text}</p></Reveal>
            <Reveal delay={700}><p className="muted">{app.text2}</p></Reveal>
            <Reveal delay={900} className="btns">
              <a href="#contact" className="btn"><Download size={18} />Google Play</a>
              <a href="#contact" className="btn ghost"><Download size={18} />App Store</a>
            </Reveal>
          </div>
          <Reveal dir="right" className="art-card download">
            <LottieAnim load={loadDownload} label="Download app animation" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
