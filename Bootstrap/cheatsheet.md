# 📘 Bootstrap 4.4.1 - Fiche Rapide

## 📐 Grille (Grid system)

- **Container**

  - `.container` → largeur fixe
  - `.container-fluid` → pleine largeur

- **Row**

  - `.row` → toujours autour des colonnes

- **Colonnes (12 au total)**

  - `.col-12` → 100%
  - `.col-6` → 50%
  - `.col-3` → 25%
  - **Breakpoints :**
    - `col-sm-*` ≥ 576px
    - `col-md-*` ≥ 768px
    - `col-lg-*` ≥ 992px
    - `col-xl-*` ≥ 1200px

- **Décalages (offsets)**

  - `offset-md-2` → laisse 2 colonnes vides à gauche (≥768px)

- **Ordre**
  - `order-1` → premier
  - `order-12` → dernier
  - `order-md-2`, `order-lg-3` … (varie selon la taille d’écran)

---

## 🎨 Couleurs

- **Backgrounds :**

  - `bg-primary` (bleu)
  - `bg-success` (vert)
  - `bg-danger` (rouge)
  - `bg-warning` (jaune)

- **Texte :**
  - `text-white`
  - `text-dark`
  - `text-center` (centré)

---

## 📏 Espacements

**Échelles :**

- `0` = 0px
- `1` = 0.25rem (4px)
- `2` = 0.5rem (8px)
- `3` = 1rem (16px)
- `4` = 1.5rem (24px)
- `5` = 3rem (48px)

- **Padding :**

  - `p-2` → padding global 0.5rem
  - `px-2` → padding horizontal
  - `py-2` → padding vertical

- **Margin :**
  - `m-2` → marge globale
  - `mt-2` → marge en haut
  - `mb-3` → marge en bas

---

## 🧭 Alignement (Flex utilities)

À utiliser sur `.row` :

- `justify-content-start` → aligné à gauche
- `justify-content-center` → centré
- `justify-content-end` → aligné à droite
- `justify-content-between` → espace égal entre les colonnes

---

## 🛠 Exemple type

```html
<div class="row">
  <div class="col-12 col-md-4 p-2 text-center text-white bg-primary">
    Bloc 1
  </div>
  <div class="col-12 col-md-4 p-2 text-center text-white bg-success">
    Bloc 2
  </div>
  <div class="col-12 col-md-4 p-2 text-center text-white bg-danger">Bloc 3</div>
</div>
```
