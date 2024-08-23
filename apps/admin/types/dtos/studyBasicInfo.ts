import type { DayOfWeekType } from "types/entities/dayofweek";
import type { SemesterType } from "types/entities/semester";
import type { TimeType } from "types/entities/time";

export interface StudyBasicInfoApiResponseDto {
  studyId: number;
  title: string;
  academicYear: number;
  semester: SemesterType;
  studyType: string;
  notionLink: string;
  introduction: string;
  mentorName: string;
  dayOfWeek: DayOfWeekType;
  startTime: TimeType;
  endTime: TimeType;
  totalWeek: number;
  period: {
    startDate: string;
    endDate: string;
    open: boolean;
  };
}
