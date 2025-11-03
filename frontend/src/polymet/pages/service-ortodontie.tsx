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
  ZapIcon,
  ShieldCheckIcon,
  SmileIcon,
  StarIcon,
  ClockIcon,
  TrendingUpIcon,
  AwardIcon,
  AlertTriangleIcon
} from "lucide-react";

export const ServiceOrtodontie: React.FC = () => {
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
                  Ortodonție Modernă
                </span>
              </h1>
            </div>
            <p className="text-xl text-[#bda476]/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Alinierea Perfectă a Dinților pentru un Zâmbet de Vis cu
              Tehnologii Avansate
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-[#423723] mb-8 leading-relaxed">
              Ortodonția este specialitatea stomatologică care se ocupă cu
              diagnosticarea, prevenirea și tratamentul anomaliilor
              dento-maxilare. La Optima Dental Clinic, oferim soluții
              ortodontice moderne, de la aparatele clasice la sistemele
              invizibile, pentru a corecta poziția dinților și a îmbunătăți
              funcția masticatorie și estetica facială.
            </p>

            <Card className="mb-12 border-0 shadow-xl bg-gradient-to-br from-white to-[#aaaaaa]/10 hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#9f8453] to-[#bda476] rounded-xl flex items-center justify-center">
                    <ShieldCheckIcon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-semibold text-[#323231]">
                    De ce este importantă ortodonția?
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <p className="text-[#423723] leading-relaxed text-lg">
                    Dinții corect aliniați nu sunt doar o chestiune estetică. Ei
                    contribuie la o masticație eficientă, o vorbire clară și o
                    igienă orală optimă. Tratamentul ortodontic poate preveni
                    problemele parodontale, uzura anormală a dinților și
                    disfuncțiile temporo-mandibulare.
                  </p>
                  <Separator className="my-4" />

                  <p className="text-[#423723] leading-relaxed">
                    Fiecare tratament ortodontic este planificat digital pentru
                    precizie maximă și minimizarea disconfortului, cu focus pe
                    recuperare rapidă și rezultate durabile.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mb-12 animate-fade-in-up delay-300">
              <h2 className="text-3xl font-light text-[#323231] mb-4">
                Soluții{" "}
                <span className="font-semibold text-[#9f8453]">
                  Ortodontice Moderne
                </span>
              </h2>
              <p className="text-lg text-[#423723] max-w-3xl mx-auto leading-relaxed">
                Oferim o gamă completă de servicii ortodontice cu tehnologii
                avansate.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-[#aaaaaa]/10 hover:shadow-2xl transition-all duration-500 group animate-fade-in-up delay-400">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#9f8453] to-[#bda476] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ZapIcon className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-[#323231]">
                      Aparate ortodontice metalice
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-[#423723] leading-relaxed">
                    Aparatele clasice cu brackets metalici, eficiente pentru
                    toate tipurile de malocluzii, cu rezultate predictibile și
                    durată de tratament optimizată.
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
                      Aparate ortodontice estetice
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-[#423723] leading-relaxed">
                    Brackets din ceramică sau safir, aproape invizibile, ideale
                    pentru adulții care doresc un tratament discret fără a
                    compromite eficiența.
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
                      Alignere transparente (Invisalign)
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-[#423723] leading-relaxed">
                    Gutiere transparente personalizate, complet invizibile și
                    detașabile, perfecte pentru stilul de viață activ al
                    adulților moderni.
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
                      Ortodonție linguală
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-[#423723] leading-relaxed">
                    Aparate fixe plasate pe partea linguală a dinților, complet
                    invizibile din exterior, pentru cei care doresc discreție
                    maximă.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-[#aaaaaa]/10 hover:shadow-2xl transition-all duration-500 group animate-fade-in-up delay-800">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#9f8453] to-[#bda476] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <SmileIcon className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-[#323231]">
                      Ortodonție interceptivă pentru copii
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-[#423723] leading-relaxed">
                    Tratamente ortodontice precoce pentru ghidarea creșterii și
                    dezvoltării dento-faciale, prevenind complicațiile viitoare
                    și reducând complexitatea tratamentelor.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-[#aaaaaa]/10 hover:shadow-2xl transition-all duration-500 group animate-fade-in-up delay-900">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#323231] to-[#423723] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ShieldCheckIcon className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-[#323231]">
                      Aparate de retenție
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-[#423723] leading-relaxed">
                    Dispozitive pentru menținerea rezultatelor obținute după
                    tratamentul ortodontic activ, esențiale pentru stabilitatea
                    pe termen lung.
                  </p>
                </CardContent>
              </Card>
            </div>

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
                  Investiția în zâmbetul perfect cu prețuri corecte și
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
                      Consultație Ortodonție
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
                        Radiografii cefalometrice
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                        Plan ortodontic personalizat
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
                      Aparat Fix Metalic
                    </CardTitle>
                    <div className="text-3xl font-bold text-[#9f8453] mt-2">
                      3750 RON
                    </div>
                    <p className="text-sm text-[#423723]/70">per arcadă</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2 text-sm text-[#423723]">
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                        Brackets metalici de calitate
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                        Controale regulate incluse
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                        Aparat de retenție inclus
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                        Urmărire 2 ani
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
                      Alignere Premium
                    </CardTitle>
                    <div className="text-3xl font-bold text-[#9f8453] mt-2">
                      7500-27500 RON
                    </div>
                    <p className="text-sm text-[#423723]/70">
                      variabil după caz
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
                        Complet invizibile
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                        Detașabile pentru mâncare
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-[#9f8453]" />
                        Monitorizare cu app
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Detailed Pricing Table */}
              <Card className="mb-8 border-0 shadow-xl bg-gradient-to-br from-white to-[#aaaaaa]/10">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-semibold text-[#323231] text-center">
                    Lista Completă de Prețuri - Ortodonție
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
                          Consultație Ortodonție
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          200 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Control Periodic Ortodonție
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          150 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Interpretare RX + Plan Tratament
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          150 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Planificare Digitală
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          1500 RON
                        </span>
                      </div>

                      <h4 className="font-semibold text-[#9f8453] mb-3 mt-6">
                        Aparate Fixe
                      </h4>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Aparat Fix Metalic / Arcadă
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          3750 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Aparat Fix Safir / Arcadă
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          4800 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Aparat Fix Iconix
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          4000 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Aparat Damon Q/Norris / Arcadă
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          5500 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Aparat Damon Clear / Arcadă
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          6500 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Aparat Metalic Caz Chirurgical
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          4500 RON
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-[#9f8453] mb-3">
                        Alignere Transparente
                      </h4>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Aligner Premium - Short Term
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          7500 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Aligner Premium - Medium Term
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          17500 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Aligner Premium - Long Term
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          27500 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Gutieră tip Aligner
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          750 RON
                        </span>
                      </div>

                      <h4 className="font-semibold text-[#9f8453] mb-3 mt-6">
                        Aparate Mobile
                      </h4>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">Aparat Mobil</span>
                        <span className="font-semibold text-[#9f8453]">
                          1500 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Aparat Mobil cu Plan Inclinat
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          2000 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">Aparat Segmentar</span>
                        <span className="font-semibold text-[#9f8453]">
                          1500 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">Disjunctor</span>
                        <span className="font-semibold text-[#9f8453]">
                          1900 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">Trainer</span>
                        <span className="font-semibold text-[#9f8453]">
                          1500 RON
                        </span>
                      </div>

                      <h4 className="font-semibold text-[#9f8453] mb-3 mt-6">
                        Retenție & Finalizare
                      </h4>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Gutieră Contenție
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          600 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">Retainer Colat</span>
                        <span className="font-semibold text-[#9f8453]">
                          450 RON
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#423723]">
                          Îndepărtare Aparat Fix / Arcadă
                        </span>
                        <span className="font-semibold text-[#9f8453]">
                          300 RON
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
                  ortodontice. Consultă-te cu echipa noastră pentru a găsi
                  soluția potrivită pentru tine.
                </p>
              </div>
            </div>

            <Card className="mb-8 bg-gradient-to-r from-[#9f8453]/10 to-[#bda476]/10">
              <CardContent className="p-6 text-center">
                <h2 className="text-2xl font-semibold text-[#323231] mb-4">
                  Investiția în zâmbetul perfect
                </h2>
                <p className="text-lg text-[#423723]">
                  Tratamentul ortodontic este o investiție pe viață în sănătatea
                  și frumusețea zâmbetului tău. Cu tehnologiile moderne și
                  experiența noastră, îți garantăm rezultate excepționale și
                  durabile.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#323231] via-[#423723] to-[#0d0b08]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-white mb-4">
            Dorești un{" "}
            <span className="font-medium text-[#bda476]">zâmbet perfect?</span>
          </h2>
          <p className="text-xl text-[#bda476] mb-8">
            Descoperă soluțiile ortodontice moderne pentru alinierea ideală a
            dinților
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => (window.location.href = "tel:+40767702703")}
              size="lg"
              className="bg-gradient-to-r from-[#9f8453] to-[#423723] hover:from-[#423723] hover:to-[#0d0b08] text-white px-8 py-4 text-lg rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <PhoneIcon className="mr-2 h-5 w-5" />
              Sună Acum: 0767 702 703
            </Button>

            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#bda476] text-[#bda476] hover:bg-[#bda476] hover:text-[#323231] px-8 py-4 text-lg rounded-full bg-transparent shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Programează-te Acum
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
