import { Link } from "react-router-dom";
import { Home, ArrowLeft, Phone, FileText } from "lucide-react";
import { companyInfo } from "../data/partsData";
import SEO from "../components/SEO";
import { pageSeo } from "../seo/siteConfig";

export default function NotFound() {
  return (
    <div className="not-found-page animate-fade-in">
      <SEO
        title={pageSeo.notFound.title}
        description={pageSeo.notFound.description}
        path={pageSeo.notFound.path}
        noindex
      />
      <div className="container">
        <div className="not-found-content">
          <div className="not-found-code">404</div>
          <h1 className="not-found-title">Page Not Found</h1>
          <p className="not-found-desc">
            The page you're looking for doesn't exist or has been moved. 
            Let us help you find the right auto parts instead.
          </p>
          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary">
              <Home size={16} /> Go to Homepage
            </Link>
            <Link to="/parts" className="btn btn-secondary">
              <ArrowLeft size={16} /> Browse Parts
            </Link>
            <Link to="/contact" className="btn btn-outline">
              <FileText size={16} /> Request a Quote
            </Link>
          </div>
          <div className="not-found-contact">
            <p>Or call us directly:</p>
            <a href={`tel:${companyInfo.phone}`} className="not-found-phone">
              <Phone size={16} /> {companyInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
