// Minimal i18n scaffold — extend strings as needed.
export type Lang = "en" | "es" | "pa";

export const LANGUAGES: { code: Lang; label: string; native: string }[] = [
  { code: "en", label: "English", native: "English" },
  { code: "es", label: "Spanish", native: "Español" },
  { code: "pa", label: "Punjabi", native: "ਪੰਜਾਬੀ" },
];

type Dict = {
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCta: string;
  sectionTitle: string;
  sectionSubtitle: string;
  footer: string;
};

export const TRANSLATIONS: Record<Lang, Dict> = {
  en: {
    eyebrow: "2026 · Lower 48 United States",
    heroTitle: "The Federal Driver Qualification Checklist.",
    heroSubtitle:
      "Six federally required documents every commercial driver file must contain before a wheel turns.",
    heroCta: "View the 6-point checklist",
    sectionTitle: "The 6-Point Compliance Check",
    sectionSubtitle:
      "Each item maps to a specific FMCSA regulation. Tap a card to take action.",
    footer: "Informational only. Not legal advice. Verify against current FMCSA regulations.",
  },
  es: {
    eyebrow: "2026 · 48 estados contiguos",
    heroTitle: "Lista federal de calificación del conductor.",
    heroSubtitle:
      "Seis documentos federales obligatorios en cada expediente de conductor comercial.",
    heroCta: "Ver la lista de 6 puntos",
    sectionTitle: "Verificación de cumplimiento de 6 puntos",
    sectionSubtitle: "Cada elemento corresponde a una regulación específica de la FMCSA.",
    footer: "Solo informativo. No es asesoría legal. Verifique con las regulaciones vigentes de la FMCSA.",
  },
  pa: {
    eyebrow: "2026 · ਹੇਠਲੇ 48 ਰਾਜ",
    heroTitle: "ਫੈਡਰਲ ਡਰਾਈਵਰ ਯੋਗਤਾ ਚੈੱਕਲਿਸਟ।",
    heroSubtitle:
      "ਹਰ ਵਪਾਰਕ ਡਰਾਈਵਰ ਫਾਈਲ ਵਿੱਚ ਛੇ ਫੈਡਰਲ ਤੌਰ 'ਤੇ ਲੋੜੀਂਦੇ ਦਸਤਾਵੇਜ਼।",
    heroCta: "6-ਪੁਆਇੰਟ ਚੈੱਕਲਿਸਟ ਵੇਖੋ",
    sectionTitle: "6-ਪੁਆਇੰਟ ਅਨੁਪਾਲਨ ਜਾਂਚ",
    sectionSubtitle: "ਹਰ ਆਈਟਮ FMCSA ਦੇ ਖਾਸ ਨਿਯਮ ਨਾਲ ਮੇਲ ਖਾਂਦੀ ਹੈ।",
    footer: "ਸਿਰਫ਼ ਜਾਣਕਾਰੀ ਲਈ। ਕਾਨੂੰਨੀ ਸਲਾਹ ਨਹੀਂ।",
  },
};
