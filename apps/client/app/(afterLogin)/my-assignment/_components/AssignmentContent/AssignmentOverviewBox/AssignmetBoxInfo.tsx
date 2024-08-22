import { Flex, styled } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { padWithZero, parseISODate } from "@wow-class/utils";
import Image from "next/image";
import type { Assignment } from "types/dtos/studyDetail";

interface AssignmentSubmissionInfoProps {
  assignment: Assignment;
}

export const AssignmentSubmissionInfo = ({
  assignment,
}: AssignmentSubmissionInfoProps) => {
  const { deadline, title, assignmentSubmissionStatus, submissionFailureType } =
    assignment;

  const { year, month, day, hours, minutes } = parseISODate(deadline);

  const deadlineText = `종료일시: ${year}년 ${month}월 ${day}일 ${padWithZero(
    hours
  )}:${padWithZero(minutes)}까지`;

  const isFailure = assignmentSubmissionStatus === "FAILURE";
  const isPending = assignmentSubmissionStatus === "PENDING";
  const isNotSubmitted = submissionFailureType === "NOT_SUBMITTED";

  return (
    <>
      <Text color="sub">{deadlineText}</Text>
      {!(isPending || isNotSubmitted) && (
        <Flex alignItems="center" gap="xs">
          <Text as="div" color="sub">
            제출한 과제
            <Text as="span" color="textBlack">
              {title}
            </Text>
          </Text>
          <Image alt="dot" height={6} src="/images/dot.svg" width={6} />
          <styled.div color={isFailure ? "error" : "primary"}>
            {isFailure ? failMapping[submissionFailureType] : "글자수 충족"}
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
