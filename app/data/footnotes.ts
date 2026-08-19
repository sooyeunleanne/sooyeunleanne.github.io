export type Footnote = {
  id: number;
  label: string;
  /** Prose note; **bold** is rendered. */
  body?: string;
  /** Renders as a bullet list instead of prose. */
  items?: string[];
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
    body: "Cross-disciplinary engineering — electrical, mechanical, and software — with design methods and systems modelling. My specialization is **Software Engineering**.",
  },
  {
    id: 2,
    label: "Favourite books",
    items: [
      "Meditations — Marcus Aurelius",
      "Faust — Johann Wolfgang von Goethe",
      "The Secret — Rhonda Byrne",
      "Siddhartha — Hermann Hesse",
    ],
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
