export type Award = {
  title: string;
  amount: string;
  issuer?: string;
  date: string;
  note?: string;
};

/** Reverse-chronological. */
export const awards: Award[] = [
  {
    title: "President's International Experience Award",
    amount: "$1,500",
    issuer: "University of Waterloo",
    date: "Jul 2026",
  },
  {
    title: "University of Waterloo International Experience Award",
    amount: "$1,000",
    issuer: "University of Waterloo",
    date: "Jul 2026",
  },
  {
    title: "St. Andrew Kim Scholarship 2025",
    amount: "$1,200",
    date: "Sep 2025",
  },
  {
    title: "President's Scholarship of Distinction",
    amount: "$2,000",
    issuer: "University of Waterloo",
    date: "Sep 2023",
  },
  {
    title: "Your First Scholarship 2023",
    amount: "$500 USD",
    issuer: "National Society of High School Scholars",
    date: "Jul 2023",
  },
];
