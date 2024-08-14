export type CreateStudyFormType = {
  studyName: string;
  mentorId: number;
  studyYearSemester: string;
  applicationStartDate: string;
  applicationEndDate: string;
  totalWeek: number;
  startDate: string;
  dayOfWeek:
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY";
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
  studyType: "ASSIGNMENT" | "ONLINE" | "OFFLINE";
};
