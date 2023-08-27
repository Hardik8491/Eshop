/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "fakestoreapi.com",
      "links.papareact.com",
      "picsum.photos",
      "imagenes.muyinteresante.es",
      "firebasestorage.googleapis.com",
      "images-eu.ssl-images-amazon.com",
      "https://eshop-lime.vercel.app/api/webhook",
    ],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de", "fe"],
    defaultLocale: "en",
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};

module.exports = nextConfig;
