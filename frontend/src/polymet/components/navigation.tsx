import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/polymet/components/language-switcher";
import {
  MenuIcon,
  XIcon,
  PhoneIcon,
  MessageCircleIcon,
  ChevronDownIcon
} from "lucide-react";

interface NavigationProps {
  className?: string;
}

const navigationItems = [
  { href: "/", label: "Acasă" },
  { href: "/about", label: "Despre Noi" },
  { href: "/services", label: "Servicii", hasDropdown: true },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

const servicesDropdownItems = [
  { href: "/services/chirurgie-dentara", label: "Chirurgie Dentară" },
  { href: "/services/parodontologie", label: "Parodontologie" },
  { href: "/services/odontoterapie", label: "Odontoterapie" },
  { href: "/services/endodontie", label: "Endodonție" },
  { href: "/services/protetica-dentara", label: "Protetică Dentară" },
  { href: "/services/ortodontie", label: "Ortodonție" },
  { href: "/services/radiologie-dentara", label: "Radiologie Dentară" }
];

export const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnterDropdown = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setIsServicesDropdownOpen(true);
  };

  const handleMouseLeaveDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 150); // Small delay to prevent accidental closure
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <nav
      className={`bg-gradient-to-r from-[#323231] via-[#2a2a2a] to-[#323231] backdrop-blur-md shadow-lg border-b border-[#9f8453]/20 sticky top-0 z-50 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="https://assets.polymet.ai/historical-amethyst-451546"
              alt="Optima Dental Clinic"
              className="h-16 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.href} className="relative">
                {item.hasDropdown ? (
                  <div
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={handleMouseEnterDropdown}
                    onMouseLeave={handleMouseLeaveDropdown}
                  >
                    <a
                      href={item.href}
                      className={`text-sm font-medium transition-colors duration-200 hover:text-[#bda476] flex items-center ${
                        location.pathname === item.href ||
                        location.pathname.startsWith("/services/")
                          ? "text-[#bda476]"
                          : "text-white/90"
                      }`}
                    >
                      {item.label}
                      <ChevronDownIcon className="ml-1 h-4 w-4" />
                    </a>

                    {/* Services Dropdown */}
                    {isServicesDropdownOpen && (
                      <div
                        className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                        onMouseEnter={handleMouseEnterDropdown}
                        onMouseLeave={handleMouseLeaveDropdown}
                      >
                        {servicesDropdownItems.map((service) => (
                          <a
                            key={service.href}
                            href={service.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#bda476]/10 hover:text-[#9f8453] transition-colors duration-200"
                            onClick={() => setIsServicesDropdownOpen(false)}
                          >
                            {service.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className={`text-sm font-medium transition-colors duration-200 hover:text-[#bda476] ${
                      location.pathname === item.href
                        ? "text-[#bda476]"
                        : "text-white/90"
                    }`}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <LanguageSwitcher /> */}

            <Button
              onClick={() => window.open("https://wa.me/40767702703", "_blank")}
              size="sm"
              variant="ghost"
              className="text-white/90 hover:text-[#bda476] hover:bg-white/10"
            >
              <MessageCircleIcon className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>

            <Button
              size="sm"
              onClick={() => (window.location.href = "tel:+40767702703")}
              className="bg-[#9f8453] hover:bg-[#423723] text-white px-6 rounded-full"
            >
              <PhoneIcon className="h-4 w-4 mr-2" />
              0767 702 703
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* <LanguageSwitcher /> */}

            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="text-white/90"
            >
              {isMobileMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/20 py-4">
            <div className="space-y-4">
              {navigationItems.map((item) => (
                <div key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-base font-medium transition-colors duration-200 hover:text-[#bda476] ${
                      location.pathname === item.href ||
                      (item.hasDropdown &&
                        location.pathname.startsWith("/services/"))
                        ? "text-[#bda476]"
                        : "text-white/90"
                    }`}
                  >
                    {item.label}
                  </a>

                  {/* Mobile Services Submenu */}
                  {item.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {servicesDropdownItems.map((service) => (
                        <a
                          key={service.href}
                          href={service.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-sm text-white/70 hover:text-[#bda476] transition-colors duration-200"
                        >
                          {service.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-white/20 space-y-3">
                <Button
                  onClick={() =>
                    window.open("https://wa.me/40767702703", "_blank")
                  }
                  size="sm"
                  variant="outline"
                  className="w-full border-[#bda476] text-[#bda476] hover:bg-[#bda476] hover:text-[#323231] bg-transparent"
                >
                  <MessageCircleIcon className="h-4 w-4 mr-2" />
                  WhatsApp Us
                </Button>

                <Button
                  size="sm"
                  onClick={() => (window.location.href = "tel:+40767702703")}
                  className="w-full bg-[#9f8453] hover:bg-[#bda476] text-white"
                >
                  <PhoneIcon className="h-4 w-4 mr-2" />
                  0767 702 703
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
