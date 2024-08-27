"use client";

import { Flex, styled } from "@styled-system/jsx";
import { Modal, Text } from "@wow-class/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "wowds-ui/Button";

const AssignmentSuccessModal = ({
  params,
}: {
  params: { study: string; studyDetailId: string };
}) => {
  const pathname = usePathname();
  if (!pathname.includes(`/${params.studyDetailId}/success`)) {
    return null;
  }

  return (
    <Modal>
      <Flex align="center" direction="column" gap="2.375rem" width="21rem">
        <Text as="h1" typo="h1">
          <styled.span color="primary">
            기초웹스터디 {params.studyDetailId}주차
          </styled.span>
          <br />
          과제가 개설되었어요
        </Text>
        <Button
          asProp={Link}
          href={`/studies/assignments/${params.studyDetailId}`}
        >
          과제 내용 보기
        </Button>
      </Flex>
    </Modal>
  );
};

export default AssignmentSuccessModal;
