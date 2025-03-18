"use client";

import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import ItemSeperator from "components/ItemSeperator";
import { assignmentSubmissionMap } from "constants/assignmentSubmissionMap";
import { routePath } from "constants/routePath";
import { usePathname } from "next/navigation";
import type { CSSProperties } from "react";
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
  const { assignmentTitle } = studySession;
  const { submissionStatus: assignmentSubmissionStatus } = assignmentHistory;
  const { tagColor, tagText } =
    assignmentSubmissionMap[assignmentHistoryStatus];
  const pathname = usePathname();

  const isMyStudyPage = pathname === routePath["my-study"];
  return (
    <>
      <Flex gap="xs">
        <Text color="primary" typo="label2">
          과제
        </Text>
        {isMyStudyPage && (
          <>
            <ItemSeperator />
            <Text color="sub" typo="label2">
              스터디 이름
            </Text>
          </>
        )}
      </Flex>
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

const textStyle: CSSProperties = {
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
};
