import type { ComponentProps } from "react";
import type { HomeworkSubmissionStatusType } from "types/entities/myStudy";
import type Tag from "wowds-ui/Tag";

export const homeworkSubmissionStatusMap: Record<
  HomeworkSubmissionStatusType,
  { label: string; color: ComponentProps<typeof Tag>["color"] }
> = {
  SUCCESS: { label: "제출 완료", color: "blue" },
  FAILURE: { label: "제출 실패", color: "red" },
  PENDING: { label: "과제 휴강", color: "grey" },
};
