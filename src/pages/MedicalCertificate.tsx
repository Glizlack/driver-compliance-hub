import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";

const REQUIREMENTS = [
  {
    title: "Verification",
    body: "Carriers must verify the examiner is listed on the official FMCSA National Registry website.",
  },
  {
    title: "Validity",
    body: "Certificates are valid for up to 24 months. Shorter durations may be issued for condition monitoring (e.g., high blood pressure).",
  },
  {
    title: "Digital Integration",
    body: "Results are transmitted electronically to the FMCSA by midnight of the next calendar day.",
  },
  {
    title: "Non-CDL Drivers",
    body: "Drivers without a CDL are still required to carry a paper copy of their MEC.",
  },
  {
    title: "Examiner Compliance",
    body: "Examiners must pass a certification test and complete refresher training every 5 years.",
  },
];

const MedicalCertificate = () => {
  useEffect(() => {
    document.title = "Medical Examiner Requirements 2026 | National DOT Compliance";
    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };
    setMeta(
      "description",
      "2026 FMCSA Medical Examiner's Certificate (MEC) compliance — verify examiners on the National Registry, validity rules, and the June 2025 electronic transmission update.",
    );
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Ambient blurred background */}
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

        {/* Hero */}
        <header className="mt-12 animate-fade-up">
          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-foreground/50">
            49 CFR §391.43
          </span>
          <h1 className="font-display mt-4 text-balance text-5xl font-semibold leading-[1.05] sm:text-6xl">
            Medical Examiner Compliance
            <span className="block text-foreground/60">2026 Standards</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/75">
            A valid Medical Examiner's Certificate (MEC), Form MCSA-5876, must be issued by a
            healthcare professional listed on the FMCSA National Registry.
          </p>
        </header>

        {/* Key Requirements */}
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

        {/* Compliance Highlight */}
        <section
          className="mt-10 animate-fade-up"
          style={{ animationDelay: "160ms" }}
        >
          <div className="glass-card flex gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
            <BadgeCheck className="mt-0.5 h-6 w-6 shrink-0 text-emerald-300" aria-hidden="true" />
            <div className="text-sm leading-relaxed text-foreground/85">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200/80">
                Compliance Update
              </p>
              <p className="mt-2 text-base text-foreground">
                As of <span className="font-semibold">June 23, 2025</span>, carriers no longer need
                to maintain paper copies for CDL/CLP drivers in the DQF, provided certification is
                verified via CDLIS/MVR.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div
          className="mt-14 flex justify-center animate-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="https://nationalregistry.fmcsa.dot.gov/search/medical-examiners"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-4 text-base font-semibold text-background shadow-lg transition hover:scale-[1.02] hover:bg-foreground/90"
          >
            Search the National Registry
            <ArrowUpRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MedicalCertificate;
