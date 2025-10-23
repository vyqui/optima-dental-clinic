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
  ShieldCheckIcon,
  ScanIcon,
  EyeIcon,
  AwardIcon,
  SparklesIcon,
  MonitorIcon,
  CameraIcon,
  ActivityIcon,
  StarIcon
} from "lucide-react";

export const ServiceRadiologieModernPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
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
                  Radiologie Dentară Digitală
                </span>
              </h1>
            </div>
            <p className="text-xl text-[#bda476]/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Diagnostic Precis prin Imagistică Medicală Avansată
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gradient-to-b from-white to-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-[#bda476]/10 rounded-full">
                <SparklesIcon className="w-4 h-4 text-[#9f8453] mr-2" />

                <span className="text-sm font-medium text-[#9f8453]">
                  Tehnologie Avansată
                </span>
              </div>
              <h2 className="text-4xl font-light text-[#323231] leading-tight">
                Diagnostic{" "}
                <span className="font-semibold text-[#9f8453]">Precis</span>{" "}
                prin
                <br />
                Imagistică Digitală
              </h2>
              <p className="text-lg text-[#423723]/80 leading-relaxed">
                Radiologia dentară digitală reprezintă fundamentul
                diagnosticului modern în stomatologie. Utilizăm cele mai
                avansate tehnologii pentru informații precise despre structurile
                dento-maxilo-faciale.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-neutral-100">
                  <div className="w-12 h-12 bg-[#9f8453]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <ZapIcon className="w-6 h-6 text-[#9f8453]" />
                  </div>
                  <div className="text-2xl font-bold text-[#323231] mb-1">
                    90%
                  </div>
                  <div className="text-sm text-[#423723]/70">
                    Mai puține radiații
                  </div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-neutral-100">
                  <div className="w-12 h-12 bg-[#9f8453]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <EyeIcon className="w-6 h-6 text-[#9f8453]" />
                  </div>
                  <div className="text-2xl font-bold text-[#323231] mb-1">
                    4K
                  </div>
                  <div className="text-sm text-[#423723]/70">Rezoluție HD</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#9f8453]/20 to-[#bda476]/20 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-neutral-100">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-gradient-to-br from-[#9f8453]/10 to-[#bda476]/10 rounded-2xl flex items-center justify-center">
                    <MonitorIcon className="w-12 h-12 text-[#9f8453]" />
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-[#bda476]/10 to-[#9f8453]/10 rounded-2xl flex items-center justify-center">
                    <CameraIcon className="w-12 h-12 text-[#9f8453]" />
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-[#9f8453]/10 to-[#bda476]/10 rounded-2xl flex items-center justify-center">
                    <ScanIcon className="w-12 h-12 text-[#9f8453]" />
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-[#bda476]/10 to-[#9f8453]/10 rounded-2xl flex items-center justify-center">
                    <ActivityIcon className="w-12 h-12 text-[#9f8453]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
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
                  Investiția în diagnostic precis cu prețuri corecte și
                  transparente.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="border-0 shadow-xl bg-gradient-to-br from-[#9f8453]/5 to-[#bda476]/5 hover:shadow-2xl transition-all duration-500 group relative border-2 border-[#9f8453]/20">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[#9f8453] text-white border-[#9f8453]">
                      Recomandat
                    </Badge>
                  </div>
                  <CardHeader className="pb-4 pt-6">
                    <CardTitle className="text-2xl font-semibold text-[#323231]">
                      Radiografie Panoramică (OPG)
                    </CardTitle>
                    <div className="text-4xl font-bold text-[#9f8453] mt-4">
                      100 RON
                    </div>
                    <p className="text-sm text-[#423723]/70 mt-1">
                      per investigație
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3 text-sm text-[#423723]">
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-5 w-5 text-[#9f8453] flex-shrink-0" />
                        Imagine completă OPG
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-5 w-5 text-[#9f8453] flex-shrink-0" />
                        Evaluare generală a dinților
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-5 w-5 text-[#9f8453] flex-shrink-0" />
                        Planificare ortodontică
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-5 w-5 text-[#9f8453] flex-shrink-0" />
                        Interpretare inclusă
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-5 w-5 text-[#9f8453] flex-shrink-0" />
                        Rezultate imediate
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-[#423723]/10 hover:shadow-2xl transition-all duration-500 group relative">
                  <CardHeader className="pb-4">
                    <Badge className="w-fit mb-2 bg-[#423723]/20 text-[#323231] border-[#423723]/30">
                      Premium
                    </Badge>
                    <CardTitle className="text-2xl font-semibold text-[#323231]">
                      Computer Tomograf (CT)
                    </CardTitle>
                    <div className="text-4xl font-bold text-[#9f8453] mt-4">
                      650 RON
                    </div>
                    <p className="text-sm text-[#423723]/70 mt-1">
                      per investigație
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3 text-sm text-[#423723]">
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-5 w-5 text-[#9f8453] flex-shrink-0" />
                        Imagistică 3D de înaltă precizie
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-5 w-5 text-[#9f8453] flex-shrink-0" />
                        Planificare implanturi dentare
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-5 w-5 text-[#9f8453] flex-shrink-0" />
                        Analiză complexă și detaliată
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-5 w-5 text-[#9f8453] flex-shrink-0" />
                        Raport detaliat inclus
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircleIcon className="h-5 w-5 text-[#9f8453] flex-shrink-0" />
                        Diagnostic precis pentru chirurgie
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-[#9f8453]/10 to-[#bda476]/10 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <StarIcon className="h-5 w-5 text-[#9f8453]" />

                  <h3 className="font-semibold text-[#323231]">
                    Facilități de plată
                  </h3>
                </div>
                <p className="text-[#423723] text-sm leading-relaxed">
                  Oferim pachete de investigare la prețuri avantajoase pentru
                  multiple radiografii. Consultă-te cu echipa noastră pentru a
                  găsi soluția potrivită pentru tine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#323231] via-[#423723] to-[#0d0b08]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-white mb-4">
            Ai nevoie de{" "}
            <span className="font-medium text-[#bda476]">
              investigații radiologice?
            </span>
          </h2>
          <p className="text-xl text-[#bda476] mb-8">
            Beneficiază de tehnologia digitală avansată pentru diagnostic precis
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
                Programează Investigație
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
