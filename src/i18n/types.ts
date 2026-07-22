export type Locale = 'en' | 'ru' | 'es';
export type Impact = readonly [value: string, label: string];

export interface LocaleLink {
  code: Locale;
  label: string;
  href: string;
  ariaLabel: string;
}

export interface NavigationItem {
  number: string;
  label: string;
  href: string;
}

export interface SocialLink {
  network: 'telegram' | 'linkedin' | 'github';
  href: string;
  ariaLabel: string;
}

export interface SidebarContent {
  ariaLabel: string;
  backToTopLabel: string;
  downloadLabel: string;
  availability: string;
  name: readonly [string, string];
  role: readonly [string, string];
  locationLabel: string;
  location: string;
  timeLabel: string;
  time: string;
  coreSkillsLabel: string;
  coreSkills: readonly string[];
  socialLabel: string;
  socialLinks: readonly SocialLink[];
  navigationLabel: string;
  navigation: readonly NavigationItem[];
  languageLabel: string;
}

export interface AboutContent {
  index: string;
  title: string;
  summary: readonly string[];
  impactAriaLabel: string;
  impact: readonly Impact[];
  facts: readonly { label: string; lines: readonly string[] }[];
}

export interface Experience {
  period: string;
  company: string;
  location: string;
  role: string;
  summary: string;
  impact: readonly Impact[];
  work: readonly string[];
  stack: readonly string[];
}

export interface ExperienceContent {
  index: string;
  title: string;
  technologiesLabel: string;
  jobs: readonly Experience[];
}

export interface ToolkitContent {
  index: string;
  title: string;
  groups: readonly { title: string; skills: readonly string[] }[];
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

export interface ContactContent {
  index: string;
  title: string;
  heading: readonly [string, string, string];
  links: readonly ContactLink[];
}

export interface FooterContent {
  copyright: string;
  note: string;
  backToTop: string;
}

export interface PortfolioContent {
  meta: {
    title: string;
    description: string;
    ogDescription: string;
    skipToContent: string;
  };
  sidebar: SidebarContent;
  about: AboutContent;
  experience: ExperienceContent;
  toolkit: ToolkitContent;
  contact: ContactContent;
  footer: FooterContent;
}
