import { 
  Star, 
  ExternalLink, 
  MessageSquarePlus, 
  MapPin, 
  ShieldCheck
} from "lucide-react";
import { googleReviewsSummary } from "../data/partsData";

export default function GoogleReviewsShowcase() {
  return (
    <section className="section google-reviews-section" style={{ padding: "48px 0" }}>
      <div className="container">
        {/* Google Business Rating Header & Action Card */}
        <div className="google-reviews-banner-card">
          <div className="google-badge-hero">
            {/* Google "G" Multicolored Vector Logo */}
            <div className="google-g-logo">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.04 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>
            </div>
            <div>
              <div className="google-badge-title">Google Customer Rating</div>
              <div className="google-stars-row">
                <span className="google-score">{googleReviewsSummary.rating}</span>
                <div className="google-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="google-actions">
            <a
              href={googleReviewsSummary.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary google-cta-btn"
            >
              <MessageSquarePlus size={16} /> Write a Google Review
            </a>
            <a
              href={googleReviewsSummary.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <MapPin size={16} /> View on Google Maps <ExternalLink size={13} style={{ marginLeft: 2 }} />
            </a>
          </div>
        </div>

        {/* Trust Bottom Banner */}
        <div className="reviews-bottom-banner" style={{ marginTop: "24px" }}>
          <div className="banner-badge">
            <ShieldCheck size={18} />
            <span>100% Tested &amp; Warranted Auto Parts</span>
          </div>
          <p>
            Join hundreds of satisfied repair shops, mechanics, and drivers across the GTA who rely on MBMR Auto at <strong>1275 Finch Ave W</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
