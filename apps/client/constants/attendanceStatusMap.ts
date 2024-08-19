import type { ComponentProps } from "react";
import type { AttendanceStatusType } from "types/entities/myStudy";
import type Tag from "wowds-ui/Tag";

export const attendanceStatusMap = {
  ATTENDED: "출석 완료",
  NOT_ATTENDED: "미출석",
  PENDING: "출석 전",
};

export const attendanceStatusColorMap: Record<
  AttendanceStatusType,
  ComponentProps<typeof Tag>["color"]
> = {
  ATTENDED: "blue",
  NOT_ATTENDED: "red",
  PENDING: "grey",
};
