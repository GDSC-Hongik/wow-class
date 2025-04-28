import type { DayOfWeekType } from "types/entities/dayofweek";
import type { PeriodType } from "types/entities/period";
import type {
  StudySemesterWithYearType,
  StudyType,
} from "types/entities/study";
import type { TimeType } from "types/entities/time";

export interface StudyBasicInfoApiResponseDto {
  studyId: number;
  title: string;
  semester: StudySemesterWithYearType;
  type: StudyType;
  descriptionNotionLink: string;
  description: string;
  mentorId: number;
  mentorName: string;
  dayOfWeek: DayOfWeekType;
  startTime: TimeType;
  endTime: TimeType;
  totalRound: number;
  applicationPeriod: PeriodType;
  openingDate: string;
  minAssignmentLength?: number;
}
