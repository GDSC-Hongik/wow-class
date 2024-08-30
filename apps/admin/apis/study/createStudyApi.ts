import { fetcher } from "@wow-class/utils";
import { apiPath } from "constants/apiPath";
import type { CreateStudyApiRequestDto } from "types/dtos/createStudy";
import type { CreateStudyDetailInfoApiRequestDto } from "types/dtos/studyDetailInfo";

export const createStudyApi = {
  postCreateStudy: async (data: CreateStudyApiRequestDto) => {
    const response = await fetcher.post(apiPath.createStudy, data);

    return { success: response.ok };
  },
  postStudyDetailInfo: async (
    data: CreateStudyDetailInfoApiRequestDto,
    studyId: number
  ) => {
    const response = await fetcher.patch(
      `${apiPath.createStudyDetailInfo}/${studyId}`,
      data
    );
    return { success: response.ok };
  },
};
