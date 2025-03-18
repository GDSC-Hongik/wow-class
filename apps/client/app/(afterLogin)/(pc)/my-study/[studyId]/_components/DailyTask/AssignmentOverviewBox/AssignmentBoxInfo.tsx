import { Flex, styled } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { padWithZero, parseISODate } from "@wow-class/utils";
import Image from "next/image";
import type { StudyDetailTaskDto } from "types/dtos/studyDetail";
import type { AssignmentSubmissionFailureType } from "types/entities/common/assignment";
import type { DailyTaskType } from "types/entities/myStudy";
import { getAssignmentGithubFolderName } from "utils/getAssignmentGithubFolderName";

import { FailurePopover } from "./FailurePopover";

export const AssignmentBoxInfo = ({
  studyDetailTaskInfo,
}: {
  studyDetailTaskInfo: StudyDetailTaskDto<DailyTaskType>;
}) => {
  const { assignmentHistory, studySession, assignmentHistoryStatus, deadLine } =
    studyDetailTaskInfo;
  const {
    submissionStatus: assignmentSubmissionStatus,
    submissionFailureType,
    submissionLink,
  } = assignmentHistory;

  const { position } = studySession;
  const { year, month, day, hours, minutes } = parseISODate(deadLine);

  const deadlineText = `종료일시: ${year}년 ${month}월 ${day}일 ${padWithZero(
    hours
  )}:${padWithZero(minutes)}까지`;

  const isAssignmentSubmissionSuccess =
    assignmentHistoryStatus === "SUCCEEDED" &&
    assignmentSubmissionStatus === "SUCCESS";
  const isAssignmentSubmissionFailure =
    assignmentSubmissionStatus === "FAILURE";

  const isNotSubmitted =
    isAssignmentSubmissionFailure && submissionFailureType === "NOT_SUBMITTED";

  return (
    <>
      <Text color="sub">{deadlineText}</Text>
      {(isAssignmentSubmissionSuccess ||
        (isAssignmentSubmissionFailure && !isNotSubmitted)) && (
        <Flex alignItems="center" gap="xs">
          <Text as="div" color="sub">
            제출한 과제 :{" "}
            <Text as="span" color="textBlack">
              {`${getAssignmentGithubFolderName(submissionLink)}/week${position}`}
            </Text>
          </Text>
          <Image alt="dot" height={6} src="/images/dot.svg" width={6} />
          <styled.div
            color={isAssignmentSubmissionFailure ? "red.500" : "primary"}
          >
            {isAssignmentSubmissionFailure
              ? failMapping[submissionFailureType]
              : "글자수 충족"}
          </styled.div>
          <FailurePopover submissionFailureType={submissionFailureType} />
        </Flex>
      )}
    </>
  );
};

const failMapping: Record<AssignmentSubmissionFailureType, string> = {
  LOCATION_UNIDENTIFIABLE: "위치 확인 불가",
  WORD_COUNT_INSUFFICIENT: "글자수 부족",
  NOT_SUBMITTED: "제출 안함",
  NONE: "없음",
  UNKNOWN: "제출 실패",
};
