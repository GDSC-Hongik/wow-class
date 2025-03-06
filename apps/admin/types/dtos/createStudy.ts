import type { DayOfWeekType } from "types/entities/dayofweek";
import type { StudySemesterType, StudyType } from "types/entities/study";
import type { TimeType } from "types/entities/time";
export interface CreateStudyApiRequestDto {
  mentorId: number;
  type: StudyType;
  title: string;
  description?: string;
  descriptionNotionLink?: string;
  semester: {
    academicYear: number;
    semesterType: StudySemesterType;
  };
  totalRound: number;
  dayOfWeek?: DayOfWeekType;
  startTime?: TimeType;
  endTime?: TimeType;
  applicationPeriod: {
    startDate: string;
    endDate: string;
  };
  discordChannelId?: string;
  discordRoleId?: string;
}
