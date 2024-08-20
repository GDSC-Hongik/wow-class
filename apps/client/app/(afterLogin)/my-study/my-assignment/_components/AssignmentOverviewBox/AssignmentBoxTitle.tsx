import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import type { ComponentProps } from "react";
import type { Assignment } from "types/dtos/study-detail-dashboard";
import type { AssignmentSubmissionStatusType } from "types/entities/assignment";
import Tag from "wowds-ui/Tag";

interface AssignmentBoxTitleProps {
  assignment: Assignment;
}

export const AssignmentBoxTitle = ({ assignment }: AssignmentBoxTitleProps) => (
  <>
    <Text color="primary" typo="label2">
      {assignment.week}주차
    </Text>
    <Space height={16} />
    <Flex gap="xs">
      <Text as="h2" typo="h2">
        {assignment.title}
      </Text>
      {!(assignment.assignmentSubmissionStatus === "PENDING") && (
        <Tag
          variant="solid2"
          color={
            assignmentSubmissionMap[assignment.assignmentSubmissionStatus]
              .color ?? "blue"
          }
        >
          {
            assignmentSubmissionMap[assignment.assignmentSubmissionStatus]
              .message
          }
        </Tag>
      )}
    </Flex>
  </>
);

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
