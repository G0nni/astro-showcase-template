# Guide SEO

Le SEO (Search Engine Optimization) désigne l'ensemble des pratiques qui permettent à votre site d'apparaître dans les résultats de recherche Google, Bing, etc.

Ce projet est configuré pour un SEO optimal par défaut. Voici ce que vous pouvez personnaliser.

---

## Titre de page (`title`)

Le titre de page est le texte qui apparaît dans l'onglet du navigateur et dans les résultats de recherche Google.

**Où le modifier ?**

Dans `site.ts`, pour chaque page, dans la section `seo` :

```ts
home: {
  seo: {
    title: "Accueil",
    description: "...",
  },
  ...
}
```

Le titre affiché dans Google sera automatiquement formaté ainsi :

```
Accueil | Mon Site Pro
```

**Bonnes pratiques :**
- Entre 50 et 60 caractères maximum
- Inclure le mot-clé principal de la page
- Éviter les titres génériques comme "Page 1" ou "Bienvenue"

---

## Description (`description`)

La description apparaît sous le titre dans les résultats Google. Elle n'influence pas directement le classement, mais impacte le taux de clics.

**Exemple dans `site.ts` :**

```ts
about: {
  seo: {
    title: "À propos",
    description: "Découvrez l'histoire et les valeurs de notre agence de design à Paris.",
  },
},
```

**Bonnes pratiques :**
- Entre 120 et 160 caractères
- Décrire clairement le contenu de la page
- Inclure un appel à l'action si possible : "Découvrez", "En savoir plus", "Consultez"

---

## Description par défaut

Si une page n'a pas de description spécifique, le projet utilise la description par défaut définie dans `seo.defaultDescription` :

```ts
seo: {
  defaultTitle: "Mon Site Pro",
  defaultDescription: "Site vitrine rapide, moderne et optimisé SEO",
},
```

Personnalisez ces valeurs avec une description précise de votre activité.

---

## URL du site

L'URL de votre site est déclarée dans `global.url` :

```ts
global: {
  url: "https://monsite.fr",
},
```

Cette URL est utilisée pour générer les liens canoniques et les balises Open Graph (partages sur les réseaux sociaux).

**Important :** Mettez à jour cette URL avec votre domaine réel avant de déployer.

---

## Structure des URLs

Les pages sont accessibles aux URLs suivantes :

| Page | URL |
|---|---|
| Accueil | `https://monsite.fr/` |
| À propos | `https://monsite.fr/about` |
| Contact | `https://monsite.fr/contact` |

Pour une nouvelle page `services`, l'URL sera `https://monsite.fr/services`.

**Bonnes pratiques :**
- Utiliser des URLs courtes et descriptives
- Éviter les caractères spéciaux ou les majuscules
- Préférer les tirets aux underscores : `/nos-services` plutôt que `/nos_services`

---

## Partage sur les réseaux sociaux (Open Graph)

Le projet génère automatiquement les balises Open Graph pour un beau rendu lors du partage sur LinkedIn, Facebook, Twitter, etc.

Les informations utilisées sont :
- Le `title` de la page
- La `description` de la page
- L'`url` du site

Aucune configuration supplémentaire n'est nécessaire.

---

## Favicon

Le favicon (icône dans l'onglet du navigateur) est le fichier `public/favicon.svg`.

Pour le personnaliser, remplacez ce fichier par votre propre icône (au format SVG ou ICO).
