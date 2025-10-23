import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  ArrowLeftIcon,
  PhoneIcon,
  CheckCircleIcon,
  ZapIcon,
  ShieldIcon,
  CrownIcon,
  SparklesIcon,
  StarIcon,
  ShieldCheckIcon,
  AwardIcon
} from "lucide-react";

export const ServiceProteticaPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#aaaaaa]/10 via-white to-[#aaaaaa]/20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#323231] via-[#423723] to-[#0d0b08] py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b08]/60 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 bg-[#bda476]/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#9f8453]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8 animate-fade-in">
            <Link
              to="/services"
              className="inline-flex items-center text-[#bda476] hover:text-white transition-all duration-300 hover:translate-x-[-4px] group"
            >
              <ArrowLeftIcon className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-[-2px]" />
              Înapoi la Servicii
            </Link>
          </div>

          <div className="text-center space-y-6">
            <div className="animate-fade-in-up">
              <Badge className="mb-4 bg-[#bda476]/20 text-[#bda476] border-[#bda476]/30 hover:bg-[#bda476]/30">
                <AwardIcon className="w-3 h-3 mr-1" />
                Serviciu Premium
              </Badge>
              <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
                <span className="font-medium text-[#bda476] bg-gradient-to-r from-[#bda476] to-[#9f8453] bg-clip-text text-transparent">
                  Protetică Dentară
                </span>
              </h1>
            </div>
            <p className="text-xl text-[#bda476]/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Restaurarea Completă a Funcției și Esteticii Zâmbetului cu
              Tehnologii Avansate
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-light text-[#323231] mb-6">
              Excelență în{" "}
              <span className="font-semibold text-[#9f8453]">
                Protetică Dentară
              </span>
            </h2>
            <p className="text-lg text-[#423723] max-w-4xl mx-auto leading-relaxed">
              La Optima Dental Clinic, combinăm tehnologia CAD/CAM cu măiestria
              artizanală pentru a crea restaurări protetice care imită perfect
              dinții naturali, atât din punct de vedere funcțional, cât și
              estetic.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <Card className="mb-8 border-0 shadow-lg bg-gradient-to-br from-[#9f8453]/5 to-[#bda476]/5 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#9f8453] to-[#bda476] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <CrownIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-[#323231] mb-3">
                      Ce este protetica dentară?
                    </h2>
                    <p className="text-[#423723] leading-relaxed text-lg">
                      Protetica dentară este specialitatea care se ocupă cu
                      înlocuirea dinților lipsă și restaurarea celor deteriorați
                      prin diverse tipuri de proteze. Scopul este restabilirea
                      funcției masticatorii, a vorbirii și a esteticii faciale,
                      îmbunătățind semnificativ calitatea vieții pacientului.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-semibold text-[#323231] mb-6">
              Soluții protetice oferite:
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-[#323231] mb-2">
                    Coroane dentare din ceramică
                  </h3>
                  <p className="text-[#423723] text-sm">
                    Restaurări individuale din ceramică pură sau zirconiu,
                    realizate cu tehnologia CAD/CAM pentru o adaptare perfectă
                    și estetică superioară.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-[#323231] mb-2">
                    Punți dentare fixe
                  </h3>
                  <p className="text-[#423723] text-sm">
                    Înlocuirea unuia sau mai multor dinți lipsă prin proteze
                    fixe susținute de dinții adiacenți sau implanturi.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-[#323231] mb-2">
                    Proteze totale și parțiale
                  </h3>
                  <p className="text-[#423723] text-sm">
                    Soluții protetice mobile pentru înlocuirea mai multor dinți,
                    realizate din materiale moderne pentru confort și estetică
                    optimă.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-[#323231] mb-2">
                    Proteze pe implanturi
                  </h3>
                  <p className="text-[#423723] text-sm">
                    Restaurări protetice susținute de implanturi dentare,
                    oferind stabilitate superioară și confort maxim.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-[#323231] mb-2">
                    Fațete dentare din ceramică
                  </h3>
                  <p className="text-[#423723] text-sm">
                    Restaurări estetice ultra-subțiri pentru corectarea formei,
                    culorii și poziției dinților frontali.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-[#323231] mb-2">
                    Inlay/Onlay din ceramică
                  </h3>
                  <p className="text-[#423723] text-sm">
                    Restaurări indirecte pentru dinții posteriori cu defecte
                    mari, realizate în laborator pentru durabilitate superioară.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8 bg-gradient-to-r from-[#9f8453]/10 to-[#bda476]/10">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-[#323231] mb-4">
                  Avantajele proteticii moderne la Optima Dental Clinic:
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: <ZapIcon className="h-6 w-6 text-[#9f8453]" />,

                      title: "Tehnologie CAD/CAM",
                      description:
                        "pentru precizie maximă și timp redus de realizare"
                    },
                    {
                      icon: <CrownIcon className="h-6 w-6 text-[#9f8453]" />,

                      title: "Materiale premium",
                      description: "ceramică și zirconiu de înaltă calitate"
                    },
                    {
                      icon: <SparklesIcon className="h-6 w-6 text-[#9f8453]" />,

                      title: "Estetică superioară",
                      description:
                        "restaurări indistinguibile de dinții naturali"
                    },
                    {
                      icon: <ShieldIcon className="h-6 w-6 text-[#9f8453]" />,

                      title: "Durabilitate excepțională",
                      description:
                        "garanție extinsă și rezistență pe termen lung"
                    }
                  ].map((advantage, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-white p-4 rounded-lg"
                    >
                      {advantage.icon}
                      <div>
                        <h4 className="font-semibold text-[#323231] mb-1">
                          {advantage.title}
                        </h4>
                        <p className="text-sm text-[#423723]">
                          {advantage.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-white p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="h-6 w-6 text-[#9f8453] flex-shrink-0 mt-1" />

                    <div>
                      <h4 className="font-semibold text-[#323231] mb-1">
                        Colaborare cu laborator propriu
                      </h4>
                      <p className="text-sm text-[#423723]">
                        pentru control total asupra calității și timpilor de
                        lucru
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing Section */}
            <div className="mb-16 animate-fade-in-up delay-1000">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-light text-[#323231] mb-4">
                  Tarife{" "}
                  <span className="font-semibold text-[#9f8453]">
                    Transparente
                  </span>
                </h2>
                <p className="text-lg text-[#423723] max-w-3xl mx-auto leading-relaxed">
                  Investiția în restaurarea zâmbetului tău cu prețuri corecte și
                  transparente.
                </p>
              </div>

              {/* Pricing Cards Preview */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-[#aaaaaa]/10 hover:shadow-2xl transition-all duration-500 group relative">
                  <CardHeader className="pb-4">
                    <Badge className="w-fit mb-2 bg-[#aaaaaa]/20 text-[#323231] border-[#aaaaaa]/30">
                      Estetică
                    </Badge>
                    <CardTitle className="text-xl font-semibold text-[#323231]">
                      Fațete Dentare
                    </CardTitle>
                    <div className="text-3xl font-bold text-[#9f8453] mt-2">
                      2,280 RON
                    </div>
                    <p className="text-sm text-[#423723]/70">Fațetă E-Max</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2 text-sm text-[#423723]">
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                        Ceramică E-Max premium
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                        Estetică superioară
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                        Durabilitate excepțională
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl bg-gradient-to-br from-[#9f8453]/5 to-[#bda476]/5 hover:shadow-2xl transition-all duration-500 group relative border-2 border-[#9f8453]/20">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[#9f8453] text-white border-[#9f8453]">
                      Recomandat
                    </Badge>
                  </div>
                  <CardHeader className="pb-4 pt-6">
                    <CardTitle className="text-xl font-semibold text-[#323231]">
                      Coroane Dentare
                    </CardTitle>
                    <div className="text-3xl font-bold text-[#9f8453] mt-2">
                      2,250-2,280 RON
                    </div>
                    <p className="text-sm text-[#423723]/70">
                      Zirconiu / E-Max
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2 text-sm text-[#423723]">
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                        Tehnologie CAD/CAM
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                        Materiale premium
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                        Adaptare perfectă
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                        Garanție extinsă
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-[#aaaaaa]/10 hover:shadow-2xl transition-all duration-500 group relative">
                  <CardHeader className="pb-4">
                    <Badge className="w-fit mb-2 bg-[#423723]/20 text-[#323231] border-[#423723]/30">
                      Premium
                    </Badge>
                    <CardTitle className="text-xl font-semibold text-[#323231]">
                      All-on-4 / All-on-6
                    </CardTitle>
                    <div className="text-3xl font-bold text-[#9f8453] mt-2">
                      11,800+ RON
                    </div>
                    <p className="text-sm text-[#423723]/70">
                      Lucrări definitive complete
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2 text-sm text-[#423723]">
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                        Restaurare completă
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                        Planificare digitală 3D
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                        Materiale de top
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                        Rezultate durabile
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Detailed Pricing Table */}
              <Card className="mb-8 border-0 shadow-xl bg-gradient-to-br from-white to-[#aaaaaa]/10">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-semibold text-[#323231] text-center">
                    Lista Completă de Prețuri - Protetică Dentară
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-[#9f8453] mb-3">
                        Proteze & Gutiere
                      </h4>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">Splint Gutieră</span>
                        <span className="font-semibold text-[#9f8453]">
                          5,500 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">Proteză Mobilă</span>
                        <span className="font-semibold text-[#9f8453]">
                          2,000 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">Proteză Kemeny</span>
                        <span className="font-semibold text-[#9f8453]">
                          1,000 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">Gutieră Bruxism</span>
                        <span className="font-semibold text-[#9f8453]">
                          600 RON
                        </span>
                      </div>

                      <h4 className="font-semibold text-[#9f8453] mb-3 mt-6">
                        Lucrări All-on-4
                      </h4>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          All-on-4 Titan-Compozit
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          14,500 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          All-on-4 Metal-Compozit
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          11,800 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          All-on-4 Titan-Zirconiu
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          19,500 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          All-on-4 Titan-Ceramică E-Max
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          29,000 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          All-on-4 Metal-Zirconiu
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          20,000 RON
                        </span>
                      </div>

                      <h4 className="font-semibold text-[#9f8453] mb-3 mt-6">
                        Lucrări All-on-6
                      </h4>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          All-on-6 Titan-Zirconiu
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          22,500 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          All-on-6 Titan-Compozit
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          16,500 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          All-on-6 Titan-Ceramică E-Max
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          33,000 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          All-on-6 Metal-Zirconiu
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          22,000 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          All-on-6 Metal-Compozit
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          12,500 RON
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-[#9f8453] mb-3">
                        Fațete Dentare
                      </h4>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">Fațetă E-Max</span>
                        <span className="font-semibold text-[#9f8453]">
                          2,280 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Fațetă Stratificată
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          2,700 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">Fațetă Mini-Prep</span>
                        <span className="font-semibold text-[#9f8453]">
                          2,500 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Fațetă No-Prep Refractare
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          4,200 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Fațetă Compozit / Dinte
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          1,100 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Fațetă Provizorie Luxatemp
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          50 RON
                        </span>
                      </div>

                      <h4 className="font-semibold text-[#9f8453] mb-3 mt-6">
                        Coroane Dentare
                      </h4>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">Coroană E-Max</span>
                        <span className="font-semibold text-[#9f8453]">
                          2,280 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Coroană Zirconiu - E-Max
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          2,250 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Coroană Zirconiu / Implant
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          2,280 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Coroană Personalizată / Implant
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          2,200 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Coroană Provizorie / Implant
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          600 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Coroană PMMA / Implant
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          480 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">Coroană din PMMA</span>
                        <span className="font-semibold text-[#9f8453]">
                          360 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Coroană Provizorie în Cabinet
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          150 RON
                        </span>
                      </div>

                      <h4 className="font-semibold text-[#9f8453] mb-3 mt-6">
                        Alte Servicii
                      </h4>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Digital Smile Design - DSD
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          2,000 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Lucrare Sistem Rhein/6
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          8,000 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Lucrare Sistem Rhein/4
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          7,000 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Lucrare Înșurubată/Implant
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          4,800 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Bont Protetic Neodent
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          450 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Alungire Coronară / Dinte
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          850 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Alungire Coronară cu Laser
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          350 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Gingivectomie - Laser / Zonă
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          1,600 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          GC Injectabil Flow
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          2,550 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Pachet Igienizare F&F
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          800 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Ablație / Coroană
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          150 RON
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8 p-6 bg-gradient-to-r from-[#9f8453]/10 to-[#bda476]/10 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <StarIcon className="h-5 w-5 text-[#9f8453]" />

                  <h3 className="font-semibold text-[#323231]">
                    Facilități de plată
                  </h3>
                </div>
                <p className="text-[#423723] text-sm leading-relaxed">
                  Oferim opțiuni flexibile de plată în rate pentru lucrările
                  protetice complexe. Consultă-te cu echipa noastră pentru a
                  găsi soluția potrivită pentru tine.
                </p>
              </div>
            </div>

            <Card className="mb-8 bg-gradient-to-br from-[#9f8453]/10 to-[#bda476]/10 border border-[#9f8453]/20">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#9f8453] to-[#bda476] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <ShieldCheckIcon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-semibold text-[#323231] mb-2">
                    Îngrijirea Protezelor Dentare
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#9f8453] to-[#bda476] mx-auto rounded-full"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Igiena orală riguroasă cu produse specifice pentru proteze",
                    "Evitarea alimentelor foarte dure care pot deteriora protezele",
                    "Controale regulate pentru verificarea stării protezelor",
                    "Înlocuirea la timp a protezelor uzate pentru menținerea sănătății orale"
                  ].map((recommendation, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-[#9f8453]/10 hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-8 h-8 bg-[#9f8453]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <CheckCircleIcon className="h-5 w-5 text-[#9f8453]" />
                      </div>
                      <span className="text-[#423723] leading-relaxed font-medium">
                        {recommendation}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#323231] via-[#423723] to-[#0d0b08] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#bda476]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#9f8453]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-light text-white mb-6">
              Vrei să îți{" "}
              <span className="font-medium text-[#bda476]">
                restaurezi zâmbetul?
              </span>
            </h2>
            <p className="text-xl text-[#bda476]/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Descoperă soluțiile protetice moderne pentru un zâmbet perfect
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                onClick={() => (window.location.href = "tel:+40767702703")}
                size="lg"
                className="bg-gradient-to-r from-[#9f8453] to-[#bda476] hover:from-[#bda476] hover:to-[#9f8453] text-white px-10 py-4 text-lg rounded-full shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-105 group"
              >
                <PhoneIcon className="mr-3 h-5 w-5 group-hover:animate-pulse" />
                Sună Acum: 0767 702 703
              </Button>

              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#bda476] text-[#bda476] hover:bg-[#bda476] hover:text-[#323231] px-10 py-4 text-lg rounded-full bg-transparent shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-105"
                >
                  Programează Consultație
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
