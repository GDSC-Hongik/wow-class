import { fetcher } from "@wow-class/utils";
import { apiPath } from "constants/apiPath";
import { tags } from "constants/tags";
import type { StudyListApiResponseDto } from "types/dtos/apply-study";

export const studyApplyApi = {
  getStudyList: async () => {
    const response = await fetcher.get<StudyListApiResponseDto[]>(
      apiPath.applyStudy,
      {
        next: { tags: [tags.studyApply] },
      }
    );

    return response.data;
  },
  applyStudy: async (studyId: number) => {
    const response = await fetcher.post(
      `${apiPath.applyStudy}/${studyId}`,
      null
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData);
    }

    return response.data;
  },
  cancelStudyApplication: async (studyId: number) => {
    const response = await fetcher.delete(`${apiPath.applyStudy}/${studyId}`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData);
    }

    return response.data;
  },
};
