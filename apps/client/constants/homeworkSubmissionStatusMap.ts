import type { ComponentProps } from "react";
import type { HomeworkSubmissionStatusType } from "types/entities/myStudy";
import type Tag from "wowds-ui/Tag";

export const homeworkSubmissionStatusMap = {
  SUBMITTED: "제출 완료",
  NOT_SUBMITTED: "제출 실패",
  PENDING: "과제 휴강",
};

export const homeworkSubmissionStatusColorMap: Record<
  HomeworkSubmissionStatusType,
  ComponentProps<typeof Tag>["color"]
> = {
  SUBMITTED: "blue",
  NOT_SUBMITTED: "red",
  PENDING: "grey",
};
