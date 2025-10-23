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

export const BlogOrtodontieAdultiPage: React.FC = () => {
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
            <Badge className="bg-[#9f8453] text-white mb-4">Ortodonție</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6 leading-tight">
            Ortodonția la Adulți: Nu Este Niciodată Prea Târziu
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <img
              src="https://assets.polymet.ai/sharp-cyan-946022"
              alt="Ortodonție pentru adulți"
              className="w-full h-80 md:h-96 object-cover rounded-lg mb-8"
            />

            <div className="text-neutral-700 space-y-6">
              <p className="text-xl leading-relaxed text-neutral-600 mb-8">
                Mulți adulți cred că este prea târziu pentru a-și corecta
                dinții. Realitatea este că vârsta nu reprezintă o barieră în
                ortodonție, iar tehnologiile moderne oferă soluții discrete și
                eficiente pentru adulți.
              </p>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                De ce aleg adulții tratamentul ortodontic?
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Îmbunătățirea esteticii zâmbetului</li>
                <li>Corectarea problemelor de funcționalitate</li>
                <li>Prevenirea problemelor dentare viitoare</li>
                <li>Creșterea încrederii în sine</li>
                <li>Îmbunătățirea igienei orale</li>
              </ul>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                Opțiuni moderne pentru adulți
              </h2>

              <h3 className="text-xl font-medium text-neutral-900 mt-6 mb-3">
                1. Aparate linguale
              </h3>
              <p>
                Se montează pe partea interioară a dinților, fiind complet
                invizibile. Ideale pentru profesioniștii care doresc discreție
                maximă.
              </p>

              <h3 className="text-xl font-medium text-neutral-900 mt-6 mb-3">
                2. Aliniatori transparenți (Invisalign)
              </h3>
              <p>
                Gutiere transparente, detașabile, care se schimbă la fiecare 2
                săptămâni. Permit o igienă orală normală și sunt aproape
                invizibile.
              </p>

              <h3 className="text-xl font-medium text-neutral-900 mt-6 mb-3">
                3. Aparate ceramice
              </h3>
              <p>
                Brackets din ceramică de culoarea dinților, mult mai discrete
                decât aparatele metalice tradiționale.
              </p>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                Durata tratamentului la adulți
              </h2>
              <p>
                Tratamentul ortodontic la adulți durează în medie 18-24 de luni,
                în funcție de complexitatea cazului. Deși poate fi puțin mai
                lung decât la copii, rezultatele sunt la fel de eficiente.
              </p>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                Beneficiile pe termen lung
              </h2>
              <p>
                Dinții aliniați corect sunt mai ușor de curățat, reduc riscul de
                carii și boli gingivale, și pot preveni uzura anormală. De
                asemenea, îmbunătățesc funcția de masticație și pot reduce
                problemele de ATM.
              </p>

              <div className="bg-[#bda476]/10 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-medium text-neutral-900 mb-3">
                  Mitul vârstei în ortodonție
                </h3>
                <p className="text-neutral-700">
                  "Cel mai în vârstă pacient pe care l-am tratat avea 65 de ani.
                  Dinții se pot mișca la orice vârstă, atâta timp cât gingiile
                  și osul de susținere sunt sănătoase." - Dr. Mihai Georgescu
                </p>
              </div>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                Primul pas: consultația
              </h2>
              <p>
                Consultația inițială include examinarea clinică, radiografii și
                discutarea opțiunilor de tratament. Fiecare caz este unic și
                necesită o abordare personalizată.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#323231] to-[#423723]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Gata să îți transformi zâmbetul?
          </h2>
          <p className="text-xl text-[#bda476] mb-8">
            Programează o consultație ortodontică și descoperă care este cea mai
            bună opțiune pentru tine
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => (window.location.href = "tel:+40767702703")}
              size="lg"
              className="bg-[#9f8453] hover:bg-[#bda476] text-white px-8"
            >
              Consultație Ortodontică
            </Button>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white hover:bg-white hover:text-neutral-900 px-8"
              >
                Vezi Opțiunile
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
