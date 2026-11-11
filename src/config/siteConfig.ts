/**
 * Centralized Site Configuration for Renerr Energies Ltd
 * 
 * Positioning:
 * Renerr Energies is an energy-access company developing practical solutions to make
 * reliable and affordable electricity more accessible across Africa.
 */

export interface SiteConfig {
  companyName: string;
  shortName: string;
  country: string;
  region: string;
  siteUrl: string;
  coreMessage: string;
  tagline: string;
  positioningStatement: string;
  mission: string;
  vision: string;
  guidingBelief: string;
  brandPromise: string;
  
  // Co-financing & Platform Philosophy
  coFinancing: {
    householdsText: string;
    businessesText: string;
    appDescription: string;
  };

  // Educational & Community Impact
  initiatives: {
    awarenessInitiative: {
      name: string;
      focus: string;
      description: string;
    };
  };

  // Contact details
  contact: {
    email: string;
    phone: string;
    whatsappNumber: string; // International format digits only
    addressDisplay: string;
    officeHours: string;
  };

  // Social Links
  social: {
    linkedin?: string;
    twitter?: string;
  };

  // Form handling configuration
  forms: {
    partnerFormEndpoint: string;
    projectFormEndpoint: string;
    contactFormEndpoint: string;
  };

  // Standard legal notices & disclaimers
  disclaimers: {
    generalNotice: string;
    coFinancingNotice: string;
    communityFeasibility: string;
    appDevelopment: string;
  };
}

export const siteConfig: SiteConfig = {
  companyName: "Renerr Energies Ltd",
  shortName: "Renerr",
  country: "Nigeria",
  region: "Africa",
  siteUrl: "https://renerrenergies.com",
  coreMessage: "Renerr Energies is developing practical solutions to make reliable electricity more accessible.",
  tagline: "Making Reliable Energy More Accessible.",
  positioningStatement: "Renerr Energies is developing practical residential and community-based solar solutions to make reliable and affordable electricity more accessible across Africa.",
  mission: "To reduce energy poverty and expand access to affordable, reliable electricity across Africa through innovation, practical solutions and strategic partnerships.",
  vision: "An Africa where access to reliable electricity enables every individual, household, business and community to realise its full potential.",
  guidingBelief: "Reliable electricity is a foundation for opportunity, productivity and human development. We believe access to energy should not be limited by income or geography.",
  brandPromise: "Making reliable and affordable electricity more accessible through practical energy solutions.",
  
  coFinancing: {
    householdsText: "Renerr is developing a community-based approach in which residents in technically suitable localities can plan shared energy projects. Participating households may pool contributions towards shared infrastructure under agreed access or ownership arrangements.",
    businessesText: "Renerr is exploring ways to make energy projects more accessible to businesses and organisations through structured co-financing and flexible payment arrangements, subject to project requirements, feasibility and mutually agreed terms.",
    appDescription: "RENERR is being developed as the digital platform through which users will discover energy opportunities, participate in shared energy arrangements, coordinate contributions and manage their electricity services.",
  },

  initiatives: {
    awarenessInitiative: {
      name: "RENERR Energy Awareness Initiative",
      focus: "Educational outreach for secondary school students",
      description: "A planned educational outreach initiative focused on renewable energy, energy sustainability, electricity access and future energy opportunities.",
    },
  },

  contact: {
    email: "notifications@renerrenergies.com",
    phone: "",
    whatsappNumber: "",
    addressDisplay: "Lagos, Nigeria",
    officeHours: "Monday – Friday: 8:00 AM – 5:00 PM (WAT)",
  },

  social: {
    linkedin: "",
    twitter: "",
  },

  forms: {
    partnerFormEndpoint: "",
    projectFormEndpoint: "",
    contactFormEndpoint: "",
  },

  disclaimers: {
    generalNotice: "Renerr Energies develops practical clean energy projects tailored to local conditions, energy requirements, and feasibility assessments.",
    coFinancingNotice: "Co-financing and payment arrangements are subject to project requirements, technical feasibility, and mutually agreed terms. Terms vary by project and do not represent a guaranteed offer.",
    communityFeasibility: "Community eligibility, cluster sizes, and geographical coverage depend on technical, economic, and structural feasibility.",
    appDevelopment: "RENERR is currently under development. More information about availability will be announced as we progress.",
  }
};
