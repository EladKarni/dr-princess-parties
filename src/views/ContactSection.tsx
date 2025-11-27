"use client";

import { FC, useState } from "react";
import SectionContainer from "@/ui/SectionContainer";
import CTAButton from "@/ui/CTAButton";

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

const ContactSection: FC<ContactSectionProps> = ({
  title = "Get in Touch",
  subtitle = "Contact Us",
  description = "Have a product concept you want to develop? Let's discuss how we can help transform your idea into a functional prototype.",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <SectionContainer sectionName="contact" background="none" sectionClasses="relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-princess-gold font-script text-xl md:text-2xl mb-2">
            {subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-princess-dark mb-4">
            {title}
          </h2>
          <p className="text-lg text-princess-dark/70">{description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm border-2 border-princess-medium/30 rounded-2xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-princess-dark mb-2">
                  Name <span className="text-error">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-princess-medium/30 bg-white text-princess-dark focus:outline-none focus:ring-2 focus:ring-princess-gold focus:border-princess-gold transition-all duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-princess-dark mb-2">
                  Email <span className="text-error">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-princess-medium/30 bg-white text-princess-dark focus:outline-none focus:ring-2 focus:ring-princess-gold focus:border-princess-gold transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-princess-dark mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-princess-medium/30 bg-white text-princess-dark focus:outline-none focus:ring-2 focus:ring-princess-gold focus:border-princess-gold transition-all duration-200"
                  placeholder="+1 (234) 567-890"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-princess-dark mb-2">
                  Message <span className="text-error">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border-2 border-princess-medium/30 bg-white text-princess-dark focus:outline-none focus:ring-2 focus:ring-princess-gold focus:border-princess-gold transition-all duration-200 resize-none"
                  placeholder="Tell us about your event..."
                />
              </div>

              {status === "success" && (
                <div className="bg-success/10 border border-success text-success px-4 py-3 rounded-lg">
                  Thank you! We&apos;ll get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div className="bg-error/10 border border-error text-error px-4 py-3 rounded-lg">
                  Something went wrong. Please try again.
                </div>
              )}

              <CTAButton
                type="submit"
                variant="primary"
                size="lg"
                className="w-full bg-princess-gold hover:bg-princess-gold/90 text-princess-dark border-none shadow-lg"
                loading={status === "loading"}
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </CTAButton>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-princess-dark mb-6">Let&apos;s Connect</h3>
              <p className="text-princess-dark/70 leading-relaxed mb-6">
                Ready to make your event magical? We&apos;d love to hear from you! Get in touch to book your favorite character.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-princess-gold/20 border-2 border-princess-gold/50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-princess-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-princess-dark mb-1">Email</div>
                  <a href="mailto:contact@drprincessparties.com" className="text-princess-dark/70 hover:text-princess-gold transition-colors duration-200">
                    contact@drprincessparties.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-princess-gold/20 border-2 border-princess-gold/50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-princess-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-princess-dark mb-1">Phone</div>
                  <a href="tel:+1234567890" className="text-princess-dark/70 hover:text-princess-gold transition-colors duration-200">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-princess-gold/20 border-2 border-princess-gold/50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-princess-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-princess-dark mb-1">Service Area</div>
                  <div className="text-princess-dark/70">
                    Serving the Greater Area<br />
                    Available for travel
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <div className="font-semibold text-princess-dark mb-4">Follow Us</div>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-princess-gold/20 border-2 border-princess-gold/50 hover:bg-princess-gold hover:text-princess-dark rounded-lg flex items-center justify-center transition-all duration-200"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-princess-gold/20 border-2 border-princess-gold/50 hover:bg-princess-gold hover:text-princess-dark rounded-lg flex items-center justify-center transition-all duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
