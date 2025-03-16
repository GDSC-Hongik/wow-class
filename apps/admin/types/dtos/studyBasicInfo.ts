import type { DayOfWeekType } from "types/entities/dayofweek";
import type { StudySemesterWithYearType } from "types/entities/study";
import type { TimeType } from "types/entities/time";

export interface StudyBasicInfoApiResponseDto {
  studyId: number;
  title: string;
  semester: StudySemesterWithYearType;
  type: "ASSIGNMENT" | "ONLINE" | "OFFLINE";
  descriptionNotionLink: string;
  description: string;
  mentorId: number;
  mentorName: string;
  dayOfWeek: DayOfWeekType;
  startTime: TimeType;
  endTime: TimeType;
  totalRound: number;
  applicationPeriod: {
    startDate: string;
    endDate: string;
  };
  openingDate: string;
}
