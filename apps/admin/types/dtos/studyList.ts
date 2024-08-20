import type { StudyType } from "types/entities/study";

export interface StudyListApiResponseDto {
  studyId: number;
  title: string;
  studyType: StudyType;
  notionLink: string;
  introduction: string;
  mentorName: string;
  dayOfWeek:
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY";
  startTime: {
    hour: number;
    minute: number;
    second: number;
    nano: number;
  };
  totalWeek: number;
  openingDate: string;
}
