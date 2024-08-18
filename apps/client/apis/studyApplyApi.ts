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
        cache: "force-cache",
        headers: {
          Authorization: `Bearer ${process.env.DEV_AUTH_TOKEN}`,
        },
      }
    );

    return response.data;
  },
  applyStudy: async (studyId: number) => {
    const response = await fetcher.post(
      `${apiPath.applyStudy}/${studyId}`,
      null,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_DEV_AUTH_TOKEN}`,
        },
      }
    );

    return { success: !!response.ok };
  },
  cancelStudyApplication: async (studyId: number) => {
    const response = await fetcher.delete(`${apiPath.applyStudy}/${studyId}`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_DEV_AUTH_TOKEN}`,
      },
    });

    return { success: !!response.ok };
  },
};
