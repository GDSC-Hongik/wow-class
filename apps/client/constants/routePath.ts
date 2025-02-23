import { baseUrl } from "constants/environment";

export const routePath = {
  auth: "/auth",
  ["github-oauth"]: `${baseUrl}/oauth2/authorization/github`,
  landing: "/landing",
  ["my-study"]: "/my-study",
  ["auth-error-during-recruitment"]: "/auth-error-during-recruitment",
  ["auth-error-after-recruitment"]: "/auth-error-after-recruitment",
  ["attendance-check"]: "/my-study/attendance-check",
  ["attendance-complete"]: "/my-study/attendance-complete",
  ["study-apply"]: "/study-apply",
  ["study-application-modal"]: "/study-apply/study-application",
  ["study-cancellation-modal"]: "/study-apply/study-cancellation",
  ["my-assignment"]: "/my-study/my-assignment",
  ["my-page"]: "/my-page",
  ["my-page-logout"]: "/my-page/logout",
  onboarding:
    process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
      ? "https://onboarding.wawoo.dev"
      : "https://dev-onboarding.wawoo.dev",
  github: "https://github.com",
  admin:
    process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
      ? "https://mentor.study.wawoo.dev"
      : "https://dev-mentor.study.wawoo.dev",
} as const;
