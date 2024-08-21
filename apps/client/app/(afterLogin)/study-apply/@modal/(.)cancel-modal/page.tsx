"use client";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Modal, Space, Text } from "@wow-class/ui";
import { useModalRoute } from "@wow-class/ui/hooks";
import { studyApplyApi } from "apis/studyApplyApi";
import { tags } from "constants/tags";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { customRevalidateTag } from "utils/customRevalidateTag";
import Button from "wowds-ui/Button";
const TestModal = () => {
  const searchParams = useSearchParams();

  const title = searchParams.get("title");
  const studyId = searchParams.get("studyId");

  const [isSuccess, setIsSuccess] = useState(false);
  const { closeModal } = useModalRoute();

  const handleClickCancelButton = async () => {
    const result = await studyApplyApi.cancelStudyApplication(Number(studyId));

    if (!result.success) {
      console.error("스터디 신청 실패");
    } else {
      customRevalidateTag(tags.studyApply);
      setIsSuccess(true);
      console.log("스터디 취소 성공");
    }
  };

  return (
    <Modal onClose={closeModal}>
      <Flex direction="column" textAlign="center" width="21rem">
        {isSuccess ? (
          <Text typo="h1">
            <span className={titleStyle}>{title}</span>이 <br />
            취소되었어요
          </Text>
        ) : (
          <>
            <Text typo="h1">
              <span className={titleStyle}>{title}</span>을(를) <br />
              취소하시겠습니까?
            </Text>
            <Space height={22} />
            <Button onClick={handleClickCancelButton}>수강 취소하기</Button>
          </>
        )}
      </Flex>
    </Modal>
  );
};

export default TestModal;

const titleStyle = css({
  color: "primary",
});
