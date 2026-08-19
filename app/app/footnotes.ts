export type Footnote = {
  id: number;
  label: string;
  /** Plain prose note. */
  body?: string;
  /** Renders as a flag-prefixed list instead of prose. */
  places?: { flag: string; country: string; cities?: string }[];
  /** Trailing line after `places`. */
  outro?: string;
};

/** Numbered in order of appearance on the page. */
export const footnotes: Footnote[] = [
  {
    id: 1,
    label: "Systems Design Engineering",
    body: "A cross-disciplinary program covering the fundamentals of electrical, mechanical, and software engineering alongside design methods and systems modelling, with four specializations to focus in.",
  },
  {
    id: 2,
    label: "Favourite books",
    body: "Meditations, Faust, The Secret by Rhonda Byrne, and Siddhartha.",
  },
  {
    id: 3,
    label: "Been to",
    places: [
      { flag: "🇰🇷", country: "Korea", cities: "Seoul, Jeju, Busan, Yeosu" },
      { flag: "🇭🇰", country: "Hong Kong" },
      { flag: "🇸🇬", country: "Singapore" },
      { flag: "🇺🇸", country: "U.S.", cities: "New York, Boston, Seattle" },
      { flag: "🇨🇦", country: "Canada", cities: "Banff, Vancouver, Whistler, Toronto, Montreal" },
      { flag: "🇯🇵", country: "Japan", cities: "Tokyo, Osaka" },
      { flag: "🇮🇩", country: "Indonesia", cities: "Bali" },
      { flag: "🇹🇭", country: "Thailand", cities: "Phuket" },
    ],
    outro: "Upcoming trips around Europe during my exchange in Denmark 🇩🇰.",
  },
];
