import { init } from '@emailjs/browser';

export const EMAIL_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
};

export type EmailData = {
  from_name: string;
  from_email: string;
  message: string;
  "g-recaptcha-response": string;
  honeypot?: string;
};

export const validateEmailConfig = () => {
  const { serviceId, templateId, publicKey } = EMAIL_CONFIG;

  if (!serviceId) {
    throw new Error("EmailJS Service ID is not configured");
  }

  if (!templateId) {
    throw new Error("EmailJS Template ID is not configured");
  }

  if (!publicKey) {
    throw new Error("EmailJS Public Key is not configured");
  }

  // Validate format of IDs (basic check)
  const idRegex = /^[a-zA-Z0-9_-]+$/;
  if (!idRegex.test(serviceId)) {
    throw new Error("Invalid EmailJS Service ID format");
  }

  if (!idRegex.test(templateId)) {
    throw new Error("Invalid EmailJS Template ID format");
  }

  if (!idRegex.test(publicKey)) {
    throw new Error("Invalid EmailJS Public Key format");
  }
};

export const initEmailJS = () => {
  validateEmailConfig();
  init(EMAIL_CONFIG.publicKey);
}; 