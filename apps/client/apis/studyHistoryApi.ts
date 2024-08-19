import { fetcher } from "@wow-class/utils";
import { apiPath } from "constants/apiPath";
import { tags } from "constants/tags";
import type { AssignmentHistoryDto } from "types/dtos/study-history";

export const studyHistoryApi = {
  getStudyHistory: async (studyId: number) => {
    const response = await fetcher.get<AssignmentHistoryDto[]>(
      `${apiPath.studyHistory}/assignments?studyId=${studyId}`,
      {
        next: { tags: [tags.studyHistory] },
        cache: "force-cache",
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
};
