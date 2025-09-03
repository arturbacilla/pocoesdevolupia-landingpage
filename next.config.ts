import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://cdn.arturbacilla.dev/**')]
  },
  crossOrigin: 'anonymous',
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/replay',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
