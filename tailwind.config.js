import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  plugins: [
      nextui({
        prefix: "nextui", // prefix for themes variables
        addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
        defaultTheme: "light", // default theme from the themes object
        defaultExtendTheme: "light", // default theme to extend on custom themes
        layout: {
          // Common layout tokens (applied to all themes)
          spacing: {
            xs: "0.5rem",
            sm: "1rem",
            md: "2rem",
            lg: "4rem",
            xl: "8rem",
          },
          borderRadius: {
            sm: "0.25rem",
            md: "0.5rem",
            lg: "1rem",
          },
        },
        themes: {
          light: {
            layout: {}, // light theme layout tokens
            colors: {
              background: "#f0fdf4", // Light green background
              foreground: "#2d3748", // Dark text color for readability
              primary: "#38a169", // Primary green for buttons and highlights
              secondary: "#48bb78", // Secondary green for accents
              accent: "#22543d", // Darker green accent
              muted: "#c6f6d5", // Muted green for backgrounds or less emphasis
            },
          },
          dark: {
            layout: {}, // dark theme layout tokens
            colors: {
              background: "#1a202c", // Dark background for dark mode
              foreground: "#f0fff4", // Light green text color for dark mode readability
              primary: "#68d391", // Lighter green for buttons and highlights in dark mode
              secondary: "#9ae6b4", // Lighter secondary green for accents
              accent: "#22543d", // Consistent darker green accent
              muted: "#2d3748", // Dark muted color for less emphasis
            },
          },
          // Custom football-themed colors
          football: {
            layout: {
              spacing: {
                xs: "0.5rem",
                sm: "1rem",
                md: "2rem",
                lg: "4rem",
                xl: "8rem",
              },
              borderRadius: {
                sm: "0.25rem",
                md: "0.5rem",
                lg: "1rem",
              },
            },
            colors: {
              background: "#e5e5e5", // Neutral background to mimic a pitch border
              foreground: "#344e41", // Dark green for text
              primary: "#4caf50", // Vivid green for primary actions
              secondary: "#81c784", // Softer green for secondary elements
              accent: "#388e3c", // Darker accent green
              muted: "#a5d6a7", // Light green for muted elements
            },
          },
        },
      }),
    ],
};
