import { Flex, styled } from "@styled-system/jsx";
import { Space, Table, Text } from "@wow-class/ui";
import { padWithZero, parseDate } from "@wow-class/utils";
import type { ComponentProps } from "react";
import type { AssignmentHistoryDto } from "types/dtos/study-history";
import Button from "wowds-ui/Button";
import Tag from "wowds-ui/Tag";
import TextButton from "wowds-ui/TextButton";

interface HomeworkHistoryItemProps {
  history: AssignmentHistoryDto;
}

export const HomeworkHistoryItem = ({ history }: HomeworkHistoryItemProps) => {
  const {
    assignmentHistoryId,
    week,
    deadline,
    title,
    descriptionLink,
    assignmentSubmissionStatus,
    submissionLink,
  } = history;

  const deadlineDate = parseDate(deadline);

  const deadlineText = `종료: ${deadlineDate.year}년 ${deadlineDate.month}월 ${deadlineDate.day}일 ${padWithZero(
    deadlineDate.hours
  )}:${padWithZero(deadlineDate.minutes)}`;

  return (
    <Table key={assignmentHistoryId}>
      <Table.Left>
        <Text as="h3" typo="h3">
          {week}주차
        </Text>
        <Space width={50} />
        <Table.Content subText={deadlineText} text={title} />
      </Table.Left>
      <Table.Right>
        <Flex
          justifyContent="center"
          minWidth="202px"
          paddingX="36px"
          textStyle="body1"
        >
          {descriptionLink ? (
            <TextButton as="a" href={descriptionLink} text="과제 명세 확인" />
          ) : (
            "-"
          )}
        </Flex>
        <styled.div paddingX="32px">
          <Tag
            color={statusMapping[assignmentSubmissionStatus].color}
            variant="solid2"
          >
            {statusMapping[assignmentSubmissionStatus].message}
          </Tag>
        </styled.div>
        <Flex
          justifyContent="center"
          minWidth="182px"
          paddingX="25px"
          textStyle="body1"
        >
          {submissionLink ? (
            <Button as="a" href={submissionLink} size="sm" variant="outline">
              제출한 과제 확인
            </Button>
          ) : (
            "-"
          )}
        </Flex>
      </Table.Right>
    </Table>
  );
};

const statusMapping: Record<
  AssignmentHistoryDto["assignmentSubmissionStatus"],
  { message: string; color: ComponentProps<typeof Tag>["color"] }
> = {
  FAIL: {
    message: "제출 실패",
    color: "red",
  },
  SUCCESS: {
    message: "제출 완료",
    color: "blue",
  },
};
