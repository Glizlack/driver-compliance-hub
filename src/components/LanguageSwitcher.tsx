import { useState } from "react";
import { Globe } from "lucide-react";
import { LANGUAGES, type Lang } from "@/config/i18n";

interface Props {
  value: Lang;
  onChange: (l: Lang) => void;
}

export const LanguageSwitcher = ({ value, onChange }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Change language"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="glass-pill flex items-center gap-2 rounded-full px-4 py-2 text-sm text-foreground/90 transition hover:text-foreground"
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        <span className="font-medium uppercase tracking-wider">{value}</span>
      </button>
      {open && (
        <ul
          role="listbox"
          className="glass-pill absolute right-0 mt-2 min-w-[10rem] overflow-hidden rounded-2xl p-1 text-sm"
        >
          {LANGUAGES.map((l) => (
            <li key={l.code}>
              <button
                role="option"
                aria-selected={value === l.code}
                onClick={() => {
                  onChange(l.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left transition hover:bg-white/10 ${
                  value === l.code ? "text-foreground" : "text-foreground/70"
                }`}
              >
                <span>{l.native}</span>
                <span className="text-xs uppercase tracking-wider opacity-60">{l.code}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
