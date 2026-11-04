/**
 * Centralized Site Configuration for Renerr Energies Ltd
 * 
 * Enduring Identity:
 * An African energy-access company working to reduce energy poverty
 * and expand access to affordable, reliable electricity.
 */

export interface SiteConfig {
  companyName: string;
  shortName: string;
  country: string;
  region: string;
  siteUrl: string;
  coreMessage: string;
  tagline: string;
  mission: string;
  vision: string;
  guidingBelief: string;
  brandPromise: string;
  approach: string;
  
  // Contact details (Configurable by founder)
  contact: {
    email: string;
    phone: string;
    whatsappNumber: string; // International format digits only (e.g. "2348000000000")
    addressDisplay: string;
    officeHours: string;
  };

  // Social Links (Only displayed if non-empty)
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
    partnerships: string;
  };
}

export const siteConfig: SiteConfig = {
  companyName: "Renerr Energies Ltd",
  shortName: "Renerr",
  country: "Nigeria",
  region: "Africa",
  siteUrl: "https://renerrenergies.com",
  coreMessage: "Powering a future where everyone has access to reliable electricity.",
  tagline: "Powering a Brighter Energy Future for Africa",
  mission: "To reduce energy poverty and expand access to affordable, reliable electricity across Africa through practical solutions, innovation, and strategic partnerships.",
  vision: "An Africa where access to reliable electricity enables every individual, household, business, and community to realise its full potential.",
  guidingBelief: "We believe that reliable electricity is fundamental to human progress and that access to energy should not be determined solely by income or geography.",
  brandPromise: "Working to make reliable electricity more accessible, affordable, and sustainable for the people and communities who need it.",
  approach: "We explore and develop practical energy solutions, innovative business models, and strategic partnerships that can help close Africa's electricity access gap and support long-term development.",
  
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
    generalNotice: "Renerr Energies develops projects tailored to specific energy needs, local conditions, and feasibility assessments.",
    partnerships: "Renerr Energies actively collaborates with technical specialists, investors, development finance institutions, public agencies, and communities to expand energy access.",
  }
};
