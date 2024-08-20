"use client";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Modal, Text } from "@wow-class/ui";
import { routePath } from "constants/routePath";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AttendanceCompleteModal = () => {
  const router = useRouter();

  const handleCloseModal = () => {
    router.push(routePath["my-study"]);
  };

  return (
    <Modal onClose={handleCloseModal}>
      <Flex alignItems="center" direction="column" gap="4px">
        <section
          aria-label="attendance-complete-title"
          className={attendanceCompleteTitleStyle}
        >
          <Text as="h1" color="primary" typo="h1">
            기초 웹스터디
          </Text>
          <Image
            alt="item separator"
            height={6}
            src="/images/dot.svg"
            width={6}
          />
          <Text as="h1" color="primary" typo="h1">
            4주차
          </Text>
        </section>
        <section aria-label="attendance-complete-description">
          <Text as="h1" color="textBlack" typo="h1">
            출석이 완료되었어요.
          </Text>
        </section>
      </Flex>
    </Modal>
  );
};

export default AttendanceCompleteModal;

const attendanceCompleteTitleStyle = css({
  display: "flex",
  gap: "sm",
});
