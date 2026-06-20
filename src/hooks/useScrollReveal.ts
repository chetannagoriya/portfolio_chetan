import { useEffect } from "react";

/**
 * useScrollReveal
 * Adds an IntersectionObserver that toggles the `.active` class on any
 * element with the `.reveal` class once it scrolls into view.
 */
export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
