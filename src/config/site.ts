import type { SiteConfig } from '../types/site';

export const siteConfig: SiteConfig = {
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
    { label: "À propos", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  footer: {
    text: "© 2026 Mon Site Pro — Tous droits réservés",
  },

  pages: {

    // ─── PAGE ACCUEIL ──────────────────────────────────────────────────────────
    home: {
      seo: {
        title: "Accueil",
        description: "Bienvenue sur Mon Site Pro — site vitrine moderne et rapide",
      },
      sections: [
        {
          type: "hero",
          props: {
            title: "Un site moderne pour développer votre activité",
            subtitle: "Rapide, SEO-friendly et simple à modifier. Tout se contrôle depuis un seul fichier.",
            ctaPrimary: { label: "Nous contacter", href: "/contact" },
            ctaSecondary: { label: "En savoir plus", href: "/about" },
          },
        },
        {
          type: "features",
          props: {
            title: "Pourquoi nous choisir",
            items: [
              {
                title: "Rapide",
                description: "Performances optimales, score Google Lighthouse élevé, chargement instantané.",
              },
              {
                title: "Simple",
                description: "Tout le contenu se modifie dans un seul fichier : site.ts. Aucun développement requis.",
              },
              {
                title: "Moderne",
                description: "Design SaaS premium, composants réutilisables, pleinement responsive.",
              },
            ],
          },
        },
        {
          type: "cta",
          props: {
            title: "Prêt à lancer votre projet ?",
            subtitle: "Contactez-nous dès aujourd'hui pour créer votre site vitrine professionnel.",
            cta: { label: "Démarrer maintenant", href: "/contact" },
          },
        },
      ],
    },

    // ─── PAGE À PROPOS ─────────────────────────────────────────────────────────
    about: {
      seo: {
        title: "À propos",
        description: "Découvrez notre approche et notre mission",
      },
      sections: [
        {
          type: "text",
          props: {
            title: "À propos de nous",
            paragraphs: [
              "Nous créons des sites web modernes, rapides et optimisés pour les moteurs de recherche.",
              "Notre approche repose sur la simplicité : tout le contenu est géré depuis un seul fichier de configuration, sans base de données, sans CMS complexe.",
              "Résultat : un site performant, facile à maintenir, et que vous pouvez modifier vous-même en quelques minutes.",
            ],
          },
        },
        {
          type: "cta",
          props: {
            title: "Travaillons ensemble",
            subtitle: "Vous avez un projet en tête ? Prenons contact et construisons quelque chose d'exceptionnel.",
            cta: { label: "Nous contacter", href: "/contact" },
          },
        },
      ],
    },

    // ─── PAGE CONTACT ──────────────────────────────────────────────────────────
    contact: {
      seo: {
        title: "Contact",
        description: "Contactez-nous pour votre projet",
      },
      sections: [
        {
          type: "contactInfo",
          props: {
            title: "Contactez-nous",
            subtitle: "Pour toute demande de projet, collaboration ou information, n'hésitez pas à nous écrire.",
            email: "contact@monsite.fr",
            linkedin: { label: "Voir le profil LinkedIn", href: "#" },
            location: "France",
          },
        },
      ],
    },

  },
};
