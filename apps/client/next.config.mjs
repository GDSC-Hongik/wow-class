/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/landing",
        permanent: false,
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
