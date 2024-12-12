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

const OutstandingModalButton = () => {
  const study = useAtomValue(studyAtom);
  const [{ enabled }, setEnabledOutstandingStudents] = useAtom(
    enabledOutstandingStudentsAtom
  );
  const { type, achievement } = useAtomValue(outstandingStudentsAtom);
  const [{ students }, setSelectedStudents] = useAtom(selectedStudentsAtom);

  const { onClose } = useModalRoute();

  const apiMap = {
    ACHIEVEMENT: {
      처리: studyAchievementApi.postStudyAchievement,
      철회: studyAchievementApi.deleteStudyAchievement,
    },
    COMPLETE: {
      처리: studyCompleteApi.postStudyComplete,
      철회: studyCompleteApi.postStudyCompleteWithdraw,
    },
  };

  const handleClickOutstanding = async () => {
    if (!study || !achievement || !type) return;

    const fetchApi = () => {
      if (achievement === "COMPLETE") {
        const fetch = apiMap["COMPLETE"][type];
        return fetch({
          studyId: study.studyId,
          studentIds: students,
        });
      }
      const fetch = apiMap["ACHIEVEMENT"][type];
      return fetch(study.studyId, {
        studentIds: students,
        achievementType: achievement as AchievementType,
      });
    };
    const result = await fetchApi();

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

export default OutstandingModalButton;
