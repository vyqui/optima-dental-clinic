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
  SparklesIcon,
  MicroscopeIcon
} from "lucide-react";

export const ServiceEndodontiePage: React.FC = () => {
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
                <MicroscopeIcon className="w-3 h-3 mr-1" />
                Tehnologie Avansată
              </Badge>
              <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
                <span className="font-medium text-[#bda476] bg-gradient-to-r from-[#bda476] to-[#9f8453] bg-clip-text text-transparent">
                  Endodonție
                </span>{" "}
                Microscopică
              </h1>
            </div>
            <p className="text-xl text-[#bda476]/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Salvarea Dinților prin Tratamente de Canal Avansate cu Tehnologie
              de Ultimă Generație
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
              <span className="font-semibold text-[#9f8453]">Endodonție</span>
            </h2>
            <p className="text-lg text-[#423723] max-w-4xl mx-auto leading-relaxed">
              La Optima Dental Clinic, utilizăm tehnologia microscopică și
              instrumentele rotative de ultimă generație pentru a oferi
              tratamente de canal cu rata de succes de peste 95%. Salvezăm
              dinții care altfel ar trebui extrasă, menținând funcționalitatea
              și estetica naturală.
            </p>
          </div>

          {/* What is Endodontics */}
          <Card className="mb-12 border-0 shadow-xl bg-gradient-to-br from-white to-[#aaaaaa]/10 hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-[#9f8453] to-[#bda476] rounded-xl flex items-center justify-center">
                  <MicroscopeIcon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-semibold text-[#323231]">
                  Ce este endodonția?
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                <p className="text-[#423723] leading-relaxed text-lg">
                  Endodonția este ramura stomatologiei care tratează interiorul
                  dintelui, mai precis pulpa dentară (nervul dintelui) când
                  aceasta este infectată sau inflamată. Tratamentul endodontic
                  permite salvarea dinților care altfel ar trebui extrași,
                  menținând funcționalitatea și estetica naturală.
                </p>
                <Separator className="my-4" />

                <p className="text-[#423723] leading-relaxed">
                  Utilizăm tehnologia microscopică și instrumente rotative NiTi
                  pentru precizie maximă și confort sporit, asigurând o rată de
                  succes superioară.
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
                  Semne care indică necesitatea tratamentului endodontic
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Durere intensă la măsticație sau la atingere",
                  "Sensibilitate prelungită la cald sau rece",
                  "Umflături la nivelul ginției sau feței",
                  "Decolorarea dintelui (devine închis la culoare)",
                  "Durere spontană, mai ales noaptea",
                  "Senzația de pulsare în dinte"
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

          <div className="text-center mb-12 animate-fade-in-up delay-400">
            <h2 className="text-3xl font-light text-[#323231] mb-4">
              Tratamentele noastre{" "}
              <span className="font-semibold text-[#9f8453]">endodontice</span>
            </h2>
            <p className="text-lg text-[#423723] max-w-3xl mx-auto leading-relaxed">
              Oferim o gamă completă de servicii endodontice cu tehnologie
              avansată și materiale premium.
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#323231] mb-3">
                  Tratament de canal cu microscop
                </h3>
                <p className="text-[#423723]">
                  Utilizarea microscopului endodontic pentru vizualizare optimă
                  și precizie maximă în curățarea și obturarea canalelor
                  radiculare, asigurând o rată de succes superioară.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#323231] mb-3">
                  Retratatment endodontic
                </h3>
                <p className="text-[#423723]">
                  Reluarea tratamentului de canal în cazurile în care primul
                  tratament nu a avut succes, utilizând tehnici avansate pentru
                  eliminarea infecției persistente.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#323231] mb-3">
                  Tratamentul urgențelor endodontice
                </h3>
                <p className="text-[#423723]">
                  Intervenții rapide pentru calmarea durerii acute cauzate de
                  pulpita acută sau abcesele dentare, cu disponibilitate 24/7
                  pentru urgențele stomatologice.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#323231] mb-3">
                  Apexificare și apexogeneză
                </h3>
                <p className="text-[#423723]">
                  Tratamente specializate pentru dinții cu rădăcini incomplet
                  formate, stimulând închiderea apicală naturală sau artificială
                  pentru stabilizarea dintelui.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#323231] mb-3">
                  Chirurgie endodontică (apicectomie)
                </h3>
                <p className="text-[#423723]">
                  Intervenții chirurgicale la nivelul vârfului rădăcinii pentru
                  eliminarea infecțiilor persistente când tratamentul
                  conservativ nu este suficient.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8 bg-gradient-to-r from-[#9f8453]/10 to-[#bda476]/10">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-[#323231] mb-4">
                Avantajele endodonției moderne la Optima Dental Clinic:
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    icon: <MicroscopeIcon className="h-6 w-6 text-[#9f8453]" />,

                    title: "Tehnologie microscopică",
                    description: "pentru precizie maximă și vizualizare optimă"
                  },
                  {
                    icon: <ZapIcon className="h-6 w-6 text-[#9f8453]" />,

                    title: "Instrumente rotative NiTi",
                    description: "pentru curățare eficientă și confort sporit"
                  },
                  {
                    icon: (
                      <ShieldCheckIcon className="h-6 w-6 text-[#9f8453]" />
                    ),

                    title: "Materiale biocompatibile",
                    description: "pentru obturare hermetică și durabilă"
                  },
                  {
                    icon: <HeartIcon className="h-6 w-6 text-[#9f8453]" />,

                    title: "Tratament fără durere",
                    description: "cu anestezie eficientă și tehnici delicate"
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
                      Rata de succes de peste 95%
                    </h4>
                    <p className="text-sm text-[#423723]">
                      datorită tehnicilor moderne și experienței echipei
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
                Investiția în sănătatea dinților tăi cu prețuri corecte și
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
                    Consultație Endodonție
                  </CardTitle>
                  <div className="text-3xl font-bold text-[#9f8453] mt-2">
                    200 RON
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
                    Tratament de Canal
                  </CardTitle>
                  <div className="text-3xl font-bold text-[#9f8453] mt-2">
                    670-1000 RON
                  </div>
                  <p className="text-sm text-[#423723]/70">per dinte</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 text-sm text-[#423723]">
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                      Tratament cu microscop
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                      Instrumente rotative NiTi
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                      Obturare hermetică
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
                    Specializat
                  </Badge>
                  <CardTitle className="text-xl font-semibold text-[#323231]">
                    Retratatment Complex
                  </CardTitle>
                  <div className="text-3xl font-bold text-[#9f8453] mt-2">
                    780-1450 RON
                  </div>
                  <p className="text-sm text-[#423723]/70">variabil după caz</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 text-sm text-[#423723]">
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                      Tehnologie microscopică
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                      Chirurgie endodontică
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                      Materiale biocompatibile
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                      Urmărire pe 6 luni
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Pricing Table */}
            <Card className="mb-8 border-0 shadow-xl bg-gradient-to-br from-white to-[#aaaaaa]/10">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-semibold text-[#323231] text-center">
                  Lista Completă de Prețuri - Endodonție
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#9f8453] mb-3">
                      Consultații & Controale
                    </h4>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Consultație Endodonție
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        200 RON
                      </span>
                    </div>

                    <h4 className="font-semibold text-[#9f8453] mb-3 mt-6">
                      Tratamente de Canal
                    </h4>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Extirpare și Obturație Monoradicular
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        670 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Extirpare și Obturație Premolar
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        880 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Extirpare și Obturație Pluriradicular
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        1000 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Extirpare Nerv Dinte / Canal
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        200 RON
                      </span>
                    </div>

                    <h4 className="font-semibold text-[#9f8453] mb-3 mt-6">
                      Retratatmente
                    </h4>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Retratatment Monoradicular
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        780 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Retratatment Premolar
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        1250 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Retratatment Pluriradicular
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        1450 RON
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#9f8453] mb-3">
                      Proceduri Speciale
                    </h4>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Aplicare MTA la Microscop
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        450 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">Armare Pivot</span>
                      <span className="font-semibold text-[#9f8453]">
                        380 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Refacere Bont la Microscop
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        180 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">Drenaj Endodontic</span>
                      <span className="font-semibold text-[#9f8453]">
                        220 RON
                      </span>
                    </div>

                    <h4 className="font-semibold text-[#9f8453] mb-3 mt-6">
                      Intervenții Complexe
                    </h4>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Îndepărtare Ac la Microscop
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        450 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Îndepărtare Pivot la Microscop
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        350 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">Îndepărtare Polip</span>
                      <span className="font-semibold text-[#9f8453]">
                        200 RON
                      </span>
                    </div>

                    <h4 className="font-semibold text-[#9f8453] mb-3 mt-6">
                      Tratamente Auxiliare
                    </h4>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Pansament Antiseptic
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        150 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Aplicare Substanță Devitalizantă
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        200 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">Desensibilizant</span>
                      <span className="font-semibold text-[#9f8453]">
                        140 RON
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

          <Card className="mb-8 bg-gradient-to-r from-[#9f8453]/10 to-[#bda476]/10">
            <CardContent className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-[#323231] mb-4">
                Salvează-ți dinții naturali
              </h2>
              <p className="text-lg text-[#423723]">
                Tratamentul endodontic modern permite salvarea dinților care
                păreau condamnați la extracție. Cu tehnologia microscopică și
                experiența noastră, îți oferim o șansă reală de a-ți păstra
                zâmbetul natural.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#323231] via-[#423723] to-[#0d0b08]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-white mb-4">
            Ai dureri dentare{" "}
            <span className="font-medium text-[#bda476]">intense?</span>
          </h2>
          <p className="text-xl text-[#bda476] mb-8">
            Nu lăsa durerea să îți afecteze viața - salvează-ți dinții cu
            endodonție modernă
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => (window.location.href = "tel:+40767702703")}
              size="lg"
              className="bg-gradient-to-r from-[#9f8453] to-[#423723] hover:from-[#423723] hover:to-[#0d0b08] text-white px-8 py-4 text-lg rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <PhoneIcon className="mr-2 h-5 w-5" />
              Urgențe: 0767 702 703
            </Button>

            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#bda476] text-[#bda476] hover:bg-[#bda476] hover:text-[#323231] px-8 py-4 text-lg rounded-full bg-transparent shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Programează Consultație
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
