import { ArrowLeft, ArrowUpRight, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO, articleLd, breadcrumbLd } from "@/lib/seo";
import { useLang, tr } from "@/contexts/LangContext";
import { TRANSLATIONS } from "@/config/i18n";

const REQUIREMENTS = [
  {
    title: { en: "Verify the Examiner", es: "Verifique al Examinador" },
    body: { en: "Confirm the medical examiner is listed on the official FMCSA National Registry.", es: "Confirme que el examinador medico figure en el Registro Nacional oficial de la FMCSA." },
  },
  {
    title: { en: "Track Validity", es: "Controle la Vigencia" },
    body: { en: "Certificates may be valid for up to 24 months, with shorter periods for medical monitoring.", es: "Los certificados pueden ser validos hasta 24 meses, con periodos menores para monitoreo medico." },
  },
  {
    title: { en: "Confirm Documentation", es: "Confirme la Documentacion" },
    body: { en: "Use the current FMCSA guidance to determine the record needed for CDL/CLP and non-CDL drivers.", es: "Use la orientacion vigente de la FMCSA para determinar el registro necesario para conductores con CDL/CLP y sin CDL." },
  },
];

const PATH = "/checklist/medical-certificate";
const TITLE = "Medical Examiner Certificate | Driver Compliance Hub";
const DESC = "FMCSA medical certificate guidance, examiner verification, and the current NRII paper certificate transition exemption.";

const MedicalCertificate = () => {
  const { lang } = useLang();
  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO title={TITLE} description={DESC} path={PATH} jsonLd={[
        articleLd({ title: TITLE, description: DESC, path: PATH }),
        breadcrumbLd([{ name: "Home", path: "/" }, { name: "Medical Certificate", path: PATH }]),
      ]} />
      <div className="relative mx-auto max-w-4xl px-6 py-10 sm:py-16">
        <Link to="/#checklist" className="glass-pill inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:bg-white/15 hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
          {t.back}
        </Link>
        <header className="mt-12 animate-fade-up">
          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-foreground/50">49 CFR 391.43</span>
          <h1 className="font-display mt-4 text-balance text-5xl font-semibold leading-[1.05] sm:text-6xl">
            {tr(lang, "Medical Certificate Guidance", "Guia del Certificado Medico")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/75">
            {tr(lang, "A valid Medical Examiner's Certificate must be issued by a professional listed on the FMCSA National Registry.", "Un Certificado del Examinador Medico valido debe ser emitido por un profesional incluido en el Registro Nacional de la FMCSA.")}
          </p>
        </header>
        <section className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {REQUIREMENTS.map((requirement) => (
            <article key={requirement.title.en} className="glass-card rounded-2xl p-6">
              <h2 className="font-display text-lg font-semibold">{tr(lang, requirement.title.en, requirement.title.es)}</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">{tr(lang, requirement.body.en, requirement.body.es)}</p>
            </article>
          ))}
        </section>
        <section className="glass-card mt-10 flex gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
          <BadgeCheck className="mt-0.5 h-6 w-6 shrink-0 text-emerald-300" aria-hidden="true" />
          <div className="text-sm leading-relaxed text-foreground/85">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200/80">{tr(lang, "Current FMCSA Update", "Actualizacion FMCSA Vigente")}</p>
            <p className="mt-2 text-base text-foreground">
              {tr(lang, "FMCSA's temporary exemption is effective April 11 through October 11, 2026, allowing certain interstate CDL/CLP drivers and motor carriers to rely on a paper MEC for up to 60 days after issuance.", "La exencion temporal de la FMCSA esta vigente del 11 de abril al 11 de octubre de 2026 y permite a ciertos conductores interestatales con CDL/CLP y transportistas usar un MEC en papel hasta 60 dias despues de su emision.")}
            </p>
            <a href="https://www.fmcsa.dot.gov/newsroom/fmcsa-issues-temporary-exemption-support-nrii-transition" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-emerald-200 underline underline-offset-4">
              {tr(lang, "Read the official FMCSA notice", "Leer el aviso oficial de la FMCSA")}
            </a>
          </div>
        </section>
        <div className="mt-14 flex justify-center">
          <a href="https://nationalregistry.fmcsa.dot.gov/search/medical-examiners" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-4 text-base font-semibold text-background transition hover:bg-foreground/90">
            {tr(lang, "Search the National Registry", "Buscar en el Registro Nacional")}
            <ArrowUpRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MedicalCertificate;
