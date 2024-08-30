"use client";

import { Flex } from "@styled-system/jsx";
import { Modal, Space, Text } from "@wow-class/ui";
import { useModalRoute } from "@wow-class/ui/hooks";
import { studyApi } from "apis/study/studyApi";
import useParseSearchParams from "hooks/useParseSearchParams";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import type { CreateStudyDetailInfoApiRequestDto } from "types/dtos/studyDetailInfo";
import Button from "wowds-ui/Button";

import useSubmitStudyDetailInfo from "./_hooks/useSubmitStudyDetailInfo";

const StudyDetailInfoCheckModal = () => {
  const [studyName, setStudyName] = useState("");
  const { closeModal } = useModalRoute();
  const { parseToNumberSearchParams, parseQueryString } =
    useParseSearchParams();
  const searchParams = useSearchParams();
  const { studyId, ...formData } = parseQueryString<
    CreateStudyDetailInfoApiRequestDto & { studyId: string }
  >(searchParams.toString());

  const { isSuccess, handleSubmitDetailInfo } = useSubmitStudyDetailInfo(
    parseInt(studyId, 10),
    formData
  );

  useEffect(() => {
    const fetchStudyData = async () => {
      const response = await studyApi.getStudyBasicInfo(parseInt(studyId, 10));
      if (response) setStudyName(response.title);
    };
    fetchStudyData();
  }, [studyId]);

  return (
    <Modal>
      <SubmitSuccessMessage studyName={studyName} success={isSuccess} />
      <SubmitConfirmMessage
        closeModal={closeModal}
        handleSubmitDetailInfo={handleSubmitDetailInfo}
        studyName={studyName}
        success={isSuccess}
      />
    </Modal>
  );
};

export default StudyDetailInfoCheckModal;

const SubmitSuccessMessage = ({
  success,
  studyName,
}: {
  success: boolean;
  studyName: string;
}) => {
  return (
    <>
      {success && (
        <Flex alignItems="center" direction="column" gap="4px">
          <Text as="h1" color="primary" typo="h1">
            {studyName}
          </Text>
          <Text as="h1" color="textBlack" typo="h1">
            상세 정보가 저장되었어요.
          </Text>
        </Flex>
      )}
    </>
  );
};

const SubmitConfirmMessage = ({
  success,
  studyName,
  closeModal,
  handleSubmitDetailInfo,
}: {
  success: boolean;
  studyName: string;
  closeModal: () => void;
  handleSubmitDetailInfo: () => void;
}) => {
  if (!success) {
    return (
      <Flex alignItems="center" direction="column" padding="24px" width="100%">
        <Flex alignItems="center" justify="center" marginBottom="2px">
          <Text as="p" color="primary" typo="h1">
            {studyName}
          </Text>
          <Text as="p" typo="h1">
            의 상세정보
          </Text>
        </Flex>
        <Text as="p" typo="h1">
          입력 내용을 저장하시겠어요?
        </Text>
        <Space height={28} />
        <Flex gap="sm" justify="center" width="21rem">
          <Button variant="outline" onClick={closeModal}>
            취소
          </Button>
          <Button onClick={handleSubmitDetailInfo}>저장하기</Button>
        </Flex>
      </Flex>
    );
  } else {
    return;
  }
};
