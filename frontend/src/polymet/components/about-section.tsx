import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  AwardIcon,
  UsersIcon,
  HeartHandshakeIcon,
  GraduationCapIcon,
} from "lucide-react";

interface AboutSectionProps {
  className?: string;
}

const values = [
  {
    icon: <HeartHandshakeIcon className="h-6 w-6" />,

    title: "Multidisciplinaritate",
    description:
      "Planul de tratament este coordonat de un medic de caz împreună cu o echipă de specialiști.",
  },
  {
    icon: <AwardIcon className="h-6 w-6" />,

    title: "Excelență",
    description:
      "Tehnologii de ultimă generație, tratamente personalizate și tehnici avansate pentru rezultate excepționale.",
  },
  {
    icon: <UsersIcon className="h-6 w-6" />,

    title: "Centrat pe Pacient",
    description:
      "Nevoile, confortul și obiectivele tale sunt prioritatea noastră și ghidează fiecare decizie pe care o luăm.",
  },
  {
    icon: <GraduationCapIcon className="h-6 w-6" />,

    title: "All-in-one",
    description:
      "Fiecare etapă a tratamentului are loc într-o singură clinică, pentru soluții corecte, eficiente și rapide.",
  },
];

export const AboutSection: React.FC<AboutSectionProps> = ({ className }) => {
  return (
    <section
      className={`py-20 bg-gradient-to-br from-[#bda476]/5 to-[#aaaaaa]/10 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-[#323231] mb-6">
              Bine ați venit la
              <span className="font-medium text-[#9f8453] block">
                Optima Dental Clinic
              </span>
            </h2>

            <p className="text-lg text-[#423723] mb-6 leading-relaxed">
              La Clinica Dentară Optima, credem că îngrijirea dentară
              excepțională ar trebui să se simtă la fel de confortabil ca în
              propria ta sufragerie. Practica noastră modernă combină tehnologia
              de varf cu o atmosferă caldă și primitoare.
            </p>

            <p className="text-[#423723]/80 mb-8 leading-relaxed">
              Cu o echipă de medici pasionați, aparatură de ultimă generație și
              o abordare orientată spre confortul pacientului, oferim o gamă
              completă de servicii stomatologice, de la consultații de rutină,
              până la tratamente complexe de estetică dentară și implantologie.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/about">
                <Button
                  size="lg"
                  className="bg-[#9f8453] hover:bg-[#423723] text-white px-8 rounded-full"
                >
                  Cunoaște Echipa Noastră
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#9f8453] text-[#9f8453] hover:bg-[#9f8453] hover:text-white px-8 rounded-full bg-transparent"
                >
                  Povestea Noastră
                </Button>
              </Link>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border border-[#aaaaaa]/10 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white hover:border-[#bda476]/30"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#bda476]/10 rounded-full mb-4">
                    <div className="text-[#9f8453]">{value.icon}</div>
                  </div>

                  <h3 className="text-lg font-semibold text-[#323231] mb-3">
                    {value.title}
                  </h3>

                  <p className="text-[#423723] text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
