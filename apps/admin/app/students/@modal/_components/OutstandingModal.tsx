"use client";

import { Flex, styled } from "@styled-system/jsx";
import { Modal, Text } from "@wow-class/ui";
import { useAtomValue } from "jotai";

import {
  outstandingStudentsAtom,
  selectedStudentsAtom,
} from "@/students/_contexts/StudyProvider";

import OutstandingModalButton from "./OutstandingModalButton";
import OutstandingModalHeader from "./OutstandingModalHeader";

const OutstandingModal = () => {
  const { firstStudentName, students } = useAtomValue(selectedStudentsAtom);
  const { type, achievement } = useAtomValue(outstandingStudentsAtom);

  const STUDENTS_NUM = students.length;
  if (!type || !achievement) return null;
  if (!STUDENTS_NUM) return <Text>선택된 수강생이 없습니다.</Text>;

  const renderAdditionalStudents = () => {
    if (STUDENTS_NUM === 1) return null;
    return (
      <>
        외 <styled.span color="primary">{STUDENTS_NUM - 1}명</styled.span>
      </>
    );
  };

  return (
    <Modal>
      <Flex align="center" direction="column" gap="1.5rem">
        <OutstandingModalHeader />
        <Text color="sub">
          {firstStudentName} 님 {renderAdditionalStudents()}
        </Text>
        <OutstandingModalButton />
      </Flex>
    </Modal>
  );
};

export default OutstandingModal;
