export type AssignmentSubmissionStatusType = "FAILURE" | "SUCCESS" | null;
export type AssignmentStatusType = "NONE" | "OPEN" | "CANCELED";
export type AssignmentSubmissionFailureType =
  | "NONE"
  | "NOT_SUBMITTED"
  | "WORD_COUNT_INSUFFICIENT"
  | "LOCATION_UNIDENTIFIABLE"
  | "UNKNOWN";
