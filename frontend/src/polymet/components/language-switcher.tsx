import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { GlobeIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className,
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<"en" | "ro">("ro");

  const languages = {
    en: { label: "English", flag: "🇬🇧" },
    ro: { label: "Română", flag: "🇷🇴" },
  };

  const handleLanguageChange = (lang: "en" | "ro") => {
    setCurrentLanguage(lang);
    // Here you would implement actual language switching logic
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`gap-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 ${className}`}
        >
          <GlobeIcon className="h-4 w-4" />

          <span className="hidden sm:inline">
            {languages[currentLanguage].label}
          </span>
          <span className="sm:hidden">{languages[currentLanguage].flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {Object.entries(languages).map(([code, { label, flag }]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => handleLanguageChange(code as "en" | "ro")}
            className={`gap-2 cursor-pointer ${currentLanguage === code ? "bg-neutral-50" : ""}`}
          >
            <span>{flag}</span>
            <span>{label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
