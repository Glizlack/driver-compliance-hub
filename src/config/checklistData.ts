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
    cta: "Learn More",
    href: "/checklist/employment-application",
  },
  {
    id: "initial-mvr",
    number: "02",
    title: "Initial MVR",
    description:
      "Motor Vehicle Record pulled from every state of residence in the last 3 years before the driver is placed in service.",
    cta: "Learn More",
    href: "/checklist/initial-mvr",
  },
  {
    id: "road-test",
    number: "03",
    title: "Road Test Certificate",
    description:
      "Documented road test and certificate on file. A valid CDL copy is acceptable in lieu of a road test.",
    cta: "Learn More",
    href: "/checklist/road-test",
  },
  {
    id: "medical-certificate",
    number: "04",
    title: "Medical Examiner's Certificate",
    description:
      "Mandatory verification of physical fitness by an FMCSA-certified professional. CDL data is now transmitted electronically as of June 2025.",
    cta: "Learn More",
    href: "/checklist/medical-certificate",
  },
  {
    id: "safety-performance",
    number: "05",
    title: "Safety Performance History",
    description:
      "Mandatory 3-year investigation of driver safety and drug/alcohol history from all previous DOT-regulated employers. Must be completed within 30 days of hire.",
    cta: "Learn More",
    href: "/checklist/safety-performance-history",
    details: {
      regulatoryReference: "49 CFR §391.23",
      summary:
        "Safety Performance Investigation Requirements — written inquiries to all DOT-regulated employers from the previous 3 years. The Prospective Employee completes Part 1 (release/authorization); the Previous Employer completes Parts 2 & 3 (employment verification and safety/drug & alcohol history).",
      keyRequirements: [
        "Minimum Required Information — Employment Verification: general identification and exact dates of employment.",
        "Minimum Required Information — Accident History: any 'recordable' accidents (§390.5) including dates, locations, and details on injuries or fatalities.",
        "Minimum Required Information — Drug & Alcohol History: violations of prohibitions under 49 CFR Part 382 or Part 40. The Clearinghouse is primary, but manual inquiries are still required for some positions.",
        "Documentation — Good Faith Efforts: document every contact attempt (fax, call logs, certified mail) if an employer fails to respond.",
        "Retention: keep records in the Driver Investigation History (DIH) file for the duration of employment plus 3 years.",
        "Driver Rights — Right to Review: drivers may submit a written request to review information provided by previous employers.",
        "Driver Rights — Correction/Rebuttal: drivers may request corrections or submit a written rebuttal to the record.",
      ],
      resourceLabel: "Official FMCSA Safety Planner — §391.23",
      resourceUrl:
        "https://csa.fmcsa.dot.gov/safetyplanner/myfiles/sections.aspx?ch=23&sec=68",
    },
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
