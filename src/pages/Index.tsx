import { useState } from "react";
import { ArrowUpRight, CheckCircle2, ExternalLink, Printer, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-truck.jpg";
import { CHECKLIST_ITEMS, CHECKLIST_SECTIONS, SITE, pick } from "@/config/checklistData";
import { TRANSLATIONS } from "@/config/i18n";
import { useLang, tr } from "@/contexts/LangContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ChecklistCard } from "@/components/ChecklistCard";
import { SEO, breadcrumbLd } from "@/lib/seo";
import { Link } from "react-router-dom";

type OperatorType = "owner" | "fleet";
type LicenseType = "cdl" | "non-cdl";
type DriverStage = "new-hire" | "current";

const OFFICIAL_SOURCES = [
  {
    title: "Driver Qualification File Checklist",
    label: "FMCSA Safety Planner",
    href: "https://csa.fmcsa.dot.gov/SafetyPlanner/GetFile.aspx?d=44",
  },
  {
    title: "Clearinghouse Queries & Consent",
    label: "FMCSA Clearinghouse",
    href: "https://clearinghouse.fmcsa.dot.gov/FAQ/Topics/Employers%2Cqueries-and-consent-requests",
  },
  {
    title: "Medical Certificate Transition Exemption",
    label: "FMCSA Notice - April 10, 2026",
    href: "https://www.fmcsa.dot.gov/newsroom/fmcsa-issues-temporary-exemption-support-nrii-transition",
  },
];

const Index = () => {
  const { lang, setLang } = useLang();
  const t = TRANSLATIONS[lang];
  const [activeSection, setActiveSection] = useState(CHECKLIST_SECTIONS[0].id);
  const [operatorType, setOperatorType] = useState<OperatorType>("owner");
  const [licenseType, setLicenseType] = useState<LicenseType>("cdl");
  const [driverStage, setDriverStage] = useState<DriverStage>("new-hire");
  const [showChecklist, setShowChecklist] = useState(false);

  const selectedSection =
    CHECKLIST_SECTIONS.find((section) => section.id === activeSection) ?? CHECKLIST_SECTIONS[0];
  const visibleItems = selectedSection.itemIds
    .map((id) => CHECKLIST_ITEMS.find((item) => item.id === id))
    .filter((item): item is (typeof CHECKLIST_ITEMS)[number] => !!item);

  const generatedChecklist =
    driverStage === "new-hire"
      ? [
          tr(lang, "Signed employment application and required work history", "Solicitud de empleo firmada e historial laboral requerido"),
          tr(lang, "Initial motor vehicle records and review", "Registros iniciales de vehiculos motorizados y revision"),
          tr(lang, "Road test certificate or qualifying equivalent", "Certificado de examen de manejo o equivalente valido"),
          tr(lang, "Medical qualification verification", "Verificacion de calificacion medica"),
          ...(licenseType === "cdl"
            ? [tr(lang, "Full pre-employment Clearinghouse query with electronic consent", "Consulta completa previa al empleo en Clearinghouse con consentimiento electronico")]
            : []),
          tr(lang, "Safety performance history investigation", "Investigacion del historial de desempeno de seguridad"),
        ]
      : [
          tr(lang, "Annual MVR inquiry and documented review", "Consulta anual de MVR y revision documentada"),
          ...(licenseType === "cdl"
            ? [tr(lang, "Annual Clearinghouse query with required consent", "Consulta anual al Clearinghouse con consentimiento requerido")]
            : []),
          tr(lang, "Confirm medical certification remains current", "Confirmar que la certificacion medica siga vigente"),
        ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={SITE.metaTitle}
        description={SITE.metaDescription}
        path="/"
        jsonLd={breadcrumbLd([{ name: "Home", path: "/" }])}
      />
      <header className="relative isolate min-h-[100svh] w-full overflow-hidden">
        <img
          src={heroImage}
          alt="Semi-truck on an American highway shoulder at night"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-gradient absolute inset-0" aria-hidden="true" />

        <nav className="relative z-30 mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-6">
          <div className="font-display text-base font-semibold tracking-tight text-foreground">
            Driver<span className="text-amber-300"> Compliance</span> Hub
          </div>
          <div className="hidden items-center gap-6 text-sm text-foreground/70 md:flex">
            <a href="#checklist" className="transition hover:text-foreground">Compliance</a>
            <a href="#builder" className="transition hover:text-foreground">Build Yours</a>
            <a href="#sources" className="transition hover:text-foreground">Sources</a>
            <Link to="/contact" className="transition hover:text-foreground">Contact</Link>
          </div>
          <LanguageSwitcher value={lang} onChange={setLang} />
        </nav>

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-88px)] max-w-7xl flex-col justify-center px-6 pb-24 pt-10">
          <span className="glass-pill animate-fade-up inline-flex w-fit items-center rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-foreground/80">
            {t.eyebrow}
          </span>
          <h1
            className="font-display animate-fade-up mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl md:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            {t.heroTitle}
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-foreground/75 sm:text-xl"
            style={{ animationDelay: "160ms" }}
          >
            {t.heroSubtitle}
          </p>
          <div className="animate-fade-up mt-10 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
            <a href="#builder" className="inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:bg-foreground/90">
              {t.heroCta}
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#checklist" className="glass-pill inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-foreground transition hover:bg-white/15">
              {tr(lang, "View Requirements", "Ver Requisitos")}
            </a>
          </div>
          <p className="glass-pill animate-fade-up mt-10 inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs text-foreground/75" style={{ animationDelay: "320ms" }}>
            <ShieldCheck className="h-4 w-4 text-emerald-300" aria-hidden="true" />
            {tr(lang, "No account needed. No driver data stored.", "Sin cuenta. No se almacenan datos del conductor.")}
          </p>
        </div>
      </header>

      <main>
        <section id="checklist" aria-labelledby="checklist-heading" className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300/90">
              {tr(lang, "Compliance Map", "Mapa de Cumplimiento")}
            </p>
            <h2 id="checklist-heading" className="font-display mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              {t.sectionTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/70 sm:text-lg">{t.sectionSubtitle}</p>
          </div>

          <div className="mt-12 flex flex-wrap gap-3" role="tablist" aria-label="Compliance topics">
            {CHECKLIST_SECTIONS.map((section) => (
              <button
                key={section.id}
                type="button"
                role="tab"
                aria-selected={activeSection === section.id}
                onClick={() => setActiveSection(section.id)}
                className={`rounded-full px-5 py-3 text-sm font-medium transition ${
                  activeSection === section.id
                    ? "bg-foreground text-background"
                    : "glass-pill text-foreground/75 hover:text-foreground"
                }`}
              >
                {pick(lang, section.label)}
              </button>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-foreground/60">
            {pick(lang, selectedSection.description)}
          </p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleItems.map((item, index) => (
              <ChecklistCard key={`${selectedSection.id}-${item.id}`} item={item} index={index} />
            ))}
          </div>
        </section>

        <section id="builder" className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300/90">
                {tr(lang, "Free Tool", "Herramienta Gratuita")}
              </p>
              <h2 className="font-display mt-4 text-4xl font-semibold leading-tight">
                {tr(lang, "Build a checklist for your operation", "Cree una lista para su operacion")}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-foreground/70">
                {tr(
                  lang,
                  "Choose the situation below. Your checklist is generated in this browser and can be printed without creating an account.",
                  "Seleccione su situacion. Su lista se genera en este navegador y puede imprimirse sin crear una cuenta.",
                )}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <fieldset>
                <legend className="text-sm font-semibold">{tr(lang, "Owner-operator or fleet?", "Operador propietario o flota?")}</legend>
                <div className="mt-3 flex gap-2">
                  {(["owner", "fleet"] as OperatorType[]).map((value) => (
                    <button key={value} type="button" onClick={() => setOperatorType(value)} className={`rounded-full px-4 py-2 text-sm transition ${operatorType === value ? "bg-amber-300 text-background" : "bg-white/5 text-foreground/75"}`}>
                      {value === "owner" ? tr(lang, "Owner-operator", "Operador propietario") : tr(lang, "Small fleet", "Flota pequena")}
                    </button>
                  ))}
                </div>
              </fieldset>
              <fieldset className="mt-6">
                <legend className="text-sm font-semibold">{tr(lang, "Driver license type?", "Tipo de licencia?")}</legend>
                <div className="mt-3 flex gap-2">
                  {(["cdl", "non-cdl"] as LicenseType[]).map((value) => (
                    <button key={value} type="button" onClick={() => setLicenseType(value)} className={`rounded-full px-4 py-2 text-sm transition ${licenseType === value ? "bg-amber-300 text-background" : "bg-white/5 text-foreground/75"}`}>
                      {value === "cdl" ? "CDL / CLP" : tr(lang, "Non-CDL CMV", "CMV sin CDL")}
                    </button>
                  ))}
                </div>
              </fieldset>
              <fieldset className="mt-6">
                <legend className="text-sm font-semibold">{tr(lang, "New hire or current driver?", "Nuevo conductor o conductor actual?")}</legend>
                <div className="mt-3 flex gap-2">
                  {(["new-hire", "current"] as DriverStage[]).map((value) => (
                    <button key={value} type="button" onClick={() => setDriverStage(value)} className={`rounded-full px-4 py-2 text-sm transition ${driverStage === value ? "bg-amber-300 text-background" : "bg-white/5 text-foreground/75"}`}>
                      {value === "new-hire" ? tr(lang, "New hire", "Nueva contratacion") : tr(lang, "Current driver", "Conductor actual")}
                    </button>
                  ))}
                </div>
              </fieldset>
              <button type="button" onClick={() => setShowChecklist(true)} className="mt-8 w-full rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:bg-foreground/90">
                {tr(lang, "Generate Checklist", "Generar Lista")}
              </button>

              {showChecklist && (
                <div className="print-checklist mt-8 rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.06] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                    {operatorType === "owner" ? tr(lang, "Owner-operator checklist", "Lista del operador propietario") : tr(lang, "Small fleet checklist", "Lista de pequena flota")}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {generatedChecklist.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-foreground/85">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button type="button" onClick={() => window.print()} className="mt-6 inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-sm text-foreground transition hover:bg-white/10">
                    <Printer className="mr-2 h-4 w-4" aria-hidden="true" />
                    {tr(lang, "Print Checklist", "Imprimir Lista")}
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="sources" className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
                {tr(lang, "Verified With FMCSA", "Verificado Con FMCSA")}
              </p>
              <h2 className="font-display mt-4 text-4xl font-semibold">
                {tr(lang, "Official sources, easy to reach", "Fuentes oficiales, faciles de consultar")}
              </h2>
            </div>
            <p className="text-sm text-foreground/60">
              {tr(lang, "Last reviewed: May 24, 2026", "Ultima revision: 24 de mayo de 2026")}
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {OFFICIAL_SOURCES.map((source) => (
              <a key={source.href} href={source.href} target="_blank" rel="noopener noreferrer" className="glass-card rounded-2xl p-6">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/45">{source.label}</p>
                <h3 className="font-display mt-4 text-xl font-semibold">{source.title}</h3>
                <span className="mt-6 inline-flex items-center text-sm text-foreground/75">
                  {tr(lang, "Open official source", "Abrir fuente oficial")}
                  <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </section>

        <section aria-label="Hosting approach" className="border-t border-white/5">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 py-12 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-foreground/50">
              {tr(lang, "Simple By Design", "Simple Por Diseno")}
            </span>
            <p className="font-display text-2xl text-foreground/90 sm:text-3xl">{t.coverageValue}</p>
            <p className="max-w-xl text-sm leading-relaxed text-foreground/60">
              {tr(lang, "This free checklist runs in your browser. No document uploads, saved driver records, or account required.", "Esta lista gratuita funciona en su navegador. No requiere cargar documentos, guardar expedientes ni crear una cuenta.")}
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-6 py-8 text-xs text-foreground/50 sm:grid-cols-3">
          <p className="text-center sm:text-left">(c) {new Date().getFullYear()} Driver Compliance Hub</p>
          <div className="flex justify-center gap-4">
            <Link to="/about" className="hover:text-foreground">{lang === "es" ? "Sobre nosotros" : "About Us"}</Link>
            <Link to="/contact" className="hover:text-foreground">{lang === "es" ? "Contactenos" : "Contact Us"}</Link>
            <Link to="/privacy" className="hover:text-foreground">{lang === "es" ? "Privacidad" : "Privacy"}</Link>
          </div>
          <p className="max-w-xl text-center sm:ml-auto sm:text-right">{t.footer}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
