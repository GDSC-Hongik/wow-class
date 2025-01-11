"use client";

import { Flex } from "@styled-system/jsx";
import { Space, Text } from "@wow-class/ui";
import { myStudyApi } from "apis/myStudyApi";
import { tags } from "constants/tags";
import useAttendanceCheckSearchParams from "hooks/useAttendanceCheckSearchParams";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, KeyboardEventHandler } from "react";
import { useState } from "react";
import { revalidateTagByName } from "utils/revalidateTagByName";
import { validateAttendanceNumber } from "utils/validateAttendanceNumber";
import { color } from "wowds-tokens";
import Button from "wowds-ui/Button";
import TextField from "wowds-ui/TextField";

const AttendanceCheckInputPage = () => {
  const { studyDetailId, studyName, currentWeek } =
    useAttendanceCheckSearchParams();

  const [attended, setAttended] = useState(false);
  const [error, setError] = useState(false);
  const [attendanceNumber, setAttendanceNumber] = useState("");

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
    setError(false);
    revalidateTagByName(tags.dailyTask);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
    }
  };
  return attended ? (
    <>
      <Flex
        alignItems="center"
        direction="column"
        height="calc(100% - 40px)"
        justifyContent="center"
      >
        <Image
          alt="attendance-success"
          height={80}
          src="/images/success.svg"
          width={80}
        />
        <Space height={40} />
        <Text typo="h1">출석이 완료되었어요</Text>
        <Space height={12} />
        <Text typo="body1">
          {studyName}
          {currentWeek}주차{" "}
        </Text>
      </Flex>
      <Button asProp={Link} href="/my-study" style={buttonStyle}>
        메인 화면으로 돌아기
      </Button>
    </>
  ) : (
    <>
      <Text as="h1" typo="h1">
        출석 체크
      </Text>
      <Space height={20} />
      <Text>
        스터디 시작 후 멘토의 안내에 따라 <br />
        출결번호를 입력해주세요.
      </Text>
      <Space height={20} />
      <TextField
        error={error}
        helperText={error ? textfieldHelperText : ""}
        label="출결번호 입력"
        placeholder="Ex. 0000"
        value={attendanceNumber}
        textareaProps={{
          onKeyDown: handleKeyDown,
        }}
        onChange={handleChangeAttendanceNumber}
      />
      <Button
        disabled={!isAttendanceNumberValid(attendanceNumber.trim())}
        style={{
          backgroundColor: !isAttendanceNumberValid(attendanceNumber.trim())
            ? color.darkDisabled
            : color.primary,

          ...buttonStyle,
        }}
        onClick={handleClickAttendanceCheckButton}
      >
        출석 체크하기
      </Button>
    </>
  );
};

export default AttendanceCheckInputPage;

const textfieldHelperText = <div>• 출석 실패! 출결번호를 확인해주세요.</div>;

const buttonStyle: CSSProperties = {
  bottom: "20px",
  position: "absolute",
  width: "calc(100% - 32px)",
  color: color.white,
};
