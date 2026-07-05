// Meta Conversions API (server-side) as a Netlify Function.
// Ported from the old Genezio Express backend so the access token stays
// server-side. Configure these env vars in the Netlify dashboard:
//   META_PIXEL_ID            - your Meta Pixel ID
//   META_CAPI_ACCESS_TOKEN   - Conversions API access token (secret)
//   META_API_VERSION         - optional, defaults to v21.0
//   META_CAPI_TEST_EVENT_CODE - optional, set while using Meta's Test Events tool
const crypto = require("crypto");

function sha256(value) {
  if (!value) return undefined;
  const normalized = String(value).trim().toLowerCase();
  if (!normalized) return undefined;
  return crypto.createHash("sha256").update(normalized).digest("hex");
}

function hashPhone(value) {
  if (!value) return undefined;
  let digits = String(value).replace(/\D/g, "");
  if (!digits) return undefined;
  // Romanian local numbers (07xxxxxxxx) -> E.164 digits (407xxxxxxxx)
  if (digits.startsWith("0")) digits = "40" + digits.slice(1);
  return crypto.createHash("sha256").update(digits).digest("hex");
}

function wrap(value) {
  return value ? [value] : undefined;
}

exports.handler = async (event) => {
  const cors = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: cors, body: "" };
  }
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers: cors, body: "Method Not Allowed" };
  }

  const PIXEL_ID = process.env.META_PIXEL_ID || "";
  const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN || "";
  const API_VERSION = process.env.META_API_VERSION || "v21.0";
  const TEST_EVENT_CODE = process.env.META_CAPI_TEST_EVENT_CODE || "";

  // Not configured yet: succeed quietly so the contact form isn't blocked.
  if (!PIXEL_ID || PIXEL_ID.indexOf("<<") !== -1 || !ACCESS_TOKEN) {
    return {
      statusCode: 200,
      headers: cors,
      body: JSON.stringify({ ok: true, skipped: "capi_not_configured" }),
    };
  }

  let data = {};
  try {
    data = JSON.parse(event.body || "{}");
  } catch (_) {
    data = {};
  }

  const {
    event_name,
    name,
    email,
    phone,
    first_name,
    last_name,
    fbp,
    fbc,
    event_id,
    event_source_url,
    content_name,
  } = data;

  const parts = String(name || "").trim().split(/\s+/);
  const fn = first_name || parts[0];
  const ln = last_name || parts.slice(1).join(" ");

  const headers = event.headers || {};
  const xff = headers["x-forwarded-for"] || "";
  const clientIp =
    (xff && xff.split(",")[0].trim()) ||
    headers["x-nf-client-connection-ip"] ||
    undefined;
  const userAgent = headers["user-agent"] || undefined;

  const capiEvent = {
    event_name: event_name || "Lead",
    event_time: Math.floor(Date.now() / 1000),
    event_id: event_id || undefined,
    event_source_url: event_source_url || undefined,
    action_source: "website",
    user_data: {
      em: wrap(sha256(email)),
      ph: wrap(hashPhone(phone)),
      fn: wrap(sha256(fn)),
      ln: wrap(sha256(ln)),
      client_ip_address: clientIp,
      client_user_agent: userAgent,
      fbp: fbp || undefined,
      fbc: fbc || undefined,
    },
    custom_data: content_name ? { content_name } : undefined,
  };

  const url = `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${encodeURIComponent(
    ACCESS_TOKEN
  )}`;
  const payload = { data: [capiEvent] };
  if (TEST_EVENT_CODE) payload.test_event_code = TEST_EVENT_CODE;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const json = await res.json();
    return {
      statusCode: res.ok ? 200 : 502,
      headers: cors,
      body: JSON.stringify({ ok: res.ok, response: json }),
    };
  } catch (err) {
    return {
      statusCode: 502,
      headers: cors,
      body: JSON.stringify({ ok: false, error: String(err) }),
    };
  }
};
