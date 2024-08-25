import { fetcher } from "@wow-class/utils";
import { mentorApiPath } from "constants/apiPath";
import { tags } from "constants/tags";
import type {
  AssignmentApiRequestDto,
  AssignmentApiResponseDto,
} from "types/dtos/assignmentList";
import type { SessionApiResponseDto } from "types/dtos/sessionList";
import type { StudyBasicInfoApiResponseDto } from "types/dtos/studyBasicInfo";

export const studyDetailApi = {
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
  getAssignment: async (studyId: number) => {
    const response = await fetcher.get<AssignmentApiResponseDto>(
      `/mentor/study-details/${studyId}/assignments`,
      {
        next: { tags: [tags.assignments] },
        cache: "force-cache",
      }
    );
    return response.data;
  },
  createAssignment: async (
    studyId: number,
    assignment: AssignmentApiRequestDto
  ) => {
    const response = await fetcher.put<AssignmentApiRequestDto>(
      `/mentor/study-details/${studyId}/assignments`,
      assignment,
      {
        next: { tags: [tags.assignments] },
        cache: "force-cache",
      }
    );
    return { success: response.ok };
  },
  editAssignment: async (studyId: number) => {
    const response = await fetcher.patch<AssignmentApiRequestDto>(
      `/mentor/study-details/${studyId}/assignments`,
      {
        next: { tags: [tags.assignments] },
        cache: "force-cache",
      }
    );
    return response.data;
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
      `${mentorApiPath.sessions}?study=${studyId}`,
      {
        next: { tags: [tags.sessions] },
        cache: "force-cache",
      }
    );
    return response.data;
  },
};
