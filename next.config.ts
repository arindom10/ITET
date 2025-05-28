// next.config.js
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow all hostnames
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
