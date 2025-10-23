import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/polymet/layouts/main-layout";
import { ScrollToTop } from "@/polymet/components/scroll-to-top";
import { HomePage } from "@/polymet/pages/home";
import { AboutPage } from "@/polymet/pages/about";
import { ServicesPage } from "@/polymet/pages/services";
import { ContactPage } from "@/polymet/pages/contact";
import { ServiceChirurgiePage } from "@/polymet/pages/service-chirurgie";
import { ServiceParodontologiePage } from "@/polymet/pages/service-parodontologie";
import { ServiceOdontoterapiePage } from "@/polymet/pages/service-odontoterapie";
import { ServiceEndodontiePage } from "@/polymet/pages/service-endodontie";
import { ServiceProteticaPage } from "@/polymet/pages/service-protetica";
import { ServiceOrtodontie } from "@/polymet/pages/service-ortodontie";
import { ServiceRadiologieModernPage } from "@/polymet/pages/service-radiologie";
import { BlogPage } from "@/polymet/pages/blog";
import { BlogSfaturiIarnaPage } from "@/polymet/pages/blog-sfaturi-iarna";
import { BlogControaleRegulatePage } from "@/polymet/pages/blog-controale-regulate";
import { BlogImplanturiDentarePage } from "@/polymet/pages/blog-implanturi-dentare";
import { BlogOrtodontieAdultiPage } from "@/polymet/pages/blog-ortodontie-adulti";
import { BlogAlimentatieSanatatePage } from "@/polymet/pages/blog-alimentatie-sanatate";
import { BlogTehnologieModernaPage } from "@/polymet/pages/blog-tehnologie-moderna";
import { DoctorAlinGaborPage } from "@/polymet/pages/doctor-alin-gabor";
import { DoctorAhmedNasharPage } from "@/polymet/pages/doctor-ahmed-nashar";
import { DoctorAnaBatanoiuPage } from "@/polymet/pages/doctor-ana-batanoiu";
import { DoctorReitSilviuPage } from "@/polymet/pages/doctor-reit-silviu";
import { DoctorCristianGiucoanePage } from "@/polymet/pages/doctor-cristian-giucoane";
import { DoctorDanielTataruPage } from "@/polymet/pages/doctor-daniel-tataru";
import { DoctorDianaPopescuPage } from "@/polymet/pages/doctor-diana-popescu";
import { DoctorAlexandruKozmaPage } from "@/polymet/pages/doctor-alexandru-kozma";

const OptimaDentalWebsite: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />

      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/services" element={<ServicesPage />} />

          <Route path="/blog" element={<BlogPage />} />

          <Route path="/contact" element={<ContactPage />} />

          <Route
            path="/services/chirurgie-dentara"
            element={<ServiceChirurgiePage />}
          />

          <Route
            path="/services/parodontologie"
            element={<ServiceParodontologiePage />}
          />

          <Route
            path="/services/odontoterapie"
            element={<ServiceOdontoterapiePage />}
          />

          <Route
            path="/services/endodontie"
            element={<ServiceEndodontiePage />}
          />

          <Route
            path="/services/protetica-dentara"
            element={<ServiceProteticaPage />}
          />

          <Route path="/services/ortodontie" element={<ServiceOrtodontie />} />

          <Route
            path="/services/radiologie-dentara"
            element={<ServiceRadiologieModernPage />}
          />

          <Route
            path="/blog/sfaturi-iarna"
            element={<BlogSfaturiIarnaPage />}
          />

          <Route
            path="/blog/controale-regulate"
            element={<BlogControaleRegulatePage />}
          />

          <Route
            path="/blog/implanturi-dentare"
            element={<BlogImplanturiDentarePage />}
          />

          <Route
            path="/blog/ortodontie-adulti"
            element={<BlogOrtodontieAdultiPage />}
          />

          <Route
            path="/blog/alimentatie-sanatate"
            element={<BlogAlimentatieSanatatePage />}
          />

          <Route
            path="/blog/tehnologie-moderna"
            element={<BlogTehnologieModernaPage />}
          />

          <Route path="/doctor/alin-gabor" element={<DoctorAlinGaborPage />} />

          <Route
            path="/doctor/ahmed-nashar"
            element={<DoctorAhmedNasharPage />}
          />

          <Route
            path="/doctor/ana-batanoiu"
            element={<DoctorAnaBatanoiuPage />}
          />

          <Route
            path="/doctor/alexandru-kozma"
            element={<DoctorAlexandruKozmaPage />}
          />

          <Route
            path="/doctor/cristian-giucoane"
            element={<DoctorCristianGiucoanePage />}
          />

          <Route
            path="/doctor/reit-silviu"
            element={<DoctorReitSilviuPage />}
          />

          <Route
            path="/doctor/daniel-tataru"
            element={<DoctorDanielTataruPage />}
          />

          <Route
            path="/doctor/diana-popescu"
            element={<DoctorDianaPopescuPage />}
          />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default OptimaDentalWebsite;
