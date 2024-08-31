import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { padWithZero, parseISODate } from "@wow-class/utils";
import type { AttendanceApiResponseDto } from "types/dtos/attendance";
import Box from "wowds-ui/Box";
import Tag from "wowds-ui/Tag";

const AttendaceItem = ({
  attendance,
}: {
  attendance: AttendanceApiResponseDto;
}) => {
  const { week, deadLine, attendanceNumber } = attendance;
  const { year, month, day, hours, minutes } = parseISODate(deadLine);

  return (
    <Box
      style={AttendanceBoxStyle}
      text={
        <Flex direction="column" gap="xs">
          <Flex alignItems="center" gap="xs">
            <Text typo="h2">{week}주차 출결번호</Text>
            <Tag color="blue" variant="solid2">
              진행중
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
          <Text color="primary" style={AttendanceNumberStyle}>
            {attendanceNumber}
          </Text>
        </Flex>
      }
    />
  );
};

export default AttendaceItem;

const AttendanceBoxStyle = {
  width: "282px",
};

const AttendanceNumberStyle = {
  fontSize: "40px",
  fontWeight: 700,
};
