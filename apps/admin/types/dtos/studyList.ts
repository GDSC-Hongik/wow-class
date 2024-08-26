import type { DayOfWeekType } from "types/entities/dayofweek";
import type { StudyKoreanType, StudySemesterType } from "types/entities/study";
import type { TimeType } from "types/entities/time";

export interface StudyListApiResponseDto {
  studyId: number;
  academicYear: number;
  semesterType: StudySemesterType;
  title: string;
  studyType: StudyKoreanType;
  notionLink: string;
  introduction: string;
  mentorName: string;
  dayOfWeek: DayOfWeekType;
  startTime: TimeType;
  totalWeek: number;
  openingDate: string;
}
