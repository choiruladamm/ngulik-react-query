/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'robohash.org',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;
