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

export const ServiceChirurgiePage: React.FC = () => {
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
                  Chirurgie Dentară
                </span>
              </h1>
            </div>
            <p className="text-xl text-[#bda476]/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Intervenții precise și minim invazive pentru sănătatea ta orală cu
              tehnologii de ultimă generație
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
                Chirurgie Dentară
              </span>
            </h2>
            <p className="text-lg text-[#423723] max-w-4xl mx-auto leading-relaxed">
              La Optima Dental Clinic, punem accent pe tehnici chirurgicale
              minim invazive și ghidate digital, care asigură un tratament
              eficient, confort sporit și o recuperare rapidă. Fiecare procedură
              este adaptată nevoilor individuale ale pacientului.
            </p>
          </div>

          {/* What is Dental Surgery */}
          <Card className="mb-12 border-0 shadow-xl bg-gradient-to-br from-white to-[#aaaaaa]/10 hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-[#9f8453] to-[#bda476] rounded-xl flex items-center justify-center">
                  <ShieldCheckIcon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-semibold text-[#323231]">
                  Ce include chirurgia dentară?
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                <p className="text-[#423723] leading-relaxed text-lg">
                  Chirurgia dentară acoperă o gamă variată de intervenții, de la
                  extracții simple și complexe, la implanturi dentare și
                  corecții ale țesuturilor moi sau dure din cavitatea bucală.
                  Procedurile sunt realizate cu echipamente de ultimă generație.
                </p>
                <Separator className="my-4" />

                <p className="text-[#423723] leading-relaxed">
                  Fiecare intervenție este planificată digital pentru precizie
                  maximă și minimizarea disconfortului, cu focus pe recuperare
                  rapidă și rezultate durabile.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Treatment Types */}
          <div className="text-center mb-12 animate-fade-in-up delay-300">
            <h2 className="text-3xl font-light text-[#323231] mb-4">
              Tipuri de{" "}
              <span className="font-semibold text-[#9f8453]">
                Intervenții Chirurgicale
              </span>
            </h2>
            <p className="text-lg text-[#423723] max-w-3xl mx-auto leading-relaxed">
              Oferim o gamă completă de servicii chirurgicale dentare cu
              tehnologii avansate.
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
                    Extracții Dentare
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-[#423723] leading-relaxed">
                  Îndepărtarea dinților afectați sau incluși, inclusiv molarii
                  de minte, cu tehnici atraumatice pentru conservarea
                  țesuturilor înconjurătoare.
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
                    Chirurgie Parodontală
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-[#423723] leading-relaxed">
                  Tratamentul țesuturilor de susținere ale dintelui pentru
                  combaterea bolilor parodontale avansate și regenerarea
                  țesuturilor.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-[#aaaaaa]/10 hover:shadow-2xl transition-all duration-500 group animate-fade-in-up delay-600">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#9f8453] to-[#bda476] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <TrendingUpIcon className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-[#323231]">
                    Chirurgie Preimplantologică
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-[#423723] leading-relaxed">
                  Pregătirea osului și a țesuturilor pentru inserarea
                  implanturilor, inclusiv adiții osoase și lifting de sinus.
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
                    Implantologie Ghidată Digital
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-[#423723] leading-relaxed">
                  Inserția implanturilor cu ajutorul ghidajului computerizat
                  pentru o poziționare optimă și rezultate durabile.
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
                  Cum decurge o intervenție chirurgicală?
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-6">
                {[
                  "Consult inițial și investigații: evaluarea completă prin examene clinice și imagistice digitale",
                  "Planificare digitală: crearea unui plan chirurgical personalizat cu simulări 3D",
                  "Intervenția chirurgicală: procedura cu anestezie locală și tehnici minim invazive",
                  "Îngrijire postoperatorie: instrucțiuni clare pentru vindecare rapidă și monitorizare",
                  "Reabilitare funcțională: continuarea cu implanturi sau tratamente complementare"
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
                  Avantajele Chirurgiei la Optima Dental Clinic
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Tehnologie digitală avansată pentru planificare și execuție precisă",
                  "Proceduri minim invazive care reduc timpul de recuperare",
                  "Echipa de chirurgi cu experiență și expertiză multidisciplinară",
                  "Mediu steril și confortabil respectând standardele de siguranță"
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
                Investiția în sănătatea ta orală cu prețuri corecte și
                transparente.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-[#aaaaaa]/10 hover:shadow-2xl transition-all duration-500 group relative">
                <CardHeader className="pb-4">
                  <Badge className="w-fit mb-2 bg-[#aaaaaa]/20 text-[#323231] border-[#aaaaaa]/30">
                    Consultativ
                  </Badge>
                  <CardTitle className="text-xl font-semibold text-[#323231]">
                    Consultație Chirurgie
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
                    Extracții Simple
                  </CardTitle>
                  <div className="text-3xl font-bold text-[#9f8453] mt-2">
                    250-400 RON
                  </div>
                  <p className="text-sm text-[#423723]/70">per dinte</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 text-sm text-[#423723]">
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                      Anestezie locală inclusă
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                      Tehnici atraumatice
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                      Îngrijire postoperatorie
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
                    Implant Dentar
                  </CardTitle>
                  <div className="text-3xl font-bold text-[#9f8453] mt-2">
                    2900 RON
                  </div>
                  <p className="text-sm text-[#423723]/70">
                    Neodent (Straumann BLX)
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 text-sm text-[#423723]">
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                      Planificare digitală 3D
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                      Chirurgie ghidată
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                      Garanție premium
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
                  Lista Completă de Prețuri - Chirurgie & Parodontologie
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
                        Consultație Chirurgie
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        200 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Consultație Parodontologie
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        200 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Control Parodontologie
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        100 RON
                      </span>
                    </div>

                    <h4 className="font-semibold text-[#9f8453] mb-3 mt-6">
                      Extracții
                    </h4>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Extracție Monoradiculară
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        400 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Extracție Pluriradiculară
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        400 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Extracție Dinte Parodontotic
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        250 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Extracție Dinte Inclus
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        650 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Extracție Supranumerari
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        150 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Extracție Dinte Supranumerar
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        300 RON
                      </span>
                    </div>

                    <h4 className="font-semibold text-[#9f8453] mb-3 mt-6">
                      Chirurgie Complexă
                    </h4>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Molar de Minte Erupt
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        650 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Molar de Minte Semi-inclus
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        850 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Molar de Minte Inclus
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        1050 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Canin Inclus (Chirurgical)
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        950 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Descoperire Chirurgicală Canin Inclus
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        750 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Chistectomie Fără Os
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        750 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Chistectomie cu Adiție Osoasă 1-2 Elemente
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        3300 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Chistectomie cu Adiție Osoasă 3-5 Elemente
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        5350 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">Incizie Abces</span>
                      <span className="font-semibold text-[#9f8453]">
                        200 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">Drenaj Chirurgical</span>
                      <span className="font-semibold text-[#9f8453]">
                        250 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">Rest Radicular</span>
                      <span className="font-semibold text-[#9f8453]">
                        300 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Frenectomie / Frenoplastie / Laser
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        1200 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Gingivectomie Unidentară
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        150 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Alungire Coronară 4-6 Dinți
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        3150 RON
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#9f8453] mb-3">
                      Implantologie
                    </h4>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Implant Dentar Neodent (Straumann BLX)
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        2900 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Dantură Fixă All on 4 Neodent (Straumann BLX)
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        20000 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Dantură Fixă All on 6 Neodent (Straumann BLX)
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        24000 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Descoperire Chirurgicală Implant
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        150 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Descoperire Implant Extern
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        150 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Îndepărtare Implant Extern
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        650 RON
                      </span>
                    </div>

                    <h4 className="font-semibold text-[#9f8453] mb-3 mt-6">
                      Tratamente Parodontale
                    </h4>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Tratament Gingivită
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        1500 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Detartraj Parodontal
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        500 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">Terapie Laser</span>
                      <span className="font-semibold text-[#9f8453]">
                        1000 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Terapie Laser / Arcadă
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        600 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Chiuretaj în Câmp Închis / Arcadă - Fără Os
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        2000 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Chiuretaj în Câmp Deschis / Arcadă - Fără Os
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        3200 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Grefa Gingivală / Cadran
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        650 RON
                      </span>
                    </div>

                    <h4 className="font-semibold text-[#9f8453] mb-3 mt-6">
                      Grefe & Regenerare
                    </h4>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Grefa Mucogingivală 1-3 dinți
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        2500 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Grefa Mucogingivală 3-6 dinți
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        3000 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Adiție de Os 1-2 elemente
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        2100 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">
                        Adiție de Os 3-6 elemente
                      </span>
                      <span className="font-semibold text-[#9f8453]">
                        2950 RON
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#423723]">Membrană PTF</span>
                      <span className="font-semibold text-[#9f8453]">
                        2500 RON
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
                Oferim opțiuni flexibile de plată în rate pentru intervențiile
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
              Ai nevoie de o{" "}
              <span className="font-medium text-[#bda476]">
                intervenție chirurgicală?
              </span>
            </h2>
            <p className="text-xl text-[#bda476]/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Beneficiază de tehnologia modernă și experiența echipei noastre
              pentru rezultate sigure și durabile
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

export default ServiceChirurgiePage;
