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
    assignmentSubmissionStatus === null
      ? assignmentSubmissionMap.INITIAL
      : assignmentSubmissionMap[assignmentSubmissionStatus];

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
  NonNullable<AssignmentSubmissionStatusType>,
  { message: string; color: ComponentProps<typeof Tag>["color"] }
> & {
  INITIAL: { message: string; color: ComponentProps<typeof Tag>["color"] };
} = {
  FAILURE: {
    message: "제출 실패",
    color: "red",
  },
  SUCCESS: {
    message: "제출 완료",
    color: "blue",
  },
  INITIAL: {
    message: "",
    color: "grey",
  },
};
