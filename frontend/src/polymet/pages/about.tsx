import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  AwardIcon,
  UsersIcon,
  HeartHandshakeIcon,
  GraduationCapIcon,
  ShieldCheckIcon,
  StarIcon
} from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Alin Gabor",
    role: "Medic Dentist Principal & Fondator",
    specialization: "CEO & founder - Medic Dentist",
    experience: "15+ ani",
    image: "https://assets.polymet.ai/extended-bronze-278965",
    slug: "/doctor/alin-gabor"
  },
  {
    name: "Dr. Ahmed Nashar",
    role: "Ortodont",
    specialization: "CEO & founder - Medic Dentist",
    experience: "12+ ani",
    image: "https://assets.polymet.ai/watery-green-224658",
    slug: "/doctor/ahmed-nashar"
  },
  {
    name: "Dr. Ana Bătănoiu",
    role: "Chirurg Oral",
    specialization: "Medic Specialist Ortodontie si Ortopedie Dento-Faciala",
    experience: "10+ ani",
    image: "https://assets.polymet.ai/striped-rose-706538",
    slug: "/doctor/ana-batanoiu"
  },
  {
    name: "Dr. Alexandru Kozma",
    role: "Endodont",
    specialization: "Medic Specialist Chirurgie Dento-Alveolara",
    experience: "8+ ani",
    image: "https://assets.polymet.ai/tall-turquoise-377702",
    slug: "/doctor/alexandru-kozma"
  },
  {
    name: "Dr. Cristian Giucoane",
    role: "Parodontolog",
    specialization: "Medic Specialist Endodontie",
    experience: "11+ ani",
    image: "https://assets.polymet.ai/upper-ivory-687829",
    slug: "/doctor/cristian-giucoane"
  },
  {
    name: "Dr. Reit Silviu",
    role: "Protezist",
    specialization: "Medic Specialist Chirurgie Dento-Alveolara",
    experience: "14+ ani",
    image: "https://assets.polymet.ai/fragile-lime-640719",
    slug: "/doctor/reit-silviu"
  },
  {
    name: "Dr. Daniel Tataru",
    role: "Implantolog",
    specialization: "Medic Practica Limitata la Endodontie",
    experience: "20+ ani",
    image: "https://assets.polymet.ai/separate-violet-193732",
    slug: "/doctor/daniel-tataru"
  },
  {
    name: "Dr. Diana Popescu",
    role: "Specialist Parodontolog",
    specialization: "Medic Specialist Parodontolog",
    experience: "10+ ani",
    image: "https://assets.polymet.ai/fluttering-magenta-929592",
    slug: "/doctor/diana-popescu"
  }
];

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#bda476]/10 to-[#aaaaaa]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6">
              Despre{" "}
              <span className="font-medium text-[#9f8453]">
                Optima Dental Clinic
              </span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Unde îngrijirea dentară excepțională întâlnește confortul de
              acasă. Povestea noastră este una despre pasiune, dedicație și
              angajament neclintit față de sănătatea ta orală.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://assets.polymet.ai/vocal-azure-625136"
                alt="Optima Dental Clinic Interior"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>

            <div>
              <h2 className="text-3xl font-light text-neutral-900 mb-6">
                Povestea{" "}
                <span className="font-medium text-[#9f8453]">Noastră</span>
              </h2>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                Optima Dental Clinic s-a născut dintr-o viziune simplă, dar
                puternică: să creeze o practică dentară unde pacienții se simt
                ca în propria sufragerie, primind îngrijire dentară de înaltă
                calitate.
              </p>
              <p className="text-neutral-700 mb-8 leading-relaxed">
                Situată în nordul Bucureștiului, Optima Dental Clinic a fost
                creată din dorința de a reda oamenilor încrederea în propriul
                zâmbet. Echipa noastră este formată din medici cu vastă
                experiență, specializați la congrese internaționale și mereu
                conectați la cele mai noi inovații în domeniul stomatologiei.
                Mai mult decât profesioniști — suntem partenerii tăi în
                călătoria spre un zâmbet sănătos și frumos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 mb-4">
              Misiunea și{" "}
              <span className="font-medium text-[#9f8453]">
                Valorile Noastre
              </span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Să facem oamenii să zâmbească larg, sincer, fără complexe. Să le
              oferim nu doar tratamente, ci încredere, siguranță și o experiență
              medicală pozitivă, de la prima vizită până la zâmbetul final.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-[#bda476]/10 rounded-full mb-6 mx-auto">
                  <HeartHandshakeIcon className="h-8 w-8 text-[#9f8453]" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  Multidisciplinaritate
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Planul de tratament este coordonat de un medic de caz împreună
                  cu o echipă de specialiști.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-[#bda476]/10 rounded-full mb-6 mx-auto">
                  <AwardIcon className="h-8 w-8 text-[#9f8453]" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  Excelență
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Tehnologii de ultimă generație, tratamente personalizate și
                  tehnici avansate pentru rezultate excepționale.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-[#bda476]/10 rounded-full mb-6 mx-auto">
                  <UsersIcon className="h-8 w-8 text-[#9f8453]" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  Centrat pe Pacient
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Nevoile, confortul și obiectivele tale sunt prioritatea
                  noastră și ghidează fiecare decizie pe care o luăm.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-[#bda476]/10 rounded-full mb-6 mx-auto">
                  <GraduationCapIcon className="h-8 w-8 text-[#9f8453]" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  All-in-one
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Fiecare etapă a tratamentului are loc într-o singură clinică,
                  pentru soluții corecte, eficiente și rapide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-[#323231]/5 to-[#bda476]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 mb-4">
              Cunoaște Echipa{" "}
              <span className="font-medium text-[#9f8453]">
                Noastră de Experți
              </span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Profesioniștii noștri experimentati sunt dedicați să îți ofere
              îngrijire dentară de cea mai înaltă calitate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[3/4] rounded-lg mx-auto mb-6 object-cover"
                  />

                  <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                    {member.name}
                  </h3>
                  <p className="text-[#9f8453] font-medium mb-6">
                    {member.specialization}
                  </p>
                  <Link to={member.slug}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#9f8453] text-[#9f8453] hover:bg-[#9f8453] hover:text-white transition-colors duration-300"
                    >
                      Vezi CV
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#323231] to-[#423723]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Gata să Experimentezi{" "}
            <span className="font-medium">Diferența Optima?</span>
          </h2>
          <p className="text-xl text-[#bda476] mb-8">
            Alătură-te miilor de pacienți mulțumiți care ne încredințează
            zâmbetele lor
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => (window.location.href = "/contact")}
              size="lg"
              className="bg-white text-[#323231] hover:bg-[#f5f5f5] hover:text-[#323231] px-8 py-4 text-lg rounded-full transition-colors duration-300"
            >
              Programează Consultație
            </Button>
            <Button
              onClick={() => (window.location.href = "tel:+40767702703")}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#323231] px-8 py-4 text-lg rounded-full transition-colors duration-300"
            >
              Contactează-ne
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
