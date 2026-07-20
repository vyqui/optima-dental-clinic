import React, { useEffect, useState } from "react";

const KEY = "optima_cookie_consent";
const LEGACY_KEY = "optima_cookie_ok";

declare global {
  interface Window {
    loadGoogleAnalytics?: () => void;
  }
}

/**
 * Small cookie-consent notice: a slim bar pinned to the bottom of the screen,
 * compact on both mobile and desktop, with Accept / Refuz. Analytics (gtag) is
 * loaded only when the visitor accepts; the choice is remembered so the bar
 * shows once. Links to the dedicated cookies policy page.
 */
export const CookieNotice: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const c = localStorage.getItem(KEY);
      const legacy = localStorage.getItem(LEGACY_KEY) === "1";
      if (c !== "accepted" && c !== "rejected" && !legacy) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const decide = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    if (value === "accepted") {
      try {
        window.loadGoogleAnalytics?.();
      } catch {
        /* ignore */
      }
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Notificare cookie-uri"
      className="fixed left-1/2 bottom-3 z-[70] flex w-[calc(100%-24px)] max-w-[540px] -translate-x-1/2 flex-wrap items-center justify-center gap-x-3.5 gap-y-2 rounded-[10px] border border-[#c9a961]/35 bg-[#14100b]/95 px-3.5 py-2.5 shadow-xl backdrop-blur-sm"
    >
      <span className="text-[12px] leading-snug text-[#e8e0d2]">
        Folosim cookie-uri pentru analiză și marketing.{" "}
        <a
          href="/politica-cookies/"
          className="text-[#c9a961] underline hover:text-[#bda476]"
        >
          Detalii
        </a>
      </span>
      <span className="flex gap-2">
        <button
          type="button"
          onClick={() => decide("accepted")}
          className="whitespace-nowrap rounded-full bg-[#c9a961] px-[18px] py-[5px] text-[11px] font-bold uppercase tracking-wider text-[#2c1d0e] transition-colors hover:bg-[#bda476]"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => decide("rejected")}
          className="whitespace-nowrap rounded-full border border-[#c9a961]/45 bg-transparent px-[18px] py-[5px] text-[11px] font-bold uppercase tracking-wider text-[#cdbfa6] transition-colors hover:border-[#c9a961] hover:text-white"
        >
          Refuz
        </button>
      </span>
    </div>
  );
};
