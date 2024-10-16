/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com"
      }
    ]
  },
  basePath: process.env.NODE_ENV === 'production' ? '/pokedex' : '',
  assetPrefix: '/pokedex',
};

export default nextConfig;
