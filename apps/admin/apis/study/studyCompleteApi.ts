import { fetcher } from "@wow-class/utils";
import type { StudyCompleteRequestDto } from "types/dtos/studyComplete";

const studyCompleteApi = {
  postStudyComplete: async (data: StudyCompleteRequestDto) => {
    const response = await fetcher.post(
      `/v2/mentor/study-histories/complete`,
      data
    );
    return { success: response.ok };
  },

  postStudyCompleteWithdraw: async (data: StudyCompleteRequestDto) => {
    const response = await fetcher.post(
      `/v2/mentor/study-histories/withdraw-completion`,
      data
    );
    return { success: response.ok };
  },
};

export default studyCompleteApi;
