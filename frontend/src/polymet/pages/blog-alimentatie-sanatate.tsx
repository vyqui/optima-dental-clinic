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

export const BlogAlimentatieSanatatePage: React.FC = () => {
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
            <Badge className="bg-[#9f8453] text-white mb-4">Nutriție</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6 leading-tight">
            Alimentația și Sănătatea Dentară
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <img
              src="https://assets.polymet.ai/labour-maroon-577275"
              alt="Alimentație sănătoasă pentru dinți"
              className="w-full h-80 md:h-96 object-cover rounded-lg mb-8"
            />

            <div className="text-neutral-700 space-y-6">
              <p className="text-xl leading-relaxed text-neutral-600 mb-8">
                Ceea ce mănânci are un impact direct asupra sănătății dentare. O
                alimentație echilibrată nu doar că îți menține corpul sănătos,
                dar poate preveni cariile, bolile gingivale și alte probleme
                orale.
              </p>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                Alimente benefice pentru dinți
              </h2>

              <h3 className="text-xl font-medium text-neutral-900 mt-6 mb-3">
                Produse lactate
              </h3>
              <p>
                Laptele, brânza și iaurtul sunt bogate în calciu și fosfat,
                minerale esențiale pentru remineralizarea smalțului dentar.
                Brânza stimulează și producția de salivă.
              </p>

              <h3 className="text-xl font-medium text-neutral-900 mt-6 mb-3">
                Fructe și legume crocante
              </h3>
              <p>
                Merii, morcovii, țelina și alte alimente crocante acționează ca
                o "periuță de dinți naturală", ajutând la îndepărtarea plăcii
                bacteriene și stimulând gingiile.
              </p>

              <h3 className="text-xl font-medium text-neutral-900 mt-6 mb-3">
                Verdețuri cu frunze verzi
              </h3>
              <p>
                Spanacul, kale-ul și alte verdețuri sunt bogate în calciu, acid
                folic și vitamine B care promovează sănătatea gingiilor.
              </p>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                Alimente de evitat sau limitat
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Dulciuri și bomboane:</strong> Zahărul hrănește
                  bacteriile care produc acid
                </li>
                <li>
                  <strong>Băuturi carbogazoase:</strong> Acidul din aceste
                  băuturi erodează smalțul
                </li>
                <li>
                  <strong>Alimente lipicioase:</strong> Se lipesc de dinți și
                  sunt greu de îndepărtat
                </li>
                <li>
                  <strong>Citrice în exces:</strong> Acidul citric poate eroda
                  smalțul dentar
                </li>
                <li>
                  <strong>Alcool:</strong> Reduce producția de salivă și crește
                  riscul de carii
                </li>
              </ul>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                Rolul salivei în sănătatea orală
              </h2>
              <p>
                Saliva neutralizează acizii produși de bacterii, spală
                particulele de mâncare și conține enzime care combat infecțiile.
                Menținerea unei producții sănătoase de salivă este crucială.
              </p>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                Sfaturi practice pentru o alimentație prietenoasă cu dinții
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Bea multă apă, mai ales după mese</li>
                <li>Folosește o paie când bei băuturi acide</li>
                <li>Așteaptă 30-60 de minute după mâncare înainte de periaj</li>
                <li>Mestecă gumă fără zahăr după mese</li>
                <li>Limitează gustările între mese</li>
              </ul>

              <div className="bg-[#bda476]/10 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-medium text-neutral-900 mb-3">
                  Rețeta pentru dinți sănătoși
                </h3>
                <p className="text-neutral-700">
                  "O dietă echilibrată, bogată în calciu, fosfat și vitamine,
                  combinată cu o igienă orală corespunzătoare, este rețeta
                  perfectă pentru dinți sănătoși pe toată viața." - Dr. Ana
                  Marinescu
                </p>
              </div>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                Suplimentele și sănătatea dentară
              </h2>
              <p>
                Dacă dieta ta nu furnizează suficiente nutriente, suplimentele
                cu calciu, vitamina D și vitamina C pot fi benefice. Consultă
                întotdeauna medicul înainte de a lua suplimente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#323231] to-[#423723]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Vrei sfaturi personalizate de nutriție dentară?
          </h2>
          <p className="text-xl text-[#bda476] mb-8">
            Programează o consultație și află cum să îți adaptezi dieta pentru
            dinți mai sănătoși
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => (window.location.href = "tel:+40767702703")}
              size="lg"
              className="bg-[#9f8453] hover:bg-[#bda476] text-white px-8"
            >
              Consultație Nutrițională
            </Button>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white hover:bg-white hover:text-neutral-900 px-8"
              >
                Programează Controlul
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
