import type {
  DayOfWeekType,
  SemesterType,
  StudyKoreanType,
} from "types/entities/study";

export interface StudyListApiResponseDto {
  studyId: number;
  academicYear: number;
  semesterType: SemesterType;
  title: string;
  studyType: StudyKoreanType;
  notionLink: string;
  introduction: string;
  mentorName: string;
  dayOfWeek: DayOfWeekType;
  startTime: {
    hour: number;
    minute: number;
    second: number;
    nano: number;
  };
  totalWeek: number;
  openingDate: string;
}
