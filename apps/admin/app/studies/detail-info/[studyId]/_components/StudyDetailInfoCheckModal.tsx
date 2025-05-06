"use client";
import { Flex } from "@styled-system/jsx";
import { Modal, Space, Text } from "@wow-class/ui";
import type { CreateStudyDetailInfoApiRequestDto } from "types/dtos/studyDetailInfo";
import Button from "wowds-ui/Button";

import useSubmitStudyDetailInfo from "../_hooks/useSubmitStudyDetailInfo";

const StudyDetailInfoCheckModal = ({
  formData,
  studyId,
  onClose,
  studyTitle,
}: {
  formData: CreateStudyDetailInfoApiRequestDto;
  studyId: string;
  onClose: () => void;
  studyTitle: string;
}) => {
  const { isSuccess, handleSubmitDetailInfo } = useSubmitStudyDetailInfo(
    parseInt(studyId, 10),
    formData
  );

  // useEffect(() => {
  //   const fetchStudyData = async () => {
  //     const response = await studyApi.getStudyBasicInfo(parseInt(studyId, 10));
  //     if (response) setStudyName(response.title);
  //   };
  //   fetchStudyData();
  // }, [studyId]);

  return (
    <Modal onClose={onClose}>
      <SubmitSuccessMessage studyName={studyTitle} success={isSuccess} />
      <SubmitConfirmMessage
        closeModal={onClose}
        handleSubmitDetailInfo={handleSubmitDetailInfo}
        studyName={studyTitle}
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
          <Button
            aria-label="상세 정보 저장 취소"
            variant="outline"
            onClick={closeModal}
          >
            취소
          </Button>
          <Button
            aria-label="상세 정보 저장하기"
            onClick={handleSubmitDetailInfo}
          >
            저장하기
          </Button>
        </Flex>
      </Flex>
    );
  } else {
    return;
  }
};
