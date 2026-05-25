// Minimal i18n scaffold - extend strings as needed.
export type Lang = "en" | "es";

export const LANGUAGES: { code: Lang; label: string; native: string }[] = [
  { code: "en", label: "English", native: "English" },
  { code: "es", label: "Spanish", native: "Espanol" },
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
    eyebrow: "2026 Federal Compliance Guidance",
    heroTitle: "Stay audit-ready. Keep every driver qualified.",
    heroSubtitle:
      "Clear federal guidance for owner-operators and small fleets, with official FMCSA sources and practical checklists.",
    heroCta: "Build My Checklist",
    sectionTitle: "Compliance guidance built for the workday",
    sectionSubtitle:
      "Start with hiring requirements, then keep annual reviews and regulatory updates within reach.",
    footer: "Informational only. Not legal advice. Verify against current FMCSA regulations.",
    back: "Back",
    aiDisclaimer:
      "Note: These terms have been translated with AI. Please double-check the translation for accuracy.",
    coverageLabel: "Coverage",
    coverageValue: "United States - Based on Official FMCSA Resources",
    modal: {
      description: "FMCSA Clearinghouse pre-employment and annual query overview.",
      mandatoryLabel: "Mandatory Pre-Employment Check:",
      mandatoryBody:
        "Before a CDL/CLP driver performs safety-sensitive functions, you must conduct a Full Pre-Employment Query. This confirms whether the driver has unresolved drug/alcohol violations.",
      keyRequirements: "Key Requirements",
      consentLabel: "Specific Electronic Consent:",
      consentBody:
        "For a full query, the driver must provide electronic consent in the Clearinghouse; employers cannot do this for them.",
      monitoringLabel: "Annual Queries:",
      monitoringBody:
        "Employers of CDL drivers must conduct a query at least once every 12 months during employment.",
      registrationLabel: "Registration:",
      registrationBody: "Employers and drivers must be registered when required for a full query.",
      recordkeepingLabel: "Recordkeeping:",
      recordkeepingBody:
        "The Clearinghouse stores query history; employers must retain records of limited consent for 3 years.",
      driverRights: "Driver Rights",
      refusalLabel: "Refusal:",
      refusalBody: "If a driver refuses required consent, you cannot allow safety-sensitive work.",
      petitionsLabel: "Petitions:",
      petitionsBody: "Drivers can petition to correct administrative errors.",
      importantLabel: "Official Source:",
      importantBody:
        "Confirm query types, consent rules, and any changes directly through FMCSA Clearinghouse guidance.",
      pdfButton: "Open Official Clearinghouse Guidance",
    },
  },
  es: {
    eyebrow: "Guia Federal de Cumplimiento 2026",
    heroTitle: "Mantengase listo para auditorias. Mantenga calificado a cada conductor.",
    heroSubtitle:
      "Orientacion federal clara para operadores propietarios y flotillas, con fuentes oficiales de la FMCSA y listas practicas.",
    heroCta: "Crear Mi Lista",
    sectionTitle: "Orientacion de cumplimiento para el trabajo diario",
    sectionSubtitle:
      "Comience con requisitos de contratacion y mantenga a mano las revisiones anuales y actualizaciones regulatorias.",
    footer:
      "Solo con fines informativos. No constituye asesoria legal. Verifique con las regulaciones vigentes de la FMCSA.",
    back: "Atras",
    aiDisclaimer:
      "Nota: estos terminos han sido traducidos con inteligencia artificial. Verifique la exactitud de la traduccion.",
    coverageLabel: "Cobertura",
    coverageValue: "Estados Unidos - Basado en Recursos Oficiales FMCSA",
    modal: {
      description: "Resumen de las consultas previas al empleo y anuales del Clearinghouse de la FMCSA.",
      mandatoryLabel: "Verificacion Obligatoria Previa al Empleo:",
      mandatoryBody:
        "Antes de que un conductor con CDL/CLP realice funciones sensibles a la seguridad, debe realizar una Consulta Completa Previa al Empleo para confirmar si existen infracciones sin resolver.",
      keyRequirements: "Requisitos Clave",
      consentLabel: "Consentimiento Electronico Especifico:",
      consentBody:
        "Para una consulta completa, el conductor debe proporcionar consentimiento electronico en el Clearinghouse; el empleador no puede hacerlo por el conductor.",
      monitoringLabel: "Consultas Anuales:",
      monitoringBody:
        "Los empleadores de conductores con CDL deben realizar una consulta al menos una vez cada 12 meses durante el empleo.",
      registrationLabel: "Registro:",
      registrationBody: "Los empleadores y conductores deben estar registrados cuando se requiera para una consulta completa.",
      recordkeepingLabel: "Conservacion de Registros:",
      recordkeepingBody:
        "El Clearinghouse conserva el historial de consultas; los empleadores deben conservar durante 3 anos los registros de consentimiento limitado.",
      driverRights: "Derechos del Conductor",
      refusalLabel: "Negativa:",
      refusalBody: "Si el conductor rechaza el consentimiento requerido, no se le puede permitir trabajo sensible a la seguridad.",
      petitionsLabel: "Peticiones:",
      petitionsBody: "Los conductores pueden solicitar correcciones de errores administrativos.",
      importantLabel: "Fuente Oficial:",
      importantBody:
        "Confirme los tipos de consulta, reglas de consentimiento y cualquier cambio directamente en la orientacion del Clearinghouse de la FMCSA.",
      pdfButton: "Abrir Orientacion Oficial del Clearinghouse",
    },
  },
};
