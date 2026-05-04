// =============================================================
// Centralized Checklist Configuration
// Update titles, descriptions, link URLs, and drawer content here.
// =============================================================

import type { Lang } from "./i18n";

export type Localized = { en: string; es?: string };

export type ChecklistDetails = {
  regulatoryReference?: string;
  summary?: Localized;
  keyRequirements?: Localized[];
  resourceLabel?: Localized;
  resourceUrl?: string;
};

export type ChecklistItem = {
  id: string;
  number: string;
  title: Localized;
  description: Localized;
  cta: Localized;
  href: string;
  details?: ChecklistDetails;
  modalId?: "clearinghouse";
};

export const pick = (lang: Lang, v?: Localized): string => {
  if (!v) return "";
  if (lang === "es" && v.es) return v.es;
  return v.en;
};

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: "employment-application",
    number: "01",
    title: {
      en: "Driver's Employment Application",
      es: "Solicitud de Empleo del Conductor",
    },
    description: {
      en: "A signed foundation for the DQF. Requires 10 years of CMV history and 3 years of general employment history.",
      es: "Base firmada del Archivo de Calificación del Conductor (DQF). Requiere 10 años de historial en vehículos comerciales (CMV) y 3 años de historial laboral general.",
    },
    cta: { en: "Learn More", es: "Más información" },
    href: "/checklist/employment-application",
  },
  {
    id: "initial-mvr",
    number: "02",
    title: { en: "Initial MVR", es: "Registro Inicial de Vehículos Motorizados (MVR)" },
    description: {
      en: "Motor Vehicle Record pulled from every state of residence in the last 3 years before the driver is placed in service.",
      es: "Registro del Departamento de Vehículos Motorizados solicitado en cada estado de residencia durante los últimos 3 años, antes de que el conductor entre en servicio.",
    },
    cta: { en: "Learn More", es: "Más información" },
    href: "/checklist/initial-mvr",
  },
  {
    id: "road-test",
    number: "03",
    title: { en: "Road Test Certificate", es: "Certificado de Examen de Manejo" },
    description: {
      en: "Documented road test and certificate on file. A valid CDL copy is acceptable in lieu of a road test.",
      es: "Examen de manejo documentado con certificado en el expediente. Una copia válida de la CDL es aceptable en lugar del examen.",
    },
    cta: { en: "Learn More", es: "Más información" },
    href: "/checklist/road-test",
  },
  {
    id: "medical-certificate",
    number: "04",
    title: {
      en: "Medical Examiner's Certificate",
      es: "Certificado del Examinador Médico",
    },
    description: {
      en: "Mandatory verification of physical fitness by an FMCSA-certified professional. CDL data is now transmitted electronically as of June 2025.",
      es: "Verificación obligatoria de la aptitud física por un profesional certificado por la FMCSA. Desde junio de 2025, los datos de la CDL se transmiten electrónicamente.",
    },
    cta: { en: "Learn More", es: "Más información" },
    href: "/checklist/medical-certificate",
  },
  {
    id: "safety-performance",
    number: "05",
    title: {
      en: "Safety Performance History",
      es: "Historial de Desempeño de Seguridad",
    },
    description: {
      en: "Mandatory 3-year investigation of driver safety and drug/alcohol history from all previous DOT-regulated employers. Must be completed within 30 days of hire.",
      es: "Investigación obligatoria de 3 años sobre el historial de seguridad y de drogas/alcohol del conductor con todos los empleadores anteriores regulados por el DOT. Debe completarse dentro de los 30 días posteriores a la contratación.",
    },
    cta: { en: "Learn More", es: "Más información" },
    href: "/checklist/safety-performance-history",
  },
  {
    id: "clearinghouse",
    number: "06",
    title: {
      en: "Drug & Alcohol Clearinghouse Query",
      es: "Consulta al Clearinghouse de Drogas y Alcohol",
    },
    description: {
      en: "Full pre-employment query of the FMCSA Clearinghouse is mandatory before the driver performs safety-sensitive functions.",
      es: "Es obligatorio realizar una consulta completa previa al empleo en el Clearinghouse de la FMCSA antes de que el conductor realice funciones sensibles a la seguridad.",
    },
    cta: { en: "Learn More", es: "Más información" },
    href: "#",
    modalId: "clearinghouse",
  },
];

export const SITE = {
  metaTitle: "Federal Driver Qualification Checklist | 2026 DOT Compliance Guide",
  metaDescription:
    "The 2026 6-point DOT Driver Qualification File checklist for commercial drivers and fleets across the United States — MVR, Clearinghouse, Medical Card, Safety History and more.",
};
