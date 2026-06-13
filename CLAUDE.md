# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the dev server at http://localhost:3000
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint (`eslint-config-next`)

There is no test runner configured.

## Overview

`hardvanta` is a Next.js 14 (App Router) storefront for an electronics & robotics
store, styled with Tailwind CSS. JavaScript/JSX only — no TypeScript. The `@/*`
import alias maps to `src/*`.

## Architecture

- **Routing** — App Router under `src/app/`. Routes: `/` (home), `/products`
  (catalog with `?category=<slug>` filter via `searchParams`), `/cart`.
  `src/app/layout.js` is the root layout: it loads the Geist local fonts, wraps
  everything in `CartProvider`, and renders the shared `Navbar` / `Footer`.

- **Data layer** — `src/lib/data.js` holds all `categories` and `products` as
  in-memory mock arrays plus helpers (`getFeatured`, `getByCategory`,
  `getProduct`). The file note flags this as a placeholder to be replaced by a
  DB/Prisma later — treat it as the single source of product/category data for now.
  Category `icon` fields are string names of `lucide-react` icons.

- **Cart** — `src/context/CartContext.jsx` is the global cart store (React
  Context, `"use client"`). It persists to `localStorage` under the
  `hardvanta_cart` key and guards reads/writes behind a `hydrated` flag to avoid
  SSR mismatch. Consume it via the `useCart()` hook (throws if used outside the
  provider). Cart `total` prefers `salePrice ?? price`.

- **Components** — organized by area under `src/components/`: `layout/`
  (Navbar, Footer, Logo), `home/` (Hero, CategoryTiles), `products/`
  (ProductCard, ProductGrid), `ui/` (Button). Interactive components use
  `"use client"`.

- **Prices** — money is integer INR. Always render via `formatPrice()` in
  `src/utils/formatPrice.js` (Intl `en-IN` currency, no decimals).

## Styling conventions

- Brand colors are defined in `tailwind.config.js`: `navy`, `royal`, `silver`
  (each with `.light`/`.dark`), plus `cloud` (page background) and `ink`. Use
  these tokens rather than raw hex.
- Custom shadows `shadow-card` / `shadow-card-hover` and the `.container-page`
  utility (max-width page wrapper, defined in `src/app/globals.css`) are the
  standard page/card framing.
- Remote product images come from `images.unsplash.com` (allowlisted in
  `next.config.mjs`); add new image hosts there before using them with
  `next/image`.
