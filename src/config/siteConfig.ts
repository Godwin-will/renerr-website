/**
 * Centralized Site Configuration for Renerr Energies Ltd
 * 
 * Positioning:
 * Renerr is a clean energy-tech startup committed to making affordable and reliable
 * electricity more accessible by combining clean energy solutions, innovative co-financing,
 * and digital technology.
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
  coreMessage: "Renerr uses clean energy, innovative co-financing and technology to make reliable electricity more accessible.",
  tagline: "Making Reliable Energy More Accessible.",
  positioningStatement: "Renerr combines clean energy solutions, innovative co-financing and digital technology to help individuals, communities and businesses access reliable electricity.",
  mission: "To reduce energy poverty and expand access to affordable, reliable electricity across Africa through innovation, practical solutions and strategic partnerships.",
  vision: "An Africa where access to reliable electricity enables every individual, household, business and community to realise its full potential.",
  guidingBelief: "Reliable electricity is a foundation for opportunity, productivity and human development. We believe access to energy should not be limited by income or geography.",
  brandPromise: "Making reliable electricity more accessible through clean energy, innovative co-financing and digital technology.",
  
  coFinancing: {
    householdsText: "Through our community-based approach, residents within suitable localities can come together to participate in shared energy projects. Instead of one household carrying the entire investment alone, participating residents can pool their contributions towards accessing shared energy infrastructure.",
    businessesText: "We also work towards making energy projects more accessible to businesses and organisations through structured co-financing and flexible payment arrangements. Depending on the project, customers may make an initial contribution and settle the remaining balance over an agreed period.",
    appDescription: "RENERR is being developed as the digital platform through which users will discover energy opportunities, participate in shared energy arrangements, coordinate contributions and manage their electricity services.",
  },

  initiatives: {
    awarenessInitiative: {
      name: "RENERR Energy Awareness Initiative",
      focus: "Educational outreach for secondary school students",
      description: "An educational initiative engaging secondary school students on renewable energy technologies, energy sustainability, electricity access, and future energy opportunities.",
    },
  },

  contact: {
    email: "info@renerrenergies.com",
    phone: "",
    whatsappNumber: "",
    addressDisplay: "Headquartered in Nigeria • Operating with an Africa-wide vision",
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
