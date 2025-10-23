import React from "react";
import { Navigation } from "@/polymet/components/navigation";
import { Footer } from "@/polymet/components/footer";

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      <Navigation />

      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
