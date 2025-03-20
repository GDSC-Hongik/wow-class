export type AssignmentSubmissionStatusType = "FAILURE" | "SUCCESS";
export type AssignmentStatusType = "NONE" | "OPEN" | "CANCELED";
export type AssignmentSubmissionFailureType =
  | "NONE"
  | "NOT_SUBMITTED"
  | "WORD_COUNT_INSUFFICIENT"
  | "LOCATION_UNIDENTIFIABLE"
  | "UNKNOWN";

export type AssignmentHistoryStatusType =
  | "BEFORE_SUBMISSION"
  | "SUCCEEDED"
  | "FAILED";
