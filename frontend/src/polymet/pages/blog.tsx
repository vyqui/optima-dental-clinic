import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CalendarIcon, ClockIcon, ArrowRightIcon } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "5 Sfaturi pentru Menținerea Sănătății Orale în Timpul Iernii",
    excerpt:
      "Iarna poate fi o provocare pentru sănătatea dentară. Descoperă cum să îți protejezi dinții și gingiile în sezonul rece.",
    content:
      "Temperaturile scăzute și aerul uscat din timpul iernii pot afecta sănătatea orală...",
    author: "Dr. Maria Popescu",
    date: "2024-01-15",
    readTime: "5 min",
    category: "Îngrijire Preventivă",
    image: "https://assets.polymet.ai/unaware-scarlet-842946",
    featured: false,
    slug: "/blog/sfaturi-iarna"
  },
  {
    id: 2,
    title: "Importanța Controalelor Dentare Regulate",
    excerpt:
      "De ce ar trebui să vizitezi dentistul la fiecare 6 luni, chiar dacă nu ai dureri.",
    content:
      "Multe persoane cred că trebuie să meargă la dentist doar când au dureri...",
    author: "Dr. Alexandru Ionescu",
    date: "2024-01-10",
    readTime: "4 min",
    category: "Prevenție",
    image: "https://assets.polymet.ai/marvellous-chocolate-490757",
    featured: false,
    slug: "/blog/controale-regulate"
  },
  {
    id: 3,
    title: "Ghidul Complet pentru Implanturile Dentare",
    excerpt:
      "Tot ce trebuie să știi despre implanturile dentare: procedura, beneficiile și îngrijirea post-operatorie.",
    content:
      "Implanturile dentare reprezintă cea mai modernă soluție pentru înlocuirea dinților lipsă...",
    author: "Dr. Elena Radu",
    date: "2024-01-05",
    readTime: "8 min",
    category: "Chirurgie",
    image: "https://assets.polymet.ai/innocent-aquamarine-995966",
    featured: false,
    slug: "/blog/implanturi-dentare"
  },
  {
    id: 4,
    title: "Ortodonția la Adulți: Nu Este Niciodată Prea Târziu",
    excerpt:
      "Aparatele dentare nu sunt doar pentru copii. Descoperă opțiunile moderne pentru adulți.",
    content:
      "Mulți adulți cred că este prea târziu pentru a-și corecta dinții...",
    author: "Dr. Mihai Georgescu",
    date: "2024-01-01",
    readTime: "6 min",
    category: "Ortodonție",
    image: "https://assets.polymet.ai/sharp-cyan-946022",
    featured: false,
    slug: "/blog/ortodontie-adulti"
  },
  {
    id: 5,
    title: "Alimentația și Sănătatea Dentară",
    excerpt: "Ce alimente să eviți și care sunt benefice pentru dinții tăi.",
    content: "Ceea ce mănânci are un impact direct asupra sănătății dentare...",
    author: "Dr. Ana Marinescu",
    date: "2023-12-28",
    readTime: "5 min",
    category: "Nutriție",
    image: "https://assets.polymet.ai/labour-maroon-577275",
    featured: false,
    slug: "/blog/alimentatie-sanatate"
  },
  {
    id: 6,
    title: "Tehnologia Modernă în Stomatologie",
    excerpt: "Cum tehnologia revoluționează tratamentele dentare moderne.",
    content: "Stomatologia modernă beneficiază de tehnologii avansate...",
    author: "Dr. Cristian Dumitrescu",
    date: "2023-12-25",
    readTime: "7 min",
    category: "Tehnologie",
    image: "https://assets.polymet.ai/puzzled-teal-497676",
    featured: false,
    slug: "/blog/tehnologie-moderna"
  }
];

export const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#bda476]/10 to-[#aaaaaa]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6">
              Blog{" "}
              <span className="font-medium text-[#9f8453]">
                Optima Dental Clinic
              </span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Sfaturi de sănătate orală, noutăți din stomatologie și ghiduri
              complete pentru o îngrijire dentară optimă
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-80 object-cover"
                  />

                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#9f8453] text-white">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-neutral-900 mb-3 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-neutral-600 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  <Link to={post.slug}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-[#9f8453]/20 text-[#9f8453] hover:bg-[#9f8453] hover:text-white"
                    >
                      Citește Mai Mult
                      <ArrowRightIcon className="ml-2 h-3 w-3" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      {/* <section className="py-16 bg-gradient-to-r from-[#323231] to-[#423723]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Rămâi la Curent cu{" "}
            <span className="font-medium">Noutățile Dentare</span>
          </h2>
          <p className="text-xl text-[#bda476] mb-8">
            Abonează-te la newsletter-ul nostru pentru sfaturi de sănătate orală
            și noutăți
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Adresa ta de email"
              className="flex-1 px-4 py-3 rounded-full border-0 focus:ring-2 focus:ring-[#bda476] focus:outline-none"
            />

            <Button
              size="lg"
              className="bg-[#9f8453] hover:bg-[#bda476] text-white px-8 py-3 rounded-full"
            >
              Abonează-te
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
};
