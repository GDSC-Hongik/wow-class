export type AssignmentSubmissionStatusType = "FAILURE" | "SUCCESS" | "PENDING"; //TODO: 제출 전, 과제 휴강 여부 추가
export type AssignmentStatus = "NONE" | "OPEN" | "CANCELLED";
export type SubmissionFailureType =
  | "NONE"
  | "NOT_SUBMITTED"
  | "WORD_COUNT_INSUFFICIENT"
  | "LOCATION_UNIDENTIFIABLE";
