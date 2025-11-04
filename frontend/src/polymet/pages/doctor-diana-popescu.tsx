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
  HeartIcon,
  LanguagesIcon
} from "lucide-react";

export const DoctorDianaPopescuPage: React.FC = () => {
  const education = [
    {
      period: "2015-2021",
      institution: "UMF Carol Davila",
      degree: "Facultatea de Medicină Dentară",
      status: "Student"
    },
    {
      period: "2022-2024",
      institution: "UMF Carol Davila",
      degree: "Medic Rezident Parodontologie",
      status: "Rezident"
    }
  ];

  const experience = [
    {
      period: "Martie 2022 - Iulie 2024",
      position: "Medic Parodontolog",
      clinic: "Clinicile Dr Leahu"
    },
    {
      period: "August 2023 - prezent",
      position: "Medic Parodontolog",
      clinic: "Samident"
    },
    {
      period: "August 2024 - prezent",
      position: "Medic Parodontolog & Coordonator Medical",
      clinic: "Regina Maria Dental Clinics"
    },
    {
      period: "August 2024 - prezent",
      position: "Medic Parodontolog",
      clinic: "Methahealth Center"
    }
  ];

  const courses = [
    {
      year: "2023",
      title: "Congres Perio-Ortho EFP Master Clinic",
      location: "Antwerpen, Belgia"
    },
    {
      year: "2021",
      title: "Izolarea cu diga – Online Course",
      instructor: "Dr. Călin Pop"
    },
    {
      year: "2021",
      title:
        "Restaurări directe pe dinții posteriori: de la adeziune la stratificare",
      instructor: "Dr. Eduard Mărgelatu"
    },
    {
      year: "2021",
      title:
        "Diagnosticul și planificarea tratamentului implanto-protetic în zona frontală",
      instructor: "Dr. Mihai Sandulescu"
    },
    {
      year: "2022",
      title: "Suturi în chirurgia orală",
      location: "Optimitul"
    },
    {
      year: "2022",
      title: "Protetica fixă, modul 1",
      instructor: "Dr. Dragoș Smărăndescu, Terradent"
    },
    {
      year: "2023",
      title: "Non-Surgical Masterclass in Periodontal Treatment",
      instructor: "Prof. Dr. Marisa Roncati (teorie & hands-on)"
    },
    {
      year: "2024",
      title: "Soft Tissue Management – Online",
      instructor: "Prof. Giovanni Zucchelli"
    },
    {
      year: "2024",
      title: "Flaps & Resective Surgery – Online",
      instructor: "Prof. Carusi & Prof. Benfenati"
    },
    {
      year: "2024",
      title: "Terapia parodontală regenerativă Opossum",
      instructor: "Asist. Univ. Dr. Ismail Bahtiar (teorie & hands-on)"
    },
    {
      year: "2024",
      title: "Tehnici chirurgicale utilizate în patologia parodontală",
      instructor: "Prof. Univ. Dr. Anca Dumitriu (teorie & hands-on)"
    },
    {
      year: "2025",
      title: "Advanced Soft Tissue Masterclass",
      instructor: "Prof. Giulio Rasperini, București (teorie & hands-on)"
    },
    {
      year: "2025",
      title: "Advanced Soft Tissue Management Techniques",
      instructor: "Prof. Zucchelli Institute, Bologna (teorie & hands-on)"
    }
  ];

  const competencies = [
    "Tratamente parodontale avansate, chirurgicale și non chirurgicale",
    "Chirurgie regenerativă",
    "Utilizarea laserului în manevre minim invazive",
    "Terapie PRGF",
    "Magnificație",
    "Comunicare empatică cu pacienții",
    "Managementul durerii și al anxietății pacienților"
  ];

  const languages = [
    { language: "Engleză", level: "Avansat" },
    { language: "Franceză", level: "Intermediar" },
    { language: "Germană", level: "Intermediar" }
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
                    src="https://assets.polymet.ai/fluttering-magenta-929592"
                    alt="Dr. Diana Popescu"
                    className="w-full aspect-[3/4] rounded-lg object-cover mb-6"
                  />

                  <h1 className="text-2xl font-semibold text-neutral-900 mb-2">
                    Dr. Diana Popescu
                  </h1>
                  <p className="text-[#9f8453] font-medium mb-6">
                    Medic Specialist Parodontolog
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-sm text-neutral-600">
                      <BriefcaseIcon className="h-4 w-4 text-[#9f8453]" />

                      <span>3 ani experiență specializată</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-neutral-600">
                      <AwardIcon className="h-4 w-4 text-[#9f8453]" />

                      <span>Membru EFP & SPR</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-neutral-600">
                      <LanguagesIcon className="h-4 w-4 text-[#9f8453]" />

                      <span>Multilingvă (EN, FR, DE)</span>
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
                      <HeartIcon className="h-6 w-6 text-[#9f8453]" />
                    </div>
                    <h2 className="text-2xl font-semibold text-neutral-900">
                      Despre Dr. Diana Popescu
                    </h2>
                  </div>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Dr. Diana Popescu este medic stomatolog specializat în
                    parodontologie, cu 3 ani de experiență în diagnosticul și
                    tratamentul bolilor parodontale. Este membru al Societății
                    de Parodontologie din România și al Federației Europene de
                    Parodontologie.
                  </p>
                  <p className="text-neutral-700 leading-relaxed">
                    Entuziasmul și empatia sunt cuvintele cheie ce îi ghidează
                    atitudinea de zi cu zi, iar relația medic-pacient, pe care o
                    construiește cu grijă, este întotdeauna bazată pe comunicare
                    și încredere.
                  </p>
                </CardContent>
              </Card>

              {/* Education */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#bda476]/10 rounded-full flex items-center justify-center">
                      <GraduationCapIcon className="h-6 w-6 text-[#9f8453]" />
                    </div>
                    <h2 className="text-2xl font-semibold text-neutral-900">
                      Educație
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {education.map((edu, index) => (
                      <div
                        key={index}
                        className="p-5 bg-gradient-to-r from-[#bda476]/5 to-[#aaaaaa]/5 rounded-lg border-l-4 border-[#9f8453]"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-neutral-900">
                            {edu.degree}
                          </h3>
                          <Badge className="bg-[#9f8453] text-white">
                            {edu.period}
                          </Badge>
                        </div>
                        <p className="text-neutral-600 text-sm">
                          {edu.institution}
                        </p>
                      </div>
                    ))}
                  </div>
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
                    {experience.map((exp, index) => (
                      <div
                        key={index}
                        className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-neutral-900">
                            {exp.position}
                          </h3>
                          <span className="text-xs text-neutral-500">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-neutral-600 text-sm">{exp.clinic}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card> */}

              {/* Competencies */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#bda476]/10 rounded-full flex items-center justify-center">
                      <AwardIcon className="h-6 w-6 text-[#9f8453]" />
                    </div>
                    <h2 className="text-2xl font-semibold text-neutral-900">
                      Competențe
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {competencies.map((comp, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-neutral-50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-[#9f8453] rounded-full mt-2 flex-shrink-0" />

                        <p className="text-neutral-700 text-sm leading-relaxed">
                          {comp}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Courses */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#bda476]/10 rounded-full flex items-center justify-center">
                      <GraduationCapIcon className="h-6 w-6 text-[#9f8453]" />
                    </div>
                    <h2 className="text-2xl font-semibold text-neutral-900">
                      Cursuri & Congrese
                    </h2>
                  </div>
                  <div className="max-h-96 overflow-y-auto space-y-2 pr-2">
                    {courses.map((course, index) => (
                      <div
                        key={index}
                        className="flex gap-3 p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[#9f8453] rounded-lg flex items-center justify-center">
                            <span className="text-white font-semibold text-xs">
                              {course.year}
                            </span>
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <h4 className="font-medium text-neutral-900 text-sm mb-1">
                            {course.title}
                          </h4>
                          <p className="text-neutral-600 text-xs">
                            {course.instructor || course.location}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Languages */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#bda476]/10 rounded-full flex items-center justify-center">
                      <LanguagesIcon className="h-6 w-6 text-[#9f8453]" />
                    </div>
                    <h2 className="text-2xl font-semibold text-neutral-900">
                      Limbi Străine
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {languages.map((lang, index) => (
                      <div
                        key={index}
                        className="p-4 bg-gradient-to-br from-[#bda476]/10 to-[#aaaaaa]/5 rounded-lg text-center"
                      >
                        <h3 className="font-semibold text-neutral-900 mb-1">
                          {lang.language}
                        </h3>
                        <p className="text-neutral-600 text-sm">{lang.level}</p>
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
                      Parodontologie
                    </Badge>
                    <Badge className="bg-[#9f8453] text-white px-4 py-2 text-sm">
                      Chirurgie Parodontală
                    </Badge>
                    <Badge className="bg-[#9f8453] text-white px-4 py-2 text-sm">
                      Chirurgie Regenerativă
                    </Badge>
                    <Badge className="bg-[#9f8453] text-white px-4 py-2 text-sm">
                      Terapie Laser
                    </Badge>
                    <Badge className="bg-[#9f8453] text-white px-4 py-2 text-sm">
                      Terapie PRGF
                    </Badge>
                    <Badge className="bg-[#9f8453] text-white px-4 py-2 text-sm">
                      Soft Tissue Management
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
            <span className="font-medium">Dr. Diana Popescu</span>
          </h2>
          <p className="text-xl text-[#bda476] mb-8">
            Tratamente parodontale moderne cu o abordare empatică și
            personalizată
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
