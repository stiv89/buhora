export type Language = 'es' | 'en';

export interface Content {
  header: {
    logo: string;
    nav: {
      approach: string;
      whatWeDo: string;
      services: string;
      contact: string;
    };
  };
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
  };
  problem: {
    text1: string;
    text2: string;
    text3: string;
    text4: string;
  };
  approach: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  whatWeDo: {
    title: string;
    description: string;
    items: string[];
  };
  whoWeWorkWith: {
    title: string;
    description: string;
    items: string[];
  };
  closing: {
    text1: string;
    text2: string;
  };
  footer: {
    email: string;
    linkedin: string;
    location: string;
    terms: string;
    privacy: string;
  };
}

export interface ContentData {
  es: Content;
  en: Content;
}
