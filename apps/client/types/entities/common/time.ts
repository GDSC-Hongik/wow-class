export interface Time {
  hour: number;
  minute: number;
  second: number;
  nano: number;
}

export type DayOfWeekType =
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY";

export type SemesterType = "FIRST" | "SECOND";
