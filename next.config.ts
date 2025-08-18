import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://cdn.arturbacilla.dev/**')]
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/lancamento',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
