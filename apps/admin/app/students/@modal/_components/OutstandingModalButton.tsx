"use client";

import studyAchievementApi from "apis/study/studyAchievementApi";
import { useAtomValue } from "jotai";
import type { AchievementType } from "types/entities/achievement";
import Button from "wowds-ui/Button";

import {
  enabledOutstandingStudentsAtom,
  outstandingStudentsAtom,
  selectedStudentsAtom,
  studyAtom,
} from "@/students/_contexts/StudyProvider";

import useCloseStudentStatusModal from "../_hooks/useCloseStudentStatusModal";

const OutstandingModalButton = () => {
  const study = useAtomValue(studyAtom);
  const { enabled } = useAtomValue(enabledOutstandingStudentsAtom);
  const { type, achievement } = useAtomValue(outstandingStudentsAtom);
  const { students } = useAtomValue(selectedStudentsAtom);

  const { closeModalWithSuccess, closeModalWithFailure } =
    useCloseStudentStatusModal();

  const handleClickOutstanding = async () => {
    if (!study || !achievement || !type) return;

    const apiMap = {
      처리: studyAchievementApi.postStudyAchievement,
      철회: studyAchievementApi.deleteStudyAchievement,
    };

    const fetchApi = () => {
      const fetch = apiMap[type];
      return fetch(study.studyId, {
        studentIds: Array.from(students),
        achievementType: achievement as AchievementType,
      });
    };
    const result = await fetchApi();
    if (result.success) closeModalWithSuccess();
    else closeModalWithFailure();
  };

  return enabled ? (
    <Button
      aria-label={`선택한 회원을 우수 ${type} 하기`}
      onClick={handleClickOutstanding}
    >
      선택한 회원 우수 {type}
    </Button>
  ) : (
    <Button>확인하기</Button>
  );
};

export default OutstandingModalButton;
