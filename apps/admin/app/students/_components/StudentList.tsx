import { css } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { studyApi } from "apis/study/studyApi";
import type { StudyStudentResponseDto } from "types/dtos/studyStudent";

import StudentListItem from "./StudentListItem";

const StudentList = async ({ studyId }: { studyId: number }) => {
  const studentList = await studyApi.getStudyStudents(studyId);

  if (!studentList) return null;

  return (
    <styled.table borderCollapse="collapse">
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
      {studentList.map((student: StudyStudentResponseDto) => (
        <StudentListItem key={student.memberId} {...student} />
      ))}
    </styled.table>
  );
};

const tableThStyle = css({
  padding: "1rem",
  textAlign: "left",
});

export default StudentList;
