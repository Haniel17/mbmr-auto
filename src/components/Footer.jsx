import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { companyInfo, partCategories } from "../data/partsData";
import { partsCategoryPath } from "../seo/siteConfig";
import MBMRLogo from "./MBMRLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const categoriesList = partCategories.filter(c => c.id !== "all");

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-info">
            <Link to="/" className="footer-logo" style={{ textDecoration: "none" }}>
              <MBMRLogo height={44} />
            </Link>
            <div className="footer-address-badge">
              <MapPin size={13} />
              <span>1275 Finch Ave W, North York, ON</span>
            </div>
          </div>

          {/* Parts Categories */}
          <div>
            <h4 className="footer-title">Parts Categories</h4>
            <ul className="footer-links">
              {categoriesList.map((cat) => (
                <li key={cat.id}>
                  <Link to={partsCategoryPath(cat.id)} className="footer-link">
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/parts" className="footer-link">
                  All Parts Catalog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Request Parts Quote
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Finch Ave Location & Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer-title">Parts Depot & Counter</h4>
            <div className="footer-contact-item">
              <MapPin size={18} className="footer-contact-icon" />
              <span>1275 Finch Ave W, North York, ON M3J 0L5</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} className="footer-contact-icon" />
              <a href={`tel:${companyInfo.phone}`} style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                {companyInfo.phone}
              </a>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} className="footer-contact-icon" />
              <a href={`mailto:${companyInfo.email}`} style={{ color: "var(--text-secondary)" }}>
                {companyInfo.email}
              </a>
            </div>
            <div className="footer-contact-item">
              <Clock size={18} className="footer-contact-icon" />
              <span>
                Mon–Fri: 8:00 AM – 6:30 PM<br />
                Sat: 8:00 AM – 3:30 PM <br />
                Sun: Closed
              </span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} MBMR Auto. All rights reserved.</p>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
