import { ArrowLeft, Check, FileWarning, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO, articleLd, breadcrumbLd } from "@/lib/seo";

const PARTS = [
  {
    label: "Part 1",
    who: "Prospective Employee",
    body: "Release & Authorization — the driver authorizes previous DOT-regulated employers to release safety performance information.",
  },
  {
    label: "Parts 2 & 3",
    who: "Previous Employer",
    body: "Employment Verification and Safety / Drug & Alcohol History — completed and returned by each former DOT-regulated employer from the past 3 years.",
  },
];

const REQUIREMENTS = [
  {
    title: "Employment Verification",
    body: "General identification and exact dates of employment.",
  },
  {
    title: "Accident History",
    body: "Any 'recordable' accidents (§390.5) including dates, locations, and details on injuries or fatalities.",
  },
  {
    title: "Drug & Alcohol History",
    body: "Violations under 49 CFR Part 382 or Part 40. The Clearinghouse is primary, but manual inquiries are still required for certain positions.",
  },
];

const RETENTION = [
  {
    title: "Good Faith Efforts",
    body: "Document every contact attempt (fax, call logs, certified mail) if an employer fails to respond.",
  },
  {
    title: "Retention",
    body: "Keep records in the Driver Investigation History (DIH) file for the duration of employment plus 3 years.",
  },
];

const RIGHTS = [
  "Right to Review: Drivers may submit a written request to review information provided by previous employers.",
  "Correction / Rebuttal: Drivers may request corrections or submit a written rebuttal to the record.",
];

const PATH = "/checklist/safety-performance-history";
const TITLE = "Safety Performance History — 49 CFR §391.23 | DQ Checklist";
const DESC = "Investigation requirements for DOT-regulated employers per 49 CFR §391.23 — process, key requirements, retention, and driver rights.";

const SafetyPerformanceHistory = () => {
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
          Back
        </Link>

        {/* Hero */}
        <header className="mt-10 animate-fade-up">
          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-foreground/50">
            49 CFR § 391.23
          </span>
          <h1 className="font-display mt-3 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            Safety Performance History <span aria-hidden="true">🛡️</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-foreground/75">
            Investigation requirements for DOT-regulated employers per 49 CFR §391.23.
          </p>
        </header>

        {/* Investigation Process */}
        <section className="mt-12">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
            The Investigation Process
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {PARTS.map((p, i) => (
              <article
                key={p.label}
                className="glass-card rounded-2xl p-5 animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-foreground/50">
                  {p.label}
                </span>
                <h3 className="font-display mt-2 text-base font-semibold text-foreground">
                  {p.who}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75">{p.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Key Requirements */}
        <section className="mt-12">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
            Key Requirements
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {REQUIREMENTS.map((r, i) => (
              <article
                key={r.title}
                className="glass-card rounded-2xl p-5 animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <h3 className="font-display text-base font-semibold text-foreground">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75">{r.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Documentation & Retention Callout */}
        <section
          className="glass-card mt-10 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6 animate-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          <div className="flex items-start gap-3">
            <FileWarning className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" aria-hidden="true" />
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                Documentation & Retention
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-foreground/75">
                Maintain a complete paper trail to demonstrate compliance during an audit.
              </p>
            </div>
          </div>
          <ul className="mt-5 space-y-4">
            {RETENTION.map((r) => (
              <li key={r.title} className="text-sm leading-relaxed text-foreground/85">
                <p className="font-semibold text-foreground">{r.title}</p>
                <p className="mt-1 text-foreground/75">{r.body}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Driver Rights */}
        <section
          className="glass-card mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6 animate-fade-up"
          style={{ animationDelay: "260ms" }}
        >
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" aria-hidden="true" />
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                Driver Rights
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-foreground/75">
                Drivers retain the right to review and respond to information shared about them.
              </p>
            </div>
          </div>
          <ul className="mt-5 space-y-3">
            {RIGHTS.map((r) => (
              <li key={r} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </section>

      </div>
    </div>
  );
};

export default SafetyPerformanceHistory;
