import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { pick, type ChecklistItem } from "@/config/checklistData";
import { TRANSLATIONS } from "@/config/i18n";
import { useLang } from "@/contexts/LangContext";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ClearinghouseModalBody = () => {
  const { lang } = useLang();
  const m = TRANSLATIONS[lang].modal;
  return (
    <div className="mt-4 space-y-5 text-sm leading-relaxed text-foreground/80">
      <p>
        <strong className="text-foreground">{m.mandatoryLabel}</strong> {m.mandatoryBody}
      </p>

      <div>
        <h4 className="font-semibold text-foreground">{m.keyRequirements}</h4>
        <ul className="mt-2 space-y-2">
          {[
            [m.consentLabel, m.consentBody],
            [m.monitoringLabel, m.monitoringBody],
            [m.registrationLabel, m.registrationBody],
            [m.recordkeepingLabel, m.recordkeepingBody],
          ].map(([label, body]) => (
            <li key={label} className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/50" />
              <span><strong className="text-foreground">{label}</strong> {body}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-foreground">{m.driverRights}</h4>
        <ul className="mt-2 space-y-2">
          {[
            [m.refusalLabel, m.refusalBody],
            [m.petitionsLabel, m.petitionsBody],
          ].map(([label, body]) => (
            <li key={label} className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/50" />
              <span><strong className="text-foreground">{label}</strong> {body}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="rounded-lg border border-white/10 bg-white/5 p-4">
        <strong className="text-foreground">{m.importantLabel}</strong> {m.importantBody}
      </p>

      <div className="border-t border-white/10 pt-5">
        <a
          href="https://dot.gov"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
        >
          {m.pdfButton}
          <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};

export const ChecklistCard = ({ item, index }: { item: ChecklistItem; index: number }) => {
  const { lang } = useLang();
  const m = TRANSLATIONS[lang].modal;
  const title = pick(lang, item.title);
  const description = pick(lang, item.description);
  const cta = pick(lang, item.cta);
  const summary = pick(lang, item.details?.summary);
  const resourceLabel = pick(lang, item.details?.resourceLabel);

  const isExternal = item.href.startsWith("http");
  const isDownload = /\.(docx?|pdf)$/i.test(item.href);
  const hasDetails = !!item.details;
  const hasModal = item.modalId === "clearinghouse";

  return (
    <article
      className="glass-card group relative flex min-h-[260px] flex-col justify-between rounded-2xl p-7 animate-fade-up"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/50">
            {item.number}
          </span>
          {item.details?.regulatoryReference && (
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-foreground/45">
              {item.details.regulatoryReference}
            </span>
          )}
        </div>
        <h3 className="font-display mt-5 text-xl font-semibold leading-snug text-foreground">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-foreground/70">{description}</p>
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        {hasModal ? (
          <Dialog>
            <DialogTrigger className="inline-flex items-center text-sm font-medium text-foreground/80 transition hover:text-foreground">
              {cta}
              <ArrowUpRight className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </DialogTrigger>
            <DialogContent className="max-h-[85vh] overflow-y-auto border-white/10 bg-[hsl(220_30%_4%/0.95)] text-foreground backdrop-blur-2xl sm:max-w-lg">
              <DialogHeader>
                <DialogTitle className="font-display text-2xl text-foreground">
                  {title}
                </DialogTitle>
                <DialogDescription className="text-sm text-foreground/70">
                  {m.description}
                </DialogDescription>
              </DialogHeader>
              <ClearinghouseModalBody />
            </DialogContent>
          </Dialog>
        ) : item.href ? (
          isExternal || isDownload || item.href.startsWith("#") ? (
            <a
              href={item.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              download={isDownload ? "" : undefined}
              className="inline-flex items-center text-sm font-medium text-foreground/80 transition hover:text-foreground"
            >
              {cta}
              <ArrowUpRight className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
          ) : (
            <Link
              to={item.href}
              className="inline-flex items-center text-sm font-medium text-foreground/80 transition hover:text-foreground"
            >
              {cta}
              <ArrowUpRight className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>
          )
        ) : <span />}

        {hasDetails && (
          <Sheet>
            <SheetTrigger className="rounded-full px-3 py-1.5 text-xs font-medium text-foreground/70 transition hover:bg-white/5 hover:text-foreground">
              {cta}
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-l border-white/10 bg-[hsl(220_30%_4%/0.85)] text-foreground backdrop-blur-2xl sm:max-w-md"
            >
              <SheetHeader className="text-left">
                {item.details?.regulatoryReference && (
                  <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-foreground/50">
                    {item.details.regulatoryReference}
                  </span>
                )}
                <SheetTitle className="font-display text-2xl text-foreground">
                  {title}
                </SheetTitle>
                {summary && (
                  <SheetDescription className="text-sm leading-relaxed text-foreground/70">
                    {summary}
                  </SheetDescription>
                )}
              </SheetHeader>

              {item.details?.keyRequirements && (
                <div className="mt-8">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
                    {m.keyRequirements}
                  </h4>
                  <ul className="mt-4 space-y-3">
                    {item.details.keyRequirements.map((req, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm leading-relaxed text-foreground/80"
                      >
                        <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/50" />
                        <span>{pick(lang, req)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.details?.resourceUrl && resourceLabel && (() => {
                const resIsExternal = item.details!.resourceUrl!.startsWith("http");
                const resIsDownload = /\.(docx?|pdf)$/i.test(item.details!.resourceUrl!);
                return (
                  <a
                    href={item.details!.resourceUrl}
                    target={resIsExternal ? "_blank" : undefined}
                    rel={resIsExternal ? "noopener noreferrer" : undefined}
                    download={resIsDownload ? "" : undefined}
                    className="glass-pill mt-10 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-medium text-foreground transition hover:bg-white/15"
                  >
                    {resourceLabel}
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </a>
                );
              })()}
            </SheetContent>
          </Sheet>
        )}
      </div>
    </article>
  );
};
