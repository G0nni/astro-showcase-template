import type { SiteConfig } from '../types/site';

export const siteConfig: SiteConfig = {
  global: {
    name: "Mon Site Pro",
    url: "https://monsite.fr",
    description: "Site vitrine moderne, rapide et facile à personnaliser.",
    brandColor: "#2563eb", // ← Couleur primaire (boutons, accents, sections "primary")
    font: "Inter",         // ← Nom d'une Google Font — supprimez pour utiliser la police système
  },

  seo: {
    defaultTitle: "Mon Site Pro",
    defaultDescription: "Site vitrine rapide, moderne et optimisé SEO",
  },

  navigation: [
    { label: "Services", href: "/services" },
    { label: "À propos", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Démo →", href: "/demo" },
  ],

  footer: {
    text: "© 2026 Mon Site Pro — Tous droits réservés",
    columns: [
      {
        title: "Services",
        links: [
          { label: "Site vitrine", href: "/services" },
          { label: "E-commerce", href: "/services" },
          { label: "Application web", href: "/services" },
        ],
      },
      {
        title: "Entreprise",
        links: [
          { label: "À propos", href: "/about" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
    social: {
      github: "https://github.com/G0nni/astro-showcase-template",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/",
    },
    legal: [
      { label: "Mentions légales", href: "#" },
      { label: "Politique de confidentialité", href: "#" },
    ],
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
          type: "stats",
          style: { background: "light", padding: "md" },
          props: {
            items: [
              { value: "98", label: "Score Lighthouse" },
              { value: "< 1s", label: "Temps de chargement" },
              { value: "100%", label: "Responsive" },
              { value: "0", label: "Dépendances inutiles" },
            ],
          },
        },
        {
          type: "features",
          style: { background: "white", padding: "lg" },
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
          type: "testimonials",
          style: { background: "light", padding: "lg" },
          props: {
            title: "Ce que disent nos clients",
            items: [
              {
                quote: "Un site livré en temps record, exactement ce que je voulais. Très simple à modifier.",
                author: "Sophie Martin",
                role: "Directrice, Cabinet Martin",
              },
              {
                quote: "La performance est impressionnante. Mon ancien site mettait 5 secondes à charger, celui-ci c'est instantané.",
                author: "Thomas Leclerc",
                role: "Fondateur, TL Consulting",
              },
              {
                quote: "J'ai pu modifier tout le contenu moi-même depuis le fichier de config. Vraiment intuitif.",
                author: "Camille Roux",
                role: "Avocate indépendante",
              },
            ],
          },
        },
        {
          type: "cta",
          style: { background: "gradient" },
          props: {
            title: "Prêt à lancer votre projet ?",
            subtitle: "Contactez-nous dès aujourd'hui pour créer votre site vitrine professionnel.",
            cta: { label: "Démarrer maintenant", href: "/contact" },
          },
        },
      ],
    },

    // ─── PAGE SERVICES ─────────────────────────────────────────────────────────
    services: {
      seo: {
        title: "Services",
        description: "Découvrez nos prestations de création de sites web",
      },
      sections: [
        {
          type: "text",
          style: { background: "white", padding: "lg" },
          props: {
            title: "Nos services",
            paragraphs: [
              "Nous proposons des solutions complètes pour votre présence en ligne : du site vitrine au site e-commerce, en passant par les applications web sur mesure.",
              "Chaque projet est traité avec soin, de la conception à la mise en ligne, avec un accompagnement personnalisé.",
            ],
          },
        },
        {
          type: "features",
          style: { background: "light" },
          props: {
            title: "Ce que nous faisons",
            items: [
              {
                title: "Site vitrine",
                description: "Présence en ligne soignée, rapide et optimisée SEO. Idéal pour les indépendants et PME.",
              },
              {
                title: "Site e-commerce",
                description: "Boutique en ligne performante avec gestion des produits, paiements et stocks.",
              },
              {
                title: "Application web",
                description: "Développement sur mesure pour vos besoins métier spécifiques.",
              },
              {
                title: "Refonte",
                description: "Modernisation de votre site existant avec gain de performance et de design.",
              },
              {
                title: "SEO & Performance",
                description: "Audit et optimisation pour améliorer votre positionnement sur Google.",
              },
              {
                title: "Maintenance",
                description: "Suivi technique, mises à jour et support réactif pour votre site.",
              },
            ],
          },
        },
        {
          type: "imageText",
          style: { background: "white", padding: "lg" },
          props: {
            title: "Une méthode simple et efficace",
            paragraphs: [
              "Nous démarrons chaque projet par un échange approfondi pour comprendre vos besoins et vos objectifs.",
              "Puis nous concevons, développons et livrons votre site dans des délais courts, sans mauvaise surprise.",
            ],
            imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format",
            imageAlt: "Équipe de travail collaboratif",
            imagePosition: "right",
            cta: { label: "Nous contacter", href: "/contact" },
          },
        },
        {
          type: "faq",
          style: { background: "light", padding: "lg" },
          props: {
            title: "Questions fréquentes",
            items: [
              {
                question: "Combien de temps prend la création d'un site ?",
                answer: "Un site vitrine standard est livré en 1 à 3 semaines selon la complexité. Un projet e-commerce ou sur mesure demande généralement 4 à 8 semaines.",
              },
              {
                question: "Puis-je modifier le contenu moi-même ?",
                answer: "Oui, absolument. Notre template est conçu pour être modifié sans développeur — tout le contenu se gère depuis un seul fichier de configuration.",
              },
              {
                question: "Le site sera-t-il bien référencé sur Google ?",
                answer: "Nos sites sont optimisés SEO dès la base : balises meta, performance, structure sémantique. Nous pouvons aussi vous accompagner sur une stratégie de contenu.",
              },
              {
                question: "Quel est le coût d'un site vitrine ?",
                answer: "Les tarifs varient selon vos besoins. Contactez-nous pour un devis personnalisé et gratuit.",
              },
            ],
          },
        },
        {
          type: "cta",
          style: { background: "dark" },
          props: {
            title: "Un projet en tête ?",
            subtitle: "Parlons-en. Un premier échange est toujours gratuit et sans engagement.",
            cta: { label: "Prendre contact", href: "/contact" },
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
          style: { background: "white", padding: "lg" },
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
          type: "imageText",
          style: { background: "light", padding: "lg" },
          props: {
            title: "Notre philosophie",
            paragraphs: [
              "Moins de complexité, plus de valeur. Nous croyons que les meilleurs outils sont ceux qu'on n'a pas besoin d'expliquer.",
              "C'est pourquoi nous construisons des sites qui se pilotent depuis un fichier texte — aucune interface à apprendre, aucune formation requise.",
            ],
            imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format",
            imageAlt: "Code sur un écran",
            imagePosition: "left",
          },
        },
        {
          type: "stats",
          style: { background: "primary", padding: "lg" },
          props: {
            title: "En quelques chiffres",
            items: [
              { value: "50+", label: "Sites livrés" },
              { value: "4.9/5", label: "Satisfaction client" },
              { value: "3 ans", label: "D'expérience" },
            ],
          },
        },
        {
          type: "cta",
          style: { background: "dark" },
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
          style: { background: "white", padding: "lg" },
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

    // ─── PAGE DEMO (toutes les nouvelles sections) ─────────────────────────────
    demo: {
      seo: {
        title: "Démo des sections",
        description: "Démonstration de toutes les sections disponibles",
      },
      sections: [
        {
          type: "hero",
          props: {
            title: "Variant Split — texte à gauche, image à droite",
            subtitle: "Ajoutez variant: 'split' et splitImage pour ce layout deux colonnes.",
            ctaPrimary: { label: "Commencer", href: "/contact" },
            ctaSecondary: { label: "En savoir plus", href: "/about" },
            variant: "split",
            splitImage: {
              url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format",
              alt: "Équipe de travail",
            },
          },
        },
        {
          type: "steps",
          style: { background: "white", padding: "lg" },
          props: {
            title: "Comment ça marche",
            items: [
              { title: "Clonez le repo", description: "git clone puis npm install pour démarrer en local en quelques secondes." },
              { title: "Éditez site.ts", description: "Modifiez les textes, ajoutez des sections, configurez les pages depuis un seul fichier." },
              { title: "Déployez", description: "Un push sur main déclenche automatiquement le déploiement via GitHub Actions." },
            ],
          },
        },
        {
          type: "pricing",
          style: { background: "light", padding: "lg" },
          props: {
            title: "Nos tarifs",
            plans: [
              {
                name: "Starter",
                price: "490€",
                description: "Idéal pour se lancer",
                features: ["1 page", "Design responsive", "SEO de base", "Livraison 1 semaine"],
                cta: { label: "Choisir Starter", href: "/contact" },
              },
              {
                name: "Pro",
                price: "990€",
                description: "Pour les projets ambitieux",
                features: ["Jusqu'à 5 pages", "Design premium", "SEO avancé", "Analytics", "Maintenance 1 mois"],
                cta: { label: "Choisir Pro", href: "/contact" },
                highlighted: true,
              },
              {
                name: "Sur mesure",
                price: "Sur devis",
                description: "Projets complexes",
                features: ["Pages illimitées", "Fonctionnalités custom", "Intégrations", "Support dédié"],
                cta: { label: "Nous contacter", href: "/contact" },
              },
            ],
          },
        },
        {
          type: "team",
          style: { background: "white", padding: "lg" },
          props: {
            title: "Notre équipe",
            items: [
              { name: "Alice Martin", role: "Directrice", imageUrl: "https://i.pravatar.cc/150?img=1" },
              { name: "Baptiste Roy", role: "Développeur", imageUrl: "https://i.pravatar.cc/150?img=3" },
              { name: "Chloé Dupont", role: "Designer", imageUrl: "https://i.pravatar.cc/150?img=5" },
            ],
          },
        },
        {
          type: "timeline",
          style: { background: "light", padding: "lg" },
          props: {
            title: "Notre histoire",
            items: [
              { date: "2020", title: "Création", description: "Lancement de l'agence avec une première équipe de 2 personnes." },
              { date: "2021", title: "10 clients", description: "Franchissement du cap des 10 clients satisfaits." },
              { date: "2023", title: "Expansion", description: "Ouverture d'un second bureau et recrutement de 5 nouveaux collaborateurs." },
              { date: "2024", title: "50 projets", description: "Plus de 50 sites livrés avec une satisfaction client de 4.9/5." },
            ],
          },
        },
        {
          type: "video",
          style: { background: "white", padding: "lg" },
          props: {
            title: "Présentation en vidéo",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            caption: "Découvrez notre méthode en 2 minutes",
          },
        },
        {
          type: "gallery",
          style: { background: "light", padding: "lg" },
          props: {
            title: "Nos réalisations",
            columns: 3,
            items: [
              { imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&auto=format", alt: "Site e-commerce", caption: "Site e-commerce" },
              { imageUrl: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&auto=format", alt: "Site vitrine", caption: "Site vitrine" },
              { imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format", alt: "Dashboard", caption: "Dashboard" },
              { imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format", alt: "Application web", caption: "Application web" },
              { imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format", alt: "Collaboration", caption: "Collaboration" },
              { imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format", alt: "Réunion", caption: "Réunion client" },
            ],
          },
        },
        {
          type: "newsletter",
          style: { background: "dark" },
          props: {
            title: "Restez informé",
            subtitle: "Recevez nos conseils et actualités directement dans votre boîte mail.",
            placeholder: "votre@email.fr",
            buttonLabel: "S'inscrire",
            formAction: "https://moncompte.us1.list-manage.com/subscribe/post?u=XXXX&id=XXXX",
          },
        },
      ],
    },

  },
};
