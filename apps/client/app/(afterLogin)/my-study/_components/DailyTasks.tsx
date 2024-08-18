"use client";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import useHorizontalScroll from "hooks/useHorizontalScroll";
import Image from "next/image";
import Box from "wowds-ui/Box";
import Button from "wowds-ui/Button";
import Tag from "wowds-ui/Tag";

const DailyTasks = () => {
  const { containerRef, handleScroll } = useHorizontalScroll();

  const handleClickScrollRightButton = () => {
    handleScroll(289);
  };

  return (
    <section aria-label="daily-tasks">
      <Flex direction="column" gap="xl" position="relative">
        <Text typo="h2">오늘의 할 일</Text>
        <Flex
          aria-live="polite"
          className={dailyTaskBoxContainerStyle}
          gap="lg"
          ref={containerRef}
        >
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
                  <Button size="lg">출석 체크하기</Button>
                </Flex>
              }
            />
          ))}
        </Flex>
        <button
          aria-label="scroll-right-button"
          className={scrollRightButtonStyle}
          tabIndex={0}
          onClick={handleClickScrollRightButton}
        >
          <Image
            alt="scroll-right-button"
            height={36}
            src="/images/arrow-button.svg"
            width={36}
          />
        </button>
      </Flex>
    </section>
  );
};

export default DailyTasks;

const dailyTaskBoxStyle = {
  maxWidth: "366px",
  minWidth: "366px",
  paddingBottom: "20px",
  height: "229px",
};

const dailyTaskBoxContainerStyle = css({
  overflowX: "auto",
  scrollBehavior: "smooth",
  scrollbarWidth: "none",
});

const dailyTaskBoxContentContainerStyle = css({
  height: "185px",
  minWidth: "316px !important",
});

const scrollRightButtonStyle = css({
  position: "absolute",
  top: "114px",
  right: "101px",
  cursor: "pointer",
});
