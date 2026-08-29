import { Phone, MessageCircle, FileText, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { companyInfo } from "../data/partsData";

export default function MobileBottomBar() {
  const whatsappUrl = `https://wa.me/${companyInfo.phoneRaw.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hi MBMR Auto, I'd like to check part availability.")}`;

  return (
    <div className="mobile-bottom-bar" aria-label="Mobile quick actions">
      <a
        href={`tel:${companyInfo.phone}`}
        className="mobile-bar-btn call"
        aria-label="Call MBMR Auto"
      >
        <Phone size={18} />
        <span>Call</span>
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-bar-btn whatsapp"
        aria-label="WhatsApp MBMR Auto"
      >
        <MessageCircle size={18} />
        <span>WhatsApp</span>
      </a>

      <Link
        to="/contact"
        className="mobile-bar-btn quote"
        aria-label="Request a parts quote"
      >
        <FileText size={18} />
        <span>Get Quote</span>
      </Link>

      <a
        href={companyInfo.mapDirectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-bar-btn map"
        aria-label="Directions to 1275 Finch Ave W"
      >
        <MapPin size={18} />
        <span>Directions</span>
      </a>
    </div>
  );
}
