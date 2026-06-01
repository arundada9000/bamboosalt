# Arun Bamboo Salt - Premium Bamboo Salt Landing Page

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?logo=tailwind-css)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-Custom%20Non--Commercial-blue)](LICENSE)

Premium product landing page for **Arun Bamboo Salt** - educating customers on the traditional benefits of roasted bamboo salt and enabling direct sales via WhatsApp.

**Live**: [arunbamboosalt.com](https://arunbamboosalt.com)

---

## Pages

| Route | Description |
| ----- | ----------- |
| `/` | Home page with Hero, Products, Benefits, Process, and CTA sections |
| `/shop` | Product catalog & online store teaser (Phase 2 coming soon) |
| `/about` | Company story, vision & mission |

## Features

- **Next.js App Router** - Static rendering for `/` and `/shop`, optimized for SEO and Core Web Vitals
- **Tailwind CSS v4** - Custom design tokens via `@theme` in `globals.css` matching brand green (`#296B46`)
- **Lucide Icons** - Consistent SVG icon set across the interface
- **Responsive** - Mobile-first with animated hamburger menu and scroll-aware nav
- **WhatsApp Integration** - Dynamic deep links with pre-filled order intents per product
- **Centralized Contact Data** - Phone numbers, email, and address sourced from `app/data/contact.ts`

## Tech Stack

- **Framework**: Next.js 16 (App Router), React 19, TypeScript 5
- **Styling**: Tailwind CSS v4
- **Icons**: lucide-react
- **Data**: Centralized business contact (`app/data/contact.ts`) and product catalog (`app/data/products.ts`)
- **Components**: Modular sections - Navbar, Hero, Products, Benefits, Process, Trust, CTA, Footer

## Project Structure

```
app/
├── about/page.tsx          # About page
├── components/             # Reusable UI components
│   ├── AboutShort.tsx
│   ├── Benefits.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Process.tsx
│   ├── Products.tsx
│   └── Trust.tsx
├── data/
│   ├── contact.ts          # Business contact info (source of truth)
│   └── products.ts         # Product catalog data
├── shop/page.tsx           # Shop / store page
├── globals.css             # Tailwind theme + global styles
├── layout.tsx              # Root layout + SEO metadata
└── page.tsx                # Home page entry
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

<br />

<div align="center">
  <a href="https://sajilodigital.com.np" target="_blank">
    <img src="/images/SajiloDigital.png" alt="Sajilo Digital Logo" width="120" />
  </a>
  <h3>Proudly Designed & Developed by <a href="https://sajilodigital.com.np" style="color: #296B46; text-decoration: none;">Sajilo Digital</a></h3>
  <p>YOUR VISION, OUR INNOVATION</p>
</div>
