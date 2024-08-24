import type { AssignmentSubmissionStatusType } from "./common/assignment";

export type AttendanceStatusType = "ATTENDED" | "NOT_ATTENDED" | "PENDING";

export type LevelType = "BASIC" | "BEGINNER" | "INTERMEDIATE" | "ADVANCED";

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

export type StudyCurriculumDataType = {
  week: number;
  title: string;
  description: string;
  level: LevelType;
  period: {
    startDate: string;
    endDate: string;
  };
  attendanceStatus: AttendanceStatusType;
  assignmentSubmissionStatus: AssignmentSubmissionStatusType;
};
