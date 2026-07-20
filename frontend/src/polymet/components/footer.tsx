import React from "react";
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  FacebookIcon,
  InstagramIcon
} from "lucide-react";

// TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer
      className={`bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] text-white relative overflow-hidden ${className}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-[#9f8453]/20 via-transparent to-[#bda476]/20"></div>
        <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
          {Array.from({ length: 96 }).map((_, i) => (
            <div key={i} className="border border-white/5"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img
                src="https://assets.polymet.ai/historical-amethyst-451546"
                alt="Optima Dental Clinic"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Experimentează îngrijirea dentară care se simte ca acasă.
              Tratamente premium într-un mediu cald și confortabil unde
              bunăstarea ta este pe primul loc.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/p/Optima-Dental-Clinic-61576869621680/"
                target="_blank"
                className="w-10 h-10 bg-[#9f8453] hover:bg-[#bda476] rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/optimadentalclinic/#"
                target="_blank"
                className="w-10 h-10 bg-[#9f8453] hover:bg-[#bda476] rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@optimadentalclinicro?_t=ZN-90lYlywOxbK&_r=1"
                target="_blank"
                className="w-10 h-10 bg-[#9f8453] hover:bg-[#bda476] rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#bda476]">
              Navigare Rapidă
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-[#bda476] transition-colors duration-200 flex items-center group"
                >
                  <span className="w-2 h-2 bg-[#9f8453] rounded-full mr-3 group-hover:bg-[#bda476] transition-colors duration-200"></span>
                  Acasă
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-[#bda476] transition-colors duration-200 flex items-center group"
                >
                  <span className="w-2 h-2 bg-[#9f8453] rounded-full mr-3 group-hover:bg-[#bda476] transition-colors duration-200"></span>
                  Despre Noi
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-300 hover:text-[#bda476] transition-colors duration-200 flex items-center group"
                >
                  <span className="w-2 h-2 bg-[#9f8453] rounded-full mr-3 group-hover:bg-[#bda476] transition-colors duration-200"></span>
                  Servicii
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-[#bda476] transition-colors duration-200 flex items-center group"
                >
                  <span className="w-2 h-2 bg-[#9f8453] rounded-full mr-3 group-hover:bg-[#bda476] transition-colors duration-200"></span>
                  Contact
                </a>
              </li>
            </ul>

            <a href="https://anpc.ro/" target="_blank" className="w-100">
              <img src="/SAL.svg" alt="SAL" className="mt-4 w-100" />
            </a>

            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              className="w-100"
            >
              <img src="/SOL.svg" alt="CEPA" className="mt-4 w-100" />
            </a>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#bda476]">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPinIcon className="h-5 w-5 text-[#9f8453] mt-0.5 flex-shrink-0" />

                <div>
                  <div className="text-white font-medium">Adresa</div>
                  <div className="text-gray-300 text-sm">
                    <a
                      href="https://maps.app.goo.gl/qduwDB4uN29onbW6A"
                      target="_blank"
                    >
                      Șoseaua Nordului 142B
                      <br />
                      București 014104
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <PhoneIcon className="h-5 w-5 text-[#9f8453] mt-0.5 flex-shrink-0" />

                <div>
                  <div className="text-white font-medium">Telefon</div>
                  <div className="text-gray-300 text-sm">
                    <a href="tel:+40767702703">0767 702 703</a>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MailIcon className="h-5 w-5 text-[#9f8453] mt-0.5 flex-shrink-0" />

                <div>
                  <div className="text-white font-medium">Email</div>
                  <div className="text-gray-300 text-sm">
                    <a href="mailto:contact@optimadentalclinic.com">
                      contact@optimadentalclinic.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ClockIcon className="h-5 w-5 text-[#9f8453] mt-0.5 flex-shrink-0" />

                <div>
                  <div className="text-white font-medium">Program</div>
                  <div className="text-gray-300 text-sm">
                    Lun-Vin: 9:00 - 20:00
                    <br />
                    Sâm: 9:00 - 14:00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Optima Dental Clinic. Toate
              drepturile rezervate.
            </div>
            <nav className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 text-sm text-gray-400">
              <a href="/politica-confidentialitate/" className="hover:text-[#bda476] transition-colors duration-200">
                Politica de confidențialitate
              </a>
              <span aria-hidden="true" className="text-gray-600">·</span>
              <a href="/termeni-si-conditii/" className="hover:text-[#bda476] transition-colors duration-200">
                Termeni și condiții
              </a>
              <span aria-hidden="true" className="text-gray-600">·</span>
              <a href="/politica-cookies/" className="hover:text-[#bda476] transition-colors duration-200">
                Cookies
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
