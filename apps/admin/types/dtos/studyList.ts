import type { DayOfWeekType } from "types/entities/dayofweek";
import type { StudySemesterType, StudyType } from "types/entities/study";

export interface StudyListApiResponseDto {
  study: {
    studyId: number;
    type: StudyType;
    title: string;
    description: string;
    descriptionNotionLink: string;
    semester: {
      academicYear: number;
      semesterType: StudySemesterType;
    };
    totalRound: number;
    dayOfWeek: DayOfWeekType;
    startTime: {
      hour: number;
      minute: number;
      second: number;
      nano: number;
    };
    endTime: {
      hour: number;
      minute: number;
      second: number;
      nano: number;
    };
    applicationPeriod: {
      startDate: string;
      endDate: string;
      open: boolean;
    };
    discordChannelId: string;
    discordRoleId: string;
    mentorId: number;
    mentorName: string;
  };
  studySessions: [
    {
      studySessionId: number;
      position: number;
      title: string;
      description: string;
      lessonAttendanceNumber: string;
      lessonPeriod: {
        startDate: string;
        endDate: string;
        open: boolean;
      };
      assignmentDescriptionLink: string;
      assignmentPeriod: {
        startDate: string;
        endDate: string;
        open: boolean;
      };
      studyId: number;
    },
  ];
}
