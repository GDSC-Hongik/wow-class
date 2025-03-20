import type { ComponentProps } from "react";
import type { AssignmentHistoryStatusType } from "types/entities/common/assignment";
import type Tag from "wowds-ui/Tag";

export const assignmentSubmissionMap: Record<
  AssignmentHistoryStatusType,
  { tagText: string; tagColor: ComponentProps<typeof Tag>["color"] }
> = {
  BEFORE_SUBMISSION: { tagText: "제출 전", tagColor: "grey" },
  FAILED: { tagText: "제출 실패", tagColor: "red" },
  SUCCEEDED: { tagText: "제출 완료", tagColor: "blue" },
};
