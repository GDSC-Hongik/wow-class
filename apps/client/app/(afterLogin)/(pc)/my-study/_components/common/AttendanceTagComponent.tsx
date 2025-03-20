import { attendanceStatusMap } from "constants/attendanceStatusMap";
import type { AttendanceStatusType } from "types/entities/common/attendance";
import Tag from "wowds-ui/Tag";

export const AttendanceTagComponent = ({
  attendanceStatus,
}: {
  attendanceStatus: AttendanceStatusType;
}) => {
  if (attendanceStatus === "NOT_LIVE") {
    return;
  } else {
    const { label: attendanceStatusLabel, color: attendanceStatusColor } =
      attendanceStatusMap[attendanceStatus];
    return (
      <Tag color={attendanceStatusColor} variant="solid2">
        {attendanceStatusLabel}
      </Tag>
    );
  }
};
