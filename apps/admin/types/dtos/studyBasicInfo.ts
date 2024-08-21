import type { DayOfWeekType, SemesterType } from "types/entities/study";

export interface StudyBasicInfoApiResponseDto {
  studyId: number;
  title: string;
  academicYear: number;
  semester: SemesterType;
  studyType: string;
  notionLink: string;
  introduction: string;
  mentorName: string;
  dayOfWeek: DayOfWeekType;
  startTime: { hour: number; minute: number; second: number; nano: number };
  endTime: { hour: number; minute: number; second: number; nano: number };
  totalWeek: number;
  period: {
    startDate: string;
    endDate: string;
    open: boolean;
  };
}
