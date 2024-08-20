import type { DifficultyType } from "types/entities/difficulty";

export interface StudyBasicInfoApiResponseDto {
  studyId: 0;
  title: string;
  academicYear: 0;
  semester: "FIRST";
  studyType: "string";
  notionLink: "string";
  introduction: "string";
  mentorName: "string";
  dayOfWeek: "MONDAY";
  startTime: {
    hour: 0;
    minute: 0;
    second: 0;
    nano: 0;
  };
  endTime: {
    hour: 0;
    minute: 0;
    second: 0;
    nano: 0;
  };
  totalWeek: 0;
  period: {
    startDate: "2024-08-20T17:19:56.047Z";
    endDate: "2024-08-20T17:19:56.047Z";
    open: true;
  };
}
