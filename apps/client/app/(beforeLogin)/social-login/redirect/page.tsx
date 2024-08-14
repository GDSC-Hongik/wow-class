import { dashboardApi } from "apis/dashboardApi";
import { routePath } from "constants/routePath";
import { redirect } from "next/navigation";

const SocialLoginRedirectPage = async () => {
  const { memberRole, currentRecruitmentOpen } =
    await dashboardApi.getDashboardInfo();

  if (memberRole === "REGULAR") {
    redirect(routePath["my-study"]);
  } else if (currentRecruitmentOpen) {
    redirect(routePath["auth-error-during-recruitment"]);
  } else {
    redirect(routePath["auth-error-after-recruitment"]);
  }
};

export default SocialLoginRedirectPage;
