export type Involvement = {
  /** Display title, including the short form in parentheses where one exists. */
  org: string;
  logo?: { src: string; width: number; height: number };
  /** Current position, shown as a badge in the collapsed header. */
  currentRole?: string;
  /** A single standout item worth surfacing before the panel is opened. */
  headerNote?: string;
  /** Org site; renders a link icon in the header when present. */
  link?: string;
  span: string;
  location?: string;
  summary?: string;
  /**
   * Reverse-chronological by start date; concurrent roles are expected.
   * A lone role is already covered by `currentRole`, so the timeline is skipped.
   */
  roles: { title: string; period: string; duration: string }[];
  highlights?: string[];
};

export const involvements: Involvement[] = [
  {
    org: "Association of Korean-Canadian Scientists & Engineers (AKCSE)",
    logo: { src: "/logo/akcse.jpg", width: 158, height: 158 },
    currentRole: "Chapter President",
    link: "https://www.akcse.ca/",
    headerNote:
      "Represented the Waterloo chapter at the Canada-Korea Conference in Whistler, June 2026.",
    span: "Sep 2023 – Present · 3 yrs",
    location: "Waterloo, ON",
    roles: [
      { title: "Chapter President", period: "Apr 2026 – Present", duration: "5 mos" },
      { title: "Chapter Vice President", period: "Sep 2025 – Apr 2026", duration: "8 mos" },
      { title: "Web Development Lead", period: "May 2025 – Aug 2025", duration: "4 mos" },
      { title: "Events Lead", period: "Jan 2025 – Aug 2025", duration: "8 mos" },
      { title: "Event Coordinator", period: "Sep 2024 – Dec 2024", duration: "4 mos" },
      { title: "Marketing Specialist", period: "Sep 2023 – Aug 2024", duration: "1 yr" },
    ]
  },
  {
    org: "St. Paul Chung Parish",
    logo: { src: "/logo/stpaulchungparish.png", width: 158, height: 156 },
    currentRole: "Website Developer / Manager",
    link: "https://www.stpaulchung.ca/",
    headerNote:
      "Grew monthly site visits from roughly 600–700 to about 2,500 in the first two months after relaunch.",
    span: "Aug 2024 – Present · 2 yrs",
    summary:
      "Rebuilt and now maintain the parish website.",
    roles: [
      { title: "Website Developer / Manager", period: "Aug 2024 – Present", duration: "2 yrs" },
    ],
  },
];
