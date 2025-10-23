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
  AwardIcon
} from "lucide-react";

export const ServiceParodontologiePage: React.FC = () => {
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
                  Parodontologie
                </span>
              </h1>
            </div>
            <p className="text-xl text-[#bda476]/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Întârziem pierderea dinților, redăm sănătatea gingiilor cu
              tehnologii avansate și îngrijire personalizată
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
                Parodontologie
              </span>
            </h2>
            <p className="text-lg text-[#423723] max-w-4xl mx-auto leading-relaxed">
              La Optima Dental Clinic, te sprijinim în menținerea sănătății
              gingivale și a structurii de susținere a dinților, pentru a
              preveni și trata eficient bolile parodontale cu cele mai avansate
              tehnologii.
            </p>
          </div>

          {/* What is Periodontology */}
          <Card className="mb-12 border-0 shadow-xl bg-gradient-to-br from-white to-[#aaaaaa]/10 hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-[#9f8453] to-[#bda476] rounded-xl flex items-center justify-center">
                  <ShieldCheckIcon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-semibold text-[#323231]">
                  Ce este parodontologia?
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                <p className="text-[#423723] leading-relaxed text-lg">
                  Este ramura stomatologiei dedicată prevenirii, diagnosticului
                  și tratamentului afecțiunilor țesuturilor care susțin dinții:
                  gingii, ligamente periodontale și os alveolar. Dacă nu sunt
                  tratate, aceste afecțiuni pot duce chiar la pierderea
                  dintelui.
                </p>
                <Separator className="my-4" />

                <p className="text-[#423723] leading-relaxed">
                  Bolile parodontale — gingivita și parodontita — pot fi
                  declanșate de depunerile de placă bacteriană și tartru, dar
                  sunt influențate și de factori precum fumatul sau
                  predispoziția genetică.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Warning Symptoms */}
          <Card className="mb-12 border-0 shadow-xl bg-gradient-to-br from-[#9f8453]/10 to-[#bda476]/10 hover:shadow-2xl transition-all duration-500 animate-fade-in-up delay-100">
            <CardHeader className="pb-4">
              <div className="flex items-start gap-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-[#9f8453] to-[#bda476] rounded-xl flex items-center justify-center">
                  <AlertTriangleIcon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-semibold text-[#423723]">
                  Simptome care nu trebuie ignorate
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Sângerări gingivale la periaj sau masă",
                  "Retragerea gingiilor (dinți apar mai lungi)",
                  "Mobilitate dentară, spații noi între dinți",
                  "Respirație urât mirositoare persistentă",
                  "Gingii roșii, umflate sau sensibile"
                ].map((symptom, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-colors"
                  >
                    <div className="w-2 h-2 bg-[#9f8453] rounded-full flex-shrink-0"></div>
                    <span className="text-[#423723] font-medium">
                      {symptom}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Diagnostic Enhancement */}
          <Card className="mb-12 border-0 shadow-xl bg-gradient-to-br from-[#aaaaaa]/10 to-[#aaaaaa]/20 hover:shadow-2xl transition-all duration-500 animate-fade-in-up delay-200">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-[#323231] to-[#423723] rounded-xl flex items-center justify-center">
                  <TrendingUpIcon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-semibold text-[#323231]">
                  Diagnostic Avansat
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="bg-white/60 p-4 rounded-lg">
                <p className="text-[#423723] leading-relaxed">
                  <strong className="text-[#9f8453]">Parodontometria</strong> —
                  măsurarea adâncimii pungilor parodontale cu sondă gradată —
                  este un pas esențial pentru evaluarea gravității afecțiunii și
                  monitorizarea rezultatelor tratamentului.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Treatments Section Header */}
          <div className="text-center mb-12 animate-fade-in-up delay-300">
            <h2 className="text-3xl font-light text-[#323231] mb-4">
              Tratamente{" "}
              <span className="font-semibold text-[#9f8453]">
                Avansate și Personalizate
              </span>
            </h2>
            <p className="text-lg text-[#423723] max-w-3xl mx-auto leading-relaxed">
              La Optima Dental Clinic aplicăm cele mai moderne protocoale, cu
              accent pe confort și eficiență maximă.
            </p>
          </div>

          {/* Treatment Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-[#aaaaaa]/10 hover:shadow-2xl transition-all duration-500 group animate-fade-in-up delay-400">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#9f8453] to-[#bda476] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ZapIcon className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-[#323231]">
                    Igienizare Profesională
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-[#423723] leading-relaxed">
                  Îndepărtare completă a plăcii și tartrului, prin detartraj și
                  periaj profesionist, pentru a reduce inflamația locală și
                  riscul bolii parodontale.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-[#aaaaaa]/10 hover:shadow-2xl transition-all duration-500 group animate-fade-in-up delay-500">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#323231] to-[#423723] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ShieldCheckIcon className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-[#323231]">
                    Chiuretaj Parodontal
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-[#423723] leading-relaxed mb-3">
                  Curățare profundă a pungilor parodontale cu scopul eliminării
                  bacteriilor de sub linia gingiei.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-[#423723]">
                    <CheckCircleIcon className="mr-2 h-3 w-3 text-[#9f8453]" />
                    Chiuretaj în câmp închis pentru cazuri moderate
                  </div>
                  <div className="flex items-center text-sm text-[#423723]">
                    <CheckCircleIcon className="mr-2 h-3 w-3 text-[#9f8453]" />
                    Chiuretaj în câmp deschis plus regenerare pentru forme
                    avansate
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-[#aaaaaa]/10 hover:shadow-2xl transition-all duration-500 group animate-fade-in-up delay-600">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#9f8453] to-[#bda476] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <TrendingUpIcon className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-[#323231]">
                    Terapie Regenerativă
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-[#423723] leading-relaxed">
                  În situații avansate, efectuăm proceduri de regenerare a
                  țesuturilor – grefe de os, gingivoplastii, imobilizare
                  dentară.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-[#aaaaaa]/10 hover:shadow-2xl transition-all duration-500 group animate-fade-in-up delay-700">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#423723] to-[#323231] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <StarIcon className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-[#323231]">
                    Opțiuni Complementare
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-[#423723] leading-relaxed">
                  Tratament antibiotice și tehnici asistate cu laser pentru
                  confort sporit, reducerea durerii și eficiență în zone dificil
                  de accesat.
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
                  Etapele Terapiei Parodontale
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-6">
                {[
                  "Consult și evaluare completă, inclusiv parodontogramă și diagnostic digital",
                  "Decontaminare gingivală: detartraj, surfașaj și periaj profesional",
                  "Intervenții chirurgicale sau regenerative, după caz",
                  "Monitorizarea rezultatelor și terapia de întreținere",
                  "Educație pentru pacient: igienă orală corectă, controale periodice"
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

          {/* Benefits */}
          <Card className="mb-16 border-0 shadow-xl bg-gradient-to-br from-[#bda476]/10 to-[#9f8453]/10 hover:shadow-2xl transition-all duration-500 animate-fade-in-up delay-900">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-[#9f8453] to-[#bda476] rounded-xl flex items-center justify-center">
                  <AwardIcon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-semibold text-[#323231]">
                  Beneficiile Tratamentului
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Țesuturi gingivale sănătoase și funcționale pe termen lung",
                  "Prevenirea mobilității și pierderii dintelui",
                  "Control al respirației urât mirositoare și al gingiilor sensibile",
                  "Zâmbet revitalizat, estetic și confortabil"
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-colors group"
                  >
                    <CheckCircleIcon className="h-5 w-5 text-[#9f8453] group-hover:scale-110 transition-transform" />

                    <span className="text-[#423723] font-medium">
                      {benefit}
                    </span>
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
                Investiția în sănătatea parodontală este o investiție în
                viitorul zâmbetului tău.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-[#aaaaaa]/10 hover:shadow-2xl transition-all duration-500 group relative">
                <CardHeader className="pb-4">
                  <Badge className="w-fit mb-2 bg-[#aaaaaa]/20 text-[#323231] border-[#aaaaaa]/30">
                    Preventiv
                  </Badge>
                  <CardTitle className="text-xl font-semibold text-[#323231]">
                    Consultație & Diagnostic
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
                      Parodontogramă detaliată
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-green-500" />
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
                    Tratament Standard
                  </CardTitle>
                  <div className="text-3xl font-bold text-[#9f8453] mt-2">
                    450-800 RON
                  </div>
                  <p className="text-sm text-[#423723]/70">per cadran</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 text-sm text-[#423723]">
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                      Detartraj profesional
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                      Chiuretaj parodontal
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                      Surfașaj radicular
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                      Controale incluse (3 luni)
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
                    Terapie Regenerativă
                  </CardTitle>
                  <div className="text-3xl font-bold text-[#9f8453] mt-2">
                    1200+ RON
                  </div>
                  <p className="text-sm text-[#423723]/70">variabil după caz</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 text-sm text-[#423723]">
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                      Chirurgie parodontală
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                      Regenerare osoasă
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                      Grefe gingivale
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                      Urmărire pe 12 luni
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Pricing Table */}
            <Card className="mb-8 mt-32 border-0 shadow-xl bg-gradient-to-br from-white to-[#aaaaaa]/10">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-semibold text-[#323231] text-center">
                  Lista Completă de Prețuri - Parodontologie
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-[#423723] font-medium">
                      Tratament Gingivită
                    </span>
                    <span className="font-bold text-[#9f8453] text-lg">
                      1500 RON
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-[#423723] font-medium">
                      Sterilizare Pungi Parodontale - Laser / Arcadă
                    </span>
                    <span className="font-bold text-[#9f8453] text-lg">
                      1300 RON
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-[#423723] font-medium">
                      Detartraj Parodontal
                    </span>
                    <span className="font-bold text-[#9f8453] text-lg">
                      500 RON
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-[#423723] font-medium">
                      Control Parodontologie
                    </span>
                    <span className="font-bold text-[#9f8453] text-lg">
                      100 RON
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-[#423723] font-medium">
                      Consultație Parodontologie
                    </span>
                    <span className="font-bold text-[#9f8453] text-lg">
                      200 RON
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-[#423723] font-medium">
                      Chiuretaj Unidentar
                    </span>
                    <span className="font-bold text-[#9f8453] text-lg">
                      150 RON
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-[#423723] font-medium">
                      Chiuretaj Parodontal Unidentar în Câmp Închis
                    </span>
                    <span className="font-bold text-[#9f8453] text-lg">
                      300 RON
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-[#423723] font-medium">
                      Chiuretaj Parodontal Unidentar în Câmp Deschis
                    </span>
                    <span className="font-bold text-[#9f8453] text-lg">
                      450 RON
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-[#423723] font-medium">
                      PRGF Parodontal
                    </span>
                    <span className="font-bold text-[#9f8453] text-lg">
                      2750 RON
                    </span>
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
              Ai observat simptome{" "}
              <span className="font-medium text-[#bda476]">parodontale?</span>
            </h2>
            <p className="text-xl text-[#bda476]/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Nu amâna tratamentul - cu cât intervii mai devreme, cu atât
              rezultatele sunt mai bune și mai durabile
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

export default ServiceParodontologiePage;
