import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  PhoneIcon,
  MessageCircleIcon,
  MapPinIcon,
  ClockIcon,
  MailIcon
} from "lucide-react";

interface CTASectionProps {
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({ className }) => {
  return (
    <section
      className={`py-20 bg-gradient-to-br from-[#323231] via-[#423723] to-[#0d0b08] relative overflow-hidden ${className}`}
    >
      {/* Gradient overlay for extra depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b08]/40 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#9f8453]/15 via-[#bda476]/10 to-[#9f8453]/15"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Gata pentru Cel Mai Frumos{" "}
            <span className="font-medium">Zâmbet al Tău?</span>
          </h2>
          <p className="text-xl text-[#bda476] max-w-2xl mx-auto">
            Programează-ți consultația astăzi și experimentează îngrijirea
            dentară care se simte ca acasă
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-stretch">
          {/* Main CTA */}
          <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-[#323231] mb-4">
                Programează-ți Vizita
              </h3>
              <p className="text-[#423723] mb-6">
                Fă primul pas către o sănătate orală optimă. Echipa noastră
                prietenosă este gata să te întâmpine.
              </p>

              <div className="flex flex-col gap-4">
                <Button
                  onClick={() => (window.location.href = "tel:+40767702703")}
                  size="lg"
                  className="bg-gradient-to-r from-[#9f8453] to-[#423723] hover:from-[#423723] hover:to-[#0d0b08] text-white px-8 py-4 text-lg rounded-full w-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <PhoneIcon className="mr-2 h-5 w-5" />
                  Sună Acum: 0767 702 703
                </Button>

                <Button
                  onClick={() =>
                    window.open("https://wa.me/40767702703", "_blank")
                  }
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#bda476] text-[#bda476] hover:bg-[#bda476] hover:text-[#323231] px-8 py-4 text-lg rounded-full w-full bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <MessageCircleIcon className="mr-2 h-5 w-5" />
                  Contactează-ne pe WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Map */}
          <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="h-full min-h-[400px] relative">
                {/* Map Header */}
                <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-white/95 to-transparent p-6 pb-12">
                  <h3 className="text-xl font-semibold text-[#323231] mb-2">
                    Vizitează-ne
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-[#423723]">
                    <MapPinIcon className="h-4 w-4 text-[#9f8453]" />

                    <a
                      href="https://maps.app.goo.gl/qduwDB4uN29onbW6A"
                      target="_blank"
                    >
                      Șoseaua Nordului 142b, București
                    </a>
                  </div>
                </div>

                {/* Interactive Map - Embedded Google Maps */}
                <div className="w-full h-full relative overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.123456789!2d26.0975!3d44.4925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff26f7c3b5a7%3A0x1234567890abcdef!2s%C8%98oseaua%20Nordului%20142b%2C%20Bucure%C8%99ti!5e0!3m2!1sen!2sro!4v1234567890123!5m2!1sen!2sro"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                    title="Optima Dental Clinic Location"
                  ></iframe>

                  {/* Map Overlay for better integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#323231]/20 via-transparent to-white/10 pointer-events-none"></div>
                </div>

                {/* Contact Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/95 to-transparent p-6 pt-12">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-4 w-4 text-[#9f8453]" />

                      <div>
                        <div className="font-medium text-[#323231]">
                          Program
                        </div>
                        <div className="text-[#423723]">
                          Lun-Vin: 9:00 - 20:00
                        </div>
                        <div className="text-[#423723]">Sâm: 9:00 - 14:00</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <PhoneIcon className="h-4 w-4 text-[#9f8453]" />

                      <div>
                        <div className="font-medium text-[#323231]">
                          Telefon
                        </div>
                        <div className="text-[#423723]">
                          <a href="tel:+40767702703">0767 702 703</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
