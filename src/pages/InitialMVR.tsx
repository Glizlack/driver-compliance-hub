import { ArrowLeft, Check, ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO, articleLd, breadcrumbLd } from "@/lib/seo";
import { useLang, tr } from "@/contexts/LangContext";
import { TRANSLATIONS } from "@/config/i18n";

const REQUIREMENTS = [
  {
    title: { en: "Timing", es: "Momento de la Solicitud" },
    body: {
      en: "The inquiry to state agencies must be made at the time of application.",
      es: "La consulta a las agencias estatales debe realizarse en el momento de la solicitud de empleo.",
    },
  },
  {
    title: { en: "Documentation", es: "Documentación" },
    body: {
      en: "A copy of each MVR received must be placed in the Driver Qualification File (DQF) within 30 days of the date the driver's employment begins.",
      es: "Debe colocarse una copia de cada MVR recibido en el Archivo de Calificación del Conductor (DQF) dentro de los 30 días posteriores al inicio del empleo.",
    },
  },
  {
    title: { en: "'Good Faith' Effort", es: "Esfuerzo de 'Buena Fe'" },
    body: {
      en: "If a state fails to provide a requested MVR, you must document your repeated attempts to obtain it and certify that no such record exists for that driver.",
      es: "Si un estado no proporciona el MVR solicitado, debe documentar sus intentos repetidos por obtenerlo y certificar que no existe tal registro para ese conductor.",
    },
  },
  {
    title: { en: "Retention", es: "Conservación" },
    body: {
      en: "Initial MVRs must be retained for the duration of the driver's employment plus an additional three years after it ends.",
      es: "Los MVR iniciales deben conservarse durante el empleo del conductor más tres años adicionales después de su finalización.",
    },
  },
  {
    title: { en: "Annual Requirement", es: "Requisito Anual" },
    body: {
      en: "Following this initial 3-year lookback, carriers must then pull a new MVR every 12 months from the state where the driver currently holds a license to perform an annual review.",
      es: "Tras esta revisión inicial de 3 años, las empresas deben solicitar un nuevo MVR cada 12 meses al estado donde el conductor tiene su licencia, para realizar una revisión anual.",
    },
  },
];

const CHECKLIST: { en: string; es: string }[] = [
  {
    en: "The driver is not disqualified to operate a commercial motor vehicle (CMV) per 49 CFR § 391.15.",
    es: "El conductor no está descalificado para operar un vehículo comercial (CMV) según 49 CFR § 391.15.",
  },
  {
    en: "The driver has not had their license suspended, cancelled, or revoked.",
    es: "Al conductor no se le ha suspendido, cancelado ni revocado la licencia.",
  },
  {
    en: "The driver meets the carrier's internal safety standards regarding traffic violations and accidents.",
    es: "El conductor cumple con los estándares internos de seguridad de la empresa sobre infracciones de tránsito y accidentes.",
  },
];

const PATH = "/checklist/initial-mvr";
const TITLE = "Initial Motor Vehicle Record (MVR) | 49 CFR 391.23 | Driver Compliance Hub";
const DESC = "2026 guidelines for pulling and reviewing the mandatory initial state Motor Vehicle Record (MVR) for DOT-regulated drivers under 49 CFR §391.23.";

const InitialMVR = () => {
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
            { name: "Initial MVR", path: PATH },
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
            49 CFR § 391.23(a)(1)
          </span>
          <h1 className="font-display mt-3 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            {tr(lang, "Initial Motor Vehicle Record (MVR)", "Registro Inicial de Vehículos Motorizados (MVR)")}{" "}
            <span aria-hidden="true">🏎️</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-foreground/75">
            {tr(
              lang,
              "Guidelines for pulling and reviewing mandatory state driver records.",
              "Lineamientos para solicitar y revisar los registros estatales obligatorios del conductor.",
            )}
          </p>
        </header>

        <section className="mt-12">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
            {tr(lang, "Compliance Requirements", "Requisitos de Cumplimiento")}
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
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
          className="glass-card mt-10 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6 animate-fade-up"
          style={{ animationDelay: "360ms" }}
        >
          <div className="flex items-start gap-3">
            <ClipboardList className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" aria-hidden="true" />
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {tr(lang, "What the MVR Must Verify", "Qué debe verificar el MVR")}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-foreground/75">
                {tr(
                  lang,
                  "When reviewing these records, the carrier must confirm:",
                  "Al revisar estos registros, la empresa debe confirmar:",
                )}
              </p>
            </div>
          </div>
          <ul className="mt-5 space-y-3">
            {CHECKLIST.map((item) => (
              <li key={item.en} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
                <span>{tr(lang, item.en, item.es)}</span>
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

export default InitialMVR;
