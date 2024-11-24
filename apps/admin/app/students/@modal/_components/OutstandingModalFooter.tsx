"use client";

import { useModalRoute } from "@wow-class/ui/hooks";
import studyAchievementApi from "apis/study/studyAchievementApi";
import studyCompleteApi from "apis/study/studyCompleteApi";
import { tags } from "constants/tags";
import { useAtom, useAtomValue } from "jotai";
import type { AchievementType } from "types/entities/achievement";
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

  const fetchOutstanding = async (studyId: number) => {
    const fetch =
      type === "처리"
        ? studyAchievementApi.postStudyAchievement
        : studyAchievementApi.deleteStudyAchievement;
    const result = await fetch(studyId, {
      studentIds: students,
      achievementType: achievement as AchievementType,
    });
    return result;
  };

  const fetchComplete = async (studyId: number) => {
    const fetch =
      type === "처리"
        ? studyCompleteApi.postStudyComplete
        : studyCompleteApi.postStudyCompleteWithdraw;
    const result = await fetch({
      studyId,
      studentIds: students,
    });
    return result;
  };

  const handleClickOutstanding = async () => {
    if (!study || !achievement) return;

    const result =
      achievement === "COMPLETE"
        ? await fetchComplete(study.studyId)
        : await fetchOutstanding(study.studyId);

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
    <Button onClick={handleClickOutstanding}>
      선택한 회원 {achievement === "COMPLETE" ? "수료" : "우수"} {type}
    </Button>
  ) : (
    <Button onClick={handleClickCloseModal}>확인하기</Button>
  );
};

export default OutstandingModalFooter;
