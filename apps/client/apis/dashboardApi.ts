import { fetcher } from "@wow-class/utils";
import { apiPath } from "constants/apiPath";
import { tags } from "constants/tags";
import type { DashboardApiResponseDto } from "types/dtos/auth";

export const dashboardApi = {
  getDashboardInfo: async () => {
    const response = await fetcher.get<DashboardApiResponseDto>(
      apiPath.dashboard,
      {
        next: { tags: [tags.dashboard] },
        cache: "no-store",
      }
    );

    const memberRole = response.data?.member.role;
    const currentRecruitmentOpen =
      response.data?.currentRecruitmentRound?.period.open || false;

    return { memberRole, currentRecruitmentOpen };
  },
};
