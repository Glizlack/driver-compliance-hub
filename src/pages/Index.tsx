import { useState } from "react";
import heroImage from "@/assets/hero-truck.jpg";
import { CHECKLIST_ITEMS } from "@/config/checklistData";
import { TRANSLATIONS, type Lang } from "@/config/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ChecklistCard } from "@/components/ChecklistCard";

const Index = () => {
  const [lang, setLang] = useState<Lang>("en");
  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <header className="relative isolate min-h-[100svh] w-full overflow-hidden">
        <img
          src={heroImage}
          alt="Semi-truck pulled over on a dark American highway shoulder at night with blurred red and blue emergency lights in the distance"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-gradient absolute inset-0" aria-hidden="true" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="font-display text-base font-semibold tracking-tight text-foreground">
            DQ<span className="text-foreground/50">·Checklist</span>
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
          <div className="animate-fade-up mt-10" style={{ animationDelay: "240ms" }}>
            <a
              href="#checklist"
              className="glass-pill inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-foreground transition hover:bg-white/15"
            >
              {t.heroCta}
              <span aria-hidden="true" className="ml-2">↓</span>
            </a>
          </div>
        </div>
      </header>

      {/* CHECKLIST */}
      <main>
        <section
          id="checklist"
          aria-labelledby="checklist-heading"
          className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="checklist-heading"
              className="font-display text-balance text-4xl font-semibold leading-tight sm:text-5xl"
            >
              {t.sectionTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/70 sm:text-lg">
              {t.sectionSubtitle}
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CHECKLIST_ITEMS.map((item, i) => (
              <ChecklistCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </section>

        <section aria-label="Coverage" className="border-t border-white/5">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 py-12 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-foreground/50">
              Coverage
            </span>
            <p className="font-display text-2xl text-foreground/90 sm:text-3xl">
              United States · FMCSA Compliant
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-foreground/50 sm:flex-row">
          <p>© {new Date().getFullYear()} DQ Checklist</p>
          <p className="max-w-xl text-center sm:text-right">{t.footer}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
