import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import CarPreloader from "./components/CarPreloader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFAB from "./components/WhatsAppFAB";
import BackToTop from "./components/BackToTop";
import MobileBottomBar from "./components/MobileBottomBar";
import ScrollProgressBar from "./components/ScrollProgressBar";
import Home from "./pages/Home";
import Parts from "./pages/Parts";
import GeneralContact from "./pages/GeneralContact";
import NotFound from "./pages/NotFound";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <CarPreloader />
      <ScrollToTop />
      <ScrollProgressBar />
      <div className="app-layout" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />
        <main style={{ flex: "1 0 auto" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/parts" element={<Parts />} />
            <Route path="/parts/:categorySlug" element={<Parts />} />
            <Route path="/services" element={<Navigate to="/parts" replace />} />
            <Route path="/contact" element={<GeneralContact />} />

            {/* Legacy redirects */}
            <Route path="/branches" element={<Navigate to="/parts" replace />} />
            <Route path="/branches/:id" element={<Navigate to="/parts" replace />} />
            <Route path="/branches/:id/contact" element={<Navigate to="/contact" replace />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFAB />
        <BackToTop />
        <MobileBottomBar />
      </div>
    </Router>
  );
}
