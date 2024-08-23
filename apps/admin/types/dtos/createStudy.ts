import type { DayOfWeekType } from "types/entities/dayofweek";
import type { SemesterType } from "types/entities/semester";
import type { StudyType } from "types/entities/study";
export interface CreateStudyApiRequestDto {
  mentorId: number;
  academicYear: number;
  semesterType: SemesterType;
  title: string;
  applicationStartDate: string;
  applicationEndDate: string;
  totalWeek: number;
  startDate: string;
  dayOfWeek: DayOfWeekType;
  studyStartTime: TimeType;
  studyEndTime: TimeType;
  studyType: StudyType;
}
