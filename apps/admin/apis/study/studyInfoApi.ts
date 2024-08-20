import { fetcher } from "@wow-class/utils";
import { mentorApiPath } from "constants/apiPath";
import { tags } from "constants/tags";
import type { AssignmentApiResponseDto } from "types/dtos/assignments";

export const studyInfoApi = {
  getAssignmentList: async (studyId: number) => {
    const response = await fetcher.get<AssignmentApiResponseDto[]>(
      `${mentorApiPath.assignments}?studyId=${studyId}`,
      {
        next: { tags: [tags.assignments] },
        cache: "force-cache",
      }
    );
    return response.data;
  },
  cancelAssignment: async (studyDetailId: number) => {
    const response = await fetcher.patch(
      `/mentor/study-details/${studyDetailId}/assignments/cancel`,
      {}
    );

    return { success: response.ok };
  },
};
