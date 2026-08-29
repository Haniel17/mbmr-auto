import { useEffect, useRef, useState } from "react";

/**
 * useScrollAnimation - High performance IntersectionObserver & Parallax Hook
 * Supports:
 * - 'zoom-in': Starts zoomed-out (scale: 0.88, blur: 4px) and smoothly zooms in to full focus
 * - 'zoom-detail': Starts wide and focuses deep into technical details
 * - 'fade-up': Smooth upward drift with scale
 * - 'perspective-flip': 3D tilt reveal
 */
export function useScrollAnimation(options = {}) {
  const containerRef = useRef(null);
  const [visibleSet, setVisibleSet] = useState(new Set());
  const {
    threshold = 0.12,
    rootMargin = "0px 0px -50px 0px",
    once = true
  } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.dataset.animId || entry.target.id;
          if (entry.isIntersecting) {
            if (id) {
              setVisibleSet((prev) => new Set([...prev, id]));
            } else {
              entry.target.classList.add("anim-active");
            }
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            if (id) {
              setVisibleSet((prev) => {
                const next = new Set(prev);
                next.delete(id);
                return next;
              });
            } else {
              entry.target.classList.remove("anim-active");
            }
          }
        });
      },
      { threshold, rootMargin }
    );

    const rootEl = containerRef.current;
    if (rootEl) {
      const targets = rootEl.querySelectorAll("[data-anim-id], [data-anim]");
      targets.forEach((target) => observer.observe(target));
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { containerRef, visibleSet };
}

/**
 * useScrollParallax - Realtime continuous scroll-based scale & translation
 * Drives smooth hero zoom and background depth shift
 */
export function useScrollParallax() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
}
