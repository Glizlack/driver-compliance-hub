// =============================================================
// Centralized Checklist Configuration
// Update titles, descriptions, link URLs, and drawer content here.
// =============================================================

export type ChecklistDetails = {
  regulatoryReference?: string;
  summary?: string;
  keyRequirements?: string[];
  resourceLabel?: string;
  resourceUrl?: string;
};

export type ChecklistItem = {
  id: string;
  number: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  details?: ChecklistDetails;
};

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: "employment-application",
    number: "01",
    title: "Driver's Employment Application",
    description:
      "A signed foundation for the DQF. Requires 10 years of CMV history and 3 years of general employment history.",
    cta: "Download Application",
    href: "/DOT_Employment_Application.docx",
    details: {
      regulatoryReference: "49 CFR §391.21",
      summary:
        "A signed foundation for the Driver Qualification File (DQF). Requires 10 years of commercial motor vehicle history and 3 years of general employment history.",
      keyRequirements: [
        "Full 10-year employment history for any work involving commercial motor vehicles (CMVs).",
        "Full 3-year history for all other employment.",
        "List of all vehicle accidents and traffic violations for the past 3 years.",
        "Full address history for the past 3 years.",
        "Detailed explanation of any gaps in employment exceeding 30 days.",
        "Specific statement on whether the driver has ever been denied or lost a license.",
      ],
      resourceLabel: "Official FMCSA Safety Planner",
      resourceUrl:
        "https://csa.fmcsa.dot.gov/SafetyPlanner/MyFiles/Sections.aspx?ch=23&sec=66",
    },
  },
  {
    id: "initial-mvr",
    number: "02",
    title: "Initial MVR",
    description:
      "Motor Vehicle Record pulled from every state of residence in the last 3 years before the driver is placed in service.",
    cta: "Order MVR",
    href: "#",
  },
  {
    id: "road-test",
    number: "03",
    title: "Road Test Certificate",
    description:
      "Documented road test and certificate on file. A valid CDL copy is acceptable in lieu of a road test.",
    cta: "Download Form",
    href: "/Driver_Road_Test_Certificate.pdf",
  },
  {
    id: "medical-certificate",
    number: "04",
    title: "Medical Examiner's Certificate",
    description:
      "Current MEC issued by an examiner listed on the FMCSA National Registry — verify National Registry status.",
    cta: "Learn More",
    href: "https://nationalregistry.fmcsa.dot.gov",
  },
  {
    id: "safety-performance",
    number: "05",
    title: "Safety Performance History",
    description:
      "Written inquiries to all DOT-regulated employers from the previous 3 years per 49 CFR §391.23.",
    cta: "Send Inquiry",
    href: "#",
  },
  {
    id: "clearinghouse",
    number: "06",
    title: "Drug & Alcohol Clearinghouse Query",
    description:
      "Full pre-employment query of the FMCSA Clearinghouse is mandatory before the driver performs safety-sensitive functions.",
    cta: "Run Query",
    href: "#",
  },
];

export const SITE = {
  metaTitle: "Federal Driver Qualification Checklist | 2026 DOT Compliance Guide",
  metaDescription:
    "The 2026 6-point DOT Driver Qualification File checklist for commercial drivers and fleets across the United States — MVR, Clearinghouse, Medical Card, Safety History and more.",
};
