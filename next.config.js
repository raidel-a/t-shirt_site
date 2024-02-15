/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
// await import("./src/env.js");

/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    // domains: ["daisyui.com", "leadershipmemphis.org", "www.sketchappsources.com"],
  },
  experimental: {},
  basePath: "/t-shirt_site",
  output: "export", // This is required for static site generation
  reactStrictMode: true,

  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en",
  // },
};

module.exports = nextConfig