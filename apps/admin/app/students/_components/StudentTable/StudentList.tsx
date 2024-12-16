import { Text } from "@wow-class/ui";
import { useAtom, useAtomValue } from "jotai";
import type { StudyStudentApiResponseDto } from "types/dtos/studyStudent";
import Table from "wowds-ui/Table";

import {
  enabledOutstandingStudentsAtom,
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
  const { enabled } = useAtomValue(enabledOutstandingStudentsAtom);
  const [selectedStudents, setSelectedStudents] = useAtom(selectedStudentsAtom);

  if (!studentList) return null;
  if (!studentList.length) return <Text>스터디 수강생이 없어요.</Text>;

  const handleChangeSelectedStudents = (ids: number[]) => {
    const firstStudent =
      selectedStudents.firstStudentName ||
      studentList.find((student) => student.memberId === ids[0])?.name;

    setSelectedStudents({
      firstStudentName: firstStudent,
      students: new Set(ids),
    });
  };

  return (
    <Table fullWidth showCheckbox={enabled}>
      <Table.Thead
        onChange={() =>
          handleChangeSelectedStudents(
            studentList.map((student) => student.memberId)
          )
        }
      >
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
          <Table.Tr
            key={student.memberId}
            value={student.memberId}
            onChange={() =>
              handleChangeSelectedStudents([
                ...selectedStudents.students,
                student.memberId,
              ])
            }
          >
            <StudentListItem {...student} />
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

export default StudentList;
