import { cva } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Table, Text } from "@wow-class/ui";
import { padWithZero, parseISODate } from "@wow-class/utils";
import type { AssignmentApiResponseDto } from "types/dtos/assignmentList";
import getIsCurrentWeek from "utils/getIsCurrentWeek";

import AssignmentButtons from "./AssignmentButtons";

const AssignmentListItem = ({
  assignment,
}: {
  assignment: AssignmentApiResponseDto;
}) => {
  const { studyDetailId, title, deadline, week, assignmentStatus } = assignment;
  const thisWeekAssignment = getIsCurrentWeek(deadline);
  const { year, month, day, hours, minutes } = parseISODate(deadline);

  const studyDeadline = `종료 : ${year}년 ${month}월 ${day}일 ${padWithZero(hours)}:${padWithZero(minutes)}`;

  return (
    <Table>
      <Table.Left style={TableLeftStyle}>
        <Flex alignItems="center" flex={1} gap="xxs" minWidth="50px">
          <div
            className={ThisWeekBarStyle({
              type: thisWeekAssignment ? "thisWeek" : "notThisWeek",
            })}
          />
          <Text typo="body1">{week}주차</Text>
        </Flex>
        <Flex direction="column" flex={2} gap="xxs">
          <Text style={AssignmentTitleStyle} typo="h3">
            {title || "-"}
          </Text>
          <Text color="sub" typo="body2">
            {deadline ? studyDeadline : "-"}
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

const AssignmentTitleStyle = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "680px",
};
