"use client";

import { myStudyApi } from "apis/myStudyApi";
import { tags } from "constants/tags";
import useAttendanceCheckSearchParams from "hooks/useAttendanceCheckSearchParams";
import type { CSSProperties } from "react";
import { useState } from "react";
import { revalidateTagByName } from "utils/revalidateTagByName";
import { validateAttendanceNumber } from "utils/validateAttendanceNumber";
import { color } from "wowds-tokens";
import Button from "wowds-ui/Button";
import TextField from "wowds-ui/TextField";

const AttendanceCheckForm = ({
  onAttendanceSuccess,
}: {
  onAttendanceSuccess: () => void;
}) => {
  const { studyDetailId } = useAttendanceCheckSearchParams();

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
    onAttendanceSuccess();
    setError(false);
    revalidateTagByName(tags.dailyTask);
  };

  return (
    <>
      <TextField
        error={error}
        helperText={error ? textfieldHelperText : ""}
        label="출결번호 입력"
        placeholder="Ex. 0000"
        value={attendanceNumber}
        textareaProps={{
          inputMode: "numeric",
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

export default AttendanceCheckForm;

const textfieldHelperText = <div>• 출석 실패! 출결번호를 확인해주세요.</div>;

const buttonStyle: CSSProperties = {
  bottom: "20px",
  position: "absolute",
  width: "calc(100% - 32px)",
  color: color.white,
};
