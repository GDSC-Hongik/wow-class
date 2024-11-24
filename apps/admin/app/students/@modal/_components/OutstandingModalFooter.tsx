"use client";

import { useModalRoute } from "@wow-class/ui/hooks";
import studyAchievementApi from "apis/study/studyAchievementApi";
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

const OutstandingModalFooter = () => {
  const study = useAtomValue(studyAtom);
  const [{ enabled }, setEnabledOutstandingStudents] = useAtom(
    enabledOutstandingStudentsAtom
  );
  const { type, achievement } = useAtomValue(outstandingStudentsAtom);
  const [{ students }, setSelectedStudents] = useAtom(selectedStudentsAtom);

  const { onClose } = useModalRoute();

  const handleClickOutstanding = async () => {
    if (!study || !achievement) return;

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

  return enabled ? (
    <Button onClick={handleClickOutstanding}>선택한 우수 회원 {type}</Button>
  ) : (
    <Button onClick={handleClickCloseModal}>확인하기</Button>
  );
};
export default OutstandingModalFooter;
