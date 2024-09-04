"use client";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Modal, Text } from "@wow-class/ui";
import { useModalRoute } from "@wow-class/ui/hooks";
import { parseISODate } from "@wow-class/utils";
import { myStudyApi } from "apis/myStudyApi";
import { tags } from "constants/tags";
import useAttendanceCheckSearchParams from "hooks/useAttendanceCheckSearchParams";
import Image from "next/image";
import type { KeyboardEventHandler } from "react";
import { useState } from "react";
import { revalidateTagByName } from "utils/revalidateTagByName";
import { validateAttendanceNumber } from "utils/validateAttendanceNumber";
import Button from "wowds-ui/Button";
import TextField from "wowds-ui/TextField";

const AttendanceCheckModal = () => {
  const [attended, setAttended] = useState(false);
  const [error, setError] = useState(false);
  const [attendanceNumber, setAttendanceNumber] = useState("");

  const { onClose } = useModalRoute();

  const { studyDetailId, studyName, deadLine, currentWeek } =
    useAttendanceCheckSearchParams();

  const { year, month, day, hours, minutes } = parseISODate(deadLine);

  const handleChangeAttendanceNumber = (value: string) => {
    setAttendanceNumber(value);
  };

  const isAttendanceNumberValid = (attendanceNumber: string) => {
    return validateAttendanceNumber(attendanceNumber);
  };

  const checkAttendance = async (
    studyDetailId: number,
    attendanceNumber: string
  ) => {
    const { success } = await myStudyApi.checkAttendance(
      studyDetailId,
      attendanceNumber
    );
    return success;
  };

  const handleClickAttendanceCheckButton = async () => {
    const trimmedAttendanceNumber = attendanceNumber.trim();

    if (!isAttendanceNumberValid(trimmedAttendanceNumber)) {
      return setError(true);
    }

    const success = await checkAttendance(
      +studyDetailId,
      trimmedAttendanceNumber
    );

    if (!success) {
      return setError(true);
    }

    handleAttendanceSuccess();
  };

  const handleAttendanceSuccess = () => {
    setAttended(true);
    revalidateTagByName(tags.dailyTask);
    setTimeout(() => {
      onClose();
    }, 500);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
    }
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
              {studyName}
            </Text>
            <Image
              alt="item separator"
              height={6}
              src="/images/dot.svg"
              width={6}
            />
            <Text as="h1" color="primary" typo="h1">
              {currentWeek}주차
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
                {studyName}
              </Text>
              <Image
                alt="item separator"
                height={6}
                src="/images/dot.svg"
                width={6}
              />
              <Text as="h1" typo="h1">
                {currentWeek}주차
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
                {year}년 {month}월 {day}일 00:00 - {hours}:{minutes}까지
              </Text>
            </section>
          </Flex>
          <TextField
            error={error}
            helperText={error ? textfieldHelperText : ""}
            label="출결번호 입력"
            placeholder="ex) 0000"
            style={textfieldStyle}
            value={attendanceNumber}
            textareaProps={{
              onKeyDown: handleKeyDown,
            }}
            onChange={handleChangeAttendanceNumber}
          />
          <Button
            style={attendanceButtonStyle}
            onClick={handleClickAttendanceCheckButton}
          >
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
  whiteSpace: "nowrap",
};

const attendanceCompleteTitleStyle = css({
  display: "flex",
  gap: "sm",
});

const attendanceButtonStyle = {
  maxWidth: "328px",
};
