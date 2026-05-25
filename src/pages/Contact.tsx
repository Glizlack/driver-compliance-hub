import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang, tr } from "@/contexts/LangContext";
import { SEO, breadcrumbLd } from "@/lib/seo";

const Contact = () => {
  const { lang } = useLang();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Contact Driver Compliance Hub | FMCSA Guidance"
        description="Contact Driver Compliance Hub about the free driver compliance guidance and printable checklist tools."
        path="/contact"
        jsonLd={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <div className="mx-auto max-w-3xl px-6 py-20">
        <Link to="/" className="text-sm text-foreground/60 hover:text-foreground">
          {tr(lang, "<- Back to home", "<- Volver al inicio")}
        </Link>
        <h1 className="font-display mt-12 text-4xl font-semibold sm:text-5xl">
          {tr(lang, "Contact Us", "Contactenos")}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/75">
          {tr(
            lang,
            "Have a question about the resources on this site? Email us directly. Please do not send driver documents, medical records, license numbers, or other private information.",
            "Tiene una pregunta sobre los recursos del sitio? Escribanos directamente. No envie documentos del conductor, registros medicos, numeros de licencia ni otra informacion privada.",
          )}
        </p>
        <a
          href="mailto:fmcsahelper@gmail.com"
          className="glass-card mt-10 inline-flex items-center gap-3 rounded-2xl px-6 py-5 text-lg text-foreground hover:text-foreground"
        >
          <Mail className="h-5 w-5 text-amber-300" aria-hidden="true" />
          fmcsahelper@gmail.com
        </a>
        <p className="mt-10 text-sm leading-relaxed text-foreground/60">
          {tr(
            lang,
            "This site offers general information only and is not legal advice.",
            "Este sitio ofrece informacion general solamente y no constituye asesoria legal.",
          )}
        </p>
      </div>
    </div>
  );
};

export default Contact;
