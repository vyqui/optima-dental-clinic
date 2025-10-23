import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

interface Service {
  id: string;
  image: string;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    id: "cleaning",
    image: "https://assets.polymet.ai/solid-violet-581436",
    title: "Curățare Dentară Profesională",
    description:
      "Menținerea unei igiene orale optime este primul pas către un zâmbet sănătos. La Clinica Dentară Optima, oferim curățări profesionale complete, incluzând detartraj cu ultrasunete, periaj profesional și AirFlow – pentru o curățare eficientă, respirație proaspătă și prevenirea bolilor dentare și gingivale.",
    features: [
      "Detartraj cu Ultrasunete",
      "Periaj Profesional",
      "Tehnologie AirFlow",
      "Prevenirea Bolilor Gingivale",
    ],
  },
  {
    id: "orthodontics",
    image: "https://assets.polymet.ai/thoughtless-indigo-650237",
    title: "Ortodonție & Tratamente TMJ",
    description:
      "Corectăm alinierea dinților și îmbunătățim funcția articulației temporomandibulare prin tratamente ortodontice personalizate, adaptate vârstei și nevoilor fiecărui pacient. Fie că este vorba de un aparat dentar tradițional sau o soluție invizibilă, obiectivul nostru este un zâmbet echilibrat și o mușcătură sănătoasă, fără disconfort.",
    features: [
      "Aparate Dentare Tradiționale",
      "Aliniatori Invizibili",
      "Tratament TMJ",
      "Îngrijire Personalizată",
    ],
  },
  {
    id: "pediatric",
    image: "https://assets.polymet.ai/blushing-teal-227061",
    title: "Pedodonție (Stomatologie Pediatrică)",
    description:
      "Punem bazele unui zâmbet sănătos din copilărie. Oferim tratamente blânde, prietenoase cu copiii, într-un mediu cald și primitor. Ne asigurăm că fiecare vizită este o experiență pozitivă, ajutând la prevenirea fricii de dentist și încurajând obiceiuri sănătoase.",
    features: [
      "Mediu Prietenos cu Copiii",
      "Tratamente Blânde",
      "Îngrijire Preventivă",
      "Experiență Pozitivă",
    ],
  },
  {
    id: "aesthetic",
    image: "https://assets.polymet.ai/different-copper-043862",
    title: "Stomatologie Estetică cu Fațete Feldspatice",
    description:
      "Pentru un zâmbet impecabil și natural, folosim fațete feldspatice ultra-subțiri – o soluție minim invazivă care corectează forma, culoarea și poziția dinților. Designul este personalizat, iar rezultatul final este armonios, durabil și adaptat trăsăturilor faciale ale fiecărui pacient.",
    features: [
      "Fațete Ultra-subțiri",
      "Minim Invaziv",
      "Design Personalizat",
      "Rezultate Naturale",
    ],
  },
  {
    id: "implants",
    image: "https://assets.polymet.ai/acute-maroon-720462",
    title: "Implanturi Dentare Digitale",
    description:
      "Înlocuirea dinților lipsă se face cu precizie maximă și estetică superioară, folosind implanturi dentare premium inserate cu tehnologie digitală ghidată. Obții o dentiție funcțională și un zâmbet natural, cu durabilitate îndelungată și confort optim.",
    features: [
      "Tehnologie Digitală",
      "Implanturi Premium",
      "Plasare Precisă",
      "Estetică Naturală",
    ],
  },
  {
    id: "surgery",
    image: "https://assets.polymet.ai/crucial-salmon-731067",
    title: "Chirurgie Dentară Digitală & Minim Invazivă",
    description:
      "Efectuăm intervenții chirurgicale în condiții de siguranță și confort maxim, folosind tehnologie digitală ghidată. De la extracții și grefe osoase la plasarea implanturilor, tratamentele sunt minim invazive, cu vindecare rapidă și rezultate precise.",
    features: [
      "Tehnologie Digitală Ghidată",
      "Minim Invaziv",
      "Vindecare Rapidă",
      "Rezultate Precise",
    ],
  },
];

interface ServicesGridProps {
  className?: string;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ className }) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-[#323231] mb-4">
            Serviciile{" "}
            <span className="font-medium text-[#9f8453]">Noastre</span> - Optima
            Dental Clinic
          </h2>
          <p
            className="text-lg text-[#423723] max-w-2xl mx-auto"
            style={{ paddingRight: "13px", paddingLeft: "13px" }}
          >
            Ne dorim ca fiecare pacient să se simtă în siguranță, ascultat și
            bine informat, indiferent de vârstă sau problemă dentară. Punem
            accent pe prevenție, educație și soluții personalizate, pentru ca tu
            să ai parte de un zâmbet frumos și sănătos, pe termen lung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group hover:shadow-xl transition-all duration-300 border border-[#aaaaaa]/10 shadow-md hover:-translate-y-1 bg-white hover:border-[#bda476]/30"
            >
              <CardContent className="p-8">
                <div className="w-full h-48 mb-6 overflow-hidden rounded-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-xl font-semibold text-[#323231] mb-3 text-center">
                  {service.title}
                </h3>

                <p className="text-[#423723] mb-6 text-center leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-[#423723]"
                    >
                      <div className="w-1.5 h-1.5 bg-[#9f8453] rounded-full mr-3 flex-shrink-0" />

                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button
              size="lg"
              className="bg-[#9f8453] hover:bg-[#423723] text-white px-8 py-4 text-lg rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Vezi Toate Serviciile
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
