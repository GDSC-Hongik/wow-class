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

export const outstandingRoundMap: Record<
  AchievementType,
  "1차 우수" | "2차 우수"
> = {
  FIRST_ROUND_OUTSTANDING_STUDENT: "1차 우수",
  SECOND_ROUND_OUTSTANDING_STUDENT: "2차 우수",
};

export type OutstandingType = "처리" | "철회";

export const outstandingTypeMap: Record<OutstandingType, string> = {
  처리: "회원으로 등록",
  철회: "회원에서 철회",
};
