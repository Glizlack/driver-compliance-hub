import { ArrowUpRight } from "lucide-react";
import type { ChecklistItem } from "@/config/checklistData";

export const ChecklistCard = ({ item, index }: { item: ChecklistItem; index: number }) => {
  return (
    <a
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="glass-card group relative flex min-h-[260px] flex-col justify-between rounded-2xl p-7 animate-fade-up"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/50">
            {item.number}
          </span>
          <ArrowUpRight
            className="h-5 w-5 text-foreground/40 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
            aria-hidden="true"
          />
        </div>
        <h3 className="font-display mt-5 text-xl font-semibold leading-snug text-foreground">
          {item.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-foreground/70">{item.description}</p>
      </div>
      <span className="mt-6 inline-flex items-center text-sm font-medium text-foreground/80 transition group-hover:text-foreground">
        {item.cta}
        <span aria-hidden="true" className="ml-1 transition group-hover:translate-x-0.5">→</span>
      </span>
    </a>
  );
};
