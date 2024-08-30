export type StudyDifficultyArrayType = {
  text: string;
  value: StudyDifficultyType;
}[];

export type StudyAssignmentStatusType = "NONE" | "OPEN" | "CANCELLED";

export type StudyDifficultyType = "HIGH" | "MEDIUM" | "LOW" | "BASIC";

export type StudyType = "ASSIGNMENT" | "ONLINE" | "OFFLINE";

export type StudyKoreanType =
  | "과제 스터디"
  | "온라인 스터디"
  | "오프라인 스터디";

export type StudyCurriculumType = {
  studyDetailId: number;
  title?: string;
  description?: string;
  difficulty?: StudyDifficultyType;
  status?: StudyAssignmentStatusType;
};

export type StudyAnnouncementType = {
  title: string;
  link: string;
};

export type StudySemesterType = "FIRST" | "SECOND";
