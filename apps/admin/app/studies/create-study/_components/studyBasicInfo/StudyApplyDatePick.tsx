import "react-day-picker/style.css";

import { css } from "@styled-system/css";
import { Flex } from "@styled-system/jsx";
import { Text } from "@wow-class/ui";
import { dateToFormatString, formatStringToDate } from "@wow-class/utils";
import useClickOutside from "hooks/useClickOutSide";
import { useRef, useState } from "react";
import type { DateRange } from "react-day-picker";
import { DayPicker } from "react-day-picker";
import { Controller, useFormContext } from "react-hook-form";

const StudyApplyDatePick = () => {
  const [studyDate, setStudyDate] = useState({
    fromValue: "",
    toValue: "",
  });
  const datepickerRef = useRef(null);
  const [isOpen, setOpen] = useState<boolean>(false);
  const { control, setValue } = useFormContext();
  const [inputValue, setInputValue] = useState("");

  useClickOutside(datepickerRef, () => {
    setOpen(false);
  });

  const setStudyDateHandler = (triggerDate: DateRange | undefined) => {
    if (!triggerDate) return;
    const startDateString = dateToFormatString(triggerDate.from);
    const endDateString = dateToFormatString(triggerDate.to);
    setStudyDate({
      fromValue: startDateString,
      toValue: endDateString,
    });
    setInputValue(`${startDateString} ~ ${endDateString}`);
    setValue("applicationStartDate", startDateString);
    setValue("applicationEndDate", endDateString);
  };

  return (
    <Flex direction="column" gap="xs" height="128px" position="relative">
      <Text color="sub" typo="label2">
        스터디 신청 기간
      </Text>
      <Controller
        control={control}
        name="applicationStartDate"
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
            onSelect={(triggerDate) => {
              setStudyDateHandler(triggerDate);
            }}
          />
        </div>
      )}
    </Flex>
  );
};

export default StudyApplyDatePick;

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
