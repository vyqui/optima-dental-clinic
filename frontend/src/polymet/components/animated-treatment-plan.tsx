import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircleIcon,
  ClockIcon,
  UserIcon,
  FileTextIcon,
  CalendarIcon,
  HeartIcon,
  ArrowRightIcon
} from "lucide-react";

const treatmentSteps = [
  {
    id: 1,
    title: "Consultația Inițială",
    description:
      "Evaluarea completă a sănătății orale și discutarea nevoilor tale",
    icon: <UserIcon className="h-6 w-6" />,

    duration: "30-45 min",
    details: [
      "Examinare clinică detaliată",
      "Radiografii digitale",
      "Discutarea simptomelor și preocupărilor",
      "Evaluarea istoricului medical"
    ]
  },
  {
    id: 2,
    title: "Diagnosticul Precis",
    description: "Analiză detaliată și identificarea problemelor dentare",
    icon: <FileTextIcon className="h-6 w-6" />,

    duration: "15-20 min",
    details: [
      "Interpretarea radiografiilor",
      "Evaluarea stării gingivale",
      "Identificarea cariilor și problemelor",
      "Stabilirea priorităților de tratament"
    ]
  },
  {
    id: 3,
    title: "Planul de Tratament",
    description: "Crearea unui plan personalizat adaptat nevoilor tale",
    icon: <CalendarIcon className="h-6 w-6" />,

    duration: "20-30 min",
    details: [
      "Prezentarea opțiunilor de tratament",
      "Discutarea costurilor și duratei",
      "Stabilirea priorităților",
      "Programarea ședințelor"
    ]
  },
  {
    id: 4,
    title: "Implementarea",
    description: "Executarea tratamentului conform planului stabilit",
    icon: <HeartIcon className="h-6 w-6" />,

    duration: "Variabil",
    details: [
      "Tratamente în etape planificate",
      "Monitorizarea progresului",
      "Ajustări dacă este necesar",
      "Comunicare continuă"
    ]
  }
];

export const AnimatedTreatmentPlan: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveStep((prev) => (prev + 1) % treatmentSteps.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleStepClick = (stepIndex: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveStep(stepIndex);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-light text-[#323231] mb-4">
          Cum Creăm{" "}
          <span className="font-medium text-[#9f8453]">
            Planul Tău de Tratament
          </span>
        </h3>
        <p className="text-lg text-[#423723] max-w-2xl mx-auto">
          Un proces structurat și personalizat pentru a-ți oferi cea mai bună
          îngrijire dentară
        </p>
      </div>

      {/* Progress Bar */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center space-x-4">
          {treatmentSteps.map((step, index) => (
            <React.Fragment key={step.id}>
              <button
                onClick={() => handleStepClick(index)}
                className={`relative flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                  index === activeStep
                    ? "bg-[#9f8453] border-[#9f8453] text-white scale-110"
                    : index < activeStep
                    ? "bg-[#bda476] border-[#bda476] text-white"
                    : "bg-white border-[#bda476]/30 text-[#9f8453] hover:border-[#9f8453]"
                }`}
              >
                {index < activeStep ? (
                  <CheckCircleIcon className="h-6 w-6" />
                ) : (
                  <span className="font-semibold">{step.id}</span>
                )}
              </button>
              {index < treatmentSteps.length - 1 && (
                <div
                  className={`h-0.5 w-16 transition-all duration-500 ${
                    index < activeStep ? "bg-[#bda476]" : "bg-[#bda476]/20"
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Active Step Content */}
      <div className="relative min-h-[400px]">
        <Card
          className={`border-0 shadow-xl transition-all duration-300 ${
            isAnimating
              ? "opacity-0 transform translate-y-4"
              : "opacity-100 transform translate-y-0"
          }`}
        >
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - Step Info */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-[#bda476]/10 rounded-full">
                    <div className="text-[#9f8453]">
                      {treatmentSteps[activeStep].icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold text-[#323231] mb-2">
                      {treatmentSteps[activeStep].title}
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-[#9f8453]">
                      <ClockIcon className="h-4 w-4" />

                      <span>{treatmentSteps[activeStep].duration}</span>
                    </div>
                  </div>
                </div>

                <p className="text-[#423723] text-lg mb-6 leading-relaxed">
                  {treatmentSteps[activeStep].description}
                </p>

                <div className="space-y-3">
                  {treatmentSteps[activeStep].details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-[#9f8453] mt-0.5 flex-shrink-0" />

                      <span className="text-[#423723]">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Visual Representation */}
              <div className="relative">
                <div className="bg-gradient-to-br from-[#bda476]/10 to-[#9f8453]/5 rounded-2xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-[#9f8453] rounded-full flex items-center justify-center mb-6 mx-auto animate-pulse">
                      <div className="text-white text-3xl">
                        {treatmentSteps[activeStep].icon}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-[#bda476]/20 rounded-full">
                        <div
                          className="h-2 bg-[#9f8453] rounded-full transition-all duration-1000"
                          style={{
                            width: `${
                              ((activeStep + 1) / treatmentSteps.length) * 100
                            }%`
                          }}
                        />
                      </div>
                      <p className="text-sm text-[#423723]">
                        Pasul {activeStep + 1} din {treatmentSteps.length}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="absolute top-1/2 -translate-y-1/2 -left-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      handleStepClick(
                        activeStep > 0
                          ? activeStep - 1
                          : treatmentSteps.length - 1
                      )
                    }
                    className="rounded-full w-8 h-8 p-0 border-[#9f8453] text-[#9f8453] hover:bg-[#9f8453] hover:text-white"
                  >
                    <ArrowRightIcon className="h-4 w-4 rotate-180" />
                  </Button>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 -right-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      handleStepClick(
                        activeStep < treatmentSteps.length - 1
                          ? activeStep + 1
                          : 0
                      )
                    }
                    className="rounded-full w-8 h-8 p-0 border-[#9f8453] text-[#9f8453] hover:bg-[#9f8453] hover:text-white"
                  >
                    <ArrowRightIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA */}
      <div className="text-center mt-8">
        <Button
          onClick={() => {
            window.location.href = "/contact";
          }}
          size="lg"
          className="bg-[#9f8453] hover:bg-[#423723] text-white px-8 py-4 rounded-full"
        >
          Începe Planul Tău de Tratament
        </Button>
      </div>
    </div>
  );
};
