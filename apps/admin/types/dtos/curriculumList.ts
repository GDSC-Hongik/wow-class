import type { AssignmentStatusType } from "types/entities/assignment";
import type { StudyDifficultyType } from "types/entities/study";

export interface CurriculumApiResponseDto {
  studyDetailId: number;
  period: {
    startDate: string;
    endDate: string;
    open: boolean;
  };
  week: number;
  title: string;
  description: string;
  curriculumStatus: AssignmentStatusType;
  difficulty: StudyDifficultyType;
}
