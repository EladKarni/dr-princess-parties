import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'princess-light': '#FFF0F5',    // Lavender Blush
        'princess-medium': '#FFB6C1',   // Light Pink
        'princess-gold': '#FFD700',     // Gold
        'princess-dark': '#2D2D2D',     // Dark text
        'princess-white': '#FFFFFF',    // Pure white
      },
      fontFamily: {
        script: ['var(--font-script)', 'Parisienne', 'cursive'],
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
      },
      animation: {
        'sparkle': 'sparkle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'bounce-slow': 'bounce-slow 2s ease-in-out infinite',
      },
      keyframes: {
        sparkle: {
          '0%, 100%': {
            opacity: '0',
            transform: 'scale(0) rotate(0deg)'
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1) rotate(180deg)'
          },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#1f2937",
          "primary-content": "#ffffff",
          secondary: "#3b82f6",
          "secondary-content": "#ffffff",
          accent: "#0693e3",
          "accent-content": "#ffffff",
          neutral: "#6b7280",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#f3f4f6",
          "base-content": "#111827",
          info: "#3b82f6",
          "info-content": "#ffffff",
          success: "#10b981",
          "success-content": "#ffffff",
          warning: "#f59e0b",
          "warning-content": "#ffffff",
          error: "#ef4444",
          "error-content": "#ffffff",
        },
      },
      {
        dark: {
          primary: "#0693e3",
          "primary-content": "#ffffff",
          secondary: "#3b82f6",
          "secondary-content": "#ffffff",
          accent: "#06b6d4",
          "accent-content": "#000000",
          neutral: "#2a2a2a",
          "neutral-content": "#d1d5db",
          "base-100": "#0a0a0a",
          "base-200": "#1a1a1a",
          "base-300": "#2a2a2a",
          "base-content": "#ffffff",
          info: "#3b82f6",
          "info-content": "#ffffff",
          success: "#10b981",
          "success-content": "#ffffff",
          warning: "#f59e0b",
          "warning-content": "#000000",
          error: "#ef4444",
          "error-content": "#ffffff",
        },
      },
      {
        princess: {
          primary: "#FFD700",
          "primary-content": "#2D2D2D",
          secondary: "#FFB6C1",
          "secondary-content": "#2D2D2D",
          accent: "#FFF0F5",
          "accent-content": "#2D2D2D",
          neutral: "#F5F5F5",
          "neutral-content": "#2D2D2D",
          "base-100": "#FFF0F5",
          "base-200": "#FFE4E9",
          "base-300": "#FFD1DC",
          "base-content": "#2D2D2D",
          info: "#FFB6C1",
          "info-content": "#2D2D2D",
          success: "#98D8C8",
          "success-content": "#2D2D2D",
          warning: "#FFD700",
          "warning-content": "#2D2D2D",
          error: "#FF6B9D",
          "error-content": "#FFFFFF",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
