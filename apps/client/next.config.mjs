/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/my-study",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
