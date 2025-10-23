import React from "react";
import { Button } from "@/components/ui/button";
import { PhoneIcon, MessageCircleIcon } from "lucide-react";

interface HeroSectionProps {
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section className={`relative min-h-screen flex items-center ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://assets.polymet.ai/disabled-azure-343785"
          alt="Optima Dental Clinic Interior"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#323231]/40 via-[#0d0b08]/30 to-[#423723]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight">
            Zâmbetul Tău,
            <br />
            <span className="font-medium text-[#bda476]">Pasiunea Noastră</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light leading-relaxed">
            Experimentează îngrijirea dentară care se simte ca acasă. Tratamente
            premium într-un mediu cald și confortabil unde bunăstarea ta este pe
            primul loc.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-[#9f8453] hover:bg-[#423723] text-white px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <PhoneIcon className="mr-2 h-5 w-5" />
              Sună Acum pentru Programare
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-[#bda476] text-[#bda476] hover:bg-[#bda476] hover:text-[#323231] px-8 py-4 text-lg font-medium rounded-full backdrop-blur-sm bg-[#bda476]/10 transition-all duration-300"
            >
              <MessageCircleIcon className="mr-2 h-5 w-5" />
              Contactează-ne pe WhatsApp
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8 text-white/80">
            <div className="text-center">
              <div className="text-2xl font-semibold text-[#bda476]">15+</div>
              <div className="text-sm">Ani Experiență</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-[#bda476]">5000+</div>
              <div className="text-sm">Pacienți Mulțumiți</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-[#bda476]">100%</div>
              <div className="text-sm">Satisfacție</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
