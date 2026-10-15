# Scale100x.ai website

Next.js 14 (App Router) marketing site for Scale100x.ai. Light theme, scroll-story landing page with a 3D India map.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production
```

Node 18.17+ is required.

## What's inside

| Path | What it does |
| --- | --- |
| `src/app/page.tsx` | The landing page (server-rendered, so Google sees all content) and JSON-LD schema |
| `src/app/layout.tsx` | SEO metadata: title, description, Open Graph, canonical |
| `src/app/sitemap.ts`, `robots.ts` | `/sitemap.xml` and `/robots.txt` |
| `src/components/MapStory.tsx` | Pinned hero: India map that zooms into Maharashtra, Delhi NCR and Bihar as you scroll (GSAP ScrollTrigger) |
| `src/components/IndiaMap.tsx` | The SVG map: states, outlet pins, network arcs, brand tags (rendered on the server) |
| `src/components/ScrollFx.tsx` | Other scroll effects: reveals, manifesto word fill, journey section, stacking cards, counters, tilt, planner, marquee |
| `src/components/Header.tsx` | Header, mobile menu |
| `src/data/content.ts` | Brands, FAQ, site info. Edit content here |
| `src/data/indiaMap.ts` | Generated map paths and city coordinates. Do not edit by hand |
| `scripts/build-map.mjs` | Regenerates `indiaMap.ts` (`npm run map`) |
| `src/app/v3.css`, `story.css` | Styles |

## Editing the map

- **Camera stops** (where each scroll scene zooms): `SHOTS` in `MapStory.tsx`.
- **Brand pins** (real locations): `BRAND_PINS` in `IndiaMap.tsx`.
- **Network cities** (illustrative): the `cities` list in `scripts/build-map.mjs`, then run `npm run map`.
- When you have the real outlet list, replace the illustrative cities with it and remove "(illustrative)" from the legend in `MapStory.tsx`.

## Map data

India boundaries come from the Survey of India state map via [DataMeet](https://github.com/datameet/maps) (CC BY 4.0), so the official boundary, including Jammu & Kashmir and Ladakh, is shown. Keep the credit line on the map.
