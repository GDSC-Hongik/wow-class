import { AwardIcon, StarCheckIcon, Text } from "@wow-class/ui";
import Link from "next/link";
import type { CSSProperties } from "react";
import type {
  StudyStudentApiResponseDto,
  StudyTaskResponseDto,
} from "types/dtos/studyStudent";
import { formatNumberToPercent } from "utils/formatNumber";
import Table from "wowds-ui/Table";
import TextButton from "wowds-ui/TextButton";

import TaskTag from "./TaskTag";

const STUENT_INFO_LIST_BEFORE = [
  "수료",
  "1차 우수회원",
  "2차 우수회원",
  "이름",
  "학번",
  "디스코드 사용자명",
  "디스코드 닉네임",
  "깃허브 링크",
];

const STUDENT_INFO_LIST_AFTER = ["출석률", "과제 수행률", "전체 수행정도"];

const StudentList = ({
  studentList,
}: {
  studentList: StudyStudentApiResponseDto[] | [];
}) => {
  if (!studentList.length) return <Text>스터디 수강생이 없어요.</Text>;

  return (
    <Table>
      <Table.Thead>
        {STUENT_INFO_LIST_BEFORE.map((info) => (
          <Table.Th key={info}>{info}</Table.Th>
        ))}
        {studentList[0] && <StudyTasksThs tasks={studentList[0].studyTasks} />}
        {STUDENT_INFO_LIST_AFTER.map((info) => (
          <Table.Th key={info}>{info}</Table.Th>
        ))}
      </Table.Thead>
      <Table.Tbody>
        {studentList.map((student) => (
          <StudentListItem key={student.memberId} {...student} />
        ))}
      </Table.Tbody>
    </Table>
  );
};

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
    <Table.Tr key={studentId} value={studentId}>
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
    </Table.Tr>
  );
};

const StudyTasksThs = ({
  tasks,
}: {
  tasks: (
    | StudyTaskResponseDto<"ASSIGNMENT">
    | StudyTaskResponseDto<"ATTENDANCE">
  )[];
}) => {
  return tasks.map((task) => {
    const { week, taskType } = task;
    return (
      <Table.Th key={taskType + week}>
        {taskType === "ATTENDANCE" ? `${week}주차 출석` : `${week}주차 과제`}
      </Table.Th>
    );
  });
};

const StudyTasksTds = ({
  tasks,
}: {
  tasks: (
    | StudyTaskResponseDto<"ASSIGNMENT">
    | StudyTaskResponseDto<"ATTENDANCE">
  )[];
}) => {
  return tasks.map((task) => {
    const { week, taskType } = task;
    return (
      <Table.Td key={taskType + week}>
        <TaskTag task={task} />
      </Table.Td>
    );
  });
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
export default StudentList;
