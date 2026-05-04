import { useEffect } from "react";
import { ArrowLeft, Check, ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";

const REQUIREMENTS = [
  {
    title: "Timing",
    body: "The inquiry to state agencies must be made at the time of application.",
  },
  {
    title: "Documentation",
    body: "A copy of each MVR received must be placed in the Driver Qualification File (DQF) within 30 days of the date the driver's employment begins.",
  },
  {
    title: "'Good Faith' Effort",
    body: "If a state fails to provide a requested MVR, you must document your repeated attempts to obtain it and certify that no such record exists for that driver.",
  },
  {
    title: "Retention",
    body: "Initial MVRs must be retained for the duration of the driver's employment plus an additional three years after it ends.",
  },
  {
    title: "Annual Requirement",
    body: "Following this initial 3-year lookback, carriers must then pull a new MVR every 12 months from the state where the driver currently holds a license to perform an annual review.",
  },
];

const CHECKLIST = [
  "The driver is not disqualified to operate a commercial motor vehicle (CMV) per 49 CFR § 391.15.",
  "The driver has not had their license suspended, cancelled, or revoked.",
  "The driver meets the carrier's internal safety standards regarding traffic violations and accidents.",
];

const InitialMVR = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Initial MVR Compliance 2026 | National DOT Compliance";
    const meta =
      document.querySelector('meta[name="description"]') ??
      (() => {
        const m = document.createElement("meta");
        m.setAttribute("name", "description");
        document.head.appendChild(m);
        return m;
      })();
    const prevDesc = meta.getAttribute("content");
    meta.setAttribute(
      "content",
      "Guidelines for pulling and reviewing mandatory state Motor Vehicle Records (MVR) for DOT-regulated drivers.",
    );
    return () => {
      document.title = prevTitle;
      if (prevDesc) meta.setAttribute("content", prevDesc);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
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
            49 CFR § 391.23(a)(1)
          </span>
          <h1 className="font-display mt-3 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            Initial Motor Vehicle Record (MVR) <span aria-hidden="true">🏎️</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-foreground/75">
            Guidelines for pulling and reviewing mandatory state driver records.
          </p>
        </header>

        {/* Compliance Requirements */}
        <section className="mt-12">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
            Compliance Requirements
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
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

        {/* Verification Callout */}
        <section
          className="glass-card mt-10 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6 animate-fade-up"
          style={{ animationDelay: "360ms" }}
        >
          <div className="flex items-start gap-3">
            <ClipboardList className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" aria-hidden="true" />
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                What the MVR Must Verify
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-foreground/75">
                When reviewing these records, the carrier must confirm:
              </p>
            </div>
          </div>
          <ul className="mt-5 space-y-3">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default InitialMVR;
