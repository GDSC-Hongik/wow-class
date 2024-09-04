import { fetcher } from "@wow-class/utils";
import { apiPath } from "constants/apiPath";
import { tags } from "constants/tags";
import type {
  StudyDetailDashboardDto,
  UpcomingStudyDto,
} from "types/dtos/studyDetail";

export const studyDetailApi = {
  getStudyDetailDashboard: async (studyId: number) => {
    const response = await fetcher.get<StudyDetailDashboardDto>(
      `${apiPath.studyDetail}/dashboard?studyId=${studyId}`,
      {
        next: { tags: [tags.studyDetailDashboard] },
        cache: "force-cache",
      }
    );

    return response.data;
  },
  getUpcomingStudy: async (studyId: number) => {
    const response = await fetcher.get<UpcomingStudyDto>(
      `${apiPath.studyDetail}/upcoming?studyId=${studyId}`,
      {
        next: { tags: [tags.upcomingStudy] },
        cache: "force-cache",
      }
    );

    return response.data;
  },
};
