/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix: "/blog-app",
  basePath: "/blog-app",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
