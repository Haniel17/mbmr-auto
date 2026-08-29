import { useEffect, useRef } from "react";

/**
 * ScrollProgressBar with Butter-Smooth Linear Interpolation (LERP)
 * Tracks scroll target in real-time and lerps the GPU scaleX transform
 * for fluid, continuous 120fps motion.
 */
export default function ScrollProgressBar() {
  const barRef = useRef(null);

  useEffect(() => {
    let currentProgress = 0;
    let targetProgress = 0;
    let animationFrameId = null;

    const updateTarget = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight > 0) {
        targetProgress = Math.min(Math.max(window.scrollY / scrollableHeight, 0), 1);
      } else {
        targetProgress = 0;
      }
    };

    // Smooth LERP (Linear Interpolation) loop
    const renderLoop = () => {
      // Lerp factor: 0.15 gives an ultra-responsive yet silky smooth glide
      currentProgress += (targetProgress - currentProgress) * 0.15;

      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${currentProgress.toFixed(4)})`;
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener("scroll", updateTarget, { passive: true });
    window.addEventListener("resize", updateTarget, { passive: true });

    updateTarget();
    currentProgress = targetProgress; // Initial sync
    renderLoop();

    return () => {
      window.removeEventListener("scroll", updateTarget);
      window.removeEventListener("resize", updateTarget);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div
      ref={barRef}
      className="scroll-progress-bar"
      aria-hidden="true"
    />
  );
}
