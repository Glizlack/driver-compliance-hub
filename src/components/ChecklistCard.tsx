import { ArrowUpRight } from "lucide-react";
import type { ChecklistItem } from "@/config/checklistData";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const ChecklistCard = ({ item, index }: { item: ChecklistItem; index: number }) => {
  const isExternal = item.href.startsWith("http");
  const isDownload = /\.(docx?|pdf)$/i.test(item.href);
  const hasDetails = !!item.details;

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
          {item.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-foreground/70">{item.description}</p>
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <a
          href={item.href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="inline-flex items-center text-sm font-medium text-foreground/80 transition hover:text-foreground"
        >
          {item.cta}
          <ArrowUpRight className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </a>

        {hasDetails && (
          <Sheet>
            <SheetTrigger className="rounded-full px-3 py-1.5 text-xs font-medium text-foreground/70 transition hover:bg-white/5 hover:text-foreground">
              Learn More
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
                  {item.title}
                </SheetTitle>
                {item.details?.summary && (
                  <SheetDescription className="text-sm leading-relaxed text-foreground/70">
                    {item.details.summary}
                  </SheetDescription>
                )}
              </SheetHeader>

              {item.details?.keyRequirements && (
                <div className="mt-8">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
                    Key Requirements
                  </h4>
                  <ul className="mt-4 space-y-3">
                    {item.details.keyRequirements.map((req, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm leading-relaxed text-foreground/80"
                      >
                        <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/50" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.details?.resourceUrl && item.details?.resourceLabel && (
                <a
                  href={item.details.resourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-pill mt-10 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-medium text-foreground transition hover:bg-white/15"
                >
                  {item.details.resourceLabel}
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </SheetContent>
          </Sheet>
        )}
      </div>
    </article>
  );
};
