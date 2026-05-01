import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * On a route change:
 * - If the URL has a hash, smooth-scroll to that element (after the new page
 *   has rendered).
 * - Otherwise, jump the window to the top.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.startsWith("#") ? hash.slice(1) : hash;
      // Wait for the new route's DOM to commit before measuring/scrolling.
      const raf = requestAnimationFrame(() => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
      return () => cancelAnimationFrame(raf);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return null;
}
