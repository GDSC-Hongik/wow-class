import { routePath } from "constants/routePath";

export const isMobileAllowedUrl = (url: string) => {
  const allowedUrls = [routePath["auth"], routePath["my-study"]];

  return allowedUrls.some((allowedUrl) => url === allowedUrl);
};
