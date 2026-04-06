import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon, PhoneIcon, HomeIcon, CalendarIcon } from "lucide-react";

export const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#bda476]/10 to-[#aaaaaa]/5 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Success Icon */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-24 h-24 bg-[#9f8453]/10 rounded-full flex items-center justify-center">
            <CheckCircleIcon className="h-14 w-14 text-[#9f8453]" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-light text-neutral-900 mb-4">
          Mulțumim pentru{" "}
          <span className="font-medium text-[#9f8453]">Mesaj!</span>
        </h1>

        <p className="text-xl text-neutral-600 mb-4 leading-relaxed">
          Mesajul tău a fost primit cu succes.
        </p>
        <p className="text-lg text-neutral-500 mb-12 leading-relaxed">
          Echipa noastră te va contacta în cel mai scurt timp posibil,{" "}
          <strong>în maxim 24 de ore</strong>. Apreciem încrederea acordată
          Clinicii Optima Dental.
        </p>

        {/* Divider */}
        <div className="w-16 h-px bg-[#bda476] mx-auto mb-12" />

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            asChild
            size="lg"
            className="bg-[#9f8453] hover:bg-[#423723] text-white px-8 py-4 text-lg rounded-full"
          >
            <Link to="/">
              <HomeIcon className="mr-2 h-5 w-5" />
              Înapoi Acasă
            </Link>
          </Button>

          <Button
            onClick={() => (window.location.href = "tel:+40767702703")}
            size="lg"
            variant="outline"
            className="border-2 border-[#9f8453] text-[#9f8453] hover:bg-[#9f8453] hover:text-white px-8 py-4 text-lg rounded-full"
          >
            <PhoneIcon className="mr-2 h-5 w-5" />
            Sună: 0767 702 703
          </Button>
        </div>

        {/* Info Box */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-left">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-[#bda476]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <CalendarIcon className="h-5 w-5 text-[#9f8453]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Ce urmează?
              </h3>
              <ul className="space-y-2 text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#9f8453] font-bold mt-0.5">1.</span>
                  <span>Echipa noastră va analiza mesajul tău.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9f8453] font-bold mt-0.5">2.</span>
                  <span>
                    Te vom contacta prin telefon sau email pentru a confirma
                    programarea.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9f8453] font-bold mt-0.5">3.</span>
                  <span>
                    Vei primi toate detaliile necesare pentru vizita ta la
                    clinică.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Emergency note */}
        <p className="mt-8 text-sm text-neutral-500">
          Ai o urgență dentară?{" "}
          <a
            href="tel:+40767702703"
            className="text-[#9f8453] font-medium hover:underline"
          >
            Sună-ne imediat la 0767 702 703
          </a>{" "}
          — suntem disponibili 24/7.
        </p>
      </div>
    </div>
  );
};
