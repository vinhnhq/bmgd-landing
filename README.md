# BMGD Landing 🚀

A modern, high-performance marketing & product information website built with **Next.js App Router** and **TypeScript**.
The site powers BMGD’s public presence, showcasing insurance products, partner information, testimonials and more, while collecting leads through contact forms and tracking page visits – all without an external backend.

---

## Features

- ✨ **Static + Server Components** – Leveraging the latest Next.js 15 App Router features for optimal performance.
- 🎨 **Tailwind CSS & shadcn/ui** – Rapid UI development with an accessible Radix-powered component library.
- 🗄️ **Embedded SQLite (better-sqlite3)** – Zero-config database that stores contacts, testimonials & visit analytics via **Server Actions**.
- 📝 **Admin dashboard** – `/admin` route lists contacts & testimonials in searchable/sortable tables (TanStack Table).
- 📈 **Visit tracking** – Lightweight analytics recorded server-side for every page view.
- 🗂️ **PDF viewer**, carousels, animations (Framer Motion) and more rich components.
- 🐳 **Docker-ready** – Production image powered by the super-fast **Bun** runtime.

---

## Tech Stack

| Layer            | Tech                                                                       |
| ---------------- | -------------------------------------------------------------------------- |
| Framework        | Next.js 15 (App Router) • React 19 • TypeScript 5                           |
| Styling/UI       | Tailwind CSS 3 • shadcn/ui • Radix UI primitives • Lucide icons             |
| Data Layer       | better-sqlite3 • Zod (validation)                                          |
| State/Form       | React-Hook-Form • @hookform/resolvers • Date-Fns                            |
| Utilities        | Lodash • clsx • Embla Carousel • Framer Motion • React Hot Toast           |
| Dev Tooling      | Bun • Biome (lint/format) • Docker                                         |

---

## Project Structure (simplified)

```
src/
├─ app/                // Next.js routes (App Router)
│  ├─ actions/         // Server Actions – DB access
│  ├─ admin/           // Admin dashboard
│  ├─ products/        // Insurance product pages
│  └─ [...]            // Other marketing pages
├─ components/         // Re-usable UI & feature components
├─ db/
│  ├─ connection.ts    // SQLite connector
│  ├─ repositories/    // DB repositories (Contact, Testimonial, Visit)
│  └─ schema/          // CREATE TABLE DDL & types
└─ hooks/, lib/, constants.ts, etc.
```

See the full tree in the repository for details.

---

## Getting Started (Local Development)

1. **Install dependencies** (requires Node >= 18 or Bun >= 1.0):

   ```bash
   bun install           # preferred (fast)
   # or
   npm install
   ```

2. **Run the dev server**:

   ```bash
   bun run dev           # or: npm run dev
   ```

   Open <http://localhost:3000> in your browser.

3. A local SQLite file `bmgd-dev.db` is created automatically in the project root.
   To use a custom path, set the `DB_PATH` environment variable.

---

## Available Scripts

| Script            | Purpose                                             |
| ----------------- | --------------------------------------------------- |
| `dev`             | Start development server with hot-reload           |
| `build`           | Build the production bundle                        |
| `start`           | Start the built app (needs `build` first)          |
| `lint`            | Run Biome linter                                   |
| `format`          | Format code using Biome                            |

Run with `bun run <script>` or `npm run <script>` depending on your package manager.

---

## Environment Variables

| Variable  | Default           | Description                                   |
| --------- | ----------------- | --------------------------------------------- |
| `DB_PATH` | `bmgd-dev.db` (dev) / `bmgd-prod.db` (prod) | Absolute/relative path to SQLite DB file |
| `NODE_ENV`| `development`     | Switches DB default path & enables dev mode   |

Create a `.env.local` file to override variables locally.
Copy `env.sample` to `.env.local` (or `.env.production`) and adjust the values as needed.

---

## Database Migrations

Tables are created automatically on first access using SQL defined in `src/db/schema/**`.
If you need to reset the database, simply delete the `.db` file – it will be recreated.

---

## Docker Usage

1. **Build & run the container locally**:

   ```bash
   docker compose up --build
   # App available at http://localhost:3100
   ```

2. **Publish to Docker Hub** (requires login):

   ```bash
   ./scripts/build-and-push.sh
   ```

The production image is based on `oven/bun` and exposes port **3000** by default.

---

## Deployment

The app can be deployed to any platform that supports Docker or Node/Bun runtimes, e.g.:

- Vercel (recommended for Next.js)
- Render, Fly.io, Railway
- Self-hosted via Docker/Kubernetes

---

## Contributing 🤝

1. Fork & clone the repo
2. Create a feature branch: `git checkout -b feat/awesome`
3. Commit your changes following conventional commits
4. Open a Pull Request

Please run `bun run lint` & `bun run format` before pushing.

---

## License

This project is **private and proprietary**. All rights reserved. No part of this repository may be copied, modified, or distributed without explicit written permission from the owner.
