import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PhoneIcon, MessageCircleIcon, SparklesIcon } from "lucide-react";

// Add custom CSS animations
const animationStyles = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    25% {
      transform: translateY(-10px) rotate(90deg);
    }
    50% {
      transform: translateY(-20px) rotate(180deg);
    }
    75% {
      transform: translateY(-10px) rotate(270deg);
    }
  }
  
  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-shimmer {
    background: linear-gradient(90deg, transparent, rgba(189, 164, 118, 0.4), transparent);
    background-size: 200% 100%;
    animation: shimmer 3s infinite;
  }
`;

// Inject styles
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = animationStyles;
  document.head.appendChild(styleSheet);
}

interface AnimatedHeroSectionProps {
  className?: string;
}

export const AnimatedHeroSection: React.FC<AnimatedHeroSectionProps> = ({
  className
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Pasiunea Noastră";

  useEffect(() => {
    setIsVisible(true);

    // Typing animation for the second line
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  // Generate floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDelay: Math.random() * 5,
    size: Math.random() * 4 + 2
  }));

  return (
    <section
      className={`relative min-h-screen flex items-center overflow-hidden ${className}`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image */}
        <img
          src="https://assets.polymet.ai/frequent-salmon-570790"
          alt="Modern Dental Treatment Room Interior"
          className={`hidden md:block w-full h-full object-cover transition-all duration-2000 ${
            isVisible ? "scale-100 opacity-100" : "scale-110 opacity-0"
          }`}
        />

        {/* Mobile Image */}
        <img
          src="https://assets.polymet.ai/involved-lavender-180457"
          alt="Modern Dental Treatment Room Interior"
          className={`block md:hidden w-full h-full object-cover transition-all duration-2000 ${
            isVisible ? "scale-100 opacity-100" : "scale-110 opacity-0"
          }`}
        />

        {/* Animated Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-[#323231]/40 via-[#0d0b08]/30 to-[#423723]/40 transition-opacity duration-1500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Floating Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute animate-float opacity-30"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.animationDelay}s`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
          >
            <SparklesIcon className="text-[#bda476] w-full h-full" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          {/* Main Heading with Slide Animation */}
          <h1
            className={`text-4xl md:text-6xl font-light text-white mb-6 leading-tight transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{
              transitionDelay: "300ms",
              textShadow:
                "0 2px 8px rgba(0, 0, 0, 0.6), 0 4px 16px rgba(0, 0, 0, 0.4)"
            }}
          >
            Zâmbetul Tău,
            <br />
            <span
              className="font-medium text-[#bda476] inline-block"
              style={{
                textShadow:
                  "0 2px 10px rgba(0, 0, 0, 0.7), 0 4px 20px rgba(0, 0, 0, 0.5), 0 0 30px rgba(189, 164, 118, 0.3)"
              }}
            >
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          {/* Description with Fade Animation */}
          <p
            className={`text-xl md:text-2xl text-white/90 mb-8 font-light leading-relaxed transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            Experimentează îngrijirea dentară care se simte ca acasă. Tratamente
            premium într-un mediu cald și confortabil unde bunăstarea ta este pe
            primul loc.
          </p>

          {/* Buttons with Staggered Animation */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "900ms" }}
          >
            <Button
              onClick={() => (window.location.href = "tel:+40767702703")}
              size="lg"
              className="bg-[#9f8453] hover:bg-[#423723] text-white px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <PhoneIcon className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Sună Acum pentru Programare
            </Button>

            <Button
              onClick={() => window.open("https://wa.me/40767702703", "_blank")}
              variant="outline"
              size="lg"
              className="border-2 border-[#bda476] text-[#bda476] hover:bg-[#bda476] hover:text-[#323231] px-8 py-4 text-lg font-medium rounded-full backdrop-blur-sm bg-[#bda476]/10 transition-all duration-300 hover:scale-105 group"
            >
              <MessageCircleIcon className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Contactează-ne pe WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* Animated Border Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#bda476] to-transparent animate-pulse" />
    </section>
  );
};
