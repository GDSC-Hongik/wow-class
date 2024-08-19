import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Table, Text } from "@wow-class/ui";
import { padWithZero, parseISODate } from "@wow-class/utils";
import {
  attendanceStatusColorMap,
  attendanceStatusMap,
} from "constants/attendanceStatusMap";
import type { ComponentProps } from "react";
import type {
  LevelType,
  StudyCurriculumDataType,
} from "types/entities/myStudy";
import Button from "wowds-ui/Button";
import Tag from "wowds-ui/Tag";

const mockData: StudyCurriculumDataType[] = [
  {
    week: 1,
    title: "(제목) 웹 개발의 역사",
    description:
      "(설명) 웹 개발의 역사를 알아보며, HTML, CSS, Javascript가 무엇인지 알아보자.",
    level: "BASIC",
    period: {
      startDate: "2024-08-18T17:13:29.913Z",
      endDate: "2024-08-25T17:13:29.913Z",
    },
    attendanceStatus: "ATTENDED",
    homeworkSubmissionStatus: "PENDING",
  },
  {
    week: 2,
    title: "(제목) 웹 개발의 역사",
    description:
      "(설명) 웹 개발의 역사를 알아보며, HTML, CSS, Javascript가 무엇인지 알아보자.",
    level: "BEGINNER",
    period: {
      startDate: "2024-08-18T17:13:29.913Z",
      endDate: "2024-08-25T17:13:29.913Z",
    },
    attendanceStatus: "NOT_ATTENDED",
    homeworkSubmissionStatus: "SUBMITTED",
  },
  {
    week: 3,
    title: "(제목) 웹 개발의 역사",
    description:
      "(설명) 웹 개발의 역사를 알아보며, HTML, CSS, Javascript가 무엇인지 알아보자.",
    level: "INTERMEDIATE",
    period: {
      startDate: "2024-08-18T17:13:29.913Z",
      endDate: "2024-08-25T17:13:29.913Z",
    },
    attendanceStatus: "PENDING",
    homeworkSubmissionStatus: "NOT_SUBMITTED",
  },
  {
    week: 4,
    title: "(제목) 웹 개발의 역사",
    description:
      "(설명) 웹 개발의 역사를 알아보며, HTML, CSS, Javascript가 무엇인지 알아보자.",
    level: "ADVANCED",
    period: {
      startDate: "2024-08-18T17:13:29.913Z",
      endDate: "2024-08-25T17:13:29.913Z",
    },
    attendanceStatus: "PENDING",
    homeworkSubmissionStatus: "NOT_SUBMITTED",
  },
];

const StudyCurriculum = () => {
  return (
    <section aria-label="study-curriculum">
      <Text className={studyCurriculumTextStyle} typo="h2">
        스터디 커리큘럼
      </Text>
      <Flex direction="column">
        {mockData.map(
          (
            {
              week,
              title,
              description,
              level,
              period: { startDate, endDate },
              attendanceStatus,
              homeworkSubmissionStatus,
            },
            index
          ) => {
            const { month: startMonth, day: startDay } =
              parseISODate(startDate);
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

            const weekPeriod = `${formattedStartMonth}.${formattedStartDay}-${formattedEndMonth}.${formattedEndDay}`;

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
                      <Tag color={levelColorMap[level]} variant="outline">
                        {levelMap[level]}
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
                    {weekPeriod}
                  </Text>
                  <Tag
                    aria-label="present"
                    color={attendanceStatusColorMap[attendanceStatus] || "grey"}
                    variant="solid2"
                  >
                    {attendanceStatusMap[attendanceStatus]}
                  </Tag>
                  <Button
                    aria-label="check-submitted-homework"
                    disabled={homeworkSubmissionStatus === "PENDING"}
                    size="sm"
                    style={homeworkButtonStyle}
                    variant={
                      homeworkSubmissionStatus === "SUBMITTED"
                        ? "outline"
                        : "solid"
                    }
                  >
                    {homeworkSubmissionStatusMap[homeworkSubmissionStatus]}
                  </Button>
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

const levelMap = {
  BASIC: "기초",
  BEGINNER: "초급",
  INTERMEDIATE: "중급",
  ADVANCED: "고급",
};

const levelColorMap: Record<LevelType, ComponentProps<typeof Tag>["color"]> = {
  BASIC: "blue",
  BEGINNER: "yellow",
  INTERMEDIATE: "green",
  ADVANCED: "red",
};

const homeworkSubmissionStatusMap = {
  SUBMITTED: "제출한 과제 확인",
  NOT_SUBMITTED: "과제 제출하기",
  PENDING: "과제 제출하기",
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

const homeworkButtonStyle = {
  minWidth: "131px",
};

const weekContainerStyle = css({
  width: "84px",
});
