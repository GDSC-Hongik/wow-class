import type { StudySessionType } from "types/entities/study";

export interface CreateStudyDetailInfoApiRequestDto {
  notionLink: string;
  introduction: string;
  studySessions: StudySessionType[];
}
