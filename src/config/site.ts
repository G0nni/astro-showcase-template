export const siteConfig = {
  global: {
    name: "Mon Site Pro",
    url: "https://monsite.fr",
    description: "Site vitrine moderne",
  },

  seo: {
    defaultTitle: "Mon Site Pro",
    defaultDescription: "Site vitrine rapide, moderne et optimisé SEO",
  },

  navigation: [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "À propos", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  hero: {
    title: "Un site moderne pour développer votre activité",
    subtitle: "Rapide, SEO-friendly et simple à modifier",
    ctaPrimary: { label: "Contact", href: "/contact" },
    ctaSecondary: { label: "Services", href: "/services" },
  },

  features: [
    {
      title: "Rapide",
      description: "Optimisé performance et SEO",
    },
    {
      title: "Simple",
      description: "Tout se modifie dans un seul fichier",
    },
    {
      title: "Moderne",
      description: "Astro + composants réutilisables",
    },
  ],

  footer: {
    text: "© 2026 Mon Site Pro - Tous droits réservés",
  },
};
