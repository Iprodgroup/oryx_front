/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'localhost',
        protocol: 'http',
      },
      {
        hostname: 'oryx.kz',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
