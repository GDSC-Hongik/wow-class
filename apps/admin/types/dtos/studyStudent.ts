import type { AssignmentSubmissionStatusType } from "types/entities/assignment";
import type { PageableObject, SortType } from "types/entities/page";

export interface StudyStudentApiResponseDto {
  memberId: number;
  name: string;
  studentId: string;
  discordUsername: string;
  nickname: string;
  githubLink: string;
  studyHistoryStatus: "NONE" | "COMPLETED";
  isFirstRoundOutstandingStudent: boolean;
  isSecondRoundOutstandingStudent: boolean;
  studyTasks: StudyTaskResponseDto<"ATTENDANCE" | "ASSIGNMENT">[];
  assignmentRate: number;
  attendanceRate: number;
}

export interface PageStudyStudentApiResponseDto {
  totalElements: number;
  totalPages: number;
  size: number;
  content: StudyStudentApiResponseDto[];
  number: number;
  sort: SortType;
  numberOfElements: number;
  pageable: PageableObject;
  first: boolean;
  last: boolean;
  empty: boolean;
}

export interface StudyTaskResponseDtoBase {
  studyDetailId: number;
  week: number;
  deadLine: string;
  assignment: boolean;
  attendance: boolean;
}

export interface AttendanceTask extends StudyTaskResponseDtoBase {
  taskType: "ATTENDANCE";
  attendanceStatus:
    | "ATTENDED"
    | "NOT_ATTENDED"
    | "BEFORE_ATTENDANCE"
    | "CANCELED";
}

export interface AssignmentTask extends StudyTaskResponseDtoBase {
  taskType: "ASSIGNMENT";
  assignmentTitle: string;
  assignmentSubmissionStatus: AssignmentSubmissionStatusType;
}

export type StudyTaskResponseDto<T extends "ATTENDANCE" | "ASSIGNMENT"> =
  T extends "ATTENDANCE" ? AttendanceTask : AssignmentTask;
