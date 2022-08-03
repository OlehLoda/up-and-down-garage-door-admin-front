/** @type {import('next').NextConfig} */
const withImage = require("next-images");

const nextConfig = withImage({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    disableStaticImages: true,
    loader: "imgix",
    path: "https://example.com/myaccount/",
    domains: ["thumbs.dreamstime.com"],
  },
});

module.exports = nextConfig;
