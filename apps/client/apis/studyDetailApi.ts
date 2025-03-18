import { fetcher } from "@wow-class/utils";
import { apiPath } from "constants/apiPath";
import { tags } from "constants/tags";
import type {
  StudyDetailDashboardDto,
  StudyDetailTaskDto,
} from "types/dtos/studyDetail";
import type { DailyTaskType } from "types/entities/myStudy";

export const studyDetailApi = {
  getStudyDetailDashboard: async (studyId: number) => {
    const response = await fetcher.get<StudyDetailDashboardDto>(
      `${apiPath.studyDetail}/${studyId}/me/dashboard`,
      {
        next: { tags: [tags.studyDetailDashboard] },
        cache: "no-store",
      }
    );

    return response.data;
  },
  getStudyDetailTaskList: async (studyId: number) => {
    const response = await fetcher.get<StudyDetailTaskDto<DailyTaskType>[]>(
      `${apiPath.studyDetail}/${studyId}/me/todos`,
      {
        next: { tags: [tags.myStudyDetailDailyTask] },
        cache: "no-store",
      }
    );

    return response.data;
  },
};
