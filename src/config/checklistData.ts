// =============================================================
// Centralized Checklist Configuration
// Update titles, descriptions, and link URLs in this single file.
// All cards on the page render from this object.
// =============================================================

export type ChecklistItem = {
  id: string;
  number: string;
  title: string;
  description: string;
  cta: string;
  href: string;
};

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: "employment-application",
    number: "01",
    title: "Driver's Employment Application",
    description:
      "Full 10-year employment history and 3-year residency disclosure, signed and dated per 49 CFR §391.21.",
    cta: "Open Application",
    // TODO: replace with your hosted application form
    href: "#",
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
    href: "#",
  },
  {
    id: "medical-certificate",
    number: "04",
    title: "Medical Examiner's Certificate",
    description:
      "Current MEC issued by an examiner listed on the FMCSA National Registry — verify National Registry status.",
    cta: "Verify Examiner",
    href: "#",
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
    "The 2026 6-point DOT Driver Qualification File checklist for commercial drivers and fleets across the lower 48 — MVR, Clearinghouse, Medical Card, Safety History and more.",
};
