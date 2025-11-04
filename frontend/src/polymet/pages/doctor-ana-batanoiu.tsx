import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  ArrowLeftIcon,
  GraduationCapIcon,
  AwardIcon,
  BriefcaseIcon,
  PhoneIcon,
  MailIcon,
  HeartIcon
} from "lucide-react";

export const DoctorAnaBatanoiuPage: React.FC = () => {
  const experience = [
    "5 ani experiență profesională sub formă de colaborare la mai multe clinici dentare",
    "Experiență la clinica de ortodonție Dr. Vuta (renumită pentru tratamente ortodontice)",
    "Experiență vastă în tratamentul copiilor și adolescenților",
    "Specialist în corectarea timpurie a problemelor scheletice de poziționare și dezvoltare"
  ];

  const treatments = [
    {
      title: "Aparate Fixe (Brakeți)",
      description:
        "Tratamente ortodontice clasice pentru corectarea alinierii dentare"
    },
    {
      title: "Gutiere de Aliniere",
      description:
        "Opțiune modernă și discretă, potrivită în special pacienților adulți"
    },
    {
      title: "Aparate Ortopedice",
      description:
        "Pentru corectarea problemelor scheletice la copii și adolescenți"
    },
    {
      title: "Ortodonție Pediatrică",
      description:
        "Tratamente specializate pentru copii cu abordare empatică și blândă"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#bda476]/10 to-[#aaaaaa]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/about">
            <Button
              variant="ghost"
              className="mb-8 text-neutral-600 hover:text-[#9f8453]"
            >
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              Înapoi la Echipă
            </Button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-xl sticky top-8">
                <CardContent className="p-8">
                  <img
                    src="https://assets.polymet.ai/striped-rose-706538"
                    alt="Dr. Ana Bătănoiu"
                    className="w-full aspect-[3/4] rounded-lg object-cover mb-6"
                  />

                  <h1 className="text-2xl font-semibold text-neutral-900 mb-2">
                    Dr. Ana Bătănoiu
                  </h1>
                  <p className="text-[#9f8453] font-medium mb-6">
                    Medic Specialist Ortodonție și Ortopedie Dento-Facială
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-sm text-neutral-600">
                      <BriefcaseIcon className="h-4 w-4 text-[#9f8453]" />

                      <span>5 ani experiență profesională</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-neutral-600">
                      <HeartIcon className="h-4 w-4 text-[#9f8453]" />

                      <span>Specialist în tratarea copiilor</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button
                      onClick={() => {
                        window.location.href = "tel:+40767702703";
                      }}
                      className="w-full bg-[#9f8453] hover:bg-[#423723] text-white"
                      size="lg"
                    >
                      <PhoneIcon className="mr-2 h-4 w-4" />
                      Programează Consultație
                    </Button>
                    {/* <Button
                      variant="outline"
                      className="w-full border-[#9f8453] text-[#9f8453] hover:bg-[#9f8453] hover:text-white"
                      size="lg"
                    >
                      <MailIcon className="mr-2 h-4 w-4" />
                      Contactează
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#bda476]/10 rounded-full flex items-center justify-center">
                      <GraduationCapIcon className="h-6 w-6 text-[#9f8453]" />
                    </div>
                    <h2 className="text-2xl font-semibold text-neutral-900">
                      Despre Dr. Ana Bătănoiu
                    </h2>
                  </div>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Dr. Ana Bătănoiu este medic specialist în Ortodonție și
                    Ortopedie Dento-Facială, cu o experiență vastă în
                    tratamentul copiilor și adolescenților. Abordarea sa
                    empatică și blândă face ca fiecare vizită la cabinet să fie
                    o experiență plăcută pentru pacienții tineri.
                  </p>
                  <p className="text-neutral-700 leading-relaxed">
                    Cu 5 ani de experiență profesională, Dr. Bătănoiu a
                    colaborat cu mai multe clinici dentare de renume, inclusiv
                    clinica de ortodonție Dr. Vuta, cunoscută pentru excelența
                    în tratamente ortodontice. În practica sa, lucrează cu orice
                    tip de aparat, de la bracketi clasici până la gutiere de
                    aliniere moderne, oferind soluții personalizate pentru
                    fiecare pacient.
                  </p>
                </CardContent>
              </Card>

              {/* Experience */}
              {/* <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#bda476]/10 rounded-full flex items-center justify-center">
                      <BriefcaseIcon className="h-6 w-6 text-[#9f8453]" />
                    </div>
                    <h2 className="text-2xl font-semibold text-neutral-900">
                      Experiență Profesională
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {experience.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-[#9f8453] rounded-full mt-2 flex-shrink-0" />

                        <p className="text-neutral-700 leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card> */}

              {/* Treatments */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#bda476]/10 rounded-full flex items-center justify-center">
                      <AwardIcon className="h-6 w-6 text-[#9f8453]" />
                    </div>
                    <h2 className="text-2xl font-semibold text-neutral-900">
                      Tratamente Oferite
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {treatments.map((treatment, index) => (
                      <div
                        key={index}
                        className="p-5 bg-gradient-to-br from-[#bda476]/5 to-[#aaaaaa]/5 rounded-lg border border-neutral-200 hover:border-[#9f8453] transition-colors"
                      >
                        <h3 className="font-semibold text-neutral-900 mb-2">
                          {treatment.title}
                        </h3>
                        <p className="text-neutral-600 text-sm leading-relaxed">
                          {treatment.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Specializations */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
                    Specializări
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-[#9f8453] text-white px-4 py-2 text-sm">
                      Ortodonție
                    </Badge>
                    <Badge className="bg-[#9f8453] text-white px-4 py-2 text-sm">
                      Ortopedie Dento-Facială
                    </Badge>
                    <Badge className="bg-[#9f8453] text-white px-4 py-2 text-sm">
                      Ortodonție Pediatrică
                    </Badge>
                    <Badge className="bg-[#9f8453] text-white px-4 py-2 text-sm">
                      Gutiere de Aliniere
                    </Badge>
                    <Badge className="bg-[#9f8453] text-white px-4 py-2 text-sm">
                      Aparate Fixe
                    </Badge>
                    <Badge className="bg-[#9f8453] text-white px-4 py-2 text-sm">
                      Corectare Probleme Scheletice
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Patient Focus */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-[#bda476]/10 to-[#aaaaaa]/5">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <HeartIcon className="h-8 w-8 text-[#9f8453]" />

                    <h2 className="text-2xl font-semibold text-neutral-900">
                      Abordare Centrată pe Pacient
                    </h2>
                  </div>
                  <p className="text-neutral-700 leading-relaxed">
                    Dr. Bătănoiu acordă o atenție deosebită tratamentului
                    copiilor și adolescenților, unde corectarea timpurie a
                    problemelor scheletice de poziționare și dezvoltare ale
                    celor două arcade dentare poate fi realizată eficient cu
                    aparate cu rol ortopedic. Abordarea sa empatică și
                    experiența vastă în lucrul cu pacienți tineri asigură o
                    experiență pozitivă și rezultate excelente.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#323231] to-[#423723]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Programează o Consultație cu{" "}
            <span className="font-medium">Dr. Ana Bătănoiu</span>
          </h2>
          <p className="text-xl text-[#bda476] mb-8">
            Soluții ortodontice moderne pentru copii, adolescenți și adulți
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => {
                window.location.href = "tel:+40767702703";
              }}
              size="lg"
              className="bg-white text-[#323231] hover:bg-[#f5f5f5] px-8 py-4 text-lg rounded-full"
            >
              <PhoneIcon className="mr-2 h-5 w-5" />
              Sună Acum: 0767 702 703
            </Button>
            <a href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white hover:bg-white hover:text-[#323231] px-8 py-4 text-lg rounded-full"
              >
                Contactează-ne
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
