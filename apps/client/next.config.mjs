import { withSentryConfig } from "@sentry/nextjs";
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

export default withSentryConfig(nextConfig, {
  org: process.env.NEXT_PUBLIC_SENTRY_ORG,
  project: process.env.NEXT_PUBLIC_SENTRY_PROJECT,
  silent: !process.env.CI,
  authToken: process.env.NEXT_PUBLIC_SENTRY_TOKEN,
  widenClientFileUpload: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});
