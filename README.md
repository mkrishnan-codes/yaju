# Next.js Cloudflare static sample

A minimal Next.js page configured as a static export. No server runtime or UI libraries are needed.

## Local development

```sh
npm install
npm run dev
```

Open http://localhost:3000. To generate the static site, run `npm run build`; the files are written to `out/`.

## Test on Cloudflare locally

Build first with `npm run build`, then choose either target:

- **Workers static assets:** `npm run worker:dev` (Wrangler serves `out/` using `wrangler.jsonc`).
- **Pages:** `npm run pages:dev` (Wrangler Pages serves `out/`).

## Deploy

Authenticate Wrangler with `npx wrangler login`.

- **Workers:** `npm run worker:deploy`.
- **Pages:** create a Pages project named `next-static-sample`, then run `npm run pages:deploy`. For a Git-connected Pages project, set the build command to `npm run build` and the output directory to `out`.
