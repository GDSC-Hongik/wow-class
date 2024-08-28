import { Flex } from "@styled-system/jsx";
import { Modal, Space, Text } from "@wow-class/ui";
import { useModalRoute } from "@wow-class/ui/hooks";
import Button from "wowds-ui/Button";

const StudyDeleteCheckModal = () => {
  const { closeModal } = useModalRoute();

  const handleClickDeleteButton = () => {};
  return (
    <Modal>
      <Flex direction="column" textAlign="center" width="21rem">
        <Text typo="h1">공지를 수정해주세요</Text>
        <Space height={29} />
        <Flex gap="sm">
          <Button variant="outline" onClick={closeModal}>
            취소
          </Button>
          <Button onClick={handleClickDeleteButton}>삭제하기</Button>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default StudyDeleteCheckModal;
