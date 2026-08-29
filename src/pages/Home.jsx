import { useState } from "react";
import { Link } from "react-router-dom";
import { companyInfo } from "../data/partsData";
import { useScrollAnimation, useScrollParallax } from "../hooks/useScrollAnimation";
import GoogleReviewsShowcase from "../components/GoogleReviewsShowcase";
import SEO from "../components/SEO";
import { pageSeo, partsCategoryPath } from "../seo/siteConfig";
import { localBusinessSchema } from "../seo/structuredData";
import { 
  ShieldCheck, 
  Disc, 
  Layers, 
  Wind, 
  Zap, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  FileText, 
  ArrowRight, 
  CheckCircle2,
  PackageCheck,
  SearchCheck,
  Truck,
  RotateCcw,
  Search,
  Sparkles,
  ExternalLink,
  CircleDot,
  Car,
  Wrench,
  BadgeCheck
} from "lucide-react";

export default function Home() {
  const [partSearch, setPartSearch] = useState("");
  const scrollY = useScrollParallax();

  // Scroll animated section containers
  const whySection = useScrollAnimation({ threshold: 0.1 });
  const statsSection = useScrollAnimation({ threshold: 0.15 });
  const spotlightSection = useScrollAnimation({ threshold: 0.15 });
  const categoriesSection = useScrollAnimation({ threshold: 0.08 });
  const depotSection = useScrollAnimation({ threshold: 0.15 });

  const coreCategories = [
    {
      id: "alternators-starters",
      title: "Alternators & Starters",
      icon: <Zap size={22} />,
      desc: "Our core specialty. High-output alternators (90A–300A+), heavy-duty starters, LIN-bus regulators, and cold-weather cranking units.",
      image: "/images/parts-alternator.jpg",
      badge: "Core Specialty",
      partsList: ["High-Output Alternators", "Planetary Starter Motors", "LIN-Bus Smart Regulators", "Start-Stop Solenoids", "Overrunning Pulleys (OAP)"]
    },
    {
      id: "brakes",
      title: "Brake Parts",
      icon: <Disc size={22} />,
      desc: "Ceramic low-dust pads, semi-metallic pads, rust-coated disc rotors, brake calipers, master cylinders, and hydraulic brake lines.",
      image: "/images/parts-brakes.jpg",
      badge: "Premium Friction",
      partsList: ["Ceramic & Semi-Metallic Pads", "Coated Disc Rotors & Drums", "Loaded Brake Calipers", "Master Cylinders & ABS", "Brake Hoses & Hardware"]
    },
    {
      id: "suspension-steering",
      title: "Suspension & Steering",
      icon: <Layers size={22} />,
      desc: "Complete pre-assembled strut assemblies (quick-struts), gas shock absorbers, forged control arms, ball joints, tie rods, and steering racks.",
      image: "/images/parts-suspension.jpg",
      badge: "Chassis & Ride",
      partsList: ["Complete Quick-Struts", "Gas-Charged Shock Absorbers", "Forged Control Arms & Bushings", "Tie Rod Ends & Ball Joints", "Electric Steering Racks (EPS)"]
    },
    {
      id: "air-conditioning",
      title: "Air Conditioning Parts",
      icon: <Wind size={22} />,
      desc: "Brand-new variable-displacement AC compressors, micro-channel aluminum condensers, evaporators, heater cores, and blower motors.",
      image: "/images/parts-aircond.jpg",
      badge: "Climate Control",
      partsList: ["Brand-New AC Compressors", "Micro-Channel Condensers", "Evaporator Cooling Cores", "Expansion Valves & Driers", "HVAC Blower Motors"]
    },
    {
      id: "tires-wholesale",
      title: "Wholesale Tires",
      icon: <CircleDot size={22} />,
      desc: "Bulk all-season, winter, performance, and commercial heavy-ply tires for repair shops, fleet operators, and passenger vehicles.",
      image: "/images/parts-tires.jpg",
      badge: "Wholesale Supply",
      partsList: ["All-Season & Touring Tires", "Severe-Snow Winter Tires (3PMSF)", "Commercial 10-Ply Van Tires", "Ultra-High Performance (UHP)", "TPMS Sensors & Valve Stems"]
    },
    {
      id: "truck-parts",
      title: "Commercial & Truck Parts",
      icon: <Truck size={22} />,
      desc: "Heavy-duty 12V/24V starters, brushless high-amp alternators, air brake valves, drums, chambers, and leaf springs for commercial fleets.",
      image: "/images/parts-truck.jpg",
      badge: "Heavy-Duty & Fleet",
      partsList: ["24V Brushless Alternators", "Diesel Gear-Reduction Starters", "Air Brake Chambers & Valves", "Cast Iron Brake Drums", "Heavy-Duty Leaf Springs"]
    },
    {
      id: "body-parts",
      title: "Car Body & Collision Parts",
      icon: <ShieldCheck size={22} />,
      desc: "OEM-equivalent bumper covers, stamped steel fenders, hoods, grilles, quarter panels, and power-heated side view mirrors.",
      image: "/images/parts-body.jpg",
      badge: "Collision Quality",
      partsList: ["Front & Rear Bumper Covers", "EDP Primer Steel Fenders", "Stamped Aluminum Hoods", "Front Mesh Grilles", "Power Heated Side Mirrors"]
    },
    {
      id: "engines-powertrain",
      title: "Engines & Powertrain",
      icon: <PackageCheck size={22} />,
      desc: "Complete tested replacement engines, cylinder heads, master timing chain kits, water pumps, and heavy-duty drivetrain components.",
      image: "/images/parts-engine.jpg",
      badge: "Tested Powertrain",
      partsList: ["Complete Tested Engines", "Machined Cylinder Heads", "Master Timing Chain Kits", "Cast Impeller Water Pumps", "Heavy-Duty CV Half-Shafts"]
    },
    {
      id: "headlights-lighting",
      title: "Headlights & Lighting",
      icon: <Sparkles size={22} />,
      desc: "DOT/SAE compliant full LED projector headlight assemblies, Bi-Xenon housings, tail light clusters, fog lamps, and light bars.",
      image: "/images/parts-headlights.jpg",
      badge: "DOT / SAE Certified",
      partsList: ["Full LED Projector Headlights", "Bi-Xenon / HID Ballast Kits", "LED Cluster Tail Lights", "Bumper Fog Lamp Assemblies", "Sequential LED Turn Signals"]
    }
  ];

  const whyChooseItems = [
    { icon: <Car size={24} />, title: "Car & Truck Parts", desc: "All makes & models covered" },
    { icon: <ShieldCheck size={24} />, title: "Body & Collision Parts", desc: "Bumpers, fenders, hoods & grilles" },
    { icon: <Zap size={24} />, title: "Electrical Specialists", desc: "Alternators, starters & regulators" },
    { icon: <RotateCcw size={24} />, title: "Budget-Friendly Pricing", desc: "Quality parts, fair prices" }
  ];

  // Filter categories based on search
  const filteredCategories = partSearch.trim()
    ? coreCategories.filter((cat) => {
        const q = partSearch.toLowerCase();
        return (
          cat.title.toLowerCase().includes(q) ||
          cat.desc.toLowerCase().includes(q) ||
          cat.partsList.some((p) => p.toLowerCase().includes(q))
        );
      })
    : coreCategories;

  // Subtle parallax scale calculation for hero background
  const heroScale = Math.max(1, 1 + scrollY * 0.0003);
  const heroTranslate = scrollY * 0.25;

  return (
    <div className="animate-fade-in perspective-container">
      <SEO
        title={pageSeo.home.title}
        description={pageSeo.home.description}
        path={pageSeo.home.path}
        jsonLd={localBusinessSchema()}
      />
      {/* Hero with dynamic parallax depth and zoom */}
      <section className="hero">
        <img
          src="/images/bg-auto.jpg"
          alt="MBMR Auto Parts Depot North York"
          className="hero-image-bg"
          style={{
            transform: `scale(${heroScale}) translateY(${heroTranslate}px)`,
            transition: "transform 0.1s cubic-bezier(0.1, 0.9, 0.2, 1)"
          }}
        />
        <div className="hero-bg" />
        <div className="container">
          <div className="hero-content animate-slide-up">
            <div className="badge badge-primary hero-badge">
              <Sparkles size={13} style={{ marginRight: 4, display: "inline" }} />
              MBMR Auto &bull; North York, Toronto (GTA)
            </div>
            <h1 className="hero-title">{companyInfo.tagline}</h1>
            <p className="hero-desc">
              {companyInfo.shortDesc}
            </p>

            {/* Vehicle Type & Parts Pills - immediate clarity */}
            <div className="hero-vehicle-pills">
              <Link to="/parts" className="hero-vehicle-pill">
                <Car size={16} />
                <span>Car Parts</span>
              </Link>
              <Link to={partsCategoryPath("truck-parts")} className="hero-vehicle-pill">
                <Truck size={16} />
                <span>Truck Parts</span>
              </Link>
              <Link to={partsCategoryPath("body-parts")} className="hero-vehicle-pill">
                <ShieldCheck size={16} />
                <span>Body Parts</span>
              </Link>
              <Link to="/parts" className="hero-vehicle-pill">
                <Wrench size={16} />
                <span>All Makes & Models</span>
              </Link>
            </div>

            <div className="hero-actions">
              <Link to="/parts" className="btn btn-primary">
                Explore parts catalog <ArrowRight size={15} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                <FileText size={15} /> Request parts quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Why Choose MBMR — Value Props Strip with Zoom Reveal ——— */}
      <section className="why-strip">
        <div className="container">
          <div className="why-strip-grid" ref={whySection.containerRef}>
            {whyChooseItems.map((item, idx) => {
              const isVisible = whySection.visibleSet.has(`why-${idx}`);
              return (
                <div
                  key={idx}
                  data-anim-id={`why-${idx}`}
                  className={`why-strip-item zoom-in-init ${isVisible ? "revealed" : ""}`}
                  style={{ transitionDelay: `${idx * 80}ms` }}
                >
                  <div className="why-strip-icon">{item.icon}</div>
                  <div>
                    <div className="why-strip-title">{item.title}</div>
                    <div className="why-strip-desc">{item.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Stats Bar with Pop-in Animations */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid" ref={statsSection.containerRef}>
            {companyInfo.stats.map((stat, idx) => {
              const isVisible = statsSection.visibleSet.has(`stat-${idx}`);
              return (
                <div
                  key={idx}
                  data-anim-id={`stat-${idx}`}
                  className={`stat-item stat-item-pop ${isVisible ? "revealed" : ""}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Specialty Spotlight Banner with Ambient Glow & Zoom In */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container" ref={spotlightSection.containerRef}>
          <div
            data-anim-id="spotlight-card"
            className={`specialty-spotlight-zoom zoom-in-init ${
              spotlightSection.visibleSet.has("spotlight-card") ? "revealed" : ""
            }`}
          >
            <div className="flex justify-between align-center" style={{ flexWrap: "wrap", gap: "28px" }}>
              <div style={{ maxWidth: "720px" }}>
                <div className="badge badge-primary" style={{ marginBottom: 12, fontSize: "0.75rem" }}>
                  <Zap size={13} style={{ marginRight: 5, display: "inline" }} />
                  Specialist in Automotive Electrical
                </div>
                <h2 style={{ fontSize: "1.85rem", marginBottom: "12px", color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                  Alternators, Starters &amp; High-Output Electrical Power
                </h2>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                  {companyInfo.specialtyDesc}
                </p>
              </div>
              <div className="spotlight-actions">
                <Link to={partsCategoryPath("alternators-starters")} className="btn btn-primary">
                  View electrical catalog <ArrowRight size={15} />
                </Link>
                <a href={`tel:${companyInfo.phone}`} className="btn btn-secondary">
                  <Phone size={15} /> {companyInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Part Finder Search + 4 Core Parts Categories with Zoom Detail Lenses ——— */}
      <section className="section">
        <div className="container">
          <div className="section-title-wrapper">
            <div className="badge badge-primary hero-badge" style={{ marginBottom: "12px" }}>
              Comprehensive Inventory
            </div>
            <h2 className="section-title">Parts Offered</h2>
            <p className="section-subtitle">
              Reliable auto parts at prices that fit your budget — for routine maintenance or major repairs across all makes and models.
            </p>
          </div>

          {/* Part Finder Search Bar */}
          <div className="part-finder">
            <div className="part-finder-inner">
              <Search size={20} className="part-finder-icon" />
              <input
                type="text"
                className="part-finder-input"
                placeholder="Search parts... (e.g. alternator, brake pads, struts, compressor)"
                value={partSearch}
                onChange={(e) => setPartSearch(e.target.value)}
                id="part-finder-search"
              />
              {partSearch && (
                <button
                  className="part-finder-clear"
                  onClick={() => setPartSearch("")}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
            {partSearch && (
              <div className="part-finder-results-count">
                {filteredCategories.length} {filteredCategories.length === 1 ? "category" : "categories"} found
              </div>
            )}
          </div>

          {/* Zoom Detail Cards Grid */}
          <div className="grid-2" style={{ gap: "32px" }} ref={categoriesSection.containerRef}>
            {(partSearch.trim() ? filteredCategories : filteredCategories.slice(0, 2)).map((cat, idx) => {
              const isVisible = categoriesSection.visibleSet.has(`cat-${cat.id}`) || categoriesSection.visibleSet.has(`cat-${idx}`);
              return (
                <div
                  key={cat.id}
                  data-anim-id={`cat-${idx}`}
                  className={`zoom-detail-card ${isVisible ? "revealed" : ""}`}
                  style={{ transitionDelay: `${idx * 140}ms` }}
                >
                  {/* Media Zoom Lens Frame */}
                  <div className="zoom-media-frame">
                    <img src={cat.image} alt={cat.title} />
                    <span className="service-badge-floating">
                      {cat.badge}
                    </span>
                    <div className="focus-target-ring">
                      <span className="focus-pulse-dot" />
                      <span>Ready Stock</span>
                    </div>
                  </div>

                  <div className="category-card-content">
                    <div className="flex align-center gap-2" style={{ marginBottom: 10 }}>
                      <div style={{ color: "var(--accent)" }}>{cat.icon}</div>
                      <h3 className="category-card-title" style={{ margin: 0 }}>{cat.title}</h3>
                    </div>
                    <p className="category-card-desc">{cat.desc}</p>

                    {/* Technical Breakdown Box */}
                    <div style={{ background: "rgba(255, 255, 255, 0.02)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", padding: "14px 16px", marginBottom: "22px" }}>
                      <div style={{ fontSize: "0.725rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-muted)", fontWeight: 600, marginBottom: "10px" }}>
                        Key Components &amp; Specs:
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                        {cat.partsList.map((p, i) => (
                          <span key={i} className="zoom-spec-pill">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2" style={{ width: "100%", marginTop: "auto" }}>
                      <Link to={partsCategoryPath(cat.id)} className="btn btn-secondary" style={{ flex: 1 }}>
                        View details
                      </Link>
                      <Link to={`/contact?category=${cat.id}`} className="btn btn-primary" style={{ flex: 1 }}>
                        Get price quote
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}

            {partSearch && filteredCategories.length === 0 && (
              <div className="part-finder-empty" style={{ gridColumn: "1 / -1" }}>
                <Search size={40} style={{ color: "var(--text-muted)", marginBottom: 16 }} />
                <h3 style={{ marginBottom: 8 }}>No parts matching "{partSearch}"</h3>
                <p style={{ color: "var(--text-secondary)", marginBottom: 20 }}>
                  Can't find what you need? Contact us directly — we source parts for all makes and models.
                </p>
                <Link to="/contact" className="btn btn-primary">
                  <FileText size={15} /> Request a Custom Quote
                </Link>
              </div>
            )}
          </div>

          {/* View All Parts CTA */}
          <div style={{ marginTop: "48px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
            <Link
              to="/parts"
              className="btn btn-primary"
              style={{
                padding: "16px 40px",
                fontSize: "1rem",
                boxShadow: "0 10px 28px -4px rgba(200, 169, 126, 0.3)"
              }}
            >
              View All Parts Offered <ArrowRight size={17} style={{ marginLeft: 8 }} />
            </Link>
            <span style={{ fontSize: "0.825rem", color: "var(--text-muted)" }}>
              Explore Alternators, Starters, Brakes, Suspension, Steering &amp; AC Parts
            </span>
          </div>
        </div>
      </section>

      {/* ——— Google Customer Reviews & Star Rating Feed ——— */}
      <GoogleReviewsShowcase />

      {/* North York Parts Counter & Map with Split Zoom */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" ref={depotSection.containerRef}>
          <div className="grid-2" style={{ gap: "32px", alignItems: "center" }}>
            <div
              data-anim-id="depot-card"
              className={`card-glass zoom-in-init ${
                depotSection.visibleSet.has("depot-card") ? "revealed" : ""
              }`}
              style={{ padding: "36px" }}
            >
              <span className="badge badge-primary hero-badge" style={{ marginBottom: "16px" }}>
                Parts Counter & Pickup Depot
              </span>
              <h2 style={{ fontSize: "1.85rem", marginBottom: "14px" }}>{companyInfo.name}</h2>
              <p style={{ marginBottom: "24px", color: "var(--text-secondary)" }}>
                {companyInfo.shortDesc}
              </p>

              <div className="info-list" style={{ marginBottom: "28px" }}>
                <div className="info-item">
                  <MapPin size={18} className="info-icon" style={{ color: "var(--accent)" }} />
                  <div>
                    <div className="info-label">Address</div>
                    <div className="info-value">{companyInfo.address}</div>
                  </div>
                </div>
                <div className="info-item">
                  <Phone size={18} className="info-icon" style={{ color: "var(--accent)" }} />
                  <div>
                    <div className="info-label">Phone Hotline</div>
                    <div className="info-value">
                      <a href={`tel:${companyInfo.phone}`} style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="info-item">
                  <Mail size={18} className="info-icon" style={{ color: "var(--accent)" }} />
                  <div>
                    <div className="info-label">Email</div>
                    <div className="info-value">
                      <a href={`mailto:${companyInfo.email}`} style={{ color: "var(--text-secondary)" }}>
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="info-item">
                  <Clock size={18} className="info-icon" style={{ color: "var(--accent)" }} />
                  <div>
                    <div className="info-label">Operating Hours</div>
                    <div className="info-value">
                      Mon – Fri: {companyInfo.hours.weekdays}<br />
                      Saturday: {companyInfo.hours.saturday}<br />
                      Sunday: {companyInfo.hours.sunday}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2" style={{ flexWrap: "wrap" }}>
                <Link to="/contact" className="btn btn-primary" style={{ flex: 1 }}>
                  <FileText size={15} /> Request Parts Quote
                </Link>
                <a 
                  href={companyInfo.mapDirectLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary"
                >
                  <MapPin size={15} /> Google Maps
                </a>
              </div>
            </div>

            {/* Google Map of 1275 Finch Ave W */}
            <div
              data-anim-id="map-card"
              className={`map-card card-glass zoom-in-init ${
                depotSection.visibleSet.has("map-card") ? "revealed" : ""
              }`}
              style={{ padding: "16px", height: "100%", minHeight: "380px", transitionDelay: "150ms" }}
            >
              <div className="map-container" style={{ paddingBottom: "75%" }}>
                <iframe
                  title="MBMR Auto Location Map"
                  src={companyInfo.mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="map-footer">
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  1275 Finch Ave W, North York, ON M3J 0L5
                </span>
                <span className="badge badge-primary" style={{ fontSize: "0.7rem" }}>
                  Parts Counter Open
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
