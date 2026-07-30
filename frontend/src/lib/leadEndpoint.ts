// Google Apps Script Web App that logs leads to a Google Sheet and emails the
// clinic. It handles both the appointment popup and the contact page; the
// frontend tags each submission with a `source` field so the script can route
// it to the right sheet/email. VITE_LEAD_ENDPOINT overrides this if set.
export const LEAD_ENDPOINT =
  (import.meta.env.VITE_LEAD_ENDPOINT as string | undefined) ||
  "https://script.google.com/macros/s/AKfycbzZY_vDjoVkxUcfkdyw5RPM1567tEVQTZ0wmHoVD1V3b-0hW-LVfj3pTiBTxpGqsyA/exec";

// One confirmation page for every form — the popup, the contact page and the
// standalone landing pages all land here. It is a static file in public/, not a
// React route, so navigate to it with window.location (not react-router).
export const THANK_YOU_URL = "/thank-you-page/";
