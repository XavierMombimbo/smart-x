# Smart-X Congo

**Site vitrine bilingue · HTML, CSS et JavaScript**

Site de présentation de Smart-X Congo : services numériques, projets et présentation du fondateur.

[Site de Smart-X Congo](https://www.smartxcongo.com) · [Profil du développeur](https://github.com/XavierMombimbo)

## Fonctionnalités présentes

- Interface français / anglais à partir d'attributs `data-fr` et `data-en`.
- Présentation des services web, mobiles et de solutions intelligentes.
- Section projets, notamment Munganga360.
- Mise en page responsive et animations au défilement.
- Métadonnées SEO, Open Graph, données structurées, sitemap et `robots.txt`.

## Stack

HTML5, CSS3 et JavaScript natif. Les icônes Font Awesome sont chargées depuis un CDN. Aucun serveur applicatif ni étape de compilation n'est nécessaire pour consulter ce site statique.

## Consulter en local

```bash
git clone https://github.com/XavierMombimbo/smart-x.git
cd smart-x
python -m http.server 8000 --bind 127.0.0.1
```

Ouvrir ensuite `http://127.0.0.1:8000`. Python 3 sert uniquement à lancer un petit serveur HTTP local ; tout autre serveur de fichiers statiques convient également.

## Organisation du dépôt

```text
index.html       Page principale, métadonnées et interactions intégrées
css/style.css    Feuille de style référencée par index.html
js/lang.js       Fonction de changement de langue
assets/          Logos et illustrations
robots.txt       Directives pour les robots d'indexation
sitemap.xml      Plan du site
```

Le dépôt contient également des fichiers `style.css` et `lang.js` à la racine. La page principale référence actuellement les versions des dossiers `css/` et `js/`.

## Modifier le contenu

1. Mettre à jour `index.html` et conserver les textes français et anglais cohérents.
2. Modifier les styles dans `css/style.css`.
3. Vérifier les chemins d'images et les liens.
4. Tester les deux langues ainsi que l'affichage mobile et desktop.
5. Vérifier les URL canoniques, le sitemap et les métadonnées avant un changement de domaine.

Ce dépôt présente un site statique ; le contenu du site officiel peut évoluer indépendamment de cette version.
