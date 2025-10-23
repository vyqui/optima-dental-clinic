import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  CalendarIcon,
  ClockIcon,
  UserIcon,
  ArrowLeftIcon,
  ShareIcon
} from "lucide-react";

export const BlogControaleRegulatePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-[#bda476]/10 to-[#aaaaaa]/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-[#9f8453] hover:text-[#bda476] mb-8 transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Înapoi la Blog
          </Link>

          <div className="mb-6">
            <Badge className="bg-[#9f8453] text-white mb-4">Prevenție</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6 leading-tight">
            Importanța Controalelor Dentare Regulate
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <img
              src="https://assets.polymet.ai/marvellous-chocolate-490757"
              alt="Control dentar regulat"
              className="w-full h-80 md:h-96 object-cover rounded-lg mb-8"
            />

            <div className="text-neutral-700 space-y-6">
              <p className="text-xl leading-relaxed text-neutral-600 mb-8">
                Multe persoane cred că trebuie să meargă la dentist doar când au
                dureri. Această abordare poate duce la probleme grave și
                costisitoare. Controalele regulate la fiecare 6 luni sunt
                esențiale pentru menținerea sănătății orale și prevenirea
                complicațiilor dentare.
              </p>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                De ce la fiecare 6 luni?
              </h2>
              <p>
                Majoritatea problemelor dentare se dezvoltă treptat și sunt
                asimptomatice în fazele inițiale. Un control la 6 luni permite
                identificarea și tratarea acestor probleme înainte ca ele să
                devină grave și dureroase.
              </p>
              <p className="mt-4">
                <strong>Ciclul de dezvoltare al problemelor dentare:</strong>{" "}
                Cariile dentare, de exemplu, pot dura luni de zile pentru a se
                dezvolta de la un stadiu incipient până la unul avansat. În
                primele stadii, cariile sunt aproape invizibile și nedureroase,
                dar pot fi detectate de un medic dentist experimentat sau prin
                radiografii dentare. Dacă sunt identificate timpuriu, pot fi
                tratate minim invaziv, adesea fără anestezie.
              </p>
              <p className="mt-4">
                <strong>
                  Frecvența recomandată pentru diferite categorii:
                </strong>
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  <strong>Adulți sănătoși:</strong> Control la fiecare 6 luni
                </li>
                <li>
                  <strong>
                    Persoane cu risc crescut (fumatori, diabetici):
                  </strong>{" "}
                  Control la fiecare 3-4 luni
                </li>
                <li>
                  <strong>Pacienți cu boli parodontale:</strong> Control la
                  fiecare 3 luni
                </li>
                <li>
                  <strong>Copii și adolescenți:</strong> Control la fiecare 6
                  luni (sau mai frecvent dacă poartă aparat dentar)
                </li>
                <li>
                  <strong>Femei însărcinate:</strong> Control în fiecare
                  trimestru de sarcină
                </li>
              </ul>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                Ce include un control dentar complet?
              </h2>
              <p>
                Un control dentar profesional este mult mai mult decât o simplă
                verificare a dinților. Este o evaluare comprehensivă a întregii
                sănătăți orale, care poate preveni probleme grave și
                costisitoare.
              </p>
              <ul className="list-disc pl-6 space-y-3 mt-4">
                <li>
                  <strong>Examinarea vizuală detaliată:</strong> Medicul dentist
                  examinează fiecare dinte individual, căutând semne de carii,
                  fisuri, eroziune a smalțului sau probleme cu obturațiile
                  existente. De asemenea, se verifică starea gingiilor, a
                  limbii, a palatului și a întregii cavități bucale pentru
                  detectarea oricăror anomalii.
                </li>
                <li>
                  <strong>Radiografii dentare (când este necesar):</strong>{" "}
                  Radiografiile digitale moderne expun pacientul la o doză
                  minimă de radiații și permit vizualizarea zonelor care nu pot
                  fi văzute cu ochiul liber - spațiile dintre dinți, rădăcinile
                  dentare, osul maxilar și mandibular. Acestea sunt esențiale
                  pentru detectarea cariilor interproximale, a chisturilor, a
                  infecțiilor la nivelul rădăcinii sau a problemelor cu dinții
                  de minte.
                </li>
                <li>
                  <strong>Curățarea profesională (detartraj și polish):</strong>{" "}
                  Chiar dacă te speli pe dinți regulat, placa bacteriană și
                  tartrul se acumulează în zonele greu accesibile. Detartrajul
                  profesional înlătură aceste depuneri folosind instrumente
                  ultrasonice și manuale specializate. Apoi, dinții sunt poliți
                  pentru a înlătura petele și a netezi suprafața, făcând mai
                  dificilă acumularea viitoare de placă.
                </li>
                <li>
                  <strong>
                    Evaluarea riscului de carii și boli parodontale:
                  </strong>{" "}
                  Medicul dentist evaluează factorii de risc personali - dieta,
                  igienă orală, istoric medical, medicație, obiceiuri (fumat,
                  consum de alcool) - pentru a determina riscul tău de a
                  dezvolta probleme dentare. Pe baza acestei evaluări, se poate
                  crea un plan preventiv personalizat.
                </li>
                <li>
                  <strong>
                    Sfaturi personalizate pentru îngrijirea acasă:
                  </strong>{" "}
                  Vei primi recomandări specifice pentru tehnica de periaj,
                  tipul de periuță și pastă de dinți potrivite pentru tine,
                  folosirea corectă a aței dentare sau a periilor interdentare,
                  și produse suplimentare care te pot ajuta (apă de gură, gel cu
                  fluor, etc.).
                </li>
                <li>
                  <strong>Screening pentru cancer oral:</strong> În timpul
                  controlului, medicul dentist examinează și țesuturile moi ale
                  gurii pentru detectarea precoce a oricăror semne de cancer
                  oral sau leziuni precanceroase. Detectarea timpurie a
                  cancerului oral crește dramatic șansele de vindecare.
                </li>
                <li>
                  <strong>Evaluarea ocluziei (mușcăturii):</strong> Se verifică
                  modul în care dinții superiori și inferiori se întâlnesc,
                  identificarea problemelor de mușcătură care pot cauza uzura
                  prematură, dureri de cap sau probleme la nivelul articulației
                  temporo-mandibulare (ATM).
                </li>
              </ul>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                Beneficiile controalelor regulate
              </h2>
              <p>
                Controalele regulate nu doar că previn problemele grave, dar
                sunt și mai economice pe termen lung. Tratarea unei carii mici
                costă mult mai puțin decât un tratament de canal sau un implant
                dentar.
              </p>
              <p className="mt-4">
                <strong>Beneficii pentru sănătate:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  <strong>Detectarea precoce a cariilor:</strong> Cariile mici
                  pot fi tratate cu obturații simple, evitând tratamentele de
                  canal costisitoare și dureroase
                </li>
                <li>
                  <strong>Prevenirea bolilor parodontale:</strong> Detartrajul
                  regulat previne gingivita și parodontita, care pot duce la
                  pierderea dinților
                </li>
                <li>
                  <strong>Identificarea problemelor sistemice:</strong> Multe
                  boli sistemice (diabet, boli cardiovasculare, osteoporoză) au
                  manifestări orale timpurii care pot fi detectate de medicul
                  dentist
                </li>
                <li>
                  <strong>Prevenirea pierderii dinților:</strong> Intervenția
                  timpurie poate salva dinți care altfel ar fi fost pierduti
                </li>
                <li>
                  <strong>Menținerea unui zâmbet frumos:</strong> Curățarea
                  profesională înlătură petele și menține dinții albi și
                  strălucitori
                </li>
              </ul>
              <p className="mt-4">
                <strong>Beneficii economice:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  <strong>Costuri reduse pe termen lung:</strong> O obturație
                  simplă costă aproximativ 200-400 RON, în timp ce un tratament
                  de canal poate costa 800-1500 RON, iar un implant dentar
                  2500-4000 RON
                </li>
                <li>
                  <strong>Evitarea urgențelor dentare:</strong> Urgențele
                  dentare sunt adesea mai costisitoare și necesită intervenții
                  mai complexe
                </li>
                <li>
                  <strong>Productivitate crescută:</strong> Evită zilele de
                  concediu medical pentru probleme dentare acute
                </li>
                <li>
                  <strong>Acoperire de asigurare:</strong> Multe asigurări de
                  sănătate acoperă controalele preventive, dar nu și
                  tratamentele complexe
                </li>
              </ul>
              <p className="mt-4">
                <strong>Beneficii psihologice și sociale:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  <strong>Încredere crescută:</strong> Un zâmbet sănătos și
                  frumos crește încrederea în sine
                </li>
                <li>
                  <strong>Reducerea anxietății:</strong> Vizitele regulate fac
                  ca mersul la dentist să devină o rutină normală, nu o
                  experiență stresantă
                </li>
                <li>
                  <strong>Relații sociale îmbunătățite:</strong> Lipsa
                  problemelor de halitoză (miros urât din gură) și un zâmbet
                  sănătos îmbunătățesc interacțiunile sociale
                </li>
              </ul>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                Legătura dintre sănătatea orală și sănătatea generală
              </h2>
              <p>
                Cercetările recente au demonstrat o legătură puternică între
                sănătatea orală și sănătatea generală. Controalele dentare
                regulate nu protejează doar dinții, ci pot contribui la
                sănătatea întregului organism.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  <strong>Boli cardiovasculare:</strong> Bolile parodontale sunt
                  asociate cu un risc crescut de boli de inimă și accident
                  vascular cerebral. Bacteriile din gingiile infectate pot intra
                  în fluxul sanguin și pot contribui la formarea plăcilor
                  aterosclerotice
                </li>
                <li>
                  <strong>Diabet:</strong> Există o relație bidirecțională între
                  diabet și boli parodontale. Diabetul crește riscul de boli
                  gingivale, iar bolile parodontale pot face mai dificil
                  controlul glicemiei
                </li>
                <li>
                  <strong>Complicații în sarcină:</strong> Bolile parodontale la
                  femei însărcinate sunt asociate cu nașteri premature și
                  greutate scăzută la naștere
                </li>
                <li>
                  <strong>Boli respiratorii:</strong> Bacteriile din cavitatea
                  bucală pot fi inhalate în plămâni, cauzând sau agravând
                  infecții respiratorii, pneumonie sau boala pulmonară
                  obstructivă cronică (BPOC)
                </li>
                <li>
                  <strong>Demență și Alzheimer:</strong> Studii recente
                  sugerează o posibilă legătură între bolile parodontale cronice
                  și riscul crescut de demență
                </li>
              </ul>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                Semnele că ai nevoie de o vizită urgentă
              </h2>
              <p>
                Deși controalele regulate sunt esențiale, există situații când
                trebuie să contactezi imediat medicul dentist, fără a aștepta
                următorul control programat:
              </p>
              <ul className="list-disc pl-6 space-y-3 mt-4">
                <li>
                  <strong>Durere dentară persistentă sau severă:</strong>{" "}
                  Durerea care nu dispare după luarea analgezicelor sau care te
                  trezește noaptea poate indica o infecție gravă sau un abces
                  dentar care necesită tratament urgent
                </li>
                <li>
                  <strong>Sângerare a gingiilor:</strong> Gingiile care
                  sângerează la periaj sau spontan pot fi un semn de gingivită
                  sau parodontită. Sângerarea persistentă sau abundentă necesită
                  evaluare profesională
                </li>
                <li>
                  <strong>Sensibilitate extremă la cald/rece:</strong>{" "}
                  Sensibilitatea care persistă după îndepărtarea stimulului
                  poate indica carii profunde, fisuri în smalț sau expunerea
                  rădăcinii dentare
                </li>
                <li>
                  <strong>Umflături în zona feței sau gâtului:</strong>{" "}
                  Umflăturile pot indica infecții grave care se pot răspândi
                  rapid. Dacă sunt însoțite de febră sau dificultăți de
                  respirație, mergi imediat la urgență
                </li>
                <li>
                  <strong>Dinți mobili sau fisurați:</strong> Mobilitatea
                  dentară poate indica boli parodontale avansate sau
                  traumatisme. Fisurile necesită tratament prompt pentru a
                  preveni complicațiile
                </li>
                <li>
                  <strong>Miros persistent urât din gură (halitoză):</strong>{" "}
                  Dacă halitoza persistă în ciuda unei igiene orale bune, poate
                  indica infecții, boli parodontale sau alte probleme medicale
                </li>
                <li>
                  <strong>Pete albe sau roșii în gură:</strong> Leziunile care
                  nu se vindecâ în 2 săptămâni trebuie evaluate pentru a exclude
                  cancerul oral
                </li>
                <li>
                  <strong>Dificultăți la mestecat sau înghițit:</strong> Pot
                  indica probleme cu mușcătura, articulația temporo-mandibulară
                  sau alte afecțiuni
                </li>
                <li>
                  <strong>Gust metalic persistent:</strong> Poate indica
                  infecții, probleme cu obturațiile metalice sau alte afecțiuni
                </li>
              </ul>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                Cum să te pregătești pentru un control dentar
              </h2>
              <p>
                Pentru a profita la maximum de controlul dentar, urmează aceste
                sfaturi:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  <strong>Spală-te pe dinți înainte de vizită:</strong> Deși
                  medicul dentist va vedea oricum starea reală a dinților, este
                  politicos să ai o gură curată
                </li>
                <li>
                  <strong>Pregătește o listă cu întrebări:</strong> Notă orice
                  întrebări sau preocupări pe care le ai despre sănătatea orală
                </li>
                <li>
                  <strong>Aduce lista de medicamente:</strong> Informă medicul
                  despre toate medicamentele pe care le iei, inclusiv
                  suplimentele
                </li>
                <li>
                  <strong>Comunică anxietățile:</strong> Dacă ești anxios,
                  spune-i medicului - există tehnici de relaxare și opțiuni de
                  sedare
                </li>
                <li>
                  <strong>Actualizează istoricul medical:</strong> Informă
                  medicul despre orice schimbări în starea ta de sănătate
                </li>
              </ul>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                Mituri despre controalele dentare
              </h2>
              <p>
                Există multe mituri despre vizitele la dentist care împiedică
                oamenii să facă controale regulate. Să demontăm câteva dintre
                cele mai comune:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-3">
                <li>
                  <strong>Mit: "Dacă nu am dureri, nu am probleme"</strong> -
                  Realitate: Majoritatea problemelor dentare sunt asimptomatice
                  în stadiile incipiente. Durerea apare de obicei când problema
                  este deja avansată
                </li>
                <li>
                  <strong>Mit: "Detartrajul șterge smalțul"</strong> -
                  Realitate: Detartrajul profesional înlătură doar tartrul și
                  placa bacteriană, nu smalțul. Este o procedură sigură și
                  necesară
                </li>
                <li>
                  <strong>Mit: "Controalele dentare sunt prea scumpe"</strong> -
                  Realitate: Controalele preventive sunt mult mai ieftine decât
                  tratamentele complexe necesare când problemele sunt neglijate
                </li>
                <li>
                  <strong>Mit: "Radiografiile dentare sunt periculoase"</strong>{" "}
                  - Realitate: Radiografiile dentare digitale moderne expun
                  pacientul la o doză minimă de radiații, echivalentă cu
                  expunerea naturală la radiații de fond în câteva zile
                </li>
                <li>
                  <strong>Mit: "Dinții de lapte nu trebuie îngrijiți"</strong> -
                  Realitate: Dinții de lapte sunt esențiali pentru dezvoltarea
                  corectă a vorbirii, mestecat și mențin spațiul pentru dinții
                  permanenți
                </li>
              </ul>

              <div className="bg-[#bda476]/10 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-medium text-neutral-900 mb-3">
                  Statistici importante
                </h3>
                <p className="text-neutral-700">
                  Studiile arată că persoanele care fac controale regulate la
                  fiecare 6 luni au cu 60% mai puține probleme dentare grave și
                  cheltuie cu 40% mai puțin pe tratamente dentare pe termen
                  lung. Mai mult, cercetările demonstrează că pacienții care fac
                  controale regulate au un risc cu 25% mai mic de a dezvolta
                  boli cardiovasculare și cu 30% mai mic de a pierde dinți în
                  timpul vieții.
                </p>
                <p className="text-neutral-700 mt-3">
                  Potrivit Organizației Mondiale a Sănătății, aproape 100%
                  dintre adulți au cel puțin o carie dentară în timpul vieții,
                  dar majoritatea acestor carii ar putea fi prevenite prin
                  controale regulate și igienă orală corespunzătoare.
                </p>
              </div>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                Concluzie
              </h2>
              <p>
                Controalele dentare regulate la fiecare 6 luni sunt o investiție
                în sănătatea ta pe termen lung. Nu sunt doar despre menținerea
                unui zâmbet frumos - sunt despre prevenirea problemelor grave de
                sănătate, economisirea banilor și menținerea calității vieții.
              </p>
              <p className="mt-4">
                Nu aștepta să ai dureri pentru a merge la dentist. Prevenția
                este întotdeauna mai ușoară, mai ieftină și mai puțin stresantă
                decât tratamentul. Programează-ți controlul dentar astăzi și fă
                primul pas către o sănătate orală optimă!
              </p>
              <p className="mt-4">
                La Optima Dental Clinic, oferim controale dentare complete, cu
                echipamente moderne și o echipă de specialiști dedicați
                sănătății tale orale. Contactează-ne pentru a programa o
                consultație și descoperă cum putem să te ajutăm să menții un
                zâmbet sănătos pentru întreaga viață!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#323231] to-[#423723]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Când ai fost ultima dată la control?
          </h2>
          <p className="text-xl text-[#bda476] mb-8">
            Programează-te astăzi pentru un control complet și asigură-te că
            dinții tăi sunt sănătoși
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => (window.location.href = "tel:+40767702703")}
              size="lg"
              className="bg-[#9f8453] hover:bg-[#bda476] text-white px-8"
            >
              Programează Controlul
            </Button>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white hover:bg-white hover:text-neutral-900 px-8"
              >
                Află Mai Multe
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
