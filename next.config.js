/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["storegg-server-master.herokuapp.com"],
  },
  env: {
    NEXT_PUBLIC_API: "https://storegg-server-master.herokuapp.com",
  },
};

module.exports = nextConfig;
