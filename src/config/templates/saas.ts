// Template : SaaS / Produit digital
// Copiez ce contenu dans src/config/site.ts pour démarrer avec ce template.

import type { SiteConfig } from '../../types/site';

export const saasConfig: SiteConfig = {
  global: {
    name: "FlowDesk",
    url: "https://flowdesk.app",
    description: "L'outil de gestion de projet pensé pour les équipes modernes.",
    brandColor: "#7c3aed",
    font: "Inter",
    roundedCards: "lg",
    banner: {
      text: "🎉 Essai gratuit étendu à 30 jours — offre limitée.",
      link: { label: "En profiter", href: "/signup" },
      closeable: true,
    },
  },

  header: { variant: "transparent" },

  seo: {
    defaultTitle: "FlowDesk — Gestion de projet simple",
    defaultDescription: "Organisez vos projets, synchronisez votre équipe, livrez plus vite. Essai gratuit 14 jours.",
  },

  navigation: [
    { label: "Fonctionnalités", href: "/features" },
    { label: "Tarifs", href: "/pricing" },
    { label: "À propos", href: "/about" },
    { label: "Essai gratuit →", href: "/signup" },
  ],

  footer: {
    text: "© 2026 FlowDesk, Inc.",
    columns: [
      {
        title: "Produit",
        links: [
          { label: "Fonctionnalités", href: "/features" },
          { label: "Tarifs", href: "/pricing" },
          { label: "Nouveautés", href: "/changelog" },
          { label: "Roadmap", href: "/roadmap" },
        ],
      },
      {
        title: "Ressources",
        links: [
          { label: "Documentation", href: "/docs" },
          { label: "Blog", href: "/blog" },
          { label: "Support", href: "/contact" },
        ],
      },
      {
        title: "Entreprise",
        links: [
          { label: "À propos", href: "/about" },
          { label: "Carrières", href: "/jobs" },
        ],
      },
    ],
    social: {
      twitter: "https://twitter.com/",
      github: "https://github.com/",
      linkedin: "https://linkedin.com/company/",
    },
    legal: [
      { label: "Conditions d'utilisation", href: "#" },
      { label: "Politique de confidentialité", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },

  pages: {
    home: {
      seo: { title: "Accueil", description: "Gestion de projet simple pour équipes modernes" },
      sections: [
        {
          type: "hero",
          style: {
            backgroundImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&auto=format",
          },
          props: {
            title: "Votre équipe mérite de meilleurs outils",
            subtitle: "FlowDesk réunit tout ce dont votre équipe a besoin pour travailler en sync. Projets, tâches, fichiers — au même endroit.",
            ctaPrimary: { label: "Essai gratuit 14 jours", href: "/signup" },
            ctaSecondary: { label: "Voir une démo", href: "#demo" },
          },
        },
        {
          type: "logos",
          style: { background: "light", padding: "sm" },
          props: {
            title: "Déjà adoptés par +500 équipes",
            items: [
              { name: "Entreprise A", imageUrl: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" },
              { name: "Entreprise B", imageUrl: "https://astro.build/favicon.svg" },
              { name: "Entreprise C", imageUrl: "https://tailwindcss.com/favicons/favicon-32x32.png" },
            ],
          },
        },
        {
          type: "features",
          style: { background: "white", padding: "lg" },
          props: {
            title: "Tout ce dont votre équipe a besoin",
            layout: "list",
            items: [
              { title: "Tableaux Kanban en temps réel", description: "Visualisez l'avancement de chaque projet en un coup d'œil. Mise à jour instantanée pour toute l'équipe." },
              { title: "Gestion des priorités", description: "Étiquetez, triez et filtrez les tâches par urgence, assigné ou statut." },
              { title: "Notifications intelligentes", description: "Soyez alerté uniquement de ce qui vous concerne. Fini le bruit inutile." },
              { title: "Rapports automatiques", description: "Partagez l'avancement avec vos clients ou votre direction en un clic." },
              { title: "Intégrations natives", description: "Slack, GitHub, Figma, Google Drive — tous vos outils connectés sans configuration." },
            ],
          },
        },
        {
          type: "stats",
          style: { background: "primary", padding: "md" },
          props: {
            items: [
              { value: "500+", label: "Équipes actives" },
              { value: "-40%", label: "De réunions de suivi" },
              { value: "2×", label: "Plus de projets livrés" },
              { value: "4.8★", label: "Sur Capterra" },
            ],
          },
        },
        {
          type: "video",
          style: { background: "white", padding: "lg" },
          props: {
            title: "Voyez FlowDesk en action",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            caption: "Présentation complète — 3 minutes",
          },
        },
        {
          type: "pricing",
          style: { background: "light", padding: "lg" },
          props: {
            title: "Simple et transparent",
            plans: [
              {
                name: "Free",
                price: "0€",
                period: "mois",
                description: "Pour les petites équipes qui démarrent",
                features: ["Jusqu'à 3 projets", "5 utilisateurs", "1 Go de stockage", "Support communautaire"],
                cta: { label: "Commencer gratuitement", href: "/signup" },
              },
              {
                name: "Team",
                price: "12€",
                period: "utilisateur/mois",
                description: "Pour les équipes en croissance",
                features: ["Projets illimités", "Utilisateurs illimités", "50 Go de stockage", "Intégrations avancées", "Support prioritaire"],
                cta: { label: "Essai gratuit 14j", href: "/signup" },
                highlighted: true,
              },
              {
                name: "Enterprise",
                price: "Sur devis",
                description: "Pour les grandes organisations",
                features: ["SSO / SAML", "Audit log", "SLA garanti", "Onboarding dédié", "Contrat personnalisé"],
                cta: { label: "Contacter les ventes", href: "/contact" },
              },
            ],
          },
        },
        {
          type: "reviews",
          style: { background: "light", padding: "md" },
          props: {
            title: "Plébiscité par ses utilisateurs",
            items: [
              { source: "Capterra", rating: 4.8, maxRating: 5, reviewCount: 156 },
              { source: "G2", rating: 4.7, maxRating: 5, reviewCount: 89 },
              { source: "Product Hunt", rating: 4.9, maxRating: 5, reviewCount: 203 },
            ],
          },
        },
        {
          type: "comparison",
          style: { background: "white", padding: "lg" },
          props: {
            title: "FlowDesk vs les alternatives",
            options: ["Jira", "FlowDesk", "Notion"],
            rows: [
              { feature: "Prise en main", values: ["Complexe", "Très simple", "Modérée"] },
              { feature: "Idéal pour startups", values: [false, true, true] },
              { feature: "Tableaux Kanban natifs", values: [true, true, "Plugin requis"] },
              { feature: "Notifications intelligentes", values: ["Basiques", true, false] },
              { feature: "Prix équipe de 10", values: ["~80€/mois", "~120€/mois", "~80€/mois"] },
              { feature: "Intégrations incluses", values: ["50+", "20+", "10+"] },
            ],
          },
        },
        {
          type: "faq",
          style: { background: "white", padding: "lg" },
          props: {
            title: "Questions fréquentes",
            items: [
              { question: "Puis-je migrer depuis Trello ou Notion ?", answer: "Oui, nous proposons un outil d'import en un clic depuis les principaux outils du marché." },
              { question: "Mes données sont-elles en sécurité ?", answer: "Toutes les données sont chiffrées en transit et au repos. Nos serveurs sont en Europe (RGPD)." },
              { question: "Puis-je annuler à tout moment ?", answer: "Oui, sans engagement. Vous gardez accès à vos données 30 jours après résiliation." },
              { question: "Y a-t-il une limite d'utilisateurs sur le plan Free ?", answer: "Le plan Free est limité à 5 utilisateurs. Les plans payants sont illimités." },
            ],
          },
        },
        {
          type: "newsletter",
          style: { background: "dark" },
          props: {
            title: "Restez informé",
            subtitle: "Nouveautés produit, conseils de productivité — une fois par mois.",
            buttonLabel: "S'abonner",
            formAction: "https://moncompte.us1.list-manage.com/subscribe/post?u=XXXX&id=XXXX",
          },
        },
        {
          type: "cta",
          style: { background: "gradient" },
          props: {
            title: "Prêt à transformer votre façon de travailler ?",
            subtitle: "Rejoignez +500 équipes qui livrent plus vite avec FlowDesk.",
            cta: { label: "Essai gratuit — aucune CB requise", href: "/signup" },
          },
        },
      ],
    },

    about: {
      seo: { title: "À propos", description: "Notre mission et notre histoire" },
      sections: [
        {
          type: "text",
          style: { background: "white", padding: "lg" },
          props: {
            title: "Notre mission",
            paragraphs: [
              "Nous croyons que la gestion de projet ne devrait pas être une corvée. FlowDesk est né de la frustration de ses fondateurs face à des outils trop complexes ou trop limités.",
              "Notre objectif : créer l'outil le plus simple possible qui couvre vraiment les besoins des équipes modernes.",
            ],
          },
        },
        {
          type: "timeline",
          style: { background: "light", padding: "lg" },
          props: {
            title: "Notre histoire",
            items: [
              { date: "2021", title: "Idée", description: "Lassés de Jira et Trello, les fondateurs commencent à coder le premier prototype." },
              { date: "2022", title: "Lancement bêta", description: "100 premières équipes invitées. Retours enthousiastes, product-market fit confirmé." },
              { date: "2023", title: "Levée de fonds", description: "1.2M€ levés pour accélérer le développement produit et l'équipe." },
              { date: "2024", title: "500+ équipes", description: "Expansion en Europe, lancement de l'offre Enterprise." },
            ],
          },
        },
        {
          type: "cta",
          style: { background: "dark" },
          props: {
            title: "Rejoignez l'aventure",
            subtitle: "On recrute ! Développeurs, designers, CS — venez construire l'avenir du travail en équipe.",
            cta: { label: "Voir les offres d'emploi", href: "#" },
          },
        },
      ],
    },

    contact: {
      seo: { title: "Contact", description: "Contactez notre équipe" },
      sections: [
        {
          type: "contactInfo",
          style: { background: "white", padding: "lg" },
          props: {
            title: "On est là pour vous aider",
            subtitle: "Support, ventes, presse — on répond à tout.",
            email: "hello@flowdesk.app",
            linkedin: { label: "Suivez-nous sur LinkedIn", href: "https://linkedin.com/company/" },
            location: "Paris, France 🇫🇷",
          },
        },
      ],
    },
  },
};
