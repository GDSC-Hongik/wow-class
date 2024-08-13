import { fetcher } from "@wow-class/utils";
import { apiPath } from "constants/apiPath";
import { routePath } from "constants/routePath";
import { tags } from "constants/tags";
import { redirect } from "next/navigation";
import type { DashboardApiResponseDto } from "types/dtos/auth";

const AuthServerRedirectPage = async () => {
  const response = await fetcher.get<DashboardApiResponseDto>(
    apiPath.dashboard,
    {
      next: { tags: [tags.dashboard] },
    }
  );

  const memberRole = response.data?.member.role;
  const currentRecruitmentOpen =
    response.data?.currentRecruitmentRound.period.open;

  if (memberRole === "REGULAR") {
    redirect(routePath["my-study"]);
  } else if (currentRecruitmentOpen) {
    redirect(routePath["auth-error-during-recruitment"]);
  } else {
    redirect(routePath["auth-error-after-recruitment"]);
  }
};

export default AuthServerRedirectPage;
