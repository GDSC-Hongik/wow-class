import type { StudyCurriculumType } from "types/entities/study";

export interface CreateStudyDetailInfoApiRequestDto {
  notionLink: string;
  introduction: string;
  studyCurriculums: StudyCurriculumType[];
}
