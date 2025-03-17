import { fetcher } from "@wow-class/utils";
import { apiPath, mentorApiPath } from "constants/apiPath";
import { tags } from "constants/tags";
import type { AnnouncementApiResponseDto } from "types/dtos/announcement";
import type {
  AssignmentApiRequestDto,
  AssignmentApiResponseDto,
} from "types/dtos/assignmentList";
import type { CurriculumApiResponseDto } from "types/dtos/curriculumList";
import type { StudyBasicInfoApiResponseDto } from "types/dtos/studyBasicInfo";
import type { StudyStatisticsApiResponseDto } from "types/dtos/studyStatistics";
import type {
  PaginatedStudyStudentResponseDto,
  StudyStudentApiResponseDto,
} from "types/dtos/studyStudent";
import type { PageableType } from "types/entities/page";
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
      `/v2/common/studies/${studyId}`,
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
  publishStudyAnnouncement: async (announcement: StudyAnnouncementType) => {
    const response = await fetcher.post(
      `/v2/mentor/study-announcements`,
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
      `/v2/mentor/study-announcements/${studyAnnouncementId}`,
      announcement
    );
    return { success: response.ok };
  },
  deleteStudyAnnouncement: async (studyAnnouncementId: number) => {
    const response = await fetcher.delete(
      `/v2/mentor/study-announcements/${studyAnnouncementId}`
    );
    return { success: response.ok };
  },
  getStudyStudents: async (studyId: number, pageable: PageableType) => {
    const response = await fetcher.get<PaginatedStudyStudentResponseDto>(
      `/mentor/studies/${studyId}/students`,
      {
        next: { tags: [tags.students] },
        cache: "force-cache",
      },
      pageable
    );
    return response.data;
  },
  getStudyStudentsExcel: async (studyId: number) => {
    const response = await fetcher.get(
      `/mentor/studies/${studyId}/students/excel`,
      {
        next: { tags: [tags.studentsExcel] },
        cache: "force-cache",
      }
    );

    return response.data;
  },
  getStudyStatistics: async (studyId: number) => {
    const response = await fetcher.get<StudyStatisticsApiResponseDto>(
      `/mentor/study-details/statistics?studyId=${studyId}`,
      {
        next: { tags: [tags.statistics] },
      }
    );
    return response.data;
  },
};
