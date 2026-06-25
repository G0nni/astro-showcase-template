# Catalogue des sections

Ce projet propose 5 sections prêtes à l'emploi. Chaque section s'utilise en ajoutant un bloc dans le tableau `sections` de la page concernée dans `site.ts`.

---

## Hero

**Objectif :** Section d'introduction principale, généralement en haut de la page d'accueil. Attire l'attention et incite à l'action.

**Props disponibles :**

| Propriété | Obligatoire | Description |
|---|---|---|
| `title` | Oui | Titre principal (grand et en gras) |
| `subtitle` | Oui | Sous-titre descriptif |
| `ctaPrimary` | Oui | Bouton principal `{ label, href }` |
| `ctaSecondary` | Non | Bouton secondaire `{ label, href }` |

**Exemple :**

```ts
{
  type: "hero",
  props: {
    title: "Votre partenaire de confiance",
    subtitle: "Nous accompagnons les entreprises dans leur transformation digitale.",
    ctaPrimary: { label: "Prendre contact", href: "/contact" },
    ctaSecondary: { label: "Découvrir nos services", href: "/services" },
  },
},
```

---

## Features

**Objectif :** Présenter plusieurs avantages, services ou caractéristiques sous forme de grille de cartes.

**Props disponibles :**

| Propriété | Obligatoire | Description |
|---|---|---|
| `title` | Oui | Titre de la section |
| `items` | Oui | Tableau de `{ title, description }` |

**Exemple :**

```ts
{
  type: "features",
  props: {
    title: "Nos engagements",
    items: [
      {
        title: "Réactivité",
        description: "Nous répondons sous 24h à toutes vos demandes.",
      },
      {
        title: "Qualité",
        description: "Chaque livrable est vérifié avant remise au client.",
      },
      {
        title: "Transparence",
        description: "Tarifs clairs, sans surprise.",
      },
    ],
  },
},
```

> Il n'y a pas de limite au nombre d'items, mais 3 ou 6 est recommandé pour un affichage équilibré.

---

## CTA (Appel à l'action)

**Objectif :** Section à fond sombre destinée à inciter le visiteur à passer à l'action. Idéale en bas de page ou entre deux sections.

**Props disponibles :**

| Propriété | Obligatoire | Description |
|---|---|---|
| `title` | Oui | Titre accrocheur |
| `subtitle` | Oui | Phrase d'accompagnement |
| `cta` | Oui | Bouton d'action `{ label, href }` |

**Exemple :**

```ts
{
  type: "cta",
  props: {
    title: "Prêt à démarrer votre projet ?",
    subtitle: "Échangeons sur vos besoins lors d'un appel de 30 minutes.",
    cta: { label: "Réserver un appel", href: "/contact" },
  },
},
```

---

## TextSection

**Objectif :** Afficher un contenu textuel structuré avec un titre et plusieurs paragraphes. Idéale pour les pages "À propos", "Mentions légales", ou toute page de contenu.

**Props disponibles :**

| Propriété | Obligatoire | Description |
|---|---|---|
| `title` | Oui | Titre de la page ou section |
| `paragraphs` | Oui | Tableau de chaînes de texte (un par paragraphe) |

**Exemple :**

```ts
{
  type: "text",
  props: {
    title: "Notre histoire",
    paragraphs: [
      "Fondée en 2018, notre agence accompagne les TPE et PME françaises.",
      "Notre équipe de 5 personnes combine design, développement et stratégie.",
      "Nous croyons qu'un bon site web doit être simple, rapide et accessible à tous.",
    ],
  },
},
```

---

## ContactInfo

**Objectif :** Afficher les informations de contact sous forme de cartes. Ne contient pas de formulaire — uniquement des liens et informations directes.

**Props disponibles :**

| Propriété | Obligatoire | Description |
|---|---|---|
| `title` | Oui | Titre de la section |
| `subtitle` | Non | Phrase d'introduction |
| `email` | Non | Adresse email (crée automatiquement un lien `mailto:`) |
| `linkedin` | Non | Lien LinkedIn `{ label, href }` |
| `location` | Non | Ville ou pays affiché en texte |

**Exemple :**

```ts
{
  type: "contactInfo",
  props: {
    title: "Contactez-nous",
    subtitle: "Pour toute demande, n'hésitez pas à nous écrire directement.",
    email: "bonjour@monagence.fr",
    linkedin: { label: "Suivez-nous sur LinkedIn", href: "https://linkedin.com/company/monagence" },
    location: "Paris, France",
  },
},
```

> Toutes les propriétés sauf `title` sont optionnelles. Affichez uniquement ce que vous souhaitez.

---

## Combiner les sections

Les sections se combinent librement dans n'importe quel ordre. Voici un exemple de page complète :

```ts
services: {
  seo: {
    title: "Nos services",
    description: "Découvrez toutes nos offres",
  },
  sections: [
    {
      type: "text",
      props: {
        title: "Nos services",
        paragraphs: ["Nous proposons trois offres adaptées à vos besoins."],
      },
    },
    {
      type: "features",
      props: {
        title: "Ce que nous faisons",
        items: [
          { title: "Sites vitrines", description: "Rapides, modernes et SEO-friendly." },
          { title: "Refonte", description: "Modernisation de votre site existant." },
          { title: "Maintenance", description: "Suivi et mises à jour régulières." },
        ],
      },
    },
    {
      type: "cta",
      props: {
        title: "Intéressé ?",
        subtitle: "Demandez un devis gratuit en 2 minutes.",
        cta: { label: "Demander un devis", href: "/contact" },
      },
    },
  ],
},
```
