import express from "express";
import crypto from "crypto";
import { MailService } from "@genezio/email-service";
import { simpleRateLimit } from "./simpleRateLimit";

const emailReceipients = [
  "optimadental2725@gmail.com",
  "contact@optimadentalclinic.com",
  "victor@v8media.ro"
  // "d.raduandrei@gmail.com"
];

// ---- Meta Conversions API config (set these as env vars in Genezio) ----
const META_PIXEL_ID = process.env.META_PIXEL_ID || "";
const META_CAPI_ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN || "";
const META_API_VERSION = process.env.META_API_VERSION || "v21.0";
// Optional: set while using Meta's "Test Events" tool, then unset for production.
const META_TEST_EVENT_CODE = process.env.META_CAPI_TEST_EVENT_CODE || "";

// Node 18+ has a global fetch; cast it so TS does not need DOM lib types.
const doFetch = (globalThis as any).fetch as (
  url: string,
  init: any
) => Promise<any>;

const app = express();

app.use(express.json());

app.set("trust proxy", true);

// CORS — the landing page calls this function from another origin (the CDN).
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    res.sendStatus(204);
    return;
  }
  next();
});

const PORT = 8080;

// ---- helpers ----
function sha256(value?: string | null): string | undefined {
  if (!value) return undefined;
  const normalized = value.trim().toLowerCase();
  if (!normalized) return undefined;
  return crypto.createHash("sha256").update(normalized).digest("hex");
}

function hashPhone(value?: string | null): string | undefined {
  if (!value) return undefined;
  let digits = value.replace(/\D/g, "");
  if (!digits) return undefined;
  // Romanian local numbers (07xxxxxxxx) -> E.164 digits (407xxxxxxxx)
  if (digits.startsWith("0")) digits = "40" + digits.slice(1);
  return crypto.createHash("sha256").update(digits).digest("hex");
}

function clientIp(req: express.Request): string | undefined {
  const xff = (req.headers["x-forwarded-for"] as string) || "";
  const ip = xff.split(",")[0].trim() || req.ip || "";
  return ip || undefined;
}

function wrap(value?: string): string[] | undefined {
  return value ? [value] : undefined;
}

async function sendCapiEvent(event: Record<string, unknown>): Promise<void> {
  if (!META_PIXEL_ID || !META_CAPI_ACCESS_TOKEN) {
    console.warn(
      "[CAPI] skipped: META_PIXEL_ID / META_CAPI_ACCESS_TOKEN not set"
    );
    return;
  }
  const url = `https://graph.facebook.com/${META_API_VERSION}/${META_PIXEL_ID}/events?access_token=${encodeURIComponent(
    META_CAPI_ACCESS_TOKEN
  )}`;
  const payload: Record<string, unknown> = { data: [event] };
  if (META_TEST_EVENT_CODE) payload.test_event_code = META_TEST_EVENT_CODE;
  try {
    const res = await doFetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const json = await res.json();
    if (!res.ok) {
      console.error("[CAPI] error:", JSON.stringify(json));
    } else {
      console.log("[CAPI] sent", (event as any).event_name, JSON.stringify(json));
    }
  } catch (err) {
    console.error("[CAPI] request failed:", err);
  }
}

app.post("/health", (_req, res) => {
  res.status(200).json({ status: "OK" });
});

// ViewContent (page load). Browser Pixel sends the same event with the same
// event_id, and Meta deduplicates the pair.
app.post("/capi/view", async (req, res) => {
  const { event_id, event_source_url, fbp, fbc } = req.body || {};
  await sendCapiEvent({
    event_name: "ViewContent",
    event_time: Math.floor(Date.now() / 1000),
    event_id: event_id || undefined,
    event_source_url: event_source_url || undefined,
    action_source: "website",
    user_data: {
      client_ip_address: clientIp(req),
      client_user_agent: (req.headers["user-agent"] as string) || undefined,
      fbp: fbp || undefined,
      fbc: fbc || undefined
    }
  });
  res.status(200).json({ ok: true });
});

// Contact form: send the email AND a Lead conversion event.
app.post("/contact", simpleRateLimit(), async (req, res) => {
  const {
    name,
    email,
    phone,
    service,
    message,
    first_name,
    last_name,
    fbp,
    fbc,
    event_id,
    event_source_url
  } = req.body;

  if (!name || !email) {
    return res
      .status(400)
      .json({ error: "Please provide name, email, and service." });
  }

  const finalEmailText = `*Noua cerere din site:*\n\n- Name: ${name}\n- Email: ${email}\n- Service: ${service}\n- Phone: ${
    phone || "N/A"
  }\n- Message: ${message || "N/A"}`;

  const response = await MailService.sendMail({
    emailServiceToken: process.env.EMAIL_SERVICE_TOKEN || "",
    from: "noreply@mailservice.genez.io",
    to: emailReceipients,
    subject: "[Website Optima Dental Clinic] Cerere noua din site",
    text: finalEmailText
  });

  // First/last name: use explicit fields if sent, otherwise split the full name.
  const parts = (name || "").trim().split(/\s+/);
  const fn = first_name || parts[0];
  const ln = last_name || parts.slice(1).join(" ");

  await sendCapiEvent({
    event_name: "Lead",
    event_time: Math.floor(Date.now() / 1000),
    event_id: event_id || undefined,
    event_source_url: event_source_url || undefined,
    action_source: "website",
    user_data: {
      em: wrap(sha256(email)),
      ph: wrap(hashPhone(phone)),
      fn: wrap(sha256(fn)),
      ln: wrap(sha256(ln)),
      client_ip_address: clientIp(req),
      client_user_agent: (req.headers["user-agent"] as string) || undefined,
      fbp: fbp || undefined,
      fbc: fbc || undefined
    },
    custom_data: {
      content_name: service || undefined
    }
  });

  if (!response.success) {
    res.status(500).json({ error: "Failed to send email." });
    return;
  }
  res.status(200).json({ message: "Email sent successfully." });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
