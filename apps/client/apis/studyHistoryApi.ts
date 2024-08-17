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
        headers: {
          Authorization: `Bearer ${process.env.DEV_AUTH_TOKEN}`,
        },
      }
    );

    return response.data;
  },
  putRepository: async (studyHistoryId: number, repositoryLink: string) => {
    const response = await fetcher.put(
      `${apiPath.applyStudy}/${studyHistoryId}/repository`,
      {
        body: JSON.stringify({ repositoryLink }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData);
    }

    return response.data;
  },
};
