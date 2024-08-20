import { css } from "@styled-system/css";
import { Flex, styled } from "@styled-system/jsx";
import { Space, Table, Text } from "@wow-class/ui";
import { padWithZero, parseISODate } from "@wow-class/utils";
import Link from "next/link";
import type { ComponentProps } from "react";
import type { AssignmentHistoryDto } from "types/dtos/study-history";
import type { HomeworkSubmissionStatusType } from "types/entities/homework";
import Button from "wowds-ui/Button";
import Tag from "wowds-ui/Tag";
import TextButton from "wowds-ui/TextButton";

interface HomeworkHistoryItemProps {
  history: AssignmentHistoryDto;
}

export const HomeworkHistoryItem = ({ history }: HomeworkHistoryItemProps) => {
  const {
    week,
    deadline,
    title,
    descriptionLink,
    assignmentSubmissionStatus,
    submissionLink,
  } = history;

  const { year, month, day, hours, minutes } = parseISODate(deadline);

  const deadlineText = `종료: ${year}년 ${month}월 ${day}일 ${padWithZero(hours)}:${padWithZero(minutes)}`;

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
          <Tag
            color={homeworkSubmissionMap[assignmentSubmissionStatus].color}
            variant="solid2"
          >
            {homeworkSubmissionMap[assignmentSubmissionStatus].message}
          </Tag>
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

const homeworkSubmissionMap: Record<
  HomeworkSubmissionStatusType,
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
};

const buttonContainerStyle = css({
  justifyContent: "center",
  textStyle: "body1",
});
