"use client";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Modal, Text } from "@wow-class/ui";
import { myStudyApi } from "apis/myStudyApi";
import { routePath } from "constants/routePath";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { validateAttendanceNumber } from "utils/validateAttendanceNumber";
import Button from "wowds-ui/Button";
import TextField from "wowds-ui/TextField";

const AttendanceCheckModal = () => {
  const [error, setError] = useState(false);
  const [attendanceNumber, setAttendanceNumber] = useState("");

  const router = useRouter();

  const handleChangeAttendanceNumber = (value: string) => {
    setAttendanceNumber(value);
  };

  const handleClickAttendanceCheckButton = async () => {
    const isValidAttendanceNumber = validateAttendanceNumber(attendanceNumber);

    if (!isValidAttendanceNumber) {
      return setError(true);
    }

    const { success } = await myStudyApi.checkAttendance(1, attendanceNumber);

    if (!success) {
      return setError(true);
    }

    router.push(routePath["attendance-complete"]);
  };

  return (
    <Modal>
      <Flex alignItems="center" direction="column" gap="sm" marginBottom="40px">
        <section
          aria-label="attendance-check-title"
          className={attendanceCheckTitleStyle}
        >
          <Text as="h1" typo="h1">
            기초 웹스터디
          </Text>
          <Image
            alt="item separator"
            height={6}
            src="/images/dot.svg"
            width={6}
          />
          <Text as="h1" typo="h1">
            4주차
          </Text>
        </section>
        <section
          aria-label="attendance-check-description"
          className={attendanceCheckDescriptionStyle}
        >
          <Text as="p" color="sub" typo="body1">
            스터디 시작 후 멘토의 안내에 따라 출결번호를 입력해주세요.
          </Text>
          <Text as="p" color="error" typo="body1">
            2024년 5월 23일 0:00 - 23:59까지
          </Text>
        </section>
      </Flex>
      <TextField
        error={error}
        helperText={error ? textfieldHelperText : ""}
        label="출결번호 입력"
        placeholder="Ex. 0000"
        style={textfieldStyle}
        value={attendanceNumber}
        onChange={handleChangeAttendanceNumber}
      />
      <Button onClick={handleClickAttendanceCheckButton}>출석 체크하기</Button>
    </Modal>
  );
};

export default AttendanceCheckModal;

const textfieldHelperText = <div>• 출석 실패! 출결번호를 확인해주세요.</div>;

const attendanceCheckTitleStyle = css({
  display: "flex",
  gap: "sm",
});

const attendanceCheckDescriptionStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "xxs",
});

const textfieldStyle = {
  height: "89px",
  marginBottom: "20px",
};
