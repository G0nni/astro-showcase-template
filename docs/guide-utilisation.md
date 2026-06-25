# Guide d'utilisation

## Démarrer le projet

### 1. Installer les dépendances

Ouvrez un terminal dans le dossier du projet et tapez :

```
npm install
```

### 2. Lancer le site en mode développement

```
npm run dev
```

Votre site sera accessible à l'adresse : `http://localhost:4321`

Chaque modification que vous sauvegardez dans `site.ts` est visible immédiatement dans le navigateur.

---

## L'unique fichier à modifier : `src/config/site.ts`

**Vous n'avez besoin de toucher qu'à ce fichier.**

Il contient quatre grandes sections :

### `global` — Informations générales du site

```ts
global: {
  name: "Mon Site Pro",        // Nom affiché dans le header et l'onglet du navigateur
  url: "https://monsite.fr",   // URL de production (pour le SEO)
  description: "...",          // Description générale
},
```

### `navigation` — Liens du menu de navigation

```ts
navigation: [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Contact", href: "/contact" },
],
```

Chaque entrée a :
- `label` — le texte affiché dans le menu
- `href` — l'URL de destination

### `footer` — Pied de page

```ts
footer: {
  text: "© 2026 Mon Site Pro — Tous droits réservés",
},
```

### `pages` — Structure complète de chaque page

C'est ici que vous définissez le contenu de chaque page. Voir les sections suivantes.

---

## Modifier un texte

Trouvez la page concernée dans `pages`, puis la section (`hero`, `features`, etc.), et modifiez la valeur entre guillemets.

**Exemple :** Changer le titre de la page d'accueil

Avant :
```ts
title: "Un site moderne pour développer votre activité",
```

Après :
```ts
title: "Bienvenue chez Jean Dupont Architecte",
```

Sauvegardez le fichier. Le site se met à jour automatiquement.

---

## Changer l'ordre des sections

Chaque page est une liste de sections. Il suffit de changer l'ordre des blocs dans le tableau `sections`.

**Exemple :** Mettre le CTA avant les features

Avant :
```ts
sections: [
  { type: "hero", props: { ... } },
  { type: "features", props: { ... } },
  { type: "cta", props: { ... } },
]
```

Après :
```ts
sections: [
  { type: "hero", props: { ... } },
  { type: "cta", props: { ... } },
  { type: "features", props: { ... } },
]
```

---

## Ajouter une section à une page

Copiez-collez un bloc existant du même type, ou ajoutez un nouveau bloc en respectant la structure.

**Exemple :** Ajouter une section de texte à la page d'accueil

```ts
{
  type: "text",
  props: {
    title: "Notre histoire",
    paragraphs: [
      "Fondée en 2020, notre agence...",
      "Nous accompagnons nos clients...",
    ],
  },
},
```

---

## Créer une nouvelle page

### Étape 1 — Ajouter la page dans `site.ts`

Dans la section `pages`, ajoutez une nouvelle clé :

```ts
pages: {
  home: { ... },
  about: { ... },
  contact: { ... },

  // Nouvelle page :
  services: {
    seo: {
      title: "Nos services",
      description: "Découvrez nos offres",
    },
    sections: [
      {
        type: "text",
        props: {
          title: "Nos services",
          paragraphs: ["Nous proposons..."],
        },
      },
    ],
  },
},
```

### Étape 2 — Créer le fichier de page

Dans le dossier `src/pages/`, créez le fichier `services.astro` :

```astro
---
import BaseLayout from '../components/layout/BaseLayout.astro';
import SectionRenderer from '../components/SectionRenderer.astro';
import { siteConfig } from '../config/site';

const page = siteConfig.pages.services;
---

<BaseLayout
  title={page.seo.title}
  description={page.seo.description}
  pathname="/services"
>
  {page.sections.map((block) => (
    <SectionRenderer block={block} />
  ))}
</BaseLayout>
```

### Étape 3 — Ajouter le lien dans la navigation (optionnel)

Dans `navigation` dans `site.ts` :

```ts
{ label: "Services", href: "/services" },
```

---

## Supprimer une section

Il suffit de supprimer le bloc correspondant dans le tableau `sections` de la page.
