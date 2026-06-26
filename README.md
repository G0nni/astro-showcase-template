# Astro Showcase Template

Un générateur de site vitrine **data-driven** basé sur Astro + Tailwind CSS. Tout le contenu — structure, textes, styles — se configure dans un seul fichier.

**[→ Voir la démo en ligne](https://g0nni.github.io/astro-showcase-template/)**  
**[→ Catalogue des sections](https://g0nni.github.io/astro-showcase-template/showcase)**

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

Chaque page est une liste de sections. Chaque section a un `type`, des `props` (le contenu) et un `style` optionnel (le visuel). Le reste se génère automatiquement.

```ts
pages: {
  home: {
    seo: { title: "Accueil", description: "..." },
    sections: [
      {
        type: "hero",
        props: {
          title: "Mon titre principal",
          subtitle: "Un sous-titre accrocheur",
          ctaPrimary: { label: "Nous contacter", href: "/contact" },
        },
      },
      {
        type: "features",
        style: { background: "light" },
        props: {
          title: "Nos avantages",
          items: [
            { title: "Rapide", description: "Score Lighthouse optimal." },
            { title: "Simple", description: "Un fichier à modifier." },
          ],
        },
      },
      {
        type: "cta",
        style: { background: "gradient" },
        props: {
          title: "Prêt à démarrer ?",
          subtitle: "Contactez-nous.",
          cta: { label: "Démarrer", href: "/contact" },
        },
      },
    ],
  },
}
```

---

## Sections disponibles (10 types)

| Type | Description | Styles recommandés |
|---|---|---|
| `hero` | Bannière principale, titre + CTA | par défaut (dégradé clair) |
| `features` | Grille de cartes (services, avantages) | `white`, `dark` |
| `stats` | Chiffres clés en grande typographie | `light`, `primary` |
| `cta` | Appel à l'action | `dark`, `gradient` (défaut: `dark`) |
| `text` | Titre + paragraphes libres | `white`, `light` |
| `testimonials` | Citations clients avec auteur et rôle | `light`, `white` |
| `imageText` | Image + texte en 2 colonnes | `white`, `light` |
| `faq` | Questions / réponses | `light`, `white` |
| `contactInfo` | Email, LinkedIn, localisation | `white` |
| `logos` | Rangée de logos partenaires | `light` |

→ Voir toutes les sections en live : [/showcase](https://g0nni.github.io/astro-showcase-template/showcase)

---

## Personnalisation visuelle (`style`)

Chaque section accepte un champ `style` optionnel :

```ts
style: {
  background?: 'white' | 'light' | 'dark' | 'primary' | 'gradient'
  padding?:    'sm' | 'md' | 'lg'
}
```

Les textes et couleurs des cartes s'adaptent automatiquement au fond choisi.

---

## Créer une nouvelle page

Ajoutez une entrée dans `siteConfig.pages` et créez le fichier `.astro` correspondant :

```ts
// src/config/site.ts
pages: {
  services: {
    seo: { title: "Services", description: "..." },
    sections: [ ... ],
  },
}
```

```astro
// src/pages/services.astro
---
import BaseLayout from '../components/layout/BaseLayout.astro';
import SectionRenderer from '../components/SectionRenderer.astro';
import { siteConfig } from '../config/site';
const page = siteConfig.pages.services;
---
<BaseLayout title={page.seo.title} description={page.seo.description} pathname="/services">
  {page.sections.map(block => <SectionRenderer block={block} />)}
</BaseLayout>
```

---

## Utilisation avec une IA

Donnez le contenu de `site.ts` à votre assistant IA et décrivez ce que vous voulez :

> "Rends le titre du héro plus accrocheur pour une agence de design"

> "Ajoute une section testimonials avec 3 faux témoignages sur la page d'accueil"

> "Crée une nouvelle page Services : text + features + faq + cta gradient"

L'IA modifie uniquement `site.ts`. Le design reste intact.

---

## Déploiement

Ce projet se déploie automatiquement sur **GitHub Pages** via GitHub Actions (voir `.github/workflows/deploy.yml`).

Pour d'autres hébergeurs : `npm run build` génère un dossier `dist/` statique compatible Vercel, Netlify, Cloudflare Pages, etc.

---

## Templates de départ

Des configurations complètes prêtes à l'emploi dans [`src/config/templates/`](src/config/templates/) :

| Template | Usage |
|---|---|
| [`agence.ts`](src/config/templates/agence.ts) | Agence web / studio créatif |
| [`freelance.ts`](src/config/templates/freelance.ts) | Freelance / portfolio |
| [`saas.ts`](src/config/templates/saas.ts) | SaaS / produit digital |
| [`liberal.ts`](src/config/templates/liberal.ts) | Profession libérale (avocat, médecin…) |

Copiez le contenu du template choisi dans `src/config/site.ts`, **renommez l'export en `siteConfig`**, et personnalisez.

```ts
// Avant (dans le fichier template)
export const agenceConfig: SiteConfig = { ... }

// Après (dans votre site.ts)
export const siteConfig: SiteConfig = { ... }
```

> Sans ce renommage, toutes les pages du site renverront une erreur au démarrage.

---

## Contributing

Les contributions sont les bienvenues ! Voir [CONTRIBUTING.md](CONTRIBUTING.md) pour les instructions.

- **Ajouter une section** : type → composant → SectionRenderer → docs (4 étapes guidées)
- **Signaler un bug** : [ouvrir une issue](https://github.com/G0nni/astro-showcase-template/issues)
- **Proposer une feature** : ouvrez une issue avant de coder pour aligner sur la direction du projet

---

## Licence

[MIT](LICENSE) — libre d'utilisation, modification et distribution.

---

## Stack

- [Astro](https://astro.build) — génération de pages statiques
- [Tailwind CSS v4](https://tailwindcss.com) — design utilitaire
- TypeScript — typage des sections pour éviter les erreurs de config
