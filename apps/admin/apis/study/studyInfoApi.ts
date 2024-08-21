import { fetcher } from "@wow-class/utils";
import { mentorApiPath } from "constants/apiPath";
import { tags } from "constants/tags";
import type { AnnouncementApiResponseDto } from "types/dtos/announcement";
import type { AssignmentApiResponseDto } from "types/dtos/assignmentList";
import type { SessionApiResponseDto } from "types/dtos/sessionList";
import type { StudyBasicInfoApiResponseDto } from "types/dtos/studyBasicInfo";
import type { StudyAnnouncementType } from "types/entities/studyAnnouncement";

export const studyInfoApi = {
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
    console.log(response.data);
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
  publishStudyAnnounce: async (
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
};
