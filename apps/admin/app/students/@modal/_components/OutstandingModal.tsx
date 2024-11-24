"use client";

import { Flex, styled } from "@styled-system/jsx";
import { Modal, Text } from "@wow-class/ui";
import { useModalRoute } from "@wow-class/ui/hooks";
import studyAchievementApi from "apis/study/studyAchievementApi";
import { outstandingRoundMap } from "constants/status/outstandigOptions";
import { tags } from "constants/tags";
import { useAtom, useAtomValue } from "jotai";
import { revalidateTagByName } from "utils/revalidateTagByName";
import Button from "wowds-ui/Button";

import {
  enabledOutstandingStudentsAtom,
  outstandingStudentsAtom,
  selectedStudentsAtom,
  studyAtom,
} from "@/students/_contexts/StudyProvider";

const OutstandingModal = () => {
  const study = useAtomValue(studyAtom);
  const [{ firstStudentName, students }, setSelectedStudents] =
    useAtom(selectedStudentsAtom);
  const [{ enabled }, setEnabledOutstandingStudents] = useAtom(
    enabledOutstandingStudentsAtom
  );
  const { type, achievement } = useAtomValue(outstandingStudentsAtom);
  const { onClose } = useModalRoute();

  const STUDENTS_NUM = students.length;
  if (!type || !achievement) return null;

  const handleClickOutstanding = async () => {
    if (!study || !STUDENTS_NUM || !achievement) return;

    const fetch =
      type === "처리"
        ? studyAchievementApi.postStudyAchievement
        : studyAchievementApi.deleteStudyAchievement;

    const result = await fetch(study.studyId, {
      studentIds: students,
      achievementType: achievement,
    });

    if (result.success) {
      revalidateTagByName(tags.students);
      setEnabledOutstandingStudents({
        enabled: false,
      });
    }
  };

  const handleClickCloseModal = () => {
    setSelectedStudents({
      students: [],
      firstStudentName: "",
    });
    onClose();
  };

  const formatTypeToString = () => {
    if (type === "처리") return "회원으로 등록";
    else if (type === "철회") return "회원에서 철회";
  };

  return (
    <Modal>
      <Flex align="center" direction="column" gap="1.5rem">
        {enabled ? (
          <Text
            typo="h1"
            style={{
              textAlign: "center",
            }}
          >
            선택한 수강생을 <br />
            {outstandingRoundMap[achievement]} {formatTypeToString()}하시겠어요?
          </Text>
        ) : (
          <Text typo="h1">
            {outstandingRoundMap[achievement]} {formatTypeToString()}되었어요.
          </Text>
        )}

        <Text color="sub">
          {firstStudentName} 님 외{" "}
          <styled.span color="primary">{STUDENTS_NUM - 1}명</styled.span>
        </Text>
        {enabled ? (
          <Button onClick={handleClickOutstanding}>
            선택한 우수 회원 {type}
          </Button>
        ) : (
          <Button onClick={handleClickCloseModal}>확인하기</Button>
        )}
      </Flex>
    </Modal>
  );
};

export default OutstandingModal;
