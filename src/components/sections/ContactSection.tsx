"use client";

import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaDribbble,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { HoverCard } from "@/components/ui/hover-card";
import { AnimatedText } from "@/components/ui/animated-text";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { GradientBackground } from "@/components/ui/gradient-background";
import { ContactFormSkeleton } from "@/components/ui/contact-form-skeleton";
import { initEmailJS, validateEmailConfig, EMAIL_CONFIG, type EmailData } from "@/lib/emailjs";
import { RateLimit } from "@/lib/rate-limit";

const contactFormSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s-']+$/, "Name can only contain letters, spaces, hyphens, and apostrophes"),
  email: z.string()
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters")
    .max(100, "Email must be less than 100 characters")
    .regex(/^[^<>()[\]\\,;:\s@"]+@[^<>()[\]\\,;:\s@"]+\.[^<>()[\]\\,;:\s@"]{2,}$/, "Please enter a valid email address"),
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters")
    .refine((val) => !val.includes("<script>"), "Message contains invalid characters"),
  honeypot: z.string().max(0, "Nice try, bot!"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const successVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
};

const socialLinks = [
  {
    name: "GitHub",
    icon: <FaGithub className="w-6 h-6" />,
    url: "https://github.com/yourusername",
    color: "hover:text-[#333]",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="w-6 h-6" />,
    url: "https://linkedin.com/in/yourusername",
    color: "hover:text-[#0077b5]",
  },
  {
    name: "Twitter",
    icon: <FaTwitter className="w-6 h-6" />,
    url: "https://twitter.com/yourusername",
    color: "hover:text-[#1da1f2]",
  },
  {
    name: "Dribbble",
    icon: <FaDribbble className="w-6 h-6" />,
    url: "https://dribbble.com/yourusername",
    color: "hover:text-[#ea4c89]",
  },
];

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const rateLimit = useRef(new RateLimit(3, 60000)); // 3 attempts per minute

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Check rate limit
      const rateLimitResult = rateLimit.current.check(data.email);
      if (!rateLimitResult.success) {
        setErrorMessage(
          `Too many attempts. Please try again in ${rateLimitResult.timeLeft} seconds.`
        );
        return;
      }

      // Verify reCAPTCHA
      const recaptchaValue = await recaptchaRef.current?.executeAsync();
      if (!recaptchaValue) {
        setErrorMessage("Please verify that you are not a robot.");
        return;
      }

      setIsSubmitting(true);
      setSubmitStatus(null);
      setErrorMessage("");

      validateEmailConfig();
      
      await emailjs.send(
        EMAIL_CONFIG.serviceId,
        EMAIL_CONFIG.templateId,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          'g-recaptcha-response': recaptchaValue,
        } as EmailData,
        EMAIL_CONFIG.publicKey
      );

      setSubmitStatus("success");
      reset();
      rateLimit.current.reset(data.email);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
      recaptchaRef.current?.reset();
    }
  };

  useEffect(() => {
    try {
      initEmailJS();
    } catch (error) {
      console.error("Failed to initialize EmailJS:", error);
    }
  }, []);

  if (isLoading) {
    return (
      <section id="contact" className="py-20 px-4">
        <GradientBackground variant="muted">
          <div className="container mx-auto max-w-6xl">
            <ContactFormSkeleton />
          </div>
        </GradientBackground>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 px-4">
      <GradientBackground variant="muted">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation animation="slide" className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </ScrollAnimation>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Honeypot field */}
                <div className="hidden">
                  <input {...register("honeypot")} />
                </div>

                {/* Name field */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`w-full px-4 py-2 rounded-md border bg-background ${
                      errors.name ? "border-destructive" : "border-input"
                    }`}
                    {...register("name")}
                    aria-invalid={errors.name ? "true" : "false"}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name.message}</p>
                  )}
                </motion.div>

                {/* Email field */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`w-full px-4 py-2 rounded-md border bg-background ${
                      errors.email ? "border-destructive" : "border-input"
                    }`}
                    {...register("email")}
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </motion.div>

                {/* Message field */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-2 rounded-md border bg-background ${
                      errors.message ? "border-destructive" : "border-input"
                    }`}
                    {...register("message")}
                    aria-invalid={errors.message ? "true" : "false"}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message.message}</p>
                  )}
                </motion.div>

                {/* reCAPTCHA */}
                <motion.div variants={itemVariants}>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    size="invisible"
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                  />
                </motion.div>

                {/* Error message */}
                {errorMessage && (
                  <motion.p
                    variants={itemVariants}
                    className="text-sm text-destructive"
                  >
                    {errorMessage}
                  </motion.p>
                )}

                {/* Submit button */}
                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </motion.div>
              </form>

              {/* Success message */}
              {submitStatus === "success" && (
                <motion.div
                  variants={successVariants}
                  initial="hidden"
                  animate="visible"
                  className="p-4 rounded-md bg-green-500/10 text-green-500 text-center"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8 lg:pl-12"
            >
              {/* Location */}
              <motion.div variants={itemVariants} className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground">
                  <FaMapMarkerAlt className="w-4 h-4" />
                  <span>San Francisco, CA (PST)</span>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants} className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground">
                  <FaEnvelope className="w-4 h-4" />
                  <a
                    href="mailto:your.email@example.com"
                    className="hover:text-primary transition-colors"
                  >
                    your.email@example.com
                  </a>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants}>
                <h3 className="text-lg font-semibold text-center lg:text-left mb-4">
                  Connect with me
                </h3>
                <div className="flex justify-center lg:justify-start gap-4">
                  {socialLinks.map((link) => (
                    <HoverCard key={link.name}>
                      <motion.a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-muted-foreground transition-colors ${link.color}`}
                        title={link.name}
                        whileHover={{ scale: 1.1 }}
                      >
                        {link.icon}
                      </motion.a>
                    </HoverCard>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </GradientBackground>
    </section>
  );
}; 