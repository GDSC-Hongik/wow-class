export const clientUrl =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? process.env.NEXT_PUBLIC_CLIENT_PROD_URL
    : process.env.NEXT_PUBLIC_CLIENT_DEV_URL;
