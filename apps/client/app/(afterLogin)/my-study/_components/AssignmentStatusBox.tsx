import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { parseISODate } from "@wow-class/utils";
import LinkButton from "components/LinkButton";
import { routePath } from "constants/routePath";
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

  const attendanceDeadline = `${year}년 ${month}월 ${day}일 ${hours}:${minutes}까지`;
  const {
    label: assignmentSubmissionStatusLabel,
    color: assignmentSubmissionStatusColor,
  } = assignmentSubmissionStatusMap[assignmentSubmissionStatus];

  return (
    <Box
      style={dailyTaskBoxStyle}
      text={
        <Flex
          className={dailyTaskBoxContentContainerStyle}
          direction="column"
          justifyContent="space-between"
        >
          <Flex direction="column" gap="16px">
            <Text as="div" color="primary" typo="label2">
              과제
            </Text>
            <Flex direction="column" gap="4px">
              <Flex gap="8px">
                <Text as="h2" typo="h2">
                  {week}주차 과제
                </Text>
                <Tag color={assignmentSubmissionStatusColor} variant="solid2">
                  {assignmentSubmissionStatusLabel}
                </Tag>
              </Flex>
              <Text as="div" className={assignmentNameStyle} typo="body1">
                {name}
              </Text>
              <Text as="div" color="sub" typo="body1">
                {attendanceDeadline}
              </Text>
            </Flex>
          </Flex>
          <LinkButton
            disabled={assignmentSubmissionStatus !== "SUCCESS"}
            href={routePath["my-assignment"]}
            size="lg"
            style={assignmentButtonStyle}
          >
            나의 과제 바로가기
          </LinkButton>
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
  NOT_SUBMITTED: { label: "과제 휴강", color: "grey" },
  // TODO 과제 휴강 타입 수정 필요
};

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

const assignmentButtonStyle = {
  minWidth: "328px",
};

const assignmentNameStyle = css({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});
