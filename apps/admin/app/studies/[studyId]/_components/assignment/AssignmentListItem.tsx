import { cva } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Table, Text } from "@wow-class/ui";
import { padWithZero, parseISODate } from "@wow-class/utils";
import type { AssignmentApiResponseDto } from "types/dtos/assignmentList";
import getIsCurrentWeek from "utils/getIsCurrentWeek";

import AssignmentButtons from "./AssignmentButtons";

const AssignmentListItem = ({
  assignment,
  studyStartDate,
}: {
  assignment: AssignmentApiResponseDto;
  studyStartDate?: string;
}) => {
  const { studyDetailId, title, deadline, week, assignmentStatus } = assignment;

  const formatDateToEndString = (date: string | null) => {
    if (!date) return "-";

    const { year, month, day, hours, minutes } = parseISODate(date);
    return `종료 : ${year}년 ${month}월 ${day}일 ${padWithZero(hours)}:${padWithZero(minutes)}`;
  };

  const thisWeekAssignment =
    studyStartDate && getIsCurrentWeek(studyStartDate, week);
  const studyDeadline = formatDateToEndString(deadline);

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
            {studyDeadline}
          </Text>
        </Flex>
      </Table.Left>
      <Table.Right>
        <AssignmentButtons
          assignmentStatus={assignmentStatus}
          studyDetailId={+studyDetailId}
        />
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
