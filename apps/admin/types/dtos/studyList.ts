import type { DayOfWeekType } from "types/entities/dayofweek";
import type { StudySemesterType, StudyType } from "types/entities/study";
import type { TimeType } from "types/entities/time";

export interface StudyListApiResponseDto {
  study: StudyApiResponseV2Dto;
  studySessions: StudySessionApiResponseV2Dto[];
}

export interface StudyApiResponseV2Dto {
  studyId: number;
  type: StudyType;
  title: string;
  descriptionNotionLink: string;
  description: string;
  semester: {
    academicYear: number;
    semesterType: StudySemesterType;
  };
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
  lessonTitle: string;
  description: string;
  lessonAttendanceNumber: string;
  lessonPeriod: {
    startDate: string;
    endDate: string;
  };
  assignmentTitle?: string;
  assignmentDescriptionLink: string;
  assignmentPeriod: {
    startDate: string;
    endDate: string;
  };
  studyId: number;
}
