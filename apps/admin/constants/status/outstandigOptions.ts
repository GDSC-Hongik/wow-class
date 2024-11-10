import type { AchievementType } from "types/entities/achievement";

export type OutstandingDropDownOption = {
  id: number;
  text: string;
  value: AchievementType;
};

export const OUTSTANDING_ADD_OPTIONS: OutstandingDropDownOption[] = [
  { id: 1, text: "1차 우수 처리", value: "FIRST_ROUND_OUTSTANDING_STUDENT" },
  { id: 2, text: "2차 우수 처리", value: "SECOND_ROUND_OUTSTANDING_STUDENT" },
];
export const OUTSTANDING_DEL_OPTIONS: OutstandingDropDownOption[] = [
  { id: 1, text: "1차 우수 철회", value: "FIRST_ROUND_OUTSTANDING_STUDENT" },
  { id: 2, text: "2차 우수 철회", value: "SECOND_ROUND_OUTSTANDING_STUDENT" },
];
