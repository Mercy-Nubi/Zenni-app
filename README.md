# Zenni app redesign · clickable prototype

An unofficial redesign concept of the Zenni Optical shopping app by **Mercy Nubi** (product designer & frontend), built as a clickable prototype in **React + TypeScript + Vite**.

**Live demo:** `https://<your-username>.github.io/<repo-name>/`

## What's inside

42 screens, all linked together:

- **Discover & browse:** home, categories, shape & colour, search, listing, accessories
- **Product:** product detail, gallery, reviews, fit & size, details, features, recommendations
- **Lens builder:** usage, progressives, bifocal info, lens type, ID Guard, specialty lenses, index, coating, add-ons, review
- **Buy:** cart (empty, with items), checkout, order confirmed
- **Account:** favorites, My Look, guest and signed-in profile, sign-in screen, virtual try-on

Open `/#/screens` for an overview of every screen. Each screen also has ← / → buttons to step through the flow.

## Run it locally

```bash
npm install
npm run dev
```

## Publish on GitHub Pages

The built site is already in the `docs/` folder.

1. Upload everything in this folder to your repository (including `docs/`).
2. In the repo go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, branch **main**, folder **/docs**, then **Save**.
4. Wait a minute or two and open `https://<your-username>.github.io/<repo-name>/`.

If you change the code, run `npm run build` to refresh `docs/`, then upload again.

## Project structure

```
src/
  App.tsx              routes for every screen
  main.tsx             app entry (HashRouter, so it works on GitHub Pages)
  components/Phone.tsx phone frame that scales on small screens
  components/Gallery.tsx  overview of all screens
  screens/*.tsx        one TypeScript component per screen
  screens/index.ts     screen list (path, title, height)
  lib/assets.ts        image helper
public/images/         screen images
docs/                  production build for GitHub Pages
```

## Note

Unofficial redesign concept for portfolio use only. The Zenni name, products and photography belong to Zenni Optical. Values shown in [brackets] are placeholders.
