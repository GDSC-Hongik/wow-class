"use client";

import { Flex } from "@styled-system/jsx";
import { Modal } from "@wow-class/ui";
import { useModalRoute } from "@wow-class/ui/hooks";
import Button from "wowds-ui/Button";

const TestModal = () => {
  const { onClose } = useModalRoute();

  return (
    <Modal>
      <Flex gap="sm" width="21rem">
        <Button variant="outline" onClick={onClose}>
          취소
        </Button>
        <Button>저장하기</Button>
      </Flex>
    </Modal>
  );
};

export default TestModal;
