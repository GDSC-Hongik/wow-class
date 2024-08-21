import { fetcher } from "@wow-class/utils";
import { apiPath } from "constants/apiPath";
import { tags } from "constants/tags";
import type {
  BasicStudyInfoDto,
  StudyAnnouncementListDtoType,
} from "types/dtos/myStudy";

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
  checkAttendance: async (studyDetailId: number, attendanceNumber: string) => {
    const response = await fetcher.post(
      `${apiPath.studyDetails}/${studyDetailId}/${apiPath.attend}`,
      {
        attendanceNumber,
      }
    );

    return { success: response.ok };
  },
};
