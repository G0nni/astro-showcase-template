// Template : Agence web / Studio créatif
// Copiez ce contenu dans src/config/site.ts pour démarrer avec ce template.

import type { SiteConfig } from '../../types/site';

export const agenceConfig: SiteConfig = {
  global: {
    name: "Studio Créatif",
    url: "https://studio-creatif.fr",
    description: "Agence web spécialisée en design et développement sur mesure.",
    brandColor: "#6d28d9",
    font: "Plus Jakarta Sans",
    roundedCards: "lg",
    banner: {
      text: "Nouvelle offre : site vitrine livré en 10 jours.",
      link: { label: "En savoir plus", href: "/services" },
      closeable: true,
    },
  },

  header: { variant: "sticky" },

  seo: {
    defaultTitle: "Studio Créatif — Agence Web",
    defaultDescription: "Nous créons des sites web modernes et performants pour les marques ambitieuses.",
  },

  navigation: [
    { label: "Services", href: "/services" },
    { label: "Réalisations", href: "/portfolio" },
    { label: "L'agence", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  footer: {
    text: "© 2026 Studio Créatif",
    columns: [
      {
        title: "Services",
        links: [
          { label: "Site vitrine", href: "/services" },
          { label: "E-commerce", href: "/services" },
          { label: "Refonte", href: "/services" },
          { label: "SEO & Performance", href: "/services" },
        ],
      },
      {
        title: "Agence",
        links: [
          { label: "Notre équipe", href: "/about" },
          { label: "Notre méthode", href: "/about" },
          { label: "Réalisations", href: "/portfolio" },
        ],
      },
    ],
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://linkedin.com/company/",
      twitter: "https://twitter.com/",
    },
    legal: [
      { label: "Mentions légales", href: "#" },
    ],
  },

  pages: {
    home: {
      seo: { title: "Accueil", description: "Agence web design & développement" },
      sections: [
        {
          type: "hero",
          props: {
            title: "Nous donnons vie à vos projets digitaux",
            subtitle: "Design soigné, performance technique, livraison rapide. Tout ce dont votre marque a besoin pour se démarquer en ligne.",
            ctaPrimary: { label: "Voir nos réalisations", href: "/portfolio" },
            ctaSecondary: { label: "Nous contacter", href: "/contact" },
            variant: "split",
            splitImage: { url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format", alt: "Design studio" },
          },
        },
        {
          type: "logos",
          style: { background: "light", padding: "sm" },
          props: {
            title: "Ils nous ont fait confiance",
            items: [
              { name: "Client A", imageUrl: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" },
              { name: "Client B", imageUrl: "https://astro.build/favicon.svg" },
              { name: "Client C", imageUrl: "https://tailwindcss.com/favicons/favicon-32x32.png" },
            ],
          },
        },
        {
          type: "features",
          style: { background: "white", padding: "lg" },
          props: {
            title: "Pourquoi travailler avec nous",
            items: [
              { title: "Design sur mesure", description: "Chaque projet est unique. Nous concevons des visuels adaptés à votre identité de marque." },
              { title: "Code performant", description: "Nos sites atteignent des scores Lighthouse > 95 et chargent en moins d'une seconde." },
              { title: "Livraison rapide", description: "Un site vitrine livré en 2 à 4 semaines, sans compromis sur la qualité." },
              { title: "Accompagnement", description: "De la conception à la mise en ligne, nous sommes avec vous à chaque étape." },
              { title: "SEO intégré", description: "Structure sémantique, balises meta, sitemap — le référencement est pensé dès le départ." },
              { title: "Maintenance incluse", description: "Support réactif et mises à jour techniques incluses pendant 3 mois après livraison." },
            ],
          },
        },
        {
          type: "stats",
          style: { background: "primary", padding: "md" },
          props: {
            items: [
              { value: "80+", label: "Projets livrés" },
              { value: "4.9/5", label: "Satisfaction client" },
              { value: "< 2s", label: "Temps de chargement" },
              { value: "5 ans", label: "D'expérience" },
            ],
          },
        },
        {
          type: "testimonials",
          style: { background: "light", padding: "lg" },
          props: {
            title: "Ce que nos clients disent",
            items: [
              { quote: "Résultat bluffant, délais respectés et équipe à l'écoute. Je recommande sans hésiter.", author: "Marie D.", role: "Fondatrice, Maison Dore" },
              { quote: "Notre site a été refait en 3 semaines. Le trafic a doublé en 2 mois grâce au SEO.", author: "Pierre L.", role: "Gérant, Cabinet Legrand" },
              { quote: "Professionnels, créatifs et efficaces. Le meilleur investissement pour notre marque.", author: "Sofia K.", role: "CMO, Startup Bloom" },
            ],
          },
        },
        {
          type: "pricing",
          style: { background: "white", padding: "lg" },
          props: {
            title: "Nos formules",
            plans: [
              {
                name: "Starter",
                price: "1 490€",
                description: "Pour lancer votre présence en ligne",
                features: ["1 à 3 pages", "Design responsive", "SEO de base", "Formulaire de contact", "Livraison en 2 semaines"],
                cta: { label: "Démarrer", href: "/contact" },
              },
              {
                name: "Studio",
                price: "3 490€",
                description: "Pour une présence premium",
                features: ["Jusqu'à 8 pages", "Design premium sur mesure", "SEO avancé", "Animations", "CMS headless", "Maintenance 3 mois"],
                cta: { label: "Choisir Studio", href: "/contact" },
                highlighted: true,
              },
              {
                name: "Sur mesure",
                price: "Sur devis",
                description: "Projets complexes ou e-commerce",
                features: ["Pages illimitées", "E-commerce", "Intégrations API", "Support dédié", "SLA garanti"],
                cta: { label: "Nous contacter", href: "/contact" },
              },
            ],
          },
        },
        {
          type: "reviews",
          style: { background: "white", padding: "md" },
          props: {
            title: "Ce que pensent nos clients",
            items: [
              { source: "Google", rating: 4.9, maxRating: 5, reviewCount: 68 },
              { source: "Trustpilot", rating: 4.8, maxRating: 5, reviewCount: 34 },
              { source: "Clutch", rating: 4.9, maxRating: 5, reviewCount: 19 },
            ],
          },
        },
        {
          type: "comparison",
          style: { background: "light", padding: "lg" },
          props: {
            title: "Pourquoi choisir Studio Créatif",
            options: ["Agences classiques", "Studio Créatif", "Freelances solo"],
            rows: [
              { feature: "Délai de livraison", values: ["6-12 semaines", "2-4 semaines", "4-8 semaines"] },
              { feature: "Design sur mesure", values: [true, true, "Variable"] },
              { feature: "Interlocuteur dédié", values: ["Rarement", true, true] },
              { feature: "Accompagnement post-livraison", values: ["Payant", "3 mois inclus", false] },
              { feature: "SEO intégré", values: ["Option", true, "Variable"] },
            ],
          },
        },
        {
          type: "team",
          style: { background: "light", padding: "lg" },
          props: {
            title: "L'équipe",
            items: [
              { name: "Sarah Martin", role: "Directrice artistique", imageUrl: "https://i.pravatar.cc/150?img=5" },
              { name: "Lucas Petit", role: "Développeur full-stack", imageUrl: "https://i.pravatar.cc/150?img=11" },
              { name: "Emma Roy", role: "Chargée de projet", imageUrl: "https://i.pravatar.cc/150?img=9" },
            ],
          },
        },
        {
          type: "cta",
          style: { background: "gradient" },
          props: {
            title: "Prêt à démarrer votre projet ?",
            subtitle: "Discutons de vos besoins. Premier échange gratuit et sans engagement.",
            cta: { label: "Prendre contact", href: "/contact" },
          },
        },
      ],
    },

    about: {
      seo: { title: "L'agence", description: "Notre équipe et notre approche" },
      sections: [
        {
          type: "text",
          style: { background: "white", padding: "lg" },
          props: {
            title: "Une agence à taille humaine",
            paragraphs: [
              "Studio Créatif, c'est une équipe de 5 passionnés basés à Paris, spécialisés dans la création de sites web pour les marques qui veulent se différencier.",
              "Nous combinons design soigné et technique solide pour livrer des sites qui performent autant qu'ils séduisent.",
            ],
          },
        },
        {
          type: "steps",
          style: { background: "light", padding: "lg" },
          props: {
            title: "Notre méthode",
            items: [
              { title: "Découverte", description: "Un brief approfondi pour comprendre vos objectifs, votre cible et vos contraintes." },
              { title: "Design", description: "Maquettes et prototypes soumis à votre validation avant la moindre ligne de code." },
              { title: "Développement", description: "Code propre, performant et accessible, livré selon le planning convenu." },
              { title: "Lancement", description: "Mise en ligne, formation et accompagnement pour prendre votre site en main." },
            ],
          },
        },
        {
          type: "cta",
          style: { background: "dark" },
          props: {
            title: "Travaillons ensemble",
            subtitle: "Votre prochain projet mérite une agence qui comprend vos enjeux.",
            cta: { label: "Demander un devis", href: "/contact" },
          },
        },
      ],
    },

    contact: {
      seo: { title: "Contact", description: "Parlons de votre projet" },
      sections: [
        {
          type: "contactInfo",
          style: { background: "white", padding: "lg" },
          props: {
            title: "Parlons de votre projet",
            subtitle: "Réponse sous 24h en jours ouvrés.",
            email: "hello@studio-creatif.fr",
            linkedin: { label: "Notre page LinkedIn", href: "https://linkedin.com/company/" },
            location: "Paris, France",
          },
        },
      ],
    },
  },
};
