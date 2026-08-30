import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import SEO from "../components/SEO";
import { pageSeo } from "../seo/siteConfig";
import { contactPageSchema } from "../seo/structuredData";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Check, 
  FileText, 
  ShieldCheck, 
  MessageCircle,
  Truck,
  Zap,
  Sparkles
} from "lucide-react";
import { companyInfo, partsCatalog } from "../data/partsData";

export default function GeneralContact() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialPart = searchParams.get("part") || "";
  const initialCategory = searchParams.get("category") || "";
  const initialEquipment = searchParams.get("equipment") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vinNumber: "",
    vehicleModel: initialEquipment ? `Equipment: ${initialEquipment}` : "",
    partCategory: initialEquipment ? "specialized-equipment" : (initialCategory || (initialPart ? partsCatalog.find(p => p.id === initialPart)?.category || "" : "")),
    partDescription: initialPart ? partsCatalog.find(p => p.id === initialPart)?.title || "" : (initialEquipment ? `Parts for ${initialEquipment}` : ""),
    message: "",
  });

  useEffect(() => {
    if (initialPart) {
      const found = partsCatalog.find(p => p.id === initialPart);
      if (found) {
        setFormData(prev => ({
          ...prev,
          partCategory: found.category,
          partDescription: found.title
        }));
      }
    } else if (initialCategory) {
      setFormData(prev => ({
        ...prev,
        partCategory: initialCategory
      }));
    } else if (initialEquipment) {
      setFormData(prev => ({
        ...prev,
        vehicleModel: `Equipment: ${initialEquipment}`,
        partCategory: "specialized-equipment",
        partDescription: `Parts for ${initialEquipment}`
      }));
    }
  }, [initialPart, initialCategory, initialEquipment]);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const contactSection = useScrollAnimation({ threshold: 0.05 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const err = {};
    if (!formData.name.trim()) err.name = "Full name is required";
    if (!formData.email.trim()) err.email = "Email address is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) err.email = "Please enter a valid email";
    if (!formData.phone.trim()) err.phone = "Phone number is required";
    if (!formData.partCategory) err.partCategory = "Please select a part category";
    if (!formData.vehicleModel.trim() && !formData.vinNumber.trim()) {
      err.vehicleModel = "Please provide your Vehicle Make/Model or Machinery Name";
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setSubmitError("");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_f2h4crj";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_nkwj05e";
    const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID || "template_qh25xgq";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "pX3gfg9CX8h2P7R9Y";

    try {
      const emailjs = await import("@emailjs/browser");
      const templateParams = {
        // Variables mapped to both custom and standard template names
        name: formData.name,
        from_name: formData.name,
        to_name: formData.name,
        email: formData.email,
        from_email: formData.email,
        to_email: formData.email,
        reply_to: formData.email,
        phone: formData.phone,
        phone_number: formData.phone,
        vehicleModel: formData.vehicleModel,
        vehicle_model: formData.vehicleModel,
        vinNumber: formData.vinNumber || "Not Provided",
        vin_number: formData.vinNumber || "Not Provided",
        partCategory: formData.partCategory,
        part_category: formData.partCategory,
        partDescription: formData.partDescription || "General Inquiry",
        part_description: formData.partDescription || "General Inquiry",
        message: formData.message || "No additional notes",
        submittedAt: new Date().toLocaleString("en-CA", { timeZone: "America/Toronto" })
      };

      // Send owner notification and customer auto-reply in parallel
      await Promise.allSettled([
        emailjs.send(serviceId, templateId, templateParams, publicKey),
        emailjs.send(serviceId, autoReplyTemplateId, templateParams, publicKey)
      ]);

      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        vinNumber: "",
        vehicleModel: "",
        partCategory: "",
        partDescription: "",
        message: ""
      });
    } catch (err) {
      console.error("EmailJS submission error:", err);
      // Even if network fails, allow success feedback or inform customer
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const FieldError = ({ msg }) => msg ? (
    <span style={{ color: "var(--error)", fontSize: "0.75rem", marginTop: 4, display: "block" }}>
      {msg}
    </span>
  ) : null;

  return (
    <div className="container contact-container animate-fade-in perspective-container" ref={contactSection.containerRef}>
      <SEO
        title={pageSeo.contact.title}
        description={pageSeo.contact.description}
        keywords={pageSeo.contact.keywords}
        path={pageSeo.contact.path}
        jsonLd={contactPageSchema()}
      />
      <div className="section-title-wrapper" style={{ marginBottom: 48 }}>
        <div className="badge badge-primary hero-badge" style={{ marginBottom: 12 }}>
          <Sparkles size={13} style={{ marginRight: 4, display: "inline" }} />
          North York Parts Depot &amp; GTA Inquiries
        </div>
        <h1 className="section-title" style={{ fontSize: "2.75rem" }}>Request a Parts Quotation</h1>
        <p className="section-subtitle">
          Get in touch with MBMR Auto for reliable auto parts at prices that fit your budget. Pickup at 1275 Finch Ave W or arrange fast GTA delivery.
        </p>
      </div>

      <div className="contact-layout">
        {/* Left: Contact Info */}
        <div className="flex flex-col gap-3">
          <div
            data-anim-id="contact-info-card"
            className={`card-glass zoom-in-init ${
              contactSection.visibleSet.has("contact-info-card") ? "revealed" : ""
            }`}
          >
            <h3 className="sidebar-title" style={{ marginBottom: 20 }}>
              North York Depot Details
            </h3>
            <div className="info-list" style={{ marginBottom: 0 }}>
              <div className="info-item">
                <MapPin size={18} className="info-icon" style={{ color: "var(--accent)" }} />
                <div>
                  <div className="info-label">Address</div>
                  <div className="info-value">
                    1275 Finch Ave W<br />
                    North York, ON M3J 0L5, Canada
                  </div>
                </div>
              </div>
              <div className="info-item">
                <Phone size={18} className="info-icon" style={{ color: "var(--accent)" }} />
                <div>
                  <div className="info-label">Phone Hotline</div>
                  <div className="info-value">
                    <a href={`tel:${companyInfo.phone}`} style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "1.05rem" }}>
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
                  <div className="info-label">Working Hours</div>
                  <div className="info-value">
                    Mon – Fri: {companyInfo.hours.weekdays}<br />
                    Saturday: {companyInfo.hours.saturday}<br />
                    Sunday: {companyInfo.hours.sunday}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            data-anim-id="specialty-card"
            className={`card-glass zoom-in-init ${
              contactSection.visibleSet.has("specialty-card") ? "revealed" : ""
            }`}
            style={{ background: "rgba(200, 169, 126, 0.04)", borderColor: "rgba(200, 169, 126, 0.2)", transitionDelay: "100ms" }}
          >
            <div className="flex align-center gap-2" style={{ marginBottom: 8 }}>
              <Zap size={18} style={{ color: "var(--accent)" }} />
              <h4 style={{ fontSize: "0.95rem", color: "var(--text-primary)" }}>Alternators &amp; Starters Specialty</h4>
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: 16 }}>
              Looking for a high-output alternator, cold-weather starter, or commercial equipment electrical component? Call our counter for instant availability.
            </p>
            <a
              href={`tel:${companyInfo.phone}`}
              className="btn btn-outline"
              style={{ width: "100%", fontSize: "0.85rem", padding: "10px 0" }}
            >
              Call {companyInfo.phone}
            </a>
          </div>

          {/* Google Maps Embed */}
          <div
            data-anim-id="contact-map"
            className={`map-container zoom-in-init ${
              contactSection.visibleSet.has("contact-map") ? "revealed" : ""
            }`}
            style={{ paddingBottom: "60%", borderRadius: "var(--radius-lg)", transitionDelay: "180ms" }}
          >
            <iframe
              title="MBMR Auto 1275 Finch Ave W Google Map"
              src={companyInfo.mapEmbed}
              loading="lazy"
            />
          </div>
        </div>

        {/* Right: Quotation Form */}
        <div
          data-anim-id="quote-form-card"
          className={`card-glass zoom-in-init ${
            contactSection.visibleSet.has("quote-form-card") ? "revealed" : ""
          }`}
          style={{ padding: 36, transitionDelay: "120ms" }}
        >
          {isSuccess ? (
            <div className="success-card">
              <div className="success-icon-wrapper">
                <Check size={28} />
              </div>
              <h3 className="success-title">Parts Request Received</h3>
              <p className="success-desc">
                Thank you for contacting MBMR Auto. Our parts team is reviewing your vehicle/equipment details and will respond with our best price and stock availability promptly.
              </p>
              <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                <button className="btn btn-primary" onClick={() => setIsSuccess(false)}>
                  Submit Another Part Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 24, paddingBottom: 16, borderBottom: "1px solid var(--border)" }}>
                <h3 style={{ fontSize: "1.25rem", marginBottom: 4 }}>Fast Quotation Form</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                  All the parts you need for all makes and models — domestic, import & commercial machinery.
                </p>
              </div>

              {isSubmitting ? (
                <div className="submitting-overlay" style={{ minHeight: 300 }}>
                  <div className="spinner" />
                  <span>Processing your request...</span>
                </div>
              ) : (
                <>
                  {/* Personal Contact */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. David Miller"
                    />
                    <FieldError msg={errors.name} />
                  </div>

                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="david@example.com"
                      />
                      <FieldError msg={errors.email} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-input"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 647-555-0199"
                      />
                      <FieldError msg={errors.phone} />
                    </div>
                  </div>

                  {/* Vehicle & Equipment */}
                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="vehicleModel">
                        Vehicle / Equipment Details *
                      </label>
                      <input
                        type="text"
                        id="vehicleModel"
                        name="vehicleModel"
                        className="form-input"
                        value={formData.vehicleModel}
                        onChange={handleChange}
                        placeholder="e.g. 2018 Ford F-150 / Snow Plow / Generator"
                      />
                      <FieldError msg={errors.vehicleModel} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="vinNumber">
                        VIN / Engine / Serial No. (Optional)
                      </label>
                      <input
                        type="text"
                        id="vinNumber"
                        name="vinNumber"
                        className="form-input"
                        value={formData.vinNumber}
                        onChange={handleChange}
                        placeholder="17-digit VIN or Engine Code"
                      />
                    </div>
                  </div>

                  {/* Category & Part Description */}
                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="partCategory">
                        Parts Category *
                      </label>
                      <select
                        id="partCategory"
                        name="partCategory"
                        className="form-select"
                        value={formData.partCategory}
                        onChange={handleChange}
                      >
                        <option value="">Select a category</option>
                        <option value="alternators-starters">1) Alternators & Starters (Specialty)</option>
                        <option value="brakes">2) Brake Parts (Pads, Rotors, Calipers, Drums)</option>
                        <option value="suspension-steering">3) Suspension & Steering (Quick-Struts, Control Arms)</option>
                        <option value="air-conditioning">4) Air Conditioning Parts (Compressors, Condensers, Evaporators)</option>
                        <option value="tires-wholesale">5) Wholesale Tires (All-Season, Winter, Commercial & Fleet)</option>
                        <option value="truck-parts">6) Commercial & Heavy Truck Parts (Starters, Alternators, Air Brakes)</option>
                        <option value="body-parts">7) Car Body Parts & Collision Panels (Bumpers, Fenders, Hoods, Mirrors)</option>
                        <option value="engines-powertrain">8) Engines & Powertrain (Engines, Cylinder Heads, Timing Kits)</option>
                        <option value="headlights-lighting">9) Headlights & Lighting (LED Headlights, Tail Lights, Fog Lamps)</option>
                        <option value="other-parts">10) Other Auto Parts & Accessories</option>
                      </select>
                      <FieldError msg={errors.partCategory} />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="partDescription">
                        Part Required or OEM Part Number
                      </label>
                      <input
                        type="text"
                        id="partDescription"
                        name="partDescription"
                        className="form-input"
                        value={formData.partDescription}
                        onChange={handleChange}
                        placeholder="e.g. 160A Alternator, Starter Motor, Brake Pads"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">
                      Additional Notes / Inquiries
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Provide any specific requirements, brand preferences, or repair urgency..."
                      style={{ minHeight: 90 }}
                    />
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                    <ShieldCheck size={16} style={{ color: "var(--accent)", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                      Quality guaranteed parts with competitive GTA pricing and reliable warranty.
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: "100%", padding: "14px 0", fontSize: "0.95rem" }}
                  >
                    <Send size={15} /> Submit Parts Quotation Request
                  </button>
                </>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
