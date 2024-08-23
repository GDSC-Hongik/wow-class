export type AttendanceStatusType =
  | "ATTENDED"
  | "NOT_ATTENDED"
  | "BEFORE_ATTENDANCE";

export type StudyDifficultyType = "BASIC" | "LOW" | "MEDIUM" | "HIGH";

interface AttendanceTask {
  type: "ATTENDANCE";
  week: number;
  period: {
    start: string;
    end: string;
  };
  attendanceStatus: AttendanceStatusType;
}

interface AssignmentTask {
  type: "ASSIGNMENT";
  week: number;
  name: string;
  deadline: string;
  assignmentSubmissionStatus: AssignmentSubmissionStatusType;
}

export type DailyTaskDataType = AttendanceTask | AssignmentTask;

export type AssignmentStatusType = "NONE" | "OPEN" | "CANCELLED";

export type AssignmentSubmissionFailureType =
  | "NONE"
  | "NOT_SUBMITTED"
  | "WORD_COUNT_INSUFFICIENT"
  | "LOCATION_UNIDENTIFIABLE"
  | "UNKNOWN";

export type StudySessionStatusType = "NONE" | "OPEN" | "CANCELLED";

export type AssignmentSubmissionStatusType =
  | "NOT_SUBMITTED"
  | "FAILURE"
  | "SUCCESS";
