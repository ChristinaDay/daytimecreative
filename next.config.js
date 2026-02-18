/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ['cdn.christinamday.com'],
  },
  // output: 'export',
  
  // Optional: Configure asset prefix for CDN
  // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://cdn.christinamday.com' : '',

  // vega-embed depends on `canvas` for server-side rendering, but we only render charts
  // client-side (via dynamic import with ssr:false). Tell webpack to skip it on the server.
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [
        ...(Array.isArray(config.externals) ? config.externals : [config.externals]),
        'canvas',
      ];
    }
    return config;
  },
};

module.exports = nextConfig; 