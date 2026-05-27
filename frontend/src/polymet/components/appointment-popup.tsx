import React, { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "optima_popup_seen";

type Status = "idle" | "loading" | "success" | "error";

export function AppointmentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [emailError, setEmailError] = useState("");

  const dismiss = useCallback(() => {
    setIsOpen(false);
    localStorage.setItem(STORAGE_KEY, "1");
  }, []);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;

    let triggered = false;

    const trigger = () => {
      if (!triggered) {
        triggered = true;
        setIsOpen(true);
      }
    };

    const timer = setTimeout(trigger, 15_000);

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        clearTimeout(timer);
        trigger();
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Introduceți o adresă de email validă.");
      return;
    }

    setEmailError("");
    setStatus("loading");

    try {
      const endpoint = import.meta.env.VITE_LEAD_ENDPOINT as string;
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Server error");

      setStatus("success");
      localStorage.setItem(STORAGE_KEY, "1");
      setTimeout(dismiss, 3000);
    } catch {
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
      role="dialog"
      aria-modal="true"
    >
      {/*
        Modal: max 480px wide on desktop so it fits in viewport with room.
        Aspect ratio locked to 4:5 (1500×1875) — matches the background image exactly.
        On mobile we cap the height to 95vh so the form is never cut off.
      */}
      <div
        className="relative w-full rounded-lg overflow-hidden shadow-2xl"
        style={{
          maxWidth: "480px",
          aspectRatio: "4 / 5",
          maxHeight: "95vh",
        }}
      >
        {/* Background image — contains ALL visual content */}
        <img
          src="/assets/OPTIMA%20POP-up%20form.png"
          alt="Programare gratuită Optima Dental"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Dark gradient over the bottom ~30% so form elements are legible */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: "32%",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.93) 50%, transparent)",
          }}
        />

        {/* Close X — top-right */}
        <button
          onClick={dismiss}
          className="absolute top-3 right-3 z-10 flex items-center justify-center w-8 h-8 text-white hover:text-[#C9A961] transition-colors"
          aria-label="Închide"
        >
          <X size={20} strokeWidth={2.5} />
        </button>

        {/* Form — pinned to bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-5">
          {status === "success" ? (
            <div className="text-center py-5">
              <p className="text-white text-sm font-medium leading-snug">
                Mulțumim! Îți trimitem invitația pe email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError("");
                  }}
                  placeholder="adresa de email"
                  disabled={status === "loading"}
                  autoComplete="email"
                  className="w-full bg-transparent border border-[#C9A961] rounded-sm text-white placeholder:text-white/60 px-5 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#C9A961]/50 disabled:opacity-60 transition-colors"
                />
                {emailError && (
                  <p className="text-red-400 text-xs mt-1 px-1">{emailError}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-[#C9A961] text-white uppercase font-bold tracking-widest py-3 rounded-sm text-sm hover:bg-[#b8954e] active:bg-[#a68440] disabled:opacity-70 transition-colors"
              >
                {status === "loading" ? "Se trimite..." : "REZERVA GRATUIT"}
              </button>

              {status === "error" && (
                <p className="text-red-400 text-xs text-center">
                  A apărut o eroare. Încearcă din nou.
                </p>
              )}

              <div className="text-center pt-0.5">
                <button
                  type="button"
                  onClick={dismiss}
                  className="text-white/70 text-[13px] underline underline-offset-2 hover:text-[#C9A961] transition-colors"
                >
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
