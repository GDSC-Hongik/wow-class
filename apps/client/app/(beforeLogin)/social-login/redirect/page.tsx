import { fetcher } from "@wow-class/utils";
import { redirect } from "next/navigation";
import type { DashboardApiResponseDto } from "types/dtos/auth";

const AuthServerRedirectPage = async () => {
  const response = await fetcher.get<DashboardApiResponseDto>(
    "/onboarding/members/me/dashboard"
  );
  const memberRole = response.data?.member.role;
  const currentRecruitmentOpen =
    response.data?.currentRecruitmentRound.period.open;

  if (memberRole === "REGULAR") {
    redirect("/my-study");
  } else if (currentRecruitmentOpen) {
    redirect("/auth-error-during-recruitment");
  } else {
    redirect("/auth-error-after-recruitment");
  }
};

export default AuthServerRedirectPage;
