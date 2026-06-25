export type CtaLink = {
  label: string;
  href: string;
};

export type FeatureItem = {
  title: string;
  description: string;
};

export type SectionStyle = {
  background?: 'white' | 'light' | 'dark' | 'primary' | 'gradient';
  padding?: 'sm' | 'md' | 'lg';
  align?: 'left' | 'center';
};

export type HeroBlock = {
  type: 'hero';
  style?: SectionStyle;
  props: {
    title: string;
    subtitle: string;
    ctaPrimary: CtaLink;
    ctaSecondary?: CtaLink;
  };
};

export type FeaturesBlock = {
  type: 'features';
  style?: SectionStyle;
  props: {
    title: string;
    items: FeatureItem[];
  };
};

export type CtaBlock = {
  type: 'cta';
  style?: SectionStyle;
  props: {
    title: string;
    subtitle: string;
    cta: CtaLink;
  };
};

export type TextBlock = {
  type: 'text';
  style?: SectionStyle;
  props: {
    title: string;
    paragraphs: string[];
  };
};

export type ContactInfoBlock = {
  type: 'contactInfo';
  style?: SectionStyle;
  props: {
    title: string;
    subtitle?: string;
    email?: string;
    linkedin?: CtaLink;
    location?: string;
  };
};

export type StatsBlock = {
  type: 'stats';
  style?: SectionStyle;
  props: {
    title?: string;
    items: { value: string; label: string }[];
  };
};

export type TestimonialsBlock = {
  type: 'testimonials';
  style?: SectionStyle;
  props: {
    title?: string;
    items: { quote: string; author: string; role?: string }[];
  };
};

export type ImageTextBlock = {
  type: 'imageText';
  style?: SectionStyle;
  props: {
    title: string;
    paragraphs: string[];
    imageUrl: string;
    imageAlt: string;
    imagePosition?: 'left' | 'right';
    cta?: CtaLink;
  };
};

export type FaqBlock = {
  type: 'faq';
  style?: SectionStyle;
  props: {
    title?: string;
    items: { question: string; answer: string }[];
  };
};

export type LogosBlock = {
  type: 'logos';
  style?: SectionStyle;
  props: {
    title?: string;
    items: { name: string; imageUrl: string }[];
  };
};

export type SectionBlock =
  | HeroBlock
  | FeaturesBlock
  | CtaBlock
  | TextBlock
  | ContactInfoBlock
  | StatsBlock
  | TestimonialsBlock
  | ImageTextBlock
  | FaqBlock
  | LogosBlock;

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
