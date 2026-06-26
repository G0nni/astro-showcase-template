// Template : Freelance / Portfolio
// Copiez ce contenu dans src/config/site.ts pour démarrer avec ce template.

import type { SiteConfig } from "../types/site";

export const siteConfig: SiteConfig = {
  global: {
    name: "Alex Moreau",
    url: "https://alexmoreau.dev",
    description:
      "Développeur freelance spécialisé en applications web React & Node.js.",
    brandColor: "#0ea5e9",
    font: "Geist",
    roundedCards: "md",
  },

  header: { variant: "sticky" },

  seo: {
    defaultTitle: "Alex Moreau — Développeur Freelance",
    defaultDescription:
      "Développeur freelance React & Node.js. Je crée des applications web rapides, accessibles et bien conçues.",
  },

  navigation: [
    { label: "Projets", href: "/portfolio" },
    { label: "Services", href: "/services" },
    { label: "À propos", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  footer: {
    text: "© 2026 Alex Moreau",
    social: {
      github: "https://github.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/",
    },
    legal: [{ label: "Mentions légales", href: "#" }],
  },

  pages: {
    home: {
      seo: {
        title: "Accueil",
        description: "Développeur freelance React & Node.js",
      },
      sections: [
        {
          type: "hero",
          style: { background: "dark" },
          props: {
            title: "Je construis des apps web que les utilisateurs adorent",
            subtitle:
              "Développeur freelance senior avec 7 ans d'expérience. React, Node.js, TypeScript. Disponible pour vos projets.",
            ctaPrimary: { label: "Voir mes projets", href: "/portfolio" },
            ctaSecondary: { label: "Me contacter", href: "/contact" },
          },
        },
        {
          type: "stats",
          style: { background: "light", padding: "sm" },
          props: {
            items: [
              { value: "7 ans", label: "D'expérience" },
              { value: "40+", label: "Projets livrés" },
              { value: "98%", label: "Clients satisfaits" },
              { value: "< 1j", label: "Temps de réponse" },
            ],
          },
        },
        {
          type: "imageText",
          style: { background: "white", padding: "lg" },
          props: {
            title: "Des apps qui performent",
            paragraphs: [
              "Je me spécialise dans les applications web complexes : SPA React, APIs REST, intégrations tierces.",
              "Mon objectif : livrer du code propre, maintenable et documenté, dans les délais convenus.",
            ],
            imageUrl:
              "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format",
            imageAlt: "Développement web",
            imagePosition: "right",
            cta: { label: "Voir mes services", href: "/services" },
          },
        },
        {
          type: "gallery",
          style: { background: "light", padding: "lg" },
          props: {
            title: "Quelques réalisations",
            columns: 3,
            items: [
              {
                imageUrl:
                  "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&auto=format",
                alt: "Dashboard SaaS",
                caption: "Dashboard SaaS",
              },
              {
                imageUrl:
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format",
                alt: "App Analytics",
                caption: "App Analytics",
              },
              {
                imageUrl:
                  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&auto=format",
                alt: "Site e-commerce",
                caption: "E-commerce",
              },
            ],
          },
        },
        {
          type: "testimonials",
          style: { background: "white", padding: "lg" },
          props: {
            title: "Ce que disent mes clients",
            items: [
              {
                quote:
                  "Alex a livré notre app en 6 semaines, dans le budget. Code impeccable et très bon communicant.",
                author: "Thomas B.",
                role: "CTO, Startup Wave",
              },
              {
                quote:
                  "Rare de trouver quelqu'un d'aussi à l'écoute et technique. On retravaille avec lui à chaque projet.",
                author: "Claire M.",
                role: "Product Manager, Scale Tech",
              },
            ],
          },
        },
        {
          type: "reviews",
          style: { background: "light", padding: "sm" },
          props: {
            items: [
              { source: "Google", rating: 5, maxRating: 5, reviewCount: 18 },
              { source: "Malt", rating: 4.9, maxRating: 5, reviewCount: 31 },
              { source: "LinkedIn", rating: 5, maxRating: 5, reviewCount: 12 },
            ],
          },
        },
        {
          type: "download",
          style: { background: "white", padding: "md" },
          props: {
            title: "Mon CV et portfolio",
            subtitle: "Toutes mes réalisations et expériences en un document.",
            fileUrl: "/alex-moreau-cv.pdf",
            fileName: "Alex Moreau — Développeur Freelance.pdf",
            fileSize: "890 Ko",
            icon: "pdf",
            buttonLabel: "Télécharger le CV",
          },
        },
        {
          type: "newsletter",
          style: { background: "dark" },
          props: {
            title: "Ma newsletter dev",
            subtitle:
              "Conseils, outils et retours d'expérience — un email par semaine, pas de spam.",
            buttonLabel: "S'abonner",
            formAction:
              "https://moncompte.us1.list-manage.com/subscribe/post?u=XXXX&id=XXXX",
          },
        },
      ],
    },

    about: {
      seo: {
        title: "À propos",
        description: "Mon parcours et mes compétences",
      },
      sections: [
        {
          type: "text",
          style: { background: "white", padding: "lg" },
          props: {
            title: "Bonjour, je suis Alex",
            paragraphs: [
              "Développeur freelance depuis 2017, je travaille principalement avec des startups et PME qui ont besoin d'un développeur senior sans embaucher en CDI.",
              "Je maîtrise React, Next.js, Node.js, TypeScript et PostgreSQL. J'ai une vraie sensibilité pour le design et l'UX.",
              "En dehors du code : trail running, photographie et café de spécialité.",
            ],
          },
        },
        {
          type: "timeline",
          style: { background: "light", padding: "lg" },
          props: {
            title: "Parcours",
            items: [
              {
                date: "2017",
                title: "Début en freelance",
                description:
                  "Premier client trouvé via LinkedIn, jamais regardé en arrière.",
              },
              {
                date: "2019",
                title: "Spécialisation React",
                description:
                  "Transition vers le frontend moderne et les architectures SPA.",
              },
              {
                date: "2021",
                title: "Full-stack",
                description:
                  "Ajout de Node.js et PostgreSQL pour des missions plus complètes.",
              },
              {
                date: "2024",
                title: "Aujourd'hui",
                description:
                  "40+ projets, équipes de 2 à 50 personnes, partout en France.",
              },
            ],
          },
        },
        {
          type: "cta",
          style: { background: "gradient" },
          props: {
            title: "Discutons de votre projet",
            subtitle: "Disponibilités et tarifs sur demande.",
            cta: { label: "Prendre contact", href: "/contact" },
          },
        },
      ],
    },

    contact: {
      seo: { title: "Contact", description: "Travaillons ensemble" },
      sections: [
        {
          type: "contactInfo",
          style: { background: "white", padding: "lg" },
          props: {
            title: "Parlons-en",
            subtitle:
              "Je réponds sous 24h. Disponible pour des missions en remote ou Paris.",
            email: "alex@alexmoreau.dev",
            linkedin: {
              label: "Mon LinkedIn",
              href: "https://linkedin.com/in/",
            },
            location: "Paris / Remote",
          },
        },
        {
          type: "map",
          style: { background: "light", padding: "sm" },
          props: {
            embedUrl:
              "https://www.openstreetmap.org/export/embed.html?bbox=2.3387%2C48.8600%2C2.3700%2C48.8780&layer=mapnik",
            height: "sm",
            address:
              "Paris, France — Missions remote disponibles partout en France",
          },
        },
      ],
    },
  },
};
