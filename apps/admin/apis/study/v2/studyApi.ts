import { fetcher } from "@wow-class/utils";
import { mentorApiV2Path } from "constants/apiPath";
import { tags } from "constants/tags";
import type { StudyApiResponseV2Dto } from "types/dtos/v2/myStudyList";

export const studyApiV2 = {
  getMyStudyList: async () => {
    const response = await fetcher.get<StudyApiResponseV2Dto[]>(
      mentorApiV2Path.studyList,
      {
        next: { tags: [tags.myStudyList] },
        cache: "force-cache",
      }
    );
    return response.data;
  },
};
