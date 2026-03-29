# Alia & Bra — Website

A luxury lingerie brand website built with Vue 3 + Vite. Fully responsive across mobile, tablet, and desktop. Deployed via GitHub Pages.

**Live site:** https://fiveton.github.io/Alia/

---

## Tech Stack

- [Vue 3](https://vuejs.org/) — frontend framework
- [Vue Router 4](https://router.vuejs.org/) — client-side routing
- [Vite 8](https://vitejs.dev/) — dev server and build tool

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, brand pillars, featured products, story teaser, newsletter |
| `/boutique` | Shop — filterable product grid |
| `/about` | About — brand story, materials, Clover collection |
| `/contact` | Contact — inquiry form, atelier info, map |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) v18 or higher
- Git

### Clone & Install

```bash
git clone https://github.com/fiveton/Alia.git
cd Alia
npm install
```

### Run Dev Server

```bash
npm run dev
```

Open [http://localhost:5173/Alia/](http://localhost:5173/Alia/) in your browser.

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

### Preview Production Build Locally

```bash
npm run preview
```

---

## Project Structure

```
Alia/
├── public/               # Static assets
├── src/
│   ├── components/
│   │   ├── NavBar.vue    # Fixed navigation with mobile hamburger menu
│   │   └── SiteFooter.vue
│   ├── views/
│   │   ├── Home.vue
│   │   ├── Boutique.vue
│   │   ├── About.vue
│   │   └── Contact.vue
│   ├── router/
│   │   └── index.js      # Vue Router config
│   ├── style.css         # Global styles, CSS variables, layout
│   └── main.js
├── index.html
├── vite.config.js
└── package.json
```

---

## Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| `> 1200px` | Content capped at 1200px, centred on screen |
| `≤ 1024px` | 3-column product grid, adjusted spacing |
| `≤ 768px`  | Stacked layouts, hamburger nav menu |
| `≤ 600px`  | 2-column product grid, single-column pillars |

---

## Deployment

The site is deployed to GitHub Pages from the `dist/` folder. To redeploy after changes:

```bash
npm run build
# then push dist/ or use your GitHub Pages workflow
```

Base URL is configured in `vite.config.js`:

```js
base: '/Alia/'
```
