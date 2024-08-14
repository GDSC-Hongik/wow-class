import { fetcher } from "@wow-class/utils";
import { apiPath } from "constants/apiPath";
import { tags } from "constants/tags";
import { cookies } from "next/headers";
import type { DashboardApiResponseDto } from "types/dtos/auth";

export const dashboardApi = {
  getDashboardInfo: async () => {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    // NOTE: middleware에서 호출하기 위해서 별도로 헤더 주입
    const response = await fetcher.get<DashboardApiResponseDto>(
      apiPath.dashboard,
      {
        next: { tags: [tags.dashboard] },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const memberRole = response.data?.member.role;
    const currentRecruitmentOpen =
      response.data?.currentRecruitmentRound?.period.open || false;

    return { memberRole, currentRecruitmentOpen };
  },
};
