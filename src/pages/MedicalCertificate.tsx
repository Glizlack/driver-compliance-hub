import { ArrowLeft, ArrowUpRight, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO, articleLd, breadcrumbLd } from "@/lib/seo";
import { useLang } from "@/contexts/LangContext";
import { tr } from "@/contexts/LangContext";
import { TRANSLATIONS } from "@/config/i18n";

const REQUIREMENTS = [
  {
    title: { en: "Verification", es: "Verificación" },
    body: {
      en: "Carriers must verify the examiner is listed on the official FMCSA National Registry website.",
      es: "Las empresas deben verificar que el examinador figure en el sitio oficial del Registro Nacional de la FMCSA.",
    },
  },
  {
    title: { en: "Validity", es: "Vigencia" },
    body: {
      en: "Certificates are valid for up to 24 months. Shorter durations may be issued for condition monitoring (e.g., high blood pressure).",
      es: "Los certificados tienen una vigencia de hasta 24 meses. Pueden emitirse por períodos más cortos para monitorear condiciones (p. ej., presión alta).",
    },
  },
  {
    title: { en: "Digital Integration", es: "Integración Digital" },
    body: {
      en: "Results are transmitted electronically to the FMCSA by midnight of the next calendar day.",
      es: "Los resultados se transmiten electrónicamente a la FMCSA antes de la medianoche del día calendario siguiente.",
    },
  },
  {
    title: { en: "Non-CDL Drivers", es: "Conductores sin CDL" },
    body: {
      en: "Drivers without a CDL are still required to carry a paper copy of their MEC.",
      es: "Los conductores sin CDL deben seguir portando una copia en papel de su MEC.",
    },
  },
  {
    title: { en: "Examiner Compliance", es: "Cumplimiento del Examinador" },
    body: {
      en: "Examiners must pass a certification test and complete refresher training every 5 years.",
      es: "Los examinadores deben aprobar un examen de certificación y completar capacitación de actualización cada 5 años.",
    },
  },
];

const PATH = "/checklist/medical-certificate";
const TITLE = "Medical Examiner's Certificate (MEC) — 49 CFR §391.43 | DQ Checklist";
const DESC = "2026 FMCSA Medical Examiner's Certificate (MEC) compliance — verify examiners on the National Registry, validity rules, and the June 2025 electronic transmission update.";

const MedicalCertificate = () => {
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
            { name: "Medical Examiner's Certificate", path: PATH },
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
            49 CFR §391.43
          </span>
          <h1 className="font-display mt-4 text-balance text-5xl font-semibold leading-[1.05] sm:text-6xl">
            {tr(lang, "Medical Examiner Compliance", "Cumplimiento del Examinador Médico")}
            <span className="block text-foreground/60">
              {tr(lang, "2026 Standards", "Normas 2026")}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/75">
            {tr(
              lang,
              "A valid Medical Examiner's Certificate (MEC), Form MCSA-5876, must be issued by a healthcare professional listed on the FMCSA National Registry.",
              "Un Certificado del Examinador Médico (MEC) válido, Formulario MCSA-5876, debe ser emitido por un profesional de la salud que figure en el Registro Nacional de la FMCSA.",
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
          <div className="glass-card flex gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
            <BadgeCheck className="mt-0.5 h-6 w-6 shrink-0 text-emerald-300" aria-hidden="true" />
            <div className="text-sm leading-relaxed text-foreground/85">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200/80">
                {tr(lang, "Compliance Update", "Actualización de Cumplimiento")}
              </p>
              <p className="mt-2 text-base text-foreground">
                {tr(
                  lang,
                  "As of June 23, 2025, carriers no longer need to maintain paper copies for CDL/CLP drivers in the DQF, provided certification is verified via CDLIS/MVR.",
                  "A partir del 23 de junio de 2025, las empresas ya no necesitan conservar copias en papel para los conductores con CDL/CLP en el DQF, siempre que la certificación se verifique a través de CDLIS/MVR.",
                )}
              </p>
            </div>
          </div>
        </section>

        <div className="mt-14 flex justify-center animate-fade-up" style={{ animationDelay: "240ms" }}>
          <a
            href="https://nationalregistry.fmcsa.dot.gov/search/medical-examiners"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-4 text-base font-semibold text-background shadow-lg transition hover:scale-[1.02] hover:bg-foreground/90"
          >
            {tr(lang, "Search the National Registry", "Buscar en el Registro Nacional")}
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

export default MedicalCertificate;
