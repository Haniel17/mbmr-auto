import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, FileText, Phone, MapPin, Clock } from "lucide-react";
import { companyInfo } from "../data/partsData";
import MBMRLogo from "./MBMRLogo";
import MemberSavingsBar from "./MemberSavingsBar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      {/* Main Navbar */}
      <div className="header-navbar">
        <div className="container header-container">
          <Link to="/" className="logo-wrapper" onClick={closeMenu} style={{ textDecoration: "none" }}>
            <MBMRLogo height={40} />
          </Link>

          {/* Desktop Menu */}
          <nav className="desktop-nav">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} end>
              Home
            </NavLink>
            <NavLink to="/parts" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              Parts Offered
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              Contact
            </NavLink>

            <Link to="/contact" className="btn btn-primary nav-cta">
              <FileText size={15} /> Request Quote
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Horizontally Moving Walk-In Announcement Bar */}
      <MemberSavingsBar />

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-overlay ${isOpen ? "open" : ""}`} onClick={closeMenu}>
        <nav className="mobile-nav" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-nav-header">
            <div className="logo-wrapper" style={{ textDecoration: "none" }}>
              <MBMRLogo height={38} />
            </div>
            <button
              className="mobile-close-btn"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="mobile-links-list">
            <NavLink
              to="/"
              className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`}
              onClick={closeMenu}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/parts"
              className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`}
              onClick={closeMenu}
            >
              Parts Offered
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`}
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </div>

          {/* Quick Contact Card inside drawer */}
          <div className="mobile-nav-card">
            <div className="mobile-nav-info-item">
              <Phone size={15} className="mobile-nav-icon" />
              <a href={`tel:${companyInfo.phone}`} className="mobile-nav-phone-link">
                {companyInfo.phone}
              </a>
            </div>
            <div className="mobile-nav-info-item">
              <MapPin size={15} className="mobile-nav-icon" />
              <span>1275 Finch Ave W, North York</span>
            </div>
            <div className="mobile-nav-info-item">
              <Clock size={15} className="mobile-nav-icon" />
              <span>Mon–Fri 8am–6:30pm | Sat 8am–3:30pm</span>
            </div>
          </div>

          <Link
            to="/contact"
            className="btn btn-primary mobile-cta"
            onClick={closeMenu}
          >
            <FileText size={16} /> Request Parts Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
