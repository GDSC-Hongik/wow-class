import "react-day-picker/style.css";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import useClickOutside from "hooks/useClickOutSide";
import { useEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import { Controller, useFormContext } from "react-hook-form";
import {
  dateToFormatString,
  formatStringToDate,
  setStudyEndDate,
} from "utils/formatDate";

const StudyStartDatePick = () => {
  const [studyDate, setStudyDate] = useState({
    fromValue: "",
    toValue: "",
  });
  const datepickerRef = useRef(null);
  const [isOpen, setOpen] = useState<boolean>(false);
  const { control, getValues, setValue } = useFormContext();
  const [inputValue, setInputValue] = useState("");

  useClickOutside(datepickerRef, () => {
    setOpen(false);
  });

  const week = getValues("totalWeek");

  useEffect(() => {
    if (studyDate.fromValue) {
      setInputValue(`${studyDate.fromValue} ~ ${studyDate.toValue}`);
      setValue("startDate", studyDate.fromValue);
    } else {
      setInputValue("");
    }
  }, [studyDate, setValue]);

  return (
    <Flex direction="column" gap="xs" height="128px" position="relative">
      <Text color="sub" typo="label2">
        스터디 진행 기간
      </Text>
      <Controller
        control={control}
        name="startDate"
        render={() => (
          <input
            className={StudyDatePickerStyle}
            placeholder="YYYY-MM-DD ~ YYYY-MM-DD"
            value={inputValue}
            onClick={() => {
              setOpen(!isOpen);
            }}
          />
        )}
        rules={{
          required: true,
        }}
      />

      {isOpen && (
        <div ref={datepickerRef}>
          <DayPicker
            mode="range"
            style={{ position: "absolute", top: "100px" }}
            weekStartsOn={1}
            selected={{
              from: formatStringToDate(studyDate.fromValue),
              to: formatStringToDate(studyDate.toValue),
            }}
            onSelect={(triggerDate, selected) => {
              if (week && selected) {
                setStudyDate({
                  fromValue: dateToFormatString(selected),
                  toValue: dateToFormatString(
                    setStudyEndDate(selected, Number(week))
                  ),
                });
                setOpen(false);
              } else {
                setStudyDate({
                  fromValue: dateToFormatString(triggerDate?.from),
                  toValue: dateToFormatString(triggerDate?.to),
                });
              }
            }}
          />
        </div>
      )}

      <Text color="primary" typo="body3">
        * 휴강 주차 포함
      </Text>
    </Flex>
  );
};

export default StudyStartDatePick;

const StudyDatePickerStyle = css({
  width: "100%",
  maxWidth: "358px",
  border: "1px solid",
  borderRadius: "sm",
  borderColor: "outline",
  height: "44px",
  padding: "8px 12px",
  caretColor: "transparent",
  cursor: "pointer",
  _placeholder: {
    color: "outline",
  },
  _focus: {
    outline: "none",
  },
});
