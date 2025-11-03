import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  CalendarIcon,
  ClockIcon,
  UserIcon,
  ArrowLeftIcon,
  ShareIcon
} from "lucide-react";

export const BlogImplanturiDentarePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-[#bda476]/10 to-[#aaaaaa]/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-[#9f8453] hover:text-[#bda476] mb-8 transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Înapoi la Blog
          </Link>

          <div className="mb-6">
            <Badge className="bg-[#9f8453] text-white mb-4">Chirurgie</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6 leading-tight">
            Ghidul Complet pentru Implanturile Dentare
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <img
              src="https://assets.polymet.ai/innocent-aquamarine-995966"
              alt="Implant dentar"
              className="w-full h-80 md:h-96 object-cover rounded-lg mb-8"
            />

            <div className="text-neutral-700 space-y-6">
              <p className="text-xl leading-relaxed text-neutral-600 mb-8">
                Implanturile dentare reprezintă cea mai modernă și eficientă
                soluție pentru înlocuirea dinților lipsă. Acest ghid complet îți
                va explica tot ce trebuie să știi despre procedură, beneficii și
                îngrijirea post-operatorie.
              </p>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                Ce sunt implanturile dentare?
              </h2>
              <p>
                Un implant dentar este o rădăcină artificială din titan care se
                inserează în osul maxilar pentru a susține o coroană, punte sau
                proteză dentară. Titanul este biocompatibil și se integrează
                perfect cu osul natural.
              </p>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                Avantajele implanturilor dentare
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Aspect și funcționalitate identice cu dinții naturali</li>
                <li>Durabilitate pe termen lung (pot dura toată viața)</li>
                <li>Păstrează osul maxilar și previne resorbția</li>
                <li>Nu afectează dinții adiacenți</li>
                <li>Îmbunătățesc calitatea vieții și încrederea în sine</li>
              </ul>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                Procesul de implantare - pas cu pas
              </h2>

              <h3 className="text-xl font-medium text-neutral-900 mt-6 mb-3">
                1. Evaluarea inițială
              </h3>
              <p>
                Se realizează un examen clinic complet și radiografii 3D pentru
                a evalua cantitatea și calitatea osului disponibil.
              </p>

              <h3 className="text-xl font-medium text-neutral-900 mt-6 mb-3">
                2. Inserarea implantului
              </h3>
              <p>
                Sub anestezie locală, implantul din titan se inserează în osul
                maxilar. Procedura durează aproximativ 30-60 de minute per
                implant.
              </p>

              <h3 className="text-xl font-medium text-neutral-900 mt-6 mb-3">
                3. Perioada de vindecare (osteointegrare)
              </h3>
              <p>
                Implantul se integrează cu osul într-o perioadă de 3-6 luni. În
                această perioadă se poate purta o proteză temporară.
              </p>

              <h3 className="text-xl font-medium text-neutral-900 mt-6 mb-3">
                4. Montarea coroanei finale
              </h3>
              <p>
                După vindecarea completă, se montează coroana definitivă,
                realizată pe baza amprentelor personalizate.
              </p>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                Îngrijirea implanturilor dentare
              </h2>
              <p>
                Implanturile necesită aceeași îngrijire ca dinții naturali:
                periaj regulat, folosirea aței dentare și controale dentare la
                fiecare 6 luni. Cu îngrijire adecvată, pot dura toată viața.
              </p>

              <div className="bg-[#bda476]/10 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-medium text-neutral-900 mb-3">
                  Rata de succes
                </h3>
                <p className="text-neutral-700">
                  Implanturile dentare au o rată de succes de peste 95% și sunt
                  considerate standardul de aur în înlocuirea dinților lipsă. La
                  clinica noastră, folosim doar implanturile de cea mai înaltă
                  calitate și tehnici moderne de inserare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#323231] to-[#423723]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Interesat de implanturile dentare?
          </h2>
          <p className="text-xl text-[#bda476] mb-8">
            Programează o consultație gratuită pentru a afla dacă implanturile
            sunt potrivite pentru tine
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => (window.location.href = "tel:+40767702703")}
              size="lg"
              className="bg-[#9f8453] hover:bg-[#bda476] text-white px-8"
            >
              Programează-te Acum
            </Button>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white hover:bg-white hover:text-neutral-900 px-8"
              >
                Vezi Serviciile
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
