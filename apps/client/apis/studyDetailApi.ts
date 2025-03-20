import { fetcher } from "@wow-class/utils";
import { apiPath } from "constants/apiPath";
import { tags } from "constants/tags";
import type { StudyAnnouncemnetResponseDto } from "types/dtos/myStudy";
import type { StudyDetailDashboardDto } from "types/dtos/studyDetail";

export const studyDetailApi = {
  getStudyDetailDashboard: async (studyId: number) => {
    const response = await fetcher.get<StudyDetailDashboardDto>(
      `${apiPath.studyDetail}/${studyId}/me/dashboard`,
      {
        next: { tags: [tags.studyDetailDashboard] },
        cache: "no-store",
      }
    );

    return response.data;
  },
  getStudyDetailAnnouncementList: async (studyId: number) => {
    const response = await fetcher.get<StudyAnnouncemnetResponseDto[]>(
      `${apiPath.studyAnnouncementList}/${studyId}/me`,
      {
        next: { tags: [tags.studyAnnouncementList] },
        cache: "no-store",
      }
    );

    return response.data;
  },
};
