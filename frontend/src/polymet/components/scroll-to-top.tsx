import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top using requestAnimationFrame for better timing
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      // Also scroll any scrollable containers
      const scrollableElements = document.querySelectorAll("[data-pol-id]");
      scrollableElements.forEach((el) => {
        if (el instanceof HTMLElement) {
          el.scrollTop = 0;
        }
      });
    };

    // Execute immediately
    scrollToTop();

    // Execute after next paint
    requestAnimationFrame(() => {
      scrollToTop();

      // Execute one more time after a short delay
      setTimeout(scrollToTop, 100);
    });
  }, [pathname]);

  return null;
};
