// Template : Profession libérale (avocat, médecin, kiné, comptable…)
// Copiez ce contenu dans src/config/site.ts pour démarrer avec ce template.

import type { SiteConfig } from '../../types/site';

export const liberalConfig: SiteConfig = {
  global: {
    name: "Cabinet Rousseau",
    url: "https://cabinet-rousseau.fr",
    description: "Cabinet d'avocats spécialisé en droit des affaires et droit du travail.",
    brandColor: "#1e40af", // bleu marine
    font: "Lora",
  },

  seo: {
    defaultTitle: "Cabinet Rousseau — Avocats en droit des affaires",
    defaultDescription: "Cabinet d'avocats à Paris spécialisé en droit des affaires, droit du travail et droit commercial. Consultation sur RDV.",
  },

  navigation: [
    { label: "Expertises", href: "/services" },
    { label: "Le cabinet", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  footer: {
    text: "© 2026 Cabinet Rousseau — Tous droits réservés",
    columns: [
      {
        title: "Expertises",
        links: [
          { label: "Droit des affaires", href: "/services" },
          { label: "Droit du travail", href: "/services" },
          { label: "Droit commercial", href: "/services" },
        ],
      },
      {
        title: "Cabinet",
        links: [
          { label: "L'équipe", href: "/about" },
          { label: "Notre approche", href: "/about" },
          { label: "Honoraires", href: "/contact" },
        ],
      },
    ],
    social: {
      linkedin: "https://linkedin.com/company/",
    },
    legal: [
      { label: "Mentions légales", href: "#" },
      { label: "Règlement RGPD", href: "#" },
      { label: "Barème des honoraires", href: "#" },
    ],
  },

  pages: {
    home: {
      seo: { title: "Accueil", description: "Cabinet d'avocats en droit des affaires à Paris" },
      sections: [
        {
          type: "hero",
          props: {
            title: "Votre partenaire juridique en droit des affaires",
            subtitle: "Le Cabinet Rousseau accompagne les entrepreneurs, PME et grandes entreprises dans leurs enjeux juridiques depuis 20 ans.",
            ctaPrimary: { label: "Prendre rendez-vous", href: "/contact" },
            ctaSecondary: { label: "Nos expertises", href: "/services" },
          },
        },
        {
          type: "features",
          style: { background: "light", padding: "lg" },
          props: {
            title: "Nos domaines d'expertise",
            items: [
              { title: "Droit des affaires", description: "Création et cession d'entreprise, contrats commerciaux, fusions-acquisitions, gouvernance." },
              { title: "Droit du travail", description: "Relations individuelles et collectives, restructurations, licenciements, contentieux prud'homal." },
              { title: "Droit commercial", description: "Baux commerciaux, fonds de commerce, concurrence déloyale, distribution." },
              { title: "Droit des sociétés", description: "Constitution, modification statutaire, assemblées, pactes d'associés." },
              { title: "Médiation", description: "Résolution amiable des conflits pour éviter un contentieux long et coûteux." },
              { title: "Contentieux", description: "Représentation devant les tribunaux de commerce, conseils de prud'hommes et cours d'appel." },
            ],
          },
        },
        {
          type: "steps",
          style: { background: "white", padding: "lg" },
          props: {
            title: "Comment se déroule un accompagnement",
            items: [
              { title: "Consultation initiale", description: "Un premier rendez-vous pour analyser votre situation et définir la stratégie adaptée." },
              { title: "Proposition d'honoraires", description: "Devis clair et transparent avant tout engagement. Pas de surprise." },
              { title: "Accompagnement", description: "Suivi personnalisé tout au long de votre dossier, avec un interlocuteur dédié." },
              { title: "Résolution", description: "Nous visons toujours la solution la plus efficace pour vos intérêts." },
            ],
          },
        },
        {
          type: "stats",
          style: { background: "primary", padding: "md" },
          props: {
            items: [
              { value: "20 ans", label: "D'exercice" },
              { value: "500+", label: "Clients accompagnés" },
              { value: "95%", label: "De dossiers résolus à l'amiable" },
              { value: "3", label: "Avocats associés" },
            ],
          },
        },
        {
          type: "faq",
          style: { background: "light", padding: "lg" },
          props: {
            title: "Questions fréquentes",
            items: [
              { question: "Comment se calculent vos honoraires ?", answer: "Nos honoraires sont fixés au forfait ou au temps passé selon la nature du dossier. Un devis vous est toujours soumis avant tout engagement." },
              { question: "Intervenez-vous en urgence ?", answer: "Oui, pour les situations urgentes (référé, licenciement imminent), nous nous mobilisons sous 24 à 48 heures." },
              { question: "Êtes-vous conventionnés avec l'aide juridictionnelle ?", answer: "Nous pouvons intervenir au titre de l'aide juridictionnelle pour les personnes éligibles sur certains types de dossiers." },
              { question: "Dans quelles villes intervenez-vous ?", answer: "Notre cabinet est basé à Paris mais nous intervenons sur tout le territoire national pour les dossiers nationaux." },
            ],
          },
        },
        {
          type: "logos",
          style: { background: "white", padding: "sm" },
          props: {
            title: "Membres et certifications",
            items: [
              { name: "Barreau de Paris", imageUrl: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" },
              { name: "AFJE", imageUrl: "https://astro.build/favicon.svg" },
            ],
          },
        },
        {
          type: "cta",
          style: { background: "dark" },
          props: {
            title: "Besoin d'un conseil juridique ?",
            subtitle: "Contactez-nous pour un premier entretien. Réponse sous 24h.",
            cta: { label: "Prendre rendez-vous", href: "/contact" },
          },
        },
      ],
    },

    about: {
      seo: { title: "Le cabinet", description: "Notre équipe et notre histoire" },
      sections: [
        {
          type: "text",
          style: { background: "white", padding: "lg" },
          props: {
            title: "Un cabinet à votre service depuis 2004",
            paragraphs: [
              "Fondé par Maître Claire Rousseau en 2004, le cabinet s'est progressivement développé pour compter aujourd'hui 3 associés et 5 collaborateurs.",
              "Notre force : une approche pragmatique et orientée résultat, en dehors des sentiers battus du conseil juridique traditionnel.",
              "Nous conseillons aussi bien des startups en phase d'amorçage que des groupes établis dans leurs opérations courantes et leurs opérations stratégiques.",
            ],
          },
        },
        {
          type: "team",
          style: { background: "light", padding: "lg" },
          props: {
            title: "Les associés",
            items: [
              { name: "Maître Claire Rousseau", role: "Avocate associée — Droit des affaires", imageUrl: "https://i.pravatar.cc/150?img=47" },
              { name: "Maître Paul Bernard", role: "Avocat associé — Droit du travail", imageUrl: "https://i.pravatar.cc/150?img=52" },
              { name: "Maître Sophie Vidal", role: "Avocate associée — Droit commercial", imageUrl: "https://i.pravatar.cc/150?img=45" },
            ],
          },
        },
        {
          type: "cta",
          style: { background: "gradient" },
          props: {
            title: "Rejoignez nos clients",
            subtitle: "Un accompagnement sur mesure pour chaque situation.",
            cta: { label: "Nous contacter", href: "/contact" },
          },
        },
      ],
    },

    contact: {
      seo: { title: "Contact", description: "Prendre rendez-vous avec le cabinet" },
      sections: [
        {
          type: "contactInfo",
          style: { background: "white", padding: "lg" },
          props: {
            title: "Prenez contact",
            subtitle: "Du lundi au vendredi, 9h–19h. Consultations sur rendez-vous.",
            email: "contact@cabinet-rousseau.fr",
            linkedin: { label: "Notre page LinkedIn", href: "https://linkedin.com/company/" },
            location: "14 rue du Faubourg Saint-Honoré, 75008 Paris",
          },
        },
      ],
    },
  },
};
