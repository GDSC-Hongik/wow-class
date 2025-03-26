import { cva } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Space, Table, Text } from "@wow-class/ui";
import { padWithZero, parseISODate } from "@wow-class/utils";
import type { ComponentProps } from "react";
import type { CurriculumApiResponseDto } from "types/dtos/curriculumList";
import type { StudySessionApiResponseV2Dto } from "types/dtos/studyList";
import type { StudyDifficultyType } from "types/entities/study";
import { displayPartsToString } from "typescript";
import getIsCurrentWeek from "utils/getIsCurrentWeek";
import { color } from "wowds-tokens";
import Box from "wowds-ui/Box";
import type Tag from "wowds-ui/Tag";

const CurriculumListItem = ({
  curriculum,
}: {
  curriculum: StudySessionApiResponseV2Dto;
}) => {
  const {
    studySessionId,
    position,
    lessonTitle,
    description = "",
    lessonAttendanceNumber,
    lessonPeriod,
    assignmentTitle,
    assignmentDescriptionLink,
    assignmentPeriod,
    studyId,
  } = curriculum;
  const { startDate, endDate } = lessonPeriod;
  const {
    month: startMonth,
    day: startDay,
    hours: startHour,
    minutes: startMinute,
  } = parseISODate(startDate);
  const {
    month: endMonth,
    day: endDay,
    hours: endHour,
    minutes: endMinute,
  } = parseISODate(endDate);

  const {
    month: assignmentStartMonth,
    day: assignmentStartDay,
    hours: assignmentStartHour,
    minutes: assignmentStartMinute,
  } = parseISODate(assignmentPeriod.startDate);
  const {
    month: assignmentEndMonth,
    day: assignmentEndDay,
    hours: assignmentEndHour,
    minutes: assignmentEndMinute,
  } = parseISODate(assignmentPeriod.endDate);

  const startTime = `${padWithZero(startHour)}:${padWithZero(startMinute)}`;
  const endTime = `${padWithZero(endHour)}:${padWithZero(endMinute)}`;
  const assignmentEndTime = `${padWithZero(assignmentEndHour)}:${padWithZero(assignmentEndMinute)}`;

  return (
    <Table>
      <Table.Left>
        <Flex alignItems="baseline" gap="48px">
          <Flex direction="column" minWidth={52}>
            <Text typo="body1">{position}회차</Text>
            <Text color="sub" typo="body2">
              {startMonth}월 {startDay}일
            </Text>
            <Text color="sub" typo="body2">
              {startTime}-{endTime}
            </Text>
          </Flex>

          <Flex direction="column" gap="xxs">
            <Flex alignItems="center" gap="xs">
              <Text typo="h3">
                {lessonTitle || "스터디 제목을 작성해주세요."}
              </Text>
            </Flex>
            <Text color="sub" style={CurriculumDescriptionStyle} typo="body2">
              {description || "스터디 상세 설명을 작성해주세요."}
            </Text>
            <Space height={18.5} />
            <Box
              style={AssignmentDescriptionStyle}
              text={
                <Flex
                  direction="column"
                  gap="xxs"
                  style={AssignmentDescriptionStyle}
                  width="100%"
                >
                  <Text>{assignmentTitle}</Text>
                  <Text color="primary" typo="body2">
                    과제 기간: {assignmentStartMonth}월 {assignmentStartDay}일 ~{" "}
                    {assignmentEndMonth}월 {assignmentEndDay}일{" "}
                    {assignmentEndTime}
                  </Text>
                </Flex>
              }
            />
            <Space height={50} />
          </Flex>
        </Flex>
      </Table.Left>
    </Table>
  );
};

export default CurriculumListItem;

const CurriculumDescriptionStyle = {
  maxWidth: "650px",
};

const AssignmentDescriptionStyle = {
  flex: 1,
  width: "100%",
};
