import { cva } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Table, Text } from "@wow-class/ui";
import { padWithZero, parseISODate } from "@wow-class/utils";
import type { AssignmentApiResponseDto } from "types/dtos/assignmentList";
import type { AssignStatusType } from "types/entities/assignStatus";
import checkThisWeek from "utils/checkThisWeek";

import AssignmentControlButton from "./AssignmentControlButton";

const AssignmentItem = ({
  assignment,
}: {
  assignment: AssignmentApiResponseDto;
}) => {
  const {
    studyDetailId,
    title,
    deadline,
    week,
    descriptionLink,
    assignmentStatus,
  } = assignment;
  const thisWeekAssignment = checkThisWeek(deadline);
  const { year, month, day, hours, minutes } = parseISODate(deadline);
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
            {deadline
              ? `종료 : ${year}년 ${month}월 ${day}일 ${padWithZero(hours)}:${padWithZero(minutes)}`
              : "-"}
          </Text>
        </Flex>
      </Table.Left>
      <Table.Right>
        <AssignmentControlButton
          assignmentStatus={assignmentStatus as AssignStatusType}
          descriptionLink={descriptionLink}
          studyDetailId={studyDetailId}
          week={week}
        />
      </Table.Right>
    </Table>
  );
};
export default AssignmentItem;

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
