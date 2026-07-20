import React, { useEffect, useState } from "react";

const STORAGE_KEY = "optima_cookie_ok";

/**
 * Small, unobtrusive cookie consent notice. Fixed bottom-left card, compact on
 * both mobile and desktop. Remembers acceptance in localStorage so it shows
 * only once. Links to the dedicated cookies policy page.
 */
export const CookieNotice: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) !== "1") setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Notificare cookie-uri"
      className="fixed left-4 bottom-4 z-[60] w-[min(340px,calc(100vw-2rem))] rounded-xl border border-[#c9a961]/40 bg-[#14100b]/95 p-4 shadow-2xl backdrop-blur-sm"
    >
      <p className="m-0 text-[12.5px] leading-relaxed text-[#e8e0d2]">
        Folosim cookie-uri pentru a-ți oferi cea mai bună experiență.
        Continuând, ești de acord cu{" "}
        <a
          href="/politica-cookies/"
          className="text-[#c9a961] underline hover:text-[#bda476]"
        >
          Politica de cookies
        </a>
        .
      </p>
      <div className="mt-2.5 flex justify-end">
        <button
          type="button"
          onClick={accept}
          className="rounded-full bg-[#c9a961] px-6 py-2 text-[12px] font-bold uppercase tracking-wider text-[#2c1d0e] transition-colors hover:bg-[#bda476]"
        >
          Accept
        </button>
      </div>
    </div>
  );
};
