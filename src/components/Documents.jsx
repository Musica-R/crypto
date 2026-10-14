import { useEffect, useState } from "react";
import { X, Download } from "lucide-react";
import { jsPDF } from "jspdf";
import { documents, partners } from "../data/content";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import Icon from "./Icon";

function makePdf(doc) {
  const p = new jsPDF({ unit: "pt", format: "a4" });
  const W = p.internal.pageSize.getWidth(), H = p.internal.pageSize.getHeight(), m = 50;
  let y = 70;
  const line = (txt, size, bold, gap) => {
    p.setFont("helvetica", bold ? "bold" : "normal"); p.setFontSize(size);
    p.splitTextToSize(txt, W - m * 2).forEach((l) => { if (y > H - 50) { p.addPage(); y = 60; } p.text(l, m, y); y += size * 1.5; });
    y += gap;
  };
  p.setTextColor(10, 100, 70); line(`Cryptox - ${doc.title}`, 22, true, 4);
  p.setTextColor(90); line(doc.desc, 11, false, 14);
  doc.sections.forEach((s) => {
    p.setTextColor(10, 100, 70); line(s.heading, 14, true, 2);
    p.setTextColor(40);
    if (s.text) line(s.text, 11, false, 10);
    (s.bullets || []).forEach((b) => line(`•  ${b}`, 11, false, 0));
    y += 10;
  });
  p.save(`cryptox-${doc.title.toLowerCase().replace(/\s+/g, "-")}.pdf`);
}

export default function Documents() {
  const [sel, setSel] = useState(null);
  useEffect(() => {
    const k = (e) => e.key === "Escape" && setSel(null);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);
  return (
    <section id="documents" className="alt">
      <div className="container">
        <SectionHead tag={documents.tag} title={documents.title} />
        <div className="grid3">
          {documents.items.map((d, i) => (
            <Reveal key={d.title} delay={(i % 3) * 250}>
              <button className="card doc" onClick={() => setSel(d)}>
                <div className="ic"><Icon name={d.icon} /></div><h3>{d.title}</h3><p>{d.desc}</p>
                <span className="link"><Download size={16} />Download PDF</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      {sel && (
        <div className="modal" onClick={() => setSel(null)} role="dialog" aria-modal="true" aria-label={sel.title}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="icon-btn close" onClick={() => setSel(null)} aria-label="Close"><X size={18} /></button>
            <div className="ic"><Icon name={sel.icon} /></div>
            <h3>{sel.title}</h3>
            <p className="muted">{sel.desc}</p>
            <ul className="checks">{sel.sections.map((s) => <li key={s.heading}>{s.heading}</li>)}</ul>
            <button className="btn full" onClick={() => makePdf(sel)}><Download size={18} />Download PDF</button>
          </div>
        </div>
      )}
    </section>
  );
}

export function Partners() {
  const list = [...partners.names, ...partners.names];
  return (
    <section className="partners">
      <div className="container"><SectionHead tag={partners.tag} title={partners.title} /></div>
      <div className="marquee"><div className="track">{list.map((n, i) => <span key={i}>{n}</span>)}</div></div>
    </section>
  );
}
