import { ArrowLeft, ArrowUpRight, Check, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO, articleLd, breadcrumbLd } from "@/lib/seo";

const OPTIONS = [
  {
    title: "Original Road Test Certificate",
    body: "Issued by the carrier after a test in a representative vehicle.",
  },
  {
    title: "Valid CDL (Copy)",
    body: "A legible copy is acceptable in lieu of a road test per 49 CFR § 391.33.",
  },
  {
    title: "Previous Certificate",
    body: "A certificate issued by another motor carrier within the last 3 years.",
  },
];

const TIPS = [
  {
    title: "Doubles, Triples, and Tankers",
    body: "A CDL is NOT a substitute for a road test if these endorsements are required. A representative vehicle test must be conducted.",
  },
  {
    title: "No Self-Testing",
    body: "Driver-owners cannot test themselves; a qualified person must conduct the exam.",
  },
  {
    title: "Record Retention",
    body: "Legible copies of CDLs or prior certificates must stay in the DQ file. Always give the driver a copy of their certificate.",
  },
];

const PATH = "/checklist/road-test";
const TITLE = "Road Test & Certification — 49 CFR §391.31 | DQ Checklist";
const DESC = "Requirements under 49 CFR §391.31 for operating commercial motor vehicles — road test certificate, CDL substitution rules, and DQF retention.";

const RoadTest = () => {
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
          Back
        </Link>

        {/* Hero */}
        <header className="mt-10 animate-fade-up">
          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-foreground/50">
            49 CFR § 391.31
          </span>
          <h1 className="font-display mt-3 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            Road Test & Certification <span aria-hidden="true">🚛</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-foreground/75">
            Requirements under 49 CFR § 391.31 for operating commercial motor vehicles.
          </p>

        </header>

        {/* Acceptable Documentation */}
        <section className="mt-14">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
            Acceptable Documentation — Quick Guide
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {OPTIONS.map((o, i) => (
              <article
                key={o.title}
                className="glass-card rounded-2xl p-5 animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <Check className="h-5 w-5 text-emerald-300" aria-hidden="true" />
                <h3 className="font-display mt-3 text-base font-semibold text-foreground">
                  {o.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75">{o.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Pro-Tips & Restrictions */}
        <section
          className="glass-card mt-10 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6 animate-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" aria-hidden="true" />
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                Pro-Tips & Restrictions
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-foreground/75">
                Common pitfalls to avoid when certifying drivers.
              </p>
            </div>
          </div>
          <ul className="mt-5 space-y-4">
            {TIPS.map((t) => (
              <li key={t.title} className="text-sm leading-relaxed text-foreground/85">
                <p className="font-semibold text-foreground">{t.title}</p>
                <p className="mt-1 text-foreground/75">{t.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <a
          href="/Driver_Road_Test_Certificate.pdf"
          download=""
          className="glass-pill mt-10 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-foreground transition hover:bg-white/15"
        >
          Download Road Test Certificate Template
          <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};

export default RoadTest;
