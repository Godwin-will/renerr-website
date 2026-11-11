import { siteConfig } from '../config/siteConfig';

export interface FormSubmissionResult {
  success: boolean;
  status: 'sent_via_api' | 'email_fallback_ready' | 'error';
  message: string;
  mailtoUrl?: string;
  whatsappUrl?: string;
  formattedSummary?: string;
}

/**
 * Handles form submissions transparently without fake success states.
 * - If an endpoint is configured in siteConfig, it posts the data to the API.
 * - If no endpoint is configured, it produces pre-formatted mailto and WhatsApp links
 *   so the sender can dispatch their enquiry directly without losing their data.
 */
export async function handleFormSubmission(
  endpoint: string,
  formData: Record<string, any>,
  subject: string
): Promise<FormSubmissionResult> {
  // If a real API endpoint is configured (e.g. Formspree, Formsubmit, AWS Lambda, etc.)
  if (endpoint && endpoint.trim().length > 0) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        return {
          success: true,
          status: 'sent_via_api',
          message: 'Your enquiry has been successfully delivered to the Renerr Energies team.',
        };
      } else {
        const errorData = await response.json().catch(() => ({}));
        return {
          success: false,
          status: 'error',
          message:
            errorData.error ||
            'We were unable to deliver your enquiry through the submission gateway. Please reach out to us directly via email.',
        };
      }
    } catch (err) {
      return {
        success: false,
        status: 'error',
        message:
          'Network connection error. Please send your enquiry directly to notifications@renerrenergies.com.',
      };
    }
  }

  // Fallback mode: Generate transparent direct email and WhatsApp dispatch
  const formattedSummary = Object.entries(formData)
    .filter(([key, val]) => val !== undefined && val !== '' && key !== 'consent')
    .map(([key, val]) => {
      const label = key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, (str) => str.toUpperCase());
      return `${label}: ${Array.isArray(val) ? val.join(', ') : val}`;
    })
    .join('\n');

  const emailBody = `Hello Renerr Energies Team,\n\nI am submitting an enquiry through your website:\n\n${formattedSummary}\n\nThank you.`;

  const targetEmail = siteConfig.contact.email || 'notifications@renerrenergies.com';
  const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(emailBody)}`;

  const whatsappText = `*${subject}*\n\n${formattedSummary}`;
  const whatsappUrl = siteConfig.contact.whatsappNumber
    ? `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
        whatsappText
      )}`
    : undefined;

  return {
    success: true,
    status: 'email_fallback_ready',
    message:
      'Your enquiry details have been verified and prepared for direct dispatch to our team.',
    mailtoUrl,
    whatsappUrl,
    formattedSummary,
  };
}
