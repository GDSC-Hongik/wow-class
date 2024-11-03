import { AwardIcon, Text } from "@wow-class/ui";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { StudyStudentApiResponseDto } from "types/dtos/studyStudent";
import Table from "wowds-ui/Table";
import TextButton from "wowds-ui/TextButton";

const StudentList = ({
  studentList,
}: {
  studentList: StudyStudentApiResponseDto[] | [];
}) => {
  if (!studentList.length) return <Text>스터디 수강생이 없어요.</Text>;

  return (
    <Table>
      <Table.Thead>
        <Table.Th>수료</Table.Th>
        <Table.Th>1차 우수회원</Table.Th>
        <Table.Th>2차 우수회원</Table.Th>
        <Table.Th>이름</Table.Th>
        <Table.Th>학번</Table.Th>
        <Table.Th>디스코드 사용자명</Table.Th>
        <Table.Th>디스코드 닉네임</Table.Th>
        <Table.Th>깃허브 링크</Table.Th>
      </Table.Thead>
      <Table.Tbody>
        {studentList.map((student) => {
          const {
            studyHistoryStatus,
            isFirstRoundOutstandingStudent,
            isSecondRoundOutstandingStudent,
            name,
            studentId,
            discordUsername,
            nickname,
            githubLink,
          } = student;
          return (
            <Table.Tr key={studentId} value={studentId}>
              <Table.Td>{studyHistoryStatus}</Table.Td>
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
            </Table.Tr>
          );
        })}
      </Table.Tbody>
    </Table>
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
export default StudentList;
