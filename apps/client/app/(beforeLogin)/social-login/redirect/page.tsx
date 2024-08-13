import { fetcher } from "@wow-class/utils";
import { dashboardApi } from "apis/dashboardApi";
import { routePath } from "constants/routePath";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const AuthServerRedirectPage = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  fetcher.setDefaultHeaders({
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  });

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

export default AuthServerRedirectPage;
