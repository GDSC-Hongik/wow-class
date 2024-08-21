import type {
  DayOfWeekType,
  SemesterType,
  StudyType,
} from "types/entities/study";
export interface CreateStudyApiRequestDto {
  mentorId: number;
  academicYear: number;
  semesterType: SemesterType;
  title: string;
  applicationStartDate: string;
  applicationEndDate: string;
  totalWeek: number;
  startDate: string;
  dayOfWeek: DayOfWeekType;
  studyStartTime: {
    hour: number;
    minute: number;
    second: number;
    nano: number;
  };
  studyEndTime: {
    hour: number;
    minute: number;
    second: number;
    nano: number;
  };
  studyType: StudyType;
}
