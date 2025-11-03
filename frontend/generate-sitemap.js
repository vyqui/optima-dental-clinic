import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import path from "path";

const domain = "https://optimadental.com";

// 🔹 Toate rutele definite în App.tsx
const routes = [
  "/",
  "/about",
  "/services",
  "/contact",
  "/blog",

  // Servicii
  "/services/chirurgie-dentara",
  "/services/parodontologie",
  "/services/odontoterapie",
  "/services/endodontie",
  "/services/protetica-dentara",
  "/services/ortodontie",
  "/services/radiologie-dentara",

  // Blog
  "/blog/sfaturi-iarna",
  "/blog/controale-regulate",
  "/blog/implanturi-dentare",
  "/blog/ortodontie-adulti",
  "/blog/alimentatie-sanatate",
  "/blog/tehnologie-moderna",

  // Doctori
  "/doctor/alin-gabor",
  "/doctor/ahmed-nashar",
  "/doctor/ana-batanoiu",
  "/doctor/alexandru-kozma",
  "/doctor/cristian-giucoane",
  "/doctor/reit-silviu",
  "/doctor/daniel-tataru",
  "/doctor/diana-popescu"
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: domain });

  // Scriem direct în folderul de build (dist/)
  const writeStream = createWriteStream(path.resolve("./public/sitemap.xml"));
  sitemap.pipe(writeStream);

  for (const url of routes) {
    sitemap.write({
      url,
      changefreq: "weekly", // Google-friendly hint
      priority: url === "/" ? 1.0 : 0.8
    });
  }

  sitemap.end();

  await streamToPromise(sitemap);
  console.log("✅ Sitemap generat cu succes în dist/sitemap.xml");
}

generateSitemap().catch(err => {
  console.error("❌ Eroare la generarea sitemap-ului:", err);
});
