import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { pick, type ChecklistItem } from "@/config/checklistData";
import { TRANSLATIONS } from "@/config/i18n";
import { localizePath, useLang } from "@/contexts/LangContext";
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
  const modal = TRANSLATIONS[lang].modal;
  const requirements = [
    [modal.consentLabel, modal.consentBody],
    [modal.monitoringLabel, modal.monitoringBody],
    [modal.registrationLabel, modal.registrationBody],
    [modal.recordkeepingLabel, modal.recordkeepingBody],
  ];

  return (
    <div className="mt-4 space-y-5 text-sm leading-relaxed text-foreground/80">
      <p>
        <strong className="text-foreground">{modal.mandatoryLabel}</strong> {modal.mandatoryBody}
      </p>
      <div>
        <h4 className="font-semibold text-foreground">{modal.keyRequirements}</h4>
        <ul className="mt-2 space-y-2">
          {requirements.map(([label, body]) => (
            <li key={label} className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/50" />
              <span><strong className="text-foreground">{label}</strong> {body}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="rounded-lg border border-white/10 bg-white/5 p-4">
        <strong className="text-foreground">{modal.importantLabel}</strong> {modal.importantBody}
      </p>
      <a
        href="https://clearinghouse.fmcsa.dot.gov/FAQ/Topics/Employers%2Cqueries-and-consent-requests"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-foreground/90"
      >
        {modal.pdfButton}
        <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  );
};

export const ChecklistCard = ({ item, index }: { item: ChecklistItem; index: number }) => {
  const { lang } = useLang();
  const modal = TRANSLATIONS[lang].modal;
  const title = pick(lang, item.title);
  const description = pick(lang, item.description);
  const cta = pick(lang, item.cta);
  const isExternal = item.href.startsWith("http");
  const hasModal = item.modalId === "clearinghouse";

  return (
    <article
      className="glass-card group relative flex min-h-[260px] flex-col justify-between rounded-2xl p-7 animate-fade-up"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div>
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/50">
          {item.number}
        </span>
        <h3 className="font-display mt-5 text-xl font-semibold leading-snug text-foreground">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-foreground/70">{description}</p>
      </div>
      <div className="mt-6">
        {hasModal ? (
          <Dialog>
            <DialogTrigger className="inline-flex items-center text-sm font-medium text-foreground/80 transition hover:text-foreground">
              {cta}
              <ArrowUpRight className="ml-1 h-4 w-4" aria-hidden="true" />
            </DialogTrigger>
            <DialogContent className="max-h-[85vh] overflow-y-auto border-white/10 bg-[hsl(220_30%_4%/0.95)] text-foreground backdrop-blur-2xl sm:max-w-lg">
              <DialogHeader>
                <DialogTitle className="font-display text-2xl text-foreground">{title}</DialogTitle>
                <DialogDescription className="text-sm text-foreground/70">{modal.description}</DialogDescription>
              </DialogHeader>
              <ClearinghouseModalBody />
            </DialogContent>
          </Dialog>
        ) : isExternal ? (
          <a href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-foreground/80 transition hover:text-foreground">
            {cta}
            <ArrowUpRight className="ml-1 h-4 w-4" aria-hidden="true" />
          </a>
        ) : (
          <Link to={localizePath(item.href, lang)} className="inline-flex items-center text-sm font-medium text-foreground/80 transition hover:text-foreground">
            {cta}
            <ArrowUpRight className="ml-1 h-4 w-4" aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  );
};
