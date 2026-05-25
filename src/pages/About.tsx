import { Link } from "react-router-dom";
import { useLang, tr } from "@/contexts/LangContext";
import { SEO, breadcrumbLd } from "@/lib/seo";

const About = () => {
  const { lang } = useLang();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="About Driver Compliance Hub | Practical FMCSA Guidance"
        description="Driver Compliance Hub helps owner-operators and small fleets find practical, official-source-based compliance guidance."
        path="/about"
        jsonLd={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <div className="mx-auto max-w-3xl px-6 py-20">
        <Link to="/" className="text-sm text-foreground/60 hover:text-foreground">
          {tr(lang, "<- Back to home", "<- Volver al inicio")}
        </Link>
        <p className="mt-12 text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
          Driver Compliance Hub
        </p>
        <h1 className="font-display mt-4 text-4xl font-semibold sm:text-5xl">
          {tr(lang, "Practical compliance help for smaller operations", "Ayuda practica de cumplimiento para operaciones pequenas")}
        </h1>
        <div className="mt-10 space-y-6 text-base leading-relaxed text-foreground/80">
          <p>
            {tr(
              lang,
              "Hi, I am Steve Martin. I built this resource to help owner-operators and small fleets understand driver compliance steps without expensive software or confusing jargon.",
              "Hola, soy Steve Martin. Cree este recurso para ayudar a operadores propietarios y pequenas flotas a comprender los pasos de cumplimiento sin software costoso ni lenguaje confuso.",
            )}
          </p>
          <p>
            {tr(
              lang,
              "The site focuses on plain-language checklists, official FMCSA source links, and print-ready tools that work in your browser. It does not store driver files or replace professional legal or compliance advice.",
              "El sitio se enfoca en listas claras, enlaces a fuentes oficiales de la FMCSA y herramientas imprimibles que funcionan en su navegador. No almacena expedientes de conductores ni reemplaza asesoria profesional legal o de cumplimiento.",
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
