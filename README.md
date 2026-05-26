# VibeCode Editor (Next.js)

A production-ready, full-stack browser code editor with project templates, Monaco-based editing, real-time file management, web-container preview/runtime, and optional AI code suggestions.

## Overview

VibeCode Editor is a Next.js App Router application that lets users:
- Sign in with OAuth (GitHub/Google).
- Create and manage code playgrounds.
- Edit files in a Monaco editor with tabs and unsaved-change tracking.
- Run and preview projects directly in the browser using WebContainers.
- Persist playground metadata and template file trees in MongoDB via Prisma.
- Request context-aware inline code suggestions through an API route.

---

## Core Features

- **Authentication & session management**
  - NextAuth v5 with GitHub and Google providers.
  - Prisma adapter + JWT session strategy.
- **Playground dashboard**
  - Create, duplicate, rename, delete, and star playground projects.
  - Template-driven starter projects (React, Next.js, Express, Vue, Hono, Angular).
- **Editor experience**
  - Monaco-based code editor.
  - File tree operations (create, rename, delete files/folders).
  - Multi-tab editing with save/save-all and keyboard shortcuts.
- **In-browser runtime**
  - WebContainer boot + terminal/preview integration.
  - Live preview panel toggling.
- **AI suggestion endpoint**
  - Server route performs context analysis and returns generated suggestion text.
  - Current implementation targets a local inference endpoint (configurable).

---

## Tech Stack

- **Framework:** Next.js 15 (App Router, TypeScript)
- **UI:** React 19, Tailwind CSS v4, Radix UI primitives
- **Auth:** NextAuth v5, OAuth providers (GitHub, Google)
- **Database:** MongoDB + Prisma
- **Editor/Runtime:** Monaco Editor + WebContainer API
- **State & forms:** Zustand, React Hook Form, Zod

---

## Project Structure

```text
app/                    # Next.js app routes, layouts, API routes
modules/                # Feature modules (auth, dashboard, playground, webcontainers)
components/             # Reusable UI components
lib/                    # Shared utilities and DB client
prisma/                 # Prisma schema
vibecode-starters/      # Starter template project files
public/                 # Static assets
```

---

## Prerequisites

- **Node.js** 20+
- **npm** 10+
- **MongoDB** database (Atlas or self-hosted)
- **OAuth apps** for GitHub and Google
- (Optional) **Local LLM runtime** endpoint for AI suggestions

---

## Environment Variables

Create a `.env` file at the repository root:

```bash
# Prisma / MongoDB
DATABASE_URL="mongodb+srv://<user>:<password>@<cluster>/<db>?retryWrites=true&w=majority"

# NextAuth
AUTH_SECRET="<strong-random-secret>"
NEXTAUTH_URL="http://localhost:3000"

# GitHub OAuth
AUTH_GITHUB_ID="<github-client-id>"
AUTH_GITHUB_SECRET="<github-client-secret>"

# Google OAuth
AUTH_GOOGLE_ID="<google-client-id>"
AUTH_GOOGLE_SECRET="<google-client-secret>"
```

> If you plan to use AI suggestions, ensure your inference server is running and update `app/api/code-completion/route.ts` if your endpoint/model differs from the default local URL.

---

## Local Development

```bash
npm install
npx prisma generate
npm run dev
```

Open: `http://localhost:3000`

### Helpful commands

```bash
npm run lint
npm run build
npm run start
```

---

## Database Notes (MongoDB + Prisma)

- Prisma is configured with the MongoDB provider in `prisma/schema.prisma`.
- Models include users, linked OAuth accounts, playgrounds, template file snapshots, star marks, and chat messages.
- When schema changes are made, regenerate the Prisma client:

```bash
npx prisma generate
```

---

## AI Suggestion Service

The `POST /api/code-completion` route:
1. Validates editor payload input.
2. Detects language/framework and cursor context.
3. Builds a completion prompt.
4. Calls an AI inference endpoint.
5. Returns cleaned suggestion text + metadata.

Default target is currently a local service (`http://localhost:11434/api/generate`). For production, replace this with your managed inference provider and secure it behind auth/rate limits.

---

## Production Readiness Checklist

Before deploying, ensure:

- [ ] All required environment variables are configured.
- [ ] `AUTH_SECRET` is strong and rotated per environment.
- [ ] OAuth callback URLs are set correctly for each environment.
- [ ] MongoDB network access and least-privilege credentials are configured.
- [ ] AI completion endpoint is secured and monitored.
- [ ] Error tracking/logging (e.g., Sentry/OpenTelemetry) is enabled.
- [ ] Rate limiting is applied to public API routes.
- [ ] CI runs lint/build checks on pull requests.
- [ ] Dependency and container/image scanning are integrated.

---

## Deployment

You can deploy on Vercel or any Node-compatible platform.

### Vercel quick path
1. Import repository.
2. Set all environment variables.
3. Deploy.

If using external services (MongoDB, AI endpoints), confirm network and CORS policies for your target environment.

---

## Security Considerations

- Never commit `.env` files or secrets.
- Restrict OAuth scopes to minimum required.
- Sanitize and validate user-generated content.
- Apply API abuse protection (rate limiting, auth checks).
- Keep dependencies updated and patch critical CVEs promptly.

---

## License

No license file is currently included in this repository. Add a `LICENSE` file before public/commercial distribution.
