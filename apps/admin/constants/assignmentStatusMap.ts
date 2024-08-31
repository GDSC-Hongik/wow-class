import type { AssignmentStatusType } from "types/entities/assignment";

export const assignmentStatusMap: Record<
  AssignmentStatusType,
  "개설" | "수정"
> = {
  NONE: "개설",
  OPEN: "수정",
  CANCELLED: "개설",
};
