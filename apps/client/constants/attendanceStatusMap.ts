import type { ComponentProps } from "react";
import type { AttendanceStatusType as AttendanceStatusTypeV2 } from "types/entities/common/attendance";
import type { AttendanceStatusType } from "types/entities/myStudy";
import type Tag from "wowds-ui/Tag";
export const attendanceStatusMap: Record<
  AttendanceStatusType,
  { label: string; color: ComponentProps<typeof Tag>["color"] }
> = {
  ATTENDED: { label: "출석 완료", color: "blue" },
  NOT_ATTENDED: { label: "미출석", color: "red" },
  BEFORE_ATTENDANCE: { label: "출석 전", color: "grey" },
};

export const attendanceStatusMapV2: Record<
  AttendanceStatusTypeV2,
  { label: string; color: ComponentProps<typeof Tag>["color"] }
> = {
  NOT_LIVE: { label: "과제 스터디", color: "grey" },
  ATTENDED: { label: "출석 완료", color: "blue" },
  NOT_ATTENDED: { label: "미출석", color: "red" },
  BEFORE_ATTENDANCE: { label: "출석 전", color: "grey" },
};
