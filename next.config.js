/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
  });

const nextConfig = withBundleAnalyzer({
    eslint: {
        dirs: ["."],
        ignoreDuringBuilds: true,
    
    },

    webpack: (config) => {
        config.resolve.alias.canvas = false;
    
        return config;
      },

    trailingSlash: true,
    typescript: {
      ignoreBuildErrors: true,
    },
    reactStrictMode: false,
});

module.exports = nextConfig;
