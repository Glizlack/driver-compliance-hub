import { Link } from "react-router-dom";
import { useLang, tr } from "@/contexts/LangContext";
import { SEO, breadcrumbLd } from "@/lib/seo";

const Privacy = () => {
  const { lang } = useLang();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Privacy Policy | Driver Compliance Hub"
        description="Privacy policy for Driver Compliance Hub and its browser-only printable checklist tool."
        path="/privacy"
        jsonLd={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ])}
      />
      <div className="mx-auto max-w-3xl px-6 py-20">
        <Link to="/" className="text-sm text-foreground/60 hover:text-foreground">
          {tr(lang, "<- Back to home", "<- Volver al inicio")}
        </Link>
        <h1 className="font-display mt-8 text-4xl font-semibold sm:text-5xl">
          {tr(lang, "Privacy Policy", "Politica de Privacidad")}
        </h1>
        <p className="mt-3 text-sm text-foreground/60">
          {tr(lang, "Last updated: May 24, 2026", "Ultima actualizacion: 24 de mayo de 2026")}
        </p>
        <div className="mt-10 space-y-6 text-base leading-relaxed text-foreground/80">
          <p>
            {tr(
              lang,
              "Driver Compliance Hub is designed as a free informational site. It does not require accounts and does not collect or store driver records.",
              "Driver Compliance Hub esta disenado como un sitio informativo gratuito. No requiere cuentas ni recopila o almacena expedientes de conductores.",
            )}
          </p>
          <p>
            <span className="font-semibold text-foreground">{tr(lang, "Checklist tool:", "Herramienta de lista:")}</span>{" "}
            {tr(
              lang,
              "Selections made in the checklist builder remain in your browser for the current visit and are used only to display or print your checklist.",
              "Las selecciones realizadas permanecen en su navegador durante la visita actual y se usan solo para mostrar o imprimir su lista.",
            )}
          </p>
          <p>
            <span className="font-semibold text-foreground">{tr(lang, "External links:", "Enlaces externos:")}</span>{" "}
            {tr(
              lang,
              "Links to FMCSA and other official websites are governed by those websites' privacy practices.",
              "Los enlaces a la FMCSA y otros sitios oficiales se rigen por las practicas de privacidad de esos sitios.",
            )}
          </p>
          <p>
            <span className="font-semibold text-foreground">{tr(lang, "Contact:", "Contacto:")}</span>{" "}
            {tr(lang, "For privacy questions, email ", "Para preguntas de privacidad, escriba a ")}
            <a href="mailto:fmcsahelper@gmail.com" className="underline hover:text-foreground">
              fmcsahelper@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
