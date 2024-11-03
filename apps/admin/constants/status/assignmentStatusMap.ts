import type { ComponentProps } from "react";
import type {
  AssignmentStatusType,
  AssignmentSubmissionStatusType,
} from "types/entities/assignment";
import type Tag from "wowds-ui/Tag";

export const assignmentStatusMap: Record<
  AssignmentStatusType,
  "개설" | "수정"
> = {
  NONE: "개설",
  OPEN: "수정",
  CANCELLED: "개설",
};

export const assignmentSubmissionStatusMap: Record<
  AssignmentSubmissionStatusType,
  { tagText: string; tagColor: ComponentProps<typeof Tag>["color"] }
> = {
  NOT_SUBMITTED: { tagText: "미제출", tagColor: "red" },
  FAILURE: { tagText: "제출실패", tagColor: "red" },
  SUCCESS: { tagText: "제출완료", tagColor: "blue" },
  CANCELED: { tagText: "휴강", tagColor: "grey" },
};
