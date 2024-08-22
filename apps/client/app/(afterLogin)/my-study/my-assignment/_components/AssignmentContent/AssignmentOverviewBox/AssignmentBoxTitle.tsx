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
    assignmentSubmissionMap[assignmentSubmissionStatus];

  return (
    <>
      <Text color="primary" typo="label2">
        {week}주차
      </Text>
      <Space height={16} />
      <Flex gap="xs">
        <Text as="h2" typo="h2">
          {title}
        </Text>
        {assignmentSubmissionStatus !== "PENDING" && (
          <Tag color={color ?? "blue"} variant="solid2">
            {message}
          </Tag>
        )}
      </Flex>
    </>
  );
};

const assignmentSubmissionMap: Record<
  AssignmentSubmissionStatusType,
  { message: string; color: ComponentProps<typeof Tag>["color"] }
> = {
  FAILURE: {
    message: "제출 실패",
    color: "red",
  },
  SUCCESS: {
    message: "제출 완료",
    color: "blue",
  },
  PENDING: {
    message: "",
    color: "grey",
  },
};
