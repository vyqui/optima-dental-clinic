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
  GlobeIcon
} from "lucide-react";

export const DoctorDanielTataruPage: React.FC = () => {
  const internationalEvents = [
    {
      year: "2004",
      event:
        "Stagiu clinic Washington Hospital Center, sectia Oral and maxillofacial surgery, Prof. Dr. George Obeid – Washington DC, USA"
    },
    {
      year: "2008",
      event: "Roots Summit – Miami Florida, USA"
    },
    {
      year: "2010",
      event: "Roots Summit – Barcelona, Spania"
    },
    {
      year: "2011",
      event: "IDS Koln, Germania"
    },
    {
      year: "2011",
      event:
        "European Society of Endodontology Biennial Congress – Roma, Italia"
    },
    {
      year: "2012",
      event: "American association of endodontics annual meeting – Boston, USA"
    },
    {
      year: "2013",
      event: "IDS Koln, Germania"
    },
    {
      year: "2013",
      event:
        "Endodontie de la A la Z, Dr.R.Cristescu si Dr.D.Caminescu – Constanta"
    },
    {
      year: "2014",
      event:
        "American association of endodontics annual meeting – Washington DC, USA"
    },
    {
      year: "2015",
      event: "IDS Koln, Germania"
    },
    {
      year: "2015",
      event: "European Society of Endodontology Biennial Congress – Barcelona"
    },
    {
      year: "2015",
      event: "Endodontic Master Series – Bucuresti"
    },
    {
      year: "2016",
      event:
        "American association of endodontics annual meeting – San Francisco, USA"
    },
    {
      year: "2016",
      event:
        'Organizator si lector Smart Endo Days – "Halloween party" - Brasov'
    },
    {
      year: "2017",
      event:
        'Organizator si lector Smart Endo Days – "Scary endodontics" – Brasov'
    },
    {
      year: "2017",
      event: "IDS Koln, Germania"
    },
    {
      year: "2017",
      event: "Endodontic Master Series - Bucuresti"
    },
    {
      year: "2017",
      event:
        "European Society of Endodontology Biennial Congress, Bruxelles, Belgia"
    },
    {
      year: "2017",
      event: "Membru fondator Smart dental training - Bucuresti"
    },
    {
      year: "2017",
      event:
        'Organizator si lector Smart Endo Days – "Marea unire a stomatologiei romanesti" - Brasov'
    },
    {
      year: "2018-2020",
      event: "Lector VDW – Tratametul endodontic cu sistemul reciproc"
    },
    {
      year: "2018",
      event:
        'Organizator si lector Smart Endo Days – "Simply the best" – Brasov'
    },
    {
      year: "2018",
      event: 'Organizator si lector "Endodontie pas cu pas", Galati'
    },
    {
      year: "2018",
      event: "Roots Summit – Berlin, Germania"
    },
    {
      year: "2019",
      event: "IDS Koln, Germania"
    },
    {
      year: "2019",
      event: "Endodontic Master Series - Bucuresti"
    },
    {
      year: "2019",
      event:
        "European Society of Endodontology Biennial Congress – Viena, Austria"
    },
    {
      year: "2022",
      event: "Endodontic Master Series - Bucuresti"
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
                    src="https://assets.polymet.ai/separate-violet-193732"
                    alt="Dr. Daniel Tataru"
                    className="w-full aspect-[3/4] rounded-lg object-cover mb-6"
                  />

                  <h1 className="text-2xl font-semibold text-neutral-900 mb-2">
                    Dr. Daniel Tataru
                  </h1>
                  <p className="text-[#9f8453] font-medium mb-6">
                    Medic Specialist Chirurgie Avansată
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-sm text-neutral-600">
                      <BriefcaseIcon className="h-4 w-4 text-[#9f8453]" />

                      <span>13+ ani experiență</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-neutral-600">
                      <GlobeIcon className="h-4 w-4 text-[#9f8453]" />

                      <span>Experiență internațională vastă</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-neutral-600">
                      <AwardIcon className="h-4 w-4 text-[#9f8453]" />

                      <span>Organizator & Lector</span>
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
                      Despre Dr. Daniel Tataru
                    </h2>
                  </div>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Dr. Daniel Tataru este un medic specialist cu o experiență
                    internațională vastă în domeniul endodonției și chirurgiei
                    avansate. Cu peste 13 ani de practică și participări la cele
                    mai prestigioase congrese și evenimente internaționale, Dr.
                    Tataru aduce în România cele mai moderne tehnici și
                    protocoale de tratament.
                  </p>
                  <p className="text-neutral-700 leading-relaxed">
                    Pe lângă activitatea clinică, Dr. Tataru este și organizator
                    și lector la numeroase evenimente de specialitate, fiind
                    membru fondator al Smart Dental Training și lector VDW
                    pentru tratamentul endodontic cu sistemul reciproc.
                  </p>
                </CardContent>
              </Card>

              {/* Key Achievements */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#bda476]/10 rounded-full flex items-center justify-center">
                      <AwardIcon className="h-6 w-6 text-[#9f8453]" />
                    </div>
                    <h2 className="text-2xl font-semibold text-neutral-900">
                      Realizări Notabile
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 bg-gradient-to-br from-[#bda476]/10 to-[#aaaaaa]/5 rounded-lg border-l-4 border-[#9f8453]">
                      <h3 className="font-semibold text-neutral-900 mb-2">
                        Smart Dental Training
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        Membru fondator (2017) - organizație dedicată educației
                        continue în stomatologie
                      </p>
                    </div>
                    <div className="p-5 bg-gradient-to-br from-[#bda476]/10 to-[#aaaaaa]/5 rounded-lg border-l-4 border-[#9f8453]">
                      <h3 className="font-semibold text-neutral-900 mb-2">
                        Lector VDW
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        Lector oficial VDW (2018-2020) pentru tratamentul
                        endodontic cu sistemul reciproc
                      </p>
                    </div>
                    <div className="p-5 bg-gradient-to-br from-[#bda476]/10 to-[#aaaaaa]/5 rounded-lg border-l-4 border-[#9f8453]">
                      <h3 className="font-semibold text-neutral-900 mb-2">
                        Smart Endo Days
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        Organizator și lector la multiple ediții ale
                        evenimentului de referință în endodonție
                      </p>
                    </div>
                    <div className="p-5 bg-gradient-to-br from-[#bda476]/10 to-[#aaaaaa]/5 rounded-lg border-l-4 border-[#9f8453]">
                      <h3 className="font-semibold text-neutral-900 mb-2">
                        Experiență Internațională
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        Participări la peste 25 de congrese și evenimente
                        internaționale în SUA, Europa și România
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* International Experience */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#bda476]/10 rounded-full flex items-center justify-center">
                      <GlobeIcon className="h-6 w-6 text-[#9f8453]" />
                    </div>
                    <h2 className="text-2xl font-semibold text-neutral-900">
                      Experiență Internațională
                    </h2>
                  </div>
                  <p className="text-neutral-600 mb-4">
                    Dr. Tataru a participat la cele mai prestigioase evenimente
                    internaționale de endodonție și stomatologie:
                  </p>
                  <div className="max-h-96 overflow-y-auto space-y-2 pr-2">
                    {internationalEvents.map((item, index) => (
                      <div
                        key={index}
                        className="flex gap-3 p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 bg-[#9f8453] rounded-lg flex items-center justify-center">
                            <span className="text-white font-semibold text-xs text-center leading-tight">
                              {item.year}
                            </span>
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="text-neutral-700 text-sm leading-relaxed">
                            {item.event}
                          </p>
                        </div>
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
                      Endodonție Avansată
                    </Badge>
                    <Badge className="bg-[#9f8453] text-white px-4 py-2 text-sm">
                      Chirurgie Oro-Maxilo-Facială
                    </Badge>
                    <Badge className="bg-[#9f8453] text-white px-4 py-2 text-sm">
                      Sistem Reciproc VDW
                    </Badge>
                    <Badge className="bg-[#9f8453] text-white px-4 py-2 text-sm">
                      Retratatamente Complexe
                    </Badge>
                    <Badge className="bg-[#9f8453] text-white px-4 py-2 text-sm">
                      Educație Medicală Continuă
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
            <span className="font-medium">Dr. Daniel Tataru</span>
          </h2>
          <p className="text-xl text-[#bda476] mb-8">
            Beneficiază de experiența internațională și expertiza în tratamente
            complexe
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
