import { Text } from "@wow-class/ui";
import { useAtom, useAtomValue } from "jotai";
import type { StudyStudentApiResponseDto } from "types/dtos/studyStudent";
import Table from "wowds-ui/Table";

import {
  outstandingStudentsAtom,
  selectedStudentsAtom,
} from "@/students/_contexts/StudyProvider";

import StudentListItem from "./StudentListItem";
import { StudyTasksThs } from "./StudyTasks";

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
  const { enabled } = useAtomValue(outstandingStudentsAtom);
  const [selectedStudents, setSelectedStudents] = useAtom(selectedStudentsAtom);

  if (!studentList) return null;
  if (!studentList.length) return <Text>스터디 수강생이 없어요.</Text>;

  const handleChangeSelectedStudents = (rows: number[]) => {
    setSelectedStudents(rows);
  };

  return (
    <Table
      fullWidth
      selectedRowsProp={selectedStudents}
      showCheckbox={enabled}
      onChange={handleChangeSelectedStudents}
    >
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
          <Table.Tr key={student.memberId} value={student.memberId}>
            <StudentListItem {...student} />
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

export default StudentList;
