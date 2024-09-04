import { css } from "@styled-system/css";
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
  const {
    studyDetailId,
    title,
    deadline,
    week,
    assignmentStatus,
    studyDetailStartDate,
  } = assignment;

  const formatDateToEndString = (date: string | null) => {
    if (!date) return "-";

    const { year, month, day, hours, minutes } = parseISODate(date);
    return `종료 : ${year}년 ${month}월 ${day}일 ${padWithZero(hours)}:${padWithZero(minutes)}`;
  };

  const thisWeekAssignment = getIsCurrentWeek(studyDetailStartDate);
  const studyDeadline = formatDateToEndString(deadline);

  return (
    <Table>
      <Table.Left style={TableLeftStyle}>
        <Flex alignItems="center" gap="xxs" minWidth="50px">
          {thisWeekAssignment && <div className={ThisWeekBarStyle} />}
          <Text typo="body1">{week}주차</Text>
        </Flex>
        <Flex direction="column" gap="xxs">
          <Text style={AssignmentTitleStyle} typo="h3">
            {title || "-"}
          </Text>
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

const ThisWeekBarStyle = css({
  width: "4px",
  height: "18px",
  backgroundColor: "primary",
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
