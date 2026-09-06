import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { companyInfo } from "../data/partsData";

export default function WhatsAppFAB() {
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(false);
  const phoneNumber = companyInfo.phoneRaw.replace(/[^0-9]/g, "");
  const message = encodeURIComponent("Hi MBMR Auto! I'd like to inquire about parts availability.");

  useEffect(() => {
    // Show after a short delay so it doesn't appear immediately on load
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={26} />
      <span className="whatsapp-fab-label">Chat with us</span>
    </a>
  );
}
