import { dashboardApi } from "apis/dashboardApi";
import { routePath } from "constants/routePath";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

const SocialLoginRedirectPage = async () => {
  const { memberRole, currentRecruitmentOpen } =
    await dashboardApi.getDashboardInfo();

  if (memberRole === "REGULAR") {
    redirect(routePath["study-apply"]);
  } else if (currentRecruitmentOpen) {
    redirect(routePath["auth-error-during-recruitment"]);
  } else {
    redirect(routePath["auth-error-after-recruitment"]);
  }
};

export default SocialLoginRedirectPage;
