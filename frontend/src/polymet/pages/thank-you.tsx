import React, { useEffect } from "react";
import { THANK_YOU_URL } from "@/lib/leadEndpoint";

/**
 * Legacy route. Every form now lands on the single static confirmation page in
 * public/thank-you-page/, so this only exists to keep old links and bookmarks
 * working — it forwards there instead of rendering a second thank-you screen.
 */
export const ThankYouPage: React.FC = () => {
  useEffect(() => {
    window.location.replace(THANK_YOU_URL);
  }, []);

  return null;
};
