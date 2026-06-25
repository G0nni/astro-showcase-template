# Déploiement

## Prérequis

- [Node.js](https://nodejs.org) version 22 ou supérieure
- Un compte [Vercel](https://vercel.com) ou [Netlify](https://netlify.com) (gratuit)

---

## Étape 1 — Préparer le projet

### Installer les dépendances

```
npm install
```

### Vérifier que le site fonctionne en local

```
npm run dev
```

Visitez `http://localhost:4321` pour vérifier que tout s'affiche correctement.

### Mettre à jour l'URL de production

Dans `src/config/site.ts`, remplacez l'URL par votre domaine réel :

```ts
global: {
  url: "https://votre-domaine.fr",
},
```

### Générer le build de production

```
npm run build
```

Cette commande génère le dossier `dist/` avec tous les fichiers statiques prêts à être déployés.

Pour prévisualiser le build :

```
npm run preview
```

---

## Déployer sur Vercel

Vercel est la plateforme recommandée pour les projets Astro. Le déploiement est gratuit pour les sites personnels et professionnels.

### Option A — Via l'interface web (recommandé)

1. Créez un compte sur [vercel.com](https://vercel.com)
2. Importez votre dépôt GitHub depuis le tableau de bord Vercel
3. Vercel détecte automatiquement qu'il s'agit d'un projet Astro
4. Cliquez sur **Deploy**

À chaque fois que vous pushez une modification sur GitHub, Vercel redéploie automatiquement votre site.

### Option B — Via la ligne de commande

```
npm install -g vercel
vercel
```

Suivez les instructions dans le terminal.

---

## Déployer sur Netlify

1. Créez un compte sur [netlify.com](https://netlify.com)
2. Cliquez sur **Add new site > Import an existing project**
3. Connectez votre dépôt GitHub
4. Configurez le build :
   - **Build command :** `npm run build`
   - **Publish directory :** `dist`
5. Cliquez sur **Deploy site**

---

## Déployer sans GitHub (fichiers statiques)

Si vous n'utilisez pas GitHub, vous pouvez déployer manuellement :

1. Générez le build : `npm run build`
2. Le dossier `dist/` contient votre site complet
3. Uploadez ce dossier sur votre hébergeur via FTP ou l'interface web

Cette méthode fonctionne avec n'importe quel hébergeur web standard (OVH, o2switch, Infomaniak, etc.).

---

## Mettre à jour le site après modifications

### Avec Vercel ou Netlify (via GitHub)

1. Modifiez `src/config/site.ts`
2. Commitez et pushez sur GitHub
3. Le site se redéploie automatiquement en 1 à 2 minutes

### Sans GitHub (manuel)

1. Modifiez `src/config/site.ts`
2. Lancez `npm run build`
3. Uploadez le nouveau dossier `dist/` sur votre hébergeur

---

## Nom de domaine personnalisé

Vercel et Netlify permettent tous les deux de connecter un nom de domaine personnalisé gratuitement.

**Sur Vercel :**
- Allez dans **Settings > Domains** de votre projet
- Ajoutez votre domaine et suivez les instructions DNS

**Sur Netlify :**
- Allez dans **Site settings > Domain management**
- Cliquez sur **Add custom domain**

Une fois votre domaine configuré, pensez à mettre à jour `global.url` dans `site.ts` avec votre vrai domaine.
