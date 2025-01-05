import { AwardIcon, StarCheckIcon, Text } from "@wow-class/ui";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { StudyStudentApiResponseDto } from "types/dtos/studyStudent";
import { formatNumberToPercent } from "utils/formatNumber";
import Table from "wowds-ui/Table";
import TextButton from "wowds-ui/TextButton";

import { StudyTasksTds } from "./StudyTasks";

const StudentListItem = ({
  studyHistoryStatus,
  isFirstRoundOutstandingStudent,
  isSecondRoundOutstandingStudent,
  name,
  studentId,
  discordUsername,
  nickname,
  githubLink,
  studyTasks,
  assignmentRate,
  attendanceRate,
}: StudyStudentApiResponseDto) => {
  return (
    <>
      <Table.Td>
        <StarCheckIcon checked={studyHistoryStatus === "COMPLETED"} />
      </Table.Td>
      <Table.Td>
        <Text style={awardTextStyle} typo="body2">
          <AwardIcon disabled={!isFirstRoundOutstandingStudent} />
          1차
        </Text>
      </Table.Td>
      <Table.Td>
        <Text style={awardTextStyle} typo="body2">
          <AwardIcon disabled={!isSecondRoundOutstandingStudent} />
          2차
        </Text>
      </Table.Td>
      <Table.Td>{name}</Table.Td>
      <Table.Td>{studentId}</Table.Td>
      <Table.Td>{discordUsername}</Table.Td>
      <Table.Td>{nickname}</Table.Td>
      <Table.Td>
        <TextButton
          asProp={Link}
          href={githubLink || ""}
          style={textButtonStyle}
          text={githubLink}
        />
      </Table.Td>
      <StudyTasksTds tasks={studyTasks} />
      <Table.Td>{formatNumberToPercent(assignmentRate)}</Table.Td>
      <Table.Td>{formatNumberToPercent(attendanceRate)}</Table.Td>
    </>
  );
};

const textButtonStyle: CSSProperties = {
  width: "fit-content",
  padding: 0,
};

const awardTextStyle: CSSProperties = {
  display: "flex",
  gap: "0.25rem",
  alignItems: "center",
};

export default StudentListItem;
