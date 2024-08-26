export const baseUrl =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? process.env.NEXT_PUBLIC_PROD_BASE_URL
    : process.env.NEXT_PUBLIC_DEV_BASE_URL;
