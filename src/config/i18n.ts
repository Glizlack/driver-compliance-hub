// Minimal i18n scaffold — extend strings as needed.
export type Lang = "en" | "es";

export const LANGUAGES: { code: Lang; label: string; native: string }[] = [
  { code: "en", label: "English", native: "English" },
  { code: "es", label: "Spanish", native: "Español" },
];

type Dict = {
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCta: string;
  sectionTitle: string;
  sectionSubtitle: string;
  footer: string;
  back: string;
  aiDisclaimer: string;
  coverageLabel: string;
  coverageValue: string;
  // Clearinghouse modal
  modal: {
    description: string;
    mandatoryLabel: string;
    mandatoryBody: string;
    keyRequirements: string;
    consentLabel: string;
    consentBody: string;
    monitoringLabel: string;
    monitoringBody: string;
    registrationLabel: string;
    registrationBody: string;
    recordkeepingLabel: string;
    recordkeepingBody: string;
    driverRights: string;
    refusalLabel: string;
    refusalBody: string;
    petitionsLabel: string;
    petitionsBody: string;
    importantLabel: string;
    importantBody: string;
    pdfButton: string;
  };
};

export const TRANSLATIONS: Record<Lang, Dict> = {
  en: {
    eyebrow: "2026 - United States",
    heroTitle: "The Federal Driver Qualification Checklist.",
    heroSubtitle:
      "Six federally required documents every commercial driver file must contain before a wheel turns.",
    heroCta: "View the 6-point checklist",
    sectionTitle: "The 6-Point Compliance Check",
    sectionSubtitle:
      "Each item maps to a specific FMCSA regulation. Tap a card to take action.",
    footer: "Informational only. Not legal advice. Verify against current FMCSA regulations.",
    back: "Back",
    aiDisclaimer:
      "Note: These terms have been translated with AI. Please double-check the translation for accuracy.",
    coverageLabel: "Coverage",
    coverageValue: "United States · FMCSA Compliant",
    modal: {
      description: "FMCSA Clearinghouse pre-employment query overview.",
      mandatoryLabel: "Mandatory Pre-Employment Check:",
      mandatoryBody:
        "Before a driver performs safety-sensitive functions, you must conduct a Full Pre-Employment Query. This confirms if the driver has unresolved drug/alcohol violations.",
      keyRequirements: "Key Requirements",
      consentLabel: "Specific Electronic Consent:",
      consentBody:
        "The driver must log into their own account to provide consent; employers cannot do this for them.",
      monitoringLabel: "30-Day Monitoring:",
      monitoringBody:
        "FMCSA will notify you if new record information is added within 30 days of your query.",
      registrationLabel: "Registration:",
      registrationBody: "Both employer and driver must be registered.",
      recordkeepingLabel: "Recordkeeping:",
      recordkeepingBody: "Retain results for 3 years.",
      driverRights: "Driver Rights",
      refusalLabel: "Refusal:",
      refusalBody: "If they refuse consent, you cannot allow them to drive.",
      petitionsLabel: "Petitions:",
      petitionsBody: "Drivers can petition to correct administrative errors.",
      importantLabel: "Important Note:",
      importantBody:
        "As of Jan 6, 2023, this query replaces the manual Safety Performance History for FMCSA drivers (though other DOT modes like FAA still require manual checks).",
      pdfButton: "View Full Query Guide (PDF)",
    },
  },
  es: {
    eyebrow: "2026 - Estados Unidos",
    heroTitle: "Lista Federal de Calificación del Conductor.",
    heroSubtitle:
      "Seis documentos exigidos por la ley federal que debe contener todo expediente de conductor comercial antes de circular.",
    heroCta: "Ver la lista de 6 puntos",
    sectionTitle: "Verificación de Cumplimiento de 6 Puntos",
    sectionSubtitle:
      "Cada punto corresponde a una regulación específica de la FMCSA. Toque una tarjeta para actuar.",
    footer:
      "Solo con fines informativos. No constituye asesoría legal. Verifique con las regulaciones vigentes de la FMCSA.",
    back: "Atrás",
    aiDisclaimer:
      "Nota: estos términos han sido traducidos con inteligencia artificial. Verifique la exactitud de la traducción.",
    coverageLabel: "Cobertura",
    coverageValue: "Estados Unidos · Conforme a la FMCSA",
    modal: {
      description: "Resumen de la consulta previa al empleo del Clearinghouse de la FMCSA.",
      mandatoryLabel: "Verificación Obligatoria Previa al Empleo:",
      mandatoryBody:
        "Antes de que un conductor realice funciones sensibles a la seguridad, debe realizar una Consulta Completa Previa al Empleo. Esto confirma si el conductor tiene infracciones de drogas/alcohol sin resolver.",
      keyRequirements: "Requisitos Clave",
      consentLabel: "Consentimiento Electrónico Específico:",
      consentBody:
        "El conductor debe iniciar sesión en su propia cuenta para dar consentimiento; los empleadores no pueden hacerlo por él.",
      monitoringLabel: "Monitoreo de 30 Días:",
      monitoringBody:
        "La FMCSA le notificará si se agrega nueva información al registro dentro de los 30 días posteriores a su consulta.",
      registrationLabel: "Registro:",
      registrationBody: "Tanto el empleador como el conductor deben estar registrados.",
      recordkeepingLabel: "Conservación de Registros:",
      recordkeepingBody: "Conserve los resultados durante 3 años.",
      driverRights: "Derechos del Conductor",
      refusalLabel: "Negativa:",
      refusalBody: "Si rechaza dar su consentimiento, no puede permitir que conduzca.",
      petitionsLabel: "Peticiones:",
      petitionsBody: "Los conductores pueden solicitar la corrección de errores administrativos.",
      importantLabel: "Nota Importante:",
      importantBody:
        "A partir del 6 de enero de 2023, esta consulta reemplaza el Historial de Desempeño de Seguridad manual para conductores de la FMCSA (aunque otras modalidades del DOT, como la FAA, aún requieren verificaciones manuales).",
      pdfButton: "Ver la Guía Completa de Consulta (PDF)",
    },
  },
};
