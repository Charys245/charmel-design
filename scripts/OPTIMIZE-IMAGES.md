# Image Optimizer Script

Script Node.js pour convertir et optimiser les images pour le web.

## Installation (une seule fois)

```bash
pnpm install
pnpm approve-builds   # Autoriser sharp à compiler ses binaires natifs
```

## Utilisation

### Optimiser toutes les images du projet

```bash
pnpm optimize-images
```

### Voir ce qui va se passer sans rien modifier

```bash
pnpm optimize-images --dry-run
```

### Afficher l'aide

```bash
pnpm optimize-images --help
```

## Options disponibles

| Option           | Description                    | Défaut               |
| ---------------- | ------------------------------ | --------------------- |
| `--input, -i`  | Dossier source                 | `src/assets/images` |
| `--output, -o` | Dossier destination            | Même que source      |
| `--max-width`  | Largeur max en px              | `1920`              |
| `--quality`    | Qualité WebP (1-100)          | `80`                |
| `--backup`     | Garder les originaux (.backup) | `false`             |
| `--dry-run`    | Prévisualiser sans modifier   | `false`             |

## Exemples

```bash
# Qualité plus haute, largeur max 1200px
pnpm optimize-images --max-width 1200 --quality 90

# Garder les originaux en backup
pnpm optimize-images --backup

# Optimiser un autre dossier
pnpm optimize-images --input public/images

# Combiner plusieurs options
pnpm optimize-images --max-width 1200 --quality 85 --backup
```

## Réutiliser sur un autre projet

1. Copie `scripts/optimize-images.js` dans ton projet
2. Ajoute dans `package.json`:

```json
{
  "scripts": {
    "optimize-images": "node scripts/optimize-images.js"
  },
  "devDependencies": {
    "sharp": "^0.33.5"
  }
}
```

3. Installe et lance:

```bash
pnpm install
pnpm approve-builds   # Autoriser sharp à compiler
pnpm optimize-images
```

## Optimiser les SVG (optionnel)

Ce script ne traite pas les SVG car ils sont déjà vectoriels et très légers.

Pour optimiser les SVG, utilise [SVGO](https://github.com/svg/svgo) qui supprime les métadonnées inutiles:

```bash
pnpm add -D svgo
npx svgo src/assets/images/mon-fichier.svg
```

Ou pour optimiser tous les SVG d'un dossier:

```bash
npx svgo -f src/assets/images/
```

## Après optimisation

Les images sont converties en `.webp`. Tu dois mettre à jour tes imports:

```tsx
// Avant
import photo from "./photo.jpg";

// Après
import photo from "./photo.webp";
```
