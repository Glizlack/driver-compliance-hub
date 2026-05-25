import { createContext, useContext, useEffect, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { Lang } from "@/config/i18n";

type Ctx = { lang: Lang; setLang: (l: Lang) => void };
const LangContext = createContext<Ctx | null>(null);

export const localizePath = (path: string, lang: Lang): string => {
  const [pathname, hash = ""] = path.split("#");
  const englishPath = pathname === "/es" ? "/" : pathname.replace(/^\/es(?=\/|$)/, "") || "/";
  const localizedPath = lang === "es" ? (englishPath === "/" ? "/es/" : `/es${englishPath}`) : englishPath;
  return hash ? `${localizedPath}#${hash}` : localizedPath;
};

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const lang: Lang = /^\/es(?:\/|$)/.test(location.pathname) ? "es" : "en";

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    navigate(`${localizePath(location.pathname, l)}${location.search}${location.hash}`);
  };

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
};

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
};

/** Pick a localized string. Falls back to English when the requested locale is missing. */
export const tr = (lang: Lang, en: string, es?: string): string => {
  if (lang === "es" && es) return es;
  return en;
};
