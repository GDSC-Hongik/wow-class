import type { StudyType } from "types/entities/common/study";
import type { DayOfWeekType, Time } from "types/entities/common/time";

export interface StudyList {
  studyId: number;
  title: string;
  type: StudyType;
  description?: string;
  descriptionNotionLink?: string;
  mentorId: number;
  mentorName: string;
  dayOfWeek: DayOfWeekType;
  startTime: Time | null;
  endTime: Time | null;
  openingDate: string;
  applicationPeriod: {
    startDate: string;
    endDate: string;
  };
  totalRound: number;
  semester: {
    academicYear: number;
    semesterType: "FIRST" | "SECOND";
  };
}

export interface StudyListApiResponseDto {
  appliedStudyIds: number[];
  applicableStudies: StudyList[];
}
