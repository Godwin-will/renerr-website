/**
 * Centralized Site Configuration for Renerr Energies Ltd
 * 
 * Founders/Administrators: Update your business details and form endpoints here.
 * When values are left empty or as placeholders, the website gracefully adapts:
 * - Hides non-existent social links
 * - Provides mailto / direct communication alternatives
 * - Clearly guides users without inventing fake addresses, phone numbers, or partnerships
 */

export interface SiteConfig {
  companyName: string;
  shortName: string;
  country: string;
  siteUrl: string;
  tagline: string;
  mission: string;
  vision: string;
  
  // Contact details (Leave empty if not yet active; website will adapt)
  contact: {
    email: string;
    phone: string;
    whatsappNumber: string; // E.g. "2348000000000" (digits only, no '+' for WhatsApp link)
    addressDisplay: string; // e.g., "Lagos, Nigeria" or "Nigeria" (not fabricated)
    officeHours: string;
  };

  // Social Links (Only displayed if non-empty)
  social: {
    linkedin?: string;
    twitter?: string;
  };

  // Form handling configuration
  // You can paste your Formspree / Web3Forms / Cloudflare Worker endpoint here.
  // If left empty, forms will offer a verified "Email Directly" or "WhatsApp Message" fallback.
  forms: {
    partnerFormEndpoint: string; // e.g. "https://formspree.io/f/your_form_id"
    schoolFormEndpoint: string;  // e.g. "https://formspree.io/f/your_form_id"
    contactFormEndpoint: string;
  };

  // Standard legal disclaimers
  disclaimers: {
    schoolsZeroUpfront: string;
    prospectivePartnerships: string;
  };
}

export const siteConfig: SiteConfig = {
  companyName: "Renerr Energies Ltd",
  shortName: "Renerr",
  country: "Nigeria",
  siteUrl: "https://renerrenergies.com",
  tagline: "Powering a Brighter Future for Africa",
  mission: "To make affordable and reliable electricity accessible to everyone, starting in Nigeria and expanding across Africa.",
  vision: "An Africa where energy poverty no longer limits education, economic opportunity, or human potential.",
  
  contact: {
    // Leave as empty strings until official accounts are set up by founder
    email: "info@renerrenergies.com", // Founders can replace with primary email
    phone: "", // Replace with official phone when active
    whatsappNumber: "", // Replace with WhatsApp business phone digits (e.g. "2348012345678")
    addressDisplay: "Operating across Nigeria",
    officeHours: "Monday – Friday: 8:00 AM – 5:00 PM (WAT)",
  },

  social: {
    linkedin: "", // Add company LinkedIn URL when live
    twitter: "",  // Add company X/Twitter URL when live
  },

  forms: {
    // Add your Formspree endpoint (e.g. "https://formspree.io/f/xyz") or leave empty
    // When empty, the form will guide the user to generate an email or direct enquiry
    partnerFormEndpoint: "",
    schoolFormEndpoint: "",
    contactFormEndpoint: "",
  },

  disclaimers: {
    schoolsZeroUpfront: "Availability is subject to site assessment, project financing, eligibility, and agreed service terms.",
    prospectivePartnerships: "Renerr Energies is currently developing project pipelines and actively engaging prospective technical, financial, and institutional partners.",
  }
};
