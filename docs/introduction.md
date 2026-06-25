# Introduction

## Qu'est-ce que ce projet ?

Ce projet est un **générateur de site vitrine** basé sur [Astro](https://astro.build). Il vous permet de créer un site web professionnel, rapide et optimisé pour le référencement (SEO) **sans avoir besoin de programmer**.

Tout le contenu de votre site — textes, titres, boutons, pages, sections — est centralisé dans **un seul fichier** :

```
src/config/site.ts
```

Vous modifiez ce fichier, le site se met à jour automatiquement.

---

## Pourquoi ce projet existe ?

Les outils classiques comme WordPress ou Wix sont souvent :

- **Lents** — chargement JavaScript lourd, hébergement coûteux
- **Complexes** — interfaces d'administration, plugins, mises à jour
- **Fragiles** — mises à jour cassantes, failles de sécurité

Ce projet offre une alternative radicalement plus simple :

- **Rapide** — Astro génère des pages HTML statiques, ultra-performantes
- **Stable** — pas de base de données, pas de serveur, pas de mise à jour à gérer
- **Modifiable par IA** — vous décrivez vos modifications en langage naturel à un assistant IA, qui édite `site.ts` pour vous

---

## Pour qui est fait ce projet ?

Ce projet est conçu pour les **non-développeurs** qui veulent :

- Un site vitrine professionnel sans apprendre à coder
- Un site qu'ils peuvent modifier eux-mêmes (ou avec l'aide d'une IA)
- Des performances et un SEO de qualité professionnelle
- Un déploiement simple sur Vercel ou Netlify

---

## Comment ça fonctionne en résumé ?

1. Vous éditez `src/config/site.ts` pour modifier votre contenu
2. Astro lit ce fichier et génère toutes les pages automatiquement
3. Vous déployez le site en une commande

C'est tout. Pas de base de données. Pas de panneau d'administration. Pas de code à écrire.
