# stemosoft.com

Official `stemosoft.com` website project.

This repository is based on the Evie template stack and has been customized for stemosoft's public site and app documentation/privacy pages.

## Live site

- Production URL: [https://stemosoft.com](https://stemosoft.com)

## Tech stack

- Node.js + Express
- EJS templates
- Sass (compiled via Gulp)
- Vanilla JS (bundled via Gulp)
- BrowserSync + Nodemon for local development

## Project architecture

The codebase contains **two render modes**:

- `src/docs/`: current stemosoft website + app documentation/privacy pages
- `src/theme/`: legacy Evie theme pages (kept in repository)

The active mode is controlled in `app.js`:

- `global.docsMode = true` -> serves `src/docs` (current default)
- `global.docsMode = false` -> serves `src/theme`

## Key directories

```text
.
├── app.js                      # Express entry point + docs/theme mode switch
├── gulpfile.js                 # Main gulp tasks
├── gulp_tasks/                 # Build/dev pipelines
├── src/
│   ├── docs/
│   │   ├── index.ejs
│   │   ├── router.js
│   │   ├── privacyPolicies/
│   │   ├── partials/
│   │   │   └── metadata.ejs    # Central SEO/meta tags
│   │   ├── sass/
│   │   ├── public/             # Dev-compiled CSS/JS
│   │   └── assets/             # Images, favicon, robots, sitemap, manifest
│   └── theme/
│       ├── *.ejs
│       ├── sass/
│       ├── js/
│       ├── public/             # Dev-compiled CSS/JS
│       └── assets/
└── package.json
```

## Prerequisites

- Node.js 18+ (recommended)
- npm 9+

## Install

```bash
npm install
```

## Local development

Start full dev workflow:

```bash
npm start
```

This runs Gulp default task:

- cleans generated dev assets
- compiles docs + theme JS/CSS into `src/**/public`
- starts Express via Nodemon on `http://localhost:3000`
- starts BrowserSync proxy on `http://localhost:7000`
- watches EJS/Sass/JS changes and reloads automatically

Recommended preview URL in browser: `http://localhost:7000`

## Build commands

### 1. Theme build (legacy Evie output)

```bash
npm run build
```

Output: `Evie/`

### 2. Production docs build

```bash
npm run prod
```

Output: `dist/`

### 3. Docs package build (includes zips)

```bash
npm run docs
```

Outputs include:

- `docs/` static build
- `docs/downloads/evie_theme.zip`
- `docs/downloads/evie_source.zip`

## Environment variables

- `ANALYTICS`: optional analytics snippet/value injected into templates via `site_analytics`

Example:

```bash
ANALYTICS="<your-value>" npm start
```

## SEO and metadata

SEO is centralized in:

- `src/docs/partials/metadata.ejs`

It currently supports:

- canonical URLs
- robots directives
- Open Graph tags
- Twitter card tags
- JSON-LD structured data
- favicon and touch icon links

Page-level SEO values are set inside each EJS page before including metadata:

- `pagePath`
- `pageTitle`
- `pageDescription`
- `pageKeywords`
- `pageImage`
- `pageImageAlt`
- `pageType`
- `pageJsonLd` (optional override)

### SEO assets

Located in `src/docs/assets`:

- `favicon.ico`
- `favicon-32x32.png`
- `favicon-16x16.png`
- `apple-touch-icon.png`
- `site.webmanifest`
- `robots.txt`
- `sitemap.xml`

## Adding or updating app documentation pages

1. Create or update an EJS page in:
   - `src/docs/privacyPolicies/`
2. Register route in:
   - `src/docs/router.js`
3. Set page SEO variables in the page head (before metadata include).
4. Add/update sitemap entry in:
   - `src/docs/assets/sitemap.xml`

## Common maintenance tasks

### Recompile docs CSS only

```bash
npx gulp style_dev_docs
```

### Recompile theme CSS only

```bash
npx gulp style_dev_theme
```

### Rebuild docs and theme JS for dev

```bash
npx gulp scripts_dev_docs scripts_dev_theme
```

## Notes

- Some package metadata (name/repository) still references the original Evie template and has not yet been fully renamed.
- The active product site is under `src/docs` with `global.docsMode = true`.

## License

MIT (see `LICENSE`).
