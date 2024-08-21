import { fetcher } from "@wow-class/utils";
import { apiPath } from "constants/apiPath";
import { tags } from "constants/tags";
import type { BasicStudyInfoDto } from "types/dtos/myStudy";

export const myStudyApi = {
  getBasicStudyInfo: async (studyId: number) => {
    const response = await fetcher.get<BasicStudyInfoDto>(
      `${apiPath.basicStudyInfo}/${studyId}`,
      {
        next: { tags: [tags.basicStudyInfo] },
        cache: "force-cache",
      }
    );

    return response.data;
  },
};
