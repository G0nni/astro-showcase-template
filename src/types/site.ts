export type CtaLink = {
  label: string;
  href: string;
};

export type FeatureItem = {
  title: string;
  description: string;
};

export type HeroBlock = {
  type: 'hero';
  props: {
    title: string;
    subtitle: string;
    ctaPrimary: CtaLink;
    ctaSecondary?: CtaLink;
  };
};

export type FeaturesBlock = {
  type: 'features';
  props: {
    title: string;
    items: FeatureItem[];
  };
};

export type CtaBlock = {
  type: 'cta';
  props: {
    title: string;
    subtitle: string;
    cta: CtaLink;
  };
};

export type TextBlock = {
  type: 'text';
  props: {
    title: string;
    paragraphs: string[];
  };
};

export type ContactInfoBlock = {
  type: 'contactInfo';
  props: {
    title: string;
    subtitle?: string;
    email?: string;
    linkedin?: CtaLink;
    location?: string;
  };
};

export type SectionBlock =
  | HeroBlock
  | FeaturesBlock
  | CtaBlock
  | TextBlock
  | ContactInfoBlock;

export type PageConfig = {
  seo: {
    title: string;
    description: string;
  };
  sections: SectionBlock[];
};

export type NavigationItem = {
  label: string;
  href: string;
};

export type SiteConfig = {
  global: {
    name: string;
    url: string;
    description: string;
  };
  seo: {
    defaultTitle: string;
    defaultDescription: string;
  };
  navigation: NavigationItem[];
  footer: {
    text: string;
  };
  pages: {
    home: PageConfig;
    about: PageConfig;
    contact: PageConfig;
    [key: string]: PageConfig;
  };
};
