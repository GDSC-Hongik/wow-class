/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/auth",
        permanent: false,
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
