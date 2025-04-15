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
  type: "FIRST_ROUND_OUTSTANDING_STUDENT" | "SECOND_ROUND_OUTSTANDING_STUDENT";
  studentId: number;
  studyId: number;
};
export type StudyTaskType = {
  studySessionsId: number;
  round: number;
  taskType: "ATTENDANCE" | "ASSIGNMENT";
  endDate: string;
  attendanceStatus:
    | "NOT_LIVE"
    | "BEFORE_ATTENDANCE"
    | "NOT_ATTENDED"
    | "ATTENDED";
  assignmentTitle: string;
  assignmentSubmissionStatus: "BEFORE_SUBMISSION" | "FAILED" | "SUCCEEDED";
};
