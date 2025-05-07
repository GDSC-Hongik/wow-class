"use client";

import { Space } from "@wow-class/ui";
import { myStudyApi } from "apis/myStudyApi";
import { tags } from "constants/tags";
import type { CSSProperties } from "react";
import { useState } from "react";
import type { AttendanceStatusType } from "types/entities/common/attendance";
import { revalidateTagByName } from "utils/revalidateTagByName";
import { validateAttendanceNumber } from "utils/validateAttendanceNumber";
import { color } from "wowds-tokens";
import Button from "wowds-ui/Button";
import TextField from "wowds-ui/TextField";

const AttendanceCheckForm = ({
  studySessionId,
  attendanceStatus,
}: {
  studySessionId: number;
  attendanceStatus: AttendanceStatusType;
}) => {
  const [error, setError] = useState(false);
  const [attendanceNumber, setAttendanceNumber] = useState("");

  const isAttendanceSucceded = attendanceStatus === "ATTENDED";

  const handleChangeAttendanceNumber = (value: string) => {
    setAttendanceNumber(value);
  };

  const isAttendanceNumberValid = (attendanceNumber: string) => {
    return validateAttendanceNumber(attendanceNumber);
  };

  const checkAttendance = async (
    studySessionId: number,
    attendanceNumber: string
  ) => {
    const { success } = await myStudyApi.checkAttendance(
      studySessionId,
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
      +studySessionId,
      trimmedAttendanceNumber
    );

    if (!success) {
      return setError(true);
    }

    handleAttendanceSuccess();
  };

  const handleAttendanceSuccess = () => {
    setError(false);
    revalidateTagByName(tags.myStudyDetailDailyTask);
    revalidateTagByName(tags.allStudyTaskList);
  };

  const attendanceButtonText = isAttendanceSucceded
    ? "출석 완료"
    : "출석 체크하기";

  const isAttendanceButtonDisabled =
    !isAttendanceNumberValid(attendanceNumber.trim()) || isAttendanceSucceded;

  return (
    <>
      <TextField
        error={error}
        helperText={error ? textfieldHelperText : ""}
        label=""
        placeholder="Ex. 0000"
        value={attendanceNumber}
        textareaProps={{
          inputMode: "numeric",
          ...(isAttendanceSucceded && { disabled: true }),
        }}
        onChange={handleChangeAttendanceNumber}
      />
      <Space height={20} />
      <Button
        aria-label={attendanceButtonText}
        disabled={isAttendanceButtonDisabled}
        style={{
          backgroundColor: isAttendanceButtonDisabled
            ? color.darkDisabled
            : color.primary,

          ...buttonStyle,
        }}
        onClick={handleClickAttendanceCheckButton}
      >
        {attendanceButtonText}
      </Button>
    </>
  );
};

export default AttendanceCheckForm;

const textfieldHelperText = <div>• 출석 실패! 출결번호를 확인해주세요.</div>;

const buttonStyle: CSSProperties = {
  width: "100%",
  maxWidth: "100%",
  color: color.white,
};
