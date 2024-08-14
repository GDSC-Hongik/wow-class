import "react-day-picker/style.css";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { Controller, useFormContext } from "react-hook-form";
import {
  dateToFormatString,
  formatStringToDate,
  setStudyEndDate,
} from "utils/formatDate";

const StudyStartDatePick = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const { control, getValues, setValue } = useFormContext();
  const [studyDate, setStudyDate] = useState({
    fromValue: "",
    toValue: "",
  });
  const [inputValue, setInputValue] = useState("");
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
