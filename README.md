# Majab's Deli

A delivery-first ordering site for Majab's Deli — a roadside grill serving Nkozi and Kayabwe, Uganda. Customers browse the menu, build a basket, and send their order straight to WhatsApp for confirmation and cash-on-delivery; there is no account or online payment flow.

## Features

- Menu grouped into Off the Grill, The Classics, Sides & Snacks, and Drinks & Shakes, with UGX pricing
- Cart saved in the browser (`localStorage`), with quantity controls and a promo-code field
- Delivery checkout with Nkozi-area zone selector, UMU hostel/room fields, delivery notes, and a prefilled WhatsApp message
- Cash-on-delivery messaging; no card forms or server-side checkout
- Home, Menu, Order, Cart, and Find Us pages, with opening hours and a map link
- Responsive layout with animated reveal sections and a shared design system

> Menu items, prices, opening hours, address, delivery fee/zones, and the WhatsApp number are placeholder content pending real business data — see `TODO.md`.

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 4; Plus Jakarta Sans and Archivo via `next/font`
- Client-side cart state (`CartProvider` + `localStorage`); no API backend or database

## Project structure

```
src/
├── app/            # Routes: home, menu, order, cart, find-us, globals.css
├── components/     # Nav, Footer, HeroDish, MenuGrid, CartProvider, CartView, AddToCart, ...
└── lib/            # menu.ts, cart.ts, whatsapp.ts, currency.ts
public/             # Static assets
design/             # Design reference notes
```

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To verify a production build:

```bash
npm run build
```

Other scripts: `npm run start` (serve the build) and `npm run lint`.

## Deployment

Deployed on Vercel; homepage: https://majab.vercel.app

## License / contact

All rights reserved; no license file is included. Maintained by edkaydev — https://github.com/edkaydev/majab
