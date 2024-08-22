"use client";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Modal, Space, Text } from "@wow-class/ui";
import { useModalRoute } from "@wow-class/ui/hooks";
import { studyApplyApi } from "apis/studyApplyApi";
import { tags } from "constants/tags";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { revalidateTagByName } from "utils/revalidateTagByName";
import Button from "wowds-ui/Button";

const ApplicationCancelModal = () => {
  const searchParams = useSearchParams();
  const studyId = searchParams.get("studyId");

  const [cancelSucces, setCancelSuccess] = useState(false);
  const [studyTitle, setStudyTitle] = useState("");
  const { closeModal } = useModalRoute();

  useEffect(() => {
    const fetchStudyData = async () => {
      const data = await studyApplyApi.getStudyList();
      if (!data) return;
      const { studyResponses: studyList } = data;

      const selectedStudy = studyList.find(
        (study) => study.studyId === Number(studyId)
      );
      if (selectedStudy) {
        setStudyTitle(selectedStudy.title);
      }
    };

    fetchStudyData();
  }, [studyId]);

  const handleClickCancelButton = async () => {
    const result = await studyApplyApi.cancelStudyApplication(Number(studyId));

    if (result.success) {
      revalidateTagByName(tags.studyApply);
      setCancelSuccess(true);
    }
  };

  return (
    <Modal onClose={closeModal}>
      <Flex direction="column" textAlign="center" width="21rem">
        {cancelSucces ? (
          <Text typo="h1">
            <span className={titleStyle}>{studyTitle}</span>
            <br />
            수강이 취소되었어요.
          </Text>
        ) : (
          <>
            <Text typo="h1">
              <span className={titleStyle}>{studyTitle}</span>의 <br />
              수강을 취소하시겠습니까?
            </Text>
            <Space height={38} />
            <Button onClick={handleClickCancelButton}>신청 취소하기</Button>
          </>
        )}
      </Flex>
    </Modal>
  );
};

export default ApplicationCancelModal;

const titleStyle = css({
  color: "primary",
});
