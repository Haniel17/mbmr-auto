import { useState, useEffect, useMemo } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import SEO from "../components/SEO";
import { categorySeo, pageSeo, partsCategoryPath } from "../seo/siteConfig";
import { breadcrumbSchema, faqSchema } from "../seo/structuredData";
import { 
  partCategories, 
  partsCatalog, 
  sourcingProcess, 
  partsFaqs,
  companyInfo
} from "../data/partsData";
import { 
  ShieldCheck, 
  Check, 
  ChevronDown, 
  ArrowRight, 
  Package, 
  PhoneCall, 
  Sparkles, 
  FileText 
} from "lucide-react";

export default function Parts() {
  const { categorySlug } = useParams();
  const [searchParams] = useSearchParams();
  const legacyCategoryParam = searchParams.get("category");
  const resolvedCategory =
    categorySlug && partCategories.some((c) => c.id === categorySlug)
      ? categorySlug
      : legacyCategoryParam && partCategories.some((c) => c.id === legacyCategoryParam)
        ? legacyCategoryParam
        : "all";

  const [activeCategory, setActiveCategory] = useState(resolvedCategory);
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

  // Redirect legacy ?category= query URLs to clean /parts/:slug paths
  useEffect(() => {
    if (legacyCategoryParam && !categorySlug && partCategories.some((c) => c.id === legacyCategoryParam)) {
      navigate(partsCategoryPath(legacyCategoryParam), { replace: true });
    }
  }, [legacyCategoryParam, categorySlug, navigate]);

  // Sync state when route changes (e.g. clicking category in footer from any page)
  useEffect(() => {
    setActiveCategory(resolvedCategory);
    if (resolvedCategory !== "all") {
      const tabsElement = document.querySelector(".tabs-nav");
      if (tabsElement) {
        tabsElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [resolvedCategory]);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    navigate(partsCategoryPath(catId));
  };

  const seoMeta = useMemo(() => {
    if (activeCategory !== "all" && categorySeo[activeCategory]) {
      const categoryLabel = partCategories.find((c) => c.id === activeCategory)?.label;
      return {
        title: categorySeo[activeCategory].title,
        description: categorySeo[activeCategory].description,
        keywords: categorySeo[activeCategory].keywords,
        path: partsCategoryPath(activeCategory),
        jsonLd: breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Parts Catalog", path: "/parts" },
          { name: categoryLabel, path: partsCategoryPath(activeCategory) },
        ]),
      };
    }

    return {
      title: pageSeo.parts.title,
      description: pageSeo.parts.description,
      keywords: pageSeo.parts.keywords,
      path: pageSeo.parts.path,
      jsonLd: {
        "@context": "https://schema.org",
        "@graph": [
          breadcrumbSchema(
            [
              { name: "Home", path: "/" },
              { name: "Parts Catalog", path: "/parts" },
            ],
            { includeContext: false }
          ),
          faqSchema(partsFaqs, { includeContext: false }),
        ],
      },
    };
  }, [activeCategory]);

  const partsGridSection = useScrollAnimation({ threshold: 0.05 });
  const processSection = useScrollAnimation({ threshold: 0.1 });
  const faqSection = useScrollAnimation({ threshold: 0.1 });
  const ctaSection = useScrollAnimation({ threshold: 0.15 });

  const filteredParts = activeCategory === "all"
    ? partsCatalog
    : partsCatalog.filter(p => p.category === activeCategory);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleRequestQuote = (partId) => {
    navigate(`/contact?part=${partId}`);
  };

  return (
    <div className="animate-fade-in" style={{ paddingTop: "24px" }}>
      <SEO
        title={seoMeta.title}
        description={seoMeta.description}
        keywords={seoMeta.keywords}
        path={seoMeta.path}
        jsonLd={seoMeta.jsonLd}
      />
      {/* Page Header */}
      <section className="section" style={{ paddingBottom: "36px" }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: "36px" }}>
            <div className="badge badge-primary hero-badge" style={{ marginBottom: "16px" }}>
              <Sparkles size={13} style={{ marginRight: 4, display: "inline" }} />
              {companyInfo.tagline}
            </div>
            <h1 className="hero-title" style={{ fontSize: "2.75rem", marginBottom: "16px" }}>
              Parts Offered
            </h1>
            <p className="section-subtitle" style={{ maxWidth: "700px" }}>
              Extensive selection of quality replacement parts, alternators, starters, brake components, suspension, and specialized machinery parts available at our North York depot.
            </p>
          </div>

          {/* Instant Quote & Sourcing Callout */}
          <div className="vin-callout-card">
            <div className="vin-callout-content">
              <div className="badge badge-primary" style={{ marginBottom: 10, fontSize: "0.75rem" }}>
                1275 Finch Ave W Parts Counter & GTA Sourcing
              </div>
              <h3>Need a fast price quote or stock confirmation?</h3>
              <p>
                Call our parts desk directly at <strong style={{ color: "var(--accent)" }}>{companyInfo.phone}</strong>, email <strong style={{ color: "var(--accent)" }}>{companyInfo.email}</strong>, or submit an online request with your vehicle or equipment details.
              </p>
            </div>
            <div className="flex gap-2" style={{ flexShrink: 0 }}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: "12px 24px" }}>
                <FileText size={15} /> Request Parts Quote
              </Link>
              <a
                href={`tel:${companyInfo.phone}`}
                className="btn btn-secondary"
                style={{ padding: "12px 20px" }}
              >
                <PhoneCall size={15} /> {companyInfo.phone}
              </a>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="tabs-nav">
            {partCategories.map((cat) => (
              <button
                key={cat.id}
                className={`tab-btn ${activeCategory === cat.id ? "active" : ""}`}
                onClick={() => handleCategoryChange(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Parts Grid with Zoom Detail Cards */}
          <div className="grid-2" style={{ gap: "32px" }} ref={partsGridSection.containerRef}>
            {filteredParts.map((part, idx) => {
              const isVisible = partsGridSection.visibleSet.has(`part-${part.id}`) || partsGridSection.visibleSet.has(`part-${idx}`);
              return (
                <div
                  key={part.id}
                  data-anim-id={`part-${idx}`}
                  className={`zoom-detail-card ${isVisible ? "revealed" : ""}`}
                  style={{ transitionDelay: `${(idx % 4) * 120}ms` }}
                >
                  <div className="zoom-media-frame">
                    <img src={part.image} alt={part.title} />
                    {part.badge && (
                      <span className="service-badge-floating">
                        {part.badge}
                      </span>
                    )}
                    <div className="focus-target-ring">
                      <span className="focus-pulse-dot" />
                      <span>In Stock</span>
                    </div>
                  </div>

                  <div className="service-card-body">
                    <div className="flex justify-between align-center" style={{ marginBottom: 8 }}>
                      <div className="part-status-badge">
                        <span className="part-status-dot" />
                        <span>{part.availability}</span>
                      </div>
                      <span style={{ fontSize: "0.75rem", color: "var(--accent)", fontWeight: 600 }}>
                        {part.warranty}
                      </span>
                    </div>

                    <h3 className="service-card-title">{part.title}</h3>
                    <p className="service-card-desc">{part.fullDesc}</p>

                    {/* Compatibility Box */}
                    <div className="compatibility-box">
                      <div className="compatibility-label">Compatibility &amp; Applications:</div>
                      <div className="compatibility-text">{part.compatibility}</div>
                    </div>

                    <div style={{ marginBottom: "8px" }}>
                      <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", fontWeight: 600 }}>
                        Key Specifications &amp; Features:
                      </span>
                    </div>

                    <ul className="service-features-list">
                      {part.specs.map((spec, sIdx) => (
                        <li key={sIdx} className="service-feature-item">
                          <Check size={15} className="feature-check-icon" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="service-card-footer">
                      <button
                        onClick={() => handleRequestQuote(part.id)}
                        className="btn btn-primary"
                        style={{ flex: 1 }}
                      >
                        <Package size={15} /> Inquire for Part
                      </button>
                      <a
                        href={`tel:${companyInfo.phone}`}
                        className="btn btn-secondary"
                        title="Call Parts Desk"
                      >
                        <PhoneCall size={15} /> Call Desk
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4-Step Sourcing Workflow with Zoom Reveal */}
      <section className="section">
        <div className="container" ref={processSection.containerRef}>
          <div className="section-title-wrapper">
            <span className="badge badge-primary hero-badge" style={{ marginBottom: "12px" }}>
              How We Work
            </span>
            <h2 className="section-title">The MBMR Ordering Process</h2>
            <p className="section-subtitle">
              Simple, transparent, and fast parts ordering for DIY mechanics, independent garages, and commercial fleets.
            </p>
          </div>

          <div className="process-grid">
            {sourcingProcess.map((item, idx) => {
              const isVisible = processSection.visibleSet.has(`process-${idx}`);
              return (
                <div
                  key={idx}
                  data-anim-id={`process-${idx}`}
                  className={`process-card zoom-in-init ${isVisible ? "revealed" : ""}`}
                  style={{ transitionDelay: `${idx * 120}ms` }}
                >
                  <div className="process-step-header">
                    <span className="process-step-badge">{item.step}</span>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)" }} />
                  </div>
                  <h3 className="process-card-title">{item.title}</h3>
                  <p className="process-card-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container" ref={faqSection.containerRef}>
          <div className="section-title-wrapper">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Answers regarding location, pickup, warranties, and specialized equipment coverage.
            </p>
          </div>

          <div className="faq-list">
            {partsFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              const isVisible = faqSection.visibleSet.has(`faq-${idx}`);
              return (
                <div
                  key={idx}
                  data-anim-id={`faq-${idx}`}
                  className={`faq-item zoom-in-init ${isOpen ? "open" : ""} ${isVisible ? "revealed" : ""}`}
                  style={{ transitionDelay: `${idx * 70}ms` }}
                >
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.25s ease",
                        color: isOpen ? "var(--accent)" : "var(--text-muted)",
                        flexShrink: 0
                      }}
                    />
                  </button>
                  {isOpen && (
                    <div className="faq-answer animate-fade-in">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" ref={ctaSection.containerRef}>
          <div
            data-anim-id="parts-cta"
            className={`cta-banner-luxury zoom-in-init ${
              ctaSection.visibleSet.has("parts-cta") ? "revealed" : ""
            }`}
          >
            <h2 className="cta-title">Need parts for your repair or fleet today?</h2>
            <p className="cta-subtitle">
              Visit our parts counter at 1275 Finch Ave W in North York or give our team a call for instant price and stock verification.
            </p>
            <div className="flex justify-center gap-2" style={{ flexWrap: "wrap" }}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: "14px 32px", fontSize: "0.95rem" }}>
                <FileText size={16} /> Request Parts Quotation
              </Link>
              <a
                href={`tel:${companyInfo.phone}`}
                className="btn btn-secondary"
                style={{ padding: "14px 28px", fontSize: "0.95rem" }}
              >
                <PhoneCall size={16} /> {companyInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
