"use client";
import { cva } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Table, Text } from "@wow-class/ui";
import { padWithZero, parseISODate } from "@wow-class/utils";
import { studyApi } from "apis/study/studyApi";
import { tags } from "constants/tags";
import Link from "next/link";
import type { AssignmentApiResponseDto } from "types/dtos/assignmentList";
import getIsCurrentWeek from "utils/getIsCurrentWeek";
import { revalidateTagByName } from "utils/revalidateTagByName";
import Button from "wowds-ui/Button";

const AssignmentListItem = ({
  assignment,
}: {
  assignment: AssignmentApiResponseDto;
}) => {
  const { studyDetailId, title, deadline, week, assignmentStatus } = assignment;
  const thisWeekAssignment = getIsCurrentWeek(deadline);
  const { year, month, day, hours, minutes } = parseISODate(deadline);

  const studyDeadline = `종료 : ${year}년 ${month}월 ${day}일 ${padWithZero(hours)}:${padWithZero(minutes)}`;

  const handleCancelAssignment = async (studyDetailId: number) => {
    const { success } = await studyApi.cancelAssignment(studyDetailId);
    if (success) {
      window.alert("휴강 처리에 성공했어요.");
      revalidateTagByName(tags.assignments);
    } else {
      window.alert("휴강 처리에 실패했어요.");
    }
  };
  return (
    <Table>
      <Table.Left style={TableLeftStyle}>
        <Flex alignItems="center" gap="xxs">
          <div
            className={ThisWeekBarStyle({
              type: thisWeekAssignment ? "thisWeek" : "notThisWeek",
            })}
          />
          <Text typo="body1">{week}주차</Text>
        </Flex>
        <Flex direction="column" gap="xxs">
          <Text typo="h3">{title || "-"}</Text>
          <Text color="sub" typo="body2">
            {deadline ? studyDeadline : "-"}
          </Text>
        </Flex>
      </Table.Left>
      <Table.Right>
        <>
          {assignmentStatus === "OPEN" ? (
            <Button
              asProp={Link}
              href={`/studies/assignments/${studyDetailId}`}
              size="sm"
              variant="outline"
            >
              과제 내용보기
            </Button>
          ) : (
            <Flex gap="sm">
              <Button
                color="sub"
                size="sm"
                variant="sub"
                onClick={() => handleCancelAssignment(studyDetailId)}
              >
                과제 휴강처리
              </Button>
              <Button
                asProp={Link}
                href={`/studies/assignments/${studyDetailId}/edit`}
                size="sm"
                variant="solid"
              >
                과제 개설하기
              </Button>
            </Flex>
          )}
        </>
      </Table.Right>
    </Table>
  );
};
export default AssignmentListItem;

const ThisWeekBarStyle = cva({
  base: {
    width: "4px",
    height: "18px",
  },
  variants: {
    type: {
      thisWeek: {
        backgroundColor: "primary",
      },
      notThisWeek: {
        backgroundColor: "transparent",
      },
    },
  },
});

const TableLeftStyle = {
  display: "flex",
  alignItems: "center",
  gap: "47px",
};
