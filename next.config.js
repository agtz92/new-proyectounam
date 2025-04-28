/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // <-- Allow images from any domain without optimization
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow images from all domains
      },
    ], // <-- Leave empty if unoptimized
  },
}

module.exports = nextConfig
