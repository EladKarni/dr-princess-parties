"use client";

import { useEffect } from "react";

/**
 * ScrollReveal component that triggers reveal animations on scroll
 * Uses IntersectionObserver to add 'revealed' class when elements enter viewport
 */
export default function ScrollReveal() {
  useEffect(() => {
    // Check if browser supports IntersectionObserver
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      // Fallback: immediately reveal all elements
      const elements = document.querySelectorAll(".scroll-reveal");
      elements.forEach((el) => {
        el.classList.add("revealed");
      });
      return;
    }

    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            // Optionally unobserve after revealing (performance optimization)
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: "0px 0px -50px 0px", // Start slightly before element enters view
      }
    );

    // Observe all elements with scroll-reveal class
    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => {
      observer.observe(el);
    });

    // Cleanup
    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return null; // This component doesn't render anything
}
