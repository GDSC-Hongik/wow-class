import type { DayOfWeekType } from "types/entities/dayofweek";
import type { PeriodType } from "types/entities/period";
import type { TimeType } from "types/entities/time";

export interface StudySession {
  studySessionId: number;
  lessonTitle?: string;
  assignmentTitle?: string;
  description?: string;
  lessonPeriod?: PeriodType;
  assignmentDescriptionLink: string;
  assignmentPeriod: PeriodType;
}

export interface CreateStudyDetailInfoApiRequestDto {
  title: string;
  description: string;
  descriptionNotionLink: string;
  dayOfWeek: DayOfWeekType;
  startTime?: TimeType;
  endTime?: TimeType;
  minAssignmentLength?: number;
  studySessions: StudySession[];
}
