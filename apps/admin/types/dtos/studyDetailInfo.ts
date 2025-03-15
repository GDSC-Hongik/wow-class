import type { DayOfWeekType } from "types/entities/dayofweek";
import type { TimeType } from "types/entities/time";

interface Period {
  startDate: string;
  endDate: string;
}

export interface StudySession {
  studySessionId: number;
  title?: string;
  description?: string;
  lessonPeriod?: Period;
  assignmentDescriptionLink: string;
  assignmentPeriod: Period;
}

export interface CreateStudyDetailInfoApiRequestDto {
  title: string;
  description: string;
  descriptionNotionLink: string;
  dayOfWeek: DayOfWeekType;
  startTime?: TimeType;
  endTime?: TimeType;
  studySessions: StudySession[];
}
