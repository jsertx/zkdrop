/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/mergooor-pass",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
