import type { DifficultyType } from "types/entities/difficulty";

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
  difficulty: DifficultyType;
}
