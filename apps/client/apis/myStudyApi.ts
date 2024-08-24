import { fetcher } from "@wow-class/utils";
import { apiPath } from "constants/apiPath";
import { tags } from "constants/tags";
import type {
  BasicStudyInfoDto,
  DailyTaskListDtoType,
  MyOngoingStudyInfoDto,
  StudyAnnouncementListDtoType,
  StudyCurriculumListDtoType,
} from "types/dtos/myStudy";
import type { DailyTaskType } from "types/entities/myStudy";

export const myStudyApi = {
  getMyOngoingStudyInfo: async () => {
    const response = await fetcher.get<MyOngoingStudyInfoDto>(
      apiPath.myOngoingStudy,
      {
        next: { tags: [tags.myOngoingStudy] },
        cache: "force-cache",
      }
    );

    return response.data;
  },
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
  getStudyAnnouncementList: async (studyId: number) => {
    const response = await fetcher.get<StudyAnnouncementListDtoType>(
      `${apiPath.basicStudyInfo}/${studyId}/${apiPath.studyAnnouncementList}`,
      {
        next: { tags: [tags.studyAnnouncementList] },
        cache: "no-store",
      }
    );

    return response.data;
  },
  checkAttendance: async (studyId: number, attendanceNumber: string) => {
    const response = await fetcher.post(
      `${apiPath.studyDetails}/${studyId}/${apiPath.attend}`,
      {
        attendanceNumber,
      }
    );

    return { success: response.ok };
  },
  getStudyCurriculumList: async (studyId: number) => {
    const response = await fetcher.get<StudyCurriculumListDtoType>(
      `${apiPath.studyCurriculum}?studyId=${studyId}`,
      {
        next: { tags: [tags.studyCurriculum] },
        cache: "no-store",
      }
    );

    return response.data;
  },
  getDailyTaskList: async (studyId: number) => {
    const response = await fetcher.get<DailyTaskListDtoType<DailyTaskType>>(
      `${apiPath.dailyTask}?studyId=${studyId}`,
      {
        next: { tags: [tags.dailyTask] },
        cache: "no-store",
      }
    );

    return response.data;
  },
};
