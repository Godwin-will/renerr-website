/**
 * Centralized Site Configuration for Renerr Energies Ltd
 * 
 * Positioning:
 * Renerr Energies develops practical energy solutions that help businesses,
 * organisations and communities access affordable, reliable electricity through
 * flexible project arrangements and innovative shared-energy models.
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
  approach: string;
  
  // Principal Business Models
  models: {
    commercial: {
      title: string;
      tagline: string;
      description: string;
      illustrativePayment: string;
    };
    community: {
      title: string;
      tagline: string;
      description: string;
      platformRole: string;
    };
  };

  // Educational & Community Impact
  initiatives: {
    awarenessInitiative: {
      name: string;
      focus: string;
      description: string;
    };
  };

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
    paymentTerms: string;
    communityModel: string;
    partnerships: string;
  };
}

export const siteConfig: SiteConfig = {
  companyName: "Renerr Energies Ltd",
  shortName: "Renerr",
  country: "Nigeria",
  region: "Africa",
  siteUrl: "https://renerrenergies.com",
  coreMessage: "Making reliable energy more accessible to businesses, organisations and communities.",
  tagline: "Making Reliable Energy More Accessible.",
  positioningStatement: "Renerr Energies develops practical energy solutions that help businesses, organisations and communities access affordable, reliable electricity through flexible project arrangements and innovative shared-energy models.",
  mission: "To reduce energy poverty and expand access to affordable, reliable electricity across Africa through practical solutions, innovation and strategic partnerships.",
  vision: "An Africa where access to reliable electricity enables every individual, household, business and community to realise its full potential.",
  guidingBelief: "We believe that reliable electricity is fundamental to human progress and that access to energy should not be determined solely by income or geography.",
  brandPromise: "Working to make reliable electricity more accessible, affordable and sustainable through practical project execution and shared energy models.",
  approach: "We work with businesses, institutions and communities to develop energy projects that respond to their electricity requirements, financial circumstances and local conditions.",
  
  models: {
    commercial: {
      title: "Commercial & Organisational Energy Projects",
      tagline: "Energy Solutions for Businesses and Organisations",
      description: "We work with businesses, institutions and organisations to develop and implement energy projects tailored to their electricity requirements. Through structured payment arrangements, we aim to make energy infrastructure more accessible without requiring every customer to finance the entire project cost upfront.",
      illustrativePayment: "Payment arrangements may include an initial contribution followed by agreed instalments over a defined period (for example, an illustrative 50% initial contribution and 50% deferred balance over 3–12 months). Actual terms depend on project scale, technical design, credit assessment, and formal bilateral contracts.",
    },
    community: {
      title: "Community-Based Shared Energy Solutions",
      tagline: "Bringing Communities Together to Access Reliable Electricity",
      description: "We are developing a community-based approach that enables households within a suitable locality to collectively access shared energy infrastructure. Rather than requiring one household to bear the entire investment independently, participating residents can come together through a joint arrangement, pool their contributions and access a shared energy solution.",
      platformRole: "Digital tools and a future mobile application are being designed as enabling platforms to coordinate registrations, community clusters, contributions and project management—supporting service delivery rather than acting as standalone software products.",
    },
  },

  initiatives: {
    awarenessInitiative: {
      name: "RENERR Energy Awareness Initiative",
      focus: "Educational outreach for secondary school students",
      description: "An educational outreach programme through which we engage secondary school students on renewable energy technologies, energy sustainability, electricity access, and future clean energy careers.",
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
    generalNotice: "Renerr Energies develops projects tailored to specific energy needs, local conditions, and feasibility assessments.",
    paymentTerms: "Illustrative payment arrangements (such as a 50% initial deposit with deferred balance over 3–12 months) are examples only and do not represent a universal or guaranteed offer. Actual terms are determined individually based on technical audits, project scale, and mutually agreed contractual terms.",
    communityModel: "Community-based shared energy is an evolving model under development. Coverage, cluster sizes, and infrastructure are evaluated on a case-by-case basis based on technical, economic, and geographic feasibility.",
    partnerships: "Renerr Energies actively collaborates with technical specialists, investors, development finance institutions, public agencies, and communities to expand energy access.",
  }
};
