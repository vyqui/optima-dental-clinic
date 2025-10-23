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

export const BlogSfaturiIarnaPage: React.FC = () => {
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
            <Badge className="bg-[#9f8453] text-white mb-4">
              Îngrijire Preventivă
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6 leading-tight">
            5 Sfaturi pentru Menținerea Sănătății Orale în Timpul Iernii
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <img
              src="https://assets.polymet.ai/unaware-scarlet-842946"
              alt="Îngrijirea dentară în timpul iernii"
              className="w-full h-80 md:h-96 object-cover rounded-lg mb-8"
            />

            <div className="text-neutral-700 space-y-6">
              <p className="text-xl leading-relaxed text-neutral-600 mb-8">
                Iarna poate fi o provocare pentru sănătatea dentară.
                Temperaturile scăzute, aerul uscat și schimbările de stil de
                viață pot afecta dinții și gingiile. Iată 5 sfaturi esențiale
                pentru a-ți menține sănătatea orală optimă în sezonul rece.
              </p>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                1. Protejează-ți dinții de temperaturile extreme
              </h2>
              <p>
                Schimbările bruște de temperatură pot cauza fisuri în smalțul
                dentar. Evită să consumi băuturi foarte calde imediat după ce ai
                fost în frig. Lasă-ți gura să se adapteze treptat la temperatura
                normală.
              </p>
              <p className="mt-4">
                <strong>De ce este important?</strong> Smalțul dentar se
                contractă și se dilată în funcție de temperatură. Când expui
                dinții la schimbări bruște de temperatură - de exemplu, bei o
                cafea fierbinte imediat după ce ai fost afară în frig - smalțul
                poate dezvolta microfisuri. Aceste fisuri microscopice pot duce
                în timp la sensibilitate dentară crescută și pot facilita
                pătrunderea bacteriilor.
              </p>
              <p className="mt-4">
                <strong>Sfaturi practice:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  Așteaptă 10-15 minute după ce intri în casă înainte să consumi
                  băuturi calde
                </li>
                <li>
                  Folosește un pai pentru băuturile foarte reci sau foarte calde
                </li>
                <li>
                  Evită să respiri pe gură în aer rece - aerul rece direct pe
                  dinți poate cauza sensibilitate
                </li>
                <li>
                  Dacă ai deja sensibilitate dentară, folosește o pastă de dinți
                  specială pentru dinți sensibili
                </li>
              </ul>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                2. Hidratează-te corespunzător
              </h2>
              <p>
                Aerul uscat din timpul iernii poate reduce producția de salivă,
                crescând riscul de carii și boli gingivale. Bea multă apă și
                folosește un umidificator în casă pentru a menține un nivel
                optim de umiditate.
              </p>
              <p className="mt-4">
                <strong>Rolul salivei în sănătatea orală:</strong> Saliva nu
                este doar apă - este un fluid complex care neutralizează acizii
                produși de bacterii, remineralizează smalțul dentar și spală
                resturile alimentare. În timpul iernii, aerul uscat din interior
                (din cauza încălzirii) și din exterior reduce producția de
                salivă, lăsând dinții mai vulnerabili.
              </p>
              <p className="mt-4">
                <strong>Cum să menții o hidratare optimă:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  Bea cel puțin 2 litri de apă pe zi, chiar dacă nu simți sete
                </li>
                <li>
                  Limitează consumul de cafea și alcool - acestea deshidratează
                </li>
                <li>
                  Folosește un umidificator în dormitor pentru a menține
                  umiditatea aerului la 40-50%
                </li>
                <li>
                  Mestecă gumă fără zahăr pentru a stimula producția de salivă
                </li>
                <li>
                  Evită respirația pe gură - respiră pe nas pentru a preveni
                  uscarea cavității bucale
                </li>
              </ul>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                3. Menține rutina de igienă orală
              </h2>
              <p>
                Nu neglija periajul și folosirea aței dentare, chiar dacă
                programul tău se schimbă în timpul sărbătorilor. Periază-te pe
                dinți de două ori pe zi și folosește ața dentară zilnic.
              </p>
              <p className="mt-4">
                <strong>Rutina completă de igienă orală pentru iarnă:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  <strong>Dimineața:</strong> Periaj 2 minute cu pastă de dinți
                  cu fluor, folosește ața dentară, clătește cu apă de gură
                  antibacteriană
                </li>
                <li>
                  <strong>După mese:</strong> Clătește gura cu apă sau mestecă
                  gumă fără zahăr dacă nu poți să te speli pe dinți
                </li>
                <li>
                  <strong>Seara:</strong> Ață dentară, periaj 2 minute, apă de
                  gură (opțional)
                </li>
                <li>
                  <strong>Înlocuiește periuța:</strong> Schimbă periuța de dinți
                  la fiecare 3 luni sau după o răceală/gripă
                </li>
              </ul>
              <p className="mt-4">
                <strong>Greșeli comune de evitat:</strong> Nu te spăla pe dinți
                imediat după ce consumi alimente acide (citrice, sucuri) -
                așteaptă 30 de minute. Acidul înmoaie temporar smalțul, iar
                periajul imediat poate cauza eroziune dentară.
              </p>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                4. Atenție la alimentele și băuturile de sărbători
              </h2>
              <p>
                Dulciurile și băuturile zaharoase sunt mai frecvente în timpul
                iernii. Limitează consumul acestora și clătește-te pe gură cu
                apă după ce le consumi. Evită să ronțăi gheață - poate fisura
                dinții.
              </p>
              <p className="mt-4">
                <strong>
                  Alimentele și băuturile care afectează dinții iarna:
                </strong>
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  <strong>Dulciuri lipicioase:</strong> Turta dulce, caramel,
                  bomboane - se lipesc de dinți și hrănesc bacteriile pentru ore
                  întregi
                </li>
                <li>
                  <strong>Băuturi calde zaharoase:</strong> Ciocolata caldă,
                  ceaiuri îndulcite, vin fiert - combinația de zahăr și
                  temperatură este dăunătoare
                </li>
                <li>
                  <strong>Fructe uscate:</strong> Deși sunt sănătoase, sunt
                  foarte lipicioase și bogate în zahăr concentrat
                </li>
                <li>
                  <strong>Nuci și semințe tari:</strong> Pot fisura dinții dacă
                  sunt consumate neatenți
                </li>
                <li>
                  <strong>Gheață:</strong> Ronțăitul gheții poate cauza fisuri
                  în smalț și poate deteriora obturațiile
                </li>
              </ul>
              <p className="mt-4">
                <strong>Alternative sănătoase pentru dinți:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Brânză - neutralizează acizii și este bogată în calciu</li>
                <li>Mere și pere - stimulează producția de salivă</li>
                <li>
                  Nuci și migdale - bogate în calciu și fosfor pentru smalț
                </li>
                <li>
                  Ceai verde nesîndulcit - conține antioxidanți și fluoruri
                  naturale
                </li>
                <li>
                  Ciocolată neagră (min. 70% cacao) - mai puțin zahăr decât
                  ciocolata cu lapte
                </li>
              </ul>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                5. Programează un control dentar
              </h2>
              <p>
                Începutul anului este momentul perfect pentru un control dentar.
                Identificarea timpurie a problemelor poate preveni complicații
                mai grave și costisitoare.
              </p>
              <p className="mt-4">
                <strong>De ce este important controlul dentar de iarnă?</strong>{" "}
                Multe probleme dentare se dezvoltă treptat și sunt asimptomatice
                în stadiile incipiente. Un control profesional poate identifica:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  Carii în stadii incipiente care pot fi tratate minim invaziv
                </li>
                <li>Probleme gingivale înainte să evolueze în parodontită</li>
                <li>Fisuri în smalț cauzate de temperaturile extreme</li>
                <li>Eroziune dentară din cauza alimentelor acide</li>
                <li>Probleme cu obturațiile sau coroanele existente</li>
              </ul>
              <p className="mt-4">
                <strong>Ce include un control dentar complet:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Examinare clinică detaliată a dinților și gingiilor</li>
                <li>Radiografii dentare (dacă este necesar)</li>
                <li>
                  Detartraj profesional pentru îndepărtarea plăcii și tartrului
                </li>
                <li>
                  Evaluarea tehnicii de periaj și recomandări personalizate
                </li>
                <li>Plan de tratament pentru problemele identificate</li>
              </ul>
              <p className="mt-4">
                <strong>Frecvența recomandată:</strong> Majoritatea pacienților
                ar trebui să facă un control dentar la fiecare 6 luni. Dacă ai
                probleme gingivale, diabet sau fumezi, medicul dentist poate
                recomanda controale mai frecvente (la 3-4 luni).
              </p>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                Probleme dentare comune în timpul iernii
              </h2>
              <p>
                <strong>1. Sensibilitatea dentară crescută:</strong>{" "}
                Temperaturile scăzute pot accentua sensibilitatea la rece. Dacă
                simți durere când respiri aer rece sau bei băuturi reci,
                consultă medicul dentist. Poate fi un semn de retracție
                gingivală sau eroziune a smalțului.
              </p>
              <p className="mt-4">
                <strong>2. Herpesul labial (răni de frig):</strong> Stresul,
                oboseala și sistemul imunitar slăbit din timpul iernii pot
                declanșa erupții de herpes. Menține o igienă orală bună și evită
                să atingi leziunile pentru a preveni răspândirea.
              </p>
              <p className="mt-4">
                <strong>3. Gingii inflamate:</strong> Aerul uscat și hidratarea
                insuficientă pot duce la inflamarea gingiilor. Dacă observi
                sângerare la periaj sau gingii roșii și umflate, consultă
                medicul dentist.
              </p>
              <p className="mt-4">
                <strong>4. Fisuri în colțurile gurii:</strong> Cunoscute ca
                cheilită angulară, aceste fisuri dureroase pot apărea din cauza
                aerului uscat, deficiențelor de vitamine sau infecțiilor
                fungice. Hidratează buzele cu balsam și consultă medicul dacă
                persistă.
              </p>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                Sfaturi suplimentare pentru sănătatea orală în sezonul rece
              </h2>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Protejează-ți buzele:</strong> Folosește balsam de
                  buze cu SPF - razele UV reflectate de zăpadă pot cauza arsuri
                  solare pe buze
                </li>
                <li>
                  <strong>Vitamina D:</strong> Lipsa expunerii la soare iarna
                  poate duce la deficit de vitamina D, esențială pentru
                  sănătatea dinților și oaselor. Consideră suplimente după
                  consultarea medicului
                </li>
                <li>
                  <strong>Evită fumatul:</strong> Fumatul reduce fluxul sanguin
                  către gingii, încetinește vindecarea și crește riscul de boli
                  parodontale - efecte amplificate de condițiile de iarnă
                </li>
                <li>
                  <strong>Gestionează stresul:</strong> Stresul sărbătorilor
                  poate duce la bruxism (scrâșnitul dinților). Dacă te trezești
                  cu dureri de maxilar, consultă medicul dentist pentru o
                  gutieră de protecție
                </li>
                <li>
                  <strong>Menține o dietă echilibrată:</strong> Consumă alimente
                  bogate în calciu, vitamina C și vitamina D pentru a susține
                  sănătatea dinților și gingiilor
                </li>
              </ul>

              <div className="bg-[#bda476]/10 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-medium text-neutral-900 mb-3">
                  Sfat de la specialist
                </h3>
                <p className="text-neutral-700">
                  "Iarna este sezonul în care mulți pacienți neglijează
                  îngrijirea dentară din cauza programului încărcat. Însă tocmai
                  acum este important să fim mai atenți la sănătatea orală.
                  Prevenția este întotdeauna mai eficientă și mai puțin
                  costisitoare decât tratamentul. Un control dentar la începutul
                  iernii poate preveni multe probleme și vă poate asigura un
                  zâmbet sănătos pe tot parcursul sezonului rece." - Dr. Maria
                  Popescu, Medic Dentist Specialist
                </p>
              </div>

              <h2 className="text-2xl font-medium text-neutral-900 mt-8 mb-4">
                Concluzie
              </h2>
              <p>
                Menținerea sănătății orale în timpul iernii necesită atenție
                suplimentară și adaptarea rutinei de îngrijire la condițiile
                sezonului rece. Prin urmarea acestor 5 sfaturi esențiale -
                protejarea dinților de temperaturile extreme, hidratare
                corespunzătoare, menținerea rutinei de igienă, atenție la
                alimentație și controale dentare regulate - vei putea preveni
                majoritatea problemelor dentare specifice iernii.
              </p>
              <p className="mt-4">
                Nu uita că prevenția este cheia unei sănătăți orale optime.
                Investiția în îngrijirea preventivă acum te va scuti de
                tratamente costisitoare și dureroase în viitor. Dacă observi
                orice simptom neobișnuit - sensibilitate crescută, durere,
                sângerare gingivală sau modificări ale dinților - nu ezita să
                contactezi medicul dentist.
              </p>
              <p className="mt-4">
                La Optima Dental Clinic, echipa noastră de specialiști este
                pregătită să te ajute să menții un zâmbet sănătos pe tot
                parcursul anului. Programează-ți controlul dentar de iarnă și
                beneficiază de o evaluare completă a sănătății tale orale!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#323231] to-[#423723]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Ai nevoie de o consultație?
          </h2>
          <p className="text-xl text-[#bda476] mb-8">
            Programează-te pentru un control dentar și asigură-te că dinții tăi
            sunt sănătoși
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => (window.location.href = "tel:+40767702703")}
              size="lg"
              className="bg-[#9f8453] hover:bg-[#bda476] text-white px-8"
            >
              Programează Consultația
            </Button>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white hover:bg-white hover:text-neutral-900 px-8"
              >
                Contactează-ne
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
