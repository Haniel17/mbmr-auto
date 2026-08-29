import { Link } from "react-router-dom";
import MBMRLogo from "./MBMRLogo";

export default function MemberSavingsBar() {
  const tickerItems = [
    {
      badge: "NORTH YORK DEPOT",
      highlight: "WALK-IN CUSTOMERS ARE WELCOME",
      sub: "Visit our parts counter at 1275 Finch Ave W, North York"
    },
    {
      badge: "PARTS COUNTER OPEN",
      highlight: "WALK-IN CUSTOMERS ARE WELCOME",
      sub: "Instant over-the-counter auto parts for all makes & models"
    },
    {
      badge: "PUBLIC & TRADE",
      highlight: "WALK-IN CUSTOMERS ARE WELCOME",
      sub: "No appointment needed — visit us Mon–Fri 8AM–6:30PM, Sat 8AM–3:30PM"
    },
    {
      badge: "FAST COUNTER SERVICE",
      highlight: "WALK-IN CUSTOMERS ARE WELCOME",
      sub: "Expert in-person parts lookup, fair prices & instant pickup"
    }
  ];

  return (
    <aside className="member-savings-bar" aria-label="Walk-in customers welcome announcement ticker">
      <div className="member-marquee-track">
        {[...Array(2)].map((_, groupIdx) => (
          <div key={groupIdx} className="member-marquee-group" aria-hidden={groupIdx > 0}>
            {tickerItems.map((item, idx) => (
              <div key={idx} className="member-ticker-wrapper">
                <Link to="/contact" className="member-ticker-item">
                  <span className="member-ticker-badge">
                    <span className="member-pulse-dot" />
                    {item.badge}
                  </span>
                  <strong className="member-ticker-highlight">
                    WALK-IN CUSTOMERS ARE <span className="ticker-welcome-red">WELCOME</span>
                  </strong>
                  <span className="member-ticker-dot">•</span>
                  <span className="member-ticker-sub">{item.sub}</span>
                </Link>

                {/* Company Logo as Text Divider */}
                <div className="member-ticker-logo-divider" title="MBMR Auto">
                  <MBMRLogo height={20} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}
