import { ArrowLeft, ArrowUpRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO, articleLd, breadcrumbLd } from "@/lib/seo";

const REQUIREMENTS = [
  {
    title: "10-Year CMV History",
    body: "Full 10-year employment history for any work involving commercial motor vehicles (CMVs).",
  },
  {
    title: "3-Year General History",
    body: "Full 3-year history for all other employment outside of CMV work.",
  },
  {
    title: "Accidents & Violations",
    body: "List of all vehicle accidents and traffic violations for the past 3 years.",
  },
  {
    title: "Address History",
    body: "Full address history covering the past 3 years of residence.",
  },
  {
    title: "Employment Gaps",
    body: "Detailed explanation of any gaps in employment exceeding 30 days.",
  },
  {
    title: "License Disclosure",
    body: "Specific statement on whether the driver has ever been denied or lost a license.",
  },
];

const PATH = "/checklist/employment-application";
const TITLE = "Driver's Employment Application — 49 CFR §391.21 | DQ Checklist";
const DESC = "2026 FMCSA Driver Employment Application requirements — 10 years of CMV history, 3 years of general employment, accidents, violations, and address history under 49 CFR §391.21.";

const EmploymentApplication = () => {
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
          Back
        </Link>

        <header className="mt-12 animate-fade-up">
          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-foreground/50">
            49 CFR §391.21
          </span>
          <h1 className="font-display mt-4 text-balance text-5xl font-semibold leading-[1.05] sm:text-6xl">
            Driver's Employment Application
            <span className="block text-foreground/60">2026 Standards</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/75">
            A signed foundation for the Driver Qualification File (DQF). Requires 10 years of
            commercial motor vehicle history and 3 years of general employment history.
          </p>
        </header>

        <section className="mt-16 animate-fade-up" style={{ animationDelay: "80ms" }}>
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/50">
            Key Requirements
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {REQUIREMENTS.map((req) => (
              <div key={req.title} className="glass-card rounded-2xl p-6">
                <h3 className="font-display text-lg font-semibold text-foreground">{req.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{req.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 animate-fade-up" style={{ animationDelay: "160ms" }}>
          <div className="glass-card flex gap-4 rounded-2xl border border-sky-400/20 bg-sky-400/5 p-6">
            <FileText className="mt-0.5 h-6 w-6 shrink-0 text-sky-300" aria-hidden="true" />
            <div className="text-sm leading-relaxed text-foreground/85">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200/80">
                DQF Foundation
              </p>
              <p className="mt-2 text-base text-foreground">
                The signed application is the cornerstone of the Driver Qualification File and must
                be retained for the duration of employment plus 3 years.
              </p>
            </div>
          </div>
        </section>

        <div
          className="mt-14 flex justify-center animate-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="/DOT_Employment_Application.docx"
            download
            className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-4 text-base font-semibold text-background shadow-lg transition hover:scale-[1.02] hover:bg-foreground/90"
          >
            Download Application
            <ArrowUpRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmploymentApplication;
