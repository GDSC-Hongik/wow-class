import type {
  AssignmentHistoryStatusType,
  AssignmentSubmissionFailureType,
  AssignmentSubmissionStatusType,
} from "types/entities/common/assignment";
import type { AttendanceStatusType } from "types/entities/common/attendance";
import type { PeriodType } from "types/entities/common/period";
import type { HistoryStatusType } from "types/entities/common/study";
import type { DailyTaskType } from "types/entities/myStudy";

interface StudyHistory {
  studyHistoryId: number;
  status: HistoryStatusType;
  githubLink: string;
  memberId: number;
  studyId: number;
}

export interface StudySession {
  studySessionId: number;
  position: number;
  lessonTitle?: string;
  assignmentTitle?: string;
  description?: string;
  lessonPeriod?: PeriodType;
  assignmentDescriptionLink: string;
  assignmentPeriod: PeriodType;
  studyId: number;
}

export interface AssignmentHistory {
  assignmentHistoryId: number;
  submissionStatus: AssignmentSubmissionStatusType;
  submissionFailureType: AssignmentSubmissionFailureType;
  contentLength: number;
  submissionLink: string;
  commitHash: string;
  committedAt: string;
  studySessionId: number;
  memberId: number;
}
interface SessionInfo {
  session: StudySession;
  attendanceStatus: AttendanceStatusType;
  assignmentHistoryStatus: AssignmentHistoryStatusType;
  assignmentHistory: AssignmentHistory | null;
}

export interface StudyDetailDashboardDto {
  studyHistory: StudyHistory;
  sessions: SessionInfo[];
}

export interface StudyDetailTaskDto<T extends DailyTaskType> {
  studySession: StudySession;
  todoType: T; // 필요한 경우 확장
  deadLine: string; // ISO 8601
  attendanceStatus: T extends "ATTENDANCE" ? AttendanceStatusType : never;
  assignmentHistory: AssignmentHistory;
  assignmentHistoryStatus: AssignmentHistoryStatusType;
}
