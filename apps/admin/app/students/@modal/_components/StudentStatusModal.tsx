"use client";

import { Flex, styled } from "@styled-system/jsx";
import { Modal, Text } from "@wow-class/ui";
import { useAtomValue } from "jotai";

import {
  outstandingStudentsAtom,
  selectedStudentsAtom,
} from "@/students/_contexts/StudyProvider";

import CompleteModalButton from "./CompleteModalButton";
import OutstandingModalButton from "./OutstandingModalButton";
import StudentStatusModalHeader from "./StudentStatusModalHeader";

const StudentStatusModal = () => {
  const { firstStudentName, students } = useAtomValue(selectedStudentsAtom);
  const { type, achievement } = useAtomValue(outstandingStudentsAtom);

  const STUDENTS_NUM = students.size;
  if (!type || !achievement) return null;
  if (!STUDENTS_NUM) return <Text>선택된 수강생이 없습니다.</Text>;

  const renderAdditionalStudents = () => {
    if (STUDENTS_NUM === 1) return null;
    return (
      <styled.span>
        외 <styled.span color="primary">{STUDENTS_NUM - 1}명</styled.span>
      </styled.span>
    );
  };

  return (
    <Modal>
      <Flex align="center" direction="column" gap="1.5rem">
        <StudentStatusModalHeader />
        <Text color="sub">
          {firstStudentName} 님 {renderAdditionalStudents()}
        </Text>
        {achievement === "COMPLETE" ? (
          <CompleteModalButton />
        ) : (
          <OutstandingModalButton />
        )}
      </Flex>
    </Modal>
  );
};

export default StudentStatusModal;
