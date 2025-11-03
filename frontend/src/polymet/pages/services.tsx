import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { AnimatedTreatmentPlan } from "@/polymet/components/animated-treatment-plan";
import {
  SmileIcon,
  ShieldIcon,
  SparklesIcon,
  HeartIcon,
  StarIcon,
  ZapIcon,
  CheckIcon,
  ClockIcon,
  AwardIcon,
  ScissorsIcon,
  CircleIcon,
  ActivityIcon
} from "lucide-react";

const services = [
  {
    id: "chirurgie-dentara",
    icon: <ScissorsIcon className="h-12 w-12" />,

    title: "Chirurgie Dentară",
    description:
      "Intervenții precise și minim invazive pentru sănătatea ta orală cu tehnologii de ultimă generație.",
    features: [
      "Extracții dentare simple și complexe",
      "Chirurgie parodontală",
      "Chirurgie preimplantologică",
      "Implantologie ghidată digital",
      "Regenerare țesuturi",
      "Îngrijire postoperatorie completă"
    ],

    duration: "60-180 minute",
    popular: true,
    link: "/services/chirurgie-dentara"
  },
  {
    id: "parodontologie",
    icon: <ShieldIcon className="h-12 w-12" />,

    title: "Parodontologie",
    description:
      "Tratamentul specializat al bolilor gingivale și al țesuturilor de susținere ale dinților.",
    features: [
      "Tratament bolilor parodontale",
      "Detartraj profesional",
      "Chirurgie parodontală",
      "Regenerare țesuturi parodontale",
      "Menținerea sănătății gingivale",
      "Prevenție și educație"
    ],

    duration: "45-120 minute",
    popular: false,
    link: "/services/parodontologie"
  },
  {
    id: "odontoterapie",
    icon: <CircleIcon className="h-12 w-12" />,

    title: "Odontoterapie",
    description:
      "Tratarea cariilor și restaurarea dinților cu materiale moderne și tehnici conservatoare.",
    features: [
      "Tratarea cariilor dentare",
      "Plombe estetice",
      "Restaurări directe și indirecte",
      "Protecția pulpei dentare",
      "Tratamente preventive",
      "Monitorizare și urmărire"
    ],

    duration: "30-90 minute",
    popular: true,
    link: "/services/odontoterapie"
  },
  {
    id: "endodontie",
    icon: <ActivityIcon className="h-12 w-12" />,

    title: "Endodonție",
    description:
      "Tratamentul de canal cu tehnologii moderne pentru salvarea dinților afectați.",
    features: [
      "Tratament de canal",
      "Retreatament endodontic",
      "Chirurgie endodontică",
      "Tehnologie rotativă modernă",
      "Obturație hermetică",
      "Urmărire pe termen lung"
    ],

    duration: "60-120 minute",
    popular: false,
    link: "/services/endodontie"
  },
  {
    id: "protetica-dentara",
    icon: <SmileIcon className="h-12 w-12" />,

    title: "Protetică Dentară",
    description:
      "Restaurarea funcției și esteticii prin proteze fixe și mobile de înaltă calitate.",
    features: [
      "Coroane și punți dentare",
      "Proteze totale și parțiale",
      "Implanturi dentare",
      "Fațete dentare",
      "Proteze pe implanturi",
      "Reabilitare orală completă"
    ],

    duration: "90-240 minute",
    popular: true,
    link: "/services/protetica-dentara"
  },
  {
    id: "ortodontie",
    icon: <StarIcon className="h-12 w-12" />,

    title: "Ortodonție",
    description:
      "Corectarea poziției dinților și a mușcăturii pentru un zâmbet perfect și funcțional.",
    features: [
      "Aparate dentare fixe",
      "Aparate mobile",
      "Aliniatori invizibili",
      "Ortodonție pentru adulți",
      "Tratament interceptiv",
      "Reținere ortodontică"
    ],

    duration: "12-36 luni",
    popular: false,
    link: "/services/ortodontie"
  },
  {
    id: "radiologie-dentara",
    icon: <ZapIcon className="h-12 w-12" />,

    title: "Radiologie Dentară",
    description:
      "Investigații imagistice moderne pentru diagnostic precis și planificarea tratamentelor.",
    features: [
      "Radiografii digitale",
      "Tomografie computerizată 3D",
      "Radiografii panoramice",
      "Imagistică pentru implanturi",
      "Diagnostic diferențial",
      "Planificare chirurgicală"
    ],

    duration: "15-30 minute",
    popular: false,
    link: "/services/radiologie-dentara"
  }
];

