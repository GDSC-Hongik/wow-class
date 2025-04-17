import type { AssignmentSubmissionStatusType } from "types/entities/assignment";
import type { AttendanceStatusType } from "types/entities/attendance";
import type { PageableObject, SortType } from "types/entities/page";
import type {
  StudyAchievementType,
  StudyHistoryType,
  StudyMemberType,
  StudyTaskType,
} from "types/entities/student";

import type { TaskType } from "./../entities/task";

export interface StudyStudentApiResponseDto {
  member: StudyMemberType;
  studyHistory: StudyHistoryType;
  achievements: StudyAchievementType[];
  studyTasks: StudyTaskType[];
  assignmentRate: number;
  attendanceRate: number;
}

export interface PaginatedStudyStudentResponseDto {
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
  attendanceStatus: AttendanceStatusType;
}

export interface AssignmentTask extends StudyTaskResponseDtoBase {
  taskType: "ASSIGNMENT";
  assignmentTitle: string;
  assignmentSubmissionStatus: AssignmentSubmissionStatusType;
}

export type StudyTaskResponseDto<T extends TaskType> = T extends "ATTENDANCE"
  ? AttendanceTask
  : AssignmentTask;
