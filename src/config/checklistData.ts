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

export type ChecklistSection = {
  id: "new-hire" | "annual" | "updates";
  label: Localized;
  description: Localized;
  itemIds: string[];
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
      es: "Base firmada del Archivo de Calificacion del Conductor (DQF). Requiere 10 anos de historial en vehiculos comerciales (CMV) y 3 anos de historial laboral general.",
    },
    cta: { en: "Learn More", es: "Mas informacion" },
    href: "/checklist/employment-application",
  },
  {
    id: "initial-mvr",
    number: "02",
    title: { en: "Initial MVR", es: "Registro Inicial de Vehiculos Motorizados (MVR)" },
    description: {
      en: "Motor Vehicle Record requested from each licensing state for the prior 3 years and retained in the qualification file under the required timeline.",
      es: "Registro de vehiculos motorizados solicitado a cada estado de licencia por los 3 anos anteriores y conservado en el expediente dentro del plazo requerido.",
    },
    cta: { en: "Learn More", es: "Mas informacion" },
    href: "/checklist/initial-mvr",
  },
  {
    id: "road-test",
    number: "03",
    title: { en: "Road Test Certificate", es: "Certificado de Examen de Manejo" },
    description: {
      en: "Documented road test and certificate on file. A valid CDL copy is acceptable in lieu of a road test.",
      es: "Examen de manejo documentado con certificado en el expediente. Una copia valida de la CDL es aceptable en lugar del examen.",
    },
    cta: { en: "Learn More", es: "Mas informacion" },
    href: "/checklist/road-test",
  },
  {
    id: "medical-certificate",
    number: "04",
    title: {
      en: "Medical Examiner's Certificate",
      es: "Certificado del Examinador Medico",
    },
    description: {
      en: "Mandatory verification of physical fitness by an FMCSA-certified professional. CDL data is electronically transmitted during the NRII transition; see the current exemption update.",
      es: "Verificacion obligatoria de aptitud fisica por un profesional certificado por la FMCSA. Los datos CDL se transmiten electronicamente durante la transicion NRII; consulte la actualizacion vigente.",
    },
    cta: { en: "Learn More", es: "Mas informacion" },
    href: "/checklist/medical-certificate",
  },
  {
    id: "safety-performance",
    number: "05",
    title: {
      en: "Safety Performance History",
      es: "Historial de Desempeno de Seguridad",
    },
    description: {
      en: "Required 3-year investigation of safety performance information from previous DOT-regulated employers, completed within 30 days of employment beginning.",
      es: "Investigacion requerida de 3 anos sobre informacion de seguridad de empleadores anteriores regulados por DOT, completada dentro de 30 dias del inicio del empleo.",
    },
    cta: { en: "Learn More", es: "Mas informacion" },
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
      en: "For CDL/CLP drivers, a full pre-employment FMCSA Clearinghouse query is required before safety-sensitive functions.",
      es: "Para conductores con CDL/CLP, se requiere una consulta completa previa al empleo en el Clearinghouse de la FMCSA antes de funciones sensibles a la seguridad.",
    },
    cta: { en: "Learn More", es: "Mas informacion" },
    href: "#",
    modalId: "clearinghouse",
  },
  {
    id: "annual-mvr",
    number: "A1",
    title: { en: "Annual MVR Review", es: "Revision Anual del MVR" },
    description: {
      en: "At least once every 12 months, obtain and review the driver's current motor vehicle record and retain a dated review note.",
      es: "Al menos una vez cada 12 meses, obtenga y revise el registro actual del conductor y conserve una nota fechada de la revision.",
    },
    cta: { en: "Official Guidance", es: "Guia Oficial" },
    href: "https://www.fmcsa.dot.gov/registration/commercial-drivers-license/what-extent-must-motor-carrier-review-drivers-overall-0",
  },
  {
    id: "annual-clearinghouse",
    number: "A2",
    title: { en: "Annual Clearinghouse Query", es: "Consulta Anual al Clearinghouse" },
    description: {
      en: "Employers of CDL drivers must conduct a Clearinghouse query at least annually, with the required driver consent.",
      es: "Los empleadores de conductores con CDL deben realizar una consulta al Clearinghouse al menos anualmente, con el consentimiento requerido.",
    },
    cta: { en: "Official Guidance", es: "Guia Oficial" },
    href: "https://clearinghouse.fmcsa.dot.gov/FAQ/Topics/Employers%2Cqueries-and-consent-requests",
  },
  {
    id: "medical-transition",
    number: "U1",
    title: { en: "Medical Certificate Transition", es: "Transicion del Certificado Medico" },
    description: {
      en: "FMCSA's temporary exemption allows certain interstate CDL/CLP drivers and carriers to rely on a paper MEC for up to 60 days after issuance through October 11, 2026.",
      es: "La exencion temporal de la FMCSA permite a ciertos conductores interestatales con CDL/CLP y transportistas usar un MEC en papel hasta 60 dias despues de su emision, hasta el 11 de octubre de 2026.",
    },
    cta: { en: "Read FMCSA Notice", es: "Leer Aviso FMCSA" },
    href: "https://www.fmcsa.dot.gov/newsroom/fmcsa-issues-temporary-exemption-support-nrii-transition",
  },
];

export const SITE = {
  metaTitle: "Driver Compliance Hub | Practical FMCSA Guidance for Small Fleets",
  metaDescription:
    "Free, practical FMCSA guidance for owner-operators and small fleets, including new-hire files, annual reviews, medical updates, and printable checklists.",
};

export const CHECKLIST_SECTIONS: ChecklistSection[] = [
  {
    id: "new-hire",
    label: { en: "New Hire", es: "Nueva Contratacion" },
    description: {
      en: "Initial hiring checks and follow-up inquiries used to assemble a driver qualification file.",
      es: "Verificaciones iniciales y consultas de seguimiento para reunir un expediente de calificacion del conductor.",
    },
    itemIds: [
      "employment-application",
      "initial-mvr",
      "road-test",
      "medical-certificate",
      "safety-performance",
      "clearinghouse",
    ],
  },
  {
    id: "annual",
    label: { en: "Annual Review", es: "Revision Anual" },
    description: {
      en: "Recurring checks that help keep an active driver's compliance record current.",
      es: "Verificaciones recurrentes para mantener actualizado el expediente de un conductor activo.",
    },
    itemIds: ["annual-mvr", "annual-clearinghouse"],
  },
  {
    id: "updates",
    label: { en: "Medical & Clearinghouse Updates", es: "Actualizaciones Medicas y Clearinghouse" },
    description: {
      en: "Current FMCSA updates and official resources to confirm changing requirements.",
      es: "Actualizaciones actuales de la FMCSA y recursos oficiales para confirmar requisitos cambiantes.",
    },
    itemIds: ["medical-transition", "medical-certificate", "clearinghouse"],
  },
];
