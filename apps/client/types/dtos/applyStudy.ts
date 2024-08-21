import type { StudyType } from "types/entities/common/study";
import type { DateType, Time } from "types/entities/common/time";

export interface StudyList {
  studyId: number;
  title: string;
  studyType: StudyType;
  notionLink: string;
  introduction: string;
  mentorName: string;
  dayOfWeek: DateType;
  startTime: Time;
  endTime: Time;
  totalWeek: number;
  openingDate: string;
  applicationEndDate: string;
}

export interface StudyListApiResponseDto {
  appliedStudyId: number;
  studyResponses: StudyList[];
}
