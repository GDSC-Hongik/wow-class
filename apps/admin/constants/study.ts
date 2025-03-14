import type { StudyKoreanType, StudyType } from "types/entities/study";

export const studyToKoreanType: Record<StudyType, StudyKoreanType> = {
  ASSIGNMENT: "과제 스터디",
  OFFLINE: "오프라인 스터디",
  ONLINE: "온라인 스터디",
};
