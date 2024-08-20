import { fetcher } from "@wow-class/utils";
import { mentorApiPath } from "constants/apiPath";
import { tags } from "constants/tags";
import type { AssignmentApiResponseDto } from "types/dtos/assignments";

export const studyInfoApi = {
  getAssignmentList: async (studyId: number) => {
    const response = await fetcher.get<AssignmentApiResponseDto[]>(
      `${mentorApiPath.assignments}/${studyId}`,
      {
        next: { tags: [tags.assignments] },
        cache: "force-cache",
      }
    );

    return response.data;
  },
};
