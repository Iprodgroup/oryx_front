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
        hostname: 'cms.oryx.kz',
        protocol: 'https',
      },
    ],
  },
  experimental: {
    workerThreads: false,
    cpus: 4,
  },
};

export default nextConfig;
