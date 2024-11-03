import type { ComponentProps } from "react";
import type { AttendanceStatusType } from "types/entities/attendance";
import type Tag from "wowds-ui/Tag";

export const attendanceStatusMap: Record<
  "ONGOING_ATTENDANCE" | "BEFORE_ATTENDANCE",
  { label: string; color: ComponentProps<typeof Tag>["color"] }
> = {
  ONGOING_ATTENDANCE: { label: "진행중", color: "blue" },
  BEFORE_ATTENDANCE: { label: "진행전", color: "grey" },
};

export const attendanceTaskStatusMap: Record<
  AttendanceStatusType,
  { tagText: string; tagColor: ComponentProps<typeof Tag>["color"] }
> = {
  BEFORE_ATTENDANCE: { tagText: "기간아님", tagColor: "grey" },
  NOT_ATTENDED: { tagText: "미출석", tagColor: "red" },
  ATTENDED: { tagText: "출석완료", tagColor: "blue" },
  CANCELED: { tagText: "휴강", tagColor: "grey" },
};
