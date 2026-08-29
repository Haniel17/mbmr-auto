import { useState, useEffect } from "react";
import MBMRLogo from "./MBMRLogo";

export default function CarPreloader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const step = prev < 30 ? 5 : prev < 70 ? 7 : 9;
        return Math.min(100, prev + step);
      });
    }, 38);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsLoaded(true);
        setTimeout(() => {
          setShouldRender(false);
        }, 600);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  if (!shouldRender) return null;

  return (
    <div className={`dark-red-preloader ${isLoaded ? "fade-out" : ""}`} aria-hidden={isLoaded}>
      {/* Deep crimson background ambiance */}
      <div className="dark-red-ambient-glow" />

      <div className="dark-red-preloader-box">
        {/* MBMR Logo with subtle breathing crimson backlight */}
        <div className="dark-red-preloader-logo">
          <MBMRLogo height={48} />
        </div>

        {/* Dark Red Precision Loading Bar */}
        <div className="dark-red-track-container">
          <div className="dark-red-track">
            <div
              className="dark-red-bar"
              style={{ width: `${progress}%` }}
            >
              <span className="dark-red-laser-flare" />
            </div>
          </div>
          
          <div className="dark-red-meta">
            <span className="dark-red-tag">LOADING AUTO PARTS</span>
            <span className="dark-red-counter">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
