import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import Box from "wowds-ui/Box";
import Tag from "wowds-ui/Tag";

const CheckAttendanceNumber = () => {
  return (
    <section>
      <Text typo="h2">주차별 출결 번호</Text>
      <Space height={24} />
      <div className={AttendanceContainerStyle}>
        <Box
          style={AttendanceBoxStyle}
          text={
            <Flex direction="column" gap="lg">
              <Flex direction="column" gap="xs">
                <Flex alignItems="center" gap="xs">
                  <Text typo="h2">4주차 출결 번호</Text>
                  <Tag color="blue" variant="solid2">
                    진행중
                  </Tag>
                </Flex>
                <Text color="sub" typo="body1">
                  2024년 5월 23일 00:00 - 23:59까지
                </Text>
              </Flex>
              <Text color="primary" style={AttendanceNumberStyle}>
                2143
              </Text>
            </Flex>
          }
        />
        <Box
          style={AttendanceBoxStyle}
          text={
            <Flex direction="column" gap="lg">
              <Flex direction="column" gap="xs">
                <Flex alignItems="center" gap="xs">
                  <Text typo="h2">5주차 출결 번호</Text>
                  <Tag color="grey" variant="solid2">
                    진행전
                  </Tag>
                </Flex>
                <Text color="sub" typo="body1">
                  2024년 5월 23일 00:00 - 23:59까지
                </Text>
              </Flex>
              <Text color="outline" style={AttendanceNumberStyle}>
                4176
              </Text>
            </Flex>
          }
        />
      </div>
    </section>
  );
};

export default CheckAttendanceNumber;

const AttendanceContainerStyle = css({
  display: "flex",
  direction: "row",
  alignItems: "center",
  gap: "md",
});

const AttendanceBoxStyle = {
  maxWidth: "282px",
};

const AttendanceNumberStyle = {
  fontSize: "40px",
  fontWeight: 700,
};
