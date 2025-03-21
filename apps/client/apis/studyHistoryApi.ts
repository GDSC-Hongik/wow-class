import { fetcher } from "@wow-class/utils";
import { apiPath } from "constants/apiPath";
import { tags } from "constants/tags";
import type {
  AssignmentHistoryDto,
  MyAppliedStudyListApiResponseDto,
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
  putRepository: async (studyId: number, repositoryLink: string) => {
    const response = await fetcher.put(
      `${apiPath.studyHistory}/repositories/me`,
      { studyId, repositoryLink }
    );

    return { success: response.ok };
  },

  submitAssignment: async (studySessionId: number) => {
    const response = await fetcher.post(
      `${apiPath.assignmentHistory}/submit?studySessionId=${studySessionId}`,
      null
    );

    return { success: response.ok };
  },
  getMyAppliedStudyList: async () => {
    const response = await fetcher.get<MyAppliedStudyListApiResponseDto[]>(
      apiPath.myAppliedStudy,
      {
        next: { tags: [tags.myAppliedStudyList] },
        cache: "no-store",
      }
    );

    return response.data;
  },
};
