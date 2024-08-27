export type StudyDifficultyArrayType = {
  text: string;
  value: StudyDifficultyType;
}[];

export type StudyAssignmentStatusType = "NONE" | "OPEN" | "CANCELLED";

export type StudyDifficultyType = "HIGH" | "MEDIUM" | "LOW" | "BASIC";

export type StudyType = "ASSIGNMENT" | "ONLINE" | "OFFLINE";

export type StudyKoreanType = "과제 스터디" | "온라인 세션" | "오프라인 세션";

export type StudySessionType = {
  studyDetailId: number;
  title: string;
  description: string;
  difficulty: StudyDifficultyType;
  status: StudyStatusType;
};

export type StudyStatusType = "NONE" | "OPEN" | "CANCELLED";

export type StudySemesterType = "FIRST" | "SECOND";
