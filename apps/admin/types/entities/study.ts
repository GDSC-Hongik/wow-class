import type { DifficultyType } from "./difficulty";

export type StudyType = "ASSIGNMENT" | "ONLINE" | "OFFLINE";

export type StudyKoreanType = "과제 스터디" | "온라인 세션" | "오프라인 세션";

export type StudySessionType = {
  studyDetailId: number;
  title: string;
  description: string;
  difficulty: DifficultyType;
  status: StudyStatusType;
};

export type StudyStatusType = "NONE" | "OPEN" | "CANCELLED";
