import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Lang } from "@/config/i18n";

type Ctx = { lang: Lang; setLang: (l: Lang) => void };
const LangContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "dq.lang";

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    return stored === "es" || stored === "pa" || stored === "en" ? stored : "en";
  });

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    console.log("[LangContext] setLang ->", l);
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* no-op */
    }
  };

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
};

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
};

/** Pick a localized string. Falls back to English when the requested locale is missing. */
export const tr = (lang: Lang, en: string, es?: string, pa?: string): string => {
  if (lang === "es" && es) return es;
  if (lang === "pa" && pa) return pa;
  return en;
};
