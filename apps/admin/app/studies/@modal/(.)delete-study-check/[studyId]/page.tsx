"use client";

import { Flex } from "@styled-system/jsx";
import { Modal, Space, Text } from "@wow-class/ui";
import { useModalRoute } from "@wow-class/ui/hooks";
import { studyApi } from "apis/study/studyApi";
import ItemSeparator from "components/ItemSeparator";
import useParseSearchParams from "hooks/useParseSearchParams";
import { useSearchParams } from "next/navigation";
import Button from "wowds-ui/Button";

const MODAL_CLOSE_TIME = 1000;
const DeleteStudyCheckModal = ({ params }: { params: { studyId: number } }) => {
  const { parseQueryString } = useParseSearchParams();
  const searchParams = useSearchParams();
  const { onClose } = useModalRoute();

  const data = parseQueryString(searchParams.toString());

  const studyName = data.title;
  const semester = `${data.academicYear}-${data.semesterType === "FIRST" ? "1" : "2"}`;

  const handleClickDeleteButton = async () => {
    const result = await studyApi.deleteStudy(params.studyId);
    if (result.success) {
      setTimeout(() => {
        onClose();
      }, MODAL_CLOSE_TIME);
    }
  };

  return (
    <Modal>
      <Flex alignItems="center" direction="column" padding="24px" width="100%">
        <Flex alignItems="center" gap="sm" justify="center" marginBottom="2px">
          <Text color="primary" typo="h1">
            {studyName}
          </Text>
          <ItemSeparator height={6} width={6} />
          <Text color="primary" typo="h1">
            {semester}
          </Text>
        </Flex>
        <Text typo="h1">스터디를 삭제하시겠어요?</Text>
        <Space height={28} />
        <Flex gap="sm" justify="center" width="21rem">
          <Button
            aria-label="스터디 삭제 취소하기"
            variant="outline"
            onClick={onClose}
          >
            취소
          </Button>
          <Button
            aria-label="스터디 삭제하기"
            onClick={handleClickDeleteButton}
          >
            삭제하기
          </Button>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default DeleteStudyCheckModal;
