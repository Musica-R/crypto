import { useState } from "react";
import { sale, tokenDetails } from "../data/content";
import useCountdown from "../hooks/useCountdown";
import useReveal from "../hooks/useReveal";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

/* Rates: ETH and BTC come from the sale info. Set your real LTC rate. */
const RATES = { ETH: 2000, BTC: 3000, LTC: 1000 };

function Bar({ pct }) {
  const [ref, shown] = useReveal();
  return <div className="bar" ref={ref}><i style={{ width: shown ? `${pct}%` : 0 }} /></div>;
}

function Donut({ chart, colors }) {
  const total = chart.items.reduce((a, b) => a + b.value, 0);
  const R = 70, C = 2 * Math.PI * R;
  let acc = 0;
  return (
    <div className="card donut">
      <h3>{chart.title}</h3>
      <svg viewBox="0 0 200 200" role="img" aria-label={chart.title}>
        <g transform="rotate(-90 100 100)">
          {chart.items.map((it, i) => {
            const len = (it.value / total) * C;
            const el = <circle key={it.label} cx="100" cy="100" r={R} fill="none" stroke={colors[i]} strokeWidth="26" strokeDasharray={`${len - 2} ${C}`} strokeDashoffset={-acc} />;
            acc += len;
            return el;
          })}
        </g>
      </svg>
      <ul>{chart.items.map((it, i) => <li key={it.label}><i style={{ background: colors[i] }} />{it.label}<b>{it.value}%</b></li>)}</ul>
    </div>
  );
}

export default function Token() {
  const t = useCountdown(sale.endDate);
  const [cur, setCur] = useState("BTC");
  const [amt, setAmt] = useState("20");
  const tokens = (parseFloat(amt) || 0) * RATES[cur];
  const colors = tokenDetails.colors;

  return (
    <section id="token">
      <div className="container">
        <SectionHead tag={sale.tag} title={sale.title} />
        <div className="sale">
          <Reveal dir="left">
            <div className="card">
              <h3>{sale.infoTitle}</h3>
              <ul className="info">{sale.info.map(([k, v]) => <li key={k}><span>{k}</span><b>{v}</b></li>)}</ul>
            </div>
          </Reveal>
          <div className="sale-r">
            <Reveal dir="right">
              <div className="card">
                <div className="count">{Object.entries(t).map(([k, v]) => <div key={k}><b>{String(v).padStart(2, "0")}</b><span>{k}</span></div>)}</div>
                <h3>{sale.progress.title}</h3>
                <p className="muted small">${(sale.progress.raised / 1e6).toFixed(1)} M raised ({sale.progress.percent}%)</p>
                <Bar pct={sale.progress.percent} />
                <div className="between small muted"><span>Min {sale.progress.min}</span><span>Max {sale.progress.max}</span></div>
              </div>
            </Reveal>
            <Reveal dir="right" delay={300}>
              <div className="card">
                <h3>{sale.buy.title}</h3>
                <div className="buy">
                  <input type="number" min="0" value={amt} onChange={(e) => setAmt(e.target.value)} aria-label="Amount" />
                  <select value={cur} onChange={(e) => setCur(e.target.value)} aria-label="Currency">{Object.keys(RATES).map((c) => <option key={c}>{c}</option>)}</select>
                </div>
                <p className="small muted">{sale.buy.min}</p>
                <p className="get">You get <b>{tokens.toLocaleString()} ICC</b></p>
                <a className="btn full" href="#contact">Buy now</a>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="grid2 disc">
          {sale.discounts.map((d, i) => (
            <Reveal key={d.label} delay={i * 300}>
              <div className="card"><div className="between"><h3>{d.label}</h3><b className="big">{d.value}%</b></div><Bar pct={d.value} /><p className="small muted">{d.note}</p></div>
            </Reveal>
          ))}
        </div>
        <div className="shead mt2"><Reveal><span className="tag">{tokenDetails.tag}</span></Reveal></div>
        <div className="grid2">
          {tokenDetails.charts.map((c, i) => <Reveal key={c.title} delay={i * 300} dir="zoom"><Donut chart={c} colors={colors} /></Reveal>)}
        </div>
      </div>
    </section>
  );
}
