import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { padWithZero, parseISODate } from "@wow-class/utils";
import type { ComponentProps } from "react";
import type { AssignmentSubmissionStatusType } from "types/entities/myStudy";
import Box from "wowds-ui/Box";
import Tag from "wowds-ui/Tag";

interface AssignmentStatusBoxProps {
  week: number;
  name: string;
  assignmentSubmissionStatus: AssignmentSubmissionStatusType;
  deadLine: string;
}

const AssignmentStatusBox = ({
  week,
  name,
  assignmentSubmissionStatus,
  deadLine,
}: AssignmentStatusBoxProps) => {
  const { year, month, day, hours, minutes } = parseISODate(deadLine);

  const attendanceDeadline = `${year}년 ${month}월 ${day}일 ${padWithZero(hours)}:${padWithZero(minutes)}까지`;
  const {
    label: assignmentSubmissionStatusLabel,
    color: assignmentSubmissionStatusColor,
  } = assignmentSubmissionStatusMap[assignmentSubmissionStatus];

  return (
    <Box
      style={dailyTaskBoxStyle}
      text={
        <Flex className={dailyTaskBoxContentContainerStyle} gap="18px">
          <Text
            as="div"
            className={assignmentTextStyle}
            color="primary"
            typo="body2"
          >
            과제
          </Text>
          <Flex direction="column" gap="16px">
            <Flex direction="column" gap="4px">
              <Flex alignItems="center" gap="8px">
                <Text as="h2" typo="body0">
                  {week}주차 과제
                </Text>
                {assignmentSubmissionStatusLabel && (
                  <Tag
                    className={tagStyle}
                    color={assignmentSubmissionStatusColor}
                    variant="solid2"
                  >
                    {assignmentSubmissionStatusLabel}
                  </Tag>
                )}
              </Flex>
              <Text as="div" className={assignmentNameStyle} typo="body2">
                {name}
              </Text>
              <Text as="div" color="sub" typo="body3">
                {attendanceDeadline}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      }
    />
  );
};

export default AssignmentStatusBox;

const assignmentSubmissionStatusMap: Record<
  AssignmentSubmissionStatusType,
  { label: string; color: ComponentProps<typeof Tag>["color"] }
> = {
  SUCCESS: { label: "제출 완료", color: "blue" },
  FAILURE: { label: "제출 실패", color: "red" },
  NOT_SUBMITTED: { label: "", color: "grey" },
};

const dailyTaskBoxStyle = {
  paddingBottom: "24px",
};

const dailyTaskBoxContentContainerStyle = css({});

const assignmentNameStyle = css({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

const tagStyle = css({
  height: "20px",
});

const assignmentTextStyle = css({
  paddingTop: "3.5px",
});
