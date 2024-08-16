import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import Box from "wowds-ui/Box";
import Button from "wowds-ui/Button";
import Tag from "wowds-ui/Tag";

const DailyTasks = () => {
  return (
    <section aria-label="daily-tasks">
      <Flex direction="column" gap="xl">
        <Text typo="h2">오늘의 할 일</Text>
        <Flex gap="lg">
          <Box
            style={dailyTaskBoxStyle}
            text={
              <Flex direction="column" gap={54} minWidth="316px !important">
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
                <Button size="lg">출석 체크하기</Button>
              </Flex>
            }
          />
        </Flex>
      </Flex>
    </section>
  );
};

export default DailyTasks;

const dailyTaskBoxStyle = { maxWidth: "366px", minWidth: "366px" };
