# LOOP store

React + Tailwind + Vite storefront (hash routing, so it works on any static host).

## Run
    npm install
    npm run dev       # http://localhost:5173
    npm run build     # outputs dist/
    npm run preview

## Where things live
- `src/data/products.js`: ALL product data. Add a product to `PRODUCTS`, and its category/tags/stock/dimensions to `EXTRA`. Real photos: add `images: ['/a.jpg','/b.jpg']` (files in `public/`).
- `src/lib/services.js`: integration points (`createOrder`, `sendMessage`, `subscribe`). Replace with Stripe/Razorpay, an email API and a newsletter provider.
- `src/components/`, `src/pages/`: UI. Templates use `htm` (JSX-like tagged templates, no compile step).
- `src/App.js`: routes, cart state (persisted in localStorage), SEO titles.
