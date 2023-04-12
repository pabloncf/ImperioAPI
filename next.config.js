const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  webpack: (config) => {
    config.resolve.alias["@"] = path.join(__dirname);
    return config;
  },
  ...nextConfig,
};

