import { fetcher } from "@wow-class/utils";
import { apiPath } from "constants/apiPath";
import { tags } from "constants/tags";
import type { StudyDetailDashboardDto } from "types/dtos/studyDetail";

export const studyDetailApi = {
  getStudyDetailDashboard: async (studyId: number) => {
    const response = await fetcher.get<StudyDetailDashboardDto>(
      `${apiPath.studyDetail}/dashboard?studyId=${studyId}`,
      {
        next: { tags: [tags.studyDetailDashboard] },
        cache: "force-cache",
        headers: {
          Authorization: `Bearer ${process.env.DEV_AUTH_TOKEN || process.env.NEXT_PUBLIC_DEV_AUTH_TOKEN}`,
        },
      }
    );

    return response.data;
  },
};
