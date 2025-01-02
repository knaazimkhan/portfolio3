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
import { SectionTitle } from '@/components/ui/section-title';

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
        <GradientBackground variant="vibrant">
          <div className="container mx-auto max-w-6xl">
            <ContactFormSkeleton />
          </div>
        </GradientBackground>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 px-4">
      <GradientBackground variant="vibrant">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle
            title="Get in Touch"
            description="I'm always open to new opportunities and collaborations. Feel free to reach out if you have any questions or just want to say hi!"
            titleAnimation="slide"
            descriptionAnimation="scale"
            parallaxOffset={40}
          />

          <motion.div
            className="grid gap-12 lg:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <div className="space-y-8">
                <ParallaxScroll offset={30}>
                  <HoverCard>
                    <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-4 p-4 bg-background/50 rounded-lg border backdrop-blur-sm">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <FaEnvelope className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <a
                          href="mailto:your.email@example.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          your.email@example.com
                        </a>
                      </div>
                    </motion.div>
                  </HoverCard>
                </ParallaxScroll>

                <ParallaxScroll offset={40}>
                  <HoverCard>
                    <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-4 p-4 bg-background/50 rounded-lg border backdrop-blur-sm">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <FaMapMarkerAlt className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Location</h3>
                        <p className="text-muted-foreground">Your Location, Country</p>
                      </div>
                    </motion.div>
                  </HoverCard>
                </ParallaxScroll>

                <ParallaxScroll offset={50}>
                  <div className="p-4 bg-background/50 rounded-lg border backdrop-blur-sm">
                    <h3 className="font-medium mb-4">Connect with me</h3>
                    <motion.div 
                      className="flex gap-4 flex-wrap"
                      variants={containerVariants}
                    >
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 rounded-full bg-background border transition-colors ${social.color}`}
                          variants={itemVariants}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          custom={index}
                          title={social.name}
                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </motion.div>
                  </div>
                </ParallaxScroll>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <ScrollAnimation animation="slide">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-4 bg-background/50 p-8 rounded-lg border backdrop-blur-sm">
                    {/* Honeypot field - hidden from real users */}
                    <div className="absolute opacity-0 -z-10 select-none pointer-events-none">
                      <label htmlFor="honeypot" aria-hidden="true">
                        Leave this field empty
                      </label>
                      <input
                        type="text"
                        id="honeypot"
                        tabIndex={-1}
                        autoComplete="off"
                        {...register("honeypot")}
                      />
                    </div>

                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        type="text"
                        id="name"
                        autoComplete="name"
                        aria-describedby="name-error"
                        className="w-full px-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        {...register("name")}
                      />
                      {errors.name && (
                        <motion.p
                          id="name-error"
                          role="alert"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-1 text-sm text-destructive"
                        >
                          {errors.name.message}
                        </motion.p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        type="email"
                        id="email"
                        autoComplete="email"
                        aria-describedby="email-error"
                        className="w-full px-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        {...register("email")}
                      />
                      {errors.email && (
                        <motion.p
                          id="email-error"
                          role="alert"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-1 text-sm text-destructive"
                        >
                          {errors.email.message}
                        </motion.p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <motion.textarea
                        whileFocus={{ scale: 1.01 }}
                        id="message"
                        rows={4}
                        aria-describedby="message-error"
                        className="w-full px-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        {...register("message")}
                      />
                      <div className="flex justify-between items-center mt-1">
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-xs text-muted-foreground"
                        >
                          {`${watch("message")?.length || 0}/1000 characters`}
                        </motion.p>
                        {errors.message && (
                          <motion.p
                            id="message-error"
                            role="alert"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm text-destructive"
                          >
                            {errors.message.message}
                          </motion.p>
                        )}
                      </div>
                    </div>

                    <div className="hidden">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        size="invisible"
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                      />
                    </div>

                    <HoverCard>
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        className="w-full inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                          />
                        ) : (
                          "Send Message"
                        )}
                      </motion.button>
                    </HoverCard>

                    {(submitStatus || errorMessage) && (
                      <motion.div
                        variants={successVariants}
                        initial="hidden"
                        animate="visible"
                        role="alert"
                        aria-live="polite"
                        className={`text-sm ${
                          submitStatus === "success"
                            ? "text-green-600 dark:text-green-400"
                            : "text-destructive"
                        }`}
                      >
                        {submitStatus === "success"
                          ? "Message sent successfully!"
                          : errorMessage || "Failed to send message. Please try again."}
                      </motion.div>
                    )}
                  </div>
                </form>
              </ScrollAnimation>
            </motion.div>
          </motion.div>
        </div>
      </GradientBackground>
    </section>
  );
}; 