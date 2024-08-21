export interface StudyList {
  studyId: number;
  title: string;
  studyType: string;
  notionLink: string;
  introduction: string;
  mentorName: string;
  dayOfWeek:
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY";
  startTime: Time;
  totalWeek: number;
  openingDate: string;
}

interface Time {
  hour: number;
  minute: number;
  second: number;
  nano: number;
}

export interface StudyListApiResponseDto {
  appliedStudyId: number;
  studyResponses: StudyList[];
}
