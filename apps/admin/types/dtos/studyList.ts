import type { DayOfWeekType } from "types/entities/dayofweek";
import type { StudySemesterType, StudyType } from "types/entities/study";
import type { TimeType } from "types/entities/time";

export interface StudyListApiResponseDto {
  study: {
    studyId: number;
    type: StudyType;
    title: string;
    description?: string;
    descriptionNotionLink?: string;
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
      };
      assignmentDescriptionLink: string;
      assignmentPeriod: {
        startDate: string;
        endDate: string;
      };
      studyId: number;
    },
  ];
}
