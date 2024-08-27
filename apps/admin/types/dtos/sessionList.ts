import type { StudyDifficultyType } from "types/entities/study";

export interface SessionApiResponseDto {
  studyDetailId: number;
  period: {
    startDate: string;
    endDate: string;
    open: boolean;
  };
  week: number;
  title: string;
  description: string;
  difficulty: StudyDifficultyType;
}
