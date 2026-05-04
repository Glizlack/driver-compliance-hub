import { ArrowLeft, Check, FileWarning, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO, articleLd, breadcrumbLd } from "@/lib/seo";
import { useLang, tr } from "@/contexts/LangContext";
import { TRANSLATIONS } from "@/config/i18n";

const PARTS = [
  {
    label: { en: "Part 1", es: "Parte 1" },
    who: { en: "Prospective Employee", es: "Empleado Potencial" },
    body: {
      en: "Release & Authorization — the driver authorizes previous DOT-regulated employers to release safety performance information.",
      es: "Autorización y Liberación — el conductor autoriza a los empleadores anteriores regulados por el DOT a divulgar información sobre desempeño de seguridad.",
    },
  },
  {
    label: { en: "Parts 2 & 3", es: "Partes 2 y 3" },
    who: { en: "Previous Employer", es: "Empleador Anterior" },
    body: {
      en: "Employment Verification and Safety / Drug & Alcohol History — completed and returned by each former DOT-regulated employer from the past 3 years.",
      es: "Verificación de Empleo e Historial de Seguridad / Drogas y Alcohol — completado y devuelto por cada empleador anterior regulado por el DOT en los últimos 3 años.",
    },
  },
];

const REQUIREMENTS = [
  {
    title: { en: "Employment Verification", es: "Verificación de Empleo" },
    body: {
      en: "General identification and exact dates of employment.",
      es: "Identificación general y fechas exactas de empleo.",
    },
  },
  {
    title: { en: "Accident History", es: "Historial de Accidentes" },
    body: {
      en: "Any 'recordable' accidents (§390.5) including dates, locations, and details on injuries or fatalities.",
      es: "Cualquier accidente 'reportable' (§390.5), incluyendo fechas, lugares y detalles de lesiones o víctimas mortales.",
    },
  },
  {
    title: { en: "Drug & Alcohol History", es: "Historial de Drogas y Alcohol" },
    body: {
      en: "Violations under 49 CFR Part 382 or Part 40. The Clearinghouse is primary, but manual inquiries are still required for certain positions.",
      es: "Infracciones bajo 49 CFR Parte 382 o Parte 40. El Clearinghouse es la fuente principal, pero las consultas manuales aún son obligatorias para ciertos puestos.",
    },
  },
];

const RETENTION = [
  {
    title: { en: "Good Faith Efforts", es: "Esfuerzos de Buena Fe" },
    body: {
      en: "Document every contact attempt (fax, call logs, certified mail) if an employer fails to respond.",
      es: "Documente cada intento de contacto (fax, registros de llamadas, correo certificado) si un empleador no responde.",
    },
  },
  {
    title: { en: "Retention", es: "Conservación" },
    body: {
      en: "Keep records in the Driver Investigation History (DIH) file for the duration of employment plus 3 years.",
      es: "Conserve los registros en el archivo de Historial de Investigación del Conductor (DIH) durante el empleo más 3 años.",
    },
  },
];

const RIGHTS: { en: string; es: string }[] = [
  {
    en: "Right to Review: Drivers may submit a written request to review information provided by previous employers.",
    es: "Derecho a Revisar: los conductores pueden presentar una solicitud por escrito para revisar la información proporcionada por empleadores anteriores.",
  },
  {
    en: "Correction / Rebuttal: Drivers may request corrections or submit a written rebuttal to the record.",
    es: "Corrección / Refutación: los conductores pueden solicitar correcciones o presentar una refutación por escrito al registro.",
  },
];

const PATH = "/checklist/safety-performance-history";
const TITLE = "Safety Performance History — 49 CFR §391.23 | DQ Checklist";
const DESC = "Investigation requirements for DOT-regulated employers per 49 CFR §391.23 — process, key requirements, retention, and driver rights.";

const SafetyPerformanceHistory = () => {
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
            { name: "Safety Performance History", path: PATH },
          ]),
        ]}
      />
      <div className="mx-auto max-w-3xl px-6 py-10 sm:py-16">
        <Link
          to="/#checklist"
          className="glass-pill inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:bg-white/15 hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
          {t.back}
        </Link>

        <header className="mt-10 animate-fade-up">
          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-foreground/50">
            49 CFR § 391.23
          </span>
          <h1 className="font-display mt-3 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            {tr(lang, "Safety Performance History", "Historial de Desempeño de Seguridad")}{" "}
            <span aria-hidden="true">🛡️</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-foreground/75">
            {tr(
              lang,
              "Investigation requirements for DOT-regulated employers per 49 CFR §391.23.",
              "Requisitos de investigación para empleadores regulados por el DOT según 49 CFR §391.23.",
            )}
          </p>
        </header>

        <section className="mt-12">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
            {tr(lang, "The Investigation Process", "El Proceso de Investigación")}
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {PARTS.map((p, i) => (
              <article
                key={p.label.en}
                className="glass-card rounded-2xl p-5 animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-foreground/50">
                  {tr(lang, p.label.en, p.label.es)}
                </span>
                <h3 className="font-display mt-2 text-base font-semibold text-foreground">
                  {tr(lang, p.who.en, p.who.es)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                  {tr(lang, p.body.en, p.body.es)}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
            {tr(lang, "Key Requirements", "Requisitos Clave")}
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {REQUIREMENTS.map((r, i) => (
              <article
                key={r.title.en}
                className="glass-card rounded-2xl p-5 animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <h3 className="font-display text-base font-semibold text-foreground">
                  {tr(lang, r.title.en, r.title.es)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                  {tr(lang, r.body.en, r.body.es)}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="glass-card mt-10 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6 animate-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          <div className="flex items-start gap-3">
            <FileWarning className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" aria-hidden="true" />
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {tr(lang, "Documentation & Retention", "Documentación y Conservación")}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-foreground/75">
                {tr(
                  lang,
                  "Maintain a complete paper trail to demonstrate compliance during an audit.",
                  "Mantenga un registro documental completo para demostrar el cumplimiento durante una auditoría.",
                )}
              </p>
            </div>
          </div>
          <ul className="mt-5 space-y-4">
            {RETENTION.map((r) => (
              <li key={r.title.en} className="text-sm leading-relaxed text-foreground/85">
                <p className="font-semibold text-foreground">{tr(lang, r.title.en, r.title.es)}</p>
                <p className="mt-1 text-foreground/75">{tr(lang, r.body.en, r.body.es)}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="glass-card mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6 animate-fade-up"
          style={{ animationDelay: "260ms" }}
        >
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" aria-hidden="true" />
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {tr(lang, "Driver Rights", "Derechos del Conductor")}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-foreground/75">
                {tr(
                  lang,
                  "Drivers retain the right to review and respond to information shared about them.",
                  "Los conductores conservan el derecho de revisar y responder a la información compartida sobre ellos.",
                )}
              </p>
            </div>
          </div>
          <ul className="mt-5 space-y-3">
            {RIGHTS.map((r) => (
              <li key={r.en} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
                <span>{tr(lang, r.en, r.es)}</span>
              </li>
            ))}
          </ul>
        </section>

        {lang === "es" && (
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-foreground/55">
            {t.aiDisclaimer}
          </p>
        )}
      </div>
    </div>
  );
};

export default SafetyPerformanceHistory;
