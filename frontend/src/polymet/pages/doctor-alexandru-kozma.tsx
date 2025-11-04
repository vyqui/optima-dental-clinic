import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  PhoneIcon,
  MailIcon,
  GraduationCapIcon,
  BriefcaseIcon,
  AwardIcon,
  HeartIcon,
  ArrowLeftIcon
} from "lucide-react";
import { Link } from "react-router-dom";

export function DoctorAlexandruKozmaPage() {
  const achievements = [
    "Medic specialist chirurgie dento-alveolară",
    "Peste 20 de ani de experiență în domeniu",
    "Empatic, dedicat și mereu cu pacientul pe primul loc",
    "Transformă frica de dentist în încredere și zâmbete"
  ];

  const specializations = [
    "Chirurgie Dento-Alveolară",
    "Implantologie Orală",
    "Chirurgie Reconstructivă",
    "Extracții Complexe"
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
                    src="https://assets.polymet.ai/tall-turquoise-377702"
                    alt="Dr. Alexandru Kozma"
                    className="w-full aspect-[3/4] rounded-lg object-cover mb-6"
                  />

                  <h1 className="text-2xl font-semibold text-neutral-900 mb-2">
                    Dr. Alexandru Kozma
                  </h1>
                  <p className="text-[#9f8453] font-medium mb-6">
                    Medic Specialist Chirurgie Dento-Alveolară
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-sm text-neutral-600">
                      <BriefcaseIcon className="h-4 w-4 text-[#9f8453]" />

                      <span>20+ ani experiență</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-neutral-600">
                      <GraduationCapIcon className="h-4 w-4 text-[#9f8453]" />

                      <span>Specialist Chirurgie Dento-Alveolară</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-neutral-600">
                      <HeartIcon className="h-4 w-4 text-[#9f8453]" />

                      <span>Empatic și dedicat pacienților</span>
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
                      Despre Dr. Alexandru Kozma
                    </h2>
                  </div>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Dr. Alexandru Kozma este un medic specialist în chirurgie
                    dento-alveolară cu peste 20 de ani de experiență în domeniu.
                    Dedicat și empatic, Dr. Kozma pune pacientul pe primul loc
                    în fiecare intervenție.
                  </p>
                  <p className="text-neutral-700 leading-relaxed">
                    De peste 20 de ani, Dr. Alexandru Kozma transformă frica de
                    dentist în încredere și zâmbete, oferind tratamente de
                    calitate superioară într-un mediu confortabil și sigur.
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
                      Realizări Profesionale
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

              {/* Experience Details */}
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
                  <div className="space-y-4">
                    <div className="p-4 bg-neutral-50 rounded-lg">
                      <h3 className="font-semibold text-neutral-900 mb-2">
                        Chirurgie Dento-Alveolară Avansată
                      </h3>
                      <p className="text-neutral-700 text-sm leading-relaxed">
                        Experiență vastă în chirurgie dento-alveolară, cu mii de
                        intervenții realizate cu succes. Specializat în
                        tratamente complexe și cazuri dificile.
                      </p>
                    </div>
                    <div className="p-4 bg-neutral-50 rounded-lg">
                      <h3 className="font-semibold text-neutral-900 mb-2">
                        Abordare Centrată pe Pacient
                      </h3>
                      <p className="text-neutral-700 text-sm leading-relaxed">
                        Empatic și dedicat, Dr. Kozma transformă experiența
                        dentară într-una pozitivă, construind încredere și
                        oferind confort pacienților săi.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#323231] to-[#423723]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Programează o Consultație cu{" "}
            <span className="font-medium">Dr. Alexandru Kozma</span>
          </h2>
          <p className="text-xl text-[#bda476] mb-8">
            Beneficiază de experiența și dedicarea unui medic cu peste 20 de ani
            de practică
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
}
