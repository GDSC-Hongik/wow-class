"use client";

import { Flex } from "@styled-system/jsx";
import { Modal } from "@wow-class/ui";
import { useModalRoute } from "@wow-class/ui/hooks";
import Button from "wowds-ui/Button";

const TestModal = () => {
  const { closeModal } = useModalRoute();
  return (
    <Modal onClose={closeModal}>
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
