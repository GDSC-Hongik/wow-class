"use client";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Modal, Text } from "@wow-class/ui";
import { myStudyApi } from "apis/myStudyApi";
import useFetchAttendanceCheckModalInfoData from "hooks/useFetchAttendanceCheckModalInfoData";
import Image from "next/image";
import { useState } from "react";
import { validateAttendanceNumber } from "utils/validateAttendanceNumber";
import Button from "wowds-ui/Button";
import TextField from "wowds-ui/TextField";

const AttendanceCheckModal = () => {
  const [attended, setAttended] = useState(false);
  const [error, setError] = useState(false);
  const [attendanceNumber, setAttendanceNumber] = useState("");

  const { studyInfo } = useFetchAttendanceCheckModalInfoData();

  const handleChangeAttendanceNumber = (value: string) => {
    setAttendanceNumber(value);
  };

  const handleClickAttendanceCheckButton = async () => {
    const myOngoingStudyInfoData = await myStudyApi.getMyOngoingStudyInfo();

    if (!myOngoingStudyInfoData?.studyId) {
      return;
    }

    const isValidAttendanceNumber = validateAttendanceNumber(attendanceNumber);

    if (!isValidAttendanceNumber) {
      return setError(true);
    }

    const { success } = await myStudyApi.checkAttendance(
      myOngoingStudyInfoData?.studyId,
      attendanceNumber
    );

    if (!success) {
      return setError(true);
    }

    setAttended(true);
  };

  return (
    <Modal>
      {attended ? (
        <Flex alignItems="center" direction="column" gap="4px">
          <section
            aria-label="attendance-complete-title"
            className={attendanceCompleteTitleStyle}
          >
            <Text as="h1" color="primary" typo="h1">
              {studyInfo.studyName}
            </Text>
            <Image
              alt="item separator"
              height={6}
              src="/images/dot.svg"
              width={6}
            />
            <Text as="h1" color="primary" typo="h1">
              {studyInfo.currentWeek}주차
            </Text>
          </section>
          <section aria-label="attendance-complete-description">
            <Text as="h1" color="textBlack" typo="h1">
              출석이 완료되었어요.
            </Text>
          </section>
        </Flex>
      ) : (
        <>
          <Flex
            alignItems="center"
            direction="column"
            gap="sm"
            marginBottom="40px"
          >
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
          <Button onClick={handleClickAttendanceCheckButton}>
            출석 체크하기
          </Button>
        </>
      )}
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

const attendanceCompleteTitleStyle = css({
  display: "flex",
  gap: "sm",
});
