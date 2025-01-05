import type { AchievementType } from "../entities/achievement";

export interface OutstandingStudentApiRequestDto {
  studentIds: number[];
  achievementType: AchievementType;
}
