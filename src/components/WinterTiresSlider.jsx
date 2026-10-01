import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { 
  Phone, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown,
  Maximize2, 
  X, 
  Truck, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2,
  Snowflake
} from "lucide-react";

export default function WinterTiresSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeTickerIdx, setActiveTickerIdx] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const totalSlides = 4;

  const tickerHighlights = [
    "600+ Brand-New Tires In Stock • Michelin, Uniroyal, BFGoodrich from $91.02",
    "Wholesaler & Body Shop Volume Discounts • Cash & Carry Only • No Install",
    "Free Delivery Within 20 KM • Dispatched 2x Daily Across GTA"
  ];

  // Rotate thin ticker text when not hovered
  useEffect(() => {
    if (isHovered) return;
    const tickerTimer = setInterval(() => {
      setActiveTickerIdx((prev) => (prev + 1) % tickerHighlights.length);
    }, 3800);
    return () => clearInterval(tickerTimer);
  }, [isHovered, tickerHighlights.length]);

  // Auto slide deals only when hovered/expanded
  useEffect(() => {
    if (!isHovered || modalOpen) return;
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(slideTimer);
  }, [isHovered, modalOpen, totalSlides]);

  // Lock body scroll when flyer modal is open
  useEffect(() => {
    if (modalOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const handleEsc = (e) => {
        if (e.key === "Escape") setModalOpen(false);
      };
      window.addEventListener("keydown", handleEsc);
      return () => {
        document.body.style.overflow = prev;
        window.removeEventListener("keydown", handleEsc);
      };
    }
  }, [modalOpen]);

  const hoverTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    // Graceful 220ms buffer so accidental mouse slips don't cause sudden snapping
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 220);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const nextSlide = (e) => {
    if (e) e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = (e) => {
    if (e) e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <>
      <section 
        className={`wt-slider-section ${isHovered ? "wt-is-hovered" : ""}`} 
        aria-label="Winter Tire Offers"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="container wt-slider-container">
          {/* ── Thin Bar (Always visible) ── */}
          <div 
            className="wt-slider-thin-bar"
            onClick={() => setIsHovered((prev) => !prev)}
            role="button"
            tabIndex={0}
            aria-expanded={isHovered}
          >
            {/* Left: Badge + Rotating Ticker */}
            <div className="wt-thin-left">
              <span className="wt-slider-live-dot" />
              <span className="wt-thin-tag">
                <Snowflake size={13} style={{ display: "inline", verticalAlign: "-1px", marginRight: 4 }} />
                WINTER TIRE OFFER
              </span>
              <span className="wt-thin-divider">|</span>
              <div className="wt-thin-ticker-window">
                <span key={activeTickerIdx} className="wt-thin-ticker-text">
                  {tickerHighlights[activeTickerIdx]}
                </span>
              </div>
            </div>

            {/* Right: Expand Hint & Quick Call */}
            <div className="wt-thin-right">
              {/* Controls appear when expanded */}
              <div className={`wt-expanded-controls ${isHovered ? "visible" : ""}`}>
                <div className="wt-slider-dots">
                  {[0, 1, 2, 3].map((idx) => (
                    <button
                      key={idx}
                      className={`wt-slider-dot ${currentSlide === idx ? "active" : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentSlide(idx);
                      }}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
                <div className="wt-slider-arrows">
                  <button 
                    className="wt-slider-arrow" 
                    onClick={prevSlide} 
                    aria-label="Previous tire offer"
                  >
                    <ChevronLeft size={15} />
                  </button>
                  <button 
                    className="wt-slider-arrow" 
                    onClick={nextSlide} 
                    aria-label="Next tire offer"
                  >
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>

              {/* Direct Call Button in Thin Bar */}
              <a 
                href="tel:6473338463" 
                className="wt-thin-phone-btn"
                onClick={(e) => e.stopPropagation()}
              >
                <Phone size={12} />
                <span>647-333-8463</span>
              </a>

              {/* Expand indicator pill */}
              <div className="wt-thin-expand-pill">
                <span className="wt-expand-label-desktop">{isHovered ? "Collapse" : "Hover to view deals"}</span>
                <span className="wt-expand-label-mobile">{isHovered ? "Close" : "Deals"}</span>
                <ChevronDown 
                  size={13} 
                  className={`wt-expand-chevron ${isHovered ? "expanded" : ""}`} 
                />
              </div>
            </div>
          </div>

          {/* ── Expandable Body (Smooth expansion on hover) ── */}
          <div className="wt-slider-body">
            <div className="wt-slider-expand-inner">
              <div className="wt-slider-track-window">
              <div 
                className="wt-slider-track" 
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {/* ── Slide 0: Main Event Banner ── */}
                <div className={`wt-slide ${currentSlide === 0 ? "active" : ""}`}>
                  <div className="wt-hero-slide-grid">
                    <div className="wt-slide-info">
                      <div className="wt-brand-badges">
                        <span className="wt-brand-pill">MICHELIN</span>
                        <span className="wt-brand-pill">UNIROYAL</span>
                        <span className="wt-brand-pill">BFGOODRICH</span>
                        <span className="wt-badge-discount">WHOLESALER &amp; BODY SHOP DISCOUNT</span>
                      </div>

                      <h2 className="wt-slide-title">
                        Winter Ready &bull; Drive Confident
                      </h2>
                      
                      <p className="wt-slide-desc">
                        Over <strong>600+ brand-new winter tires</strong> in stock now. Cash &amp; carry pricing for repair shops, fleet operators, and retail drivers.
                      </p>

                      <div className="wt-slide-perks">
                        <span className="wt-perk-item">
                          <Truck size={14} className="wt-perk-icon" /> Free local delivery &le; 20 km (2x daily)
                        </span>
                        <span className="wt-perk-item">
                          <CheckCircle2 size={14} className="wt-perk-icon" /> Cash &amp; Carry Only
                        </span>
                        <span className="wt-perk-item">
                          <Sparkles size={14} className="wt-perk-icon" /> From <strong>$91.02</strong>
                        </span>
                      </div>

                      <div className="wt-slide-actions">
                        <a href="tel:6473338463" className="btn btn-primary wt-btn-call">
                          <Phone size={14} /> Call 647-333-8463
                        </a>
                        <button 
                          type="button" 
                          onClick={(e) => {
                            e.stopPropagation();
                            setModalOpen(true);
                          }} 
                          className="btn btn-secondary wt-btn-flyer"
                        >
                          <Maximize2 size={14} /> View 600+ Tire Price Sheet
                        </button>
                      </div>
                    </div>

                    {/* Flyer visual card */}
                    <div 
                      className="wt-flyer-card" 
                      onClick={(e) => {
                        e.stopPropagation();
                        setModalOpen(true);
                      }}
                      role="button"
                      tabIndex={0}
                      aria-label="Click to enlarge 600+ Tire Price Sheet"
                    >
                      <div className="wt-flyer-card-inner">
                        <span className="wt-corner wt-corner--tl" />
                        <span className="wt-corner wt-corner--tr" />
                        <span className="wt-corner wt-corner--bl" />
                        <span className="wt-corner wt-corner--br" />
                        <img 
                          src="/images/winter-tires-ad.jpg" 
                          alt="Winter Ready Tires Flyer - MBMR Auto" 
                          className="wt-flyer-thumb" 
                        />
                        <div className="wt-flyer-overlay">
                          <Maximize2 size={18} />
                          <span>Enlarge Sheet</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Slide 1: 15" - 16" Tires ── */}
                <div className={`wt-slide ${currentSlide === 1 ? "active" : ""}`}>
                  <div className="wt-deals-slide">
                    <div className="wt-deals-header">
                      <div>
                        <span className="badge badge-primary" style={{ fontSize: "0.72rem", marginBottom: 6 }}>
                          15″ &amp; 16″ SIZES
                        </span>
                        <h3 className="wt-deals-title">Passenger Cars, Crossovers &amp; Small SUVs</h3>
                      </div>
                      <a href="tel:6473338463" className="wt-deals-call-link">
                        <Phone size={14} /> Call 647-333-8463 to Reserve
                      </a>
                    </div>

                    <div className="wt-deals-grid">
                      <div className="wt-deal-card">
                        <span className="wt-deal-brand">UNIROYAL</span>
                        <div className="wt-deal-model">Tiger Paw Ice &amp; Snow 4</div>
                        <div className="wt-deal-size">P205/55R16 91T</div>
                        <div className="wt-deal-meta">
                          <span className="wt-deal-qty">48 In Stock</span>
                          <span className="wt-deal-price">$102.03</span>
                        </div>
                      </div>

                      <div className="wt-deal-card">
                        <span className="wt-deal-brand">UNIROYAL</span>
                        <div className="wt-deal-model">Tiger Paw Ice &amp; Snow 4</div>
                        <div className="wt-deal-size">P215/55R16 93T</div>
                        <div className="wt-deal-meta">
                          <span className="wt-deal-qty">20 In Stock</span>
                          <span className="wt-deal-price">$129.92</span>
                        </div>
                      </div>

                      <div className="wt-deal-card">
                        <span className="wt-deal-brand">MICHELIN</span>
                        <div className="wt-deal-model">X-Ice Snow</div>
                        <div className="wt-deal-size">P205/55R16 94H</div>
                        <div className="wt-deal-meta">
                          <span className="wt-deal-qty">42 In Stock</span>
                          <span className="wt-deal-price">$169.55</span>
                        </div>
                      </div>

                      <div className="wt-deal-card">
                        <span className="wt-deal-brand">MICHELIN</span>
                        <div className="wt-deal-model">X-Ice Snow+</div>
                        <div className="wt-deal-size">P205/55R16 94H XL</div>
                        <div className="wt-deal-meta">
                          <span className="wt-deal-qty">29 In Stock</span>
                          <span className="wt-deal-price">$174.69</span>
                        </div>
                      </div>
                    </div>

                    <div className="wt-deals-footer">
                      <span>* + HST &amp; Environmental Fees &bull; Cash &amp; Carry &bull; While supplies last</span>
                      <button 
                        type="button" 
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalOpen(true);
                        }} 
                        className="wt-deals-sheet-btn"
                      >
                        View all 15″–16″ tire sizes &rarr;
                      </button>
                    </div>
                  </div>
                </div>

                {/* ── Slide 2: 17" - 18" Tires ── */}
                <div className={`wt-slide ${currentSlide === 2 ? "active" : ""}`}>
                  <div className="wt-deals-slide">
                    <div className="wt-deals-header">
                      <div>
                        <span className="badge badge-primary" style={{ fontSize: "0.72rem", marginBottom: 6 }}>
                          17″ &amp; 18″ SIZES
                        </span>
                        <h3 className="wt-deals-title">SUVs, Light Trucks &amp; Performance Vehicles</h3>
                      </div>
                      <a href="tel:6473338463" className="wt-deals-call-link">
                        <Phone size={14} /> Call 647-333-8463 to Reserve
                      </a>
                    </div>

                    <div className="wt-deals-grid">
                      <div className="wt-deal-card">
                        <span className="wt-deal-brand">UNIROYAL</span>
                        <div className="wt-deal-model">Tiger Paw Ice &amp; Snow 4</div>
                        <div className="wt-deal-size">P195/65R15 91T</div>
                        <div className="wt-deal-meta">
                          <span className="wt-deal-qty">12 In Stock</span>
                          <span className="wt-deal-price">$91.02</span>
                        </div>
                      </div>

                      <div className="wt-deal-card">
                        <span className="wt-deal-brand">MIRAGE</span>
                        <div className="wt-deal-model">MR-W562 Winter</div>
                        <div className="wt-deal-size">P235/65R17 108H XL</div>
                        <div className="wt-deal-meta">
                          <span className="wt-deal-qty">Wholesale</span>
                          <span className="wt-deal-price">$101.20</span>
                        </div>
                      </div>

                      <div className="wt-deal-card">
                        <span className="wt-deal-brand">BFGOODRICH</span>
                        <div className="wt-deal-model">Winter T/A KSI</div>
                        <div className="wt-deal-size">P215/60R16 95T</div>
                        <div className="wt-deal-meta">
                          <span className="wt-deal-qty">Special Batch</span>
                          <span className="wt-deal-price">$141.66</span>
                        </div>
                      </div>

                      <div className="wt-deal-card">
                        <span className="wt-deal-brand">MICHELIN</span>
                        <div className="wt-deal-model">X-Ice Snow</div>
                        <div className="wt-deal-size">P215/70R16 100T XL</div>
                        <div className="wt-deal-meta">
                          <span className="wt-deal-qty">Ready Stock</span>
                          <span className="wt-deal-price">$185.70</span>
                        </div>
                      </div>
                    </div>

                    <div className="wt-deals-footer">
                      <span>* + HST &amp; Environmental Fees &bull; Cash &amp; Carry &bull; While supplies last</span>
                      <button 
                        type="button" 
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalOpen(true);
                        }} 
                        className="wt-deals-sheet-btn"
                      >
                        View all 17″–18″ tire sizes &rarr;
                      </button>
                    </div>
                  </div>
                </div>

                {/* ── Slide 3: Wholesaler & Delivery Perks ── */}
                <div className={`wt-slide ${currentSlide === 3 ? "active" : ""}`}>
                  <div className="wt-perks-slide">
                    <div className="wt-perks-content">
                      <span className="badge badge-primary" style={{ fontSize: "0.72rem", marginBottom: 6 }}>
                        WHOLESALE &amp; FLEET PRIVILEGES
                      </span>
                      <h3 className="wt-perks-title">Body Shop &amp; Repair Facility Volume Discounts</h3>
                      <p className="wt-perks-desc">
                        Fast turnaround on high-demand Michelin, Uniroyal, and BFGoodrich tires for your shop.
                      </p>

                      <div className="wt-perks-cards">
                        <div className="wt-feature-box">
                          <div className="wt-feature-icon"><Truck size={18} /></div>
                          <div>
                            <div className="wt-feature-name">Free Delivery &le; 20 KM</div>
                            <div className="wt-feature-sub">2 times a day fast &amp; convenient direct to your shop</div>
                          </div>
                        </div>

                        <div className="wt-feature-box">
                          <div className="wt-feature-icon"><ShieldCheck size={18} /></div>
                          <div>
                            <div className="wt-feature-name">600+ Tires In Stock</div>
                            <div className="wt-feature-sub">Pick up immediately at 1275 Finch Ave W, North York</div>
                          </div>
                        </div>

                        <div className="wt-feature-box">
                          <div className="wt-feature-icon"><Sparkles size={18} /></div>
                          <div>
                            <div className="wt-feature-name">Cash &amp; Carry Savings</div>
                            <div className="wt-feature-sub">Bottom-line wholesale rates with no middleman markup</div>
                          </div>
                        </div>
                      </div>

                      <div className="wt-perks-cta">
                        <a href="tel:6473338463" className="btn btn-primary wt-btn-call">
                          <Phone size={15} /> Call Order Hotline: 647-333-8463
                        </a>
                        <button 
                          type="button" 
                          onClick={(e) => {
                            e.stopPropagation();
                            setModalOpen(true);
                          }} 
                          className="btn btn-secondary wt-btn-flyer"
                        >
                          <Maximize2 size={14} /> Open Full Price Sheet
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* ── Full Price Sheet Image Lightbox Modal ── */}
      {modalOpen && createPortal(
        <div 
          className="wt-modal-backdrop" 
          onClick={() => setModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Full Winter Tire Price Sheet"
        >
          <div className="wt-modal-shell" onClick={(e) => e.stopPropagation()}>
            <span className="wp-corner wp-corner--tl" />
            <span className="wp-corner wp-corner--tr" />
            <span className="wp-corner wp-corner--bl" />
            <span className="wp-corner wp-corner--br" />
            <span className="wp-border-glow" />

            <button 
              className="winter-popup-close" 
              onClick={() => setModalOpen(false)}
              aria-label="Close sheet"
            >
              <X size={18} />
            </button>

            <div className="wt-modal-img-wrap">
              <img 
                src="/images/winter-tires-ad.jpg" 
                alt="Winter Tires 600+ In Stock Full Price Sheet" 
                className="wt-modal-img" 
              />
            </div>

            <div className="wt-modal-footer">
              <a href="tel:6473338463" className="winter-popup-btn winter-popup-btn--primary">
                <Phone size={15} /> Call 647-333-8463 to Order
              </a>
              <button 
                type="button" 
                onClick={() => setModalOpen(false)} 
                className="winter-popup-btn winter-popup-btn--secondary"
              >
                Close Sheet
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
