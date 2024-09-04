import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { padWithZero, parseISODate } from "@wow-class/utils";
import { attendanceStatusMap } from "constants/status/attendanceStatusMap";
import type { AttendanceApiResponseDto } from "types/dtos/attendance";
import getIsToday from "utils/getIsToday";
import Box from "wowds-ui/Box";
import Tag from "wowds-ui/Tag";

const AttendanceItem = ({
  attendance,
}: {
  attendance: AttendanceApiResponseDto;
}) => {
  const { week, deadLine, attendanceNumber } = attendance;
  const { year, month, day, hours, minutes } = parseISODate(deadLine);

  const state = getIsToday(deadLine)
    ? "ONGOING_ATTENDANCE"
    : "BEFORE_ATTENDANCE";
  const { label, color } = attendanceStatusMap[state];

  return (
    <Box
      style={AttendanceBoxStyle}
      text={
        <Flex direction="column" gap="xs">
          <Flex alignItems="center" gap="xs">
            <Text typo="h2">{week}주차 출결번호</Text>
            <Tag color={color} variant="solid2">
              {label}
            </Tag>
          </Flex>
          <Text
            color="sub"
            style={{ paddingBottom: "1.25rem", whiteSpace: "nowrap" }}
            typo="body1"
          >
            {year}년 {month}월 {day}일 00:00 - {padWithZero(hours)}:
            {padWithZero(minutes)}까지
          </Text>
          <Text
            color={state === "ONGOING_ATTENDANCE" ? "primary" : "outline"}
            style={AttendanceNumberStyle}
          >
            {attendanceNumber}
          </Text>
        </Flex>
      }
    />
  );
};

export default AttendanceItem;

const AttendanceBoxStyle = {
  width: "282px",
};

const AttendanceNumberStyle = {
  fontSize: "40px",
  fontWeight: 700,
};
