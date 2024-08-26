// next-i18next.config.js
module.exports = {
    i18n: {
      locales: ['en', 'fr', 'es', 'de', 'uz'], // Supported languages including Uzbek
      defaultLocale: 'en', // Default language
      localeDetection: true, // Automatically detect user's locale
    },
    react: {
      useSuspense: false, // Disable suspense for SSR
      wait: true, // Wait for translations before rendering
    },
  };
  