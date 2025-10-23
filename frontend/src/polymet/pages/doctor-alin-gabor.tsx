import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  ArrowLeftIcon,
  GraduationCapIcon,
  AwardIcon,
  PhoneIcon,
  MailIcon,
  BookOpenIcon
} from "lucide-react";

export const DoctorAlinGaborPage: React.FC = () => {
  const achievements = [
    "Asistent Universitar în cadrul Facultății de Medicină Dentară din Timișoara",
    "Predă la disciplina de Propedeutică și Materiale Dentare",
    "Doctor în Științe Medicale",
    "Autor al unei cărți de specialitate dedicată domeniului CAD/CAM",
    "Autor și coautor a numeroase studii de cercetare în reviste internaționale de prestigiu"
  ];

  const internationalTraining = [
    "UK - Londra, Kent",
    "SUA - New York",
    "Italia - Trieste, Ancona",
    "Ucraina",
    "Emiratele Arabe Unite - Dubai",
    "Praga - Cehia"
  ];

  const specializations = [
    "Master de Reabilitare și Estetică Dentară din Dubai",
    "Tehnologie CAD/CAM",
    "Propedeutică și Materiale Dentare",
    "Cercetare Științifică Medicală",
    "Reabilitare Orală Complexă"
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
            <div className="lg:col-span-1 lg:sticky lg:top-8 lg:self-start">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <img
                    src="https://assets.polymet.ai/extended-bronze-278965"
                    alt="Dr. Alin Gabor"
                    className="w-full aspect-[3/4] rounded-lg object-cover mb-6"
                  />

                  <h1 className="text-2xl font-semibold text-neutral-900 mb-2">
                    Dr. Alin Gabor
                  </h1>
                  <p className="text-[#9f8453] font-medium mb-6">
                    CEO & founder - Medic Dentist
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-sm text-neutral-600">
                      <GraduationCapIcon className="h-4 w-4 text-[#9f8453]" />

                      <span>Doctor în Științe Medicale</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-neutral-600">
                      <BookOpenIcon className="h-4 w-4 text-[#9f8453]" />

                      <span>Asistent Universitar UMF Timișoara</span>
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
                      Despre Dr. Alin Gabor
                    </h2>
                  </div>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Dr. Alin Gabor este Asistent Universitar în cadrul
                    Facultății de Medicină Dentară din Timișoara la disciplina
                    de Propedeutică și Materiale Dentare, unde predă atât la
                    Medicină Dentară cât și la Tehnică Dentară.
                  </p>
                  <p className="text-neutral-700 leading-relaxed">
                    Este pasionat atât de partea clinică cât și de partea
                    științifică, având numeroase studii de cercetare certificate
                    internațional care au culminat cu teza de doctorat
                    conferindu-i titulatura de Doctor în Științe Medicale. Este
                    autorul unei cărți de specialitate dedicată domeniului
                    CAD/CAM și coautorul a numeroase studii de cercetare în
                    reviste internaționale de prestigiu. Mereu și-a dorit să
                    devină unul dintre cei mai buni din domeniul Medicinei
                    Dentare și pentru acest lucru a urmat numeroase cursuri și
                    workshop-uri în țară dar în special în afara țării.
                  </p>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#bda476]/10 rounded-full flex items-center justify-center">
                      <AwardIcon className="h-6 w-6 text-[#9f8453]" />
                    </div>
                    <h2 className="text-2xl font-semibold text-neutral-900">
                      Realizări Academice și Profesionale
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-[#9f8453] rounded-full mt-2 flex-shrink-0" />

                        <p className="text-neutral-700 leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* International Training */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#bda476]/10 rounded-full flex items-center justify-center">
                      <GraduationCapIcon className="h-6 w-6 text-[#9f8453]" />
                    </div>
                    <h2 className="text-2xl font-semibold text-neutral-900">
                      Training Internațional
                    </h2>
                  </div>
                  <p className="text-neutral-700 mb-4">
                    Dr. Gabor a urmat numeroase cursuri și workshop-uri în
                    următoarele locații internaționale:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {internationalTraining.map((location, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#bda476]/5 to-[#aaaaaa]/5 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-[#9f8453] rounded-full flex-shrink-0" />

                        <p className="text-neutral-700 font-medium">
                          {location}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-[#9f8453]/10 rounded-lg border-l-4 border-[#9f8453]">
                    <p className="text-neutral-700 font-medium">
                      Master de Reabilitare și Estetică Dentară din Dubai
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Specializations */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
                    Specializări și Competențe
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {specializations.map((spec, index) => (
                      <Badge
                        key={index}
                        className="bg-[#9f8453] text-white px-4 py-2 text-sm"
                      >
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Academic Contributions */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#bda476]/10 rounded-full flex items-center justify-center">
                      <BookOpenIcon className="h-6 w-6 text-[#9f8453]" />
                    </div>
                    <h2 className="text-2xl font-semibold text-neutral-900">
                      Contribuții Academice
                    </h2>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-neutral-50 rounded-lg">
                      <h3 className="font-semibold text-neutral-900 mb-2">
                        Activitate Didactică
                      </h3>
                      <p className="text-neutral-700 text-sm leading-relaxed">
                        Lector invitat, participant și organizator la multiple
                        conferințe naționale și internaționale
                      </p>
                    </div>
                    <div className="p-4 bg-neutral-50 rounded-lg">
                      <h3 className="font-semibold text-neutral-900 mb-2">
                        Cercetare Științifică
                      </h3>
                      <p className="text-neutral-700 text-sm leading-relaxed">
                        Numeroase publicații în reviste internaționale de
                        prestigiu în domeniul stomatologiei și tehnologiei
                        dentare
                      </p>
                    </div>
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
            <span className="font-medium">Dr. Alin Gabor</span>
          </h2>
          <p className="text-xl text-[#bda476] mb-8">
            Beneficiază de expertiza unui medic cu pregătire academică și
            internațională de excepție
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
