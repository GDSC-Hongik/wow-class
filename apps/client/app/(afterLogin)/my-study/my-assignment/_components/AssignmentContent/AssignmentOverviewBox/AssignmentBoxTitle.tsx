import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import type { ComponentProps } from "react";
import type { Assignment } from "types/dtos/studyDetail";
import type { AssignmentSubmissionStatusType } from "types/entities/common/assignment";
import Tag from "wowds-ui/Tag";

interface AssignmentBoxTitleProps {
  assignment: Assignment;
}

export const AssignmentBoxTitle = ({ assignment }: AssignmentBoxTitleProps) => {
  const { week, title, assignmentSubmissionStatus } = assignment;
  const { color, message } =
    assignmentSubmissionStatus !== null
      ? assignmentSubmissionMap[assignmentSubmissionStatus]
      : assignmentSubmissionMap.null;

  return (
    <>
      <Text color="primary" typo="label2">
        {week}주차
      </Text>
      <Space height={16} />
      <Flex gap="xs">
        <Text as="h2" style={textStyle} typo="h2">
          {title}
        </Text>
        {assignmentSubmissionStatus !== null && (
          <Tag color={color ?? "blue"} variant="solid2">
            {message}
          </Tag>
        )}
      </Flex>
    </>
  );
};

const textStyle = {
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
};
const assignmentSubmissionMap: Record<
  Exclude<AssignmentSubmissionStatusType, null>, // null을 제외한 타입만 처리
  { message: string; color: ComponentProps<typeof Tag>["color"] }
> & {
  null: { message: string; color: ComponentProps<typeof Tag>["color"] }; // null에 대한 별도 처리
} = {
  FAILURE: {
    message: "제출 실패",
    color: "red",
  },
  SUCCESS: {
    message: "제출 완료",
    color: "blue",
  },
  null: {
    message: "",
    color: "grey",
  },
};
