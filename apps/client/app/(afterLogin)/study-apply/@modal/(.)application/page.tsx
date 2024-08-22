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
const ApplyModal = () => {
  const searchParams = useSearchParams();

  const studyId = searchParams.get("studyId");

  const [applySuccess, setApplySuccess] = useState(false);
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

  const handleClickApplyButton = async () => {
    const result = await studyApplyApi.applyStudy(Number(studyId));
    if (result.success) {
      revalidateTagByName(tags.studyApply);
      setApplySuccess(true);
    }
  };

  return (
    <Modal onClose={closeModal}>
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
            <Text color="sub">한 번에 하나의 강의만 수강할 수 있어요.</Text>
            <Space height={28} />
            <Button onClick={handleClickApplyButton}>수강 신청하기</Button>
          </>
        )}
      </Flex>
    </Modal>
  );
};

export default ApplyModal;

const titleStyle = css({
  color: "primary",
});
