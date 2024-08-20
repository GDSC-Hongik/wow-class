import type { ComponentProps } from "react";
import type { AssignmentSubmissionStatusType } from "types/entities/myStudy";
import type Tag from "wowds-ui/Tag";

export const assignmentSubmissionStatusMap: Record<
  AssignmentSubmissionStatusType,
  { label: string; color: ComponentProps<typeof Tag>["color"] }
> = {
  SUCCESS: { label: "제출 완료", color: "blue" },
  FAILURE: { label: "제출 실패", color: "red" },
  PENDING: { label: "과제 휴강", color: "grey" },
};
