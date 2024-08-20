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
  startTime: number[];
  endTime: number[];
  totalWeek: number;
  period: {
    startDate: number[];
    endDate: number[];
    open: boolean;
  };
}
