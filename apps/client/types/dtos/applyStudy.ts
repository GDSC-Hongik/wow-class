export interface StudyListApiResponseDto {
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
  startTime: string;
  totalWeek: number;
  openingDate: string;
}
