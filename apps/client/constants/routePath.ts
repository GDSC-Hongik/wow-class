import { baseUrl } from "constants/environment";

export const routePath = {
  auth: "/auth",
  ["github-oauth"]: `${baseUrl}/oauth2/authorization/github`,
  landing: "/landing",
  ["my-study"]: "/my-study",
  ["auth-error-during-recruitment"]: "/auth-error-during-recruitment",
  ["auth-error-after-recruitment"]: "/auth-error-after-recruitment",
  onboarding: "https://onboarding.gdschongik.com",
} as const;
