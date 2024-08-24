import type { ComponentProps } from "react";
import type { AttendanceStatusType } from "types/entities/myStudy";
import type Tag from "wowds-ui/Tag";

export const attendanceStatusMap: Record<
  AttendanceStatusType,
  { label: string; color: ComponentProps<typeof Tag>["color"] }
> = {
  ATTENDED: { label: "출석 완료", color: "blue" },
  NOT_ATTENDED: { label: "미출석", color: "red" },
  PENDING: { label: "출석 전", color: "grey" },
};
