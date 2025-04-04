import { fetcher } from "@wow-class/utils";
import { apiPath } from "constants/apiPath";
import { tags } from "constants/tags";
import type { StudyListApiResponseDto } from "types/dtos/applyStudy";

export const studyApplyApi = {
  getStudyList: async () => {
    const response = await fetcher.get<StudyListApiResponseDto>(
      apiPath.applicableStudy,
      {
        next: { tags: [tags.studyApply] },
        cache: "no-store",
      }
    );

    return response.data;
  },
  applyStudy: async (studyId: number) => {
    const response = await fetcher.post(`${apiPath.applyStudy}`, {
      studyId,
    });

    return { success: response.ok };
  },
  cancelStudyApplication: async (studyId: number) => {
    const response = await fetcher.delete(`${apiPath.applyStudy}`, {
      studyId,
    });

    return { success: response.ok };
  },
};
