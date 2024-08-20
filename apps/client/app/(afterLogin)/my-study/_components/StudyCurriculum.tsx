import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Table, Text } from "@wow-class/ui";
import { padWithZero, parseISODate } from "@wow-class/utils";
import LinkButton from "components/LinkButton";
import { attendanceStatusMap } from "constants/attendanceStatusMap";
import { studyCurriculumMockData } from "constants/mockData";
import type { ComponentProps } from "react";
import type { LevelType } from "types/entities/myStudy";
import Tag from "wowds-ui/Tag";

const formatWeekPeriod = (startDate: string, endDate: string) => {
  const { month: startMonth, day: startDay } = parseISODate(startDate);
  const { month: endMonth, day: endDay } = parseISODate(endDate);

  const {
    formattedStartMonth,
    formattedStartDay,
    formattedEndMonth,
    formattedEndDay,
  } = {
    formattedStartMonth: padWithZero(startMonth),
    formattedStartDay: padWithZero(startDay),
    formattedEndMonth: padWithZero(endMonth),
    formattedEndDay: padWithZero(endDay),
  };

  return `${formattedStartMonth}.${formattedStartDay}-${formattedEndMonth}.${formattedEndDay}`;
};

const StudyCurriculum = () => {
  return (
    <section aria-label="study-curriculum">
      <Text className={studyCurriculumTextStyle} typo="h2">
        스터디 커리큘럼
      </Text>
      <Flex direction="column">
        {studyCurriculumMockData.map(
          (
            {
              week,
              title,
              description,
              level,
              period: { startDate, endDate },
              attendanceStatus,
              assignmentSubmissionStatus,
            },
            index
          ) => {
            const { label: levelLabel, color: levelColor } = levelMap[level];
            const {
              label: attendanceStatusLabel,
              color: attendanceStatusColor,
            } = attendanceStatusMap[attendanceStatus];
            const assignmentButtonText =
              assignmentSubmissionStatus === "SUCCESS"
                ? "제출한 과제 확인"
                : "과제 제출하기";

            return (
              <Table key={index}>
                <Table.Left className={leftColStyle}>
                  <div className={weekContainerStyle}>
                    <Text as="h5" typo="body1">
                      {week}주차
                    </Text>
                  </div>
                  <Flex direction="column" gap={4.5} justifyContent="center">
                    <Flex alignItems="center" gap="xs">
                      <Text as="h3" typo="h3">
                        {title}
                      </Text>
                      <Tag color={levelColor} variant="outline">
                        {levelLabel}
                      </Tag>
                    </Flex>
                    <Text
                      as="h3"
                      className={studyWeekDescriptionStyle}
                      color="sub"
                      typo="h3"
                    >
                      {description}
                    </Text>
                  </Flex>
                </Table.Left>
                <Table.Right className={rightColStyle}>
                  <Text as="h5" typo="body1">
                    {formatWeekPeriod(startDate, endDate)}
                  </Text>
                  <Tag
                    aria-label="present"
                    color={attendanceStatusColor || "grey"}
                    variant="solid2"
                  >
                    {attendanceStatusLabel}
                  </Tag>
                  <LinkButton
                    aria-label="check-submitted-assignment"
                    disabled={assignmentSubmissionStatus === "PENDING"}
                    href=""
                    size="sm"
                    style={assignmentButtonStyle}
                    variant={
                      assignmentSubmissionStatus === "SUCCESS"
                        ? "outline"
                        : "solid"
                    }
                  >
                    {assignmentButtonText}
                  </LinkButton>
                </Table.Right>
              </Table>
            );
          }
        )}
      </Flex>
    </section>
  );
};

export default StudyCurriculum;

const levelMap: Record<
  LevelType,
  { label: string; color: ComponentProps<typeof Tag>["color"] }
> = {
  BASIC: { label: "기초", color: "blue" },
  BEGINNER: { label: "초급", color: "yellow" },
  INTERMEDIATE: { label: "중급", color: "green" },
  ADVANCED: { label: "고급", color: "red" },
};

const studyCurriculumTextStyle = css({
  marginBottom: "xl",
});

const leftColStyle = css({
  width: "514px",
});

const studyWeekDescriptionStyle = css({
  width: "430px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

const rightColStyle = css({
  flexGrow: 1,
  justifyContent: "space-between !important",
  padding: "0 25px 0 32px",
});

const assignmentButtonStyle = {
  minWidth: "131px",
};

const weekContainerStyle = css({
  width: "84px",
});
