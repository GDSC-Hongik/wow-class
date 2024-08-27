import { fetcher } from "@wow-class/utils";
import { apiPath, mentorApiPath } from "constants/apiPath";
import { tags } from "constants/tags";
import type {
  AssignmentApiRequestDto,
  AssignmentApiResponseDto,
} from "types/dtos/assignmentList";
import type { SessionApiResponseDto } from "types/dtos/sessionList";
import type { StudyBasicInfoApiResponseDto } from "types/dtos/studyBasicInfo";

import type { StudyListApiResponseDto } from "../../types/dtos/studyList";

export const studyApi = {
  getStudyList: async () => {
    const response = await fetcher.get<StudyListApiResponseDto[]>(
      apiPath.studyList,
      {
        next: { tags: [tags.studyList] },
      }
    );

    return response.data;
  },
  getStudyBasicInfo: async (studyId: number) => {
    const response = await fetcher.get<StudyBasicInfoApiResponseDto>(
      `/common/studies/${studyId}`,
      {
        next: { tags: [tags.studyBasicInfo] },
        cache: "force-cache",
      }
    );
    return response.data;
  },
  getAssignmentList: async (studyId: number) => {
    const response = await fetcher.get<AssignmentApiResponseDto[]>(
      `${mentorApiPath.assignments}?studyId=${studyId}`,
      {
        next: { tags: [tags.assignments] },
        cache: "force-cache",
      }
    );
    return response.data;
  },
  getAssignment: async (studyDetailId: number) => {
    const response = await fetcher.get<AssignmentApiResponseDto>(
      `/mentor/study-details/${studyDetailId}/assignments`,
      {
        next: { tags: [`${tags.assignments} ${studyDetailId.toString()}`] },
        cache: "force-cache",
      }
    );
    return response.data;
  },
  createAssignment: async (
    studyDetailId: number,
    data: AssignmentApiRequestDto
  ) => {
    const response = await fetcher.put(
      `/mentor/study-details/${studyDetailId}/assignments`,
      data
    );
    return { success: response.ok };
  },
  patchAssignment: async (
    studyDetailId: number,
    data: AssignmentApiRequestDto
  ) => {
    const response = await fetcher.patch(
      `/mentor/study-details/${studyDetailId}/assignments`,
      data
    );
    return { success: response.ok };
  },
  cancelAssignment: async (studyDetailId: number) => {
    const response = await fetcher.patch(
      `/mentor/study-details/${studyDetailId}/assignments/cancel`,
      {}
    );

    return { success: response.ok };
  },
  getSessionList: async (studyId: number) => {
    const response = await fetcher.get<SessionApiResponseDto[]>(
      `${mentorApiPath.sessions}?studyId=${studyId}`,
      {
        next: { tags: [tags.sessions] },
        cache: "force-cache",
      }
    );
    return response.data;
  },
};
