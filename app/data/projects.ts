export type Project = {
  slug: string;
  title: string;
  /** Competition placement, shown on the card and in the modal. */
  award?: string;
  stack: string[];
  /** The one-liner shown on the card and above the modal's collapsible. */
  blurb: string;
  /** Live site or submission page; renders a link icon when present. */
  link?: string;
  /** Omit until a preview exists; the card falls back to a lettered tile. */
  image?: string;
  /** Autoplaying muted demo; replaces `image`, which becomes its poster frame. */
  video?: string;
  /** Both render inside the modal's "What I did" collapsible. */
  highlights?: string[];
  detail?: string;
  /** Featured projects show immediately; the rest sit behind "View more". */
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "watguessr",
    title: "Watguessr.io",
    stack: ["Vue", "Spring Boot", "PostgreSQL", "Node.js"],
    blurb: "A 750+ user game inspired by GeoGuessr, built for Waterloo students.",
    link: "https://watguessr.io/",
    image: "/project-previews/watguessrio.png",
    video: "/demo/watguessrio-demo.mp4",
    highlights: [
      "Built gameflows for singleplayer, multiplayer, and ranked modes, leveraging WebSockets for real-time connections and player state synchronization.",
      "Implemented JWT authentication and secure HTTP cookies, strengthening user security protocols.",
      "Developed the frontend with Mapbox API integrations, enhancing interactive map-based gameplay.",
      "Optimized building detection using OSM API with IndexedDB caching, reducing round load time from 3s to ~1s (67% faster).",
      "Automated image upload pipeline with Python and AWS S3, cutting deployment preparation from 3+ hours to 20 minutes.",
    ],
    featured: true,
  },
  {
    slug: "bibbidi-bobbidi-boo",
    title: "bibbidi-bobbidi-boo!",
    stack: ["Next.js", "TypeScript", "Gemini APIs", "MongoDB Atlas", "Auth0", "ElevenLabs"],
    blurb: "An AI stylist that reads your closet and picks your outfit, shipped in 24 hours.",
    link: "https://devpost.com/software/bibbity-bibbity-boo",
    video: "/demo/bibbidi-bobbidi-boo-demo.mp4",
    highlights: [
      "Shipped an end-to-end AI platform in 24 hours, architecting a multimodal pipeline with Gemini API and ElevenLabs to power vision, virtual try-on, voice interaction, and grounded recommendations.",
      "Engineered wardrobe intelligence algorithms to rank outfits by color, texture, style, and fit while quantifying utilization through a 0–100 Closet Health score.",
    ],
    featured: true,
  },
  {
    slug: "akcse-uw",
    title: "AKCSE UW Official Website",
    stack: ["React", "Express", "MongoDB", "Node.js"],
    blurb: "The official AKCSE UW site, with a full admin portal for the exec team.",
    link: "https://akcseuw.ca/",
    image: "/project-previews/akcseuw.png",
    video: "/demo/akcseuw-demo.mp4",
    highlights: [
      "Led full-stack development of the Admin Portal, enabling management of team information, member settings, and event/news hashtags.",
      "Built and launched three core public pages — landing, team, and contacts — improving accessibility and community engagement.",
      "Implemented a CI/CD pipeline and deployed the applications on Netlify and Render, ensuring fast and reliable updates.",
    ],
    featured: true,
  },
  {
    slug: "appmatch-maker",
    title: "AppMatch Maker",
    award: "Eureka Moment Award at OPS Phenomenal Hackathon with Microsoft",
    stack: ["MS Forms", "Power BI", "Power Automate", "Dataverse"],
    blurb: "A prototype that surfaces reusable applications across the Ontario Public Service.",
    // TODO: add public/project-previews/opshackathon.jpg
    detail:
      "For this project, I created a software prototype that analyzes the Ontario Public Service technology environment to uncover opportunities for application reuse. By leveraging MS Forms, Power BI, Power Automate, and Dataverse, the prototype can quickly identify redundant solutions, streamline decision-making, and reduce time, resources, and finances spent on building new IT solutions by an estimated 30%. Additionally, I prepared and delivered a comprehensive pitch detailing the problem statement, business impact, target users, proposed solution, technology stack, and a roadmap for future development.",
    featured: false,
  },
  {
    slug: "readbetter",
    title: "ReadBetter",
    award: "Runner-up for Best University Hacks at JamHacks 7",
    stack: ["Python", "Flask"],
    blurb: "A reading aid that adds artificial fixation points, cutting reading time by 35%.",
    image: "/project-previews/readbetter.png",
    detail:
      "This project is a Flask application designed to assist users in reading by providing artificial fixation points. I integrated AssemblyAI for audio processing, PyPDF2 for PDF handling, and EasyOCR for text recognition, enabling the app to process and guide reading materials efficiently. During a reading efficiency experiment, users experienced an average 35% decrease in total reading time, demonstrating the practical impact of combining AI and OCR technologies to enhance reading performance.",
    featured: false,
  },
  {
    slug: "foodieco",
    title: "Foodieco",
    award: "Best Software Project at Highlander Engineering Challenge",
    stack: ["Python", "Tkinter"],
    blurb: "A fridge tracker that suggests ingredient swaps — my first team-built project.",
    image: "/project-previews/foodieco.png",
    detail:
      "Foodieco was my first official competitive software project, built for the Highlander Engineering Challenge in a team of four. We developed an application that helps users manage their fridge by tracking items and suggesting ingredient replacements. It was not only a chance to explore both front-end and back-end development with Python and Tkinter, but also my first real experience programming collaboratively with friends. This project showed me how fun it is to code as a team, and gave me a lasting sense of accomplishment from seeing an idea through to a finished product.",
    featured: false,
  },
];
