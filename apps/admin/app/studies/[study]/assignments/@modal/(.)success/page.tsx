"use client";

import { Flex, styled } from "@styled-system/jsx";
import { Modal, Text } from "@wow-class/ui";
import { useClickOutside } from "@wow-class/ui/hooks";
import Button from "wowds-ui/Button";

const AssignmentSuccessModal = () => {
  const modalRef = useClickOutside<HTMLDialogElement>();
  return (
    <Modal ref={modalRef}>
      <Flex align="center" direction="column" gap="2.375rem" width="21rem">
        <Text as="h1" typo="h1">
          <styled.span color="primary">기초웹스터디 4주차</styled.span>
          <br />
          과제가 개설되었어요
        </Text>
        <Button>과제 내용 보기</Button>
      </Flex>
    </Modal>
  );
};

export default AssignmentSuccessModal;
