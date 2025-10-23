import React from "react";
import { AnimatedHeroSection } from "@/polymet/components/animated-hero-section";
import { ServicesGrid } from "@/polymet/components/services-grid";
import { AboutSection } from "@/polymet/components/about-section";
import { BeforeAfterGallery } from "@/polymet/components/before-after-gallery";
import { TestimonialsSection } from "@/polymet/components/testimonials-section";
import { CTASection } from "@/polymet/components/cta-section";

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <AnimatedHeroSection />

      <AboutSection />

      <ServicesGrid className="bg-white" />

      <BeforeAfterGallery />

      <TestimonialsSection />

      <CTASection />
    </div>
  );
};
