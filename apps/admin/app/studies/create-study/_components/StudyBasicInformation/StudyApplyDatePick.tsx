import "react-day-picker/style.css";

import { cva } from "@styled-system/css";
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
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { control, setValue, watch } = useFormContext();
  const [inputValue, setInputValue] = useState("");
  const studyStartDate = formatStringToDate(watch("startDate") || "");
  const studyStartDateYearLater = new Date(studyStartDate);
  studyStartDateYearLater.setFullYear(studyStartDate.getFullYear() + 1);

  useClickOutside(datepickerRef, () => {
    setIsOpen(false);
  });

  const handleStudyDateSelect = (triggerDate: DateRange | undefined) => {
    if (!triggerDate) return;
    const startDateString = dateToFormatString(triggerDate.from!!);
    const endDateString = dateToFormatString(triggerDate.to!!);
    setStudyDate({
      fromValue: startDateString,
      toValue: endDateString,
    });
    setInputValue(`${startDateString} ~ ${endDateString}`);
    setValue("applicationStartDate", startDateString, { shouldValidate: true });
    setValue("applicationEndDate", endDateString, { shouldValidate: true });
  };

  const disableDateList = [
    {
      from: new Date(0),
      to: yesterday,
    },
    ...(watch("startDate")
      ? [
          {
            from: studyStartDate,
            to: studyStartDateYearLater,
          },
        ]
      : []),
  ];
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
            placeholder="YYYY-MM-DD ~ YYYY-MM-DD"
            value={inputValue}
            className={StudyDatePickerStyle({
              type: inputValue ? "selected" : "unSelected",
            })}
            onClick={() => {
              setIsOpen(!isOpen);
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
            disabled={disableDateList}
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
              handleStudyDateSelect(triggerDate);
            }}
          />
        </div>
      )}
    </Flex>
  );
};

export default StudyApplyDatePick;

const StudyDatePickerStyle = cva({
  base: {
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
  },
  variants: {
    type: {
      selected: {
        borderColor: "sub",
      },
      unSelected: {
        borderColor: "outline",
      },
    },
  },
});
