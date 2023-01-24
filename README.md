# Next.js + WordPress Examination project

This is a [Next.js](https://nextjs.org/) project configured for development against a headless WordPress CMS.


## Getting Started

First, go to the .env.local fil and add the WORDPRESS URL and the STRIPE keys.
I will send all the keys in a separate folder on its learning. 

NEXT_PUBLIC_WORDPRESS_URL=********
NEXT_PUBLIC_CONSUMER_KEY=********
NEXT_PUBLIC_CONSUMER_SECRET=********
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=********
STRIPE_SECRET_KEY=********


2.run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.


## Deploy on Vercel

 My Next.js app is deployed on Vercel. Open [https://examen-iota.vercel.app/]
