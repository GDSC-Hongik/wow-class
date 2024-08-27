import type { DayOfWeekType } from "types/entities/dayofweek";
import type { StudySemesterType, StudyType } from "types/entities/study";
import type { TimeType } from "types/entities/time";
export interface CreateStudyApiRequestDto {
  mentorId: number;
  academicYear: number;
  semesterType: StudySemesterType;
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
