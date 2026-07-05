import React, { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { LEAD_ENDPOINT } from "@/lib/leadEndpoint";

type Status = "idle" | "loading" | "success" | "error";

const COUNTRY_CODES = [
  { code: "+40", name: "Romania" },
  { code: "+1",  name: "USA / Canada" },
  { code: "+44", name: "UK" },
  { code: "+49", name: "Germania" },
  { code: "+33", name: "Franta" },
  { code: "+39", name: "Italia" },
  { code: "+34", name: "Spania" },
  { code: "+41", name: "Elvetia" },
  { code: "+43", name: "Austria" },
  { code: "+32", name: "Belgia" },
  { code: "+31", name: "Olanda" },
  { code: "+30", name: "Grecia" },
  { code: "+48", name: "Polonia" },
  { code: "+36", name: "Ungaria" },
  { code: "+373", name: "Moldova" },
  { code: "+359", name: "Bulgaria" },
  { code: "+380", name: "Ucraina" },
];

export function AppointmentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("+40");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  const dismiss = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const img = new window.Image();
    img.src = "/assets/phone-banner-popup-optima.jpg";
  }, []);

  useEffect(() => {
    let triggered = false;
    const trigger = () => {
      if (!triggered) { triggered = true; setIsOpen(true); }
    };
    const timer = setTimeout(trigger, 3_000);
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) { clearTimeout(timer); trigger(); document.removeEventListener("mouseleave", handleMouseLeave); }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => { clearTimeout(timer); document.removeEventListener("mouseleave", handleMouseLeave); };
  }, []);

  const validate = () => {
    const e: { name?: string; phone?: string } = {};
    if (!name.trim()) e.name = "Introduceti numele.";
    if (!phone.trim() || !/^\d{6,}$/.test(phone.replace(/\s/g, ""))) e.phone = "Numar de telefon invalid.";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus("loading");
    try {
      await fetch(LEAD_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          name,
          phone: countryCode + phone,
          source: "popup",
        }),
      });
      setStatus("success");
      setTimeout(dismiss, 3000);
    } catch {
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  const inputClass = "w-full bg-transparent border border-[#C9A961] rounded-sm text-white placeholder:text-white/60 px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#C9A961]/50 disabled:opacity-60 transition-colors";

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.85)" }} role="dialog" aria-modal="true">
      <div className="relative w-full rounded-lg overflow-hidden shadow-2xl"
        style={{ maxWidth: "480px", aspectRatio: "4 / 5", maxHeight: "95vh" }}>
        <img src="/assets/phone-banner-popup-optima.jpg" alt="Programare gratuita Optima Dental"
          className="absolute inset-0 w-full h-full object-cover" draggable={false} />
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{ height: "38%", background: "linear-gradient(to top, rgba(0,0,0,0.95) 55%, transparent)" }} />
        <button onClick={dismiss}
          className="absolute top-3 right-3 z-10 flex items-center justify-center w-8 h-8 text-white hover:text-[#C9A961] transition-colors"
          aria-label="Inchide"><X size={20} strokeWidth={2.5} /></button>
        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-5">
          {status === "success" ? (
            <div className="text-center py-5">
              <p className="text-white text-sm font-medium leading-snug">
                Va multumim! Va vom contacta in cel mai scurt timp.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-1.5">
              <div>
                <input type="text" value={name}
                  onChange={(e) => { setName(e.target.value); setErrors(prev => ({ ...prev, name: undefined })); }}
                  placeholder="Numele tau" disabled={status === "loading"} autoComplete="name"
                  className={inputClass} />
                {errors.name && <p className="text-red-400 text-xs mt-0.5 px-1">{errors.name}</p>}
              </div>
              <div>
                <div className="flex gap-1.5">
                  <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)}
                    disabled={status === "loading"}
                    className="bg-[#1a1209] border border-[#C9A961] rounded-sm text-white px-2 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#C9A961]/50 disabled:opacity-60 transition-colors"
                    style={{ minWidth: "88px" }}>
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.code} value={c.code} style={{ backgroundColor: "#1a1209", color: "white" }}>
                        {c.code} {c.name}
                      </option>
                    ))}
                  </select>
                  <input type="tel" value={phone}
                    onChange={(e) => { setPhone(e.target.value.replace(/[^\d\s]/g, "")); setErrors(prev => ({ ...prev, phone: undefined })); }}
                    placeholder="Numar de telefon" disabled={status === "loading"} autoComplete="tel"
                    className={`${inputClass} flex-1`} />
                </div>
                {errors.phone && <p className="text-red-400 text-xs mt-0.5 px-1">{errors.phone}</p>}
              </div>
              <button type="submit" disabled={status === "loading"}
                className="w-full bg-[#C9A961] text-white uppercase font-bold tracking-widest py-2.5 rounded-sm text-sm hover:bg-[#b8954e] active:bg-[#a68440] disabled:opacity-70 transition-colors">
                {status === "loading" ? "Se trimite..." : "REZERVA GRATUIT"}
              </button>
              {status === "error" && <p className="text-red-400 text-xs text-center">A aparut o eroare. Incearca din nou.</p>}
              <div className="text-center pt-0.5">
                <button type="button" onClick={dismiss}
                  className="text-white/70 text-[13px] underline underline-offset-2 hover:text-[#C9A961] transition-colors">
                  Nu doresc. Inchide.
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

