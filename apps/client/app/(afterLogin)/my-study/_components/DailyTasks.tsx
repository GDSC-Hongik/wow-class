import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import Box from "wowds-ui/Box";
import Button from "wowds-ui/Button";
import Tag from "wowds-ui/Tag";

import DailyTaskCarousel from "./DailyTaskCarousel";

const DailyTasks = () => {
  return (
    <section aria-label="daily-tasks">
      <Flex direction="column" gap="xl" position="relative">
        <Text typo="h2">오늘의 할 일</Text>
        <DailyTaskCarousel>
          {Array.from({ length: 4 }).map((_, index) => (
            <Box
              key={index}
              style={dailyTaskBoxStyle}
              text={
                <Flex
                  className={dailyTaskBoxContentContainerStyle}
                  direction="column"
                  justifyContent="space-between"
                >
                  <Flex direction="column" gap="16px">
                    <Text as="div" color="primary" typo="label2">
                      출석
                    </Text>
                    <Flex direction="column" gap="4px">
                      <Flex gap="8px">
                        <Text>4주차 출석체크</Text>
                        <Tag color="blue" variant="solid2">
                          출석완료
                        </Tag>
                      </Flex>
                      <Text as="div" color="error" typo="body1">
                        2024년 5월 23일 0:00 - 23:59까지
                      </Text>
                    </Flex>
                  </Flex>
                  <Button size="lg" style={attendanceButtonStyle}>
                    출석 체크하기
                  </Button>
                </Flex>
              }
            />
          ))}
        </DailyTaskCarousel>
      </Flex>
    </section>
  );
};

export default DailyTasks;

const dailyTaskBoxStyle = {
  maxWidth: "376px",
  minWidth: "376px",
  paddingBottom: "20px",
  height: "229px",
};

const dailyTaskBoxContentContainerStyle = css({
  height: "185px",
  minWidth: "328px !important",
});

const attendanceButtonStyle = {
  minWidth: "328px",
};
