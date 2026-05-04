import { ArrowLeft, ArrowUpRight, Info, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO, articleLd, breadcrumbLd } from "@/lib/seo";
import { useLang, tr } from "@/contexts/LangContext";
import { TRANSLATIONS } from "@/config/i18n";

const PATH = "/verify-examiner";
const TITLE = "Verify Your DOT Medical Examiner | FMCSA National Registry";
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
        <Link
          to="/#checklist"
          className="glass-pill inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:bg-white/15 hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
          {t.back}
        </Link>

        <header className="mt-10 animate-fade-up">
          <h1 className="font-display text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            {tr(lang, "Verify Your Medical Examiner", "Verifique a su Examinador Médico")}{" "}
            <span aria-hidden="true">🩺</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-foreground/75">
            {tr(
              lang,
              "Ensure your doctor is approved for DOT Physicals to keep your CDL valid.",
              "Asegúrese de que su médico esté autorizado para realizar Exámenes Físicos del DOT y mantener su CDL vigente.",
            )}
          </p>
        </header>

        <div
          role="status"
          className="glass-card mt-10 flex gap-4 rounded-2xl border border-sky-400/20 bg-sky-400/5 p-5 animate-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" aria-hidden="true" />
          <div className="text-sm leading-relaxed text-foreground/85">
            <p className="font-semibold text-foreground">
              {tr(lang, "System Guidance", "Orientación del Sistema")}
            </p>
            <p className="mt-1">
              {lang === "es" ? (
                <>
                  La FMCSA está actualizando su infraestructura. Si aparece una advertencia de
                  seguridad del navegador (<span className="font-medium">Conexión No Privada</span>),
                  haga clic en <span className="font-medium">"Avanzado"</span> y luego en{" "}
                  <span className="font-medium">"Continuar"</span> para acceder al portal oficial de
                  forma segura.
                </>
              ) : (
                <>
                  The FMCSA is currently updating its infrastructure. If you see a browser security
                  warning (<span className="font-medium">Connection Not Private</span>), click{" "}
                  <span className="font-medium">"Advanced"</span> then{" "}
                  <span className="font-medium">"Proceed"</span> to access the official portal safely.
                </>
              )}
            </p>
          </div>
        </div>

        <div
          role="note"
          className="mt-6 flex gap-4 rounded-2xl border-l-4 border-amber-400 bg-amber-400/10 p-5 animate-fade-up"
          style={{ animationDelay: "160ms" }}
        >
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" aria-hidden="true" />
          <div className="text-sm leading-relaxed text-foreground/90">
            <p className="font-semibold text-foreground">
              {tr(lang, "Temporary Exemption", "Exención Temporal")}
            </p>
            <p className="mt-1">
              {lang === "es" ? (
                <>
                  Debido a transiciones técnicas en curso, la FMCSA emitió una exención temporal
                  (vigente hasta el <span className="font-medium">11 de octubre de 2026</span>) que
                  permite a los conductores seguir usando copias en papel de su Certificado del
                  Examinador Médico (Formulario MCSA-5876) como prueba válida hasta 60 días después
                  de su emisión.
                </>
              ) : (
                <>
                  Due to ongoing technical transitions, the FMCSA has issued a temporary exemption
                  (valid until <span className="font-medium">October 11, 2026</span>) allowing
                  drivers to continue using paper copies of their Medical Examiner's Certificate
                  (Form MCSA-5876) as valid proof for up to 60 days after issuance.
                </>
              )}
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-center animate-fade-up" style={{ animationDelay: "240ms" }}>
          <a
            href="https://nationalregistry.fmcsa.dot.gov"
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

export default VerifyExaminer;
