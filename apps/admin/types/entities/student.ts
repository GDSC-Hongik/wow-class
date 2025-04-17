import type { AssignmentSubmissionStatusType } from "types/entities/assignment";
import type { AttendanceStatusType } from "types/entities/attendance";
import type { TaskType } from "types/entities/task";

import type { AchievementType } from "./achievement";
export type StudyMemberType = {
  memberId: number;
  name: string;
  studentId: string;
  discordUsername: string;
  nickname: string;
  phone: string;
  department: string;
  email: string;
};
export type StudyHistoryType = {
  studyHistoryId: number;
  status: "NONE" | "COMPLETED";
  githubLink: string;
  memberId: number;
  studyId: number;
};
export type StudyAchievementType = {
  studyAchievementId: number;
  type: AchievementType;
  studentId: number;
  studyId: number;
};
export type StudyTaskType = {
  studySessionsId: number;
  round: number;
  taskType: TaskType;
  endDate: string;
  attendanceStatus: AttendanceStatusType;
  assignmentTitle: string;
  assignmentSubmissionStatus: AssignmentSubmissionStatusType;
};
