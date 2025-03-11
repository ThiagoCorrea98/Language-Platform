/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/Language-Platform",
  assetPrefix: "/Language-Platform/",
};

module.exports = nextConfig;
