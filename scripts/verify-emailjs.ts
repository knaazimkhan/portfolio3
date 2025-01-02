import { validateEmailConfig } from "../src/lib/emailjs";

try {
  console.log("Verifying EmailJS configuration...");
  validateEmailConfig();
  console.log("✅ EmailJS configuration is valid!");
} catch (error) {
  console.error("❌ EmailJS configuration error:", error instanceof Error ? error.message : error);
  process.exit(1);
} 