import { fetcher } from "@wow-class/utils";
import { apiPath } from "constants/apiPath";
import { tags } from "constants/tags";
import type {
  AssignmentHistoryDto,
  CompletedStudyDto,
} from "types/dtos/studyHistory";

export const studyHistoryApi = {
  getStudyHistory: async (studyId: number) => {
    const response = await fetcher.get<AssignmentHistoryDto[]>(
      `${apiPath.studyHistory}/assignments?studyId=${studyId}`,
      {
        next: { tags: [tags.studyHistory] },
        cache: "no-store",
      }
    );

    return response.data;
  },
  putRepository: async (studyHistoryId: number, repositoryLink: string) => {
    const response = await fetcher.put(
      `${apiPath.studyHistory}/${studyHistoryId}/repository`,
      {
        repositoryLink,
      }
    );

    return { success: response.ok };
  },

  submitAssignment: async (studyDetailId: number) => {
    const response = await fetcher.post(
      `${apiPath.studyHistory}/submit?studyDetailId=${studyDetailId}`,
      null
    );

    return { success: response.ok };
  },
  getMyCompletedStudy: async () => {
    const response = await fetcher.get<CompletedStudyDto[]>(
      `${apiPath.studyHistory}/me/complete`,
      {
        next: { tags: [tags.studyHistory] },
        cache: "force-cache",
      }
    );

    return response.data;
  },
};
