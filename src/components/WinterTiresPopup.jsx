import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Phone, ExternalLink } from "lucide-react";

const POPUP_DELAY_MS = 1600; // show after preloader completes

export default function WinterTiresPopup() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    // Pop up every time site loads
    const timer = setTimeout(() => setVisible(true), POPUP_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      setClosing(false);
    }, 380);
  };

  useEffect(() => {
    if (visible && !closing) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e) => {
        if (e.key === "Escape") handleClose();
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = prevOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [visible, closing]);

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  if (!visible) return null;

  return createPortal(
    <div
      className={`winter-popup-backdrop ${closing ? "closing" : ""}`}
      onClick={handleBackdrop}
      role="dialog"
      aria-modal="true"
      aria-label="Winter Tires Promotion"
    >
      <div className={`winter-popup-shell ${closing ? "closing" : ""}`}>
        {/* ── Animated corner accents (theme border) ── */}
        <span className="wp-corner wp-corner--tl" />
        <span className="wp-corner wp-corner--tr" />
        <span className="wp-corner wp-corner--bl" />
        <span className="wp-corner wp-corner--br" />

        {/* ── Glowing border track ── */}
        <span className="wp-border-glow" />

        {/* ── Close button ── */}
        <button
          className="winter-popup-close"
          onClick={handleClose}
          aria-label="Close promotion"
        >
          <X size={18} />
        </button>

        {/* ── Ad image ── */}
        <div className="winter-popup-img-wrap">
          <img
            src="/images/winter-tires-ad.jpg"
            alt="Winter Ready – Drive Confident | 600+ Tires in Stock – MBMR Auto"
            className="winter-popup-img"
            draggable={false}
          />
        </div>

        {/* ── Footer CTA strip ── */}
        <div className="winter-popup-footer">
          <a
            href="tel:6473338463"
            className="winter-popup-btn winter-popup-btn--primary"
          >
            <Phone size={15} />
            Call&nbsp;647-333-8463
          </a>
          <a
            href="/parts/tires-wholesale"
            className="winter-popup-btn winter-popup-btn--secondary"
          >
            View Tire Stock
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}

