export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: string;
  pillars: ValuePillar[];
  techStack: string[];
}

export interface ValuePillar {
  title: string;
  description: string;
  icon: string;
}

export interface Industry {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: string;
  challenges: string[];
  solutions: string[];
}

export interface Office {
  city: string;
  country: string;
  address: string;
  timezone: string;
  timezoneLabel: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface MegaMenuColumn {
  title: string;
  items: NavItem[];
}

export interface NavigationConfig {
  whatWeDo: MegaMenuColumn[];
  whoWeAre: NavItem[];
  careers: NavItem;
  contact: NavItem;
}

export interface JobPosting {
  id: string;
  title: string;
  location: string;
  region: 'india' | 'uk' | 'middle-east';
  type: 'Full-Time' | 'Contract' | 'Part-Time';
  department: string;
}

export interface AboutPage {
  slug: string;
  title: string;
  subtitle: string;
  content: string[];
  highlights?: { label: string; value: string }[];
}

export interface LeadershipMember {
  name: string;
  role: string;
  bio: string;
}
