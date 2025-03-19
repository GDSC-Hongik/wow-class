import type { StudyApiResponseV2Dto } from "./studyList";

export interface AnnouncementApiResponseDto {
  study: StudyApiResponseV2Dto;
  studyAnnouncement: {
    studyAnnouncementId: number;
    title: string;
    link: string;
    createdDate: string;
  };
}
