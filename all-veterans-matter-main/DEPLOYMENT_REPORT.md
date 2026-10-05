# Azure App Service Deployment Report

## Runtime detected

This repository is a Node.js application: a Next.js 16 App Router application using React 19 and TypeScript. It is a server-rendered Next.js app, not a static site or a .NET/Python application.

`package.json` and `package-lock.json` are in the repository root. There is no `yarn.lock` or `pnpm-lock.yaml`, and the application is not nested in a subfolder. The Azure App Service workflow and Static Web Apps workflow both point to the repository root.

## Root cause

The deployment log says Oryx was instructed to use the `nodejs` platform but could not determine its version. Although the root `package.json` was present, it did not declare a Node.js engine version. The deployment needs to use the repository root so Oryx can read that manifest; a different deployment root would also prevent detection.

The manifest now explicitly selects Node.js 22, matching the Node version configured in the GitHub Actions App Service workflow. If version detection still fails, verify that the deployed source/package root contains this root-level `package.json` and that the App Service runtime stack is set to Node.js 22.

## Build and startup

- Build command: `npm ci && npm run build`
- Startup command: `npm start` (runs `next start`)
- Existing scripts: `build` is `next build`; `start` is `next start`.

## Azure App Service recommendations

- Use **Linux** App Service with the **Node.js 22 LTS** runtime stack.
- Deploy the repository root; do not set a subfolder as the app root.
- Keep the App Service startup command as `npm start` (or leave it unset if the platform uses the `start` script automatically).
- If App Service is expected to run Oryx's remote build, enable `SCM_DO_BUILD_DURING_DEPLOYMENT=true` so dependencies and the production build are created during deployment. If the deployment workflow builds before publishing instead, deploy the complete production-ready app and avoid relying on an omitted build step.

## Files modified

- `package.json` — added the Node.js 22 engine declaration.
- `package-lock.json` — synchronized the root package metadata.
- `azure-pipelines.yml` — aligned its Node.js version with 22 and switched to lockfile-based installation.
- `.github/workflows/main_all-veterans-matter.yml` — switched to lockfile-based installation.
- `DEPLOYMENT_REPORT.md` — added this report.
