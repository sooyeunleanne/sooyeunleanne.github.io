import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faAngular,
  faAws,
  faDocker,
  faGitAlt,
  faGithub,
  faGoogle,
  faHtml5,
  faJava,
  faJira,
  faJs,
  faMicrosoft,
  faNodeJs,
  faPython,
  faReact,
  faRedhat,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBolt,
  faCode,
  faDatabase,
  faDharmachakra,
  faFlask,
  faLayerGroup,
  faLeaf,
  faMobileScreen,
  faPaperPlane,
  faRotate,
  faRoute,
  faSeedling,
  faServer,
  faSnowflake,
  faSun,
  faTerminal,
  faWandMagicSparkles,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

/**
 * Icon lookup for skill chips. FontAwesome Free has no brand mark for several
 * of these technologies (TypeScript, PostgreSQL, Supabase, Next.js, Tailwind,
 * Kubernetes, Postman, Claude, Gemini), so those fall back to a solid icon
 * that reads as the right idea.
 */
export const skillIcons = {
  angular: faAngular,
  aws: faAws,
  bolt: faBolt,
  code: faCode,
  database: faDatabase,
  docker: faDocker,
  flask: faFlask,
  git: faGitAlt,
  github: faGithub,
  google: faGoogle,
  html5: faHtml5,
  java: faJava,
  jira: faJira,
  js: faJs,
  kubernetes: faDharmachakra,
  layers: faLayerGroup,
  leaf: faLeaf,
  microsoft: faMicrosoft,
  mobile: faMobileScreen,
  nodejs: faNodeJs,
  python: faPython,
  react: faReact,
  redhat: faRedhat,
  rotate: faRotate,
  route: faRoute,
  send: faPaperPlane,
  server: faServer,
  sparkles: faWandMagicSparkles,
  terminal: faTerminal,
  vuejs: faVuejs,
  wind: faWind,
} satisfies Record<string, IconDefinition>;

export type SkillIcon = keyof typeof skillIcons;

/** Co-op terms are labelled by the season they start in. */
export const seasonIcons = {
  winter: faSnowflake,
  spring: faSeedling,
  summer: faSun,
  fall: faLeaf,
} satisfies Record<string, IconDefinition>;

export type Season = keyof typeof seasonIcons;
