import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import { assignmentSubmissionMap } from "constants/assignmentSubmissionMap";
import type { StudyDetailTaskDto } from "types/dtos/studyDetail";
import type { DailyTaskType } from "types/entities/myStudy";
import Tag from "wowds-ui/Tag";

export const AssignmentBoxTitle = ({
  studyDetailTaskInfo,
}: {
  studyDetailTaskInfo: StudyDetailTaskDto<DailyTaskType>;
}) => {
  const { assignmentHistory, studySession, assignmentHistoryStatus } =
    studyDetailTaskInfo;
  const { position, assignmentTitle } = studySession;
  const { submissionStatus: assignmentSubmissionStatus } = assignmentHistory;
  const { tagColor, tagText } =
    assignmentSubmissionMap[assignmentHistoryStatus];

  return (
    <>
      <Text color="primary" typo="label2">
        {position}회차
      </Text>
      <Space height={16} />
      <Flex gap="xs">
        <Text as="h2" style={textStyle} typo="h2">
          {assignmentTitle}
        </Text>
        {assignmentHistoryStatus !== "BEFORE_SUBMISSION" && (
          <Tag color={tagColor ?? "blue"} variant="solid2">
            {tagText}
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
