import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import {
  ArrowLeftIcon,
  PhoneIcon,
  CheckCircleIcon,
  AlertTriangleIcon,
  StarIcon,
  ClockIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
  ZapIcon,
  AwardIcon,
  HeartIcon,
  SparklesIcon
} from "lucide-react";

export const ServiceOdontoterapiePage: React.FC = () => {
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
                <HeartIcon className="w-3 h-3 mr-1" />
                Serviciu Esențial
              </Badge>
              <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
                <span className="font-medium text-[#bda476] bg-gradient-to-r from-[#bda476] to-[#9f8453] bg-clip-text text-transparent">
                  Odontoterapie
                </span>
              </h1>
            </div>
            <p className="text-xl text-[#bda476]/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Restaurare estetică și funcțională a dinților cu materiale de
              ultimă generație și tehnici minim invazive
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
                Odontoterapie
              </span>
            </h2>
            <p className="text-lg text-[#423723] max-w-4xl mx-auto leading-relaxed">
              La Optima Dental Clinic, tratăm cu profesionalism și precizie
              leziunile carioase, utilizând tehnici minim invazive și materiale
              de ultimă generație. Scopul nostru este să conservăm structura
              naturală a dintelui și să redăm zâmbetul pacientului într-un mod
              estetic și funcțional.
            </p>
          </div>

          {/* What is Odontotherapy */}
          <Card className="mb-12 border-0 shadow-xl bg-gradient-to-br from-white to-[#aaaaaa]/10 hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-[#9f8453] to-[#bda476] rounded-xl flex items-center justify-center">
                  <ShieldCheckIcon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-semibold text-[#323231]">
                  Ce este odontoterapia?
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                <p className="text-[#423723] leading-relaxed text-lg">
                  Odontoterapia este ramura stomatologiei care se ocupă cu
                  diagnosticarea, prevenirea și tratarea leziunilor carioase și
                  a altor afecțiuni ale țesuturilor dure dentare (smalț și
                  dentină). Aceasta vizează conservarea dintelui natural prin
                  intervenții precise și eficiente.
                </p>
                <Separator className="my-4" />

                <p className="text-[#423723] leading-relaxed">
                  Utilizăm materiale compozite de înaltă calitate și tehnici
                  moderne pentru a asigura durabilitate și estetică perfectă,
                  păstrând aspectul natural al dinților.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Symptoms Section */}
          <Card className="mb-12 border-0 shadow-xl bg-gradient-to-br from-[#bda476]/10 to-[#9f8453]/10 hover:shadow-2xl transition-all duration-500 animate-fade-in-up delay-300">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-[#9f8453] to-[#bda476] rounded-xl flex items-center justify-center">
                  <AlertTriangleIcon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-semibold text-[#9f8453]">
                  Semne care indică necesitatea tratamentului
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Sensibilitate la rece, cald sau dulce",
                  "Durere la masticație sau la atingere",
                  "Pete maronii sau negre pe suprafața dintelui",
                  "Fracturi sau margini ascuțite la nivelul unui dinte",
                  "Miros neplăcut persistent în cavitatea orală",
                  "Senzația de gol sau cavitate în dinte"
                ].map((symptom, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-colors group"
                  >
                    <div className="w-2 h-2 bg-[#9f8453] rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                    <span className="text-[#9f8453] font-medium">
                      {symptom}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Treatment Types */}
          <div className="text-center mb-12 animate-fade-in-up delay-400">
            <h2 className="text-3xl font-light text-[#323231] mb-4">
              Tratamentele noastre{" "}
              <span className="font-semibold text-[#9f8453]">
                odontoterapeutice
              </span>
            </h2>
            <p className="text-lg text-[#423723] max-w-3xl mx-auto leading-relaxed">
              Oferim o gamă completă de servicii odontoterapeutice cu materiale
              premium și tehnologii avansate.
            </p>
          </div>

          {/* Treatment Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-[#aaaaaa]/10 hover:shadow-2xl transition-all duration-500 group animate-fade-in-up delay-500">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#9f8453] to-[#bda476] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <SparklesIcon className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-[#323231]">
                    Obturații Fizionomice
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-[#423723] leading-relaxed">
                  Realizate din materiale compozite de înaltă calitate, adaptate
                  culorii dintelui, pentru o integrare estetică perfectă.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-[#aaaaaa]/10 hover:shadow-2xl transition-all duration-500 group animate-fade-in-up delay-600">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#323231] to-[#423723] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <TrendingUpIcon className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-[#323231]">
                    Reconstrucții Dentare
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-[#423723] leading-relaxed">
                  Refacerea structurii dintelui în urma pierderilor parțiale,
                  utilizând tehnici avansate pentru restabilirea
                  funcționalității și aspectului natural.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-[#aaaaaa]/10 hover:shadow-2xl transition-all duration-500 group animate-fade-in-up delay-700">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#9f8453] to-[#bda476] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ZapIcon className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-[#323231]">
                    Tratament Leziuni Non-carioase
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-[#423723] leading-relaxed">
                  Abordarea afecțiunilor precum abraziuni, eroziuni sau fisuri,
                  pentru prevenirea complicațiilor ulterioare.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Treatment Process */}
          <Card className="mb-16 border-0 shadow-xl bg-gradient-to-br from-[#9f8453]/5 to-[#bda476]/5 hover:shadow-2xl transition-all duration-500 animate-fade-in-up delay-800">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-[#9f8453] to-[#bda476] rounded-xl flex items-center justify-center">
                  <ClockIcon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-semibold text-[#323231]">
                  Etapele unui tratament odontoterapeutic
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-6">
                {[
                  "Evaluare detaliată: Examinare clinică și imagistică pentru identificarea leziunilor carioase și stabilirea planului de tratament",
                  "Îndepărtarea țesuturilor afectate: Curățarea zonei afectate pentru a elimina bacteriile și a preveni răspândirea cariei",
                  "Restaurare cu materiale biocompatibile: Aplicarea de obturații sau reconstrucții dentare care asigură durabilitate și estetică",
                  "Instrucțiuni post-tratament: Sfaturi pentru menținerea igienei orale și prevenirea apariției noilor leziuni carioase"
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#9f8453] to-[#bda476] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="text-white font-semibold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-[#423723] leading-relaxed pt-2">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Prevention Tips */}
          <Card className="mb-16 border-0 shadow-xl bg-gradient-to-br from-[#9f8453]/10 to-[#bda476]/10 hover:shadow-2xl transition-all duration-500 animate-fade-in-up delay-900">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-[#9f8453] to-[#bda476] rounded-xl flex items-center justify-center">
                  <ShieldCheckIcon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-semibold text-[#9f8453]">
                  Prevenirea cariilor dentare
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Periaj corect, de două ori pe zi, cu pastă cu fluor",
                  "Folosirea aței dentare zilnic",
                  "Alimentație echilibrată, cu mai puțin zahăr",
                  "Hidratare adecvată și evitarea ronțăielilor frecvente",
                  "Vizite regulate la stomatolog pentru controale și igienizări profesionale",
                  "Utilizarea apei de gură cu fluor"
                ].map((tip, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-colors group"
                  >
                    <CheckCircleIcon className="h-5 w-5 text-[#9f8453] group-hover:scale-110 transition-transform" />

                    <span className="text-[#9f8453] font-medium">{tip}</span>
                  </div>
                ))}
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
                Investiția în sănătatea ta orală cu prețuri corecte și
                transparente.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-[#aaaaaa]/10 hover:shadow-2xl transition-all duration-500 group relative">
                <CardHeader className="pb-4">
                  <Badge className="w-fit mb-2 bg-[#aaaaaa]/20 text-[#323231] border-[#aaaaaa]/30">
                    Consultativ
                  </Badge>
                  <CardTitle className="text-xl font-semibold text-[#323231]">
                    Consultație & Diagnostic
                  </CardTitle>
                  <div className="text-3xl font-bold text-[#9f8453] mt-2">
                    120 RON
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 text-sm text-[#423723]">
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                      Examinare clinică completă
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                      Radiografii digitale
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                      Plan de tratament personalizat
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
                    Obturații Simple
                  </CardTitle>
                  <div className="text-3xl font-bold text-[#9f8453] mt-2">
                    350-500 RON
                  </div>
                  <p className="text-sm text-[#423723]/70">per dinte</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 text-sm text-[#423723]">
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                      Materiale compozite premium
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                      Adaptare perfectă la culoare
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                      Garanție 2 ani
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                      Control inclus
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
                    Albire Profesională
                  </CardTitle>
                  <div className="text-3xl font-bold text-[#9f8453] mt-2">
                    990 RON
                  </div>
                  <p className="text-sm text-[#423723]/70">pachet complet</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 text-sm text-[#423723]">
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                      Detartraj inclus
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                      Periaj profesional
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                      Airflow inclus
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                      Rezultate imediate
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Pricing Table */}
            <Card className="mb-8 border-0 shadow-xl bg-gradient-to-br from-white to-[#aaaaaa]/10">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-semibold text-[#323231] text-center">
                  Lista Completă de Prețuri - Odontoterapie
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#9f8453] mb-3">
                      Obturații & Reconstrucții
                    </h4>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Obturație Anterioară
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        480 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Obturație Posterioară
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        380 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Obturație Posterioară Extinsă
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        500 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">Obturație de Colet</span>
                      <span className="font-semibold text-[#9f8453]">
                        350 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">Obturație CIS</span>
                      <span className="font-semibold text-[#9f8453]">
                        150 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Completare Compozit Detaliată
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        350 RON
                      </span>
                    </div>

                    <h4 className="font-semibold text-[#9f8453] mb-3 mt-6">
                      Restaurări Premium
                    </h4>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">Inlay/Onlay</span>
                      <span className="font-semibold text-[#9f8453]">
                        1700 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">Infiltrație ICON</span>
                      <span className="font-semibold text-[#9f8453]">
                        250 RON
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#9f8453] mb-3">
                      Albire & Estetice
                    </h4>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Albire Profesională + Pachet
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        990 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">Kit Albire Home</span>
                      <span className="font-semibold text-[#9f8453]">
                        800 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Gutieră Albire cu Gel / Arcadă
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        600 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">Aplicare Bijuterie</span>
                      <span className="font-semibold text-[#9f8453]">
                        800 RON
                      </span>
                    </div>

                    <h4 className="font-semibold text-[#9f8453] mb-3 mt-6">
                      Igienizare & Prevenție
                    </h4>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Pachet Detartraj + Periaj + Airflow
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        450 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Fluorizare / Arcadă
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        200 RON
                      </span>
                    </div>

                    <h4 className="font-semibold text-[#9f8453] mb-3 mt-6">
                      Tratamente Auxiliare
                    </h4>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">Coafaj Direct</span>
                      <span className="font-semibold text-[#9f8453]">
                        150 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">Coafaj Indirect</span>
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
                Oferim opțiuni flexibile de plată în rate pentru tratamentele
                complexe. Consultă-te cu echipa noastră pentru a găsi soluția
                potrivită pentru tine.
              </p>
            </div>
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
              Ai nevoie de{" "}
              <span className="font-medium text-[#bda476]">
                tratament odontoterapeutic?
              </span>
            </h2>
            <p className="text-xl text-[#bda476]/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Nu amâna tratamentul cariilor - intervenția timpurie salvează
              dinții și previne complicațiile
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

export default ServiceOdontoterapiePage;
