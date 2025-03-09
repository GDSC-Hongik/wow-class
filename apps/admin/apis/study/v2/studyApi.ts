import { fetcher } from "@wow-class/utils";
import { apiPathV2, mentorApiV2Path } from "constants/apiPath";
import { tags } from "constants/tags";
import type { StudyListApiResponseV2Dto } from "types/dtos/v2/myStudyList";

export const studyApiV2 = {
  getStudyList: async () => {
    const response = await fetcher.get<StudyListApiResponseV2Dto[]>(
      apiPathV2.studyList,
      {
        next: { tags: [tags.studyList] },
      }
    );

    return response.data;
  },
  getMyStudyList: async () => {
    const response = await fetcher.get<StudyListApiResponseV2Dto[]>(
      mentorApiV2Path.studyList,
      {
        next: { tags: [tags.myStudyList] },
        cache: "force-cache",
      }
    );
    return response.data;
  },
};
