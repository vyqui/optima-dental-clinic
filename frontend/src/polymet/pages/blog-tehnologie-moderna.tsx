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

export const BlogTehnologieModernaPage: React.FC = () => {
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
            <Badge className="bg-[#9f8453] text-white mb-4">Tehnologie</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6 leading-tight">
            Tehnologia Modernă în Stomatologie
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <img
              src="https://assets.polymet.ai/puzzled-teal-497676"
              alt="Tehnologie modernă în stomatologie"
              className="w-full h-80 md:h-96 object-cover rounded-lg mb-8"
            />

            <div className="text-neutral-700 space-y-6">
              <p className="text-xl leading-relaxed text-neutral-600 mb-8">
                Stomatologia modernă beneficiază de tehnologii avansate care
                revoluționează diagnosticul și tratamentele dentare. Aceste
                inovații oferă precizie mai mare, confort sporit și rezultate
                superioare pentru pacienți.
              </p>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                Imagistica dentară digitală
              </h2>

              <h3 className="text-xl font-medium text-neutral-900 mt-6 mb-3">
                Radiografia digitală
              </h3>
              <p>
                Radiografiile digitale reduc expunerea la radiații cu până la
                90% față de filmele tradiționale și oferă imagini instantanee de
                înaltă calitate care pot fi mărite și analizate în detaliu.
              </p>

              <h3 className="text-xl font-medium text-neutral-900 mt-6 mb-3">
                CBCT (Tomografia computerizată cu fascicul conic)
              </h3>
              <p>
                Această tehnologie oferă imagini 3D detaliate ale structurilor
                orale, fiind esențială pentru planificarea implanturilor,
                tratamentele endodontice complexe și chirurgia orală.
              </p>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                CAD/CAM - Restaurări în aceeași zi
              </h2>
              <p>
                Tehnologia CAD/CAM (Computer-Aided Design/Computer-Aided
                Manufacturing) permite crearea coroanelor, inlay-urilor și
                onlay-urilor ceramice într-o singură vizită, eliminând
                necesitatea amprentelor tradiționale și a restaurărilor
                temporare.
              </p>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                Laserul în stomatologie
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Tratamente gingivale:</strong> Remodelarea gingiilor
                  fără sângerare
                </li>
                <li>
                  <strong>Endodonție:</strong> Sterilizarea canalelor radiculare
                </li>
                <li>
                  <strong>Chirurgie:</strong> Incizia țesuturilor cu vindecare
                  rapidă
                </li>
                <li>
                  <strong>Albirea dentară:</strong> Activarea gelurilor de
                  albire
                </li>
              </ul>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                Microscopia în stomatologie
              </h2>
              <p>
                Microscopul dentar oferă o mărire de până la 25x, permițând
                tratamente de precizie în endodonție, parodontologie și
                chirurgie. Această tehnologie îmbunătățește semnificativ rata de
                succes a tratamentelor complexe.
              </p>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                Planificarea digitală a tratamentelor
              </h2>
              <p>
                Software-ul de planificare permite simularea rezultatelor
                înainte de tratament, oferind pacienților o vizualizare clară a
                rezultatelor așteptate și îmbunătățind comunicarea între medic
                și pacient.
              </p>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                Materialele de ultimă generație
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Ceramica zirconiu:</strong> Rezistență și estetică
                  superioară
                </li>
                <li>
                  <strong>Composite nano-hibride:</strong> Durabilitate și
                  aspect natural
                </li>
                <li>
                  <strong>Biomateriale:</strong> Compatibilitate perfectă cu
                  țesuturile
                </li>
              </ul>

              <div className="bg-[#bda476]/10 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-medium text-neutral-900 mb-3">
                  Beneficiile pentru pacienți
                </h3>
                <p className="text-neutral-700">
                  "Tehnologia modernă ne permite să oferim tratamente mai
                  precise, mai rapide și mai confortabile. Pacienții beneficiază
                  de rezultate superioare și experiențe mai plăcute în cabinetul
                  dentar." - Dr. Cristian Dumitrescu
                </p>
              </div>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                Viitorul stomatologiei
              </h2>
              <p>
                Inteligența artificială, realitatea augmentată și
                nanotechnologia vor continua să transforme stomatologia, oferind
                diagnostic automat, tratamente personalizate și materiale cu
                proprietăți îmbunătățite.
              </p>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                La clinica noastră
              </h2>
              <p>
                Investim constant în cele mai noi tehnologii pentru a oferi
                pacienților noștri cele mai avansate tratamente disponibile.
                Echipamentele de ultimă generație ne permit să realizăm
                tratamente de înaltă calitate într-un timp redus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#323231] to-[#423723]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Experimentează tehnologia modernă
          </h2>
          <p className="text-xl text-[#bda476] mb-8">
            Descoperă cum tehnologia avansată poate îmbunătăți experiența ta
            dentară
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => (window.location.href = "tel:+40767702703")}
              size="lg"
              className="bg-[#9f8453] hover:bg-[#bda476] text-white px-8"
            >
              Programează Vizita
            </Button>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white hover:bg-white hover:text-neutral-900 px-8"
              >
                Vezi Tehnologiile
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
