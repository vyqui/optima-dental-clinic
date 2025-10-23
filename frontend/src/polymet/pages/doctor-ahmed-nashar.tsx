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
  MailIcon
} from "lucide-react";

export const DoctorAhmedNasharPage: React.FC = () => {
  const qualifications = [
    "Restorative & Aesthetic Dentistry - Dubai",
    "British Academy of Restorative Dentistry - Manchester",
    "Full Mouth Rehabilitation - Prague Czech Republic",
    "Mastering Tooth Preparation For Veneers, Crowns, Onlays - Prague Czech Republic"
  ];

  const courses = [
    "Lector în cadrul congresului internațional pentru studenți și tineri medici Dentisium - Craiova",
    "Curs de izolare cu Diga - Abu Dhabi",
    "Curs - analog and digital trends in the minimally invasive dentistry - Cluj",
    "Curs de pregătire Tehnici de incizie, Lambouri și suturi - București",
    "Curs fațete integral ceramice - Brașov",
    "Curs Shape - Anterior Composite Veneers - Oradea",
    "Curs Shape - Preparation Ceramic Veneers - Oradea"
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
                    src="https://assets.polymet.ai/watery-green-224658"
                    alt="Dr. Ahmed Nashar"
                    className="w-full aspect-[3/4] rounded-lg object-cover mb-6"
                  />

                  <h1 className="text-2xl font-semibold text-neutral-900 mb-2">
                    Dr. Ahmed Nashar
                  </h1>
                  <p className="text-[#9f8453] font-medium mb-6">
                    CEO & founder - Medic Dentist
                  </p>

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
                      Despre Dr. Ahmed Nashar
                    </h2>
                  </div>
                  <p className="text-neutral-700 leading-relaxed">
                    Dr. Ahmed Nashar este unul dintre fondatorii Optima Dental
                    Clinic, cu o experiență vastă în stomatologie restaurativă
                    și estetică. Cu o pregătire internațională de excepție, Dr.
                    Nashar combină expertiza tehnică cu o abordare personalizată
                    pentru fiecare pacient, asigurându-se că fiecare tratament
                    este realizat la cele mai înalte standarde de calitate.
                  </p>
                </CardContent>
              </Card>

              {/* Qualifications */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#bda476]/10 rounded-full flex items-center justify-center">
                      <AwardIcon className="h-6 w-6 text-[#9f8453]" />
                    </div>
                    <h2 className="text-2xl font-semibold text-neutral-900">
                      Calificări Principale
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {qualifications.map((qual, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-[#9f8453] rounded-full mt-2 flex-shrink-0" />

                        <p className="text-neutral-700 leading-relaxed">
                          {qual}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Courses & Training */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#bda476]/10 rounded-full flex items-center justify-center">
                      <GraduationCapIcon className="h-6 w-6 text-[#9f8453]" />
                    </div>
                    <h2 className="text-2xl font-semibold text-neutral-900">
                      Cursuri & Training
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {courses.map((course, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors"
                      >
                        <div className="w-2 h-2 bg-[#9f8453] rounded-full mt-2 flex-shrink-0" />

                        <p className="text-neutral-700 leading-relaxed text-sm">
                          {course}
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
                      Stomatologie Restaurativă
                    </Badge>
                    <Badge className="bg-[#9f8453] text-white px-4 py-2 text-sm">
                      Stomatologie Estetică
                    </Badge>
                    <Badge className="bg-[#9f8453] text-white px-4 py-2 text-sm">
                      Fațete Ceramice
                    </Badge>
                    <Badge className="bg-[#9f8453] text-white px-4 py-2 text-sm">
                      Reabilitare Orală Completă
                    </Badge>
                    <Badge className="bg-[#9f8453] text-white px-4 py-2 text-sm">
                      Coroane și Onlay-uri
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
            <span className="font-medium">Dr. Ahmed Nashar</span>
          </h2>
          <p className="text-xl text-[#bda476] mb-8">
            Descoperă cum putem transforma zâmbetul tău cu tratamente
            personalizate
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
