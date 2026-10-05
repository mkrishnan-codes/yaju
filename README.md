# Next.js Pages sample

A minimal Next.js page configured as a static export for Cloudflare Pages.

## Local development

```sh
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run build` to generate the static site in `out/`.

## Deploy to Cloudflare Pages

Connect the GitHub repository to Cloudflare Pages and use:

- Root directory: `/` (leave it blank if the dashboard treats blank as the repository root)
- Build command: `npm run build`
- Build output directory: `out`

Pages deploys automatically when you push to the connected branch. No Wrangler deploy command is needed.
