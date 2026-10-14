import { WhatsAppIcon } from "./Icon";
import { contact } from "../data/content";

const number = contact.phoneHref.replace(/\D/g, "");

export default function WhatsAppButton() {
  return (
    <a className="wa" href={`https://wa.me/${number}?text=${encodeURIComponent("Hello Cryptox, I need help with the token sale.")}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
      <WhatsAppIcon />
      <span className="wa-label">Chat with us</span>
    </a>
  );
}
