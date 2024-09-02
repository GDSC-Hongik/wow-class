import { css } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import { Space, Table, Text } from "@wow-class/ui";
import { padWithZero, parseISODate } from "@wow-class/utils";
import Link from "next/link";
import type { ComponentProps } from "react";
import type { Assignment } from "types/dtos/studyDetail";
import type { AssignmentHistoryDto } from "types/dtos/studyHistory";
import Button from "wowds-ui/Button";
import Tag from "wowds-ui/Tag";
import TextButton from "wowds-ui/TextButton";

interface AssignmentHistoryItemProps {
  history: AssignmentHistoryDto;
}

export const AssignmentHistoryItem = ({
  history,
}: AssignmentHistoryItemProps) => {
  const {
    week,
    deadline,
    title,
    descriptionLink,
    assignmentSubmissionStatus,
    submissionFailureType,
    submissionLink,
    status,
  } = history;

  const { year, month, day, hours, minutes } = parseISODate(deadline);

  const deadlineText = `종료: ${year}년 ${month}월 ${day}일 ${padWithZero(hours)}:${padWithZero(minutes)}`;

  const { message, color } =
    status === "CANCELLED"
      ? assignmentSubmissionMap.CANCELLED
      : assignmentSubmissionStatus &&
          assignmentSubmissionMap[assignmentSubmissionStatus]
        ? assignmentSubmissionMap[assignmentSubmissionStatus]
        : assignmentSubmissionMap.CANCELLED;

  return (
    <Table>
      <Table.Left>
        <Text as="h3" typo="h3">
          {week}주차
        </Text>
        <Space width={50} />
        <Flex direction="column" gap="xxs" justifyContent="center">
          <Text typo="h3">{title}</Text>
          <Text color="sub" typo="body2">
            {deadlineText}
          </Text>
        </Flex>
      </Table.Left>
      <Table.Right>
        <Flex className={buttonContainerStyle} minWidth="202px" paddingX="36px">
          {descriptionLink ? (
            <Link href={descriptionLink} target="_blank">
              <TextButton text="과제 명세 확인" />
            </Link>
          ) : (
            "-"
          )}
        </Flex>
        <styled.div paddingX="32px">
          <Tag color={color} variant="solid2">
            {message}
          </Tag>
          <Text color="error">
            {assignmentSubmissionStatus === "FAILURE" &&
              failMapping[submissionFailureType ?? "NONE"]}
          </Text>
        </styled.div>
        <Flex className={buttonContainerStyle} minWidth="182px" paddingX="25px">
          {submissionLink ? (
            <Link href={submissionLink} target="_blank">
              <Button size="sm" variant="outline">
                제출한 과제 확인
              </Button>
            </Link>
          ) : (
            "-"
          )}
        </Flex>
      </Table.Right>
    </Table>
  );
};

const assignmentSubmissionMap: Record<
  "CANCELLED" | "FAILURE" | "SUCCESS",
  { message: string; color: ComponentProps<typeof Tag>["color"] }
> = {
  CANCELLED: { message: "과제 휴강", color: "grey" },
  FAILURE: { message: "제출 실패", color: "red" },
  SUCCESS: { message: "제출 완료", color: "blue" },
};

const buttonContainerStyle = css({
  justifyContent: "center",
  textStyle: "body1",
});

const failMapping: Record<Assignment["submissionFailureType"], string> = {
  LOCATION_UNIDENTIFIABLE: "위치확인불가",
  WORD_COUNT_INSUFFICIENT: "글자수부족",
  NOT_SUBMITTED: "미제출",
  NONE: "",
};
