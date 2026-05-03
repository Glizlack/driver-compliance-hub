import { ArrowLeft, ArrowUpRight, Info, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const VerifyExaminer = () => {
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
          <h1 className="font-display text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            Verify Your Medical Examiner <span aria-hidden="true">🩺</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-foreground/75">
            Ensure your doctor is approved for DOT Physicals to keep your CDL valid.
          </p>
        </header>

        {/* System Guidance Alert */}
        <div
          role="status"
          className="glass-card mt-10 flex gap-4 rounded-2xl border border-sky-400/20 bg-sky-400/5 p-5 animate-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" aria-hidden="true" />
          <div className="text-sm leading-relaxed text-foreground/85">
            <p className="font-semibold text-foreground">System Guidance</p>
            <p className="mt-1">
              The FMCSA is currently updating its infrastructure. If you see a browser security
              warning (<span className="font-medium">Connection Not Private</span>), click{" "}
              <span className="font-medium">"Advanced"</span> then{" "}
              <span className="font-medium">"Proceed"</span> to access the official portal safely.
            </p>
          </div>
        </div>

        {/* Important Notice Callout */}
        <div
          role="note"
          className="mt-6 flex gap-4 rounded-2xl border-l-4 border-amber-400 bg-amber-400/10 p-5 animate-fade-up"
          style={{ animationDelay: "160ms" }}
        >
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" aria-hidden="true" />
          <div className="text-sm leading-relaxed text-foreground/90">
            <p className="font-semibold text-foreground">Temporary Exemption</p>
            <p className="mt-1">
              Due to ongoing technical transitions, the FMCSA has issued a temporary exemption
              (valid until <span className="font-medium">October 11, 2026</span>) allowing drivers
              to continue using paper copies of their Medical Examiner's Certificate (Form
              MCSA-5876) as valid proof for up to 60 days after issuance.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div
          className="mt-12 flex justify-center animate-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="https://nationalregistry.fmcsa.dot.gov"
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

export default VerifyExaminer;
