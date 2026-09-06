import { Phone, MapPin, Clock } from "lucide-react";
import { companyInfo } from "../data/partsData";

export default function MemberSavingsBar() {
  return (
    <aside className="top-utility-bar" aria-label="Depot hours and walk-in counter information">
      <div className="container top-utility-container">
        <div className="top-utility-left">
          <span className="top-utility-tag">Walk-Ins Welcome</span>
          <span className="top-utility-text">Public &amp; Trade Auto Parts Counter</span>
        </div>

        <div className="top-utility-right">
          <div className="top-utility-item">
            <Clock size={13} className="top-utility-icon" />
            <span>Mon–Fri 8AM–6:30PM &bull; Sat 8AM–3:30PM</span>
          </div>
          <a 
            href={companyInfo.mapDirectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="top-utility-item top-utility-link"
          >
            <MapPin size={13} className="top-utility-icon" />
            <span>1275 Finch Ave W, North York</span>
          </a>
          <a 
            href={`tel:${companyInfo.phone}`}
            className="top-utility-item top-utility-link top-utility-phone"
          >
            <Phone size={13} className="top-utility-icon" />
            <span>{companyInfo.phone}</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
