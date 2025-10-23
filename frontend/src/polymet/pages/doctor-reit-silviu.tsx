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
  HeartPulseIcon
} from "lucide-react";

export const DoctorReitSilviuPage: React.FC = () => {
  const experience = [
    "Peste 6 ani de experiență în chirurgie dento-alveolară",
    "Activitate în cadrul Clinicilor Dr. Leahu",
    "Experiență la Dentestet - clinică multidisciplinară de renume",
    "Specialist în tehnici chirurgicale moderne"
  ];

  const specializations = [
    {
      title: "Implantologie Orală",
      description:
        "Plasarea implanturilor dentare cu tehnici moderne și minim invazive"
    },
    {
      title: "Cazuri Complexe de Reabilitare Orală",
      description:
        "Tratamente chirurgicale complexe pentru restaurarea funcției orale"
    },
    {
      title: "Adiții Osoase",
      description:
        "Tehnici moderne de regenerare osoasă pentru pregătirea implanturilor"
    },
    {
      title: "Chirurgie Dento-Alveolară",
      description:
        "Extracții complexe și intervenții chirurgicale în zona oro-maxilo-facială"
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
                    src="https://assets.polymet.ai/fragile-lime-640719"
                    alt="Dr. Reit Silviu"
                    className="w-full aspect-[3/4] rounded-lg object-cover mb-6"
                  />

                  <h1 className="text-2xl font-semibold text-neutral-900 mb-2">
                    Dr. Reit Silviu
                  </h1>
                  <p className="text-[#9f8453] font-medium mb-6">
                    Medic Specialist Chirurgie Dento-Alveolară
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-sm text-neutral-600">
                      <BriefcaseIcon className="h-4 w-4 text-[#9f8453]" />

                      <span>6+ ani experiență</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-neutral-600">
                      <HeartPulseIcon className="h-4 w-4 text-[#9f8453]" />

                      <span>Specialist în Implantologie</span>
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
                      Despre Dr. Reit Silviu
                    </h2>
                  </div>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Dr. Reit Silviu este medic specialist în chirurgie
                    dento-alveolară, cu o experiență de peste 6 ani în domeniu.
                    Și-a desfășurat activitatea în cadrul unor clinici
                    multidisciplinare de renume, precum Clinicile Dr. Leahu și
                    Dentestet, unde și-a perfecționat tehnicile chirurgicale și
                    abordarea orientată spre confortul pacientului.
                  </p>
                  <p className="text-neutral-700 leading-relaxed">
                    Domeniile sale de interes includ implantologia orală,
                    cazurile complexe de reabilitare orală și tehnicile moderne
                    de adiții osoase. Prin atenția la detalii și comunicarea
                    empatică cu pacienții, Dr. Reit Silviu urmărește să ofere nu
                    doar tratamente eficiente, ci și o experiență cât mai
                    plăcută și lipsită de anxietate în timpul intervențiilor.
                  </p>
                </CardContent>
              </Card>

              {/* Experience */}
              <Card className="border-0 shadow-lg">
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
              </Card>

              {/* Specializations */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#bda476]/10 rounded-full flex items-center justify-center">
                      <AwardIcon className="h-6 w-6 text-[#9f8453]" />
                    </div>
                    <h2 className="text-2xl font-semibold text-neutral-900">
                      Domenii de Specializare
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {specializations.map((spec, index) => (
                      <div
                        key={index}
                        className="p-5 bg-gradient-to-br from-[#bda476]/5 to-[#aaaaaa]/5 rounded-lg border border-neutral-200 hover:border-[#9f8453] transition-colors"
                      >
                        <h3 className="font-semibold text-neutral-900 mb-2">
                          {spec.title}
                        </h3>
                        <p className="text-neutral-600 text-sm leading-relaxed">
                          {spec.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Approach */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-[#bda476]/10 to-[#aaaaaa]/5">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <HeartPulseIcon className="h-8 w-8 text-[#9f8453]" />

                    <h2 className="text-2xl font-semibold text-neutral-900">
                      Abordare Terapeutică
                    </h2>
                  </div>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Dr. Reit Silviu acordă o atenție deosebită confortului
                    pacientului în timpul intervențiilor chirurgicale. Prin
                    utilizarea tehnicilor moderne și minim invazive, precum și
                    prin comunicarea empatică, reușește să reducă anxietatea
                    pacienților și să ofere o experiență cât mai plăcută.
                  </p>
                  <p className="text-neutral-700 leading-relaxed">
                    Fiecare caz este tratat cu atenție la detalii, de la
                    planificarea pre-operatorie până la îngrijirea
                    post-operatorie, asigurându-se că pacienții primesc cele mai
                    bune rezultate posibile.
                  </p>
                </CardContent>
              </Card>

              {/* Badges */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
                    Competențe Cheie
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-[#9f8453] text-white px-4 py-2 text-sm">
                      Chirurgie Dento-Alveolară
                    </Badge>
                    <Badge className="bg-[#9f8453] text-white px-4 py-2 text-sm">
                      Implantologie Orală
                    </Badge>
                    <Badge className="bg-[#9f8453] text-white px-4 py-2 text-sm">
                      Adiții Osoase
                    </Badge>
                    <Badge className="bg-[#9f8453] text-white px-4 py-2 text-sm">
                      Reabilitare Orală Complexă
                    </Badge>
                    <Badge className="bg-[#9f8453] text-white px-4 py-2 text-sm">
                      Tehnici Minim Invazive
                    </Badge>
                    <Badge className="bg-[#9f8453] text-white px-4 py-2 text-sm">
                      Extracții Complexe
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
            <span className="font-medium">Dr. Reit Silviu</span>
          </h2>
          <p className="text-xl text-[#bda476] mb-8">
            Soluții chirurgicale moderne cu accent pe confortul pacientului
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
