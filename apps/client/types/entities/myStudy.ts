export type AttendanceStatusType =
  | "ATTENDED"
  | "NOT_ATTENDED"
  | "BEFORE_ATTENDANCE";

export type StudyDifficultyType = "BASIC" | "LOW" | "MEDIUM" | "HIGH";

export type AssignmentStatusType = "NONE" | "OPEN" | "CANCELLED";

export type AssignmentSubmissionFailureType =
  | "NONE"
  | "NOT_SUBMITTED"
  | "WORD_COUNT_INSUFFICIENT"
  | "LOCATION_UNIDENTIFIABLE"
  | "UNKNOWN";

export type StudyCurriculumStatusType = "NONE" | "OPEN" | "CANCELLED";

export type AssignmentSubmissionStatusType =
  | "NOT_SUBMITTED"
  | "FAILURE"
  | "SUCCESS";

export type DailyTaskType = "ATTENDANCE" | "ASSIGNMENT";
