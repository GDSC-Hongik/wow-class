"use client";

import { Flex } from "@styled-system/jsx";
import { Modal } from "@wow-class/ui";
import { useModalRoute } from "@wow-class/ui/hooks";
import Button from "wowds-ui/Button";

const TestModal = () => {
  const { closeModal } = useModalRoute();
  return (
    <Modal
      closeModal={closeModal}
      title={
        <>
          모달
          <br />
          테스트
        </>
      }
    >
      <Flex gap="sm" width="21rem">
        <Button variant="outline" onClick={closeModal}>
          취소
        </Button>
        <Button>저장하기</Button>
      </Flex>
    </Modal>
  );
};

export default TestModal;
