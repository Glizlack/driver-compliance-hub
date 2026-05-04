import { ArrowLeft, ArrowUpRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO, articleLd, breadcrumbLd } from "@/lib/seo";
import { useLang, tr } from "@/contexts/LangContext";
import { TRANSLATIONS } from "@/config/i18n";

const REQUIREMENTS = [
  {
    title: { en: "10-Year CMV History", es: "Historial de 10 años en CMV" },
    body: {
      en: "Full 10-year employment history for any work involving commercial motor vehicles (CMVs).",
      es: "Historial laboral completo de 10 años para cualquier trabajo con vehículos comerciales (CMV).",
    },
  },
  {
    title: { en: "3-Year General History", es: "Historial General de 3 años" },
    body: {
      en: "Full 3-year history for all other employment outside of CMV work.",
      es: "Historial completo de 3 años para cualquier otro empleo fuera del trabajo con CMV.",
    },
  },
  {
    title: { en: "Accidents & Violations", es: "Accidentes e Infracciones" },
    body: {
      en: "List of all vehicle accidents and traffic violations for the past 3 years.",
      es: "Lista de todos los accidentes de vehículos e infracciones de tránsito de los últimos 3 años.",
    },
  },
  {
    title: { en: "Address History", es: "Historial de Direcciones" },
    body: {
      en: "Full address history covering the past 3 years of residence.",
      es: "Historial completo de domicilios de los últimos 3 años de residencia.",
    },
  },
  {
    title: { en: "Employment Gaps", es: "Vacíos Laborales" },
    body: {
      en: "Detailed explanation of any gaps in employment exceeding 30 days.",
      es: "Explicación detallada de cualquier vacío laboral superior a 30 días.",
    },
  },
  {
    title: { en: "License Disclosure", es: "Divulgación de Licencia" },
    body: {
      en: "Specific statement on whether the driver has ever been denied or lost a license.",
      es: "Declaración específica sobre si al conductor alguna vez se le ha negado o ha perdido una licencia.",
    },
  },
];

const PATH = "/checklist/employment-application";
const TITLE = "Driver's Employment Application — 49 CFR §391.21 | DQ Checklist";
const DESC = "2026 FMCSA Driver Employment Application requirements — 10 years of CMV history, 3 years of general employment, accidents, violations, and address history under 49 CFR §391.21.";

const EmploymentApplication = () => {
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
            { name: "Employment Application", path: PATH },
          ]),
        ]}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-foreground/[0.06] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] translate-x-1/4 rounded-full bg-foreground/[0.04] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 py-10 sm:py-16">
        <Link
          to="/#checklist"
          className="glass-pill inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:bg-white/15 hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
          {t.back}
        </Link>

        <header className="mt-12 animate-fade-up">
          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-foreground/50">
            49 CFR §391.21
          </span>
          <h1 className="font-display mt-4 text-balance text-5xl font-semibold leading-[1.05] sm:text-6xl">
            {tr(lang, "Driver's Employment Application", "Solicitud de Empleo del Conductor")}
            <span className="block text-foreground/60">
              {tr(lang, "2026 Standards", "Normas 2026")}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/75">
            {tr(
              lang,
              "A signed foundation for the Driver Qualification File (DQF). Requires 10 years of commercial motor vehicle history and 3 years of general employment history.",
              "Base firmada del Archivo de Calificación del Conductor (DQF). Requiere 10 años de historial en vehículos comerciales y 3 años de historial laboral general.",
            )}
          </p>
        </header>

        <section className="mt-16 animate-fade-up" style={{ animationDelay: "80ms" }}>
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/50">
            {tr(lang, "Key Requirements", "Requisitos Clave")}
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {REQUIREMENTS.map((req) => (
              <div key={req.title.en} className="glass-card rounded-2xl p-6">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {tr(lang, req.title.en, req.title.es)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  {tr(lang, req.body.en, req.body.es)}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 animate-fade-up" style={{ animationDelay: "160ms" }}>
          <div className="glass-card flex gap-4 rounded-2xl border border-sky-400/20 bg-sky-400/5 p-6">
            <FileText className="mt-0.5 h-6 w-6 shrink-0 text-sky-300" aria-hidden="true" />
            <div className="text-sm leading-relaxed text-foreground/85">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200/80">
                {tr(lang, "DQF Foundation", "Base del DQF")}
              </p>
              <p className="mt-2 text-base text-foreground">
                {tr(
                  lang,
                  "The signed application is the cornerstone of the Driver Qualification File and must be retained for the duration of employment plus 3 years.",
                  "La solicitud firmada es la piedra angular del Archivo de Calificación del Conductor y debe conservarse durante el empleo más 3 años adicionales.",
                )}
              </p>
            </div>
          </div>
        </section>

        <div className="mt-14 flex justify-center animate-fade-up" style={{ animationDelay: "240ms" }}>
          <a
            href="/DOT_Employment_Application.docx"
            download
            className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-4 text-base font-semibold text-background shadow-lg transition hover:scale-[1.02] hover:bg-foreground/90"
          >
            {tr(lang, "Download Application", "Descargar Solicitud")}
            <ArrowUpRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </a>
        </div>

        {lang === "es" && (
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-foreground/55">
            {t.aiDisclaimer}
          </p>
        )}
      </div>
    </div>
  );
};

export default EmploymentApplication;
