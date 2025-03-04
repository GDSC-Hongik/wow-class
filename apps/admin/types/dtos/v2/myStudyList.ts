import type { DayOfWeekType } from "types/entities/dayofweek";
import type {
  StudySemesterWithYearType,
  StudyType,
} from "types/entities/study";
import type { TimeType } from "types/entities/time";

export interface StudyListApiResponseV2Dto {
  study: StudyApiResponseV2Dto;
  studySessions: StudySessionApiResponseV2Dto[];
}

export interface StudyApiResponseV2Dto {
  studyId: number;
  type: StudyType;
  title: string;
  descriptionNotionLink: string;
  semester: StudySemesterWithYearType;
  totalRound: number;
  dayOfWeek: DayOfWeekType;
  startTime: TimeType;
  endTime: TimeType;
  applicationPeriod: {
    startDate: string;
    endDate: string;
  };
  discordChannelId: string;
  discordRoleId: string;
  mentorId: number;
  mentorName: string;
}

export interface StudySessionApiResponseV2Dto {
  studySessionId: number;
  position: number;
  title: string;
  description: string;
  lessonAttendanceNumber: string;
  lessonPeriod: {
    startDate: string;
    endDate: string;
  };
  assignmentDescriptionLink: string;
  assignmentPeriod: {
    startDate: string;
    endDate: string;
  };
  studyId: number;
}
