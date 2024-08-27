import { baseUrl } from "constants/environment";

export const routePath = {
  auth: "/auth",
  ["github-oauth"]: `${baseUrl}/oauth2/authorization/github`,
  landing: "/landing",
  ["my-study"]: "/my-study",
  ["attendance-check"]: "/my-study/attendance-check",
  ["my-assignment"]: "/my-study/my-assignment",
  ["my-assignment-repository-url-confirmation"]:
    "/my-study/my-assignment/repository-url/confirmation",
  ["study-apply"]: "/study-apply",
  ["study-application-modal"]: "/study-apply/study-application",
  ["study-cancellation-modal"]: "/study-apply/study-cancellation",
  ["auth-error-during-recruitment"]: "/auth-error-during-recruitment",
  ["auth-error-after-recruitment"]: "/auth-error-after-recruitment",
  ["my-page"]: "/my-page",
  ["my-page-logout"]: "/my-page/logout",
  onboarding: "https://onboarding.gdschongik.com",
  github: "https://github.com",
  admin:
    process.env.NODE_ENV === "production"
      ? "https://mentor.study.gdschongik.com"
      : "https://dev-mentor.study.gdschongik.com",
} as const;
