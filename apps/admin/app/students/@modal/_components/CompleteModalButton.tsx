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

  const {
    handleClickCloseModal,
    closeModalWithSuccess,
    closeModalWithFailure,
  } = useCloseStudentStatusModal();

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
    <Button onClick={handleClickComplete}>선택한 회원 수료 {type}</Button>
  ) : (
    <Button onClick={handleClickCloseModal}>확인하기</Button>
  );
};

export default CompleteModalButton;
