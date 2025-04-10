import { cva } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Space, Table, Text } from "@wow-class/ui";
import { padWithZero, parseISODate } from "@wow-class/utils";
import type { StudySessionApiResponseV2Dto } from "types/dtos/studyList";
import Box from "wowds-ui/Box";

const CurriculumListItem = ({
  curriculum,
  studyType,
}: {
  curriculum: StudySessionApiResponseV2Dto;
  studyType?: string;
}) => {
  const {
    position,
    lessonTitle,
    description = "",
    lessonPeriod,
    assignmentTitle,
    assignmentPeriod,
  } = curriculum;
  const { startDate, endDate } = lessonPeriod;
  const {
    month: startMonth,
    day: startDay,
    hours: startHour,
    minutes: startMinute,
  } = parseISODate(startDate);
  const { hours: endHour, minutes: endMinute } = parseISODate(endDate);

  const { month: assignmentStartMonth, day: assignmentStartDay } = parseISODate(
    assignmentPeriod.startDate
  );
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
      <Table.Left style={{ width: "100%" }}>
        <Flex alignItems="baseline" gap="48px" width="100%">
          <Flex direction="column" minWidth={52}>
            <Text typo="body1">{position}회차</Text>
            <Text color="sub" typo="body2">
              {startMonth}월 {startDay}일
            </Text>
            <Text color="sub" style={TimeStyle} typo="body2">
              {studyType !== "ASSIGNMENT" && `${startTime}-${endTime}`}
            </Text>
          </Flex>

          <Flex direction="column" gap="xxs" width="100%">
            <Flex alignItems="center" gap="xs" width="100%">
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
                  <Text>{assignmentTitle || "과제 제목을 입력해주세요"}</Text>
                  <Text
                    color="primary"
                    style={{ whiteSpace: "nowrap" }}
                    typo="body2"
                  >
                    과제 기간: {assignmentStartMonth}월 {assignmentStartDay}일 ~{" "}
                    {assignmentEndMonth}월 {assignmentEndDay}일{" "}
                    {assignmentEndTime}
                  </Text>
                </Flex>
              }
            />
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
  minWidth: "100%",
};

const TimeStyle = { whiteSpace: "nowrap" };
