export interface Time {
  hour: number;
  minute: number;
  second: number;
  nano: number;
}

export type DateType =
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY";