const benefits = [
  {
    icon: <AwardIcon className="h-6 w-6" />,

    title: "Îngrijire Expertă",
    description: "15+ ani de experiență cu cele mai noi tehnici"
  },
  {
    icon: <ShieldIcon className="h-6 w-6" />,

    title: "Sigur & Steril",
    description:
      "Cele mai înalte standarde de igienă și protocoale de siguranță"
  },
  {
    icon: <ClockIcon className="h-6 w-6" />,

    title: "Programare Flexibilă",
    description:
      "Ore de consultație convenabile care se potrivesc programului tău"
  },
  {
    icon: <HeartIcon className="h-6 w-6" />,

    title: "Confortul pe Primul Loc",
    description: "Mediu fără anxietate cu opțiuni de sedație"
  }
];

export const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#aaaaaa]/10 to-[#bda476]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-[#323231] mb-6">
              Serviciile{" "}
              <span className="font-medium text-[#9f8453]">Noastre</span>
            </h1>
            <p className="text-xl text-[#423723] max-w-3xl mx-auto leading-relaxed">
              Îngrijire dentară cuprinzătoare adaptată nevoilor tale unice. De
              la curățări de rutină la transformari complete ale zâmbetului,
              suntem aici să te ajutăm să obții o sănătate orală optimă.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#bda476]/10 rounded-full mb-4 mx-auto">
                    <div className="text-[#9f8453]">{benefit.icon}</div>
                  </div>
                  <h3 className="font-semibold text-[#323231] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#423723]">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Animated Treatment Plan */}
          {/* <div className="mt-20">
            <AnimatedTreatmentPlan />
          </div> */}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1 relative overflow-hidden"
              >
                {service.popular && (
                  <Badge className="absolute top-4 right-4 bg-[#9f8453] hover:bg-[#423723] text-white">
                    Cel Mai Popular
                  </Badge>
                )}

                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-20 h-20 bg-[#bda476]/10 rounded-full mb-6 group-hover:bg-[#bda476]/20 transition-colors duration-300">
                    <div className="text-[#9f8453] group-hover:text-[#423723] transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-[#323231] mb-4">
                    {service.title}
                  </h3>

                  <p className="text-[#423723] mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-4 mb-6 text-sm text-neutral-500">
                    <div className="flex items-center gap-1">
                      <ClockIcon className="h-4 w-4" />

                      <span>{service.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <h4 className="font-semibold text-neutral-900">
                      Ce Este Inclus:
                    </h4>
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckIcon className="h-5 w-5 text-[#9f8453] mt-0.5 flex-shrink-0" />

                        <span className="text-sm text-[#423723]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to="/contact" className="flex-1">
                      <Button className="bg-[#9f8453] hover:bg-[#423723] text-white w-full rounded-full">
                        Fă o programare
                      </Button>
                    </Link>
                    <Link to={service.link} className="flex-1">
                      <Button
                        variant="outline"
                        className="border-[#9f8453] text-[#9f8453] hover:bg-[#9f8453] hover:text-white w-full rounded-full bg-transparent"
                      >
                        Afla Mai Mult
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-br from-[#bda476]/5 to-[#9f8453]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-[#323231] mb-4">
              Tehnologie{" "}
              <span className="font-medium text-[#9f8453]">Avansată</span>
            </h2>
            <p className="text-lg text-[#423723] max-w-2xl mx-auto">
              Folosim cea mai recentă tehnologie dentară pentru a oferi
              tratamente precise, confortabile și eficiente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#bda476]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SparklesIcon className="h-8 w-8 text-[#9f8453]" />
                </div>
                <h3 className="text-xl font-semibold text-[#323231] mb-4">
                  Imagistică Digitală
                </h3>
                <p className="text-[#423723] text-sm leading-relaxed">
                  Radiografii digitale de înaltă rezoluție și imagistică 3D
                  pentru diagnostic precis și planificarea tratamentului.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#bda476]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <StarIcon className="h-8 w-8 text-[#9f8453]" />
                </div>
                <h3 className="text-xl font-semibold text-[#323231] mb-4">
                  Stomatologie cu Laser
                </h3>
                <p className="text-[#423723] text-sm leading-relaxed">
                  Tratamente cu laser minim invazive pentru bolile gingivale,
                  prepararea cavităților și procedurile pe țesuturilor moi.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#bda476]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HeartIcon className="h-8 w-8 text-[#9f8453]" />
                </div>
                <h3 className="text-xl font-semibold text-[#323231] mb-4">
                  Opțiuni de Sedație
                </h3>
                <p className="text-[#423723] text-sm leading-relaxed">
                  Multiple opțiuni de sedație disponibile pentru a-ți asigura
                  confortul în timpul oricărei proceduri.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#9f8453] to-[#bda476]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Gata să Îți Începi{" "}
            <span className="font-medium">Călătoria Dentară?</span>
          </h2>
          <p className="text-xl text-[#f5f3f0] mb-8">
            Programează o consultație astăzi și descopera diferența Optima
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#9f8453] hover:bg-[#f5f3f0] px-8 py-4 text-lg rounded-full"
            >
              Rezervă Programări
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#9f8453] px-8 py-4 text-lg rounded-full bg-transparent"
            >
              Sună Acum
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
