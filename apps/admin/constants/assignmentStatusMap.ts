import type { AssignmentStatusType } from "types/entities/assignment";

export const assignmentStatusMap: Record<
  Omit<AssignmentStatusType, "CANCELED">,
  "개설" | "수정"
> = {
  NONE: "개설",
  OPEN: "수정",
};
