export type StudyDifficultyArrayType = {
  text: string;
  value: StudyDifficultyType;
}[];

export type StudyAssignmentStatusType = "NONE" | "OPEN" | "CANCELED";

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

export type CreateStudyAnnouncementType = {
  studyId: number;
  title: string;
  link: string;
};

export type StudyAnnouncementType = {
  title: string;
  link: string;
};

export type StudySemesterType = "FIRST" | "SECOND";

export type StudySemesterWithYearType = {
  academicYear: number;
  semesterType: "FIRST" | "SECOND";
};
