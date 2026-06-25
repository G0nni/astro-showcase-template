# Guide d'utilisation avec une IA

## Principe

Ce projet est conçu pour être édité **en collaboration avec une IA** (comme Claude, ChatGPT, etc.).

Vous décrivez ce que vous voulez en français, l'IA modifie le fichier `site.ts` pour vous. Vous n'écrivez pas de code.

---

## Comment demander des modifications à l'IA

### Règle d'or

Donnez toujours à l'IA :
1. Le contenu du fichier `site.ts`
2. Une description en langage naturel de ce que vous voulez changer

### Exemple de prompt

```
Voici mon fichier site.ts :

[coller le contenu de site.ts ici]

---

Je voudrais que :
- Le titre du héro soit plus accrocheur pour une agence de design
- La section features ait 4 éléments au lieu de 3
- Le texte du CTA parle de "transformation digitale"

Modifie uniquement site.ts, ne touche pas aux composants.
```

---

## Exemples de demandes efficaces

### Modifier le contenu

> "Réécris le titre du héro pour qu'il soit plus percutant pour une agence de communication"

> "Change le sous-titre de la page d'accueil pour mentionner notre ville : Bordeaux"

> "Remplace le texte de la section 'À propos' par une présentation plus formelle"

### Ajouter du contenu

> "Ajoute une 4e feature dans la section features : 'Accompagnement' avec une description sur le suivi client"

> "Ajoute une section texte après le héro avec le titre 'Notre approche' et 3 paragraphes sur notre méthode"

> "Crée une nouvelle page 'Services' avec une section texte et un CTA vers /contact"

### Modifier la structure des pages

> "Déplace la section CTA avant la section features sur la page d'accueil"

> "Supprime la section features de la page d'accueil"

> "Ajoute une section contactInfo sur la page À propos"

### Modifier les informations globales

> "Change le nom du site de 'Mon Site Pro' vers 'Studio Lumière'"

> "Mets à jour l'email de contact vers bonjour@studiolumiere.fr"

> "Ajoute un lien 'Blog' dans la navigation"

---

## Ce que l'IA peut modifier (contenu uniquement)

L'IA doit modifier **uniquement `src/config/site.ts`** pour :

- Modifier des textes (titres, sous-titres, descriptions, labels)
- Ajouter ou supprimer des sections dans une page
- Réordonner des sections
- Ajouter ou supprimer des pages
- Modifier des liens (href)
- Modifier les informations globales (nom du site, navigation, footer)

---

## Ce que l'IA ne doit PAS modifier

- Les fichiers dans `src/components/` — ce sont les composants de design
- Les fichiers dans `src/pages/` — ce sont les routes
- Les fichiers dans `src/types/` — ce sont les types TypeScript
- `astro.config.mjs`, `tsconfig.json`, `package.json`

> **Exception :** Si vous demandez explicitement un changement de design ou de style, l'IA peut modifier les composants. Mais le contenu reste toujours dans `site.ts`.

---

## Modifier le design avec l'IA

Si vous voulez modifier l'apparence (couleurs, mise en page, typographie), décrivez-le ainsi :

> "Rends la section Hero plus luxueuse avec un fond sombre et du texte blanc"

> "Ajoute une icône avant chaque titre dans la section Features"

> "Donne au bouton CTA une couleur bleue marine"

Dans ce cas, l'IA modifiera les composants dans `src/components/sections/`. Le contenu de `site.ts` reste inchangé.

---

## Bonnes pratiques

- Toujours donner le fichier `site.ts` complet à l'IA avant de demander une modification
- Décrire le résultat voulu, pas la technique : "je veux un site plus premium" plutôt que "change le padding"
- Relire les modifications avant de les valider
- Faire une modification à la fois pour faciliter la vérification
