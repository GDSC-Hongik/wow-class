import { css } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";

import StudentListItem from "./StudentListItem";

const StudentList = () => {
  const studentList = [0];

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
          깃허브 링크
        </Text>
      </styled.tr>
      {studentList.map((student) => (
        <StudentListItem />
      ))}
    </styled.table>
  );
};

const tableThStyle = css({
  padding: "1rem",
  textAlign: "left",
});

export default StudentList;
