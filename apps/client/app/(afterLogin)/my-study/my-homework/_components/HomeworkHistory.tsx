import { Flex, styled } from "@styled-system/jsx";
import { Space, Table, Text } from "@wow-class/ui";
import { padWithZero, parseDate } from "@wow-class/utils";
import { studyHistoryApi } from "apis/studyHistoryApi";
import type { ComponentProps } from "react";
import Button from "wowds-ui/Button";
import Tag from "wowds-ui/Tag";
import TextButton from "wowds-ui/TextButton";

import { history } from "./mockData";

export const HomeworkHistory = async () => {
  //const studyHistory = await studyHistoryApi.getStudyHistory(1);
  const studyHistories = history;
  return (
    <>
      <Text as="h2" typo="h2">
        과제 히스토리
      </Text>
      <Text color="sub" typo="body1">
        지난 과제의 제출 내역을 확인해요.
      </Text>
      <Space height={24} />
      {studyHistories.map((history) => {
        const deadlineDate = parseDate(history.deadline);
        return (
          <Table key={history.assignmentHistoryId}>
            <Table.Left>
              <Text as="h3" typo="h3">
                {history.week}주차
              </Text>
              <Space width={50} />
              <Table.Content
                subText={`종료: ${deadlineDate.year}년 ${deadlineDate.month}월 ${deadlineDate.day}일 ${padWithZero(deadlineDate.hours)}:${padWithZero(deadlineDate.minutes)}`}
                text={history.title}
              />
            </Table.Left>
            <Table.Right>
              <Flex
                justifyContent="center"
                minWidth="202px"
                paddingX="36px"
                textStyle="body1"
              >
                {history.descriptionLink ? (
                  <TextButton
                    as="a"
                    href={history.descriptionLink}
                    text="과제 명세 확인"
                  />
                ) : (
                  "-"
                )}
              </Flex>
              <styled.div paddingX="32px">
                <Tag
                  variant="solid2"
                  color={
                    statusMapping[history.assignmentSubmissionStatus].color
                  }
                >
                  {statusMapping[history.assignmentSubmissionStatus].message}
                </Tag>
              </styled.div>
              <Flex
                justifyContent="center"
                minWidth="182px"
                paddingX="25px"
                textStyle="body1"
              >
                {history.submissionLink ? (
                  <Button
                    as="a"
                    href={history.submissionLink}
                    size="sm"
                    variant="outline"
                  >
                    제출한 과제 확인
                  </Button>
                ) : (
                  "-"
                )}
              </Flex>
            </Table.Right>
          </Table>
        );
      })}
    </>
  );
};

const statusMapping: Record<
  "FAIL" | "COMPLETED" | "PENDING",
  { message: string; color: ComponentProps<typeof Tag>["color"] }
> = {
  FAIL: {
    message: "제출 실패",
    color: "red",
  },
  COMPLETED: {
    message: "제출 완료",
    color: "blue",
  },
  PENDING: {
    message: "과제 휴강",
    color: "grey",
  },
};
