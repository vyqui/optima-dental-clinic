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
  MicroscopeIcon
} from "lucide-react";

export const DoctorCristianGiucoanePage: React.FC = () => {
  const timeline = [
    {
      year: "2019",
      event:
        "Absolvire Facultatea de Medicină Dentară, UMF Victor Babeș Timișoara"
    },
    {
      year: "2019-2023",
      event: "Practică exclusivă endodonție la microscop"
    },
    {
      year: "2022",
      event: "Ambasador al Ectopic Society"
    },
    {
      year: "2023",
      event: "Obținere titlu de Medic Specialist în Endodonție"
    },
    {
      year: "2024",
      event:
        "Tutore în cadrul masteratului de Endodontie al Universității din Siena sub îndrumarea Prof. Simone Grandini"
    },
    {
      year: "2024",
      event:
        "Fellow member al Style Italiano Endodontics - cea mai importantă organizație de profil la nivel internațional"
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
                    src="https://assets.polymet.ai/upper-ivory-687829"
                    alt="Dr. Cristian Giucoane"
                    className="w-full aspect-[3/4] rounded-lg object-cover mb-6"
                  />

                  <h1 className="text-2xl font-semibold text-neutral-900 mb-2">
                    Dr. Cristian Giucoane
                  </h1>
                  <p className="text-[#9f8453] font-medium mb-6">
                    Medic Specialist Endodontie
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-sm text-neutral-600">
                      <BriefcaseIcon className="h-4 w-4 text-[#9f8453]" />

                      <span>Practică exclusivă endodonție</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-neutral-600">
                      <MicroscopeIcon className="h-4 w-4 text-[#9f8453]" />

                      <span>Tratamente la microscop</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-neutral-600">
                      <AwardIcon className="h-4 w-4 text-[#9f8453]" />

                      <span>Fellow Style Italiano Endodontics</span>
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
                      Despre Dr. Cristian Giucoane
                    </h2>
                  </div>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Dr. Cristian Giucoane a absolvit Facultatea de Medicină
                    Dentară din cadrul Universității de Medicină și Farmacie
                    "Victor Babeș" Timișoara în 2019 și practică exclusiv
                    endodonție la microscop de atunci.
                  </p>
                  <p className="text-neutral-700 leading-relaxed">
                    Cu o dedicare totală pentru excelență în endodonție, Dr.
                    Giucoane și-a construit o carieră impresionantă, devenind
                    membru al celor mai prestigioase organizații internaționale
                    de endodonție și tutore universitar pentru viitorii
                    specialiști în domeniu.
                  </p>
                </CardContent>
              </Card>

              {/* Timeline */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#bda476]/10 rounded-full flex items-center justify-center">
                      <AwardIcon className="h-6 w-6 text-[#9f8453]" />
                    </div>
                    <h2 className="text-2xl font-semibold text-neutral-900">
                      Parcurs Profesional
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {timeline.map((item, index) => (
                      <div
                        key={index}
                        className="flex gap-4 p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-[#9f8453] rounded-lg flex items-center justify-center">
                            <span className="text-white font-semibold text-sm text-center leading-tight">
                              {item.year}
                            </span>
                          </div>
                        </div>
                        <div className="flex-1 pt-2">
                          <p className="text-neutral-700 leading-relaxed">
                            {item.event}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
                    Realizări Notabile
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 bg-gradient-to-br from-[#bda476]/10 to-[#aaaaaa]/5 rounded-lg border-l-4 border-[#9f8453]">
                      <h3 className="font-semibold text-neutral-900 mb-2">
                        Ectopic Society
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        Ambasador al societății dedicate profesioniștilor din
                        domeniul stomatologiei (2022)
                      </p>
                    </div>
                    <div className="p-5 bg-gradient-to-br from-[#bda476]/10 to-[#aaaaaa]/5 rounded-lg border-l-4 border-[#9f8453]">
                      <h3 className="font-semibold text-neutral-900 mb-2">
                        Universitatea din Siena
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        Tutore în cadrul masteratului de Endodontie sub
                        îndrumarea Prof. Simone Grandini (2024)
                      </p>
                    </div>
                    <div className="p-5 bg-gradient-to-br from-[#bda476]/10 to-[#aaaaaa]/5 rounded-lg border-l-4 border-[#9f8453]">
                      <h3 className="font-semibold text-neutral-900 mb-2">
                        Style Italiano Endodontics
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        Fellow member - cea mai importantă organizație de profil
                        la nivel internațional (2024)
                      </p>
                    </div>
                    <div className="p-5 bg-gradient-to-br from-[#bda476]/10 to-[#aaaaaa]/5 rounded-lg border-l-4 border-[#9f8453]">
                      <h3 className="font-semibold text-neutral-900 mb-2">
                        Medic Specialist
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        Titlu de Medic Specialist în Endodonție obținut în 2023
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Specialization */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-[#bda476]/10 to-[#aaaaaa]/5">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <MicroscopeIcon className="h-8 w-8 text-[#9f8453]" />

                    <h2 className="text-2xl font-semibold text-neutral-900">
                      Endodonție la Microscop
                    </h2>
                  </div>
                  <p className="text-neutral-700 leading-relaxed">
                    Dr. Giucoane practică exclusiv endodonție la microscop,
                    utilizând cele mai avansate tehnici și tehnologii pentru
                    tratamentele de canal. Această abordare de înaltă precizie
                    permite vizualizarea detaliată a sistemului canalelor
                    radiculare și asigură cele mai bune rezultate pentru
                    pacienți, cu rate de succes semnificativ mai mari decât
                    metodele tradiționale.
                  </p>
                </CardContent>
              </Card>

              {/* Badges */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
                    Specializări
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-[#9f8453] text-white px-4 py-2 text-sm">
                      Endodonție la Microscop
                    </Badge>
                    <Badge className="bg-[#9f8453] text-white px-4 py-2 text-sm">
                      Tratamente de Canal
                    </Badge>
                    <Badge className="bg-[#9f8453] text-white px-4 py-2 text-sm">
                      Retratatamente Endodontice
                    </Badge>
                    <Badge className="bg-[#9f8453] text-white px-4 py-2 text-sm">
                      Chirurgie Endodontică
                    </Badge>
                    <Badge className="bg-[#9f8453] text-white px-4 py-2 text-sm">
                      Traumatologie Dentară
                    </Badge>
                  </div>
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
            <span className="font-medium">Dr. Cristian Giucoane</span>
          </h2>
          <p className="text-xl text-[#bda476] mb-8">
            Tratamente endodontice de excelență cu tehnologie de ultimă
            generație
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
