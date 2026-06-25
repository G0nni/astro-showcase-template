# Contributing

Merci de l'intérêt pour ce projet ! Voici comment contribuer.

## Démarrage rapide

```bash
git clone https://github.com/G0nni/astro-showcase-template.git
cd astro-showcase-template
npm install
npm run dev   # http://localhost:4321
```

## Ajouter une nouvelle section

Une section = 4 étapes, toutes indépendantes :

### 1 — Type dans `src/types/site.ts`

```ts
export type MaSectionBlock = {
  type: 'maSection';
  style?: SectionStyle;
  props: {
    title?: string;
    // ... vos props
  };
};

// Ajouter à l'union SectionBlock :
export type SectionBlock = ... | MaSectionBlock;
```

### 2 — Composant dans `src/components/sections/MaSection.astro`

```astro
---
import type { MaSectionBlock, SectionStyle } from '../../types/site';
import SectionWrapper from './SectionWrapper.astro';

type Props = MaSectionBlock['props'] & { style?: SectionStyle };
const { title, style } = Astro.props;
const isDark = style?.background && ['dark', 'primary', 'gradient'].includes(style.background);
---

<SectionWrapper style={style}>
  {title && <h2 class={isDark ? 'text-white' : 'text-gray-900'}>{title}</h2>}
  <!-- votre contenu -->
</SectionWrapper>
```

### 3 — Enregistrement dans `src/components/SectionRenderer.astro`

```astro
import MaSection from './sections/MaSection.astro';
// ...
{block.type === 'maSection' && <MaSection {...(block as MaSectionBlock).props} style={(block as MaSectionBlock).style} />}
```

### 4 — Démo dans `src/pages/index.astro`

- Ajouter l'ancre dans le tableau `nav` (section "Sections disponibles")
- Ajouter la variable de démo et le bloc HTML dans le contenu

## Conventions

- **Nommage** : `CamelCase` pour les types, `kebab-case` pour les fichiers `.astro`
- **Style** : Tailwind utilitaire, pas de CSS custom sauf exception justifiée
- **Types** : TypeScript strict, pas de `any`
- **Dark mode** : Chaque section doit adapter ses couleurs si `isDark` est vrai
- **Accessibilité** : `alt` sur les images, `aria-label` sur les icônes

## Soumettre une PR

1. Fork le repo
2. Créez une branche : `git checkout -b feat/ma-section`
3. Commitez avec un message clair : `feat: add MaSection component`
4. Ouvrez une PR vers `main` avec une description et une capture d'écran si applicable

## Questions ?

Ouvrez une [issue](https://github.com/G0nni/astro-showcase-template/issues) ou contactez directement via GitHub.
