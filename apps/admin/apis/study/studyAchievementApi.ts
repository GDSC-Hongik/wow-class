import { fetcher } from "@wow-class/utils";
import type { OutstandingStudentApiRequestDto } from "types/dtos/outstandingStudent";

const studyAchievementApi = {
  postStudyAchievement: async (
    studyId: number,
    data: OutstandingStudentApiRequestDto
  ) => {
    const response = await fetcher.post(
      `/v2/mentor/study-achievements?studyId=${studyId}`,
      data
    );
    return { success: response.ok };
  },

  deleteStudyAchievement: async (
    studyId: number,
    data: OutstandingStudentApiRequestDto
  ) => {
    const response = await fetcher.delete(
      `/v2/mentor/study-achievements?studyId=${studyId}`,
      data
    );
    return { success: response.ok };
  },
};

export default studyAchievementApi;
