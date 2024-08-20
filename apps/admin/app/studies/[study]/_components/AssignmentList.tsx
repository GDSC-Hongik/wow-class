import { cva } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Space, Table, Text } from "@wow-class/ui";
import { parseISODate } from "@wow-class/utils";
import { studyInfoApi } from "apis/study/studyInfoApi";
import { assignmentList } from "constants/mockData";
import type { AssignStatusType } from "types/entities/assignStatus";
import checkThisWeek from "utils/checkThisWeek";

import CancelStudyButton from "./CancelStudyButton";
const AssignmentList = async () => {
  // const assignmentList = await studyInfoApi.getAssignmentList(2);

  return (
    <section>
      <Text typo="h2">주차별 과제</Text>
      <Space height={24} />
      {assignmentList?.map(
        (
          {
            studyDetailId,
            title,
            deadline,
            week,
            descriptionLink,
            assignmentStatus,
          },
          index
        ) => {
          const thisWeekAssignment = checkThisWeek(deadline);
          const { year, month, day, hours, minutes } = parseISODate(deadline);
          return (
            <Table key={`${studyDetailId}-${index}`}>
              <Table.Left>
                <Flex alignItems="center" gap="47px">
                  <Flex alignItems="center" gap="xxs">
                    <div
                      className={ThisWeekBarStyle({
                        type: thisWeekAssignment ? "thisWeek" : "notThisWeek",
                      })}
                    />
                    <Text typo="body1">{week}주차</Text>
                  </Flex>
                  <Flex direction="column" gap="xxs">
                    <Text typo="h3">{title}</Text>
                    <Text color="sub" typo="body2">
                      {deadline !== "-"
                        ? `종료 : ${year}년 ${month}월 ${day}일 ${hours}:${minutes}`
                        : "-"}
                    </Text>
                  </Flex>
                </Flex>
              </Table.Left>
              <Table.Right>
                <CancelStudyButton
                  assignmentStatus={assignmentStatus as AssignStatusType}
                  descriptionLink={descriptionLink}
                  studyDetailId={studyDetailId}
                />
              </Table.Right>
            </Table>
          );
        }
      )}
    </section>
  );
};

export default AssignmentList;

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
