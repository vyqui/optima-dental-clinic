import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  MessageCircleIcon,
  SendIcon,
  CheckIcon
} from "lucide-react";

const contactInfo = [
  {
    icon: <MapPinIcon className="h-6 w-6" />,

    title: "Vizitează Clinica Noastră",
    details: ["Șoseaua Nordului 142B", "București 014104", "România"],

    action: "Obține Direcții"
  },
  {
    icon: <PhoneIcon className="h-6 w-6" />,

    title: "Contactează-ne",
    details: [
      "0767 702 703",
      "contact@optimadentalclinic.com",
      "Disponibil 24/7 pentru urgențe"
    ],

    action: "Sună Acum"
  },
  {
    icon: <ClockIcon className="h-6 w-6" />,

    title: "Programul Clinicii",
    details: [
      "Lun-Vin: 9:00 - 20:00",
      "Sâm: 9:00 - 14:00",
      "Duminică: Doar Urgențe"
    ],

    action: "Rezervă Online"
  }
];

const faqs = [
  {
    question: "Acceptați asigurări?",
    answer:
      "Da, acceptăm majoritatea planurilor majore de asigurare dentară. Vă rugăm să ne contactați pentru a verifica acoperirea dumneavoastră."
  },
  {
    question: "Cât de des ar trebui să vizitez dentistul?",
    answer:
      "Recomandăm controale regulate la fiecare 6 luni pentru menținerea optimă a sănătății orale."
  },
  {
    question: "Oferiți servicii de urgență?",
    answer:
      "Da, oferim îngrijire dentară de urgență 24/7. Sunați linia noastră de urgență pentru asistență imediată."
  },
  {
    question: "Ce metode de plată acceptați?",
    answer:
      "Acceptăm numerar, carduri de credit, transferuri bancare și oferim planuri de plată flexibile pentru tratamentele majore."
  }
];

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const scrollToContactForm = () => {
    const formSection = document.getElementById("contact-form-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#bda476]/10 to-[#aaaaaa]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6">
              Intră în{" "}
              <span className="font-medium text-[#9f8453]">Contact</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Gata să îți începi călătoria către o sănătate orală mai bună?
              Suntem aici să te ajutăm. Contactează-ne astăzi pentru a-ți
              programa consultația sau pentru a pune orice întrebări.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              onClick={() => (window.location.href = "tel:+40767702703")}
              size="lg"
              className="bg-[#9f8453] hover:bg-[#423723] text-white px-8 py-4 text-lg rounded-full"
            >
              <PhoneIcon className="mr-2 h-5 w-5" />
              Sună Acum: 0767 702 703
            </Button>

            <Button
              onClick={() =>
                (window.location.href = "https://wa.me/40767702703")
              }
              size="lg"
              variant="outline"
              className="border-2 border-[#9f8453] text-[#9f8453] hover:bg-[#9f8453] hover:text-white px-8 py-4 text-lg rounded-full"
            >
              <MessageCircleIcon className="mr-2 h-5 w-5" />
              Contactează-ne pe WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-[#bda476]/10 rounded-full mb-6 mx-auto">
                    <div className="text-[#9f8453]">{info.icon}</div>
                  </div>

                  <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                    {info.title}
                  </h3>

                  <div className="space-y-2 mb-6">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-neutral-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#9f8453] text-[#9f8453] hover:bg-[#9f8453] hover:text-white rounded-full"
                    onClick={() => {
                      if (info.action === "Rezervă Online") {
                        scrollToContactForm();
                      } else if (info.action === "Sună Acum") {
                        window.location.href = "tel:+40767702703";
                      } else if (info.action === "Obține Direcții") {
                        window.open(
                          "https://maps.app.goo.gl/qduwDB4uN29onbW6A",
                          "_blank"
                        );
                      }
                    }}
                  >
                    {info.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-to-br from-[#323231]/5 to-[#bda476]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div id="contact-form-section">
              <h2 className="text-3xl font-light text-neutral-900 mb-6">
                Trimite-ne un{" "}
                <span className="font-medium text-[#9f8453]">Mesaj</span>
              </h2>
              <p className="text-neutral-600 mb-8">
                Completează formularul de mai jos și îți vom răspunde în 24 de
                ore.
              </p>

              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckIcon className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                        Mesaj Trimis!
                      </h3>
                      <p className="text-neutral-600">
                        Mulțumim că ne-ai contactat. Îți vom răspunde curând.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label
                            htmlFor="name"
                            className="text-neutral-700 font-medium"
                          >
                            Nume Complet *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="mt-2 border-neutral-200 focus:border-[#9f8453] focus:ring-[#9f8453]"
                            placeholder="Numele tău complet"
                          />
                        </div>

                        <div>
                          <Label
                            htmlFor="email"
                            className="text-neutral-700 font-medium"
                          >
                            Adresa de Email *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="mt-2 border-neutral-200 focus:border-[#9f8453] focus:ring-[#9f8453]"
                            placeholder="emailul@tau.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label
                            htmlFor="phone"
                            className="text-neutral-700 font-medium"
                          >
                            Numărul de Telefon
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="mt-2 border-neutral-200 focus:border-[#9f8453] focus:ring-[#9f8453]"
                            placeholder="0767 702 703"
                          />
                        </div>

                        <div>
                          <Label
                            htmlFor="service"
                            className="text-neutral-700 font-medium"
                          >
                            Serviciul de Interes
                          </Label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            className="mt-2 w-full px-3 py-2 border border-neutral-200 rounded-md focus:border-[#9f8453] focus:ring-[#9f8453] focus:outline-none"
                          >
                            <option value="">Selectează un serviciu</option>
                            <option value="general">
                              Stomatologie Generală
                            </option>
                            <option value="cosmetic">
                              Stomatologie Estetică
                            </option>
                            <option value="preventive">
                              Îngrijire Preventivă
                            </option>
                            <option value="restorative">
                              Stomatologie Restaurativă
                            </option>
                            <option value="orthodontics">Ortodonție</option>
                            <option value="emergency">
                              Îngrijire de Urgență
                            </option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <Label
                          htmlFor="message"
                          className="text-neutral-700 font-medium"
                        >
                          Mesaj *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="mt-2 border-neutral-200 focus:border-[#9f8453] focus:ring-[#9f8453]"
                          placeholder="Spune-ne despre nevoile tale dentare sau orice întrebări ai..."
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-[#9f8453] hover:bg-[#423723] text-white py-4 text-lg rounded-full"
                      >
                        <SendIcon className="mr-2 h-5 w-5" />
                        Trimite Mesaj
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div>
              <h2 className="text-3xl font-light text-neutral-900 mb-6">
                Vizitează Clinica{" "}
                <span className="font-medium text-[#9f8453]">Noastră</span>
              </h2>
              <p className="text-neutral-600 mb-8">
                Situată în inima Bucureștiului, clinica noastră modernă este
                ușor accesibilă cu transportul în comun și cu mașina.
              </p>

              {/* Map Placeholder */}
              <Card className="border-0 shadow-xl mb-8">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-[#bda476]/20 to-[#aaaaaa]/10 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPinIcon className="h-12 w-12 text-[#9f8453] mx-auto mb-4" />

                      <p className="text-neutral-600">Hartă Interactivă</p>
                      <p className="text-sm text-neutral-500">
                        Șoseaua Nordului 142B, București 014104
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Section */}
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-6">
                    Întrebări Frecvente
                  </h3>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index}>
                        <h4 className="font-medium text-neutral-900 mb-2">
                          {faq.question}
                        </h4>
                        <p className="text-sm text-neutral-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-[#0d0b08]/5 border-y border-[#323231]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-3 h-3 bg-[#9f8453] rounded-full animate-pulse"></div>
              <h3 className="text-xl font-semibold text-[#323231]">
                Urgență Dentară?
              </h3>
            </div>
            <p className="text-[#423723] mb-6">
              Nu aștepta - sună-ne imediat pentru îngrijire dentară urgentă,
              disponibilă 24/7
            </p>
            <Button
              onClick={() => (window.location.href = "tel:+40767702703")}
              size="lg"
              className="bg-[#9f8453] hover:bg-[#423723] text-white px-8 py-4 text-lg rounded-full"
            >
              <PhoneIcon className="mr-2 h-5 w-5" />
              Linia de Urgență: 0767 702 703
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
