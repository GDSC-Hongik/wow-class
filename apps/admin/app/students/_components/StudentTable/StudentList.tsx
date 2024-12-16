import { styled } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { useAtom, useAtomValue } from "jotai";
import type { StudyStudentApiResponseDto } from "types/dtos/studyStudent";
import Checkbox from "wowds-ui/Checkbox";
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
    const firstStudent = studentList.find(
      (student) => student.memberId === ids[0]
    )?.name;

    setSelectedStudents({
      firstStudentName: firstStudent,
      students: new Set(ids),
    });
  };

  const handleChangeAllChecked = () => {
    if (isAllChecked) {
      setSelectedStudents({
        firstStudentName: "",
        students: new Set(),
      });
      return;
    }
    handleChangeSelectedStudents(
      studentList.map((student) => student.memberId)
    );
  };

  const handleChangeSingleChecked = (id: number) => {
    if (selectedStudents.students.has(id)) {
      const newSet = new Set(selectedStudents.students);
      newSet.delete(id);
      handleChangeSelectedStudents([...newSet]);
      return;
    }
    handleChangeSelectedStudents([...selectedStudents.students, id]);
  };

  const isAllChecked = studentList.length === selectedStudents.students.size;

  return (
    <Table fullWidth showCheckbox={enabled}>
      <styled.thead>
        <styled.tr>
          {enabled && (
            <Table.Th style={tableCheckBoxStyle}>
              <Checkbox
                checked={isAllChecked}
                onChange={handleChangeAllChecked}
              />
            </Table.Th>
          )}
          {STUENT_INFO_LIST_BEFORE.map((info) => (
            <Table.Th key={info}>{info}</Table.Th>
          ))}
          {studentList[0] && (
            <StudyTasksThs tasks={studentList[0].studyTasks} />
          )}
          {STUDENT_INFO_LIST_AFTER.map((info) => (
            <Table.Th key={info}>{info}</Table.Th>
          ))}
        </styled.tr>
      </styled.thead>
      <Table.Tbody>
        {studentList.map((student) => (
          <styled.tr
            color="textBlack"
            height="44px"
            key={student.memberId}
            minWidth="100%"
            role="row"
            textStyle="body2"
            value={student.memberId}
          >
            {enabled && (
              <Table.Td style={tableCheckBoxStyle}>
                <Checkbox
                  checked={selectedStudents.students.has(student.memberId)}
                  onChange={() => handleChangeSingleChecked(student.memberId)}
                />
              </Table.Td>
            )}
            <StudentListItem {...student} />
          </styled.tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

export default StudentList;

const tableCheckBoxStyle = {
  minWidth: "15px",
  display: "flex",
  minHeight: "44px",
  justifyContent: "center",
  alignItems: "center",
};
