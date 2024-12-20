/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["assets.aceternity.com", "github.com", "raw.githubusercontent.com",'images.unsplash.com'], // Add the hostname as strings
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors during builds
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during builds
  },
  reactStrictMode: false, // Disable React Strict Mode
};

export default nextConfig;
