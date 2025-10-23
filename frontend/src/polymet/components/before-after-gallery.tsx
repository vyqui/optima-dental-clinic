import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface BeforeAfterItem {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  treatment: string;
}

const galleryItems: BeforeAfterItem[] = [
  {
    id: "4",
    title: "Restaurare cu Fațete",
    description:
      "Transformare estetică completă cu fațete ceramice ultra-subțiri.",
    beforeImage: "https://assets.polymet.ai/fancy-sapphire-954395",
    afterImage: "https://assets.polymet.ai/horrible-coffee-459024",
    treatment: "Fațete Ceramice",
  },
  {
    id: "1",
    title: "Transformare Completă cu Implanturi",
    description:
      "Pacient cu lipsă multiplă de dinți, restaurat cu implanturi dentare și coroane ceramice.",
    beforeImage: "https://assets.polymet.ai/preferred-turquoise-205762",
    afterImage: "https://assets.polymet.ai/radical-apricot-242030",
    treatment: "Implanturi Dentare + Coroane Ceramice",
  },
  {
    id: "2",
    title: "Ortodontie Invizibilă",
    description:
      "Corectarea malocluziei cu aparate ortodontice invizibile în 18 luni.",
    beforeImage: "https://assets.polymet.ai/operational-emerald-457947",
    afterImage: "https://assets.polymet.ai/comparable-moccasin-531388",
    treatment: "Ortodontie Invizibilă",
  },
];

interface BeforeAfterCardProps {
  item: BeforeAfterItem;
}

const BeforeAfterCard: React.FC<BeforeAfterCardProps> = ({ item }) => {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="relative">
          <div
            className="relative h-96 overflow-hidden cursor-pointer"
            onMouseEnter={() => setShowAfter(true)}
            onMouseLeave={() => setShowAfter(false)}
          >
            <img
              src={showAfter ? item.afterImage : item.beforeImage}
              alt={
                showAfter ? `După - ${item.title}` : `Înainte - ${item.title}`
              }
              className="w-full h-full object-cover transition-all duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b08]/70 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 right-4">
              <div className="text-white">
                <span className="text-xs bg-[#9f8453] px-2 py-1 rounded text-white font-medium">
                  {item.treatment}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-semibold text-lg text-[#0d0b08] mb-2">
            {item.title}
          </h3>
          <p className="text-[#423723] text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export const BeforeAfterGallery: React.FC = () => {
  return (
    <section className="py-16 bg-[#323231]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#bda476] mb-4"
            style={{ color: "#ffffff" }}
          >
            Galerie Înainte & După
          </h2>
          <p className="text-lg text-[#aaaaaa] max-w-3xl mx-auto">
            Descoperă transformările incredibile realizate de echipa noastră de
            specialiști. Fiecare zâmbet spune o poveste de succes și încredere
            regăsită.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {galleryItems.map((item) => (
              <BeforeAfterCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-[#aaaaaa] mb-6">
            Vrei să fii următorul nostru caz de succes?
          </p>
          <Button
            size="lg"
            className="bg-[#9f8453] hover:bg-[#423723] text-white"
          >
            Programează Consultația Acum
          </Button>
        </div>
      </div>
    </section>
  );
};
