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
  backgroundImage?: string;
  animation?: 'none' | 'fade';
  className?: string;
};

// ── Existing section types ──────────────────────────────────────────────────

export type HeroBlock = {
  type: 'hero';
  style?: SectionStyle;
  props: {
    title: string;
    subtitle: string;
    ctaPrimary: CtaLink;
    ctaSecondary?: CtaLink;
    variant?: 'centered' | 'split';
    splitImage?: { url: string; alt: string };
  };
};

export type FeaturesBlock = {
  type: 'features';
  style?: SectionStyle;
  props: {
    title: string;
    items: FeatureItem[];
    layout?: 'grid' | 'list';
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

// ── New section types ───────────────────────────────────────────────────────

export type PricingPlan = {
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  cta: CtaLink;
  highlighted?: boolean;
};

export type PricingBlock = {
  type: 'pricing';
  style?: SectionStyle;
  props: {
    title?: string;
    plans: PricingPlan[];
  };
};

export type StepItem = {
  number?: string;
  title: string;
  description: string;
};

export type StepsBlock = {
  type: 'steps';
  style?: SectionStyle;
  props: {
    title?: string;
    items: StepItem[];
  };
};

export type TeamMember = {
  name: string;
  role: string;
  imageUrl?: string;
  link?: string;
};

export type TeamBlock = {
  type: 'team';
  style?: SectionStyle;
  props: {
    title?: string;
    items: TeamMember[];
  };
};

export type TimelineItem = {
  date: string;
  title: string;
  description: string;
};

export type TimelineBlock = {
  type: 'timeline';
  style?: SectionStyle;
  props: {
    title?: string;
    items: TimelineItem[];
  };
};

export type VideoBlock = {
  type: 'video';
  style?: SectionStyle;
  props: {
    title?: string;
    videoUrl: string;
    caption?: string;
  };
};

export type GalleryItem = {
  imageUrl: string;
  alt: string;
  caption?: string;
};

export type GalleryBlock = {
  type: 'gallery';
  style?: SectionStyle;
  props: {
    title?: string;
    items: GalleryItem[];
    columns?: 2 | 3 | 4;
  };
};

export type NewsletterBlock = {
  type: 'newsletter';
  style?: SectionStyle;
  props: {
    title?: string;
    subtitle?: string;
    placeholder?: string;
    buttonLabel?: string;
    formAction: string;
  };
};

export type ComparisonRow = {
  feature: string;
  values: (boolean | string)[];
};

export type ComparisonBlock = {
  type: 'comparison';
  style?: SectionStyle;
  props: {
    title?: string;
    options: string[];
    rows: ComparisonRow[];
  };
};

export type DownloadBlock = {
  type: 'download';
  style?: SectionStyle;
  props: {
    title: string;
    subtitle?: string;
    fileUrl: string;
    fileName: string;
    fileSize?: string;
    buttonLabel?: string;
    icon?: 'pdf' | 'zip' | 'doc' | 'generic';
  };
};

export type MapBlock = {
  type: 'map';
  style?: SectionStyle;
  props: {
    title?: string;
    embedUrl: string;
    height?: 'sm' | 'md' | 'lg';
    address?: string;
    addressLink?: string;
  };
};

export type ReviewSourceItem = {
  source: string;
  rating: number;
  maxRating?: number;
  reviewCount?: number;
  logoUrl?: string;
  link?: string;
};

export type ReviewsBlock = {
  type: 'reviews';
  style?: SectionStyle;
  props: {
    title?: string;
    items: ReviewSourceItem[];
  };
};

// ── Union ───────────────────────────────────────────────────────────────────

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
  | LogosBlock
  | PricingBlock
  | StepsBlock
  | TeamBlock
  | TimelineBlock
  | VideoBlock
  | GalleryBlock
  | NewsletterBlock
  | ComparisonBlock
  | DownloadBlock
  | MapBlock
  | ReviewsBlock;

// ── Config ──────────────────────────────────────────────────────────────────

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

export type FooterColumn = {
  title: string;
  links: CtaLink[];
};

export type FooterSocial = {
  twitter?: string;
  github?: string;
  linkedin?: string;
  instagram?: string;
  youtube?: string;
};

export type SiteConfig = {
  global: {
    name: string;
    url: string;
    description: string;
    brandColor?: string;
    font?: string;
    roundedCards?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    banner?: {
      text: string;
      link?: CtaLink;
      closeable?: boolean;
    };
  };
  header?: {
    variant?: 'sticky' | 'transparent' | 'minimal';
  };
  seo: {
    defaultTitle: string;
    defaultDescription: string;
  };
  navigation: NavigationItem[];
  footer: {
    text: string;
    columns?: FooterColumn[];
    social?: FooterSocial;
    legal?: CtaLink[];
  };
  pages: {
    home: PageConfig;
    about: PageConfig;
    contact: PageConfig;
    [key: string]: PageConfig;
  };
};
