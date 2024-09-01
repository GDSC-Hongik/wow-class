import type { ComponentProps } from "react";
import type Tag from "wowds-ui/Tag";

export const attendanceStatusMap: Record<
  "ONGOING_ATTENDANCE" | "BEFORE_ATTENDANCE",
  { label: string; color: ComponentProps<typeof Tag>["color"] }
> = {
  ONGOING_ATTENDANCE: { label: "진행중", color: "blue" },
  BEFORE_ATTENDANCE: { label: "진행전", color: "grey" },
};
