"use client";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Modal, Space, Text } from "@wow-class/ui";
import { useModalRoute } from "@wow-class/ui/hooks";
import { studyApplyApi } from "apis/studyApplyApi";
import { tags } from "constants/tags";
import { useEffect, useState } from "react";
import { revalidateTagByName } from "utils/revalidateTagByName";
import Button from "wowds-ui/Button";

const MODAL_CLOSE_TIME = 1000;
const StudyApplication = ({ params }: { params: { studyId: number } }) => {
  const studyId = params.studyId;

  const [applySuccess, setApplySuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [studyTitle, setStudyTitle] = useState("");

  const { onClose } = useModalRoute();
  useEffect(() => {
    const fetchStudyData = async () => {
      const data = await studyApplyApi.getStudyList();
      if (!data) return;
      const { applicableStudies: studyList } = data;

      const selectedStudy = studyList.find(
        (study) => study.studyId === Number(studyId)
      );
      if (selectedStudy) {
        setStudyTitle(selectedStudy.title);
      }
      setIsLoading(false);
    };

    fetchStudyData();
  }, [studyId]);

  useEffect(() => {
    if (applySuccess) {
      const timer = setTimeout(() => {
        onClose();
      }, MODAL_CLOSE_TIME);
      return () => clearTimeout(timer);
    }
  }, [applySuccess, onClose]);

  const handleClickApplyButton = async () => {
    const result = await studyApplyApi.applyStudy(Number(studyId));
    if (result.success) {
      await revalidateTagByName(tags.studyApply);
      await revalidateTagByName(tags.myOngoingStudy);
      setApplySuccess(true);
    }
  };

  if (isLoading) {
    return null;
  }

  return (
    <Modal>
      <Flex direction="column" textAlign="center" width="21rem">
        {applySuccess ? (
          <Text typo="h1">
            <span className={titleStyle}>{studyTitle}</span>
            <br />
            신청이 완료되었어요.
          </Text>
        ) : (
          <>
            <Text typo="h1">
              <span className={titleStyle}>{studyTitle}</span>을(를) <br />
              신청하시겠습니까?
            </Text>
            <Space height={22} />
            <Button
              aria-label={`${studyTitle} 수강 신청하기`}
              onClick={handleClickApplyButton}
            >
              수강 신청하기
            </Button>
          </>
        )}
      </Flex>
    </Modal>
  );
};

export default StudyApplication;

const titleStyle = css({
  color: "primary",
});
