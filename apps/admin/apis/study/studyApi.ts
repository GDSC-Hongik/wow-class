import { fetcher } from "@wow-class/utils";
import { apiPath } from "constants/apiPath";
import { tags } from "constants/tags";
import type { StudyListApiResponseDto } from "types/dtos/studyList";

export const studyApi = {
  getStudyList: async () => {
    const response = await fetcher.get<StudyListApiResponseDto[]>(
      apiPath.studyList,
      {
        next: { tags: [tags.studyList] },
      }
    );

    return response.data;
  },
};
