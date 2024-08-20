import { Flex, styled } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { padWithZero, parseISODate } from "@wow-class/utils";
import Image from "next/image";
import type { Assignment } from "types/dtos/study-detail-dashboard";

interface AssignmentSubmissionInfoProps {
  assignment: Assignment;
}

export const AssignmentSubmissionInfo = ({
  assignment,
}: AssignmentSubmissionInfoProps) => {
  const { year, month, day, hours, minutes } = parseISODate(
    assignment.deadline
  );

  const deadlineText = `종료일시: ${year}년 ${month}월 ${day}일 ${padWithZero(hours)}:${padWithZero(minutes)}까지`;

  const isFailure = assignment.assignmentSubmissionStatus === "FAILURE";
  const isPending = assignment.assignmentSubmissionStatus === "PENDING";
  const isNotSubmitted = assignment.submissionFailureType === "NOT_SUBMITTED";

  return (
    <>
      <Text color="sub">{deadlineText}</Text>
      {!(isPending || isNotSubmitted) && (
        <Flex alignItems="center" gap="xs">
          <Text as="div" color="sub">
            제출한 과제
            <Text as="span" color="textBlack">
              {assignment.title}
            </Text>
          </Text>
          <Image alt="dot" height={6} src="/images/dot.svg" width={6} />
          <styled.div color={isFailure ? "error" : "primary"}>
            {isFailure
              ? failMapping[assignment.submissionFailureType]
              : "글자수 충족"}
          </styled.div>
        </Flex>
      )}
    </>
  );
};

const failMapping: Record<Assignment["submissionFailureType"], string> = {
  LOCATION_UNIDENTIFIABLE: "위치 정보 확인 불가",
  WORD_COUNT_INSUFFICIENT: "글자수 부족",
  NOT_SUBMITTED: "제출 안함",
  NONE: "없음",
};
