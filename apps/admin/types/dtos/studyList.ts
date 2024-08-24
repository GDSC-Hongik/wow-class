import type { DayOfWeekType } from "types/entities/dayofweek";
import type { SemesterType, StudyKoreanType } from "types/entities/study";
import type { TimeType } from "types/entities/time";

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
  startTime: TimeType;
  totalWeek: number;
  openingDate: string;
}
