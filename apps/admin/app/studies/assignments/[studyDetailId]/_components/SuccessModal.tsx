"use client";

import { Flex, styled } from "@styled-system/jsx";
import { Modal, Text } from "@wow-class/ui";
import Link from "next/link";
import Button from "wowds-ui/Button";

interface SuccesModalProps {
  studyName: string;
  week: number;
  type: "개설" | "수정";
  studyDetailId: string;
}

const SuccessModal = ({
  studyName,
  week,
  type,
  studyDetailId,
}: SuccesModalProps) => {
  return (
    <Modal>
      <Flex align="center" direction="column" gap="2.375rem" width="21rem">
        <Text as="h1" style={{ textAlign: "center" }} typo="h1">
          <styled.span color="primary">
            {studyName} {week}주차
          </styled.span>
          <br />
          과제가 {type}되었어요
        </Text>
        <Button
          aria-label={`${studyName} ${week}주차 과제 내용 보기`}
          asProp={Link}
          href={`/studies/assignments/${studyDetailId}`}
        >
          과제 내용 보기
        </Button>
      </Flex>
    </Modal>
  );
};

export default SuccessModal;
