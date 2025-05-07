"use client";

import studyCompleteApi from "apis/study/studyCompleteApi";
import { useAtomValue } from "jotai";
import Button from "wowds-ui/Button";

import {
  enabledOutstandingStudentsAtom,
  outstandingStudentsAtom,
  selectedStudentsAtom,
  studyAtom,
} from "@/students/_contexts/StudyProvider";

import useCloseStudentStatusModal from "../_hooks/useCloseStudentStatusModal";

const CompleteModalButton = () => {
  const study = useAtomValue(studyAtom);
  const { enabled } = useAtomValue(enabledOutstandingStudentsAtom);
  const { type } = useAtomValue(outstandingStudentsAtom);
  const { students } = useAtomValue(selectedStudentsAtom);

  const { closeModalWithSuccess, closeModalWithFailure } =
    useCloseStudentStatusModal();

  const handleClickComplete = async () => {
    if (!study || !type) return;

    const apiMap = {
      처리: studyCompleteApi.postStudyComplete,
      철회: studyCompleteApi.postStudyCompleteWithdraw,
    };

    const fetchApi = () => {
      const fetch = apiMap[type];
      return fetch({
        studyId: study.studyId,
        studentIds: Array.from(students),
      });
    };
    const result = await fetchApi();
    if (result.success) closeModalWithSuccess();
    else closeModalWithFailure();
  };

  return enabled ? (
    <Button
      aria-label={`선택한 회원을 수료 ${type} 하기`}
      onClick={handleClickComplete}
    >
      선택한 회원 수료 {type}
    </Button>
  ) : (
    <Button aria-label="수료 여부 확인하기">확인하기</Button>
  );
};

export default CompleteModalButton;
