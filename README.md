# Astro Showcase Template

Un générateur de site vitrine **data-driven** basé sur Astro + Tailwind CSS. Tout le contenu se modifie dans un seul fichier — aucune compétence en développement requise.

---

## Démarrage rapide

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # génère dist/
```

---

## Principe

**Un seul fichier à modifier : `src/config/site.ts`**

Ce fichier contient l'intégralité du contenu de votre site : textes, titres, boutons, structure des pages. Vous l'éditez, le site se met à jour automatiquement.

```ts
// src/config/site.ts
export const siteConfig = {
  global: { name: "Mon Site", url: "https://monsite.fr" },

  navigation: [
    { label: "Accueil", href: "/" },
    { label: "Contact", href: "/contact" },
  ],

  pages: {
    home: {
      seo: { title: "Accueil", description: "..." },
      sections: [
        {
          type: "hero",
          props: {
            title: "Mon titre",
            subtitle: "Mon sous-titre",
            ctaPrimary: { label: "Contact", href: "/contact" },
          },
        },
        // ... autres sections
      ],
    },
  },
};
```

---

## Sections disponibles

| Section | Usage |
|---|---|
| `hero` | Introduction principale, titre + CTA |
| `features` | Grille d'avantages ou de services |
| `cta` | Appel à l'action à fond sombre |
| `text` | Contenu textuel, paragraphes |
| `contactInfo` | Email, LinkedIn, localisation |

→ Détails et exemples : [docs/catalogue-sections.md](docs/catalogue-sections.md)

---

## Utilisation avec une IA

Donnez le contenu de `site.ts` à votre assistant IA et décrivez ce que vous voulez en français :

> "Rends le titre du héro plus accrocheur pour une agence de design"

> "Ajoute une 4e feature dans la section features"

> "Crée une nouvelle page Services avec une section texte et un CTA"

L'IA modifie uniquement `site.ts`. Le design reste intact.

→ Guide complet : [docs/guide-ia.md](docs/guide-ia.md)

---

## Documentation complète

| Document | Contenu |
|---|---|
| [Introduction](docs/introduction.md) | Qu'est-ce que ce projet, pour qui |
| [Guide d'utilisation](docs/guide-utilisation.md) | Modifier du texte, ajouter des sections, créer des pages |
| [Guide IA](docs/guide-ia.md) | Comment collaborer avec une IA pour éditer le site |
| [Catalogue des sections](docs/catalogue-sections.md) | Toutes les sections avec leurs props et exemples |
| [SEO](docs/seo.md) | Titres, descriptions, URLs, Open Graph |
| [Déploiement](docs/deploiement.md) | Vercel, Netlify, hébergement statique |

---

## Stack

- [Astro](https://astro.build) — génération de pages statiques
- [Tailwind CSS v4](https://tailwindcss.com) — design utilitaire
- TypeScript — typage des sections pour éviter les erreurs
