import { fetcher } from "@wow-class/utils";
import { apiPath, mentorApiPath } from "constants/apiPath";
import { tags } from "constants/tags";
import type { AnnouncementApiResponseDto } from "types/dtos/announcement";
import type {
  AssignmentApiRequestDto,
  AssignmentApiResponseDto,
} from "types/dtos/assignmentList";
import type { AttendanceApiResponseDto } from "types/dtos/attendance";
import type { CurriculumApiResponseDto } from "types/dtos/curriculumList";
import type { StudyBasicInfoApiResponseDto } from "types/dtos/studyBasicInfo";
import type { StudyAnnouncementType } from "types/entities/study";

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
  getMyStudyList: async () => {
    const response = await fetcher.get<StudyListApiResponseDto[]>(
      mentorApiPath.studyList,
      {
        next: { tags: [tags.myStudyList] },
        cache: "force-cache",
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
        next: { tags: [`${tags.assignments} ${studyDetailId}`] },
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
  getCurriculumList: async (studyId: number) => {
    const response = await fetcher.get<CurriculumApiResponseDto[]>(
      `${mentorApiPath.curriculums}?studyId=${studyId}`,
      {
        next: { tags: [tags.curriculums] },
        cache: "force-cache",
      }
    );
    return response.data;
  },
  publishStudyAnnouncement: async (
    studyId: number,
    announcement: StudyAnnouncementType
  ) => {
    const response = await fetcher.post(
      `/mentor/studies/${studyId}/announcements`,
      announcement
    );
    return { success: response.ok };
  },
  getStudyAnnouncement: async (studyId: number) => {
    const response = await fetcher.get<AnnouncementApiResponseDto[]>(
      `/common/studies/${studyId}/announcements`,
      {
        next: { tags: [tags.announcements] },
        cache: "force-cache",
      }
    );
    return response.data;
  },
  modifyStudyAnnouncement: async (
    studyAnnouncementId: number,
    announcement: StudyAnnouncementType
  ) => {
    const response = await fetcher.put(
      `/mentor/studies/announcements/${studyAnnouncementId}`,
      announcement
    );
    return { success: response.ok };
  },
  deleteStudyAnnouncement: async (studyAnnouncementId: number) => {
    const response = await fetcher.delete(
      `/mentor/studies/announcements/${studyAnnouncementId}`
    );
    return { success: response.ok };
  },
  getStudyAttendances: async (studyId: number) => {
    const response = await fetcher.get<AttendanceApiResponseDto[]>(
      `/mentor/study-details/attendances?studyId=${studyId}`,
      {
        next: { tags: [tags.attendances] },
        cache: "force-cache",
      }
    );
    return response.data;
  },
};
