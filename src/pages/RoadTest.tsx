import { ArrowLeft, ArrowUpRight, Check, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO, articleLd, breadcrumbLd } from "@/lib/seo";
import { useLang, tr } from "@/contexts/LangContext";
import { TRANSLATIONS } from "@/config/i18n";

const OPTIONS = [
  {
    title: { en: "Original Road Test Certificate", es: "Certificado Original del Examen de Manejo" },
    body: {
      en: "Issued by the carrier after a test in a representative vehicle.",
      es: "Emitido por la empresa tras un examen en un vehículo representativo.",
    },
  },
  {
    title: { en: "Valid CDL (Copy)", es: "CDL Válida (Copia)" },
    body: {
      en: "A legible copy is acceptable in lieu of a road test per 49 CFR § 391.33.",
      es: "Una copia legible es aceptable en lugar del examen de manejo según 49 CFR § 391.33.",
    },
  },
  {
    title: { en: "Previous Certificate", es: "Certificado Anterior" },
    body: {
      en: "A certificate issued by another motor carrier within the last 3 years.",
      es: "Un certificado emitido por otra empresa de transporte dentro de los últimos 3 años.",
    },
  },
];

const TIPS = [
  {
    title: { en: "Doubles, Triples, and Tankers", es: "Dobles, Triples y Cisternas" },
    body: {
      en: "A CDL is NOT a substitute for a road test if these endorsements are required. A representative vehicle test must be conducted.",
      es: "La CDL NO sustituye al examen de manejo si se requieren estos endosos. Debe realizarse un examen en un vehículo representativo.",
    },
  },
  {
    title: { en: "No Self-Testing", es: "Prohibido Auto-evaluarse" },
    body: {
      en: "Driver-owners cannot test themselves; a qualified person must conduct the exam.",
      es: "Los conductores-propietarios no pueden examinarse a sí mismos; una persona calificada debe realizar el examen.",
    },
  },
  {
    title: { en: "Record Retention", es: "Conservación de Registros" },
    body: {
      en: "Legible copies of CDLs or prior certificates must stay in the DQ file. Always give the driver a copy of their certificate.",
      es: "Copias legibles de las CDL o de certificados anteriores deben permanecer en el archivo DQ. Entregue siempre al conductor una copia de su certificado.",
    },
  },
];

const PATH = "/checklist/road-test";
const TITLE = "Road Test & Certification — 49 CFR §391.31 | DQ Checklist";
const DESC = "Requirements under 49 CFR §391.31 for operating commercial motor vehicles — road test certificate, CDL substitution rules, and DQF retention.";

const RoadTest = () => {
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
            { name: "Road Test & Certification", path: PATH },
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
            49 CFR § 391.31
          </span>
          <h1 className="font-display mt-3 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            {tr(lang, "Road Test & Certification", "Examen de Manejo y Certificación")}{" "}
            <span aria-hidden="true">🚛</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-foreground/75">
            {tr(
              lang,
              "Requirements under 49 CFR § 391.31 for operating commercial motor vehicles.",
              "Requisitos según 49 CFR § 391.31 para operar vehículos comerciales.",
            )}
          </p>
        </header>

        <section className="mt-14">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
            {tr(lang, "Acceptable Documentation — Quick Guide", "Documentación Aceptable — Guía Rápida")}
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {OPTIONS.map((o, i) => (
              <article
                key={o.title.en}
                className="glass-card rounded-2xl p-5 animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <Check className="h-5 w-5 text-emerald-300" aria-hidden="true" />
                <h3 className="font-display mt-3 text-base font-semibold text-foreground">
                  {tr(lang, o.title.en, o.title.es)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                  {tr(lang, o.body.en, o.body.es)}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="glass-card mt-10 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6 animate-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" aria-hidden="true" />
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {tr(lang, "Pro-Tips & Restrictions", "Consejos y Restricciones")}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-foreground/75">
                {tr(
                  lang,
                  "Common pitfalls to avoid when certifying drivers.",
                  "Errores comunes a evitar al certificar conductores.",
                )}
              </p>
            </div>
          </div>
          <ul className="mt-5 space-y-4">
            {TIPS.map((tip) => (
              <li key={tip.title.en} className="text-sm leading-relaxed text-foreground/85">
                <p className="font-semibold text-foreground">
                  {tr(lang, tip.title.en, tip.title.es)}
                </p>
                <p className="mt-1 text-foreground/75">
                  {tr(lang, tip.body.en, tip.body.es)}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <a
          href="/Driver_Road_Test_Certificate.pdf"
          download=""
          className="glass-pill mt-10 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-foreground transition hover:bg-white/15"
        >
          {tr(
            lang,
            "Download Road Test Certificate Template",
            "Descargar Plantilla de Certificado de Examen de Manejo",
          )}
          <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
        </a>

        {lang === "es" && (
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-foreground/55">
            {t.aiDisclaimer}
          </p>
        )}
      </div>
    </div>
  );
};

export default RoadTest;
