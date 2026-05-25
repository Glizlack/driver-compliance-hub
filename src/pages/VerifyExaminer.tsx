import { AlertTriangle, ArrowLeft, ArrowUpRight, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO, articleLd, breadcrumbLd } from "@/lib/seo";
import { useLang, tr } from "@/contexts/LangContext";
import { TRANSLATIONS } from "@/config/i18n";

const PATH = "/verify-examiner";
const TITLE = "Verify Your DOT Medical Examiner | Driver Compliance Hub";
const DESC = "How to verify your DOT medical examiner is on the FMCSA National Registry, plus the current temporary exemption allowing paper MCSA-5876 certificates.";

const VerifyExaminer = () => {
  const { lang } = useLang();
  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={TITLE}
        description={DESC}
        path={PATH}
        jsonLd={[
          articleLd({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Verify Examiner", path: PATH },
          ]),
        ]}
      />
      <div className="mx-auto max-w-3xl px-6 py-10 sm:py-16">
        <Link to="/#checklist" className="glass-pill inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:bg-white/15 hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
          {t.back}
        </Link>
        <header className="mt-10 animate-fade-up">
          <h1 className="font-display text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            {tr(lang, "Verify Your Medical Examiner", "Verifique a su Examinador Medico")}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-foreground/75">
            {tr(lang, "Confirm that the professional performing a DOT physical is listed on the official FMCSA National Registry.", "Confirme que el profesional que realiza el examen fisico DOT figure en el Registro Nacional oficial de la FMCSA.")}
          </p>
        </header>
        <div role="status" className="glass-card mt-10 flex gap-4 rounded-2xl border border-sky-400/20 bg-sky-400/5 p-5 animate-fade-up" style={{ animationDelay: "80ms" }}>
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" aria-hidden="true" />
          <div className="text-sm leading-relaxed text-foreground/85">
            <p className="font-semibold text-foreground">{tr(lang, "Use the Official Registry", "Use el Registro Oficial")}</p>
            <p className="mt-1">
              {tr(lang, "If your browser displays a security or privacy warning, do not enter personal information. Close the page and try again later or confirm the correct link with FMCSA.", "Si su navegador muestra una advertencia de seguridad o privacidad, no ingrese informacion personal. Cierre la pagina e intentelo mas tarde o confirme el enlace correcto con la FMCSA.")}
            </p>
          </div>
        </div>
        <div role="note" className="mt-6 flex gap-4 rounded-2xl border-l-4 border-amber-400 bg-amber-400/10 p-5 animate-fade-up" style={{ animationDelay: "160ms" }}>
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" aria-hidden="true" />
          <div className="text-sm leading-relaxed text-foreground/90">
            <p className="font-semibold text-foreground">{tr(lang, "Temporary Exemption", "Exencion Temporal")}</p>
            <p className="mt-1">
              {tr(lang, "FMCSA's temporary exemption is effective April 11 through October 11, 2026. It allows certain interstate CDL/CLP drivers and motor carriers to rely on a paper Medical Examiner's Certificate for up to 60 days after it is issued.", "La exencion temporal de la FMCSA esta vigente del 11 de abril al 11 de octubre de 2026. Permite que ciertos conductores interestatales con CDL/CLP y transportistas usen un Certificado del Examinador Medico en papel hasta 60 dias despues de su emision.")}
            </p>
            <a href="https://www.fmcsa.dot.gov/newsroom/fmcsa-issues-temporary-exemption-support-nrii-transition" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex text-amber-200 underline underline-offset-4">
              {tr(lang, "Read the official FMCSA notice", "Leer el aviso oficial de la FMCSA")}
            </a>
          </div>
        </div>
        <div className="mt-12 flex justify-center animate-fade-up" style={{ animationDelay: "240ms" }}>
          <a href="https://nationalregistry.fmcsa.dot.gov/search/medical-examiners" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-4 text-base font-semibold text-background shadow-lg transition hover:scale-[1.02] hover:bg-foreground/90">
            {tr(lang, "Search the National Registry", "Buscar en el Registro Nacional")}
            <ArrowUpRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </a>
        </div>
        {lang === "es" && <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-foreground/55">{t.aiDisclaimer}</p>}
      </div>
    </div>
  );
};

export default VerifyExaminer;
