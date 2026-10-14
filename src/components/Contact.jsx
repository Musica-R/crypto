import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { contact } from "../data/content";
import { WhatsAppIcon } from "./Icon";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const wa = `https://wa.me/${contact.phoneHref.replace(/\D/g, "")}`;
  return (
    <section id="contact" className="alt">
      <div className="container">
        <SectionHead tag={contact.tag} title={contact.title} text={contact.text} />
        <div className="contact">
          <Reveal dir="left">
            <ul className="cinfo">
              <li><i><MapPin size={20} /></i><span><b>Address</b>{contact.address}</span></li>
              <li><i><Phone size={20} /></i><span><b>Phone</b><a href={contact.phoneHref}>{contact.phone}</a></span></li>
              <li><i><Mail size={20} /></i><span><b>Email</b><a href={`mailto:${contact.email}`}>{contact.email}</a></span></li>
              <li><i className="wa-i"><WhatsAppIcon size={20} /></i><span><b>WhatsApp</b><a href={wa} target="_blank" rel="noopener noreferrer">Chat now</a></span></li>
            </ul>
          </Reveal>
          <Reveal dir="right" delay={300}>
            {sent ? <div className="card ok-box"><h3>Message sent</h3><p className="muted">We will reply within one business day.</p></div> : (
              <form className="card form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <div className="row2">
                  <label>Name<input required placeholder="Your name" /></label>
                  <label>Email<input required type="email" placeholder="you@example.com" /></label>
                </div>
                <label>Phone<input type="tel" placeholder="+1 234 567 890" /></label>
                <label>Message<textarea required rows="5" placeholder="How can we help?" /></label>
                <button className="btn full">Send message</button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
