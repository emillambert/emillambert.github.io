# emilwl.me

Personal portfolio for Emil Lambert — aerospace engineering, AI, software and startups.

## Stack

- Next.js App Router
- TypeScript
- Motion for React
- Custom CSS / visual system
- Static export to GitHub Pages

## Local development

```bash
npm install
npm run dev
```

## Production

`npm run build` writes a static export to `out/`. Pull requests run the production build; pushes to `main` deploy to GitHub Pages and the custom domain `emilwl.me`.

## Content model

Flagship projects and Lab cards live in `data/projects.ts`, so project copy, metrics and links can be maintained without editing page layouts.
