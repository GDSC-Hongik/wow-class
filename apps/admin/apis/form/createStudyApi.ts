import { fetcher } from "@wow-class/utils";
import { apiPath } from "constants/apiPath";
import type { CreateStudyApiRequestDto } from "types/dtos/createStudy";

export const createStudyApi = {
  postCreateStudy: async (data: CreateStudyApiRequestDto) => {
    const response = await fetcher.post(apiPath.createStudy, data);

    return { success: response.ok };
  },
};
