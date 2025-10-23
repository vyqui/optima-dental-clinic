import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon, QuoteIcon, ExternalLinkIcon } from "lucide-react";

interface Testimonial {
  name: string;
  content: string;
  rating: number;
  link: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Bogdan Fratilescu",
    content:
      "Optima Dental Clinic = Profesionalism👌 Am avut ocazia să merg la Dr. Alin Gabor și vă pot spune ca este un adevarăt profesionist! Îți vorbește tot timpul cu calm și respect, te ascultă cu răbdare și îți explică tot ce urmează să facă, pas cu pas. Este atent la detalii și la confortul pacientului. Echipa foarte primitoare, cu zâmbetul pe buze. O atmosferă prietenoasă.🙏 RECOMAND😊",
    rating: 5,
    link: "https://share.google/AMsG1RMpiSve1aKvL"
  },
  {
    name: "Ungureanu Maria",
    content:
      "Am avut o experiență excelentă la Optima Dental Clinic din București (Șos. Nordului) și simt nevoia să o împărtășesc. Am fost tratată de Dr. Ahmed Nashar, un medic excepțional — o persoană caldă, atentă și mereu zâmbitoare. Mi-a explicat cu răbdare fiecare pas al procedurii și mi-a oferit claritate și încredere în planul de tratament pe termen lung. Se simte cu adevărat implicarea și grija față de pacient, ceea ce m-a făcut să mă simt în siguranță pe tot parcursul vizitei. Clinica este modernă, curată și foarte primitoare, completând perfect profesionalismul echipei. O recomand cu toată încrederea celor care caută un medic stomatolog atent, empatic și foarte bine pregătit.",
    rating: 5,
    link: "https://share.google/djBAbvVa1irYS4ugC"
  },
  {
    name: "Ana Mihaela Fratila",
    content:
      "Am fost în clinica domnului dr Alin Gabor - un om mai întâi de toate foarte empatic și nu doar cu cele două fetițe ale mele ci cu toți pacienții care intrau pe ușă clinici. Un medic care mi a răspuns tuturor întrebărilor legate de fricile și temerile mele în legătură cu alergiile fetelor legate de medicamente, anestezii etc. ce se folosesc în stomatologie. Țin să precizez ca fetițele mele până azi aveau teamă de medicul stomatolog din experiențele trecute cu alți medici iar aici fetele au întrebat când am ieșit din clinică când mai venim la domnul Alin. Vă mulțumim din suflet și cu siguranță revenim cu toată încrederea.",
    rating: 5,
    link: "https://share.google/2ylRwkhoMT7bB3eTQ"
  },
  {
    name: "Claudia Balan",
    content:
      "Am avut o experiență excelentă în cadrul clinicii, datorită profesionalismului și atenției deosebite oferite de domnul doctor Alin Gabor. De la prima consultație, am remarcat grija pentru detalii, comunicarea clară și empatia față de pacient. Întregul proces a fost bine explicat, iar tratamentele au fost efectuate cu maximă precizie și răbdare. Recomand cu încredere serviciile domnului doctor Gabor oricui își dorește un act medical de calitate într-un mediu sigur și modern.",
    rating: 5,
    link: "https://share.google/ngegNsN5mO1q7b6tL"
  },
  {
    name: "Vali Patrascu",
    content:
      "După mult timp în care evitam să zâmbesc cu încredere, am ajuns aici și a fost cea mai bună decizie. Clinica e super modernă, curată, cu un vibe luxury, dar în același timp te simți relaxat, nu ca într-un loc rece sau rigid. Vreau să-i mulțumesc sincer lui Dr. Ahmed Alnashar – foarte calm, atent, mi-a explicat tot pas cu pas și chiar m-a făcut să mă simt în siguranță. Se vede că are experiență și că îi pasă. A contat enorm. Prețurile sunt corecte pentru ce primești. Nu am simțit deloc că mi se vinde ceva în plus – totul a fost despre ce am nevoie și cum putem rezolva. M-au ajutat mult, mai mult decât pot spune în câteva rânduri. Mulțumesc! 🙏",
    rating: 5,
    link: "https://share.google/SoZWTYfydXGwkRYLI"
  },
  {
    name: "Radu Petre",
    content:
      "Recomand cu încredere Dr.Ahmed Nashar ! Dupa o lunga perioada petrecuta in cautarea unui doctor stomatolog care sa ma ajute sa scap de frica de dentist, am ajuns la dansul, cu care pot spune ca am rezonat inca de la prima intalnire. Serviciile oferite la Optima Dental au fost la superlativ, comunicarea extrem de transparenta si durerea in urma tratamentelor aproape inexistenta.",
    rating: 5,
    link: "https://share.google/3VmBnX5eiSm0LDL1C"
  }
];

interface TestimonialsSectionProps {
  className?: string;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  className
}) => {
  return (
    <section
      className={`py-20 bg-gradient-to-br from-[#9f8453]/5 to-[#bda476]/10 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-[#323231] mb-4">
            Ce Spun{" "}
            <span className="font-medium text-[#9f8453]">Pacienții Noștri</span>
          </h2>
          <p className="text-lg text-[#423723] max-w-2xl mx-auto">
            Experiențele reale ale pacienților noștri vorbesc despre calitatea
            îngrijirii pe care o oferim
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border border-[#aaaaaa]/10 shadow-md hover:-translate-y-1 bg-white hover:border-[#bda476]/30"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className="h-4 w-4 fill-[#9f8453] text-[#9f8453]"
                      />
                    ))}
                  </div>
                  <QuoteIcon className="h-6 w-6 text-[#bda476]/40" />
                </div>

                <p className="text-[#423723] text-sm leading-relaxed mb-4 line-clamp-6">
                  {testimonial.content}
                </p>

                <div className="border-t border-[#aaaaaa]/10 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-[#323231] text-sm">
                        {testimonial.name}
                      </p>
                    </div>
                    <a
                      href={testimonial.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[#9f8453] hover:text-[#bda476] transition-colors duration-200 text-xs font-medium group/link"
                    >
                      Vezi recenzie
                      <ExternalLinkIcon className="h-3 w-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#423723]/80 text-sm">
            Toate recenziile sunt de la pacienți reali și verificați
          </p>
        </div>
      </div>
    </section>
  );
};
