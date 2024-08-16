import { fetcher } from "@wow-class/utils";
import { apiPath } from "constants/apiPath";
import { tags } from "constants/tags";
import { cookies } from "next/headers";
import type { DashboardApiResponseDto } from "types/dto/auth";

export const dashboardApi = {
  getDashboardInfo: async () => {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    const response = await fetcher.get<DashboardApiResponseDto>(
      apiPath.dashboard,
      {
        next: { tags: [tags.dashboard] },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const studyRole = response.data?.member.studyRole;
    const manageRole = response.data?.member.manageRole;

    return { studyRole, manageRole };
  },
};
