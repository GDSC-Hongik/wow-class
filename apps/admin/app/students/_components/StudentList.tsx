import { css } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import type { StudyStudentResponseDto } from "types/dtos/studyStudent";

import StudentListItem from "./StudentListItem";

const StudentList = ({
  studentList,
}: {
  studentList: StudyStudentResponseDto[] | null;
}) => {
  if (!studentList || !studentList.length)
    return <Text>스터디 수강생이 없어요.</Text>;

  return (
    <styled.table borderCollapse="collapse">
      <thead>
        <styled.tr borderBottom="1px solid" borderColor="sub">
          <Text as="th" className={tableThStyle} typo="body2">
            이름
          </Text>
          <Text as="th" className={tableThStyle} typo="body2">
            학번
          </Text>
          <Text as="th" className={tableThStyle} typo="body2">
            디스코드 사용자명
          </Text>
          <Text as="th" className={tableThStyle} typo="body2">
            디스코드 닉네임
          </Text>
          <Text as="th" className={tableThStyle} typo="body2">
            깃허브 링크
          </Text>
        </styled.tr>
      </thead>
      <tbody>
        {studentList.map((student: StudyStudentResponseDto) => (
          <StudentListItem key={student.memberId} {...student} />
        ))}
      </tbody>
    </styled.table>
  );
};

const tableThStyle = css({
  padding: "1rem",
  textAlign: "left",
});

export default StudentList;
