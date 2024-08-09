/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/studies",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
