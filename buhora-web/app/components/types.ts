export type Language = 'es' | 'en';

export interface Content {
  header: {
    logo: string;
    nav: {
      approach: string;
      services: string;
      resources: string;
      contact: string;
      dropdowns: {
        approach: {
          clarityFirst: string;
          realDecisions: string;
          independence: string;
          howWeWork: string;
        };
        services: {
          strategicAnalytics: string;
          executiveDashboards: string;
          businessInsights: string;
          decisionSupport: string;
        };
        resources: {
          articles: string;
          cases: string;
          methodology: string;
        };
      };
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
    aboutUs: string;
    helpCenter: string;
    workWithUs: string;
    copyright: string;
  };
}

export interface ContentData {
  es: Content;
  en: Content;
}
