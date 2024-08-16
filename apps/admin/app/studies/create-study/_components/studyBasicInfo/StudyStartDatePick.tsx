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

  const week = getValues("totalWeek");

  useClickOutside(datepickerRef, () => {
    setOpen(false);
  });

  useEffect(() => {
    if (studyDate.fromValue) {
      setInputValue(`${studyDate.fromValue} ~ ${studyDate.toValue}`);
      setValue("startDate", studyDate.fromValue);
    } else {
      setInputValue("");
    }
  }, [studyDate, setValue]);

  return (
    <Flex direction="column" position="relative">
      <Text color="sub" style={{ marginBottom: "8px" }} typo="label2">
        스터디 진행 기간
      </Text>
      <Controller
        control={control}
        name="startDate"
        render={() => (
          <Flex direction="column" gap="xs" position="relative">
            <input
              className={StudyDatePickerStyle}
              placeholder="YYYY-MM-DD ~ YYYY-MM-DD"
              value={inputValue}
              onClick={() => {
                setOpen(!isOpen);
              }}
            />
            <Text color="primary" typo="body3">
              * 휴강 주차 포함
            </Text>
          </Flex>
        )}
        rules={{
          required: true,
        }}
      />

      {isOpen && (
        <div ref={datepickerRef}>
          <DayPicker
            mode="range"
            weekStartsOn={1}
            selected={{
              from: formatStringToDate(studyDate.fromValue),
              to: formatStringToDate(studyDate.toValue),
            }}
            style={{
              position: "absolute",
              top: "100px",
              zIndex: 99,
              backgroundColor: "white",
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
